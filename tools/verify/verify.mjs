// Checks every original URL on the new site and screenshots key pages for comparison.
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const NEW = process.env.SITE || "https://taxswami.vercel.app";
const OLD = "https://dedicated-cabbage-948602.framer.app";
const OUT = process.env.OUT || "verify-out";
await mkdir(`${OUT}/shots`, { recursive: true });

const sm = await (await fetch(OLD + "/sitemap.xml")).text();
const paths = ["/", ...[...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)];

const report = [];
for (const p of [...new Set(paths)]) {
  const r = await fetch(NEW + p, { redirect: "manual" });
  report.push(`${r.status} ${p}`);
}
report.push(`${(await fetch(NEW + "/does-not-exist")).status} /does-not-exist (expect 404)`);

const browser = await chromium.launch();
const key = ["/", "/about", "/contact", "/business-registration", "/business-registration/private-limited-company-registration", "/licenses/import-export-code-(iec)", "/income-tax-calculater", "/gst-calculator"];
const errors = [];
for (const [label, vp] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(`${label} ${page.url()} ${e.message}`));
  page.on("console", (m) => m.type() === "error" && errors.push(`${label} ${page.url()} console: ${m.text()}`));
  for (const p of key) {
    await page.goto(NEW + p, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const slug = p === "/" ? "home" : p.slice(1).replace(/\//g, "__");
    await page.screenshot({ path: `${OUT}/shots/${slug}.${label}.jpg`, fullPage: true, type: "jpeg", quality: 55 });
  }
  await ctx.close();
}

// Interaction checks
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(NEW + "/income-tax-calculater", { waitUntil: "networkidle" });
const it = await page.locator("text=Old Regime").locator("..").innerText();
report.push(`income tax default (12L salary): ${it.replace(/\n/g, " ")}`);
await page.goto(NEW + "/gst-calculator", { waitUntil: "networkidle" });
report.push(`gst default: ${(await page.locator("text=Total including GST").locator("..").innerText()).replace(/\n/g, " ")}`);
await page.goto(NEW + "/", { waitUntil: "networkidle" });
await page.hover("text=Services >> nth=0");
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/shots/menu-services.desktop.jpg`, type: "jpeg", quality: 55 });
await browser.close();

await writeFile(`${OUT}/report.txt`, report.join("\n") + "\n\nERRORS:\n" + (errors.join("\n") || "none") + "\n");
console.log(report.join("\n"));
console.log("errors:", errors.length);

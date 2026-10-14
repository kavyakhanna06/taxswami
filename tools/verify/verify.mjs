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

// Interaction checks (each guarded so one failure doesn't lose the rest)
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const check = async (name, fn) => {
  try { report.push(`${name}: ${await fn()}`); } catch (e) { report.push(`${name}: FAILED ${e.message.split("\n")[0]}`); }
};
await check("income tax default (12L salary)", async () => {
  await page.goto(NEW + "/income-tax-calculater", { waitUntil: "networkidle" });
  return (await page.getByText("Old vs New Regime", { exact: true }).locator("..").innerText()).replace(/\n/g, " ");
});
await check("gst default", async () => {
  await page.goto(NEW + "/gst-calculator", { waitUntil: "networkidle" });
  return (await page.getByText("Total including GST", { exact: true }).locator("..").innerText()).replace(/\n/g, " ");
});
await check("services menu", async () => {
  await page.goto(NEW + "/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Services" }).hover();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/shots/menu-services.desktop.jpg`, type: "jpeg", quality: 55 });
  return "opened";
});
await check("contact form fallback", async () => {
  await page.goto(NEW + "/contact", { waitUntil: "networkidle" });
  const res = await page.request.post(NEW + "/api/contact", { data: { name: "Test", email: "test@example.com" } });
  return `api status ${res.status()}`;
});
await browser.close();

await writeFile(`${OUT}/report.txt`, report.join("\n") + "\n\nERRORS:\n" + (errors.join("\n") || "none") + "\n");
console.log(report.join("\n"));
console.log("errors:", errors.length);

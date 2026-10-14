// Runs in the Vercel sandbox. Pulls every page of the Framer site:
// raw HTML, a structured DOM dump (text, styles, images, links), full-page screenshots
// at desktop and mobile widths, and every image the pages use.
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ORIGIN = "https://dedicated-cabbage-948602.framer.app";
const OUT = process.env.OUT || "capture-out";
await mkdir(join(OUT, "html"), { recursive: true });
await mkdir(join(OUT, "dom"), { recursive: true });
await mkdir(join(OUT, "shots"), { recursive: true });
await mkdir(join(OUT, "img"), { recursive: true });

const sm = await (await fetch(ORIGIN + "/sitemap.xml")).text();
const paths = ["/", ...[...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)];
const pages = [...new Set(paths)];
const slug = (p) => (p === "/" ? "home" : p.replace(/^\/|\/$/g, "").replace(/\//g, "__"));

const imgUrls = new Set();

async function autoScroll(page) {
  await page.evaluate(async () => {
    const step = 500;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 600));
  });
}

// Walk the rendered DOM and record every visible leaf-ish element with its styles.
function dumpDom() {
  const out = [];
  const seenImg = new Set();
  const rgb = (c) => c;
  const vis = (el, cs) => cs.display !== "none" && cs.visibility !== "hidden" && el.getBoundingClientRect().width > 0;
  const walk = (el, depth) => {
    const cs = getComputedStyle(el);
    if (cs.display === "none") return;
    if (!vis(el, cs)) { for (const c of el.children) walk(c, depth + 1); return; }
    const r = el.getBoundingClientRect();
    const box = [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)];
    const directText = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
    const node = { tag: el.tagName.toLowerCase(), depth, box };
    if (el.getAttribute("data-framer-name")) node.name = el.getAttribute("data-framer-name");
    if (directText) {
      node.text = directText;
      Object.assign(node, { font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight, ls: cs.letterSpacing, color: rgb(cs.color), align: cs.textAlign, transform: cs.textTransform });
    }
    if (cs.backgroundColor !== "rgba(0, 0, 0, 0)") node.bg = cs.backgroundColor;
    if (cs.backgroundImage !== "none") node.bgImage = cs.backgroundImage.slice(0, 300);
    if (cs.borderRadius !== "0px") node.radius = cs.borderRadius;
    if (cs.borderTopWidth !== "0px" && cs.borderTopStyle !== "none") node.border = `${cs.borderTopWidth} ${cs.borderTopStyle} ${cs.borderTopColor}`;
    if (cs.boxShadow !== "none") node.shadow = cs.boxShadow;
    if (el.tagName === "A") node.href = el.getAttribute("href");
    if (el.tagName === "IMG") { node.src = el.currentSrc || el.src; node.alt = el.alt; node.fit = cs.objectFit; seenImg.add(node.src); }
    if (el.tagName === "svg") { node.svg = el.outerHTML.length < 4000 ? el.outerHTML : "[large svg]"; out.push(node); return; }
    if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(el.tagName)) {
      node.input = { type: el.type, name: el.name, placeholder: el.placeholder, value: el.value, options: el.tagName === "SELECT" ? [...el.options].map((o) => o.text) : undefined };
    }
    if (el.tagName === "FORM") node.form = { action: el.action, method: el.method };
    if (el.tagName === "IFRAME") node.iframe = el.src;
    out.push(node);
    for (const c of el.children) walk(c, depth + 1);
  };
  walk(document.body, 0);
  return { title: document.title, meta: document.querySelector('meta[name="description"]')?.content, height: document.body.scrollHeight, nodes: out, imgs: [...seenImg] };
}

const browser = await chromium.launch();
for (const [label, vp] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    const s = slug(p);
    try {
      const resp = await page.goto(ORIGIN + p, { waitUntil: "networkidle", timeout: 60000 });
      if (label === "desktop" && !process.env.DOM_ONLY) await writeFile(join(OUT, "html", s + ".html"), await resp.text());
      await autoScroll(page);
      await page.waitForTimeout(800);
      const dom = await page.evaluate(dumpDom);
      dom.imgs.forEach((u) => imgUrls.add(u));
      await writeFile(join(OUT, "dom", `${s}.${label}.json`), JSON.stringify(dom));
      if (!process.env.DOM_ONLY) await page.screenshot({ path: join(OUT, "shots", `${s}.${label}.jpg`), fullPage: true, type: "jpeg", quality: 55 });
      console.log(label, p, dom.height);
    } catch (e) {
      console.log("FAIL", label, p, e.message);
    }
  }
  await ctx.close();
}
await browser.close();

// Download every image at original resolution (query string dropped -> full size).
const manifest = {};
for (const u of imgUrls) {
  try {
    const url = new URL(u);
    if (!url.hostname.endsWith("framerusercontent.com")) continue;
    const key = url.origin + url.pathname;
    if (manifest[key]) continue;
    const r = await fetch(key);
    if (!r.ok) continue;
    const buf = Buffer.from(await r.arrayBuffer());
    const ext = (url.pathname.match(/\.[a-z0-9]+$/i) || [".bin"])[0];
    const name = createHash("sha1").update(key).digest("hex").slice(0, 12) + ext;
    await writeFile(join(OUT, "img", name), buf);
    manifest[key] = name;
  } catch (e) { console.log("img fail", u, e.message); }
}
await writeFile(join(OUT, "img", "manifest.json"), JSON.stringify(manifest, null, 1));
console.log("pages", pages.length, "images", Object.keys(manifest).length);

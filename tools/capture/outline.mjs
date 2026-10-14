// Runs in the sandbox: turns DOM dumps into a compact per-page outline
// (text with style, images, links, colored blocks), with header/footer split out once.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";

const dir = (process.env.OUT || "capture-out") + "/dom";
const files = readdirSync(dir).filter((f) => f.endsWith(".desktop.json"));
const short = (c) => {
  const m = c && c.match(/rgba?\(([^)]+)\)/);
  if (!m) return c;
  const [r, g, b, a] = m[1].split(",").map((x) => parseFloat(x));
  const hex = "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return a !== undefined && a < 1 ? `${hex}/${a}` : hex;
};
const fam = (f) => (f || "").split(",")[0].replace(/["']/g, "").trim();

function lines(dom) {
  const out = [];
  for (const n of dom.nodes) {
    const [x, y, w, h] = n.box;
    const pos = `@${x},${y} ${w}x${h}`;
    if (n.text) out.push(`${y}|T ${n.tag} ${fam(n.font)} ${n.size}/${n.weight} ${short(n.color)}${n.align !== "start" ? " " + n.align : ""}${n.transform !== "none" ? " " + n.transform : ""} ${pos}${n.href ? " ->" + n.href : ""} :: ${n.text.slice(0, 400)}`);
    else if (n.tag === "img") out.push(`${y}|I ${n.src?.split("/").pop()?.split("?")[0]} ${pos} fit=${n.fit} alt=${n.alt || ""}`);
    else if (n.tag === "a") out.push(`${y}|A ${n.href} ${pos}`);
    else if (n.input) out.push(`${y}|F ${n.tag} ${JSON.stringify(n.input)} ${pos}`);
    else if (n.form) out.push(`${y}|FORM ${JSON.stringify(n.form)}`);
    else if (n.iframe) out.push(`${y}|IFRAME ${n.iframe}`);
    else if (n.svg && w <= 64) out.push(`${y}|S ${pos}`);
    if ((n.bg || n.bgImage || n.border || n.shadow) && w >= 80 && h >= 30) {
      out.push(`${y}|B ${pos}${n.name ? " [" + n.name + "]" : ""}${n.bg ? " bg=" + short(n.bg) : ""}${n.bgImage ? " bgi=" + n.bgImage.slice(0, 120) : ""}${n.radius ? " r=" + n.radius : ""}${n.border ? " bd=" + n.border.replace(/rgba?\([^)]+\)/, (c) => short(c)) : ""}${n.shadow ? " sh" : ""}`);
    }
  }
  return out.map((l) => l.replace(/^\d+\|/, ""));
}

const all = {};
for (const f of files) {
  const dom = JSON.parse(readFileSync(`${dir}/${f}`, "utf8"));
  all[f.replace(".desktop.json", "")] = { title: dom.title, meta: dom.meta, h: dom.height, lines: lines(dom) };
}
// Header = common prefix of all pages, footer = common suffix.
const keys = Object.keys(all);
const L = keys.map((k) => all[k].lines);
const strip = (s) => s.replace(/@\d+,\d+ /, "@ ");
let pre = 0;
while (L.every((l) => l[pre] && strip(l[pre]) === strip(L[0][pre]))) pre++;
let suf = 0;
while (L.every((l) => l[l.length - 1 - suf] && strip(l[l.length - 1 - suf]) === strip(L[0][L[0].length - 1 - suf]))) suf++;
let txt = `## HEADER (common, ${pre} lines)\n` + L[0].slice(0, pre).join("\n") + `\n\n## FOOTER (common, ${suf} lines)\n` + L[0].slice(L[0].length - suf).join("\n") + "\n";
for (const k of keys) {
  const p = all[k];
  txt += `\n\n## PAGE ${k} | ${p.title} | h=${p.h}\nmeta: ${p.meta}\n` + p.lines.slice(pre, p.lines.length - suf).join("\n");
}
writeFileSync((process.env.OUT || "capture-out") + "/outline.txt", txt);
console.log(txt.length);

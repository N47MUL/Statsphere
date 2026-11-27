/* ============ StatSphere VISUAL ENGINE 2 ============
   Declarative graphs, charts, diagrams and cartoon scenes for Topic Explanations.
   A visual is a plain object, e.g.  {t:"bar", cats:["A","B"], v:[3,5], yl:"count", cap:"caption"}
   Types: plot, bar, hist, scatter, box, pie, flow, tree, venn, table, steps, num, scene.
   Strings starting with "=" are formulas of the slider values p (e.g. "=p.a*2") and of x inside fns.
   Everything is inline SVG (self-made clip art, no external images, works offline, follows the light/dark theme).
*/
(function () {
if (window.SSV) return;
const SSV = window.SSV = {};

/* ---------- styles ---------- */
const st = document.createElement("style");
st.textContent = `
.vis-fig .vis-title{display:block;font-weight:700;color:var(--text);margin:0 0 4px;font-size:.95rem}
.vis-fig svg text.t{fill:var(--text)}
.vis-fig svg text.b{font-weight:700}
.vis-fig svg text.s{font-size:9.5px}
.vis-fig svg text.l{font-size:12.5px}
.vis-fig svg .sk{stroke:var(--text);stroke-width:1.2;stroke-linejoin:round;stroke-linecap:round}
.vis-fig svg .bx{fill:var(--card);stroke:var(--line);stroke-width:1.3}
.vis-fig svg .bx1{fill:var(--acc);fill-opacity:.18;stroke:var(--acc);stroke-width:1.4}
.vis-fig svg .bx2{fill:var(--acc2);fill-opacity:.18;stroke:var(--acc2);stroke-width:1.4}
.vis-fig svg .bx3{fill:var(--sec);fill-opacity:.18;stroke:var(--sec);stroke-width:1.4}
.vis-fig svg .bx4{fill:var(--bad);fill-opacity:.18;stroke:var(--bad);stroke-width:1.4}
.vis-fig svg .ar{stroke:var(--mut);stroke-width:1.6;fill:none}
.vis-fig svg .arh{fill:var(--mut)}
.vis-fig svg .bar1{fill:var(--acc);fill-opacity:.75}.vis-fig svg .bar2{fill:var(--acc2);fill-opacity:.8}.vis-fig svg .bar3{fill:var(--sec);fill-opacity:.8}.vis-fig svg .bar4{fill:var(--bad);fill-opacity:.8}
.vis-fig svg .bar5{fill:var(--ok);fill-opacity:.8}
.vis-fig svg .grow{transform-box:fill-box;transform-origin:bottom;animation:svgrow .7s ease backwards}
@keyframes svgrow{from{transform:scaleY(0)}}
.vis-fig svg .fade{animation:svfade .8s ease backwards}
@keyframes svfade{from{opacity:0}}
.vis-fig svg .bob{animation:svbob 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes svbob{50%{transform:translateY(-3px)}}
.vis-steps{min-height:70px;padding:8px 12px;border-left:3px solid var(--acc);background:var(--card);border-radius:6px;font-size:.92rem;line-height:1.55}
.vis-steps .no{display:inline-block;background:var(--acc);color:#fff;border-radius:50%;width:22px;height:22px;text-align:center;font-weight:700;font-size:.8rem;line-height:22px;margin-right:8px}
.vis-dots{display:flex;gap:5px;justify-content:center;margin-top:6px}.vis-dots i{width:8px;height:8px;border-radius:50%;background:var(--line)}.vis-dots i.on{background:var(--acc)}
.vis-fig table.vt{width:auto;display:table;margin:6px auto}
.vis-fig table.vt td.hi{background:var(--selbg);color:var(--text);font-weight:700}
.vis-fig table.vt th{background:var(--deep);color:var(--acc)}
`;
document.head.appendChild(st);

/* ---------- math helpers available inside formulas ---------- */
const H = Object.create(Math);
const lg = x => { if (x < .5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - lg(1 - x); x -= 1; const g = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7]; let a = g[0]; const t = x + 7.5; for (let i = 1; i < 9; i++) a += g[i] / (x + i); return .5 * Math.log(2 * Math.PI) + (x + .5) * Math.log(t) - t + Math.log(a); };
const erf = x => { const s = x < 0 ? -1 : 1; x = Math.abs(x); const t = 1 / (1 + .3275911 * x); return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - .284496736) * t + .254829592) * t * Math.exp(-x * x)); };
H.Phi = x => .5 * (1 + erf(x / Math.SQRT2));
H.phi = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
H.npdf = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
H.lg = lg;
H.gpdf = (x, k, th) => x <= 0 ? 0 : Math.exp((k - 1) * Math.log(x) - x / th - lg(k) - k * Math.log(th));
H.bpdf = (x, a, b) => x <= 0 || x >= 1 ? 0 : Math.exp(lg(a + b) - lg(a) - lg(b) + (a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x));
H.chipdf = (x, k) => H.gpdf(x, k / 2, 2);
H.tpdf = (x, v) => Math.exp(lg((v + 1) / 2) - lg(v / 2)) / Math.sqrt(v * Math.PI) * Math.pow(1 + x * x / v, -(v + 1) / 2);
H.fpdf = (x, a, b) => x <= 0 ? 0 : Math.exp(lg((a + b) / 2) - lg(a / 2) - lg(b / 2) + (a / 2) * Math.log(a / b) + (a / 2 - 1) * Math.log(x) - ((a + b) / 2) * Math.log(1 + a * x / b));
H.fact = n => Math.exp(lg(n + 1));
H.choose = (n, k) => k < 0 || k > n ? 0 : Math.round(Math.exp(lg(n + 1) - lg(k + 1) - lg(n - k + 1)));
H.binom = (k, n, q) => H.choose(n, k) * Math.pow(q, k) * Math.pow(1 - q, n - k);
H.pois = (k, l) => Math.exp(k * Math.log(l) - l - lg(k + 1));
H.sig = x => 1 / (1 + Math.exp(-x));
const fcache = {};
const compile = src => fcache[src] || (fcache[src] = new Function("x", "p", "H", "with(H){return (" + src + ")}"));
const ev = (v, p) => (typeof v === "string" && v[0] === "=") ? compile(v.slice(1))(0, p, H) : v;
const fnOf = (f, p) => typeof f === "function" ? f : (x => { try { return compile(f)(x, p, H); } catch (e) { return NaN; } });
const tmpl = (s, p) => String(s).replace(/\{([^{}]+)\}/g, (m, e) => { try { const v = compile(e)(0, p, H); return typeof v === "number" ? String(+v.toFixed(3)) : v; } catch (er) { return m; } });
const fm = v => { const a = Math.abs(v); return String(+(a < 1e-9 ? 0 : v).toFixed(a >= 100 ? 0 : a >= 10 ? 1 : 2)); };
const rng = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const rnorm = r => () => { let u = 0; while (!u) u = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); };
const nice = (a, b, n = 5) => { const r = (b - a) / n, p = Math.pow(10, Math.floor(Math.log10(r))), m = r / p, s = (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p, t = []; for (let v = Math.ceil(a / s - 1e-9) * s; v <= b + 1e-9; v += s) t.push(+v.toFixed(10)); return t; };
const W = 480, HH = 260;
const q = (arr, pr) => { const s = arr.slice().sort((a, b) => a - b), i = (s.length - 1) * pr, lo = Math.floor(i); return s[lo] + (s[Math.min(lo + 1, s.length - 1)] - s[lo]) * (i - lo); };
const wrap = (s, n) => { const o = []; String(s).split("|").forEach(seg => { let line = ""; seg.split(" ").forEach(w => { if ((line + " " + w).trim().length > n && line) { o.push(line); line = w; } else line = (line + " " + w).trim(); }); o.push(line); }); return o; };
const txt = (x, y, t, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" class="${o.c || ""}"${o.r ? ` transform="rotate(${o.r} ${x} ${y})"` : ""}>${t}</text>`;
const lines = (x, y, arr, lh, o) => arr.map((t, i) => txt(x, y + i * lh, t, o)).join("");

/* ---------- coordinate frame ---------- */
function frame(x0, x1, y0, y1, o = {}) {
  const L = o.L || 42, R = o.R || 14, T = o.T || 14, B = o.B || 32, w = o.w || W, h = o.h || HH, pw = w - L - R, ph = h - T - B, id = "sv" + (++SSV.n || (SSV.n = 1));
  const F = { x0, x1, y0, y1, L, T, pw, ph, id, X: v => L + (v - x0) / (x1 - x0) * pw, Y: v => T + ph - (v - y0) / (y1 - y0) * ph };
  F.clip = `<clipPath id="${id}"><rect x="${L}" y="${T - 2}" width="${pw}" height="${ph + 4}"/></clipPath>`;
  F.axes = (xt, yt, xl, yl, o2 = {}) => {
    let s = "";
    (xt || nice(x0, x1)).forEach(v => { s += `<line class="v-gr" x1="${F.X(v)}" x2="${F.X(v)}" y1="${F.Y(y0)}" y2="${F.Y(y1)}"/>` + txt(F.X(v), F.Y(y0) + 13, o2.xf ? o2.xf(v) : fm(v)); });
    (yt || nice(y0, y1)).forEach(v => { if (!o2.noy) s += `<line class="v-gr" y1="${F.Y(v)}" y2="${F.Y(v)}" x1="${F.X(x0)}" x2="${F.X(x1)}"/>` + txt(F.X(x0) - 5, F.Y(v) + 3.5, o2.yf ? o2.yf(v) : fm(v), { a: "end" }); });
    s += `<line class="v-ax" x1="${F.X(x0)}" y1="${F.Y(y0)}" x2="${F.X(x1)}" y2="${F.Y(y0)}"/><line class="v-ax" x1="${F.X(x0)}" y1="${F.Y(y0)}" x2="${F.X(x0)}" y2="${F.Y(y1)}"/>`;
    if (xl) s += txt(F.X((x0 + x1) / 2), h - 5, xl, { c: "t" });
    if (yl) s += txt(11, F.Y((y0 + y1) / 2), yl, { c: "t", r: -90 });
    return s;
  };
  F.g = c => `<g clip-path="url(#${id})">${c}</g>`;
  F.path = (f, a, z, cls, n = 200) => { let d = ""; for (let i = 0; i <= n; i++) { const x = a + (z - a) * i / n, y = f(x); if (isFinite(y)) d += (d ? "L" : "M") + F.X(x).toFixed(1) + " " + F.Y(y).toFixed(1); } return d ? `<path class="${cls}" d="${d}"/>` : ""; };
  F.area = (f, a, z, cls, n = 160) => { let d = ""; for (let i = 0; i <= n; i++) { const x = a + (z - a) * i / n, y = f(x); if (isFinite(y)) d += (d ? "L" : "M") + F.X(x).toFixed(1) + " " + F.Y(y).toFixed(1); } return d ? `<path class="${cls}" d="${d}L${F.X(z).toFixed(1)} ${F.Y(Math.max(0, y0)).toFixed(1)}L${F.X(a).toFixed(1)} ${F.Y(Math.max(0, y0)).toFixed(1)}Z"/>` : ""; };
  F.line = (a, b, c, d, cls) => `<line class="${cls}" x1="${F.X(a).toFixed(1)}" y1="${F.Y(b).toFixed(1)}" x2="${F.X(c).toFixed(1)}" y2="${F.Y(d).toFixed(1)}"/>`;
  F.dot = (x, y, cls, r = 4) => `<circle class="${cls}" cx="${F.X(x).toFixed(1)}" cy="${F.Y(y).toFixed(1)}" r="${r}"/>`;
  F.text = (x, y, t, o2) => txt(F.X(x).toFixed(1), F.Y(y).toFixed(1), t, o2);
  return F;
}

/* ---------- cartoon icons (self-made clip art, drawn around (0,0), about 44 units tall) ---------- */
const SK = "#f1c9a5", HAIR = "#3b2a20";
const person = (shirt, extra = "") => `<circle cy="-14" r="7.5" fill="${SK}" class="sk"/><path d="M-7.5 -18 Q0 -29 7.5 -18 Q0 -22 -7.5 -18Z" fill="${HAIR}"/><path d="M-12 18 L-12 -2 Q0 -8 12 -2 L12 18Z" style="fill:${shirt}" class="sk"/><circle cx="-2.6" cy="-14" r="1" fill="#222"/><circle cx="2.6" cy="-14" r="1" fill="#222"/><path d="M-2.5 -10.5 Q0 -8.5 2.5 -10.5" fill="none" stroke="#222" stroke-width="1"/>${extra}`;
const ICONS = {
  person: () => person("var(--sec)"),
  student: () => person("var(--acc)", `<path d="M-11 -22 L0 -29 L11 -22 L0 -17Z" fill="#222" class="sk"/><path d="M8 -22 L8 -14" stroke="var(--acc2)" stroke-width="1.6"/>`),
  teacher: () => person("var(--acc2)", `<circle cx="-3" cy="-14" r="3.2" fill="none" stroke="#222" stroke-width="1"/><circle cx="3" cy="-14" r="3.2" fill="none" stroke="#222" stroke-width="1"/>`),
  group: () => `<g transform="translate(-14 4) scale(.7)">${person("var(--sec)")}</g><g transform="translate(14 4) scale(.7)">${person("var(--acc2)")}</g><g transform="translate(0 0) scale(.85)">${person("var(--acc)")}</g>`,
  dice: () => `<rect x="-16" y="-16" width="32" height="32" rx="6" fill="#fff" class="sk"/>${[[-8, -8], [8, -8], [0, 0], [-8, 8], [8, 8]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#222"/>`).join("")}`,
  coin: () => `<circle r="16" fill="#f5c542" class="sk"/><circle r="11.5" fill="none" stroke="#b8860b" stroke-width="1.5"/><text y="5" text-anchor="middle" style="font-size:14px;font-weight:700;fill:#8a6508">H</text>`,
  cards: () => `<rect x="-18" y="-18" width="22" height="32" rx="3" fill="#fff" class="sk" transform="rotate(-12)"/><rect x="-4" y="-16" width="22" height="32" rx="3" fill="#fff" class="sk" transform="rotate(10)"/><text x="7" y="3" text-anchor="middle" transform="rotate(10)" style="font-size:16px;fill:#d33">♥</text>`,
  bag: () => `<path d="M-14 -4 Q-18 18 0 18 Q18 18 14 -4 Q8 -10 0 -10 Q-8 -10 -14 -4Z" style="fill:var(--acc2)" class="sk"/><path d="M-7 -10 Q0 -22 7 -10" fill="none" class="sk"/><circle cx="-5" cy="6" r="3.3" fill="#e5484d"/><circle cx="4" cy="3" r="3.3" fill="#f59e0b"/><circle cx="3" cy="11" r="3.3" fill="#e5484d"/>`,
  calc: () => `<rect x="-13" y="-18" width="26" height="36" rx="4" fill="#4a3f35" class="sk"/><rect x="-9" y="-14" width="18" height="8" rx="1.5" fill="#bde7d0"/>${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${-9 + c * 6.5}" y="${-2 + r * 6.5}" width="5" height="5" rx="1" fill="#f3ece0"/>`).join("")).join("")}`,
  book: () => `<path d="M-18 -12 L0 -8 L18 -12 L18 14 L0 18 L-18 14Z" style="fill:var(--sec)" class="sk"/><path d="M0 -8 L0 18" class="sk"/><path d="M-13 -5 L-4 -3 M-13 1 L-4 3 M4 -3 L13 -5 M4 3 L13 1" stroke="#fff" stroke-width="1.3"/>`,
  bulb: () => `<path d="M-9 8 Q-18 -4 -9 -14 Q0 -22 9 -14 Q18 -4 9 8Z" fill="#ffe066" class="sk"/><rect x="-6" y="8" width="12" height="7" rx="2" fill="#aaa" class="sk"/><path d="M-4 18 L4 18" class="sk"/><path d="M0 -26 L0 -30 M-18 -18 L-22 -22 M18 -18 L22 -22" class="sk"/>`,
  mag: () => `<circle cx="-4" cy="-4" r="11" fill="#fde8c8" fill-opacity=".7" class="sk"/><path d="M4 4 L16 16" stroke="#8b5a2b" stroke-width="5" stroke-linecap="round"/>`,
  chartup: () => `<rect x="-18" y="-18" width="36" height="34" rx="4" fill="#fff" class="sk"/><rect x="-12" y="2" width="6" height="10" style="fill:var(--sec)"/><rect x="-3" y="-4" width="6" height="16" style="fill:var(--acc)"/><rect x="6" y="-11" width="6" height="23" style="fill:var(--acc2)"/>`,
  factory: () => `<path d="M-20 16 L-20 -2 L-8 6 L-8 -2 L4 6 L4 -14 L12 -14 L12 16Z" fill="#9a8f82" class="sk"/><rect x="-16" y="8" width="4" height="4" fill="#ffe066"/><rect x="-2" y="8" width="4" height="4" fill="#ffe066"/><circle cx="8" cy="-20" r="4" fill="#ddd" fill-opacity=".8"/><circle cx="13" cy="-26" r="3" fill="#ddd" fill-opacity=".6"/>`,
  tree: () => `<rect x="-3" y="4" width="6" height="14" fill="#8b5a2b"/><circle cy="-6" r="15" fill="#3fa65b" class="sk"/><circle cx="-6" cy="-8" r="3" fill="#e5484d"/><circle cx="6" cy="-2" r="3" fill="#e5484d"/>`,
  house: () => `<path d="M-18 -2 L0 -18 L18 -2Z" fill="#c0504d" class="sk"/><rect x="-14" y="-2" width="28" height="20" fill="#f3e3c3" class="sk"/><rect x="-4" y="5" width="8" height="13" fill="#8b5a2b"/>`,
  warn: () => `<path d="M0 -18 L18 14 L-18 14Z" fill="#ffd23f" class="sk"/><path d="M0 -8 L0 4" stroke="#222" stroke-width="3" stroke-linecap="round"/><circle cy="9.5" r="1.8" fill="#222"/>`,
  check: () => `<circle r="16" fill="#2ecc8f" class="sk"/><path d="M-8 0 L-2 7 L9 -6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  cross: () => `<circle r="16" fill="#ff6b6b" class="sk"/><path d="M-7 -7 L7 7 M7 -7 L-7 7" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
  ques: () => `<circle r="16" style="fill:var(--sec)" class="sk"/><text y="8" text-anchor="middle" style="font-size:22px;font-weight:700;fill:#fff">?</text>`,
  clock: () => `<circle r="16" fill="#fff" class="sk"/><path d="M0 -10 L0 0 L8 4" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round"/>`,
  money: () => `<rect x="-20" y="-11" width="40" height="22" rx="3" fill="#8fd18f" class="sk"/><circle r="6" fill="#d6f5d6" class="sk"/><text y="3.5" text-anchor="middle" style="font-size:9px;font-weight:700;fill:#2b6a2b">৳</text>`,
  flask: () => `<path d="M-5 -18 L5 -18 L5 -6 L16 14 Q18 18 13 18 L-13 18 Q-18 18 -16 14 L-5 -6Z" fill="#fde8c8" fill-opacity=".8" class="sk"/><path d="M-12 8 L12 8 L15 14 L-15 14Z" fill="#7bd88f"/>`,
  pc: () => `<rect x="-18" y="-16" width="36" height="24" rx="3" fill="#4a3f35" class="sk"/><rect x="-14" y="-12" width="28" height="16" fill="#bde7d0"/><path d="M-6 8 L-9 16 L9 16 L6 8" fill="#9a8f82" class="sk"/>`,
  db: () => `<path d="M-14 -12 L-14 12 Q0 22 14 12 L14 -12" fill="#65a30d" class="sk"/><ellipse cy="-12" rx="14" ry="6" fill="#a3c76a" class="sk"/><path d="M-14 -2 Q0 8 14 -2 M-14 6 Q0 16 14 6" fill="none" stroke="#fff" stroke-opacity=".6"/>`,
  globe: () => `<circle r="16" fill="#d9a441" class="sk"/><path d="M-16 0 L16 0 M0 -16 Q-12 0 0 16 M0 -16 Q12 0 0 16" fill="none" stroke="#fff" stroke-opacity=".7"/><path d="M-9 -9 Q-3 -5 -8 2 Q-12 -2 -9 -9 M4 -2 Q12 -4 9 6 Q4 8 4 -2" fill="#6fcf97"/>`,
  target: () => `<circle r="17" fill="#fff" class="sk"/><circle r="11" fill="#e5484d"/><circle r="6" fill="#fff"/><circle r="2.5" fill="#e5484d"/><path d="M0 0 L16 -16" stroke="#222" stroke-width="2"/>`,
  scale: () => `<path d="M0 -16 L0 14 M-8 16 L8 16 M-18 -10 L18 -10" class="sk"/><path d="M-18 -10 L-24 2 L-12 2Z M18 -10 L12 2 L24 2Z" fill="var(--acc2)" class="sk"/>`,
  thermo: () => `<rect x="-4" y="-18" width="8" height="26" rx="4" fill="#fff" class="sk"/><circle cy="12" r="8" fill="#e5484d" class="sk"/><rect x="-1.5" y="-4" width="3" height="16" fill="#e5484d"/>`,
  car: () => `<path d="M-20 6 L-18 -2 L-8 -2 L-3 -10 L10 -10 L16 -2 L20 -2 L20 6Z" style="fill:var(--bad)" class="sk"/><circle cx="-11" cy="8" r="5" fill="#333"/><circle cx="11" cy="8" r="5" fill="#333"/>`,
  cart: () => `<path d="M-20 -14 L-14 -14 L-10 6 L12 6 L16 -8 L-12 -8" fill="none" class="sk"/><circle cx="-8" cy="12" r="3" fill="#333"/><circle cx="10" cy="12" r="3" fill="#333"/><path d="M-9 -6 L14 -6 L12 4 L-8 4Z" style="fill:var(--acc2)" fill-opacity=".6"/>`,
  heart: () => `<path d="M0 14 L-14 0 Q-20 -10 -10 -14 Q-3 -16 0 -8 Q3 -16 10 -14 Q20 -10 14 0Z" fill="#ff5c7a" class="sk"/>`,
  pill: () => `<g transform="rotate(-35)"><rect x="-16" y="-7" width="32" height="14" rx="7" fill="#fff" class="sk"/><path d="M0 -7 L0 7 M0 -7 A7 7 0 0 0 -16 0 A7 7 0 0 0 0 7Z" fill="#e5484d"/></g>`,
  syringe: () => `<g transform="rotate(-40)"><rect x="-14" y="-5" width="24" height="10" rx="2" fill="#fff" class="sk"/><rect x="-14" y="-3" width="14" height="6" fill="#7bd88f"/><path d="M10 0 L20 0 M-14 0 L-20 0 M-20 -6 L-20 6" class="sk"/></g>`,
  plot: () => `<path d="M-16 -14 L-16 14 L16 14" fill="none" class="sk"/><rect x="-12" y="-10" width="10" height="9" fill="#8b5a2b" fill-opacity=".5" class="sk"/><rect x="0" y="-10" width="10" height="9" fill="#3fa65b" fill-opacity=".6" class="sk"/><rect x="-12" y="2" width="10" height="9" fill="#3fa65b" fill-opacity=".6" class="sk"/><rect x="0" y="2" width="10" height="9" fill="#8b5a2b" fill-opacity=".5" class="sk"/>`,
  flag: () => `<path d="M-10 18 L-10 -18" class="sk"/><path d="M-10 -18 L14 -12 L-10 -4Z" fill="#e5484d" class="sk"/>`,
  lock: () => `<rect x="-12" y="-4" width="24" height="20" rx="3" fill="#f5c542" class="sk"/><path d="M-7 -4 L-7 -10 Q0 -20 7 -10 L7 -4" fill="none" class="sk"/>`,
  gear: () => `<circle r="9" fill="#9a8f82" class="sk"/><circle r="3.5" style="fill:var(--bg)"/>${[0, 45, 90, 135].map(a => `<rect x="-3" y="-15" width="6" height="30" fill="#9a8f82" class="sk" transform="rotate(${a})"/>`).join("")}<circle r="9" fill="#9a8f82"/><circle r="3.5" style="fill:var(--bg)"/>`,
  truck: () => `<rect x="-22" y="-12" width="26" height="20" fill="#f5c542" class="sk"/><path d="M4 -6 L14 -6 L20 2 L20 8 L4 8Z" fill="#fff" class="sk"/><circle cx="-12" cy="10" r="5" fill="#333"/><circle cx="12" cy="10" r="5" fill="#333"/>`,
  wheat: () => `<path d="M0 18 L0 -12" stroke="#b8860b" stroke-width="2"/>${[-10, -4, 2, 8].map(y => `<ellipse cx="-4" cy="${y}" rx="2.5" ry="5" fill="#f5c542" class="sk" transform="rotate(-30 -4 ${y})"/><ellipse cx="4" cy="${y}" rx="2.5" ry="5" fill="#f5c542" class="sk" transform="rotate(30 4 ${y})"/>`).join("")}`,
  baby: () => `<circle cy="-4" r="10" fill="${SK}" class="sk"/><circle cx="-3.5" cy="-5" r="1.2" fill="#222"/><circle cx="3.5" cy="-5" r="1.2" fill="#222"/><path d="M-3 0 Q0 3 3 0" fill="none" stroke="#222"/><path d="M-10 18 Q0 8 10 18Z" style="fill:var(--acc2)" class="sk"/><path d="M0 -14 Q4 -18 0 -20" fill="none" stroke="${HAIR}" stroke-width="2"/>`,
  phone: () => `<rect x="-9" y="-18" width="18" height="36" rx="4" fill="#4a3f35" class="sk"/><rect x="-6.5" y="-14" width="13" height="26" fill="#bde7d0"/>`,
  paper: () => `<path d="M-13 -18 L7 -18 L13 -12 L13 18 L-13 18Z" fill="#fff" class="sk"/><path d="M-8 -8 L8 -8 M-8 -2 L8 -2 M-8 4 L8 4 M-8 10 L3 10" stroke="#9a8f82" stroke-width="1.6"/>`,
  star: () => `<path d="M0 -17 L5 -5 L18 -5 L8 3 L12 16 L0 8 L-12 16 L-8 3 L-18 -5 L-5 -5Z" fill="#ffd23f" class="sk"/>`,
  sun: () => `<circle r="9" fill="#ffd23f" class="sk"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path d="M0 -13 L0 -19" class="sk" transform="rotate(${a})"/>`).join("")}`,
  cloud: () => `<path d="M-14 8 Q-20 8 -18 0 Q-16 -6 -9 -5 Q-6 -14 4 -12 Q12 -11 12 -3 Q20 -2 18 6 Q17 8 14 8Z" fill="#efe6d8" class="sk"/>`,
  arrowup: () => `<path d="M0 16 L0 -12 M-9 -3 L0 -14 L9 -3" fill="none" stroke="#2ecc8f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  arrowdown: () => `<path d="M0 -16 L0 12 M-9 3 L0 14 L9 3" fill="none" stroke="#ff6b6b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
};
SSV.icons = ICONS;
const icon = (n, x, y, s = 1, bob) => `<g transform="translate(${x} ${y}) scale(${s})"${bob ? ' class="bob"' : ""}>${(ICONS[n] || ICONS.ques)()}</g>`;
const bubble = (x, y, text, tail = "down") => {
  const ls = wrap(text, 26), w = Math.max(...ls.map(l => l.length)) * 5.4 + 16, h = ls.length * 13 + 9, x0 = x - w / 2;
  return `<g class="fade"><rect class="bx" x="${x0}" y="${y - h}" width="${w}" height="${h}" rx="8"/><path d="M${x - 5} ${y} L${x} ${y + 7} L${x + 5} ${y}Z" class="bx" style="stroke-width:0"/>${lines(x, y - h + 15, ls, 13, { c: "t s" })}</g>`;
};

/* ---------- figure shell ---------- */
function shell(spec) {
  const f = document.createElement("figure");
  f.className = "vis-fig"; f.style.margin = "14px 0";
  f.innerHTML = `${spec.title ? `<b class="vis-title">${spec.title}</b>` : ""}<div class="vis-ctl"></div><div class="vis-svg"></div><div class="vis-out"></div>${spec.cap ? `<figcaption>${spec.cap}</figcaption>` : ""}`;
  if (spec.mw) f.querySelector(".vis-svg").style.maxWidth = spec.mw + "px";
  return f;
}
function controls(fig, spec, redraw, P) {
  const ctl = fig.querySelector(".vis-ctl");
  (spec.sl || []).forEach(sp => {
    const l = document.createElement("label"), inp = document.createElement("input"), val = document.createElement("b");
    inp.type = "range"; inp.min = sp.min; inp.max = sp.max; inp.step = sp.step || 1; inp.value = sp.v; P[sp.k] = +sp.v; val.textContent = fm(+sp.v);
    inp.oninput = () => { P[sp.k] = +inp.value; val.textContent = fm(P[sp.k]); redraw(); };
    l.append(sp.l || sp.k, inp, val); ctl.appendChild(l);
    if (sp.play) {
      const b = document.createElement("button"); let t = null; b.textContent = "▶ Play";
      const stop = () => { clearInterval(t); t = null; b.textContent = "▶ Play"; };
      b.onclick = () => { if (t) return stop(); b.textContent = "❚❚ Stop"; t = setInterval(() => { if (!fig.isConnected || fig.offsetParent === null) return stop(); let v = +inp.value + (+sp.step || 1); if (v > +sp.max) v = +sp.min; inp.value = v; inp.oninput(); }, sp.ms || 160); };
      ctl.appendChild(b);
    }
  });
  (spec.sel || []).forEach(sp => {
    const l = document.createElement("label"), se = document.createElement("select");
    se.innerHTML = sp.o.map((o, i) => `<option value="${i}">${o}</option>`).join(""); se.value = sp.v || 0; P[sp.k] = +se.value;
    se.onchange = () => { P[sp.k] = +se.value; redraw(); };
    l.append(sp.l || "", se); ctl.appendChild(l);
  });
  (spec.btn || []).forEach(sp => { const b = document.createElement("button"); b.textContent = sp.l; b.onclick = () => { P[sp.k] = (P[sp.k] || 0) + 1; redraw(); }; ctl.appendChild(b); });
}
const svgWrap = (body, w = W, h = HH) => `<svg viewBox="0 0 ${w} ${h}" role="img">${body}</svg>`;

/* ---------- visual types ---------- */
const T = {};

/* plot: functions, points, vertical/horizontal guides, shaded areas, segments, labels */
T.plot = (spec, p) => {
  const X = ev(spec.x, p), Y = ev(spec.y, p), x0 = ev(X[0], p), x1 = ev(X[1], p), y0 = ev(Y[0], p), y1 = ev(Y[1], p);
  const F = frame(x0, x1, y0, y1, spec.fr);
  let o = F.clip + F.axes(spec.xt, spec.yt, spec.xl, spec.yl);
  let inner = "";
  (spec.fns || []).forEach((fn, i) => {
    const f = fnOf(fn.f, p), c = ev(fn.c, p) || i + 1, a = ev(fn.from, p), z = ev(fn.to, p);
    if (fn.fill) inner += F.area(f, a != null ? a : x0, z != null ? z : x1, "v-a" + c);
    inner += F.path(f, ev(fn.a, p) != null ? ev(fn.a, p) : x0, ev(fn.b, p) != null ? ev(fn.b, p) : x1, "v-c" + c + (fn.d ? " v-dash" : ""), fn.n || 220);
  });
  (spec.seg || []).forEach(s => { inner += F.line(ev(s[0], p), ev(s[1], p), ev(s[2], p), ev(s[3], p), "v-c" + (s[4] || "m") + (s[5] ? " v-dash" : "")); });
  (spec.vl || []).forEach(v => { const xv = ev(v[0], p); inner += F.line(xv, y0, xv, y1, "v-cm v-dash"); });
  (spec.hl || []).forEach(v => { const yv = ev(v[0], p); inner += F.line(x0, yv, x1, yv, "v-cm v-dash"); });
  (spec.pts || []).forEach(pt => { inner += F.dot(ev(pt[0], p), ev(pt[1], p), "v-s" + (ev(pt[3], p) || 1), 4.5); });
  o += F.g(inner);
  (spec.vl || []).forEach(v => { if (v[1]) o += F.text(ev(v[0], p), y1 - (v[2] || 0) * (y1 - y0) * .075, tmpl(v[1], p), { a: "middle", c: "t s" }); });
  (spec.hl || []).forEach(v => { if (v[1]) o += F.text(x1, ev(v[0], p), tmpl(v[1], p), { a: "end", c: "t s" }); });
  (spec.pts || []).forEach(pt => { if (pt[2]) o += `<text class="t s" x="${F.X(ev(pt[0], p)) + 7}" y="${F.Y(ev(pt[1], p)) - 6}">${tmpl(pt[2], p)}</text>`; });
  (spec.fns || []).forEach((fn, i) => { if (fn.l) { const f = fnOf(fn.f, p), xe = ev(fn.lx, p) != null ? ev(fn.lx, p) : x0 + (x1 - x0) * (.82 - i * .02), ye = f(xe); if (isFinite(ye)) o += `<text class="v-t" style="fill:var(--${["acc", "acc2", "sec", "bad"][(ev(fn.c, p) || i + 1) - 1]});font-weight:700;font-size:11px" x="${F.X(xe)}" y="${Math.max(12, Math.min(HH - 30, F.Y(ye) - 7))}" text-anchor="middle">${tmpl(fn.l, p)}</text>`; } });
  (spec.tx || []).forEach(t => { o += F.text(ev(t[0], p), ev(t[1], p), tmpl(t[2], p), { c: "t s", a: t[3] || "middle" }); });
  return svgWrap(o);
};

/* bar / grouped / stacked / line overlay */
T.bar = (spec, p) => {
  let cats = spec.cats, S = spec.series || [{ n: "", v: spec.v }];
  if (spec.vf) { const c0 = spec.c0 || 0, nc = ev(spec.nc, p), f = fnOf(spec.vf, p); cats = [...Array(nc).keys()].map(i => String(i + c0)); S = [{ n: "", v: cats.map(c => f(+c)) }]; }
  const n = cats.length, k = S.length, stack = spec.stack;
  const tot = i => S.reduce((a, s) => a + (s.v[i] || 0), 0);
  let ymax = spec.ymax || Math.max(...(stack ? cats.map((c, i) => tot(i)) : S.flatMap(s => s.v))) * 1.12, ymin = Math.min(0, ...(stack ? [0] : S.flatMap(s => s.v)));
  if (ymin < 0) ymin *= 1.15;
  const F = frame(0, n, ymin, ymax, Object.assign({ B: 36 }, spec.fr || {}));
  let o = F.clip + F.axes([], nice(ymin, ymax), spec.xl, spec.yl);
  const bw = F.pw / n, gw = bw * .72, w1 = stack ? gw : gw / k;
  let bars = "";
  cats.forEach((c, i) => {
    let acc = 0;
    S.forEach((s, j) => {
      const v = s.v[i], x = stack ? F.X(i) + (bw - gw) / 2 : F.X(i) + (bw - gw) / 2 + j * w1, y0v = stack ? acc : 0;
      const top = F.Y(y0v + v), bot = F.Y(y0v);
      bars += `<rect class="bar${(s.c || j + 1)} grow" x="${x.toFixed(1)}" y="${Math.min(top, bot).toFixed(1)}" width="${(w1 - (stack ? 0 : 1.5)).toFixed(1)}" height="${Math.abs(bot - top).toFixed(1)}" rx="2" style="animation-delay:${(i * .05).toFixed(2)}s"/>`;
      if (spec.val !== false && !stack && n <= 16) bars += txt((x + w1 / 2 - .7).toFixed(1), (Math.min(top, bot) - 3).toFixed(1), fm(v), { c: "t s" });
      if (spec.val && stack) bars += txt((x + w1 / 2).toFixed(1), ((top + bot) / 2 + 3).toFixed(1), fm(v), { c: "s", });
      acc += v;
    });
    o += txt((F.X(i) + bw / 2).toFixed(1), F.Y(ymin) + 13, c.length > 11 && n > 5 ? c.slice(0, 10) + "…" : c, { c: n > 7 ? "s" : "" });
  });
  o += F.g(bars);
  if (spec.line) { const L = spec.line, ly = F.pw; let d = ""; const m = Math.max(...L); L.forEach((v, i) => { d += (i ? "L" : "M") + (F.X(i) + bw / 2).toFixed(1) + " " + F.Y(v / m * ymax * .95).toFixed(1); }); o += `<path class="v-c2" d="${d}"/>` + L.map((v, i) => `<circle class="v-s2" cx="${(F.X(i) + bw / 2).toFixed(1)}" cy="${F.Y(v / m * ymax * .95).toFixed(1)}" r="3"/>`).join(""); }
  if (k > 1) { o += S.map((s, j) => `<rect class="bar${s.c || j + 1}" x="${F.L + 8 + j * 92}" y="2" width="9" height="9" rx="2"/>` + txt(F.L + 21 + j * 92, 10.5, s.n, { a: "start", c: "t s" })).join(""); }
  (spec.hl || []).forEach(h => { o += F.g(F.line(0, h[0], n, h[0], "v-cm v-dash")) + F.text(n, h[0], h[1] || "", { a: "end", c: "t s" }); });
  return svgWrap(o);
};

/* histogram from data or from a seeded random generator, with optional curve */
T.hist = (spec, p) => {
  let d = spec.data;
  if (!d) { const r = rng(spec.seed || 7), rn = rnorm(r), g = spec.gen; d = []; for (let i = 0; i < (ev(g.n, p) || 200); i++) { const t = g.type || "norm"; d.push(t === "norm" ? ev(g.m, p) + ev(g.s, p) * rn() : t === "exp" ? -Math.log(1 - r()) * ev(g.m, p) : t === "unif" ? ev(g.a, p) + r() * (ev(g.b, p) - ev(g.a, p)) : t === "skew" ? ev(g.m, p) + Math.exp(ev(g.s, p) * rn()) : t === "mix" ? (r() < .5 ? ev(g.m, p) : ev(g.m2, p)) + ev(g.s, p) * rn() : NaN); } }
  const lo = spec.range ? ev(spec.range[0], p) : Math.min(...d), hi = spec.range ? ev(spec.range[1], p) : Math.max(...d), nb = ev(spec.bins, p) || 10, w = (hi - lo) / nb, cnt = new Array(nb).fill(0);
  d.forEach(v => { let i = Math.floor((v - lo) / w); if (i === nb && v === hi) i--; if (i >= 0 && i < nb) cnt[i]++; });
  const dens = spec.dens, scale = dens ? 1 / (d.length * w) : 1, ymax = Math.max(...cnt) * scale * 1.18;
  const F = frame(lo, hi, 0, ymax, spec.fr);
  let o = F.clip + F.axes(spec.xt, null, spec.xl, spec.yl || (dens ? "density" : "frequency"), { yf: dens ? (v => fm(v)) : null });
  let bars = ""; cnt.forEach((c, i) => { bars += `<rect class="bar3 grow" x="${F.X(lo + i * w).toFixed(1)}" y="${F.Y(c * scale).toFixed(1)}" width="${(F.pw / nb - 1.2).toFixed(1)}" height="${(F.Y(0) - F.Y(c * scale)).toFixed(1)}" style="animation-delay:${(i * .03).toFixed(2)}s"/>`; });
  o += F.g(bars);
  if (spec.curve) { const f = fnOf(spec.curve, p); o += F.g(F.path(x => f(x) * (dens ? 1 : d.length * w), lo, hi, "v-c2")); }
  if (spec.mark) { const m = d.reduce((a, b) => a + b, 0) / d.length, s2 = Math.sqrt(d.reduce((a, b) => a + (b - m) ** 2, 0) / (d.length - 1)); o += F.g(F.line(m, 0, m, ymax, "v-c4 v-dash")) + F.text(m, ymax * .97, "mean " + fm(m), { c: "t s", a: "start" }); }
  return svgWrap(o);
};

/* scatter + regression line, generated or given points */
T.scatter = (spec, p) => {
  let pts = spec.pts;
  if (!pts) { const g = spec.gen, r = rng(g.seed || 5), rn = rnorm(r), n = ev(g.n, p) || 40, f = fnOf(g.f, p), sd = ev(g.sd, p); pts = []; for (let i = 0; i < n; i++) { const x = g.x[0] + (g.x[1] - g.x[0]) * r(); pts.push([x, f(x) + sd * rn()]); } if (g.out) g.out.forEach(o2 => pts.push(o2)); }
  const xs = pts.map(a => a[0]), ys = pts.map(a => a[1]), n = pts.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0, syy = 0; pts.forEach(a => { sxy += (a[0] - mx) * (a[1] - my); sxx += (a[0] - mx) ** 2; syy += (a[1] - my) ** 2; });
  const b = sxy / sxx, a0 = my - b * mx, r = sxy / Math.sqrt(sxx * syy);
  const pad = (v, w2) => (v[1] - v[0]) * w2, xr = spec.xr || [Math.min(...xs) - .06 * (Math.max(...xs) - Math.min(...xs)), Math.max(...xs) + .06 * (Math.max(...xs) - Math.min(...xs))], yr = spec.yr || [Math.min(...ys) - .1 * (Math.max(...ys) - Math.min(...ys)), Math.max(...ys) + .1 * (Math.max(...ys) - Math.min(...ys))];
  const F = frame(xr[0], xr[1], yr[0], yr[1], spec.fr);
  let o = F.clip + F.axes(null, null, spec.xl, spec.yl), inner = "";
  if (spec.res) pts.forEach(a => { inner += F.line(a[0], a[1], a[0], a0 + b * a[0], "v-c4"); });
  if (spec.fit !== false) inner += F.line(xr[0], a0 + b * xr[0], xr[1], a0 + b * xr[1], "v-c2");
  if (spec.mean) inner += F.line(xr[0], my, xr[1], my, "v-cm v-dash") + F.line(mx, yr[0], mx, yr[1], "v-cm v-dash");
  pts.forEach(a => { inner += F.dot(a[0], a[1], "v-s3", 3.6); });
  o += F.g(inner);
  return { svg: svgWrap(o), msg: `r = <b>${r.toFixed(3)}</b> · slope b = <b>${b.toFixed(3)}</b> · intercept a = <b>${a0.toFixed(2)}</b> · R² = ${(r * r).toFixed(3)}` };
};

/* box plots */
T.box = (spec, p) => {
  const G = spec.g, names = Object.keys(G), n = names.length, all = names.flatMap(k => G[k]), lo = Math.min(...all), hi = Math.max(...all), pad = (hi - lo) * .08;
  const F = frame(lo - pad, hi + pad, 0, n, Object.assign({ L: spec.lw || 70 }, spec.fr || {}));
  let o = F.clip + F.axes(null, [], spec.xl, null, { noy: 1 }), inner = "";
  names.forEach((k, i) => {
    const d = G[k], q1 = q(d, .25), md = q(d, .5), q3 = q(d, .75), iqr = q3 - q1, lf = q1 - 1.5 * iqr, uf = q3 + 1.5 * iqr, inl = d.filter(v => v >= lf), inh = d.filter(v => v <= uf), wl = Math.min(...inl), wh = Math.max(...inh), cy = i + .5, c = i % 4 + 1;
    inner += F.line(wl, cy, q1, cy, "v-cm") + F.line(q3, cy, wh, cy, "v-cm") + F.line(wl, cy - .12, wl, cy + .12, "v-cm") + F.line(wh, cy - .12, wh, cy + .12, "v-cm");
    inner += `<rect class="bx${c}" x="${F.X(q1)}" y="${F.Y(cy + .26)}" width="${F.X(q3) - F.X(q1)}" height="${F.Y(cy - .26) - F.Y(cy + .26)}"/>` + F.line(md, cy - .26, md, cy + .26, "v-c" + c);
    d.filter(v => v < lf || v > uf).forEach(v => inner += F.dot(v, cy, "v-s4", 3));
    o += txt(F.L - 6, F.Y(cy) + 4, k, { a: "end", c: "t" });
    if (spec.five) o += F.text(md, cy + .43, `Q1 ${fm(q1)} · Md ${fm(md)} · Q3 ${fm(q3)}`, { c: "s" });
  });
  return svgWrap(o + F.g(inner));
};

/* pie / donut */
T.pie = (spec, p) => {
  const tot = spec.v.reduce((a, b) => a + b, 0), cx = 130, cy = 130, r = 95, ri = spec.donut ? 48 : 0; let a = -Math.PI / 2, o = "";
  spec.v.forEach((v, i) => {
    const b = a + v / tot * 2 * Math.PI, big = b - a > Math.PI ? 1 : 0, c = i % 5 + 1;
    const P = (R, t) => `${(cx + R * Math.cos(t)).toFixed(1)} ${(cy + R * Math.sin(t)).toFixed(1)}`;
    o += `<path class="bar${c} fade" d="M${P(r, a)} A${r} ${r} 0 ${big} 1 ${P(r, b)} ${ri ? `L${P(ri, b)} A${ri} ${ri} 0 ${big} 0 ${P(ri, a)}Z` : `L${cx} ${cy}Z`}" stroke="var(--deep)" stroke-width="1.5"/>`;
    const m = (a + b) / 2; if (v / tot > .05) o += txt((cx + (r * .72 + (ri ? 0 : 0)) * Math.cos(m)).toFixed(1), (cy + r * .72 * Math.sin(m) + 3).toFixed(1), Math.round(v / tot * 100) + "%", { c: "s b", });
    o += `<rect class="bar${c}" x="262" y="${40 + i * 24}" width="12" height="12" rx="3"/>` + txt(280, 50 + i * 24, spec.cats[i] + (spec.lab ? " (" + v + ")" : ""), { a: "start", c: "t" });
    a = b;
  });
  return svgWrap(o, W, 260);
};

/* flow diagram: boxes joined by arrows, optionally in several rows */
T.flow = (spec, p) => {
  const N = spec.n, cols = spec.cols || (spec.dir === "v" ? 1 : Math.min(N.length, 4)), rows = Math.ceil(N.length / cols), bw = (W - 24) / cols - 26, bh = spec.bh || 54, gy = 34, h = Math.max(120, rows * (bh + gy) - gy + 20);
  let o = ""; const pos = i => { const r = Math.floor(i / cols), c0 = i % cols, c = r % 2 && spec.snake !== false ? cols - 1 - c0 : c0; return [12 + c * (bw + 26) + bw / 2, 10 + r * (bh + gy) + bh / 2]; };
  N.forEach((t, i) => {
    const [x, y] = pos(i), ls = wrap(t, Math.max(8, Math.floor(bw / 5.6))), fill = (spec.cs ? spec.cs[i] : i % 4 + 1);
    o += `<rect class="bx${fill}" x="${x - bw / 2}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="9"/>` + lines(x, y - (ls.length - 1) * 6.2 + 3.5, ls, 12.4, { c: "t" });
    if (i) { const [px, py] = pos(i - 1); let d; if (Math.abs(py - y) < 1) { const s = Math.sign(x - px); d = [px + s * bw / 2, py, x - s * bw / 2 - 6, y]; o += `<path class="ar" d="M${d[0]} ${d[1]} L${d[2]} ${d[3]}"/><path class="arh" d="M${d[2] + 6 * s} ${d[3]} L${d[2]} ${d[3] - 5} L${d[2]} ${d[3] + 5}Z"/>`; } else { o += `<path class="ar" d="M${px} ${py + bh / 2} L${x} ${y - bh / 2 - 6}"/><path class="arh" d="M${x} ${y - bh / 2} L${x - 5} ${y - bh / 2 - 6} L${x + 5} ${y - bh / 2 - 6}Z"/>`; } }
  });
  return svgWrap(o, W, h);
};

/* tree diagram (probability trees, classification trees) */
T.tree = (spec, p) => {
  let leaves = 0; const depth = d => d.kids && d.kids.length ? 1 + Math.max(...d.kids.map(depth)) : 0, D = depth(spec.root), cw = (W - 30) / (D + 1);
  const lay = (n, lv) => { n.lv = lv; if (n.kids && n.kids.length) { n.kids.forEach(k => lay(k, lv + 1)); n.yy = (n.kids[0].yy + n.kids[n.kids.length - 1].yy) / 2; } else { n.yy = leaves++; } };
  const root = JSON.parse(JSON.stringify(spec.root)); lay(root, 0);
  const rh = Math.min(48, 230 / Math.max(leaves, 1)), h = leaves * rh + 20; let o = "";
  const X = n => 10 + n.lv * cw + 36, Y = n => 14 + n.yy * rh + rh / 2 - 6;
  const draw = n => { (n.kids || []).forEach((k, i) => { o += `<path class="ar" d="M${X(n) + 30} ${Y(n)} L${X(k) - 30} ${Y(k)}"/>`; if (k.e) o += txt(((X(n) + 30 + X(k) - 30) / 2).toFixed(1), ((Y(n) + Y(k)) / 2 - 4).toFixed(1), k.e, { c: "s", }); draw(k); }); };
  draw(root);
  const nodes = n => { o += `<rect class="bx${n.c || (n.lv % 4 + 1)}" x="${X(n) - 30}" y="${Y(n) - 11}" width="60" height="22" rx="7"/>` + txt(X(n), Y(n) + 4, n.t, { c: "t s" }); (n.kids || []).forEach(nodes); }; nodes(root);
  return svgWrap(o, W, Math.max(h, 110));
};

/* venn diagrams with shading and region labels */
T.venn = (spec, p) => {
  const sets = spec.s, three = sets.length === 3, R = three ? 62 : 78, C = three ? [[188, 100], [292, 100], [240, 170]] : [[190, 125], [290, 125]];
  const K = three ? ["a", "b", "c"] : ["a", "b"];
  const vid = "vn" + (++SSV.n);
  let o = `<defs>` + C.map((c, i) => `<clipPath id="${vid}${K[i]}"><circle cx="${c[0]}" cy="${c[1]}" r="${R}"/></clipPath>`).join("") + `</defs>`;
  const cid = k => vid + k;
  const region = reg => { // reg like "ab", "a-b" (a not b)
    const inc = [], exc = []; let ex = false; for (const ch of reg) { if (ch === "-") ex = true; else (ex ? exc : inc).push(ch); }
    let s = `<circle cx="${C[K.indexOf(inc[0])][0]}" cy="${C[K.indexOf(inc[0])][1]}" r="${R}" class="v-s1" fill-opacity=".45"/>`;
    inc.slice(1).forEach(k => s = `<g clip-path="url(#${cid(k)})">${s}</g>`);
    if (exc.length) { const mid = vid + "x" + (++SSV.n); s = `<defs><mask id="${mid}"><rect width="${W}" height="${HH}" fill="#fff"/>${exc.map(k => `<circle cx="${C[K.indexOf(k)][0]}" cy="${C[K.indexOf(k)][1]}" r="${R}" fill="#000"/>`).join("")}</mask></defs><g mask="url(#${mid})">${s}</g>`; }
    return s;
  };
  o += `<rect class="bx" x="${three ? 100 : 100}" y="${three ? 14 : 36}" width="280" height="${three ? 222 : 184}" rx="8" style="fill:none"/>` + txt(112, three ? 30 : 52, spec.u || "U", { a: "start", c: "t b" });
  (spec.sh || []).forEach(r => o += region(r));
  C.forEach((c, i) => { o += `<circle cx="${c[0]}" cy="${c[1]}" r="${R}" fill="none" style="stroke:var(--${["acc", "acc2", "sec"][i]});stroke-width:2.2"/>` + txt(c[0] + (i === 0 ? -R * .72 : i === 1 ? R * .72 : 0), c[1] + (three ? (i === 2 ? R + 16 : -R - 4) : -R - 6), sets[i], { c: "t b l" }); });
  const lab = spec.lab || {}, pos = three ? { a: [160, 88], b: [320, 88], c: [240, 198], ab: [240, 78], ac: [196, 142], bc: [284, 142], abc: [240, 118], none: [128, 222] } : { a: [150, 129], b: [330, 129], ab: [240, 129], none: [128, 205] };
  Object.keys(lab).forEach(k => { if (pos[k]) o += txt(pos[k][0], pos[k][1] + 4, lab[k], { c: "t b" }); });
  return svgWrap(o, W, three ? 244 : 240);
};

/* table with highlighted cells */
T.table = (spec, p) => {
  const hi = (spec.hi || []).map(String);
  return { html: `<table class="vt"><tr>${spec.h.map(c => `<th>${c}</th>`).join("")}</tr>${spec.r.map((row, i) => `<tr>${row.map((c, j) => `<td class="${hi.includes(i + "," + j) ? "hi" : ""}">${c}</td>`).join("")}</tr>`).join("")}</table>` };
};

/* number line with points and intervals */
T.num = (spec, p) => {
  const F = frame(ev(spec.x[0], p), ev(spec.x[1], p), 0, 1, { T: 30, B: 40, h: spec.h || 130 });
  let o = F.clip + `<line class="v-ax" x1="${F.X(F.x0)}" x2="${F.X(F.x1)}" y1="${F.Y(.25)}" y2="${F.Y(.25)}" style="stroke-width:2"/>`;
  nice(F.x0, F.x1, spec.nt || 10).forEach(v => o += `<line class="v-ax" x1="${F.X(v)}" x2="${F.X(v)}" y1="${F.Y(.25) - 4}" y2="${F.Y(.25) + 4}"/>` + txt(F.X(v), F.Y(.25) + 17, fm(v)));
  (spec.iv || []).forEach((v, i) => { const a = Math.max(ev(v[0], p), F.x0), b = Math.min(ev(v[1], p), F.x1), c = v[3] || (i % 4 + 1); o += `<line class="v-c${c}" x1="${F.X(a)}" x2="${F.X(b)}" y1="${F.Y(.25)}" y2="${F.Y(.25)}" style="stroke-width:6;stroke-linecap:butt"/>`; const ob = (v[2] || "[]"); o += `<circle cx="${F.X(a)}" cy="${F.Y(.25)}" r="5" class="${ob[0] === "[" ? "v-s" + c : ""}" style="${ob[0] === "(" ? "fill:var(--deep);stroke:var(--text)" : ""}"/><circle cx="${F.X(b)}" cy="${F.Y(.25)}" r="5" class="${ob[1] === "]" ? "v-s" + c : ""}" style="${ob[1] === ")" ? "fill:var(--deep);stroke:var(--text)" : ""}"/>`; if (v[4]) o += txt((F.X(a) + F.X(b)) / 2, F.Y(.25) - 12 - (i % 2) * 14, v[4], { c: "t s" }); });
  (spec.pts || []).forEach((pt, i) => { const c = pt[2] || 2; o += `<circle cx="${F.X(ev(pt[0], p))}" cy="${F.Y(.25)}" r="5.5" class="v-s${c}"/>` + txt(F.X(ev(pt[0], p)), F.Y(.25) - 12 - (i % 2) * 14, tmpl(pt[1], p), { c: "t s b" }); });
  return svgWrap(o, W, spec.h || 130);
};

/* cartoon scene */
T.scene = (spec, p) => {
  let o = "";
  (spec.i || []).forEach(it => {
    if (it.r) o += `<rect class="${it.k || "bx"}" x="${it.r[0]}" y="${it.r[1]}" width="${it.r[2]}" height="${it.r[3]}" rx="${it.rx || 8}"/>`;
    else if (it.o) o += `<circle cx="${it.o[0]}" cy="${it.o[1]}" r="${it.o[2]}" class="${it.k || "bx"}"/>`;
    else if (it.a) { const [a, b, c, d] = it.a, ang = Math.atan2(d - b, c - a), hx = c - 7 * Math.cos(ang), hy = d - 7 * Math.sin(ang); o += `<path class="ar" d="M${a} ${b} L${hx} ${hy}"/><path class="arh" d="M${c} ${d} L${hx - 5 * Math.sin(ang)} ${hy + 5 * Math.cos(ang)} L${hx + 5 * Math.sin(ang)} ${hy - 5 * Math.cos(ang)}Z"/>`; if (it.t) o += txt((a + c) / 2, (b + d) / 2 - 6, it.t, { c: "s" }); }
    else if (it.t != null && it.x != null && !it.ic) o += lines(it.x, it.y, wrap(it.t, it.w || 30), (it.sz || 12.5) + 2, { c: "t" + (it.b ? " b" : "") + (it.sm ? " s" : " l"), a: it.al });
    else {
      o += icon(it.ic, it.x, it.y, it.s || 1, it.bob);
      if (it.say) o += bubble(it.x, it.y - 24 * (it.s || 1) - 8, it.say);
      if (it.l) o += lines(it.x, it.y + 26 * (it.s || 1), wrap(it.l, 18), 11.5, { c: "t s" });
    }
  });
  return svgWrap(o, spec.w || W, spec.h || 200);
};

/* step-by-step reveal */
T.steps = null;

/* ---------- mounting ---------- */
SSV.mount = function (el, spec) {
  if (el.dataset.m) return; el.dataset.m = 1;
  const fig = shell(spec);
  try {
    if (spec.t === "steps") {
      let i = 0; const S = spec.s, box = fig.querySelector(".vis-svg"), ctl = fig.querySelector(".vis-ctl");
      box.style.maxWidth = "none";
      const draw = () => { box.innerHTML = `<div class="vis-steps"><span class="no">${i + 1}</span>${S[i]}</div><div class="vis-dots">${S.map((s, j) => `<i class="${j === i ? "on" : ""}"></i>`).join("")}</div>`; };
      [["◀ Back", -1], ["Next ▶", 1]].forEach(b => { const bt = document.createElement("button"); bt.textContent = b[0]; bt.onclick = () => { i = (i + b[1] + S.length) % S.length; draw(); }; ctl.appendChild(bt); });
      draw();
    } else {
      const P = {}, out = fig.querySelector(".vis-out"), box = fig.querySelector(".vis-svg"), fn = T[spec.t];
      if (!fn) throw new Error("unknown visual type " + spec.t);
      const redraw = () => { const r = fn(spec, P); if (typeof r === "string") box.innerHTML = r; else { box.innerHTML = r.svg || r.html; if (r.msg) out.innerHTML = r.msg; } if (spec.msg) out.innerHTML = tmpl(spec.msg, P); };
      controls(fig, spec, redraw, P);
      (spec.sl || []).length || (spec.sel || []).length || (spec.btn || []).length || 0;
      redraw();
    }
  } catch (e) { console.error("visual failed", spec, e); return; }
  el.innerHTML = ""; el.appendChild(fig);
};
SSV.types = T;
})();

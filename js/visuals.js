/* ============ StatSphere VISUALS ============
   Small interactive graphs / animations used inside Topic Explanations.
   To show one in a topic, put this line inside the topic body (data/topics.js):
       <div class="vis" data-vis="clt"></div>
   Available names are listed at the bottom of this file (search "reg."). No external libraries or images.
*/
(function () {
if (window.VIS) return;
const reg = {};
window.VIS = reg;

/* ---------- styles (follow the dark/light theme through CSS variables) ---------- */
const st = document.createElement("style");
st.textContent = `
.vis-fig{margin:14px 0;background:var(--deep);border:1px solid var(--line);border-radius:10px;padding:10px;overflow:hidden}
.vis-fig svg{width:100%;height:auto;display:block}
.vis-svg{margin:0 auto;max-width:600px}
.vis-ctl{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin-bottom:6px;font-size:.85rem;color:var(--mut)}
.vis-ctl:empty{display:none}
.vis-ctl label{display:flex;align-items:center;gap:6px}
.vis-ctl label b{color:var(--text);min-width:2.2em;font-weight:600}
.vis-ctl input[type=range]{width:110px;max-width:34vw;accent-color:var(--acc)}
.vis-ctl button,.vis-ctl select{background:var(--card);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:5px 10px;font:inherit;cursor:pointer}
.vis-ctl button:hover{border-color:var(--acc)}
.vis-out{font-size:.86rem;color:var(--text);margin-top:4px;min-height:1.2em}
.vis-fig figcaption{font-size:.82rem;color:var(--mut);margin-top:6px;line-height:1.4}
.vis-fig svg text{fill:var(--mut);font-size:10.5px;font-family:inherit}
.vis-fig svg .v-t{fill:var(--text)}
.vis-fig svg .v-ax{stroke:var(--mut);stroke-width:1;fill:none}
.vis-fig svg .v-gr{stroke:var(--line);stroke-width:1;opacity:.6}
.vis-fig svg .v-c1{stroke:var(--acc);fill:none;stroke-width:2.2;stroke-linejoin:round}
.vis-fig svg .v-c2{stroke:var(--acc2);fill:none;stroke-width:2.2;stroke-linejoin:round}
.vis-fig svg .v-c3{stroke:var(--blue);fill:none;stroke-width:2.2;stroke-linejoin:round}
.vis-fig svg .v-c4{stroke:var(--bad);fill:none;stroke-width:2.2;stroke-linejoin:round}
.vis-fig svg .v-cm{stroke:var(--mut);fill:none;stroke-width:1.4}
.vis-fig svg .v-dash{stroke-dasharray:5 4}
.vis-fig svg .v-a1{fill:var(--acc);fill-opacity:.3;stroke:none}
.vis-fig svg .v-a2{fill:var(--acc2);fill-opacity:.3;stroke:none}
.vis-fig svg .v-a3{fill:var(--blue);fill-opacity:.3;stroke:none}
.vis-fig svg .v-a4{fill:var(--bad);fill-opacity:.3;stroke:none}
.vis-fig svg .v-s1{fill:var(--acc);stroke:none}
.vis-fig svg .v-s2{fill:var(--acc2);stroke:none}
.vis-fig svg .v-s3{fill:var(--blue);stroke:none}
.vis-fig svg .v-s4{fill:var(--bad);stroke:none}
.vis-fig svg .v-sm{fill:var(--mut);stroke:none}
.vis-fig svg .v-box{fill:var(--card);stroke:var(--line)}
.vis-fig svg .v-dot1{stroke:var(--acc);stroke-width:3.2;stroke-linecap:round}
.vis-fig svg .v-dot4{stroke:var(--bad);stroke-width:3.2;stroke-linecap:round}
.vis-fig table{border-collapse:collapse;font-size:.82rem;margin:4px auto}
.vis-fig td,.vis-fig th{border:1px solid var(--line);padding:2px 8px;text-align:center}
.vis-fig tr.on td{background:var(--selbg);color:var(--text)}
`;
document.head.appendChild(st);

/* ---------- math helpers ---------- */
const f2 = v => { const a = Math.abs(v); return String(+(a < 1e-9 ? 0 : v).toFixed(2)); };
const rnd = Math.random;
const randn = () => { let u = 0; while (!u) u = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd()); };
const seeded = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const seedn = r => () => { let u = 0; while (!u) u = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); };
const lg = x => {
  if (x < .5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - lg(1 - x);
  x -= 1; const g = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  let a = g[0]; const t = x + 7.5; for (let i = 1; i < 9; i++) a += g[i] / (x + i);
  return .5 * Math.log(2 * Math.PI) + (x + .5) * Math.log(t) - t + Math.log(a);
};
const erf = x => { const s = x < 0 ? -1 : 1; x = Math.abs(x); const t = 1 / (1 + .3275911 * x); return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - .284496736) * t + .254829592) * t * Math.exp(-x * x)); };
const Phi = x => .5 * (1 + erf(x / Math.SQRT2));
const phi = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
const maxOf = (f, a, b, n = 200) => { let m = 0; for (let i = 0; i <= n; i++) { const v = f(a + (b - a) * i / n); if (isFinite(v) && v > m) m = v; } return m; };

/* ---------- drawing helpers ---------- */
let uid = 0;
function frame(x0, x1, y0, y1, b) {
  b = b || { x: 0, y: 0, w: 440, h: 220 };
  const L = 30, R = 10, T = 8, B = 22, pw = b.w - L - R, ph = b.h - T - B, id = "vc" + (++uid);
  const F = { id, X: v => b.x + L + (v - x0) / (x1 - x0) * pw, Y: v => b.y + T + ph - (v - y0) / (y1 - y0) * ph };
  F.clip = `<clipPath id="${id}"><rect x="${b.x + L}" y="${b.y + T - 2}" width="${pw}" height="${ph + 4}"/></clipPath>`;
  F.g = c => `<g clip-path="url(#${id})">${c}</g>`;
  const pts = (f, a, z, n) => { let d = ""; for (let i = 0; i <= n; i++) { const x = a + (z - a) * i / n, y = f(x); if (isFinite(y)) d += (d ? "L" : "M") + F.X(x).toFixed(1) + " " + F.Y(y).toFixed(1); } return d; };
  F.path = (f, a, z, cls, n = 160) => `<path class="${cls}" d="${pts(f, a, z, n)}"/>`;
  F.area = (f, a, z, cls, n = 120) => { const d = pts(f, a, z, n); return d ? `<path class="${cls}" d="${d}L${F.X(z).toFixed(1)} ${F.Y(0).toFixed(1)}L${F.X(a).toFixed(1)} ${F.Y(0).toFixed(1)}Z"/>` : ""; };
  F.poly = (arr, cls) => `<path class="${cls}" d="${arr.map((p, i) => (i ? "L" : "M") + F.X(p[0]).toFixed(1) + " " + F.Y(p[1]).toFixed(1)).join("")}Z"/>`;
  F.line = (xa, ya, xb, yb, cls) => `<line class="${cls}" x1="${F.X(xa).toFixed(1)}" y1="${F.Y(ya).toFixed(1)}" x2="${F.X(xb).toFixed(1)}" y2="${F.Y(yb).toFixed(1)}"/>`;
  F.dot = (x, y, cls, r = 4) => `<circle class="${cls}" cx="${F.X(x).toFixed(1)}" cy="${F.Y(y).toFixed(1)}" r="${r}"/>`;
  F.text = (x, y, t, anchor, cls) => `<text class="${cls || ""}" x="${F.X(x).toFixed(1)}" y="${F.Y(y).toFixed(1)}" text-anchor="${anchor || "middle"}">${t}</text>`;
  F.axes = (xt, yt, xl, yl) => {
    let s = "";
    xt.forEach(v => s += `<line class="v-gr" x1="${F.X(v)}" x2="${F.X(v)}" y1="${F.Y(y0)}" y2="${F.Y(y1)}"/><text x="${F.X(v)}" y="${F.Y(y0) + 13}" text-anchor="middle">${f2(v)}</text>`);
    yt.forEach(v => s += `<line class="v-gr" y1="${F.Y(v)}" y2="${F.Y(v)}" x1="${F.X(x0)}" x2="${F.X(x1)}"/><text x="${F.X(x0) - 4}" y="${F.Y(v) + 3.5}" text-anchor="end">${f2(v)}</text>`);
    s += `<line class="v-ax" x1="${F.X(x0)}" y1="${F.Y(y0)}" x2="${F.X(x1)}" y2="${F.Y(y0)}"/><line class="v-ax" x1="${F.X(x0)}" y1="${F.Y(y0)}" x2="${F.X(x0)}" y2="${F.Y(y1)}"/>`;
    if (xl) s += `<text x="${F.X(x1) - 2}" y="${F.Y(y0) - 4}" text-anchor="end">${xl}</text>`;
    if (yl) s += `<text x="${F.X(x0) + 4}" y="${F.Y(y1) + 10}">${yl}</text>`;
    return s;
  };
  return F;
}
const SV = (body, W = 440, H = 220) => `<svg viewBox="0 0 ${W} ${H}" role="img">${body}</svg>`;
const range = (a, b, s = 1) => { const r = []; for (let v = a; v <= b + 1e-9; v += s) r.push(+v.toFixed(6)); return r; };

/* controls + redraw loop. specs: {k,label,min,max,step,v} slider | {k,label,opts,v} select | {btn,on} button | {anim,on,ms} play/stop */
function ui(root, specs, draw, onChg) {
  const ctl = root.querySelector(".vis-ctl"), svg = root.querySelector(".vis-svg"), out = root.querySelector(".vis-out"), s = { _i: {} };
  const redraw = () => { s.msg = ""; svg.innerHTML = draw(s); out.innerHTML = s.msg || ""; };
  specs.forEach(sp => {
    if (sp.btn) { const b = document.createElement("button"); b.textContent = sp.btn; b.onclick = () => { sp.on(s); redraw(); }; ctl.appendChild(b); return; }
    if (sp.anim) {
      const b = document.createElement("button"); let t = null; b.textContent = "▶ " + sp.anim;
      const stop = () => { clearInterval(t); t = null; b.textContent = "▶ " + sp.anim; };
      b.onclick = () => { if (t) return stop(); b.textContent = "❚❚ Stop"; t = setInterval(() => { if (!root.isConnected || root.offsetParent === null) return stop(); sp.on(s); redraw(); }, sp.ms || 150); };
      ctl.appendChild(b); return;
    }
    const l = document.createElement("label");
    if (sp.opts) {
      l.append(sp.label || ""); const se = document.createElement("select");
      se.innerHTML = sp.opts.map((o, i) => `<option value="${i}">${o}</option>`).join(""); se.value = sp.v || 0; s[sp.k] = +se.value;
      se.onchange = () => { s[sp.k] = +se.value; onChg && onChg(sp.k, s); redraw(); }; l.appendChild(se); s._i[sp.k] = se;
    } else {
      const inp = document.createElement("input"), val = document.createElement("b");
      inp.type = "range"; inp.min = sp.min; inp.max = sp.max; inp.step = sp.step || 1; inp.value = sp.v; s[sp.k] = +sp.v;
      const fm = v => sp.fmt ? sp.fmt(v) : f2(v); val.textContent = fm(sp.v);
      inp.oninput = () => { s[sp.k] = +inp.value; val.textContent = fm(s[sp.k]); onChg && onChg(sp.k, s); redraw(); };
      inp._val = val; inp._fm = fm; l.append(sp.label || "", inp, val); s._i[sp.k] = inp;
    }
    ctl.appendChild(l);
  });
  s.set = (k, v) => { s[k] = v; const i = s._i[k]; if (i) { i.value = v; if (i._val) i._val.textContent = i._fm(v); } };
  redraw();
  return { s, redraw };
}
const stepFmt = v => String(+v.toFixed(2));

/* ============================================================
   VISUALS   reg.name = [caption, init(root, arg), maxWidthPx?]
   ============================================================ */

/* ---- Central Limit Theorem ---- */
reg.clt = ["Left: the population. Right: the histogram of sample means x̄. Draw samples and increase n: the means pile up in a bell shape around μ even when the population is skewed.", (root) => {
  const pops = [
    { n: "Skewed (exponential)", sd: 1, draw: () => -Math.log(1 - rnd()), pdf: x => x < 0 ? 0 : Math.exp(-x), ym: 1.2 },
    { n: "Uniform", sd: Math.sqrt(1 / 3), draw: () => 2 * rnd(), pdf: x => x >= 0 && x <= 2 ? .5 : 0, ym: .8 },
    { n: "Two humps", sd: Math.sqrt(.37), draw: () => (rnd() < .5 ? .4 : 1.6) + .1 * randn(), pdf: x => 5 * (phi((x - .4) / .1) + phi((x - 1.6) / .1)), ym: 2.2 }
  ];
  const D = { m: [], last: [], lm: null };
  const add = (s, k) => { const p = pops[s.p]; for (let i = 0; i < k; i++) { const a = []; let t = 0; for (let j = 0; j < s.n; j++) { const v = p.draw(); a.push(v); t += v; } D.last = a; D.lm = t / s.n; D.m.push(D.lm); } };
  ui(root, [
    { k: "p", label: "Population ", opts: pops.map(p => p.n), v: 0 },
    { k: "n", label: "n = ", min: 1, max: 50, step: 1, v: 5, fmt: v => v },
    { btn: "Draw 1", on: s => add(s, 1) }, { btn: "Draw 100", on: s => add(s, 100) },
    { anim: "Auto", on: s => add(s, 5), ms: 120 },
    { btn: "Reset", on: () => { D.m = []; D.last = []; D.lm = null; } }
  ], s => {
    const p = pops[s.p], W = 440, H = 190, bins = 36, bw = 3 / bins, cnt = new Array(bins).fill(0);
    D.m.forEach(v => { const i = Math.floor(v / bw); if (i >= 0 && i < bins) cnt[i]++; });
    const sd = p.sd / Math.sqrt(s.n), peak = 1 / (sd * Math.sqrt(2 * Math.PI)), tot = Math.max(D.m.length, 1);
    const dens = cnt.map(c => c / (tot * bw)), ym = Math.max(peak, ...dens) * 1.12;
    const A = frame(0, 3, 0, p.ym, { x: 0, y: 14, w: 215, h: H - 14 }), B = frame(0, 3, 0, ym, { x: 225, y: 14, w: 215, h: H - 14 });
    let o = A.clip + B.clip + `<text class="v-t" x="108" y="10" text-anchor="middle">Population</text><text class="v-t" x="332" y="10" text-anchor="middle">Distribution of x̄ (n = ${s.n})</text>`;
    o += A.axes([0, 1, 2, 3], [], "x", "") + A.g(A.area(p.pdf, 0, 3, "v-a3") + A.path(p.pdf, 0, 3, "v-c3"));
    D.last.forEach(v => o += A.dot(Math.min(v, 2.95), p.ym * .04, "v-s2", 2.6));
    o += B.axes([0, 1, 2, 3], [], "x̄", "");
    o += B.g(dens.map((d, i) => `<rect class="v-a1" x="${B.X(i * bw) + .5}" y="${B.Y(d)}" width="${B.X(bw) - B.X(0) - 1}" height="${B.Y(0) - B.Y(d)}"/>`).join("") + B.path(x => phi((x - 1) / sd) / sd, 0, 3, "v-c2 v-dash", 200));
    if (D.lm !== null) o += B.g(B.line(D.lm, 0, D.lm, ym * .5, "v-c4"));
    o += B.line(1, 0, 1, ym * .08, "v-cm");
    s.msg = `Samples drawn: <b>${D.m.length}</b>` + (D.lm !== null ? ` · last x̄ = ${D.lm.toFixed(2)}` : "") + ` · dashed curve = N(μ, σ²/n), SE = ${sd.toFixed(2)}`;
    return SV(o, W, H);
  }, k => { if (k !== "n" && k !== "p") return; D.m = []; D.last = []; D.lm = null; });
}];

/* ---- χ², t, F ---- */
reg.dist = ["Pick a distribution and move the degrees of freedom. χ² and F are right-skewed and start at 0; t is symmetric and approaches the normal curve (dashed) as df grows.", (root) => {
  ui(root, [
    { k: "t", label: "Distribution ", opts: ["Chi-square (χ²)", "Student t", "F"], v: 0 },
    { k: "a", label: "df₁ ", min: 1, max: 30, step: 1, v: 5, fmt: v => v },
    { k: "b", label: "df₂ (F) ", min: 1, max: 60, step: 1, v: 10, fmt: v => v }
  ], s => {
    const k = s.a, d2 = s.b;
    const pdf = [
      x => x <= 0 ? 0 : Math.exp((k / 2 - 1) * Math.log(x) - x / 2 - (k / 2) * Math.LN2 - lg(k / 2)),
      x => Math.exp(lg((k + 1) / 2) - lg(k / 2) - .5 * Math.log(k * Math.PI) - (k + 1) / 2 * Math.log(1 + x * x / k)),
      x => x <= 0 ? 0 : Math.exp(lg((k + d2) / 2) - lg(k / 2) - lg(d2 / 2) + (k / 2) * Math.log(k / d2) + (k / 2 - 1) * Math.log(x) - (k + d2) / 2 * Math.log(1 + k * x / d2))
    ][s.t];
    let x0, x1, ym, xt;
    if (s.t === 0) { x0 = 0; x1 = Math.max(10, k + 4.5 * Math.sqrt(2 * k)); ym = Math.min(.5, maxOf(pdf, Math.max(x1 / 200, .05), x1) * 1.15); }
    else if (s.t === 1) { x0 = -5; x1 = 5; ym = .45; }
    else { x0 = 0; x1 = 5; ym = Math.min(1.5, maxOf(pdf, .05, 5) * 1.15); }
    xt = range(Math.ceil(x0), x1, x1 > 12 ? 5 : x1 > 6 ? 2 : 1);
    const F = frame(x0, x1, 0, ym);
    let o = F.clip + F.axes(xt, [0, +(ym / 2).toFixed(2)], "x", "f(x)");
    if (s.t === 1) o += F.g(F.path(phi, -5, 5, "v-cm v-dash"));
    o += F.g(F.area(pdf, x0 + 1e-3, x1, "v-a1", 200) + F.path(pdf, x0 + 1e-3, x1, "v-c1", 200));
    s.msg = s.t === 0 ? `χ² with ${k} df: mean = ${k}, variance = ${2 * k}` : s.t === 1 ? `t with ${k} df: mean = 0` + (k > 2 ? `, variance = ${(k / (k - 2)).toFixed(2)}` : "") + " (fatter tails than N(0,1))" : `F(${k}, ${d2})` + (d2 > 2 ? `: mean = ${(d2 / (d2 - 2)).toFixed(2)}` : "");
    return SV(o);
  });
}];

/* ---- Normal curve with ±kσ ---- */
reg.normal = ["Change μ (moves the curve) and σ (spreads it). The shaded part is the area within k standard deviations of the mean.", (root) => {
  ui(root, [
    { k: "mu", label: "μ ", min: -3, max: 3, step: .5, v: 0 }, { k: "sd", label: "σ ", min: .5, max: 3, step: .25, v: 1 },
    { k: "k", label: "Shade ±", opts: ["1σ", "2σ", "3σ"], v: 1 }
  ], s => {
    const m = s.mu, sd = s.sd, k = s.k + 1, f = x => phi((x - m) / sd) / sd, F = frame(-10, 10, 0, .85);
    let o = F.clip + F.axes(range(-10, 10, 5), [], "x", "f(x)");
    o += F.g(F.area(f, m - k * sd, m + k * sd, "v-a1") + F.path(f, -10, 10, "v-c1", 240) + F.line(m, 0, m, f(m), "v-cm v-dash"));
    s.msg = `P(μ − ${k}σ &lt; X &lt; μ + ${k}σ) = <b>${(100 * (Phi(k) - Phi(-k))).toFixed(1)}%</b>`;
    return SV(o);
  });
}];

/* ---- Confidence intervals ---- */
reg.ci = ["Each line is the confidence interval from one sample (x̄ ± z·σ/√n); the dashed line is the true μ. Red intervals miss μ. Higher confidence gives wider intervals; about 95 of 100 intervals catch μ.", (root) => {
  const gen = () => Array.from({ length: 30 }, () => randn() / 5);
  let means = gen();
  ui(root, [
    { k: "lv", label: "Confidence ", opts: ["90%", "95%", "99%"], v: 1 },
    { btn: "New samples", on: () => { means = gen(); } }
  ], s => {
    const z = [1.645, 1.96, 2.576][s.lv], hw = z * .2, F = frame(-1, 1, 0, 31, { x: 0, y: 0, w: 440, h: 300 });
    let o = F.clip + F.axes([-1, -.5, 0, .5, 1], [], "", "");
    let hit = 0;
    means.forEach((m, i) => { const ok = Math.abs(m) <= hw; if (ok) hit++; o += F.line(m - hw, i + 1, m + hw, i + 1, ok ? "v-c1" : "v-c4") + F.dot(m, i + 1, ok ? "v-s1" : "v-s4", 2.6); });
    o += F.line(0, 0, 0, 31, "v-c2 v-dash") + F.text(0.04, 30.4, "true μ", "start");
    s.msg = `<b>${hit} of 30</b> intervals contain μ (expected ≈ ${Math.round(30 * [.9, .95, .99][s.lv])}) · width = ${(2 * hw).toFixed(2)}`;
    return SV(o, 440, 300);
  });
}, 520];

/* ---- Type I / II error and power ---- */
reg.power = ["Right-tailed z-test. Blue: the sampling distribution if H₀ is true. Green: if H₁ is true. Orange area = α (Type I error), red area = β (Type II error). A bigger effect size δ or larger α increases power = 1 − β.", (root) => {
  ui(root, [
    { k: "d", label: "True shift δ ", min: 0, max: 4, step: .1, v: 2 },
    { k: "a", label: "α ", opts: ["0.10", "0.05", "0.01"], v: 1 }
  ], s => {
    const c = [1.2816, 1.6449, 2.3263][s.a], F = frame(-4, 8, 0, .46);
    let o = F.clip + F.axes(range(-4, 8, 2), [], "z", "");
    o += F.g(F.area(x => phi(x - s.d), -4, c, "v-a4") + F.area(phi, c, 8, "v-a2") + F.path(phi, -4, 8, "v-c3") + F.path(x => phi(x - s.d), -4, 8, "v-c1") + F.line(c, 0, c, .44, "v-cm v-dash"));
    o += F.text(0, .43, "H₀", "middle") + F.text(s.d + .05, .43, "H₁", "middle") + F.text(c + .1, .39, "critical value", "start");
    const beta = Phi(c - s.d);
    s.msg = `α = ${[.1, .05, .01][s.a]} · β = <b>${beta.toFixed(3)}</b> · power = <b>${(1 - beta).toFixed(3)}</b>`;
    return SV(o);
  });
}];

/* ---- Likelihood / MLE ---- */
reg.mle = ["Likelihood of p for a binomial sample (k successes in n trials), scaled so its peak is 1. The curve peaks at the MLE p̂ = k/n. More data (larger n) makes the peak sharper.", (root) => {
  ui(root, [
    { k: "n", label: "n ", min: 1, max: 40, step: 1, v: 10, fmt: v => v }, { k: "k", label: "successes k ", min: 0, max: 40, step: 1, v: 7, fmt: v => v }
  ], s => {
    if (s.k > s.n) s.set("k", s.n); s._i.k.max = s.n;
    const n = s.n, k = s.k, ph = k / n, L = p => Math.pow(p, k) * Math.pow(1 - p, n - k), Lm = L(ph), F = frame(0, 1, 0, 1.12);
    let o = F.clip + F.axes([0, .25, .5, .75, 1], [0, .5, 1], "p", "L(p)");
    o += F.g(F.area(p => L(p) / Lm, 0, 1, "v-a1", 200) + F.path(p => L(p) / Lm, 0, 1, "v-c1", 200) + F.line(ph, 0, ph, 1, "v-c2 v-dash")) + F.dot(ph, 1, "v-s2", 5) + F.text(Math.min(Math.max(ph, .12), .88), 1.08, "p̂ = " + ph.toFixed(2), "middle", "v-t");
    s.msg = `n = ${n}, k = ${k} → MLE p̂ = k/n = <b>${ph.toFixed(3)}</b>`;
    return SV(o);
  });
}];

/* ---- Binomial and Poisson ---- */
reg.binpois = ["Bars: Binomial(n, p). Orange dots: Poisson(λ = np). When n is large and p is small the two almost coincide, which is why Poisson approximates Binomial.", (root) => {
  ui(root, [
    { k: "n", label: "n ", min: 5, max: 100, step: 1, v: 20, fmt: v => v }, { k: "p", label: "p ", min: .02, max: .9, step: .01, v: .2 }
  ], s => {
    const n = s.n, p = s.p, q = 1 - p, lam = n * p, km = Math.min(n, Math.ceil(lam + 5 * Math.sqrt(n * p * q) + 3));
    const bin = k => Math.exp(lg(n + 1) - lg(k + 1) - lg(n - k + 1) + (k ? k * Math.log(p) : 0) + (n - k ? (n - k) * Math.log(q) : 0));
    const poi = k => Math.exp(-lam + k * Math.log(lam) - lg(k + 1));
    let ym = 0; for (let k = 0; k <= km; k++) ym = Math.max(ym, bin(k), poi(k)); ym *= 1.12;
    const F = frame(-.5, km + .5, 0, ym), bw = (F.X(1) - F.X(0)) * .8;
    let o = F.clip + F.axes(range(0, km, km > 30 ? 10 : km > 14 ? 5 : 2), [0, +(ym / 2).toFixed(2)], "k", "P(X=k)");
    for (let k = 0; k <= km; k++) o += `<rect class="v-a1" x="${F.X(k) - bw / 2}" y="${F.Y(bin(k))}" width="${bw}" height="${F.Y(0) - F.Y(bin(k))}"/>` + F.dot(k, poi(k), "v-s2", 3);
    s.msg = `Binomial mean np = ${lam.toFixed(2)}, variance npq = ${(n * p * q).toFixed(2)} · Poisson mean = variance = ${lam.toFixed(2)}`;
    return SV(o);
  });
}];

/* ---- Gamma / Exponential ---- */
reg.gamma = ["Gamma(α, λ). With α = 1 it is exactly the Exponential distribution. Larger α moves the peak right and makes the curve more bell-like; larger λ squeezes it towards 0.", (root) => {
  ui(root, [{ k: "a", label: "shape α ", min: .5, max: 8, step: .5, v: 2 }, { k: "r", label: "rate λ ", min: .5, max: 3, step: .5, v: 1 }], s => {
    const a = s.a, r = s.r, f = x => x <= 0 ? 0 : Math.exp(a * Math.log(r) + (a - 1) * Math.log(x) - r * x - lg(a));
    const ym = Math.min(3, Math.max(.3, maxOf(f, .15, 15) * 1.15)), F = frame(0, 15, 0, ym);
    let o = F.clip + F.axes([0, 5, 10, 15], [0, +(ym / 2).toFixed(2)], "x", "f(x)") + F.g(F.area(f, 1e-3, 15, "v-a1", 300) + F.path(f, 1e-3, 15, "v-c1", 300));
    s.msg = `mean α/λ = ${(a / r).toFixed(2)}, variance α/λ² = ${(a / r / r).toFixed(2)}` + (a === 1 ? " · this is Exponential(λ)" : "");
    return SV(o);
  });
}];

/* ---- Correlation / bivariate normal ---- */
reg.corr = ["Scatter plots of 100 points for different correlations. r near +1 or −1: points hug a line; r near 0: a shapeless cloud. Correlation measures only linear association.", (root) => {
  const r0 = seedn(seeded(7)), Z = Array.from({ length: 100 }, () => [r0(), r0()]);
  ui(root, [{ k: "r", label: "ρ ", min: -1, max: 1, step: .05, v: .6 }], s => {
    const rho = s.r, sq = Math.sqrt(1 - rho * rho), F = frame(-3.5, 3.5, -3.5, 3.5, { x: 70, y: 0, w: 300, h: 260 });
    const pts = Z.map(z => [z[0], rho * z[0] + sq * z[1]]);
    const mx = pts.reduce((a, p) => a + p[0], 0) / 100, my = pts.reduce((a, p) => a + p[1], 0) / 100;
    let sxy = 0, sxx = 0, syy = 0; pts.forEach(p => { sxy += (p[0] - mx) * (p[1] - my); sxx += (p[0] - mx) ** 2; syy += (p[1] - my) ** 2; });
    const r = sxy / Math.sqrt(sxx * syy);
    let o = F.clip + F.axes([-3, 0, 3], [-3, 0, 3], "X", "Y") + F.g(pts.map(p => F.dot(p[0], p[1], "v-s1", 2.8).replace("/>", ' opacity=".75"/>')).join("") + F.line(-3.5, -3.5 * r, 3.5, 3.5 * r, "v-c2"));
    s.msg = `ρ = ${rho.toFixed(2)} → sample r = <b>${r.toFixed(2)}</b>, r² = ${(r * r).toFixed(2)} (share of variation explained)`;
    return SV(o, 440, 260);
  });
}];

/* ---- Regression line and residuals ---- */
reg.regfit = ["Drag a and b to place your own line; the vertical gaps are residuals. The least-squares (OLS) line is the one with the smallest Σe². Press the button to jump to it.", (root) => {
  const r0 = seedn(seeded(11)), X = range(1, 9.5, .75), Y = X.map(x => 1.5 + .85 * x + 1.1 * r0());
  const n = X.length, mx = X.reduce((a, b) => a + b) / n, my = Y.reduce((a, b) => a + b) / n;
  const b1 = X.reduce((a, x, i) => a + (x - mx) * (Y[i] - my), 0) / X.reduce((a, x) => a + (x - mx) ** 2, 0), b0 = my - b1 * mx;
  const sse = (a, b) => X.reduce((t, x, i) => t + (Y[i] - a - b * x) ** 2, 0), best = sse(b0, b1);
  ui(root, [
    { k: "a", label: "a (intercept) ", min: -2, max: 8, step: .1, v: 6 }, { k: "b", label: "b (slope) ", min: -.5, max: 2, step: .05, v: .2 },
    { btn: "Show OLS line", on: s => { s.set("a", +b0.toFixed(1)); s.set("b", +b1.toFixed(2)); } }
  ], s => {
    const F = frame(0, 10, 0, 12);
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], [0, 4, 8, 12], "x", "y");
    X.forEach((x, i) => o += F.line(x, Y[i], x, s.a + s.b * x, "v-c4") );
    o += F.g(F.line(0, s.a, 10, s.a + 10 * s.b, "v-c1")) + X.map((x, i) => F.dot(x, Y[i], "v-s2", 3.5)).join("");
    s.msg = `Σe² (your line) = <b>${sse(s.a, s.b).toFixed(1)}</b> · Σe² (OLS: ŷ = ${b0.toFixed(2)} + ${b1.toFixed(2)}x) = ${best.toFixed(1)}`;
    return SV(o);
  });
}];

/* ---- Residual plots ---- */
reg["resid"] = ["Residuals against fitted values. Left: healthy random cloud. Middle: spread grows (heteroscedasticity, use WLS/transform). Right: a curve means the straight-line model is wrong (add x² or transform).", (root) => {
  const r = seedn(seeded(5)), N = 45, xs = range(0, 1, 1 / (N - 1));
  const sets = [xs.map(() => .55 * r()), xs.map(x => (.1 + 1.1 * x) * r() * .9), xs.map(x => 3.2 * (x - .5) ** 2 * 2 - .5 + .2 * r())];
  const ttl = ["Good", "Funnel", "Curved"];
  ui(root, [], () => {
    let o = "";
    sets.forEach((e, i) => { const F = frame(0, 1, -2.2, 2.2, { x: i * 147, y: 16, w: 146, h: 190 }); o += F.clip + `<text class="v-t" x="${i * 147 + 78}" y="11" text-anchor="middle">${ttl[i]}</text>` + F.axes([], [], "fitted", "e") + F.line(0, 0, 1, 0, "v-cm v-dash") + F.g(e.map((v, j) => F.dot(xs[j], v, "v-s1", 2.4)).join("")); });
    return SV(o, 440, 206);
  });
}];

/* ---- Polynomial regression ---- */
reg.poly = ["Fit a polynomial of degree d to the same 14 points. A low degree under-fits, a very high degree chases the noise (over-fitting) even though R² keeps rising. Compare with adjusted R² and the lack-of-fit test.", (root) => {
  const r = seedn(seeded(21)), X = range(0, 6, 6 / 13), Y = X.map(x => Math.sin(x) + .3 * r());
  const fit = d => {
    const m = d + 1, A = Array.from({ length: m }, () => new Array(m + 1).fill(0));
    X.forEach((x, i) => { const t = (x - 3) / 3; for (let a = 0; a < m; a++) { for (let b = 0; b < m; b++) A[a][b] += Math.pow(t, a + b); A[a][m] += Math.pow(t, a) * Y[i]; } });
    for (let c = 0; c < m; c++) { let p = c; for (let i = c + 1; i < m; i++) if (Math.abs(A[i][c]) > Math.abs(A[p][c])) p = i; [A[c], A[p]] = [A[p], A[c]]; for (let i = c + 1; i < m; i++) { const f = A[i][c] / A[c][c]; for (let j = c; j <= m; j++) A[i][j] -= f * A[c][j]; } }
    const w = new Array(m).fill(0); for (let i = m - 1; i >= 0; i--) { let t = A[i][m]; for (let j = i + 1; j < m; j++) t -= A[i][j] * w[j]; w[i] = t / A[i][i]; }
    return x => { const t = (x - 3) / 3; return w.reduce((s, c, j) => s + c * Math.pow(t, j), 0); };
  };
  const my = Y.reduce((a, b) => a + b) / Y.length, sst = Y.reduce((a, y) => a + (y - my) ** 2, 0);
  ui(root, [{ k: "d", label: "degree d ", min: 1, max: 9, step: 1, v: 3, fmt: v => v }], s => {
    const f = fit(s.d), F = frame(0, 6, -2.4, 2.4), sse = X.reduce((a, x, i) => a + (Y[i] - f(x)) ** 2, 0);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5, 6], [-2, 0, 2], "x", "y") + F.g(F.path(f, 0, 6, "v-c1", 240)) + X.map((x, i) => F.dot(x, Y[i], "v-s2", 3.5)).join("");
    const r2 = 1 - sse / sst, n = X.length, adj = 1 - (1 - r2) * (n - 1) / (n - s.d - 1);
    s.msg = `degree ${s.d}: R² = <b>${r2.toFixed(3)}</b>, adjusted R² = ${adj.toFixed(3)}`;
    return SV(o);
  });
}];

/* ---- Dummy variables ---- */
reg.dummy = ["Regression with a 0/1 dummy D: y = β₀ + β₁x + β₂D + β₃(x·D). β₂ shifts the intercept (parallel lines); β₃ changes the slope (interaction).", (root) => {
  ui(root, [{ k: "d", label: "β₂ shift ", min: -4, max: 4, step: .5, v: 2 }, { k: "s", label: "β₃ slope change ", min: -1, max: 1, step: .1, v: 0 }], s => {
    const F = frame(0, 8, -2, 14);
    let o = F.clip + F.axes([0, 2, 4, 6, 8], [0, 5, 10], "x", "y") + F.g(F.line(0, 3, 8, 3 + 8 * .8, "v-c3") + F.line(0, 3 + s.d, 8, 3 + s.d + 8 * (.8 + s.s), "v-c2"));
    o += F.text(7.9, 3 + 6.4 - .9, "D = 0", "end") + F.text(7.9, 3 + s.d + 8 * (.8 + s.s) + .6, "D = 1", "end");
    s.msg = s.d === 0 && s.s === 0 ? "β₂ = β₃ = 0: one common line, the dummy has no effect." : s.s === 0 ? "Parallel lines: same slope, different intercepts." : "Different slopes: the effect of x depends on the group (interaction).";
    return SV(o);
  });
}];

/* ---- Supply and demand ---- */
reg.supdem = ["Equilibrium is where demand meets supply. Shift demand (income, tastes) or supply (costs, technology) and see the new price and quantity. Dashed lines show the original curves.", (root) => {
  ui(root, [{ k: "d", label: "Demand shift ", min: -3, max: 3, step: .5, v: 0 }, { k: "s", label: "Supply shift ", min: -3, max: 3, step: .5, v: 0 }], s => {
    const F = frame(0, 12, 0, 14), D = (q, d) => 10 + d - q, S = (q, v) => 2 - v + .8 * q;
    const Q = (8 + s.d + s.s) / 1.8, P = D(Q, s.d);
    let o = F.clip + F.axes([0, 4, 8, 12], [0, 5, 10], "Quantity", "Price");
    o += F.g(F.line(0, D(0, 0), 12, D(12, 0), "v-c3 v-dash") + F.line(0, S(0, 0), 12, S(12, 0), "v-c2 v-dash") + F.line(0, D(0, s.d), 12, D(12, s.d), "v-c3") + F.line(0, S(0, s.s), 12, S(12, s.s), "v-c2"));
    o += F.line(Q, 0, Q, P, "v-cm v-dash") + F.line(0, P, Q, P, "v-cm v-dash") + F.dot(Q, P, "v-s4", 5) + F.text(1.2, 12.2, "D", "middle") + F.text(11.6, S(11.6, s.s) + .9, "S", "middle");
    s.msg = `Equilibrium: Q* = <b>${Q.toFixed(2)}</b>, P* = <b>${P.toFixed(2)}</b> (start: Q = 4.44, P = 5.56)`;
    return SV(o);
  });
}];

/* ---- PPF ---- */
reg.ppf = ["Production possibility frontier. Points on the curve are efficient, inside are wasteful, outside are unattainable. The curve bows outward because the opportunity cost of good X rises as you make more of it.", (root) => {
  ui(root, [{ k: "x", label: "Good X produced ", min: 0, max: 9.5, step: .5, v: 5 }], s => {
    const F = frame(0, 11, 0, 11), f = x => Math.sqrt(Math.max(0, 100 - x * x)), y = f(s.x), oc = s.x / y;
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], [0, 2, 4, 6, 8, 10], "Good X", "Good Y") + F.g(F.area(f, 0, 10, "v-a1") + F.path(f, 0, 10, "v-c1"));
    o += F.dot(s.x, y, "v-s2", 5) + F.dot(4, 4, "v-sm", 3.5) + F.text(4.2, 3.2, "inefficient", "start") + F.text(8.2, 9.2, "unattainable", "middle");
    s.msg = `At X = ${s.x}: Y = ${y.toFixed(2)} · opportunity cost of 1 more X ≈ <b>${oc.toFixed(2)}</b> units of Y (slope of the curve)`;
    return SV(o);
  });
}];

/* ---- Elasticity ---- */
reg.elast = ["Straight-line demand Q = 100 − 10P. Elasticity changes along the line: elastic at high prices (above the midpoint), inelastic at low prices. Revenue is largest where elasticity is exactly −1.", (root) => {
  ui(root, [{ k: "p", label: "Price P ", min: .5, max: 9.5, step: .5, v: 2 }], s => {
    const F = frame(0, 105, 0, 10.5), q = 100 - 10 * s.p, e = -10 * s.p / q;
    let o = F.clip + F.axes([0, 25, 50, 75, 100], [0, 5, 10], "Quantity", "Price") + F.g(F.line(0, 10, 100, 0, "v-c1") + F.line(0, 5, 50, 5, "v-cm v-dash") + F.line(50, 0, 50, 5, "v-cm v-dash"));
    o += F.line(q, 0, q, s.p, "v-c2 v-dash") + F.line(0, s.p, q, s.p, "v-c2 v-dash") + F.dot(q, s.p, "v-s2", 5) + F.text(52, 5.5, "ε = −1", "start") + F.text(80, 8, "elastic", "middle") + F.text(70, 1.2, "inelastic", "middle");
    s.msg = `P = ${s.p}, Q = ${q} → ε = <b>${e.toFixed(2)}</b> (${Math.abs(e) > 1.001 ? "elastic" : Math.abs(e) < .999 ? "inelastic" : "unit elastic"}) · total revenue = ${(s.p * q).toFixed(0)}`;
    return SV(o);
  });
}];

/* ---- Cost curves ---- */
reg.costs = ["Short-run cost curves: MC cuts AVC and ATC at their minimum points. AFC always falls as output rises, so ATC and AVC get closer together.", (root) => {
  const AVC = q => q * q - 6 * q + 15, MC = q => 3 * q * q - 12 * q + 15, ATC = q => AVC(q) + 30 / q;
  ui(root, [{ k: "q", label: "Output Q ", min: .5, max: 6, step: .1, v: 3 }], s => {
    const F = frame(0, 6.2, 0, 40);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5, 6], [0, 10, 20, 30, 40], "Q", "Cost") + F.g(F.path(MC, .3, 6, "v-c4") + F.path(ATC, .6, 6, "v-c2") + F.path(AVC, .3, 6, "v-c3") + F.line(s.q, 0, s.q, 40, "v-cm v-dash"));
    o += F.text(5.7, 36, "MC", "end") + F.text(5.9, ATC(5.9) + 3, "ATC", "end") + F.text(5.9, AVC(5.9) - 3, "AVC", "end");
    s.msg = `Q = ${s.q.toFixed(1)}: MC = ${MC(s.q).toFixed(1)}, AVC = ${AVC(s.q).toFixed(1)}, ATC = ${ATC(s.q).toFixed(1)}`;
    return SV(o);
  });
}];

/* ---- Monopoly ---- */
reg.monopoly = ["Monopoly: produce where MR = MC, then charge the price on the demand curve. Compared with perfect competition (P = MC) output is lower, price higher, and the red triangle is the deadweight loss.", (root) => {
  ui(root, [{ k: "c", label: "MC intercept ", min: 0, max: 5, step: .5, v: 2 }], s => {
    const c = s.c, F = frame(0, 10, 0, 11), D = q => 10 - q, MR = q => 10 - 2 * q, MC = q => c + .5 * q;
    const qm = (10 - c) / 2.5, pm = D(qm), qc = (10 - c) / 1.5, pc = D(qc);
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], [0, 5, 10], "Quantity", "Price") + F.g(F.poly([[qm, pm], [qm, MC(qm)], [qc, pc]], "v-a4") + F.path(D, 0, 10, "v-c3") + F.path(MR, 0, 5, "v-c2") + F.path(MC, 0, 10, "v-c4"));
    o += F.line(qm, 0, qm, pm, "v-cm v-dash") + F.line(0, pm, qm, pm, "v-cm v-dash") + F.dot(qm, pm, "v-s1", 5) + F.text(9.8, 1.3, "D", "end") + F.text(4.6, .6, "MR", "end") + F.text(9.8, MC(9.6) + .8, "MC", "end");
    s.msg = `Monopoly: Q = <b>${qm.toFixed(2)}</b>, P = <b>${pm.toFixed(2)}</b> · Competition: Q = ${qc.toFixed(2)}, P = ${pc.toFixed(2)} · DWL = ${(.5 * (pm - MC(qm)) * (qc - qm)).toFixed(2)}`;
    return SV(o);
  });
}];

/* ---- Keynesian cross ---- */
reg.keynes = ["Keynesian cross: equilibrium output is where planned spending AE = a + bY meets the 45° line (AE = Y). A rise in autonomous spending raises Y by more than the rise itself: the multiplier 1/(1 − MPC).", (root) => {
  ui(root, [{ k: "b", label: "MPC b ", min: .5, max: .9, step: .05, v: .75 }, { k: "dA", label: "Change in spending ΔA ", min: -30, max: 30, step: 5, v: 20 }], s => {
    const F = frame(0, 1000, 0, 1000), A0 = 60, A1 = A0 + s.dA, Y0 = A0 / (1 - s.b), Y1 = A1 / (1 - s.b);
    let o = F.clip + F.axes([0, 250, 500, 750, 1000], [0, 500, 1000], "Output Y", "AE") + F.g(F.line(0, 0, 1000, 1000, "v-cm") + F.line(0, A0, 1000, A0 + s.b * 1000, "v-c3 v-dash") + F.line(0, A1, 1000, A1 + s.b * 1000, "v-c1"));
    o += F.line(Y1, 0, Y1, Y1, "v-cm v-dash") + F.dot(Y1, Y1, "v-s2", 5) + F.dot(Y0, Y0, "v-sm", 3.5) + F.text(940, 960, "45°", "end");
    s.msg = `Multiplier = 1/(1 − ${s.b}) = <b>${(1 / (1 - s.b)).toFixed(2)}</b> · Y* moves ${Y0.toFixed(0)} → <b>${Y1.toFixed(0)}</b> (ΔY = ${(Y1 - Y0).toFixed(0)} for ΔA = ${s.dA})`;
    return SV(o);
  });
}];

/* ---- AD-AS ---- */
reg.adas = ["AD–AS model. Shift aggregate demand or short-run supply and watch price level and output change relative to potential output (vertical long-run AS).", (root) => {
  ui(root, [{ k: "ad", label: "AD shift ", min: -3, max: 3, step: .5, v: 0 }, { k: "sr", label: "SRAS shift ", min: -3, max: 3, step: .5, v: 0 }], s => {
    const F = frame(0, 10, 0, 12), AD = (y, a) => 10 + a - y, SR = (y, v) => 1 + v + .5 * y;
    const Y = (9 + s.ad - s.sr) / 1.5, P = AD(Y, s.ad);
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], [0, 4, 8, 12], "Real output Y", "Price level") + F.g(F.line(0, AD(0, 0), 10, AD(10, 0), "v-c3 v-dash") + F.line(0, SR(0, 0), 10, SR(10, 0), "v-c2 v-dash") + F.line(0, AD(0, s.ad), 10, AD(10, s.ad), "v-c3") + F.line(0, SR(0, s.sr), 10, SR(10, s.sr), "v-c2") + F.line(6, 0, 6, 12, "v-c4"));
    o += F.dot(Y, P, "v-s1", 5) + F.text(6.1, 11.4, "LRAS (potential)", "start") + F.text(.6, AD(.6, s.ad) + .8, "AD", "start") + F.text(9.6, SR(9.6, s.sr) + .9, "SRAS", "end");
    s.msg = `Y = <b>${Y.toFixed(2)}</b>, P = <b>${P.toFixed(2)}</b> · ` + (Y > 6.05 ? "inflationary gap (output above potential)" : Y < 5.95 ? "recessionary gap (output below potential)" : "at potential output");
    return SV(o);
  });
}];

/* ---- Phillips curve ---- */
reg.phillips = ["Short-run Phillips curve: lower unemployment goes with higher inflation. When expected inflation rises the whole curve shifts up, so the trade-off is only temporary; at the natural rate (5%) inflation equals expected inflation.", (root) => {
  ui(root, [{ k: "e", label: "Expected inflation ", min: 0, max: 6, step: .5, v: 2 }], s => {
    const F = frame(0, 12, -2, 10), f = (u, e) => e - .6 * (u - 5);
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10, 12], [0, 4, 8], "Unemployment %", "Inflation %") + F.g(F.line(0, f(0, 2), 12, f(12, 2), "v-c3 v-dash") + F.line(0, f(0, s.e), 12, f(12, s.e), "v-c1") + F.line(5, -2, 5, 10, "v-cm v-dash"));
    o += F.dot(5, s.e, "v-s2", 5) + F.text(5.2, 9.2, "natural rate", "start");
    s.msg = `At u = 5%: inflation = expected inflation = <b>${s.e}%</b>`;
    return SV(o);
  });
}];

/* ---- Newton–Raphson ---- */
reg.newton = ["Newton–Raphson for f(x) = x² − 2 = 0. From each guess xₙ draw the tangent; where it hits the x-axis is the next guess xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). The root √2 ≈ 1.41421 is found in a few steps.", (root) => {
  let it = [3];
  ui(root, [
    { k: "x0", label: "start x₀ ", min: .5, max: 3, step: .1, v: 3 },
    { btn: "Next step", on: () => { const x = it[it.length - 1]; if (it.length < 8) it.push(x - (x * x - 2) / (2 * x)); } },
    { btn: "Reset", on: s => { it = [s.x0]; } }
  ], s => {
    const f = x => x * x - 2, F = frame(0, 3.4, -3, 8);
    let o = F.clip + F.axes([0, 1, 2, 3], [-2, 0, 4, 8], "x", "f(x)") + F.g(F.path(f, 0, 3.4, "v-c1"));
    it.forEach((x, i) => { o += F.line(x, 0, x, f(x), "v-cm v-dash"); if (i < it.length - 1) o += F.g(F.line(x, f(x), it[i + 1], 0, i === it.length - 2 ? "v-c2" : "v-c3")); o += F.dot(x, 0, i === it.length - 1 ? "v-s4" : "v-s2", 4); });
    s.msg = "x: " + it.map(v => v.toFixed(5)).join(" → ") + `<br>error = ${Math.abs(it[it.length - 1] - Math.SQRT2).toExponential(1)}`;
    return SV(o);
  }, (k, s) => { if (k === "x0") it = [s.x0]; });
}];

/* ---- Trapezoid / Riemann ---- */
reg.trap = ["Approximating ∫₀^π sin x dx = 2 with n strips. More strips means a smaller error. Trapezoids usually beat left rectangles; the midpoint rule is also very accurate.", (root, arg) => {
  ui(root, [
    { k: "m", label: "Rule ", opts: ["Trapezoid", "Left rectangles", "Midpoint"], v: arg === "left" ? 1 : 0 },
    { k: "n", label: "n strips ", min: 1, max: 30, step: 1, v: 5, fmt: v => v }
  ], s => {
    const n = s.n, h = Math.PI / n, f = Math.sin, F = frame(0, 3.4, -.1, 1.2);
    let o = F.clip + F.axes([0, 1, 2, 3], [0, 1], "x", "y"), est = 0, sh = "";
    for (let i = 0; i < n; i++) {
      const a = i * h, b = a + h;
      if (s.m === 0) { est += h * (f(a) + f(b)) / 2; sh += F.poly([[a, 0], [a, f(a)], [b, f(b)], [b, 0]], "v-a1") + F.line(a, 0, a, f(a), "v-cm"); }
      else { const hh = s.m === 1 ? f(a) : f((a + b) / 2); est += h * hh; sh += F.poly([[a, 0], [a, hh], [b, hh], [b, 0]], "v-a1") + F.line(a, 0, a, hh, "v-cm"); }
    }
    o += F.g(sh + F.path(f, 0, Math.PI, "v-c2", 200));
    s.msg = `Estimate = <b>${est.toFixed(4)}</b> · exact = 2 · error = ${Math.abs(est - 2).toFixed(4)}`;
    return SV(o);
  });
}];

/* ---- Taylor ---- */
reg.taylor = ["Taylor/Maclaurin polynomials of sin x. Each extra term hugs the true curve (orange) over a wider interval around x = 0.", (root) => {
  ui(root, [{ k: "k", label: "terms ", min: 1, max: 8, step: 1, v: 2, fmt: v => v }], s => {
    const P = x => { let t = 0, term = x; for (let j = 0; j < s.k; j++) { t += term; term *= -x * x / ((2 * j + 2) * (2 * j + 3)); } return t; };
    const F = frame(-7, 7, -2.5, 2.5);
    let o = F.clip + F.axes([-6, -3, 0, 3, 6], [-2, 0, 2], "x", "y") + F.g(F.path(Math.sin, -7, 7, "v-c2", 240) + F.path(P, -7, 7, "v-c1", 240));
    s.msg = `Polynomial of degree ${2 * s.k - 1}: P(x) = x − x³/3! + x⁵/5! … (${s.k} terms)`;
    return SV(o);
  });
}];

/* ---- Fourier ---- */
reg.fourier = ["Fourier series of a square wave: adding more sine terms (blue) gives a better fit to the wave (orange). The small overshoot near the jumps is the Gibbs phenomenon.", (root) => {
  ui(root, [{ k: "k", label: "terms N ", min: 1, max: 30, step: 1, v: 3, fmt: v => v }], s => {
    const S = x => { let t = 0; for (let j = 1; j <= s.k; j++) t += 4 / Math.PI * Math.sin((2 * j - 1) * x) / (2 * j - 1); return t; };
    const F = frame(-Math.PI, Math.PI, -1.6, 1.6);
    let o = F.clip + F.axes([-3, -2, -1, 0, 1, 2, 3], [-1, 0, 1], "x", "f(x)") + F.g(`<path class="v-c2" d="M${F.X(-Math.PI)} ${F.Y(-1)}L${F.X(0)} ${F.Y(-1)}M${F.X(0)} ${F.Y(1)}L${F.X(Math.PI)} ${F.Y(1)}"/>` + F.path(S, -Math.PI, Math.PI, "v-c3", 400));
    s.msg = `${s.k} term(s): f(x) ≈ (4/π) Σ sin((2k−1)x)/(2k−1)`;
    return SV(o);
  });
}];

/* ---- Lagrange multipliers ---- */
reg.lagrange = ["Maximise f = xy subject to x + y = 4. Slide the level curve xy = c: for c < 4 it crosses the constraint line (you can still do better), at c = 4 it just touches it at (2, 2) (the optimum), for c > 4 it never reaches the line.", (root) => {
  ui(root, [{ k: "c", label: "level c (xy = c) ", min: .5, max: 6, step: .1, v: 2 }], s => {
    const F = frame(0, 6, 0, 6);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5, 6], [0, 2, 4, 6], "x", "y") + F.g(F.line(0, 4, 4, 0, "v-c3") + F.path(x => s.c / x, s.c / 6, 6, "v-c2", 200));
    o += F.dot(2, 2, "v-s4", 5) + F.text(2.2, 1.6, "(2, 2)", "start") + F.text(.2, 4.3, "x + y = 4", "start");
    s.msg = s.c < 3.95 ? `xy = ${s.c.toFixed(1)}: the curve cuts the line twice, so a larger c is still reachable` : s.c > 4.05 ? `xy = ${s.c.toFixed(1)}: no point of this curve satisfies the constraint` : "Tangent at (2, 2): maximum value = 4 (gradients of f and the constraint are parallel)";
    return SV(o);
  });
}];

/* ---- Sequence convergence ---- */
reg.seq = ["The sequence aₙ = 1 + (−1)ⁿ/n converges to 1. For any ε-band around the limit, all terms after some index N stay inside the band (dashed vertical line). Shrink ε and N moves right.", (root) => {
  ui(root, [{ k: "e", label: "ε ", min: .05, max: 1, step: .05, v: .4 }], s => {
    const e = s.e, N = Math.floor(1 / e), F = frame(0, 41, 0, 2.2);
    let o = F.clip + F.axes([0, 10, 20, 30, 40], [0, 1, 2], "n", "aₙ");
    o += F.poly([[0, 1 - e], [41, 1 - e], [41, 1 + e], [0, 1 + e]], "v-a1") + F.line(0, 1, 41, 1, "v-cm v-dash") + F.line(N + .5, 0, N + .5, 2.2, "v-c2 v-dash");
    for (let n = 1; n <= 40; n++) { const a = 1 + (n % 2 ? -1 : 1) / n; o += F.dot(n, a, Math.abs(a - 1) < e ? "v-s1" : "v-s4", 3.2); }
    s.msg = `ε = ${e.toFixed(2)} → |aₙ − 1| = 1/n &lt; ε for all n &gt; <b>N = ${N}</b>`;
    return SV(o);
  });
}];

/* ---- Mean value theorem ---- */
reg.mvt = ["Mean Value Theorem: between a and b there is a point c where the tangent is parallel to the chord joining the ends. Move a and b to see the point(s) c.", (root) => {
  const f = x => Math.sin(x) + .3 * x, d = x => Math.cos(x) + .3;
  ui(root, [{ k: "a", label: "a ", min: .2, max: 3, step: .1, v: .8 }, { k: "b", label: "b ", min: 3.5, max: 6.8, step: .1, v: 5.5 }], s => {
    const F = frame(0, 7, -1.2, 3.4), m = (f(s.b) - f(s.a)) / (s.b - s.a), cs = [];
    for (let x = s.a; x < s.b - .002; x += .002) if ((d(x) - m) * (d(x + .002) - m) <= 0) cs.push(x + .001);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5, 6, 7], [-1, 0, 1, 2, 3], "x", "f(x)") + F.g(F.path(f, 0, 7, "v-c1", 240) + F.line(s.a, f(s.a), s.b, f(s.b), "v-c2"));
    cs.forEach(c => o += F.g(F.line(c - 1, f(c) - m, c + 1, f(c) + m, "v-c4")) + F.dot(c, f(c), "v-s4", 4));
    o += F.dot(s.a, f(s.a), "v-s2", 4) + F.dot(s.b, f(s.b), "v-s2", 4);
    s.msg = `Chord slope (f(b) − f(a))/(b − a) = ${m.toFixed(3)} · c ≈ ${cs.map(c => c.toFixed(2)).join(", ") || "none found"} where f′(c) equals it`;
    return SV(o);
  });
}];

/* ---- Joins ---- */
reg.joins = ["SQL joins as Venn diagrams: the blue-green area is the set of rows returned from Table A and Table B.", (root) => {
  const sql = ["SELECT * FROM A INNER JOIN B ON A.id = B.id;", "SELECT * FROM A LEFT JOIN B ON A.id = B.id;", "SELECT * FROM A RIGHT JOIN B ON A.id = B.id;", "SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id;", "SELECT * FROM A LEFT JOIN B ON A.id = B.id WHERE B.id IS NULL;"];
  ui(root, [{ k: "j", label: "Join ", opts: ["INNER", "LEFT", "RIGHT", "FULL OUTER", "LEFT (only A)"], v: 0 }], s => {
    const id = "j" + (++uid);
    let o = `<defs><clipPath id="${id}a"><circle cx="165" cy="85" r="68"/></clipPath><mask id="${id}m"><rect width="440" height="190" fill="#fff"/><circle cx="255" cy="85" r="68" fill="#000"/></mask></defs>`;
    const A = `<circle cx="165" cy="85" r="68" class="v-a1"/>`, B = `<circle cx="255" cy="85" r="68" class="v-a1"/>`;
    o += [`<g clip-path="url(#${id}a)"><circle cx="255" cy="85" r="68" class="v-a1"/></g>`, A, B, A + B, `<g mask="url(#${id}m)">${A}</g>`][s.j];
    o += `<circle cx="165" cy="85" r="68" class="v-cm"/><circle cx="255" cy="85" r="68" class="v-cm"/><text class="v-t" x="125" y="90" text-anchor="middle">A</text><text class="v-t" x="295" y="90" text-anchor="middle">B</text>`;
    s.msg = `<code>${sql[s.j]}</code>`;
    return SV(o, 440, 175);
  });
}];

/* ---- ANOVA ---- */
reg.anova = ["Three groups of 6 observations. Dots are data, solid bars are group means, the dashed line is the grand mean. When the group means move apart, between-group variation grows against within-group variation and F gets large.", (root) => {
  const r = seedn(seeded(3)), Z = [0, 1, 2].map(() => Array.from({ length: 6 }, () => r()));
  ui(root, [{ k: "sep", label: "Separation of means ", min: 0, max: 3, step: .25, v: 1 }], s => {
    const F = frame(.3, 3.7, 0, 10), mu = [5 - s.sep, 5, 5 + s.sep], G = Z.map((z, g) => z.map(v => mu[g] + v));
    const gm = G.map(a => a.reduce((x, y) => x + y) / 6), all = gm.reduce((x, y) => x + y) / 3;
    const ssb = 6 * gm.reduce((a, m) => a + (m - all) ** 2, 0), ssw = G.reduce((a, g, i) => a + g.reduce((t, v) => t + (v - gm[i]) ** 2, 0), 0), Fv = (ssb / 2) / (ssw / 15);
    let o = F.clip + F.axes([1, 2, 3], [0, 5, 10], "Group", "y") + F.line(.3, all, 3.7, all, "v-cm v-dash");
    G.forEach((g, i) => { g.forEach((v, j) => o += F.dot(i + 1 + (j - 2.5) * .07, v, "v-s" + (i + 1), 3.6)); o += F.line(i + .7, gm[i], i + 1.3, gm[i], "v-c" + (i + 1)); });
    s.msg = `SSB = ${ssb.toFixed(1)}, SSW = ${ssw.toFixed(1)} → F = <b>${Fv.toFixed(2)}</b> (5% critical F(2, 15) = 3.68) → ${Fv > 3.68 ? "<b>reject H₀</b>: means differ" : "do not reject H₀"}`;
    return SV(o);
  });
}];

/* ---- Latin square ---- */
reg.latin = ["A 4×4 Latin square: each treatment (A–D) appears exactly once in every row and every column, so it removes two sources of variation (rows and columns). Press Shuffle for another valid layout.", (root) => {
  let rows = [0, 1, 2, 3], cols = [0, 1, 2, 3], sym = [0, 1, 2, 3];
  const sh = a => { for (let i = 3; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } };
  ui(root, [{ btn: "Shuffle", on: () => { sh(rows); sh(cols); sh(sym); } }], () => {
    let o = "";
    for (let c = 0; c < 4; c++) o += `<text x="${110 + c * 62 + 30}" y="14" text-anchor="middle">Column ${c + 1}</text>`;
    for (let i = 0; i < 4; i++) { o += `<text x="100" y="${36 + i * 46 + 26}" text-anchor="end">Row ${i + 1}</text>`; for (let j = 0; j < 4; j++) { const t = sym[(rows[i] + cols[j]) % 4]; o += `<rect class="v-a${t + 1}" x="${110 + j * 62}" y="${24 + i * 46 + 4}" width="58" height="42" rx="6"/><text class="v-t" x="${110 + j * 62 + 29}" y="${24 + i * 46 + 32}" text-anchor="middle" style="font-size:18px;font-weight:700">${"ABCD"[t]}</text>`; } }
    return SV(o, 440, 215);
  });
}, 480];

/* ---- 2^2 factorial interaction plot ---- */
reg.factorial = ["2² factorial design: mean response at the low (−) and high (+) level of factor A, with one line for each level of B. Parallel lines mean no interaction; lines that cross or diverge mean A and B interact.", (root) => {
  ui(root, [{ k: "a", label: "Effect A ", min: -6, max: 6, step: .5, v: 4 }, { k: "b", label: "Effect B ", min: -6, max: 6, step: .5, v: 2 }, { k: "ab", label: "Interaction AB ", min: -6, max: 6, step: .5, v: 0 }], s => {
    const y = (A, B) => 10 + s.a / 2 * A + s.b / 2 * B + s.ab / 2 * A * B, F = frame(-1.4, 1.4, 0, 20);
    let o = F.clip + F.axes([-1, 1], [0, 5, 10, 15, 20], "A", "mean y") + F.line(-1, y(-1, -1), 1, y(1, -1), "v-c3") + F.line(-1, y(-1, 1), 1, y(1, 1), "v-c2");
    [-1, 1].forEach(A => { o += F.dot(A, y(A, -1), "v-s3", 4.5) + F.dot(A, y(A, 1), "v-s2", 4.5); });
    o += F.text(1.35, y(1, -1), "B−", "end") + F.text(1.35, y(1, 1), "B+", "end");
    s.msg = Math.abs(s.ab) < .25 ? "Lines are parallel: no interaction, the effect of A is the same at both levels of B." : "Lines are not parallel: the effect of A depends on the level of B (interaction).";
    return SV(o);
  });
}];

/* ---- Markov chain ---- */
reg.markov = ["A 3-state Markov chain (weather). The token moves each step using the highlighted row of P. In the long run the share of time in each state (bars) settles at the stationary distribution π (outline), where πP = π.", (root) => {
  const P = [[.7, .2, .1], [.3, .4, .3], [.2, .3, .5]], nm = ["Sunny", "Cloudy", "Rainy"];
  let pi = [1 / 3, 1 / 3, 1 / 3]; for (let k = 0; k < 200; k++) { const q = [0, 0, 0]; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) q[j] += pi[i] * P[i][j]; pi = q; }
  const D = { cur: 0, cnt: [1, 0, 0], t: 0 };
  const step = () => { const u = rnd(); let a = 0, j = 0; for (; j < 2; j++) { a += P[D.cur][j]; if (u < a) break; } D.cur = j; D.cnt[j]++; D.t++; };
  ui(root, [{ btn: "1 step", on: step }, { anim: "Run", on: () => { for (let i = 0; i < 3; i++) step(); }, ms: 200 }, { btn: "Reset", on: () => { D.cur = 0; D.cnt = [1, 0, 0]; D.t = 0; } }], s => {
    const pos = [[110, 50], [330, 50], [220, 140]], tot = D.cnt.reduce((a, b) => a + b);
    let o = "";
    [[0, 1], [1, 2], [0, 2]].forEach(([a, b]) => o += `<line class="v-cm" x1="${pos[a][0]}" y1="${pos[a][1]}" x2="${pos[b][0]}" y2="${pos[b][1]}"/>`);
    pos.forEach((p, i) => o += `<circle class="${D.cur === i ? "v-s2" : "v-box"}" cx="${p[0]}" cy="${p[1]}" r="26"/><text class="v-t" x="${p[0]}" y="${p[1] + 4}" text-anchor="middle" style="font-weight:700">${nm[i]}</text>`);
    nm.forEach((n, i) => { const x = 40 + i * 130; o += `<rect class="v-a1" x="${x}" y="${215 - 55 * D.cnt[i] / tot}" width="36" height="${55 * D.cnt[i] / tot}"/><rect x="${x}" y="${215 - 55 * pi[i]}" width="36" height="${55 * pi[i]}" fill="none" stroke="var(--acc2)" stroke-dasharray="4 3"/><text x="${x + 18}" y="228" text-anchor="middle">${n} ${(100 * D.cnt[i] / tot).toFixed(0)}%</text>`; });
    o += `<line class="v-ax" x1="25" y1="215" x2="430" y2="215"/>`;
    s.msg = `<table><tr><th>P</th>${nm.map(n => `<th>${n}</th>`).join("")}</tr>${P.map((r, i) => `<tr class="${D.cur === i ? "on" : ""}"><td>${nm[i]}</td>${r.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</table>Steps: ${D.t} · stationary π = (${pi.map(v => v.toFixed(2)).join(", ")})`;
    return SV(o, 440, 236);
  });
}, 520];

/* ---- Random walk / gambler's ruin ---- */
reg.walk = ["Random walks starting at 5. Absorbing mode (gambler's ruin): a path stops when it hits 0 (ruin) or 10 (win). Reflecting mode: at 0 the walker is pushed back to 1. Change p to bias the walk.", (root, arg) => {
  let paths = [], tally = [0, 0];
  const colors = ["v-c1", "v-c2", "v-c3", "v-c4", "v-cm"], reset = () => { paths = Array.from({ length: 5 }, () => [5]); tally = [0, 0]; };
  reset();
  const step = s => paths.forEach(p => {
    const x = p[p.length - 1]; if (s.mode === 0 && (x <= 0 || x >= 10)) return; if (p.length > 80) return;
    if (s.mode === 1 && x <= 0) return p.push(1);
    if (s.mode === 1 && x >= 10) return p.push(9);
    p.push(x + (rnd() < s.p ? 1 : -1));
  });
  ui(root, [
    { k: "mode", label: "Barriers ", opts: ["Absorbing", "Reflecting"], v: arg === "reflect" ? 1 : 0 },
    { k: "p", label: "p(up) ", min: .2, max: .8, step: .05, v: .5 },
    { anim: "Run", on: step, ms: 90 }, { btn: "New paths", on: reset }
  ], s => {
    const F = frame(0, 80, -.5, 10.5);
    let o = F.clip + F.axes([0, 20, 40, 60, 80], [0, 5, 10], "step", "position") + F.line(0, 0, 80, 0, "v-cm") + F.line(0, 10, 80, 10, "v-cm");
    let ruin = 0, win = 0;
    paths.forEach((p, i) => { o += F.g(`<path class="${colors[i]}" d="${p.map((v, t) => (t ? "L" : "M") + F.X(t).toFixed(1) + " " + F.Y(v).toFixed(1)).join("")}"/>`) + F.dot(p.length - 1, p[p.length - 1], "v-sm", 2.5); if (s.mode === 0) { const e = p[p.length - 1]; if (e <= 0) ruin++; if (e >= 10) win++; } });
    s.msg = s.mode === 0 ? `Ruined: <b>${ruin}</b> · reached target: <b>${win}</b> · still playing: ${5 - ruin - win}` + (s.p === .5 ? " · fair game: P(win) = 5/10 = 0.5" : "") : "Reflecting barrier at 0: the walk never leaves the state space.";
    return SV(o);
  }, k => { if (k === "mode") reset(); });
}];

/* ---- Poisson process ---- */
reg.poisson = ["Poisson process: events arrive at random with average rate λ per unit time. N(t) counts the arrivals so far and jumps by 1 at each event; gaps between events are Exponential(λ).", (root) => {
  let times = [], t = 10;
  const gen = lam => { times = []; let x = 0; for (;;) { x += -Math.log(1 - rnd()) / lam; if (x > 10) break; times.push(x); } };
  ui(root, [
    { k: "l", label: "rate λ ", min: .5, max: 5, step: .5, v: 2 },
    { anim: "Run", on: s => { if (t >= 10) { gen(s.l); t = 0; } t = Math.min(10, t + .1); }, ms: 60 },
    { btn: "New run (instant)", on: s => { gen(s.l); t = 10; } }
  ], s => {
    if (!times.length && t >= 10) gen(s.l);
    const vis = times.filter(x => x <= t), ym = Math.max(12, Math.ceil(s.l * 10 * 1.5)), F = frame(0, 10, 0, ym);
    let d = `M${F.X(0)} ${F.Y(0)}`; vis.forEach((x, i) => d += `L${F.X(x).toFixed(1)} ${F.Y(i)}L${F.X(x).toFixed(1)} ${F.Y(i + 1)}`); d += `L${F.X(t).toFixed(1)} ${F.Y(vis.length)}`;
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], range(0, ym, ym > 30 ? 10 : 5), "time t", "N(t)") + F.g(`<path class="v-c1" d="${d}"/>`) + F.line(0, 0, 10, s.l * 10, "v-c2 v-dash");
    vis.forEach(x => o += F.dot(x, 0, "v-s4", 3));
    s.msg = `t = ${t.toFixed(1)}: N(t) = <b>${vis.length}</b> events · expected λt = ${(s.l * t).toFixed(1)} (dashed line)`;
    return SV(o);
  }, (k, s) => { if (k === "l") { gen(s.l); t = 10; } });
}];

/* ---- Monte Carlo pi ---- */
reg.mcpi = ["Monte Carlo: throw random points into the unit square. The fraction landing inside the quarter circle estimates π/4, so π ≈ 4 × (inside / total). More points give a better estimate.", (root) => {
  const D = { a: "", b: "", i: 0, n: 0 };
  const add = k => { for (let j = 0; j < k && D.n < 6000; j++) { const x = rnd(), y = rnd(), p = `M${(20 + x * 260).toFixed(1)} ${(280 - y * 260).toFixed(1)}h.01`; if (x * x + y * y <= 1) { D.a += p; D.i++; } else D.b += p; D.n++; } };
  ui(root, [{ btn: "+50", on: () => add(50) }, { btn: "+500", on: () => add(500) }, { anim: "Run", on: () => add(30), ms: 80 }, { btn: "Reset", on: () => { D.a = D.b = ""; D.i = D.n = 0; } }], s => {
    let o = `<rect class="v-box" x="20" y="20" width="260" height="260"/><path class="v-dot1" d="${D.a}"/><path class="v-dot4" d="${D.b}"/><path class="v-c2" d="M20 20A260 260 0 0 1 280 280"/>`;
    s.msg = D.n ? `Points: ${D.n} · inside: ${D.i} · π ≈ <b>${(4 * D.i / D.n).toFixed(4)}</b> (true 3.1416)` : "Press +500 or Run.";
    return SV(o, 300, 300);
  });
}, 340];

/* ---- Inverse transform ---- */
reg.invtr = ["Inverse-transform sampling: pick U ~ Uniform(0,1), go across to the CDF curve, then down to the x-axis. x = F⁻¹(U) = −ln(1 − U)/λ follows the Exponential(λ) distribution. Ticks on the axis are the generated values.", (root) => {
  let xs = [], last = null;
  const gen = (s, k) => { for (let i = 0; i < k; i++) { const u = rnd(), x = -Math.log(1 - u) / s.l; xs.push(x); last = [u, x]; } };
  ui(root, [{ k: "l", label: "λ ", min: .5, max: 3, step: .5, v: 1 }, { btn: "Generate 1", on: s => gen(s, 1) }, { btn: "+100", on: s => gen(s, 100) }, { anim: "Auto", on: s => gen(s, 1), ms: 250 }, { btn: "Reset", on: () => { xs = []; last = null; } }], s => {
    const F = frame(0, 5, 0, 1.05);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5], [0, .5, 1], "x", "F(x)") + F.g(F.path(x => 1 - Math.exp(-s.l * x), 0, 5, "v-c1", 200));
    o += F.g(xs.slice(-150).map(x => F.dot(x, .02, "v-s2", 2.2).replace("/>", ' opacity=".6"/>')).join(""));
    if (last) o += F.line(0, last[0], last[1], last[0], "v-c4 v-dash") + F.line(last[1], last[0], last[1], 0, "v-c4 v-dash") + F.dot(0, last[0], "v-s4", 4) + F.dot(last[1], 0, "v-s4", 4);
    s.msg = (last ? `U = ${last[0].toFixed(3)} → x = ${last[1].toFixed(3)} · ` : "") + `n = ${xs.length}` + (xs.length ? `, mean of x = ${(xs.reduce((a, b) => a + b) / xs.length).toFixed(2)} (theory 1/λ = ${(1 / s.l).toFixed(2)})` : "");
    return SV(o);
  }, k => { if (k === "l") { xs = []; last = null; } });
}];

/* ---- LP graphical method ---- */
reg.lp = ["Graphical LP: maximise z = 3x + 2y subject to x ≤ 4, x + y ≤ 6, x + 3y ≤ 12, x, y ≥ 0. The shaded polygon is the feasible region; the optimum is the last corner touched as the objective line slides outward. Dots are integer points (for integer programming).", (root) => {
  const poly = [[0, 0], [4, 0], [4, 2], [3, 3], [0, 4]];
  ui(root, [{ k: "z", label: "z = ", min: 0, max: 20, step: .5, v: 8, fmt: v => v }], s => {
    const F = frame(0, 7, 0, 6);
    let o = F.clip + F.axes([0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6], "x", "y") + F.poly(poly, "v-a1");
    for (let x = 0; x <= 4; x++) for (let y = 0; y <= 4; y++) if (x + y <= 6 && x + 3 * y <= 12) o += F.dot(x, y, "v-sm", 1.8);
    o += F.g(F.line(0, s.z / 2, 7, (s.z - 21) / 2, "v-c2"));
    poly.forEach(p => o += F.dot(p[0], p[1], "v-s3", 3.5) + F.text(p[0] + .12, p[1] + .22, `(${p[0]},${p[1]})`, "start"));
    o += F.dot(4, 2, "v-s4", 5.5);
    s.msg = s.z <= 16 ? `z = ${s.z}: the line still touches the region${s.z === 16 ? " only at the corner <b>(4, 2)</b>: optimum z = 16" : ""}.` : "z = " + s.z + ": the line has left the feasible region, so no feasible point gives this value. Best was z = 16 at (4, 2).";
    return SV(o);
  });
}];

/* ---- Population pyramid ---- */
reg.pyramid = ["Population pyramids (males left, females right). Wide base = young, fast-growing population; straight sides = stable; narrow base = ageing, shrinking population.", (root) => {
  const sets = [Array.from({ length: 17 }, (_, i) => 9.3 * Math.exp(-.2 * i)), [3.4, 3.4, 3.4, 3.4, 3.4, 3.4, 3.4, 3.4, 3.3, 3.2, 3.0, 2.8, 2.5, 2.1, 1.7, 1.2, .9], [2.2, 2.3, 2.5, 2.8, 3.2, 3.5, 3.7, 3.8, 3.8, 3.6, 3.3, 2.9, 2.4, 1.9, 1.4, .9, .6]];
  const info = ["Expanding (e.g. Bangladesh decades ago): high fertility, many children.", "Stationary: births ≈ deaths, nearly equal age groups.", "Constricting (e.g. Japan today): low fertility, many elderly."];
  ui(root, [{ k: "t", label: "Shape ", opts: ["Expanding", "Stationary", "Constricting"], v: 0 }], s => {
    const d = sets[s.t]; let o = `<text x="110" y="12" text-anchor="middle">Male %</text><text x="330" y="12" text-anchor="middle">Female %</text>`;
    d.forEach((v, i) => { const y = 218 - (i + 1) * 11.8, w = v * 19; o += `<rect class="v-a3" x="${208 - w}" y="${y}" width="${w}" height="10.4" stroke="var(--blue)"/><rect class="v-a4" x="${232}" y="${y}" width="${w}" height="10.4" stroke="var(--bad)"/><text x="220" y="${y + 8.5}" text-anchor="middle" style="font-size:8px">${i < 16 ? i * 5 + "-" + (i * 5 + 4) : "80+"}</text>`; });
    s.msg = info[s.t];
    return SV(o, 440, 224);
  });
}];

/* ---- Logistic / exponential growth ---- */
reg.logistic = ["Exponential growth (orange) keeps accelerating, while logistic growth (green) slows down and levels off at the carrying capacity K because resources are limited. Both start at N₀ = 5.", (root) => {
  ui(root, [{ k: "r", label: "growth rate r ", min: .1, max: .6, step: .05, v: .3 }, { k: "K", label: "capacity K ", min: 50, max: 120, step: 10, v: 100, fmt: v => v }], s => {
    const N0 = 5, F = frame(0, 30, 0, 140);
    let o = F.clip + F.axes([0, 10, 20, 30], [0, 50, 100], "time", "population") + F.g(F.line(0, s.K, 30, s.K, "v-cm v-dash") + F.path(t => N0 * Math.exp(s.r * t), 0, 30, "v-c2", 150) + F.path(t => s.K / (1 + (s.K - N0) / N0 * Math.exp(-s.r * t)), 0, 30, "v-c1", 150));
    o += F.text(.5, s.K + 6, "K", "start") + F.text(29.5, 128, "exponential", "end") + F.text(29.5, s.K - 7, "logistic", "end");
    s.msg = `Logistic: N(t) = K / (1 + ((K − N₀)/N₀)·e^(−rt)) · fastest growth at N = K/2 = ${s.K / 2}`;
    return SV(o);
  });
}];

/* ---- Age heaping ---- */
reg.heaping = ["Reported single-year ages often pile up on ages ending in 0 and 5 (age heaping) because people round their age. The spikes are errors; the smooth dashed line is what a good census should show.", (root) => {
  const r = seeded(9), base = a => 100 * Math.exp(-.035 * (a - 20)), noise = range(20, 49).map(() => .96 + .08 * r());
  ui(root, [{ k: "h", label: "Digit preference ", min: 0, max: 1, step: .1, v: .8 }], s => {
    const F = frame(19, 50, 0, 190), bw = (F.X(1) - F.X(0)) * .75;
    let o = F.clip + F.axes([20, 25, 30, 35, 40, 45], [0, 100], "age", "persons");
    range(20, 49).forEach((a, i) => { const spike = a % 10 === 0 ? 1 + .9 * s.h : a % 5 === 0 ? 1 + .6 * s.h : 1, v = base(a) * noise[i] * spike; o += `<rect class="${spike > 1 ? "v-a4" : "v-a1"}" x="${F.X(a) - bw / 2}" y="${F.Y(v)}" width="${bw}" height="${F.Y(0) - F.Y(v)}"/>`; });
    o += F.g(F.path(base, 20, 49, "v-c2 v-dash", 60));
    s.msg = s.h === 0 ? "No heaping: ages are reported accurately." : "Red bars: ages ending in 0 or 5 are over-reported (and neighbours under-reported).";
    return SV(o);
  });
}];

/* ============================================================
   NEW VISUALS for 1st and 4th year topics
   ============================================================ */

/* ---- Skewness & kurtosis ---- */
reg.skew = ["Choose a shape. All curves are standardised to mean 0 and SD 1; the dashed normal curve is for comparison. In a right-skewed curve the order is mode &lt; median &lt; mean; in a left-skewed curve it reverses. A peaked, heavy-tailed curve has β₂ &gt; 3 (leptokurtic) and a flat one β₂ &lt; 3 (platykurtic).", (root) => {
  const g = (k, z) => { const x = k + z * Math.sqrt(k); return x <= 0 ? 0 : Math.sqrt(k) * Math.exp((k - 1) * Math.log(x) - x - lg(k)); };
  const D = [z => phi(z), z => g(2.5, z), z => g(2.5, -z), z => Math.exp(-Math.SQRT2 * Math.abs(z)) / Math.SQRT2, z => Math.abs(z) <= Math.sqrt(3) ? 1 / (2 * Math.sqrt(3)) : 0];
  const info = [[0, 3], [1.26, 5.4], [-1.26, 5.4], [0, 6], [0, 1.8]];
  ui(root, [{ k: "d", label: "Shape ", opts: ["Symmetric (normal)", "Right-skewed", "Left-skewed", "Peaked, heavy tails", "Flat (uniform)"], v: 1 }], s => {
    const f = D[s.d], F = frame(-4, 4, 0, .8);
    let mean = 0, tot = 0, mode = 0, best = -1, med = null, cum = 0;
    for (let z = -4; z <= 4; z += .01) { const y = f(z); tot += y * .01; mean += z * y * .01; if (y > best + 1e-9) { best = y; mode = z; } }
    for (let z = -4; z <= 4; z += .01) { cum += f(z) * .01 / tot; if (med === null && cum >= .5) med = z; }
    let o = F.clip + F.axes([-3, -2, -1, 0, 1, 2, 3], [], "z", "");
    o += F.g(F.area(f, -4, 4, "v-a1") + F.path(phi, -4, 4, "v-cm v-dash") + F.path(f, -4, 4, "v-c1"));
    const L = (x, cls, t, y) => F.line(x, 0, x, .7, cls + " v-dash") + F.text(x, y, t, "middle");
    o += L(mean, "v-c4", "mean", .75) + L(med, "v-c2", "median", .71) + L(mode, "v-c3", "mode", .67);
    s.msg = `Skewness γ₁ ≈ <b>${info[s.d][0]}</b> · kurtosis β₂ ≈ <b>${info[s.d][1]}</b> · mean ${f2(mean)}, median ${f2(med)}, mode ${f2(mode)}`;
    return SV(o);
  });
}];

/* ---- Box plot / five-number summary ---- */
reg.boxplot = ["Box-and-whisker plot of the data (dots). The box runs from Q₁ to Q₃ with the median line; whiskers reach the most extreme points inside the fences Q₁ − 1.5·IQR and Q₃ + 1.5·IQR; points beyond are outliers (red). Increase the largest value to create an outlier.", (root) => {
  const A = [3, 5, 7, 8, 9, 11, 13, 15, 16, 20, 21], B = [2, 3, 3, 4, 4, 5, 6, 8, 12, 19, 31];
  const med = a => { const n = a.length; return n % 2 ? a[(n - 1) / 2] : (a[n / 2 - 1] + a[n / 2]) / 2; };
  ui(root, [{ k: "d", label: "Data ", opts: ["Example (n = 11)", "Right-skewed"], v: 0 }, { k: "e", label: "Raise largest value by ", min: 0, max: 40, step: 1, v: 0 }], s => {
    const x = (s.d ? B : A).slice(); x[x.length - 1] += s.e;
    const n = x.length, m = med(x), lo = x.slice(0, Math.floor(n / 2)), hi = x.slice(Math.ceil(n / 2)), q1 = med(lo), q3 = med(hi), iqr = q3 - q1, fl = q1 - 1.5 * iqr, fu = q3 + 1.5 * iqr;
    const inside = x.filter(v => v >= fl && v <= fu), wl = Math.min(...inside), wu = Math.max(...inside), xmax = Math.max(65, Math.max(...x) + 3);
    const F = frame(0, xmax, 0, 3);
    let o = F.clip + F.axes(range(0, xmax, 10), [], "value", "");
    o += F.g((fl > 0 ? F.line(fl, .3, fl, 2.7, "v-cm v-dash") : "") + F.line(fu, .3, fu, 2.7, "v-cm v-dash") + F.poly([[q1, 1], [q3, 1], [q3, 2], [q1, 2]], "v-a1") +
      F.line(q1, 1, q3, 1, "v-c1") + F.line(q1, 2, q3, 2, "v-c1") + F.line(q1, 1, q1, 2, "v-c1") + F.line(q3, 1, q3, 2, "v-c1") + F.line(m, 1, m, 2, "v-c2") +
      F.line(wl, 1.5, q1, 1.5, "v-cm") + F.line(q3, 1.5, wu, 1.5, "v-cm") + F.line(wl, 1.25, wl, 1.75, "v-cm") + F.line(wu, 1.25, wu, 1.75, "v-cm"));
    x.forEach(v => { const out = v < fl || v > fu; o += F.dot(v, out ? 1.5 : .6, out ? "v-s4" : "v-sm", out ? 4.5 : 3.2); });
    o += (fl > 1 ? F.text(fl, 2.85, "lower fence", "middle") : "") + F.text(fu, 2.85, "upper fence", "middle") + F.text(m, 2.3, "median", "middle");
    const outs = x.filter(v => v < fl || v > fu);
    s.msg = `Five-number summary: <b>${x[0]}, ${q1}, ${m}, ${q3}, ${x[n - 1]}</b> · IQR = ${iqr} · fences: ${f2(fl)} and ${f2(fu)}${fl <= 0 ? " (lower fence is below 0, not drawn)" : ""} · ${outs.length ? "outlier(s): <b>" + outs.join(", ") + "</b>" : "no outliers"}`;
    return SV(o);
  });
}];

/* ---- Venn diagram for sets ---- */
reg.venn = ["Change n(A), n(B) and n(A∩B) in a universe of 60 elements. The counts follow n(A∪B) = n(A) + n(B) − n(A∩B), and the elements outside both sets belong to (A∪B)ᶜ.", (root) => {
  ui(root, [{ k: "a", label: "n(A) ", min: 5, max: 40, step: 1, v: 30 }, { k: "b", label: "n(B) ", min: 5, max: 40, step: 1, v: 25 }, { k: "i", label: "n(A∩B) ", min: 0, max: 40, step: 1, v: 10 }], s => {
    const i = Math.min(s.i, s.a, s.b), u = s.a + s.b - i, U = Math.max(60, u), out = U - u;
    let o = `<rect x="8" y="8" width="424" height="204" rx="10" class="v-box"/><text x="20" y="26">U = ${U}</text>`;
    o += `<circle cx="170" cy="112" r="72" class="v-a1"/><circle cx="270" cy="112" r="72" class="v-a3"/><circle cx="170" cy="112" r="72" class="v-cm"/><circle cx="270" cy="112" r="72" class="v-cm"/>`;
    o += `<text class="v-t" x="118" y="60" text-anchor="middle">A</text><text class="v-t" x="322" y="60" text-anchor="middle">B</text>`;
    o += `<text class="v-t" x="130" y="118" text-anchor="middle" font-size="16">${s.a - i}</text><text class="v-t" x="220" y="118" text-anchor="middle" font-size="16">${i}</text><text class="v-t" x="310" y="118" text-anchor="middle" font-size="16">${s.b - i}</text>`;
    o += `<text class="v-t" x="405" y="200" text-anchor="end" font-size="15">${out}</text>`;
    s.msg = `n(A∪B) = ${s.a} + ${s.b} − ${i} = <b>${u}</b> · only A: ${s.a - i} · only B: ${s.b - i} · neither: ${out}` + (s.i > i ? " (n(A∩B) cannot exceed the smaller set)" : "");
    return SV(o, 440, 220);
  });
}];

/* ---- nth roots of a complex number ---- */
reg.nroots = ["The n-th roots of z = r(cos θ + i sin θ) lie on a circle of radius r^(1/n), equally spaced by 360°/n, starting at angle θ/n. For r = 1 and θ = 0 they are the n-th roots of unity, which add up to zero.", (root) => {
  ui(root, [{ k: "n", label: "n ", min: 2, max: 12, step: 1, v: 3 }, { k: "r", label: "|z| ", min: 1, max: 8, step: 1, v: 8 }, { k: "t", label: "arg z ", min: 0, max: 345, step: 15, v: 0, fmt: v => v + "°" }], s => {
    const R = Math.pow(s.r, 1 / s.n), F = frame(-3.4, 3.4, -2.94, 2.94, { x: 90, y: 0, w: 260, h: 220 }), px = F.X(1) - F.X(0);
    let o = F.clip + F.axes([-2, 0, 2], [-2, 0, 2], "Re", "Im") + `<circle cx="${F.X(0)}" cy="${F.Y(0)}" r="${R * px}" class="v-cm v-dash"/>`;
    const pts = []; for (let k = 0; k < s.n; k++) { const a = (s.t + 360 * k) / s.n * Math.PI / 180; pts.push([R * Math.cos(a), R * Math.sin(a)]); }
    o += F.g(F.poly(pts, "v-a1") + pts.map((p, k) => F.line(0, 0, p[0], p[1], "v-cm") + F.dot(p[0], p[1], k ? "v-s1" : "v-s2", 4.5)).join(""));
    const sr = pts.reduce((a, p) => a + p[0], 0), si = pts.reduce((a, p) => a + p[1], 0);
    s.msg = `Modulus of each root = ${s.r}^(1/${s.n}) = <b>${f2(R)}</b> · first root at <b>${f2(s.t / s.n)}°</b> (orange), then every ${f2(360 / s.n)}° · sum of roots = ${f2(sr)} + ${f2(si)}i`;
    return SV(o);
  });
}];

/* ---- Bayes / natural frequencies ---- */
reg.bayes = ["Each square is one of 1000 people. Green = diseased and test positive (true positives), blue = diseased but test negative, red = healthy but test positive (false positives), grey = healthy and negative. When the disease is rare, false positives outnumber true positives, so a positive test is weaker evidence than it seems: P(D | +) = TP/(TP + FP).", (root) => {
  ui(root, [{ k: "p", label: "Prevalence % ", min: .1, max: 50, step: .1, v: 1 }, { k: "se", label: "Sensitivity % ", min: 50, max: 100, step: 1, v: 95 }, { k: "sp", label: "Specificity % ", min: 50, max: 100, step: 1, v: 95 }], s => {
    const p = s.p / 100, se = s.se / 100, sp = s.sp / 100, D = Math.round(p * 1000), TP = Math.round(D * se), FN = D - TP, FP = Math.round((1000 - D) * (1 - sp));
    const cls = []; for (let i = 0; i < 1000; i++) cls.push(i < TP ? "v-s1" : i < D ? "v-s3" : i < D + FP ? "v-s4" : "v-sm");
    let o = ""; cls.forEach((c, i) => { const col = i % 50, row = Math.floor(i / 50); o += `<rect class="${c}" ${c === "v-sm" ? 'style="opacity:.3"' : ""} x="${20 + col * 8}" y="${6 + row * 8.6}" width="6.6" height="7" rx="1"/>`; });
    const ppv = p * se / (p * se + (1 - p) * (1 - sp));
    s.msg = `Of 1000 people: TP = <b>${TP}</b>, FN = ${FN}, FP = <b>${FP}</b> · P(disease | positive) = <b>${(100 * ppv).toFixed(1)}%</b> (exact value ${p * se > 0 ? (p * se).toFixed(4) : 0} / ${(p * se + (1 - p) * (1 - sp)).toFixed(4)})`;
    return SV(o, 440, 185);
  });
}];

/* ---- Sampling methods ---- */
reg.sampling = ["A population of 144 units (12 × 12 grid). Highlighted squares form a sample of 16 units under each method. SRS: random spread. Stratified: 4 units from each of 4 horizontal strata. Systematic: every 9th unit from a random start. Cluster: two whole clusters (blocks of 8 units). Press Draw again.", (root) => {
  ui(root, [{ k: "m", label: "Method ", opts: ["Simple random", "Stratified", "Systematic", "Cluster"], v: 0 }, { btn: "Draw again", on: s => { s.seed = Math.random(); } }], s => {
    const r = seeded(Math.floor((s.seed || .314159) * 1e9)), N = 144, W = 12, pick = new Set(), pool = (a, k) => { a = a.slice(); const o = []; while (o.length < k) o.push(a.splice(Math.floor(r() * a.length), 1)[0]); return o; };
    const all = range(0, N - 1), blocks = []; for (let br = 0; br < 6; br++) for (let bc = 0; bc < 3; bc++) { const b = []; for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 4; dc++) b.push((br * 2 + dr) * W + bc * 4 + dc); blocks.push(b); }
    let chosen = [];
    if (s.m === 0) chosen = pool(all, 16);
    else if (s.m === 1) for (let h = 0; h < 4; h++) chosen = chosen.concat(pool(range(h * 36, h * 36 + 35), 4));
    else if (s.m === 2) { const st = Math.floor(r() * 9); for (let j = 0; j < 16; j++) chosen.push(st + 9 * j); }
    else pool(range(0, blocks.length - 1), 2).forEach(b => chosen = chosen.concat(blocks[b]));
    chosen.forEach(i => pick.add(i));
    const C = 17, X0 = 100, Y0 = 8; let o = "";
    for (let i = 0; i < N; i++) { const c = i % W, rw = Math.floor(i / W); o += `<rect class="${pick.has(i) ? "v-s1" : "v-sm"}" ${pick.has(i) ? "" : 'style="opacity:.28"'} x="${X0 + c * C}" y="${Y0 + rw * C}" width="${C - 3}" height="${C - 3}" rx="2.5"/>`; }
    if (s.m === 1) for (let h = 1; h < 4; h++) o += `<line class="v-cm v-dash" x1="${X0 - 4}" x2="${X0 + W * C}" y1="${Y0 + h * 3 * C - 2}" y2="${Y0 + h * 3 * C - 2}"/>`;
    if (s.m === 3) blocks.forEach(b => { const c0 = b[0] % W, r0 = Math.floor(b[0] / W); o += `<rect class="v-cm" fill="none" x="${X0 + c0 * C - 1.5}" y="${Y0 + r0 * C - 1.5}" width="${4 * C}" height="${2 * C}" rx="3"/>`; });
    s.msg = ["Every unit and every set of 16 units is equally likely.", "Dashed lines separate the 4 strata; each stratum contributes 4 units, so no stratum is missed.", "All units are a fixed distance apart in the list (k = 9). Danger: a periodic list can match k.", "Units come in groups: cheap to survey, but units in a block are alike, so precision is lower."][s.m];
    return SV(o, 440, 222);
  });
}];

/* ---- Eigenvectors ---- */
reg.eigen = ["The matrix A = [[a, b], [b, c]] transforms the unit circle (dashed) into an ellipse (orange). The eigenvectors (green lines) are the directions that are only stretched, not turned; the stretch factors are the eigenvalues λ. The ellipse axes follow the eigenvectors, as in PCA.", (root) => {
  ui(root, [{ k: "a", label: "a ", min: -3, max: 3, step: .5, v: 2 }, { k: "b", label: "b ", min: -3, max: 3, step: .5, v: 1 }, { k: "c", label: "c ", min: -3, max: 3, step: .5, v: 2 }], s => {
    const F = frame(-4.4, 4.4, -3.7, 3.7, { x: 90, y: 0, w: 260, h: 220 }), T = [s.a, s.b, s.b, s.c];
    const tr = s.a + s.c, det = s.a * s.c - s.b * s.b, d = Math.sqrt(((s.a - s.c) / 2) ** 2 + s.b ** 2), l1 = tr / 2 + d, l2 = tr / 2 - d, th = .5 * Math.atan2(2 * s.b, s.a - s.c);
    let circ = "", ell = ""; for (let i = 0; i <= 90; i++) { const t = i / 90 * 2 * Math.PI, x = Math.cos(t), y = Math.sin(t); circ += (i ? "L" : "M") + F.X(x).toFixed(1) + " " + F.Y(y).toFixed(1); ell += (i ? "L" : "M") + F.X(T[0] * x + T[1] * y).toFixed(1) + " " + F.Y(T[2] * x + T[3] * y).toFixed(1); }
    const e1 = [Math.cos(th), Math.sin(th)], e2 = [-Math.sin(th), Math.cos(th)];
    let o = F.clip + F.axes([-4, -2, 0, 2, 4], [-3, 0, 3], "", "") + F.g(`<path class="v-cm v-dash" d="${circ}Z"/><path class="v-a2" d="${ell}Z"/><path class="v-c2" d="${ell}Z"/>` +
      F.line(-4 * e1[0], -4 * e1[1], 4 * e1[0], 4 * e1[1], "v-c1 v-dash") + F.line(-4 * e2[0], -4 * e2[1], 4 * e2[0], 4 * e2[1], "v-c1 v-dash") +
      F.dot(l1 * e1[0], l1 * e1[1], "v-s1", 4.5) + F.dot(l2 * e2[0], l2 * e2[1], "v-s1", 4.5));
    s.msg = `λ₁ = <b>${f2(l1)}</b>, λ₂ = <b>${f2(l2)}</b> · trace = ${f2(tr)} = λ₁ + λ₂ · det = ${f2(det)} = λ₁λ₂ · eigenvector directions ${f2(th * 180 / Math.PI)}° and ${f2(th * 180 / Math.PI + 90)}°`;
    return SV(o);
  });
}];

/* ---- Lorenz curve & Gini ---- */
reg.lorenz = ["Lorenz curve: cumulative share of income against cumulative share of people (poorest first). The 45° line is perfect equality; the shaded area between the line and the curve gives the Gini coefficient G = 1 − 2 × (area under the curve). Try the smooth family L(p) = pᵏ (G = (k − 1)/(k + 1)) or the worked example 10, 20, 30, 40, 100.", (root) => {
  ui(root, [{ k: "d", label: "Data ", opts: ["Smooth curve L(p) = pᵏ", "Example: 10, 20, 30, 40, 100"], v: 0 }, { k: "q", label: "k ", min: 1, max: 8, step: .5, v: 2.5 }], s => {
    const F = frame(0, 1, 0, 1, { x: 90, y: 0, w: 260, h: 220 });
    let o = F.clip + F.axes([0, .25, .5, .75, 1], [0, .25, .5, .75, 1], "people", "income") + F.line(0, 0, 1, 1, "v-cm v-dash"), G;
    if (s.d === 0) {
      const L = x => Math.pow(x, s.q), pts = []; for (let i = 0; i <= 50; i++) pts.push([i / 50, i / 50]); for (let i = 50; i >= 0; i--) pts.push([i / 50, L(i / 50)]);
      o += F.poly(pts, "v-a4") + F.path(L, 0, 1, "v-c4", 80); G = (s.q - 1) / (s.q + 1);
    } else {
      const P = [[0, 0], [.2, .05], [.4, .15], [.6, .3], [.8, .5], [1, 1]];
      o += F.poly(P.concat([[1, 1]]).concat(P.slice(0, -1).reverse().map(p => [p[0], p[0]])), "v-a4"); for (let i = 0; i < P.length - 1; i++) o += F.line(P[i][0], P[i][1], P[i + 1][0], P[i + 1][1], "v-c4"); P.forEach(p => o += F.dot(p[0], p[1], "v-s4", 3)); G = .4;
    }
    o += F.text(.75, .2, "area A", "middle");
    s.msg = `Gini G = <b>${G.toFixed(2)}</b> · area under the curve = ${(.5 - G / 2).toFixed(2)} · ${G < .2 ? "low inequality" : G < .4 ? "moderate inequality" : "high inequality"}`;
    return SV(o);
  });
}];

/* ---- Cobb–Douglas isoquants ---- */
reg.cobb = ["Isoquants Q = K^α L^β for Q = 1, 2, 3: all input mixes that give the same output. They are convex to the origin and never cross. The slope of an isoquant is −MRTS. α + β tells the returns to scale: doubling both inputs multiplies output by 2^(α+β).", (root) => {
  ui(root, [{ k: "al", label: "α (capital) ", min: .1, max: .9, step: .05, v: .5 }, { k: "be", label: "β (labour) ", min: .1, max: .9, step: .05, v: .5 }], s => {
    const F = frame(0, 10, 0, 10);
    let o = F.clip + F.axes([0, 2, 4, 6, 8, 10], [0, 2, 4, 6, 8, 10], "L", "K");
    [[1, "v-c3"], [2, "v-c1"], [3, "v-c2"]].forEach(([q, c], qi) => { o += F.g(F.path(l => Math.pow(q / Math.pow(l, s.be), 1 / s.al), .05, 10, c, 140)); const lx = Math.pow(q / Math.pow(8.5, s.al), 1 / s.be); if (lx > .2 && lx < 9) o += F.text(lx + .2, 8.9 - qi * 1.3, "Q = " + q, "start"); });
    const n = s.al + s.be, K = 4, Lb = 4, mrts = (s.be / s.al) * (K / Lb);
    s.msg = `α + β = <b>${f2(n)}</b> → ${Math.abs(n - 1) < .001 ? "constant" : n > 1 ? "increasing" : "decreasing"} returns to scale · at K = L: MRTS = MP_L/MP_K = β/α = <b>${f2(mrts)}</b> · doubling inputs multiplies output by ${f2(Math.pow(2, n))}`;
    return SV(o);
  });
}];

/* ---- Control chart ---- */
reg.ctrlchart = ["X̄ control chart for 30 samples from a process with target μ = 50. Dashed lines: centre line and ±3σ limits. At sample 16 the process mean shifts by the chosen amount; points beyond the limits (red) signal an assignable cause. A small shift often goes unnoticed on a Shewhart chart.", (root) => {
  ui(root, [{ k: "sh", label: "Shift (in σ of x̄) ", min: 0, max: 4, step: .5, v: 2 }, { btn: "New samples", on: s => { s.seed = Math.random(); } }], s => {
    const r = seedn(seeded(Math.floor((s.seed || .271828) * 1e9))), F = frame(0, 31, 44, 56);
    // sigma of x-bar = 1 (so limits are 50 +- 3)
    const x = range(1, 30).map(i => 50 + (i >= 16 ? s.sh : 0) + r());
    let o = F.clip + F.axes([1, 5, 10, 15, 20, 25, 30], [44, 47, 50, 53, 56], "sample", "x̄");
    o += F.line(0, 53, 31, 53, "v-c4 v-dash") + F.line(0, 47, 31, 47, "v-c4 v-dash") + F.line(0, 50, 31, 50, "v-cm v-dash");
    o += F.text(.4, 53.4, "UCL = 53", "start") + F.text(.4, 46.2, "LCL = 47", "start") + F.line(15.5, 44, 15.5, 56, "v-cm v-dash");
    let path = ""; x.forEach((v, i) => { path += (i ? "L" : "M") + F.X(i + 1).toFixed(1) + " " + F.Y(Math.max(44, Math.min(56, v))).toFixed(1); });
    o += F.g(`<path class="v-c1" d="${path}"/>`) + x.map((v, i) => F.dot(i + 1, Math.max(44, Math.min(56, v)), v > 53 || v < 47 ? "v-s4" : "v-s1", v > 53 || v < 47 ? 5 : 3.2)).join("");
    const first = x.findIndex(v => v > 53 || v < 47);
    s.msg = first < 0 ? "No point outside the limits: the chart shows the process as in control." : `First signal at sample <b>${first + 1}</b>${first + 1 < 16 ? " (a false alarm before the shift)" : first + 1 >= 16 ? ", " + (first + 1 - 15) + " sample(s) after the shift" : ""} · ${x.filter(v => v > 53 || v < 47).length} point(s) out of control`;
    return SV(o);
  });
}];

/* ---- OC curve ---- */
reg.ocurve = ["Operating characteristic (OC) curve of a single sampling plan: inspect n items and accept the lot if at most c are defective. Pₐ = P(X ≤ c) with X ~ Binomial(n, p). A larger n makes the curve steeper (better discrimination); a larger c shifts it to the right.", (root) => {
  const Pa = (n, c, p) => { let t = 0; for (let k = 0; k <= c; k++) t += Math.exp(lg(n + 1) - lg(k + 1) - lg(n - k + 1) + (k ? k * Math.log(p) : 0) + (n - k) * Math.log(1 - p)); return Math.min(1, t); };
  ui(root, [{ k: "n", label: "n ", min: 5, max: 150, step: 5, v: 10 }, { k: "c", label: "c ", min: 0, max: 5, step: 1, v: 0 }], s => {
    const F = frame(0, .2, 0, 1);
    let o = F.clip + F.axes([0, .05, .1, .15, .2], [0, .25, .5, .75, 1], "p", "Pₐ") + F.line(.05, 0, .05, 1, "v-cm v-dash") + F.line(.1, 0, .1, 1, "v-cm v-dash");
    o += F.g(F.path(p => Pa(s.n, s.c, Math.max(p, 1e-6)), 0, .2, "v-c1", 100)) + F.dot(.05, Pa(s.n, s.c, .05), "v-s2", 4.5) + F.dot(.1, Pa(s.n, s.c, .1), "v-s4", 4.5);
    s.msg = `Plan (n = ${s.n}, c = ${s.c}): Pₐ(p = 0.05) = <b>${Pa(s.n, s.c, .05).toFixed(3)}</b> · Pₐ(p = 0.10) = <b>${Pa(s.n, s.c, .1).toFixed(3)}</b> · producer's risk at p = 0.05: ${(1 - Pa(s.n, s.c, .05)).toFixed(3)}`;
    return SV(o);
  });
}];

/* ---- Bivariate normal ---- */
reg.mvn = ["Bivariate normal sample (dots) with unit variances and correlation ρ. Ellipses are contours that contain 50%, 90% and 95% of the probability (Mahalanobis D² = 1.39, 4.61, 5.99). The red segment is the conditional distribution of X₁ given X₂ = x₂: mean ρx₂ and spread √(1 − ρ²).", (root) => {
  const r0 = seedn(seeded(7)), Z = range(1, 160).map(() => [r0(), r0()]);
  ui(root, [{ k: "rho", label: "ρ ", min: -.95, max: .95, step: .05, v: .6 }, { k: "x2", label: "x₂ = ", min: -2.5, max: 2.5, step: .1, v: 1.5 }], s => {
    const F = frame(-3.5, 3.5, -3.7, 3.7, { x: 90, y: 0, w: 260, h: 220 }), rho = s.rho, a = Math.sqrt(1 + rho), b = Math.sqrt(1 - rho);
    const ell = c => { let d = ""; for (let i = 0; i <= 80; i++) { const t = i / 80 * 2 * Math.PI, u = Math.sqrt(c) * a * Math.cos(t), v = Math.sqrt(c) * b * Math.sin(t), x = (u + v) / Math.SQRT2, y = (u - v) / Math.SQRT2; d += (i ? "L" : "M") + F.X(x).toFixed(1) + " " + F.Y(y).toFixed(1); } return `<path class="v-c1" d="${d}Z"/>`; };
    let o = F.clip + F.axes([-3, -2, -1, 0, 1, 2, 3], [-3, 0, 3], "x₁", "x₂");
    o += F.g(Z.map(z => F.dot(z[0], rho * z[0] + Math.sqrt(1 - rho * rho) * z[1], "v-sm", 2)).join("") + ell(1.386) + ell(4.605) + ell(5.991) +
      F.line(-3.5, s.x2, 3.5, s.x2, "v-cm v-dash") + F.line(rho * s.x2 - Math.sqrt(1 - rho * rho), s.x2, rho * s.x2 + Math.sqrt(1 - rho * rho), s.x2, "v-dot4") + F.dot(rho * s.x2, s.x2, "v-s2", 4.5));
    s.msg = `E(X₁ | X₂ = ${f2(s.x2)}) = ρx₂ = <b>${f2(rho * s.x2)}</b> · Var(X₁ | X₂) = 1 − ρ² = <b>${f2(1 - rho * rho)}</b> · when ρ = 0 the contours are circles and the variables are independent`;
    return SV(o);
  });
}];

/* ---- Kaplan–Meier ---- */
reg.km = ["Kaplan–Meier survival curve (solid): at each event time S drops by the fraction dᵢ/nᵢ; censored subjects (+) leave the risk set without causing a drop. The dashed curve is exp(−Ĥ) from the Nelson–Aalen cumulative hazard. Switch to a larger simulated sample to see the curve approach the true exponential curve (orange).", (root) => {
  const small = { t: [2, 3, 5, 7, 8], e: [1, 0, 1, 0, 1] };
  ui(root, [{ k: "d", label: "Data ", opts: ["Example: 2, 3+, 5, 7+, 8", "Simulated n = 25"], v: 0 }, { btn: "New sample", on: s => { s.seed = Math.random(); } }], s => {
    let T, E;
    if (s.d === 0) { T = small.t; E = small.e; } else {
      const r = seeded(Math.floor((s.seed || .141592) * 1e9)); T = []; E = [];
      for (let i = 0; i < 25; i++) { const t = -Math.log(1 - r()) / .1, c = r() * 25; T.push(Math.min(t, c)); E.push(t <= c ? 1 : 0); }
    }
    const idx = T.map((_, i) => i).sort((a, b) => T[a] - T[b]), n = T.length, tmax = Math.max(...T) * 1.05, F = frame(0, tmax, 0, 1);
    let S = 1, H = 0, km = [[0, 1]], na = [[0, 1]], cens = [], atRisk = n, i = 0;
    while (i < n) { const t = T[idx[i]]; let d = 0, c = 0, j = i; while (j < n && T[idx[j]] === t) { if (E[idx[j]]) d++; else c++; j++; }
      if (d) { km.push([t, S]); S *= 1 - d / atRisk; km.push([t, S]); H += d / atRisk; na.push([t, Math.exp(-(H - d / atRisk))]); na.push([t, Math.exp(-H)]); }
      if (c) cens.push([t, S]); atRisk -= d + c; i = j; }
    km.push([tmax, S]); na.push([tmax, Math.exp(-H)]);
    const pth = a => a.map((p, k) => (k ? "L" : "M") + F.X(p[0]).toFixed(1) + " " + F.Y(p[1]).toFixed(1)).join("");
    let o = F.clip + F.axes(range(0, Math.floor(tmax), tmax > 15 ? 5 : 2), [0, .25, .5, .75, 1], "time", "S(t)");
    o += F.g((s.d ? F.path(t => Math.exp(-.1 * t), 0, tmax, "v-c2 v-dash", 80) : "") + `<path class="v-c3 v-dash" d="${pth(na)}"/><path class="v-c1" d="${pth(km)}"/>`);
    cens.forEach(c => o += `<text class="v-t" x="${F.X(c[0])}" y="${F.Y(c[1]) + 4}" text-anchor="middle" font-size="18" font-weight="700">+</text>`);
    s.msg = s.d === 0 ? "S = 1 → 0.8 at t = 2 (1 of 5) → 0.533 at t = 5 (1 of 3 at risk) → 0 at t = 8 (1 of 1). Cumulative hazard at t = 5: 1/5 + 1/3 = 0.533." : `${E.reduce((a, b) => a + b, 0)} events and ${n - E.reduce((a, b) => a + b, 0)} censored · final KM estimate ${S.toFixed(2)} (true: exponential λ = 0.1)`;
    return SV(o);
  });
}];

/* ---- ROC curve ---- */
reg.roc = ["ROC curve: for every cut-off the test gives a point (1 − specificity, sensitivity). Healthy scores ~ N(0, 1), diseased ~ N(d, 1). A bigger separation d bows the curve towards the top-left corner (AUC → 1); with d = 0 the test is useless (diagonal, AUC = 0.5). Move the cut-off to trade sensitivity for specificity.", (root) => {
  ui(root, [{ k: "d", label: "Separation d ", min: 0, max: 3.5, step: .1, v: 1.5 }, { k: "c", label: "Cut-off ", min: -1, max: 4, step: .1, v: 1 }], s => {
    const F = frame(0, 1, 0, 1, { x: 90, y: 0, w: 260, h: 220 }), fpr = c => 1 - Phi(c), tpr = c => 1 - Phi(c - s.d);
    let pth = ""; for (let i = 0, c = -4; c <= 7; i++, c += .1) pth += (i ? "L" : "M") + F.X(fpr(c)).toFixed(1) + " " + F.Y(tpr(c)).toFixed(1);
    let o = F.clip + F.axes([0, .25, .5, .75, 1], [0, .25, .5, .75, 1], "1 − specificity", "sensitivity") + F.line(0, 0, 1, 1, "v-cm v-dash") + F.g(`<path class="v-c1" d="${pth}"/>`) + F.dot(fpr(s.c), tpr(s.c), "v-s2", 5.5);
    s.msg = `Cut-off ${f2(s.c)}: sensitivity = <b>${tpr(s.c).toFixed(2)}</b>, specificity = <b>${Phi(s.c).toFixed(2)}</b> · AUC = Φ(d/√2) = <b>${Phi(s.d / Math.SQRT2).toFixed(2)}</b>`;
    return SV(o);
  });
}];

/* ---- GLM link functions ---- */
reg.glmlink = ["The link function g(μ) = η connects the mean μ to the linear predictor η = β₀ + β₁x. Identity: μ = η (any real value). Log: μ = e^η (always positive, for counts). Logit: μ = e^η/(1 + e^η) (always between 0 and 1, for probabilities). Move η to read the mean.", (root) => {
  const M = [e => e, e => Math.exp(e), e => 1 / (1 + Math.exp(-e))], R = [[-4, 4], [0, 10], [0, 1]], Y = [[-4, 0, 4], [0, 5, 10], [0, .5, 1]];
  ui(root, [{ k: "l", label: "Link ", opts: ["identity (normal)", "log (Poisson)", "logit (binomial)"], v: 2 }, { k: "e", label: "η ", min: -4, max: 4, step: .1, v: 1 }], s => {
    const F = frame(-4, 4, R[s.l][0], R[s.l][1]), f = M[s.l];
    let o = F.clip + F.axes([-4, -2, 0, 2, 4], Y[s.l], "η", "μ") + F.g(F.path(f, -4, 4, "v-c1", 120) + F.line(s.e, R[s.l][0], s.e, f(s.e), "v-cm v-dash") + F.dot(s.e, f(s.e), "v-s2", 5));
    if (s.l === 2) o += F.line(-4, .5, 4, .5, "v-cm v-dash");
    s.msg = `η = ${f2(s.e)} → μ = <b>${f2(f(s.e))}</b>` + [" (μ can be negative or exceed 1: unsuitable for counts or probabilities)", " (μ is always positive; a one-unit rise in η multiplies μ by e = 2.718)", " (a probability; η = 0 gives μ = 0.5 and e^η is the odds)"][s.l];
    return SV(o);
  });
}];

/* ============================================================
   Mount: turns <div class="vis" data-vis="name[:option]"></div> into a figure
   ============================================================ */
function mount(el) {
  if (el.dataset.m) return;
  const parts = el.dataset.vis.split(":"), r = reg[parts[0]];
  if (!r) return;
  el.dataset.m = "1";
  el.innerHTML = `<figure class="vis-fig" style="margin:14px 0"><div class="vis-ctl"></div><div class="vis-svg"></div><div class="vis-out"></div><figcaption>${r[0]}</figcaption></figure>`;
  if (r[2]) el.querySelector(".vis-svg").style.maxWidth = r[2] + "px";
  try { r[1](el.firstChild, parts[1]); } catch (e) { console.error("visual failed:", parts[0], e); el.innerHTML = ""; }
}
function scan() {
  document.querySelectorAll(".vis[data-vis]:not([data-m])").forEach(el => {
    const d = el.closest("details");
    if (!d || d.open) mount(el);
    else if (!el._w) { el._w = 1; d.addEventListener("toggle", () => { if (d.open) mount(el); }); }
  });
}
const app = document.getElementById("app");
if (app) new MutationObserver(scan).observe(app, { childList: true });
scan();
})();

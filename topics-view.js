/* ============ TOPIC EXPLANATIONS: chapter view ============
   Reads CHAPTERS (data/ch-*.js), joins it with TOPICS (data/topics.js, data/new-*.js) and shows each subject
   chapter by chapter, following the SUST curriculum (contents.docx). Every topic can carry visuals:
   named ones from js/visuals.js ("clt") and declarative ones from js/visuals2.js ({t:"bar",...}).
   Chapter entry:  { n:"Name", d:"what it covers", vis:[...], t:[ topic, topic ] }
   topic = "Existing title (prefix)"                                  -> shown as is
         | { use:"Existing title prefix", intro:"<p>..</p>", vis:[..], key:[".."], q:[["Question","Answer"]] }  -> existing + extras
         | { title:"New topic", body:`<p>..</p>[[0]]<p>..</p>`, vis:[..], key:[..], q:[..] }               -> brand new
   In body, [[0]] [[1]] ... place visual number 0, 1 ... inside the text; unplaced visuals appear before the text.
*/
(function () {
if (typeof routes === "undefined" || typeof TOPICS === "undefined" || window.__tv) return;
window.__tv = 1;
const CH = window.CHAPTERS || (window.CHAPTERS = {});
const orig = routes.topics;

/* ---------- styles ---------- */
const st = document.createElement("style");
st.textContent = `
.tv-head{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 14px}
.tv-chip{display:inline-flex;gap:6px;align-items:center;background:var(--card);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:5px 12px;font-size:.85rem;text-decoration:none}
.tv-chip:hover{border-color:var(--acc)}.tv-chip b{color:var(--acc)}
.chap{margin:26px 0 8px;scroll-margin-top:80px}
.chap h2{display:flex;align-items:center;gap:10px;margin:0 0 4px;font-size:1.25rem}
.chap h2 .chn{background:linear-gradient(135deg,var(--acc),var(--blue));color:#04121f;border-radius:8px;padding:2px 10px;font-size:.78rem;font-weight:800;letter-spacing:.04em;white-space:nowrap}
.chap .chd{color:var(--mut);font-size:.9rem;margin:0 0 10px}
.chap .chcount{font-size:.78rem;color:var(--mut);margin-left:auto;white-space:nowrap}
details.tp>summary .vc{float:right;font-size:.75rem;color:var(--mut);font-weight:400}
.tp .tp-intro{border-left:3px solid var(--acc2);padding:4px 12px;margin:8px 0;background:var(--card);border-radius:6px}
.tp .key{background:var(--okbg);border-left:3px solid var(--ok);border-radius:6px;padding:8px 14px;margin:12px 0}
.tp .key b.kh{display:block;margin-bottom:2px;color:var(--text)}
.tp .key ul{margin:4px 0 2px 18px;padding:0}
.tp details.qc{margin:6px 0;padding:6px 12px;background:var(--card)}
.tp details.qc summary{cursor:pointer;font-weight:600}
.tp .qh{font-weight:700;margin:14px 0 4px;color:var(--acc)}
.tp .tv-ph{min-height:30px}
`;
document.head.appendChild(st);

/* ---------- join CHAPTERS with TOPICS ---------- */
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
function resolve(sub) {
  if (sub._res) return sub._res;
  const defs = CH[sub.id];
  if (!defs) return null;
  const used = new Set(), out = [];
  const base = sub.topics.slice();
  const find = key => { const k = norm(key); return base.find(t => !used.has(t) && (norm(t.title) === k)) || base.find(t => !used.has(t) && norm(t.title).startsWith(k)) || base.find(t => !used.has(t) && norm(t.title).includes(k)); };
  defs.forEach(ch => {
    const list = [];
    (ch.t || []).forEach(e => {
      if (typeof e === "string") e = { use: e };
      let t;
      if (e.use) {
        const b = find(e.use);
        if (!b) { console.warn("[topics] no topic matches", sub.id, e.use); return; }
        used.add(b); t = Object.assign({}, b, e, { title: e.title || b.title, body: (e.body || "") + b.body });
      } else {
        t = Object.assign({}, e);
        if (!sub.topics.some(x => x.title === t.title)) sub.topics.push({ title: t.title, body: t.body || "", chapter: ch.n });
      }
      list.push(t);
    });
    out.push({ n: ch.n, d: ch.d, vis: ch.vis, t: list });
  });
  const rest = base.filter(t => !used.has(t));
  if (rest.length) out.push({ n: "More topics", d: "", t: rest.map(t => Object.assign({}, t)) });
  return sub._res = out;
}
/* make the new topics count on the home page (topics are pushed into TOPICS once) */
TOPICS.forEach(s => { try { resolve(s); } catch (e) { console.error(e); } });

/* ---------- render ---------- */
function topicHTML(t, open, store) {
  const specs = [], named = [];
  (t.vis || []).forEach(v => { if (typeof v === "string") { named.push(v); specs.push({ named: v }); } else specs.push(v); });
  const ph = i => specs[i].named ? `<div class="vis" data-vis="${specs[i].named}"></div>` : `<div class="tv-ph" data-sv="${store.push(specs[i]) - 1}"></div>`;
  let body = t.body || "", placed = new Set();
  body = body.replace(/\[\[(\d+)\]\]/g, (m, n) => { n = +n; if (!specs[n]) return ""; placed.add(n); return ph(n); });
  const pre = specs.map((s, i) => placed.has(i) ? "" : ph(i)).join("");
  const key = t.key && t.key.length ? `<div class="key"><b class="kh">✅ Remember</b><ul>${t.key.map(k => `<li>${k}</li>`).join("")}</ul></div>` : "";
  const qq = t.q && t.q.length ? `<div class="qh">🧠 Quick check (tap to reveal)</div>` + t.q.map(x => `<details class="qc"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join("") : "";
  const n = specs.length + (t.body || "").split('data-vis=').length - 1;
  return `<details class="tp"${open ? " open" : ""}><summary>${t.title}${n ? `<span class="vc">🖼 ${n}</span>` : ""}</summary>${t.intro ? `<div class="tp-intro">${t.intro}</div>` : ""}${pre}${body}${key}${qq}</details>`;
}
function mountPh(root, store) {
  root.querySelectorAll(".tv-ph:not([data-m])").forEach(el => { const s = store[+el.dataset.sv]; if (s) SSV.mount(el, s); });
}
function view(p) {
  const s = TOPICS.find(x => x.id === p[0]), chs = resolve(s);
  const store = [];
  const total = chs.reduce((a, c) => a + c.t.length, 0);
  let k = 0;
  const html = chs.map((c, ci) => {
    const body = c.t.map(t => topicHTML(t, ci === 0 && k++ === 0, store)).join("");
    return `<section class="chap" id="ch-${ci}"><h2><span class="chn">${c.n === "More topics" ? "EXTRA" : "CHAPTER " + (ci + 1)}</span>${c.n}<span class="chcount">${c.t.length} topic${c.t.length > 1 ? "s" : ""}</span></h2>${c.d ? `<p class="chd">${c.d}</p>` : ""}${c.vis ? c.vis.map(v => typeof v === "string" ? `<div class="vis" data-vis="${v}"></div>` : `<div class="tv-ph" data-sv="${store.push(v) - 1}"></div>`).join("") : ""}${body}</section>`;
  }).join("");
  app.innerHTML = `<div class="crumb"><a href="#/topics">Topics</a> › ${s.name}</div><h1>${s.name}</h1>
    <div class="tv-head"><span class="tv-chip"><b>${chs.length}</b> chapters</span><span class="tv-chip"><b>${total}</b> topics</span>${chs.map((c, i) => `<a class="tv-chip" href="#/topics/${s.id}/${i}" data-go="${i}">${i + 1}. ${c.n.length > 34 ? c.n.slice(0, 33) + "…" : c.n}</a>`).join("")}</div>
    <input class="search" id="ts" placeholder="Search in this subject…">
    <div id="tl">${html}</div>`;
  const tl = document.getElementById("tl");
  tl.querySelectorAll("details.tp").forEach(d => { if (d.open) mountPh(d, store); d.addEventListener("toggle", () => { if (d.open) mountPh(d, store); }); });
  tl.querySelectorAll(".chap>.tv-ph").forEach(el => SSV.mount(el, store[+el.dataset.sv]));
  document.querySelectorAll(".tv-head [data-go]").forEach(a => a.onclick = e => { e.preventDefault(); const sec = document.getElementById("ch-" + a.dataset.go); if (sec) { sec.scrollIntoView({ behavior: "smooth" }); const d = sec.querySelector("details.tp"); if (d) d.open = true; } });
  document.getElementById("ts").oninput = e => {
    const v = e.target.value.toLowerCase();
    tl.querySelectorAll("details.tp").forEach(d => { const m = d.textContent.toLowerCase().includes(v); d.style.display = m ? "" : "none"; if (v && m) d.open = true; });
    tl.querySelectorAll(".chap").forEach(c => { c.style.display = [...c.querySelectorAll("details.tp")].some(d => d.style.display !== "none") || !v ? "" : "none"; });
  };
  if (p[1] != null && /^\d+$/.test(p[1])) { const sec = document.getElementById("ch-" + p[1]); if (sec) setTimeout(() => { sec.scrollIntoView(); const d = sec.querySelector("details.tp"); if (d) d.open = true; }, 60); }
}
routes.topics = function (p) {
  const s = p && p[0] && TOPICS.find(x => x.id === p[0]);
  if (s && resolve(s)) return view(p);
  return orig(p);
};
window.TV_VIEW = view;
if (/^#\/?topics/.test(location.hash)) router();
})();

const $ = s => document.querySelector(s);
const app = $("#app");
document.getElementById("yr").textContent = new Date().getFullYear();
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");

const driveId = u => { const m = (u||"").match(/folders\/([\w-]+)/) || (u||"").match(/[?&]id=([\w-]+)/); return m ? m[1] : null; };
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };

/* Show 1st-year subjects first and 4th-year subjects last in Topics, Quizzes and Mock lists */
(function () {
  const first = ["pos","alg","ip","st1","spss","calc1","la"], last = ["es","as","doe2","st2","mva","bio","glm"];
  const rank = id => first.includes(id) ? first.indexOf(id) - 100 : last.includes(id) ? 100 + last.indexOf(id) : 0;
  [TOPICS, QZ, MOCKS].forEach(a => { const o = a.slice(); o.sort((x, y) => rank(x.id) - rank(y.id) || o.indexOf(x) - o.indexOf(y)); a.splice(0, a.length, ...o); });
})();
/* Merge practice entries that share an id, and list practice courses year by year */
(function () {
  const m = [];
  PRACTICE.forEach(e => { const f = m.find(x => x.id === e.id); if (f) f.items = f.items.concat(e.items); else m.push({ id: e.id, name: e.name, items: e.items.slice() }); });
  const order = ["pos","alg","ip","st1","spss","calc1","la","eng","aw","hist","pd","tos","stata","calc","micro","reg","nm","real","macro","db","doe","inf","sim","lp","stoch","dem","sas","reg2","es","as","doe2","st2","mva","bio","glm","rm"];
  const r = id => order.includes(id) ? order.indexOf(id) : 99;
  m.sort((a, b) => r(a.id) - r(b.id));
  PRACTICE.splice(0, PRACTICE.length, ...m);
})();
let timerHandle = null;

function chartSVG() {
  // normal curve, histogram bars, scatter dots and regression line (decorative)
  const W=900,H=300,base=250,cx=450;
  const f = x => Math.exp(-((x-cx)**2)/(2*110*110));
  let pts=[]; for(let x=40;x<=860;x+=10) pts.push([x, base-f(x)*190]);
  const line = pts.map((p,i)=>(i?"L":"M")+p[0]+" "+p[1].toFixed(1)).join(" ");
  let bars=""; for(let i=0;i<20;i++){const x=70+i*39,h=f(x+19)*175+6;bars+=`<rect class="bar" x="${x}" y="${base-h}" width="35" height="${h}" rx="3" style="animation-delay:${(i*.06).toFixed(2)}s"/>`;}
  let dots=""; for(let i=0;i<28;i++){const x=90+i*28.5,y=base-30-(i*5.2)+Math.sin(i*2.7)*28-Math.cos(i*1.3)*14;dots+=`<circle class="dot" cx="${x}" cy="${y.toFixed(1)}" r="4" style="animation-delay:${(2+i*.05).toFixed(2)}s"/>`;}
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Decorative normal distribution with histogram, scatter plot and regression line">
    ${bars}<path class="area" d="${line} L860 ${base} L40 ${base} Z"/>
    <line class="tick" x1="${cx}" y1="40" x2="${cx}" y2="${base}"/><line class="tick" x1="${cx-110}" y1="${base-115}" x2="${cx-110}" y2="${base}"/><line class="tick" x1="${cx+110}" y1="${base-115}" x2="${cx+110}" y2="${base}"/>
    <path class="curve" d="${line}"/>${dots}<line class="reg" x1="80" y1="${base-18}" x2="830" y2="${base-150}"/>
    <line class="axis" x1="30" y1="${base}" x2="870" y2="${base}"/>
    <text x="${cx-6}" y="${base+24}">μ</text><text x="${cx-118}" y="${base+24}">μ−σ</text><text x="${cx+96}" y="${base+24}">μ+σ</text><text x="${cx+130}" y="60">f(x)</text>
  </svg>`;
}
function siteCounts() {
  let courses=0, sems=0;
  LIBRARY.forEach(y => y.semesters.forEach(s => { sems++; courses += s.courses.length; }));
  return { courses, sems, topics: TOPICS.reduce((n,s)=>n+s.topics.length,0), qs: QZ.reduce((n,s)=>n+s.topics.length*20,0) + MOCKS.reduce((n,s)=>n+s.questions.length,0) };
}

const routes = {
  home, library, curriculum, cgpa, routine, topics, prevq, quizzes, practice, about,
};

function router() {
  clearInterval(timerHandle);
  const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
  const fn = routes[parts[0]] || home;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + parts[0]));
  $("#nav").classList.remove("open");
  app.className = "";
  document.body.classList.toggle("is-home", fn === home);
  fn(parts.slice(1));
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", router);
router();

/* ---------- HOME ---------- */
function home() {
  const c = siteCounts();
  app.innerHTML = `
  <section class="hero">
    <span class="sym-float s1">Σ</span><span class="sym-float s2">σ</span><span class="sym-float s3">x̄</span><span class="sym-float s4">∫</span><span class="sym-float s5">μ</span>
    <div class="by">${SITE.by}</div>
    <h1>Stat<span>Sphere</span></h1>
    <p>${SITE.tagline}</p>
    <div class="eq">f(x) = 1/(σ√2π) · e<sup>−(x−μ)²/2σ²</sup></div><br>
    <div class="btns"><a class="btn" href="#/library">Browse Resources</a><a class="btn alt" href="#/quizzes">Take a Quiz</a></div>
    ${chartSVG()}
  </section>
  <div class="stats">
    <div class="stat"><b data-count="${c.courses}">0</b><span>Courses &amp; folders</span></div>
    <div class="stat"><b data-count="${c.sems}">0</b><span>Semesters</span></div>
    <div class="stat"><b data-count="${c.topics}">0</b><span>Topic explanations</span></div>
    <div class="stat"><b data-count="${c.qs}">0</b><span>Quiz questions</span></div>
  </div>
  <div class="grid homegrid">
    <a class="card" href="#/library"><div class="ico"><svg viewBox="0 0 32 32" width="38" height="38" aria-hidden="true"><path d="M16 8c-3-2-8-2-12-1v18c4-1 9-1 12 1 3-2 8-2 12-1V7c-4-1-9-1-12 1z" fill="#fff" stroke="#0369a1" stroke-width="1.6" stroke-linejoin="round"/><path d="M16 8v18" stroke="#0369a1" stroke-width="1.4"/><rect x="6.5" y="17" width="2.2" height="5" fill="#0ea5e9"/><rect x="10" y="13.5" width="2.2" height="8.5" fill="#0284c7"/><rect x="13.3" y="19" width="1.6" height="3" fill="#7dd3fc"/><path d="M18.5 22c1.5 0 2-7 4.2-7s2.7 7 4.2 7" fill="none" stroke="#0284c7" stroke-width="1.6"/><path d="M18.5 22.2h8.5" stroke="#0369a1" stroke-width="1"/><circle cx="16" cy="4.2" r="2.4" fill="#0ea5e9"/><path d="M13.8 4.2h4.4M16 2v4.4" stroke="#fff" stroke-width=".7"/></svg></div><h3>Resource Library</h3><p>Notes, slides, books and past questions for every course, organised by year and semester.</p></a>
    <a class="card" href="#/curriculum"><div class="ico">📋</div><h3>Curriculum</h3><p>All 8 semesters: every course with its type and credit, plus semester totals.</p></a>
    <a class="card" href="#/topics"><div class="ico"><svg viewBox="0 0 32 32" width="38" height="38" aria-hidden="true"><rect x="3" y="3" width="21" height="25" rx="2" fill="#fff" stroke="#0369a1" stroke-width="1.6"/><path d="M6 8h9M6 11h6" stroke="#7dd3fc" stroke-width="1.4"/><path d="M5.5 22c3 0 3-9 7-9s4 9 7 9" fill="none" stroke="#0284c7" stroke-width="1.8"/><path d="M5 22.5h15" stroke="#0369a1" stroke-width="1.2"/><circle cx="21" cy="19" r="6" fill="#e0f2fe" fill-opacity=".75" stroke="#0ea5e9" stroke-width="2.2"/><path d="M25.3 23.3l5 5" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/><path d="M17.5 21.5c1.5 0 1.5-4 3.5-4s2 4 3.5 4" fill="none" stroke="#0284c7" stroke-width="1.3"/></svg></div><h3>Topic Explanations</h3><p>Clear, exam-focused explanations with formulas and examples.</p></a>
    <a class="card" href="#/quizzes"><div class="ico"><svg viewBox="6 1 20 31" width="30" height="38" aria-hidden="true"><circle cx="16" cy="18" r="6" fill="#f5c28b"/><path d="M9 31c0-6 3-8 7-8s7 2 7 8z" fill="#0ea5e9"/><path d="M10 16c0-6 12-6 12 0-3-2-9-2-12 0z" fill="#475569"/><circle cx="14" cy="18" r=".9" fill="#0b2540"/><circle cx="18" cy="18" r=".9" fill="#0b2540"/><path d="M14.5 21.2q1.5 1 3 0" stroke="#0b2540" fill="none" stroke-width=".9"/><text x="16" y="10" text-anchor="middle" font-size="14" font-weight="800" fill="#0284c7" font-family="Arial,sans-serif">?</text></svg></div><h3>Quizzes &amp; MCQs</h3><p>Auto-graded quizzes with instant score and explanations.</p></a>
    <a class="card" href="#/practice"><div class="ico"><svg viewBox="4 3 26 26" width="38" height="38" aria-hidden="true"><circle cx="12" cy="9" r="4" fill="#f5c28b"/><path d="M7 8.5l5-3 5 3-5 2.5z" fill="#0369a1"/><path d="M6 15c1-3 4-4 6-4s5 1 6 4v4H6z" fill="#0ea5e9"/><path d="M18 16l5-1 1 3-6 2z" fill="#f5c28b"/><rect x="15" y="16" width="14" height="3" rx="1" fill="#92400e"/><rect x="17" y="19" width="2" height="9" fill="#92400e"/><rect x="26" y="19" width="2" height="9" fill="#92400e"/><rect x="19" y="12" width="7" height="4" rx=".5" fill="#fff" stroke="#0369a1" stroke-width="1"/><rect x="6" y="19" width="10" height="3" rx="1" fill="#475569"/><rect x="8" y="22" width="2.5" height="6" fill="#475569"/></svg></div><h3>Practice &amp; Mock Tests</h3><p>Practice problems with hide/show answers and timed mock tests.</p></a>
    <a class="card" href="#/about"><div class="ico">👤</div><h3>About &amp; Feedback</h3><p>Who made this, and how to send suggestions.</p></a>
  </div>`;
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target); e.target.classList.add("in");
    const b = e.target.querySelector("b[data-count]"); if (!b) return;
    const to = +b.dataset.count, t0 = performance.now();
    const step = t => { const k = Math.min((t - t0) / 1100, 1); b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString(); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .3 }) : null;
  app.querySelectorAll(".stat, .homegrid .card").forEach((el, i) => { el.style.setProperty("--d", (i % 4) * 90 + "ms"); io ? io.observe(el) : (el.classList.add("in"), el.querySelector("b[data-count]") && (el.querySelector("b").textContent = el.querySelector("b").dataset.count)); });
  app.querySelectorAll(".homegrid .card, .stat").forEach(el => el.addEventListener("pointerdown", () => el.classList.add("press")));
  document.addEventListener("pointerup", () => app.querySelectorAll(".press").forEach(el => el.classList.remove("press")), { once: true });
}

/* ---------- CLASS ROUTINE ---------- */
function routine() {
  app.innerHTML = `<h1>🗓️ Class Routine</h1>
  <div class="panel" style="text-align:center;padding:48px 20px"><div style="font-size:3rem">⏳</div><h2>Coming Soon</h2>
  <p>The class routine has not been published yet. It will be added here as soon as it is available.</p>
  <a class="btn alt" href="#/home">← Back to Home</a></div>`;
}

/* ---------- LIBRARY ---------- */
function libNorm(t) { return String(t).toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim(); }
function libArt(name, code) {
  const n = libNorm(name);
  if (/question|previous/.test(n)) return `<span class="cart libico">📝</span>`;
  if (/table/.test(n)) return `<span class="cart libico">📊</span>`;
  if (/field work|project/.test(n)) return `<span class="cart libico">🗂️</span>`;
  const ids = Object.keys(COURSE_SEM).filter(i => COURSE_SEM[i] === code);
  const names = {}; (typeof TOPICS !== "undefined" ? TOPICS : []).forEach(t => names[t.id] = libNorm(t.name));
  let id = ids.find(i => names[i] === n) || ids.find(i => names[i] && (names[i].includes(n) || n.includes(names[i])));
  if (!id) { const w = n.split(" ").filter(x => x.length > 3); id = ids.find(i => names[i] && w.some(x => names[i].includes(x))); }
  return id ? courseArt(id) : `<span class="cart libico">📁</span>`;
}
function prevq() {
  const ready = PREVQ.filter(x => x.drive).length;
  app.innerHTML = `<h1>${navIco("prevq")} Previous Questions</h1><p>Semester-wise previous question papers, from 1st Year 1st Semester to 4th Year 1st Semester. Folders open in Google Drive in a new tab.</p>
    <div class="grid libgrid">${PREVQ.map(x => {
      const inner = `<span class="cart libico">📁</span><div class="cbody"><h3>${esc(x.name)}</h3><p>${x.drive ? "Open folder ↗" : "Link coming soon"}</p></div>`;
      return x.drive ? `<a class="card course" target="_blank" rel="noopener" href="${esc(x.drive)}">${inner}</a>` : `<div class="card course disabled" aria-disabled="true">${inner}</div>`;
    }).join("")}</div>
    <p class="note">${ready} of ${PREVQ.length} folders linked.</p>`;
}
function library(p) {
  if (p[0]) return libSemester(p[0], p[1]);
  const q = (library.q || "").toLowerCase(), yf = library.yf || "all";
  const total = LIBRARY.reduce((a, y) => a + y.semesters.reduce((b, s) => b + s.courses.length, 0), 0);
  const ready = LIBRARY.reduce((a, y) => a + y.semesters.reduce((b, s) => b + s.courses.filter(c => c.drive).length, 0), 0);
  let main = "", shown = 0;
  LIBRARY.forEach(y => y.semesters.forEach(s => {
    if (yf !== "all" && y.year !== yf) return;
    const cs = s.courses.map((c, i) => [c, i]).filter(([c]) => !q || c.name.toLowerCase().includes(q));
    if (!cs.length) return; shown += cs.length;
    const lab = y.year.replace(" Year", "") + " Year · " + (s.code.endsWith("1") ? "1st" : "2nd") + " Semester";
    main += `<section class="sem-group" id="sem-${s.code}"><div class="sem-head"><h2><span class="yr">${y.year}</span> · ${s.code.endsWith("1") ? "1st" : "2nd"} Semester</h2><a class="pill" href="#/library/${s.code}">Semester ${s.code} · ${s.courses.length} items</a></div>
      <div class="grid libgrid">${cs.map(([c, i]) => `<a class="card course" href="#/library/${s.code}/${i}">${libArt(c.name, s.code)}<div class="cbody"><h3>${esc(c.name)}</h3><p>${c.drive ? "Folder linked ✓" : "Drive link coming soon"}</p></div></a>`).join("")}</div></section>`;
  }));
  if (!shown) main = `<div class="note">No resources match “${esc(library.q || "")}”.</div>`;
  const years = ["all"].concat(LIBRARY.map(y => y.year));
  app.innerHTML = `<div class="libpage"><div class="libmain"><h1>${navIco("library")} Resource Library</h1><p>Choose your year and semester. All files are stored in Google Drive and open in a new tab.</p>
    <div class="libbar"><input class="libsearch" type="search" placeholder="Search courses…" aria-label="Search courses" value="${esc(library.q || "")}">
    <div class="tabs">${years.map(v => `<a class="tab ${yf === v ? "on" : ""}" href="#/library" data-yf="${v}">${v === "all" ? "All years" : v}</a>`).join("")}</div></div>
    <div id="libres">${main}</div></div>
    <aside class="libside"><div class="panel"><h3>Quick links</h3>
      <a class="btn" target="_blank" rel="noopener" href="${SITE.driveRoot}">Open full Drive folder ↗</a>
      <div class="libstats"><div class="stat"><b>${total}</b><span>Folders</span></div><div class="stat"><b>${ready}</b><span>Linked</span></div></div></div>
      <div class="panel"><h3>Jump to semester</h3><div class="libjump">${LIBRARY.flatMap(y => y.semesters).map(s => `<a class="tag" href="#/library/${s.code}">${s.code}</a>`).join("")}</div></div>
      <div class="panel"><h3>Also on StatSphere</h3><a href="#/topics">${navIco("topics",20)} Topic explanations</a><a href="#/quizzes">${navIco("quizzes",20)} Quizzes</a><a href="#/practice">${navIco("practice",20)} Practice</a></div></aside></div>`;
  const inp = app.querySelector(".libsearch");
  inp.oninput = () => { library.q = inp.value; const pos = inp.selectionStart; library([]); const n = app.querySelector(".libsearch"); n.focus(); n.setSelectionRange(pos, pos); };
  app.querySelectorAll("[data-yf]").forEach(a => a.onclick = e => { e.preventDefault(); library.yf = a.dataset.yf; library([]); });
}
function libSemester(code, ci) {
  let sem, yr;
  LIBRARY.forEach(y => y.semesters.forEach(s => { if (s.code === code) { sem = s; yr = y; } }));
  if (!sem) return library([]);
  if (ci !== undefined && sem.courses[ci]) {
    const c = sem.courses[ci], id = driveId(c.drive);
    app.innerHTML = `<div class="crumb"><a href="#/library">Library</a> › <a href="#/library/${code}">${code}</a> › ${esc(c.name)}</div>
      <h1>${esc(c.name)}</h1>${c.note?`<p>${esc(c.note)}</p>`:""}
      ${c.drive ? `<a class="btn" target="_blank" rel="noopener" href="${c.drive}">Open in Google Drive ↗</a>`
        : `<div class="note">The Drive folder for this course is not ready yet. It will be added soon.</div><span class="btn disabled" aria-disabled="true">Drive link coming soon</span>`}
      ${id ? `<iframe class="drive" src="https://drive.google.com/embeddedfolderview?id=${id}#list"></iframe>` : ""}`;
    return;
  }
  app.innerHTML = `<div class="crumb"><a href="#/library">Library</a> › ${yr.year} › ${code}</div><h1>Semester ${code}</h1>
    <div class="grid libgrid">${sem.courses.map((c,i)=>`<a class="card course" href="#/library/${code}/${i}">${libArt(c.name, code)}<div class="cbody"><h3>${esc(c.name)}</h3><p>${c.drive?"Folder linked ✓":"Drive link coming soon"}</p></div></a>`).join("")}</div>
    ${sem.drive ? `<a class="btn alt" target="_blank" rel="noopener" href="${sem.drive}">Open ${esc(sem.folder)} in Drive ↗</a>` : `<a class="btn alt" target="_blank" rel="noopener" href="${SITE.driveRoot}">Open the main Drive folder ↗</a>`}`;
}

/* ---------- CURRICULUM ---------- */
function fc(v) { return v.toFixed(1); }
function curriculum(p) {
  const types = ["Theory","Lab","Viva-voce","Field Work","Project"], cls = t => "ty-" + t.toLowerCase().replace(/[^a-z]/g,"");
  const sel = p[0] || "all";
  let all = 0, sumT = {}, n = 0;
  CURRICULUM.forEach(y => y.semesters.forEach(s => { all += s.total; n++; s.courses.forEach(c => { if (!c[3]) sumT[c[1]] = (sumT[c[1]]||0) + c[2]; }); }));
  let h = `<h1>📋 Curriculum</h1><p>Every course of the 4-year B.Sc. (Hons.) in Statistics, year by year: course type and credit, with the credit total of each semester.</p>
   <div class="stats cur-sum"><div class="stat"><b>${n}</b><span>Semesters</span></div><div class="stat"><b>${fc(all)}</b><span>Total credits (sum of semester totals)</span></div>
   <div class="stat"><b>${fc(sumT["Theory"])}</b><span>Theory credits</span></div><div class="stat"><b>${fc(sumT["Lab"])}</b><span>Lab credits</span></div></div>
   <div class="tabs">${["all"].concat(CURRICULUM.map(y=>y.year)).map(v=>`<a class="tab ${sel===v?"on":""}" href="#/curriculum/${v==="all"?"all":encodeURIComponent(v)}">${v==="all"?"All years":v}</a>`).join("")}</div>
   <div class="legend">${types.map(t=>`<span class="ty ${cls(t)}">${t}</span>`).join("")}</div>`;
  const dsel = decodeURIComponent(sel);
  let gi = 0; const startIdx = new Map();
  CURRICULUM.forEach(y => y.semesters.forEach(s => { startIdx.set(s, gi); gi += s.courses.length; }));
  CURRICULUM.filter(y => sel === "all" || y.year === dsel).forEach(y => {
    h += `<h2>${y.year}</h2><div class="cgrid">`;
    y.semesters.forEach(s => {
      h += `<div class="panel cur"><h3><span class="tag">Semester ${s.code}</span></h3><div class="tblw"><table class="ctab"><thead><tr><th>Course</th><th>Type</th><th class="r">Credit</th></tr></thead><tbody>` +
        s.courses.map((c, k) => `<tr class="crow${c[3]?' optrow':''}" tabindex="0" role="button" data-i="${startIdx.get(s)+k}" data-sem="${s.code}" title="Open course content"><td>${esc(c[0])} <span class="sy">Syllabus ›</span></td><td><span class="ty ${cls(c[1])}">${c[1]}</span></td><td class="r">${fc(c[2])}</td></tr>`).join("") +
        `</tbody><tfoot><tr><td colspan="2">${s.totalOpt?"Total (without optional)":"Total"}</td><td class="r">${fc(s.total)}</td></tr>` +
        (s.totalOpt ? `<tr><td colspan="2">Total (with optional Comprehensive)</td><td class="r">${fc(s.totalOpt)}</td></tr>` : "") + `</tfoot></table></div></div>`;
    });
    h += `</div>`;
  });
  app.innerHTML = h;
  const open = el => showSyllabus(+el.dataset.i, el.dataset.sem);
  app.querySelectorAll("tr.crow").forEach(r => { r.onclick = () => open(r); r.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(r); } }; });
}
function showSyllabus(i, semCode) {
  const flat = []; CURRICULUM.forEach(y => y.semesters.forEach(s => s.courses.forEach(c => flat.push([c, s]))));
  const [c, s] = flat[i], d = (typeof SYLLABUS !== "undefined") && SYLLABUS[i];
  const cls = "ty-" + c[1].toLowerCase().replace(/[^a-z]/g,"");
  const fmtC = t => t.split(/(?<=[.;])\s+(?=[A-Z][A-Za-z0-9&,\/\-–() ]{2,80}:\s)/).map(x => { const m = x.match(/^([^:]{2,80}):\s+([\s\S]*)$/); return m ? `<p><b>${esc(m[1])}.</b> ${esc(m[2])}</p>` : `<p>${esc(x)}</p>`; }).join("");
  const prev = document.activeElement;
  const ov = document.createElement("div"); ov.className = "modal-ov";
  ov.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(c[0])}"><button class="modal-x" aria-label="Close">✕</button>
    <div class="mhead"><span class="tag">Semester ${s.code}</span> <span class="ty ${cls}">${c[1]}</span> <span class="tag">${fc(c[2])} credit${c[2]===1?"":"s"}</span>${c[3]?' <span class="tag">Optional</span>':""}</div>
    <h2>${esc(c[0])}</h2>${d ? `<div class="mcode">Course code: ${esc(d.code)}</div><h3>Course contents</h3><div class="mbody">${fmtC(d.contents)}</div>` + (d.books ? `<details class="mbooks"><summary>Recommended books</summary><div>${esc(d.books).replace(/\n/g,"<br>")}</div></details>` : "") : "<p>Syllabus not available.</p>"}</div>`;
  const close = () => { ov.remove(); document.body.classList.remove("noscroll"); document.removeEventListener("keydown", onKey); if (prev && prev.focus) prev.focus(); };
  const onKey = e => { if (e.key === "Escape") close(); };
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector(".modal-x").onclick = close;
  document.addEventListener("keydown", onKey);
  document.body.classList.add("noscroll"); document.body.appendChild(ov); ov.querySelector(".modal-x").focus();
}

/* ---------- shared: courses grouped under Year / Semester ---------- */
function semGrouped(list, href, sub) {
  return SEM_GROUPS.map(g => {
    const cs = list.filter(c => COURSE_SEM[c.id] === g.code);
    if (!cs.length) return "";
    return `<section class="sem-group"><div class="sem-head"><h2><span class="yr">${g.label.split(" · ")[0]}</span> · ${g.label.split(" · ")[1]}</h2><span class="pill">Semester ${g.code} · ${cs.length} course${cs.length>1?"s":""}</span></div>
      <div class="grid">${cs.map(c=>`<a class="card course" href="${href(c)}">${courseArt(c.id)}<div class="cbody"><h3>${c.name}</h3><p>${sub(c)}</p></div></a>`).join("")}</div></section>`;
  }).join("");
}

/* ---------- TOPICS ---------- */
function topics(p) {
  if (p[0]) {
    const s = TOPICS.find(x => x.id === p[0]); if (!s) return topics([]);
    app.innerHTML = `<div class="crumb"><a href="#/topics">Topics</a> › ${s.name}</div><div class="title-art">${courseArt(s.id)}<h1>${s.name}</h1></div>
      <input class="search" id="ts" placeholder="Search in this subject…">
      <div id="tl">${s.topics.map((t,i)=>`<details class="tp" ${i===0?"open":""}><summary>${t.title}</summary>${t.body}</details>`).join("")}</div>
      ${QZ.some(x=>x.id===s.id)?`<a class="btn" href="#/quizzes/${s.id}">${navIco("quizzes",20)} Take topic-wise quizzes</a>`:""}`;
    $("#ts").oninput = e => { const v = e.target.value.toLowerCase(); document.querySelectorAll(".tp").forEach(d => { const m = d.textContent.toLowerCase().includes(v); d.style.display = m ? "" : "none"; if (v && m) d.open = true; }); };
    return;
  }
  app.innerHTML = `<h1>${navIco("topics")} Topic Explanations</h1><p>Pick a course from your semester. Every course lists its chapters and topics with worked examples and graphs.</p>
    ${semGrouped(TOPICS, c=>"#/topics/"+c.id, c=>c.topics.length+" topics")}`;
}

/* ---------- QUIZZES (course → topic → 20 questions: MCQ + True/False + Fill in the blank) ---------- */
const normAns = v => String(v).toLowerCase().replace(/[−–—]/g,"-").replace(/[\s,'"`.]+/g,"").replace(/^\$|\$$/g,"");
function buildTopicQuiz(top) {
  const L = [];
  (top.mcq||[]).forEach(r => { const ix = shuffle(r[1].map((_, i) => i)); L.push({ k:"mcq", q:r[0], o:ix.map(i => r[1][i]), a:ix.indexOf(r[2]), e:r[3] }); });
  (top.tf||[]).forEach(r => L.push({ k:"tf", q:r[0], a:r[1]?0:1, o:["True","False"], e:r[2] }));
  (top.fib||[]).forEach(r => L.push({ k:"fib", q:r[0], ans:String(r[1]).split("|"), e:r[2] }));
  return L;
}
function quizzes(p) {
  if (p[0] === "mock") return mock(p[1]);
  if (p[0] && p[1] !== undefined) {
    const c = QZ.find(x => x.id === p[0]), t = c && c.topics[+p[1]]; if (!t) return quizzes([p[0]]);
    return runQuiz({ name: t.t, course: c, ti: +p[1], questions: buildTopicQuiz(t) });
  }
  if (p[0]) {
    const c = QZ.find(x => x.id === p[0]); if (!c) return quizzes([]);
    app.innerHTML = `<div class="crumb"><a href="#/quizzes">Quizzes</a> › ${c.name}</div><div class="title-art">${courseArt(c.id)}<h1>${c.name}</h1></div>
      <p>Choose a topic. Each topic has its own quiz of 20 questions: 8 MCQ, 6 True/False and 6 Fill in the blank.</p>
      <div class="grid">${c.topics.map((t,i)=>`<a class="card tcard" href="#/quizzes/${c.id}/${i}"><div><h3>${t.t}</h3><div class="mixbar"><span class="tag">${(t.mcq||[]).length} MCQ</span><span class="tag">${(t.tf||[]).length} T/F</span><span class="tag">${(t.fib||[]).length} Fill-in</span></div></div><span class="n">${i+1}</span></a>`).join("")}</div>
      <a class="btn alt" href="#/topics/${c.id}">📖 Read the topic explanations first</a>`;
    return;
  }
  app.innerHTML = `<h1>${navIco("quizzes")} Quizzes &amp; MCQs</h1><p>Pick your course, then a topic. Every topic has 20 questions (MCQ, True/False and Fill in the blank) with instant score and explanations.</p>
    ${semGrouped(QZ, c=>"#/quizzes/"+c.id, c=>c.topics.length+" topics · "+c.topics.length*20+" questions")}
    <h2>⏱ Mock Tests</h2><p>Real exam practice: 20 questions, timed. Answers and explanations are shown after you submit (or when time is up).</p>
    <div class="grid">${MOCKS.map(s=>`<a class="card" href="#/quizzes/mock/${s.id}"><h3>Mock: ${s.name}</h3><p>${s.questions.length} questions · ${s.minutes} min</p></a>`).join("")}
    <a class="card" href="#/quizzes/mock/all"><h3>Mock: Mixed</h3><p>20 random questions from all courses · 30 min</p></a></div>`;
}
function mock(id) {
  if (id === "all") return runQuiz({ name: "Mock Test: Mixed", questions: shuffle(MOCKS.flatMap(s => s.questions)).slice(0, 20) }, 30 * 60, true);
  const m = MOCKS.find(x => x.id === id); if (!m) return quizzes([]);
  runQuiz({ name: "Mock Test: " + m.name, questions: m.questions }, (m.minutes || 30) * 60, true);
}
function runQuiz(s, seconds, isMock) {
  if (!s) return quizzes([]);
  const qs = isMock ? shuffle(s.questions) : s.questions.slice(), ans = {};
  const back = s.course ? `<a href="#/quizzes">Quizzes</a> › <a href="#/quizzes/${s.course.id}">${s.course.name}</a> › ${s.name}` : `<a href="#/quizzes">Quizzes</a> › ${s.name}`;
  let h = `<div class="crumb">${back}</div><h1>${s.name}</h1>${s.course?`<p>${s.course.name} · Topic ${s.ti+1} of ${s.course.topics.length} · ${qs.length} questions</p>`:""}${seconds?`<div class="timer" id="tm"></div>`:""}${isMock?`<p>${qs.length} questions · answers are shown after you submit. <span id="ansct"></span></p>`:""}`;
  const label = { mcq:"MCQ", tf:"TRUE / FALSE", fib:"FILL IN THE BLANK" };
  qs.forEach((q, i) => {
    const kind = q.k || "mcq", tag = q.k ? `<span class="qtype">${label[kind]}</span>` : "";
    let body;
    if (kind === "fib") body = `<input class="fib" type="text" autocomplete="off" spellcheck="false" placeholder="Type your answer" aria-label="Answer ${i+1}"><div class="fibans"></div>`;
    else if (kind === "tf") body = `<div class="tfrow">${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${o}</button>`).join("")}</div>`;
    else body = q.o.map((o,j)=>`<button class="opt" data-j="${j}">${String.fromCharCode(65+j)}. ${q.k ? esc(o) : o}</button>`).join("");
    h += `<div class="q" data-i="${i}" data-k="${kind}"><p class="t">${i+1}. ${tag}${(q.k ? esc(q.q) : q.q).replace(/___+/g,"<b>_____</b>")}</p>${body}<div class="exp"></div></div>`; });
  h += `<button class="btn" id="sub">Submit &amp; see score</button><div id="res"></div>`;
  app.innerHTML = h;
  let done = false;
  const cnt = () => { const c = $("#ansct"); if (c) c.textContent = "Answered " + Object.keys(ans).length + " / " + qs.length; };
  app.querySelectorAll(".q").forEach(box => {
    box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      if (done) return; box.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); ans[box.dataset.i] = +b.dataset.j; cnt(); });
    const inp = box.querySelector(".fib");
    if (inp) inp.oninput = () => { if (inp.value.trim()) ans[box.dataset.i] = inp.value; else delete ans[box.dataset.i]; cnt(); };
  });
  const finish = () => {
    if (done) return; done = true; clearInterval(timerHandle); let score = 0;
    app.querySelectorAll(".q").forEach(box => { const i = +box.dataset.i, q = qs[i], e = box.querySelector(".exp"); let ok;
      if (q.k === "fib") {
        const inp = box.querySelector(".fib"); inp.disabled = true;
        ok = ans[i] !== undefined && q.ans.some(a => normAns(a) === normAns(ans[i]));
        inp.classList.add(ok ? "right" : "wrong");
        box.querySelector(".fibans").innerHTML = ok ? "✔ Correct" : "✘ Correct answer: <b>" + esc(q.ans[0]) + "</b>";
      } else {
        const opts = box.querySelectorAll(".opt"); opts[q.a].classList.add("right");
        ok = ans[i] === q.a; if (!ok && ans[i] !== undefined) opts[ans[i]].classList.add("wrong");
      }
      if (ok) score++;
      e.classList.add("show"); e.innerHTML = (ans[i]===undefined?"<b>Not answered.</b> ":"") + "<b>Explanation:</b> " + (q.k ? esc(q.e) : q.e); });
    const pct = Math.round(100 * score / qs.length);
    $("#sub").style.display = "none";
    $("#res").innerHTML = `<div class="score">Your score: <b>${score} / ${qs.length}</b> (${pct}%) — ${pct>=80?"Excellent! 🎉":pct>=50?"Good, keep practising 👍":"Review the topics and try again 📖"}</div>
      <p><button class="btn" onclick="router()">Try again</button>${s.course?`<a class="btn alt" href="#/quizzes/${s.course.id}">All topics</a>${s.course.topics[s.ti+1]?`<a class="btn alt" href="#/quizzes/${s.course.id}/${s.ti+1}">Next topic ›</a>`:""}<a class="btn alt" href="#/topics/${s.course.id}">Review topic</a>`:`<a class="btn alt" href="#/topics">Review topics</a>`}</p>`;
    $("#tm") && ($("#tm").textContent = "Test finished");
    $("#res").scrollIntoView({behavior:"smooth"});
  };
  $("#sub").onclick = finish;
  if (seconds) { let t = seconds; const tick = () => { $("#tm").textContent = "⏱ " + Math.floor(t/60) + ":" + String(t%60).padStart(2,"0"); if (t-- <= 0) finish(); }; tick(); timerHandle = setInterval(tick, 1000); }
}

/* ---------- PRACTICE ---------- */
function practice(p) {
  if (p[0]) {
    const s = PRACTICE.find(x => x.id === p[0]); if (!s) return practice([]);
    app.innerHTML = `<div class="crumb"><a href="#/practice">Practice</a> › ${s.name}</div><div class="title-art">${courseArt(s.id)}<h1>${s.name} – Practice</h1></div><p>Try each problem on paper first, then reveal the answer.</p>
      ${s.items.map((it,i)=>`<div class="q"><p class="t">Q${i+1}. ${it.q}</p><details><summary>Show / hide answer</summary><p>${it.a}</p></details></div>`).join("")}
      ${QZ.some(x=>x.id===s.id)?`<a class="btn" href="#/quizzes/${s.id}">Take the ${s.name} quizzes</a>`:""}`;
    return;
  }
  app.innerHTML = `<h1>${navIco("practice")} Practice &amp; Self-Assessment</h1><p>Practice problems with hidden answers, plus timed mock tests.</p>
    ${semGrouped(PRACTICE, c=>"#/practice/"+c.id, c=>c.items.length+" problems")}
    <a class="btn" href="#/quizzes">Go to quizzes &amp; mock tests ⏱</a>`;
}

/* ---------- ABOUT ---------- */
function about() {
  const a = SITE.about, subj = encodeURIComponent("StatSphere feedback"), mail = `mailto:${SITE.feedbackEmail}?subject=${subj}`;
  app.innerHTML = `<h1>About StatSphere</h1>
   <div class="panel"><p>StatSphere is a free academic learning platform made for Statistics students of SUST. It brings notes, past questions, explanations, quizzes and practice together in one place.</p></div>
   <div class="panel about-card">${a.photo?`<figure><img src="${a.photo}" alt="Photo of ${a.name}" loading="lazy"><figcaption>${a.name}</figcaption></figure>`:""}<div class="who"><h3>👤 ${a.name}</h3><p>${a.dept}<br>${a.level}<br>${a.uni}</p></div></div>
   <div class="panel"><h3>💬 Feedback</h3><p>Found a mistake or want a topic added? Tell us!</p>
    <a class="btn" href="${mail}">✉ Send feedback by email</a>
    <p class="muted" style="margin-top:.6rem">Or write to us at <a href="${mail}">${SITE.feedbackEmail}</a></p>
    ${SITE.feedbackForm?`<a class="btn alt" target="_blank" rel="noopener" href="${SITE.feedbackForm}">Open feedback form ↗</a>`:""}</div>`;
}

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
  [TOPICS, QUIZZES, MOCKS].forEach(a => { const o = a.slice(); o.sort((x, y) => rank(x.id) - rank(y.id) || o.indexOf(x) - o.indexOf(y)); a.splice(0, a.length, ...o); });
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
$("#themeBtn").onclick = () => { const r = document.documentElement, t = r.dataset.theme === "light" ? "dark" : "light"; r.dataset.theme = t; try { localStorage.setItem("ss-theme", t); } catch(e){} };

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
  return { courses, sems, topics: TOPICS.reduce((n,s)=>n+s.topics.length,0), qs: QUIZZES.reduce((n,s)=>n+s.questions.length,0) + MOCKS.reduce((n,s)=>n+s.questions.length,0) };
}

const routes = {
  home, library, curriculum, topics, quizzes, practice, about,
};

function router() {
  clearInterval(timerHandle);
  const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
  const fn = routes[parts[0]] || home;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + parts[0]));
  $("#nav").classList.remove("open");
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
    <div class="stat"><b>${c.courses}</b><span>Courses &amp; folders</span></div>
    <div class="stat"><b>${c.sems}</b><span>Semesters</span></div>
    <div class="stat"><b>${c.topics}</b><span>Topic explanations</span></div>
    <div class="stat"><b>${c.qs}</b><span>Quiz &amp; mock questions</span></div>
  </div>
  <div class="grid">
    <a class="card" href="#/library"><div class="ico">📚</div><h3>Resource Library</h3><p>Notes, slides, books and past questions for every course, organised by year and semester.</p></a>
    <a class="card" href="#/curriculum"><div class="ico">📋</div><h3>Curriculum</h3><p>All 8 semesters: every course with its type and credit, plus semester totals.</p></a>
    <a class="card" href="#/topics"><div class="ico">💡</div><h3>Topic Explanations</h3><p>Clear, exam-focused explanations with formulas and examples.</p></a>
    <a class="card" href="#/quizzes"><div class="ico">🧠</div><h3>Quizzes &amp; MCQs</h3><p>Auto-graded quizzes with instant score and explanations.</p></a>
    <a class="card" href="#/practice"><div class="ico">📝</div><h3>Practice &amp; Mock Tests</h3><p>Practice problems with hide/show answers and timed mock tests.</p></a>
    <a class="card" href="#/about"><div class="ico">👤</div><h3>About &amp; Feedback</h3><p>Who made this, and how to send suggestions.</p></a>
  </div>`;
}

/* ---------- LIBRARY ---------- */
function library(p) {
  if (p[0]) return libSemester(p[0], p[1]);
  let h = `<h1>📚 Resource Library</h1><p>Choose your year and semester. All files are stored in Google Drive and open in a new tab.</p>`;
  LIBRARY.forEach(y => {
    h += `<h2>${y.year}</h2><div class="grid">` + y.semesters.map(s =>
      `<a class="card" href="#/library/${s.code}"><span class="tag">Semester ${s.code}</span><h3>${s.courses.length} items</h3><p>${s.courses.filter(c=>!/question|previous|tables/i.test(c.name)).map(c=>esc(c.name)).slice(0,3).join(", ")}…</p></a>`).join("") + `</div>`;
  });
  h += `<a class="btn alt" target="_blank" rel="noopener" href="${SITE.driveRoot}">Open the full Drive folder ↗</a>`;
  app.innerHTML = h;
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
    <div class="grid">${sem.courses.map((c,i)=>`<a class="card" href="#/library/${code}/${i}"><h3>${esc(c.name)}</h3><p>${c.drive?"Folder linked ✓":"Drive link coming soon"}</p></a>`).join("")}</div>
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
  ov.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(c[0])}"><button class="mclose" aria-label="Close">✕</button>
    <div class="mhead"><span class="tag">Semester ${s.code}</span> <span class="ty ${cls}">${c[1]}</span> <span class="tag">${fc(c[2])} credit${c[2]===1?"":"s"}</span>${c[3]?' <span class="tag">Optional</span>':""}</div>
    <h2>${esc(c[0])}</h2>${d ? `<div class="mcode">Course code: ${esc(d.code)}</div><h3>Course contents</h3><div class="mbody">${fmtC(d.contents)}</div>` + (d.books ? `<details class="mbooks"><summary>Recommended books</summary><div>${esc(d.books).replace(/\n/g,"<br>")}</div></details>` : "") : "<p>Syllabus not available.</p>"}</div>`;
  const close = () => { ov.remove(); document.body.classList.remove("noscroll"); document.removeEventListener("keydown", onKey); if (prev && prev.focus) prev.focus(); };
  const onKey = e => { if (e.key === "Escape") close(); };
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector(".mclose").onclick = close;
  document.addEventListener("keydown", onKey);
  document.body.classList.add("noscroll"); document.body.appendChild(ov); ov.querySelector(".mclose").focus();
}

/* ---------- TOPICS ---------- */
function topics(p) {
  if (p[0]) {
    const s = TOPICS.find(x => x.id === p[0]); if (!s) return topics([]);
    app.innerHTML = `<div class="crumb"><a href="#/topics">Topics</a> › ${s.name}</div><h1>${s.name}</h1>
      <input class="search" id="ts" placeholder="Search in this subject…">
      <div id="tl">${s.topics.map((t,i)=>`<details class="tp" ${i===0?"open":""}><summary>${t.title}</summary>${t.body}</details>`).join("")}</div>`;
    $("#ts").oninput = e => { const v = e.target.value.toLowerCase(); document.querySelectorAll(".tp").forEach(d => { const m = d.textContent.toLowerCase().includes(v); d.style.display = m ? "" : "none"; if (v && m) d.open = true; }); };
    return;
  }
  app.innerHTML = `<h1>💡 Topic Explanations</h1><p>Pick a subject. More topics are added regularly.</p>
    <div class="grid">${TOPICS.map(s=>`<a class="card" href="#/topics/${s.id}"><h3>${s.name}</h3><p>${s.topics.length} topics</p></a>`).join("")}</div>`;
}

/* ---------- QUIZZES ---------- */
function quizzes(p) {
  if (p[0] === "mock") return mock(p[1]);
  if (p[0]) return runQuiz(QUIZZES.find(x => x.id === p[0]));
  app.innerHTML = `<h1>🧠 Quizzes &amp; MCQs</h1><p>Choose a subject. You get your score and an explanation for every answer.</p>
    <div class="grid">${QUIZZES.map(s=>`<a class="card" href="#/quizzes/${s.id}"><h3>${s.name}</h3><p>${s.questions.length} questions</p></a>`).join("")}</div>
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
  let h = `<div class="crumb"><a href="#/quizzes">Quizzes</a> › ${s.name}</div><h1>${s.name}</h1>${seconds?`<div class="timer" id="tm"></div>`:""}${isMock?`<p>${qs.length} questions · answers are shown after you submit. <span id="ansct"></span></p>`:""}`;
  let lastT = null;
  qs.forEach((q, i) => { if (!isMock && q.t && q.t !== lastT) { h += `<h2 class="qtopic">${q.t}</h2>`; lastT = q.t; }
    h += `<div class="q" data-i="${i}"><p class="t">${i+1}. ${q.q}</p>${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join("")}<div class="exp"></div></div>`; });
  h += `<button class="btn" id="sub">Submit &amp; see score</button><div id="res"></div>`;
  app.innerHTML = h;
  let done = false;
  app.querySelectorAll(".q").forEach(box => box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (done) return; box.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); ans[box.dataset.i] = +b.dataset.j; const c = $("#ansct"); if (c) c.textContent = "Answered " + Object.keys(ans).length + " / " + qs.length; }));
  const finish = () => {
    if (done) return; done = true; clearInterval(timerHandle); let score = 0;
    app.querySelectorAll(".q").forEach(box => { const i = +box.dataset.i, q = qs[i], opts = box.querySelectorAll(".opt");
      opts[q.a].classList.add("right");
      if (ans[i] === q.a) score++; else if (ans[i] !== undefined) opts[ans[i]].classList.add("wrong");
      const e = box.querySelector(".exp"); e.classList.add("show"); e.innerHTML = (ans[i]===undefined?"<b>Not answered.</b> ":"") + "<b>Explanation:</b> " + q.e; });
    const pct = Math.round(100 * score / qs.length);
    $("#sub").style.display = "none";
    $("#res").innerHTML = `<div class="score">Your score: <b>${score} / ${qs.length}</b> (${pct}%) — ${pct>=80?"Excellent! 🎉":pct>=50?"Good, keep practising 👍":"Review the topics and try again 📖"}</div>
      <p><button class="btn" onclick="router()">Try again</button><a class="btn alt" href="#/topics">Review topics</a></p>`;
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
    app.innerHTML = `<div class="crumb"><a href="#/practice">Practice</a> › ${s.name}</div><h1>${s.name} – Practice</h1><p>Try each problem on paper first, then reveal the answer.</p>
      ${s.items.map((it,i)=>`<div class="q"><p class="t">Q${i+1}. ${it.q}</p><details><summary>Show / hide answer</summary><p>${it.a}</p></details></div>`).join("")}
      ${QUIZZES.some(x=>x.id===s.id)?`<a class="btn" href="#/quizzes/${s.id}">Take the ${s.name} quiz</a>`:""}`;
    return;
  }
  app.innerHTML = `<h1>📝 Practice &amp; Self-Assessment</h1><p>Practice problems with hidden answers, plus timed mock tests.</p>
    <div class="grid">${PRACTICE.map(s=>`<a class="card" href="#/practice/${s.id}"><h3>${s.name}</h3><p>${s.items.length} problems</p></a>`).join("")}</div>
    <a class="btn" href="#/quizzes">Go to quizzes &amp; mock tests ⏱</a>`;
}

/* ---------- ABOUT ---------- */
function about() {
  const a = SITE.about, subj = encodeURIComponent("StatSphere feedback"), mail = `mailto:${SITE.feedbackEmail}?subject=${subj}`;
  app.innerHTML = `<h1>About StatSphere</h1>
   <div class="panel"><p>StatSphere is a free academic learning platform made for Statistics students of SUST. It brings notes, past questions, explanations, quizzes and practice together in one place.</p></div>
   <div class="panel"><h3>👤 ${a.name}</h3><p>${a.dept}<br>${a.level}<br>${a.uni}</p></div>
   <div class="panel"><h3>💬 Feedback</h3><p>Found a mistake or want a topic added? Tell us!</p>
    <a class="btn" href="${mail}">✉ Send feedback by email</a>
    ${SITE.feedbackForm?`<a class="btn alt" target="_blank" rel="noopener" href="${SITE.feedbackForm}">Open feedback form ↗</a>`:""}</div>`;
}

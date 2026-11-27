/* ---------- CGPA CALCULATOR ----------
   Credits come from CURRICULUM (data/curriculum.js). Courses with no grade selected are ignored.
   SGPA = sum(credit x grade point) / sum(credits of graded courses). CGPA uses all graded courses of the semesters shown. */
const GRADES = [["A+",4.00,"80–100"],["A",3.75,"75–79"],["A−",3.50,"70–74"],["B+",3.25,"65–69"],["B",3.00,"60–64"],["B−",2.75,"55–59"],["C+",2.50,"50–54"],["C",2.25,"45–49"],["D",2.00,"40–44"],["F",0.00,"below 40"]];
function cgpa() {
  const KEY = "ss-cgpa-v1", sems = [];
  CURRICULUM.forEach(y => y.semesters.forEach(s => sems.push(s)));
  let st = { done: 1, view: "", g: {} };
  try { Object.assign(st, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  st.done = Math.min(Math.max(+st.done || 1, 1), sems.length);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const f2 = n => n.toFixed(2);
  const gid = (s, i) => s.code + "_" + i;
  function calc(s) {
    let pts = 0, cr = 0;
    s.courses.forEach((c, i) => { const v = st.g[gid(s, i)]; if (v === undefined || v === "") return; pts += c[2] * +v; cr += c[2]; });
    return { pts, cr, gpa: cr ? pts / cr : null };
  }
  function render() {
    const shown = sems.slice(0, st.done), cur = shown.find(s => s.code === st.view) || shown[shown.length - 1];
    let h = `<h1>🎓 CGPA Calculator</h1><p>Pick how many semesters you have completed, choose the grade for each course, and your SGPA and CGPA are calculated automatically (weighted by credit). Courses with no grade selected are ignored. Your choices are saved on this device.</p>
    <div class="panel"><label class="cg-l">Semesters completed so far
      <select id="cgDone" class="cg-sel">${sems.map((s, i) => `<option value="${i + 1}" ${i + 1 === st.done ? "selected" : ""}>Up to semester ${s.code} (${i + 1} semester${i ? "s" : ""})</option>`).join("")}</select></label>
      <div class="cg-res"><div class="cg-box"><span>Current semester (${cur.code}) SGPA</span><b id="cgCur">–</b><small id="cgCurS"></small></div>
      <div class="cg-box all"><span>Overall CGPA (${shown.length} semester${shown.length > 1 ? "s" : ""})</span><b id="cgAll">–</b><small id="cgAllS"></small></div></div>
      <p class="cg-note">Current semester = the one selected below (tap a tab). By default it is your latest completed semester.</p></div>
    <div class="tabs">${shown.map(s => `<a class="tab ${s === cur ? "on" : ""}" href="javascript:void 0" data-v="${s.code}">${s.code}</a>`).join("")}</div>`;
    shown.forEach(s => {
      h += `<div class="panel cg-sem" data-s="${s.code}" ${s === cur ? "" : 'hidden'}><h3><span class="tag">Semester ${s.code}</span> <span class="cg-sg" data-sg="${s.code}"></span></h3><div class="tblw"><table class="ctab"><thead><tr><th>Course</th><th class="r">Credit</th><th>Grade</th></tr></thead><tbody>` +
        s.courses.map((c, i) => `<tr><td>${esc(c[0])}</td><td class="r">${fc(c[2])}</td><td><select class="cg-sel" data-id="${gid(s, i)}"><option value="">— select —</option>${GRADES.map(g => `<option value="${g[1]}" ${String(st.g[gid(s, i)]) === String(g[1]) ? "selected" : ""}>${g[0]} (${f2(g[1])})</option>`).join("")}</select></td></tr>`).join("") +
        `</tbody></table></div></div>`;
    });
    h += `<div class="panel"><h3>Grading scale</h3><div class="tblw"><table class="ctab"><thead><tr><th>Marks (%)</th><th>Letter grade</th><th>Grade point</th></tr></thead><tbody>${GRADES.map(g => `<tr><td>${g[2]}</td><td>${g[0]}</td><td>${f2(g[1])}</td></tr>`).join("")}</tbody></table></div>
      <p class="cg-note">The curriculum document lists credits only, so the standard Bangladesh university 4.00 scale is used. A failed course (F) counts with 0.00 points. Calculations are an estimate; the official result is issued by the university.</p></div>`;
    app.innerHTML = h;
    update();
    $("#cgDone").onchange = e => { st.done = +e.target.value; st.view = ""; save(); render(); };
    app.querySelectorAll(".tab[data-v]").forEach(a => a.onclick = () => { st.view = a.dataset.v; save(); render(); });
    app.querySelectorAll("select[data-id]").forEach(el => el.onchange = () => { st.g[el.dataset.id] = el.value; save(); update(); });
  }
  function update() {
    const shown = sems.slice(0, st.done), cur = shown.find(s => s.code === st.view) || shown[shown.length - 1];
    let P = 0, C = 0;
    shown.forEach(s => { const r = calc(s); P += r.pts; C += r.cr; const el = app.querySelector(`[data-sg="${s.code}"]`); if (el) el.textContent = r.cr ? `SGPA ${f2(r.gpa)} · ${fc(r.cr)} credits graded` : "no grades selected"; });
    const rc = calc(cur);
    $("#cgCur").textContent = rc.cr ? f2(rc.gpa) : "–"; $("#cgCurS").textContent = rc.cr ? `${fc(rc.cr)} credits graded` : "Select grades below";
    $("#cgAll").textContent = C ? f2(P / C) : "–"; $("#cgAllS").textContent = C ? `${fc(C)} credits graded` : "Select grades below";
  }
  render();
}

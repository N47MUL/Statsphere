/* KaTeX auto-render: re-typesets math whenever the page content changes. */
(function () {
  var opts = {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false, errorColor: "#e5484d", strict: false, ignoredClasses: ["no-math"]
  };
  var queued = false;
  function run() {
    queued = false;
    if (!window.renderMathInElement) return;
    obs.disconnect();
    try { renderMathInElement(document.body, opts); } catch (e) { console.error(e); }
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  var obs = new MutationObserver(function () { if (!queued) { queued = true; requestAnimationFrame(run); } });
  obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  window.typesetMath = run;
  document.addEventListener("DOMContentLoaded", run);
  window.addEventListener("load", run);
})();

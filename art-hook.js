/* Adds the course clip-art next to the course title on Topic Explanation pages
   (also when the chapter view from topics-view.js renders the page). Loaded last. */
(function () {
  if (typeof routes === "undefined" || typeof courseArt === "undefined") return;
  const prev = routes.topics;
  routes.topics = function (p) {
    prev(p);
    const id = p && p[0];
    if (!id || !COURSE_ART[id]) return;
    const h = document.querySelector("#app > h1");
    if (h && !document.querySelector("#app .title-art")) {
      const w = document.createElement("div"); w.className = "title-art";
      h.parentNode.insertBefore(w, h); w.insertAdjacentHTML("beforeend", courseArt(id)); w.appendChild(h);
    }
  };
  if (/^#\/?topics\/[^/]+/.test(location.hash)) router();
})();

// Mobile-app-only tweaks (loaded only inside the Android app).
(function () {
  var doc = document;
  var css = [
    "html{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;overscroll-behavior-y:none}",
    "body{padding-bottom:env(safe-area-inset-bottom);touch-action:manipulation;-webkit-user-select:none;user-select:none}",
    "p,li,td,th,pre,code,input,textarea,.katex,#app [class*=expl],#app [class*=ans]{-webkit-user-select:text;user-select:text}",
    "a,button,.btn,.card,.stat{transition:transform .12s ease,opacity .12s ease}",
    "a:active,button:active,.btn:active,.card:active{transform:scale(.97);opacity:.85}",
    "@keyframes ssIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}",
    "#app.ss-in{animation:ssIn .24s ease-out}",
    "#ssToast{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom));transform:translate(-50%,20px);background:#0b2540;color:#fff;padding:10px 16px;border-radius:999px;font:500 .9rem system-ui,sans-serif;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:9999;max-width:88vw;text-align:center}",
    "#ssToast.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}",
    "#ssToast b{margin-left:10px;color:#7dd3fc;text-decoration:underline}"
  ].join("");
  var st = doc.createElement("style"); st.textContent = css; doc.head.appendChild(st);

  var toastEl, toastTimer;
  function toast(msg, action, ms) {
    if (!toastEl) { toastEl = doc.createElement("div"); toastEl.id = "ssToast"; doc.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.onclick = null;
    if (action) { var b = doc.createElement("b"); b.textContent = action.label; toastEl.appendChild(b); toastEl.onclick = action.run; }
    toastEl.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("on"); }, ms || 2200);
  }

  // Smooth page change + always start at the top.
  var app = doc.getElementById("app");
  function animate() {
    if (!app) return;
    app.classList.remove("ss-in"); void app.offsetWidth; app.classList.add("ss-in");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", animate);
  animate();

  // Online / offline notice.
  window.addEventListener("offline", function () { toast("You are offline. Saved content still works."); });
  window.addEventListener("online", function () { toast("Back online"); });

  var cap = window.Capacitor, P = (cap && cap.Plugins) || {};

  // Open web links (Google Drive etc.) in an in-app browser tab.
  doc.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || !P.Browser) return;
    var u = a.getAttribute("href") || "";
    if (/^https?:\/\//i.test(u) && u.indexOf(location.origin) !== 0) {
      e.preventDefault();
      P.Browser.open({ url: u });
    }
  }, true);

  // Android back button: back inside the site, press twice on Home to exit.
  var lastBack = 0;
  if (P.App && P.App.addListener) {
    P.App.addListener("backButton", function () {
      var h = location.hash, home = !h || h === "#" || h === "#/" || h === "#/home";
      if (!home) {
        if (history.length > 1) history.back(); else location.hash = "#/home";
        return;
      }
      var now = Date.now();
      if (now - lastBack < 2000) P.App.exitApp();
      else { lastBack = now; toast("Press back again to exit"); }
    });
  }

  // Content updates: the app checks the website for new content in the background.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", function (e) {
      if (e.data && e.data.type === "ss-updated")
        toast("New content downloaded", { label: "Refresh", run: function () { location.reload(); } }, 8000);
    });
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();

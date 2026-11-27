// Mobile-app-only tweaks, loaded only inside the Android app.
(function () {
  var s = document.createElement("style");
  s.textContent =
    "body{padding-bottom:env(safe-area-inset-bottom)}" +
    ".top{padding-left:max(0px,env(safe-area-inset-left));padding-right:max(0px,env(safe-area-inset-right))}" +
    "html{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}";
  document.head.appendChild(s);
  // Android back button: go back in the site, exit on the home page.
  var cap = window.Capacitor;
  var App = cap && cap.Plugins && cap.Plugins.App;
  if (App && App.addListener) {
    App.addListener("backButton", function () {
      var h = location.hash;
      if (h && h !== "#/home" && h !== "#/" && h !== "#") {
        if (window.history.length > 1) history.back(); else location.hash = "#/home";
      } else {
        App.exitApp();
      }
    });
  }
})();

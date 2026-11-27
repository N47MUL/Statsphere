/* Short click tick generated with WebAudio (no audio file). The audio context is created/unlocked on first interaction. */
(function () {
  var ctx = null;
  function unlock() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctx) ctx = new AC();
      if (ctx.state === "suspended") ctx.resume();
    } catch (e) { ctx = null; }
    return ctx;
  }
  function tick() {
    var c = unlock();
    if (!c) return;
    try {
      var t = c.currentTime, o = c.createOscillator(), g = c.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(1100, t);
      o.frequency.exponentialRampToValueAtTime(500, t + 0.05);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.15, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + 0.08);
    } catch (e) {}
  }
  document.addEventListener("pointerdown", unlock, { capture: true, once: true });
  document.addEventListener("click", tick, true);
  document.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") tick(); }, true);
})();

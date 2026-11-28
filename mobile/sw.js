// Service worker for the StatSphere Android app.
// The app always starts from its bundled copy of the site (works offline).
// When online, it quietly downloads the newest published site, and uses it from the next launch.
const LIVE = "https://n47mul.github.io/Statsphere/";
const BUNDLED = "__BUNDLED_VERSION__";
const META = "ss-meta";
const verOf = html => ((html.match(/RELEASE VERSION:\s*(\w+)/) || [])[1]) || "";
const norm = u => { const p = new URL(u).pathname; return p === "/" ? "/index.html" : p; };
const mobilize = html => html
  .replace(/(<meta name="viewport" content="[^"]*)"/, '$1, viewport-fit=cover"')
  .replace("</body>", '<script src="js/mobile-extra.js"></script>\n</body>');

async function current() {
  try {
    const m = await caches.open(META);
    const r = await m.match("current");
    const v = r ? await r.text() : "";
    return v && v > BUNDLED ? v : "";
  } catch (e) { return ""; }
}

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim().then(update)));

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin || url.pathname === "/sw.js") return;
  e.respondWith((async () => {
    const ver = await current();
    if (ver) {
      const c = await caches.open("live-" + ver);
      const hit = await c.match(norm(req.url));
      if (hit) return hit;
    }
    let res;
    try { res = await fetch(req); } catch (err) { res = null; }
    if (res && res.status !== 404) return res;
    // File missing in the bundled app (added to the website later): try the live site.
    try {
      const live = await fetch(LIVE + norm(req.url).slice(1));
      if (live.ok) return live;
    } catch (err) {}
    return res || Response.error();
  })());
  if (url.pathname === "/" || url.pathname === "/index.html") e.waitUntil(update());
});

let running = false;
async function update() {
  if (running) return;
  running = true;
  try {
    const idx = await fetch(LIVE + "index.html", { cache: "no-store" });
    if (!idx.ok) return;
    const html = await idx.text();
    const ver = verOf(html);
    const have = (await current()) || BUNDLED;
    if (!ver || ver <= have) return;
    const files = [...html.matchAll(/(?:src|href)="((?!https?:|#|\/\/|mailto:)[^"]+\.(?:js|css))(?:\?[^"]*)?"/g)].map(m => m[1]);
    const cache = await caches.open("live-" + ver);
    await cache.put("/index.html", new Response(mobilize(html), { headers: { "Content-Type": "text/html; charset=utf-8" } }));
    for (const f of new Set(files)) {
      const r = await fetch(LIVE + f, { cache: "no-store" });
      if (!r.ok) throw new Error("download failed: " + f);
      await cache.put("/" + f, r);
    }
    await (await caches.open(META)).put("current", new Response(ver));
    for (const k of await caches.keys()) if (k.startsWith("live-") && k !== "live-" + ver) await caches.delete(k);
    for (const c of await self.clients.matchAll()) c.postMessage({ type: "ss-updated", version: ver });
  } catch (err) {
    /* offline or partial download: keep the current content */
  } finally { running = false; }
}

// Copies the website (repo root) into mobile/www and adds the small mobile-only
// tweaks (safe areas, Android back button). The website itself is not modified.
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "../..");
const www = path.resolve(__dirname, "../www");
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(www, { recursive: true });
for (const item of ["index.html", "css", "data", "img", "js", "lib"]) {
  fs.cpSync(path.join(root, item), path.join(www, item), { recursive: true });
}
fs.copyFileSync(path.join(__dirname, "../mobile-extra.js"), path.join(www, "js/mobile-extra.js"));
let html = fs.readFileSync(path.join(www, "index.html"), "utf8");
const ver = (html.match(/RELEASE VERSION:\s*(\w+)/) || [])[1] || "0";
fs.writeFileSync(path.join(www, "sw.js"), fs.readFileSync(path.join(__dirname, "../sw.js"), "utf8").replace("__BUNDLED_VERSION__", ver));
html = html.replace(/(<meta name="viewport" content="[^"]*)"/, '$1, viewport-fit=cover"');
html = html.replace("</body>", '<script src="js/mobile-extra.js"></script>\n</body>');
fs.writeFileSync(path.join(www, "index.html"), html);
console.log("mobile/www ready");

# StatSphere Android app

The app is the website wrapped with Capacitor. It bundles the site files, so it works offline
(Google Drive links still need internet). The website at the repo root is unchanged.

## Release (GitHub does everything)
1. Merge this to `main`.
2. GitHub → **Releases → Draft a new release** → create a new tag like `v1.0.0` → **Publish**.
3. Wait ~5–8 min. The **Android APK** workflow (Actions tab) builds `StatSphere.apk` and attaches it to the release.

Without a signing key the APK is debug-signed. It installs fine on phones but cannot go on Play Store.
For a proper signed APK add these repo secrets (Settings → Secrets and variables → Actions):
`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.
Create a keystore once: `keytool -genkeypair -v -keystore release.jks -alias statsphere -keyalg RSA -keysize 2048 -validity 10000`
then `base64 -w0 release.jks` for the first secret. Keep that keystore safe; updates must use the same one.

## Local build
`cd mobile && npm install && npm run prepare-www && npx cap add android && npx capacitor-assets generate --android && npx cap sync android`, then open `android/` in Android Studio.

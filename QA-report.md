# Pre-launch QA report

Date: June 2026 · Scope: index.html, listings.html, privacy.html + assets
Method: static analysis (structure, links, meta, a11y attributes, sizes). **Note:** a live Lighthouse / real-device run still needs a browser — see "Needs a browser run" below.

## ✅ Passed (static)
- **Structure** — all pages: balanced tags, `lang="he" dir="rtl"`, viewport, `<title>`, meta description.
- **CSS** — self-hosted `assets/styles.css` on every page; Tailwind play-CDN fully removed.
- **SEO/share** — favicon, OG/Twitter meta (home + listings), canonical, `theme-color`, `robots.txt`, `sitemap.xml`. `noindex` active on all pages (pre-launch).
- **Links** — all internal links + nav anchors (`#flagship/#portfolio/#sold/#about/#top`) resolve. Cross-page nav + footer + privacy links OK.
- **Images** — 100% have `alt` and `loading="lazy"`.
- **i18n** — HE/EN/FR keys fully covered on all pages; RTL/LTR flips.
- **Lead form** — required fields, honeypot anti-spam, consent-gated analytics, WhatsApp primary.
- **Sizes** — index 54KB, listings 24KB, privacy 12KB, styles.css 16KB. Light.

## 🟡 Fix before launch (owner action)
- **GA4 Measurement ID** — replace `G-XXXXXXXXXX` in both pages.
- **Formspree endpoint** — replace `https://formspree.io/f/XXXXXXXX` in index.html to capture leads to email (until then, WhatsApp-only).
- **Real images + descriptive alt** — placeholders use generic `alt=""`; real property photos should get descriptive alt text (SEO + a11y).
- **OG share image** — add `assets/og-image.jpg` (1200×630); referenced but file not present yet.
- **FR/EN proofread** — AI translations need a native check.
- **Privacy policy** — legal review (Israel PPL / GDPR).
- **Domain** — replace `REPLACE-WITH-DOMAIN` in sitemap.xml + canonical; flip `robots.txt` + remove `noindex` at launch.
- **GitHub security** — fine-grained PAT, 2FA, secret-scanning, Enforce HTTPS (from the security review).

## 🟢 Minor / FYI
- `privacy.html` has no OG tags (intentional — it's `noindex`; not shared).
- Local stray `assets/_perm_test.css` is gitignored (delete locally with `rm`).

## 🖥️ Needs a browser run (couldn't execute headless here)
Run these in Chrome once on the live URL:
- **Lighthouse** (DevTools → Lighthouse): Performance / Accessibility / Best-practices / SEO — target ≥90 each.
- **Real-device mobile**: scroll-blur hero smoothness, sticky WhatsApp button, filter dropdowns, language switch, form → WhatsApp on a phone.
- **Share preview**: paste the URL in WhatsApp/Facebook to confirm OG image/title (after adding og-image.jpg).

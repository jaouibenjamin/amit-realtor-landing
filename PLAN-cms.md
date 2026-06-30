# Plan — give Amit self-service editing (CMS)

Goal: Amit logs into a simple admin page, edits/adds/deletes properties (and testimonials, sold deals, hero text) in a form, hits Save → it commits to the repo → the live site rebuilds automatically. No code, no Benji-in-the-loop.

---

## How a git-based CMS (Decap) works on this stack
1. We drop an admin app at `/admin` (`admin/index.html` + `admin/config.yml`).
2. The CMS reads/writes **content files in the repo** (JSON or markdown), via the GitHub API.
3. Amit edits in a form → CMS commits to `main` → GitHub Pages rebuilds (~1 min) → live.
4. The site renders listings from those content files instead of the hand-kept `assets/listings.js`.

The editor UI is trivial. **The real work is 3 things:** (A) authentication, (B) converting content to a CMS-readable format, (C) image handling.

---

## A. Authentication — the decision that drives everything
A git-based CMS needs an OAuth handshake with GitHub. GitHub Pages is static and **can't run that token exchange**, so you must pick one path:

| Path | What it means | Amit's login | Effort | Best when |
|---|---|---|---|---|
| **1. Move hosting to Netlify + Decap (Netlify Identity)** ⭐ | Connect the same GitHub repo to Netlify (free, auto-deploys). Use Netlify Identity + Git Gateway — auth handled for you. | email + password (no GitHub account) | Low–medium | Non-technical client; cleanest editor. **Recommended.** |
| **2. Pages CMS (pagescms.org)** ⭐ | Stay on GitHub Pages. Pages CMS is a hosted GitHub-native editor; OAuth handled by them. Point it at the repo + a config. | logs in with GitHub | Low | Want to stay on GH Pages with least setup. |
| **3. Decap on GH Pages + self-hosted OAuth relay** | Keep GH Pages, deploy a tiny OAuth relay (Cloudflare Worker / Vercel fn) + register a GitHub OAuth App. | GitHub account | Medium | You want full control and don't mind hosting a relay. |
| **4. Google Sheet backend** | Amit edits a Google Sheet; site fetches it as JSON/CSV. | Google login | Low | Dead-simple text edits; weak for images. |

**Recommendation:** **Path 1 (Netlify + Decap)** for a non-technical client — Amit gets a clean form, logs in with email/password, full image upload, and you drop the OAuth headache. Moving GH Pages → Netlify is ~10 min (connect repo, it auto-builds). If you insist on staying on GH Pages, **Path 2 (Pages CMS)** is the least-effort.

---

## B. Content restructure (required regardless of path)
Today properties live in `assets/listings.js` as a JS array — a CMS can't edit a `.js` file as structured data. Convert to a **data collection** the CMS owns:

- `content/listings/*.json` (one file per property) **or** a single `data/listings.json` list.
- Fields per property: `area` (select: lehavim/ramot/beersheva), `rooms` (number), `price` (number), `tag` (select: family/luxury), `images` (list, media upload), and `title`/`specs` as **i18n fields** (he/en/fr).
- Same pattern can cover **sold deals**, **testimonials**, **about/stats**, and **hero text** as their own collections if you want Amit to control them too.

Then the site reads that data:
- Simplest: site `fetch()`es `data/listings.json` at runtime (works on the live HTTPS site; note: breaks local `file://` double-click preview — use a local server or the live URL).
- Or keep a tiny build step that compiles JSON → the current `listings.js` (no runtime fetch). More moving parts; only if you care about file:// preview.

i18n: Decap supports per-locale fields, so Amit fills he/en/fr for each property in one screen.

---

## C. Images / media
- Decap media library uploads images **into the repo** (e.g., `assets/uploads/`). Fine at first, but a realtor adds many photos → repo bloats over time.
- Better long-term: external media store — **Cloudinary** (free tier) or Netlify Large Media — CMS uploads there, site references the URL. Recommended once volume grows.

---

## Step-by-step (Path 1 — Netlify + Decap)
1. **Hosting:** create free Netlify account → "Add site → import from Git" → pick `amit-realtor-landing` → build command none, publish dir `/` → deploys. (Custom domain later points here instead of Pages.)
2. **Identity:** enable Netlify Identity → set registration to "invite only" → enable Git Gateway.
3. **Content model:** I convert listings (+ optionally sold/testimonials/hero) to `data/*.json`, and update the site JS to render from it.
4. **Admin:** I add `admin/index.html` + `admin/config.yml` defining the collections, fields, i18n, and media folder.
5. **Wire render:** site reads the JSON; verify cards + filters + featured still work in all 3 languages.
6. **Invite Amit:** send him a Netlify Identity invite (email) → he sets a password → logs in at `site/admin`.
7. **Guide:** I write a 1-page Hebrew "how to add/edit a property" for Amit.
8. **Test the loop:** Amit edits → commit → rebuild → live. Confirm end-to-end.

Effort: roughly half a focused build session for the content model + admin + render wiring; +~10 min Netlify setup on your side; +the media decision.

---

## Risks / tradeoffs
- **Auth backend** is the only real complexity — Path 1 or 2 removes it.
- **Repo image bloat** if using in-repo media; move to Cloudinary when photo volume grows.
- **Hosting move** (Path 1) means the live URL/domain points to Netlify, not GH Pages — trivial but worth knowing.
- **Decap maintenance:** community-maintained (ex-Netlify CMS); stable and widely used, but not fast-moving. Pages CMS is newer/simpler; Sanity (hosted) is more powerful but adds an external content API + more setup.
- **Do you even need it yet?** If listings change rarely and you're maintaining, staying manual (edit `listings.js` + push) is zero-cost. CMS pays off when Amit wants to self-serve frequently.

---

## My recommendation
Default to **Netlify + Decap (Path 1)** when Amit actually needs to self-edit. Until then, manual edits are fine. If you want to stay on GitHub Pages, **Pages CMS (Path 2)** is the lighter route. I can build either once you decide the path + the media choice.

# Build-out Plan — Phases A & B + Skill Leverage

Owner legend: **[C]** = Claude can do it here · **[B]** = Benji (accounts/infra/decisions) · **[A]** = Amit (content).
"Do-now" = no external dependency; I can execute immediately.

---

## Phase A — Minimum real launch

| # | Step | Owner | Dep | Notes |
|---|------|-------|-----|-------|
| A1 | **Production CSS build** — compile Tailwind to a static file, self-host, add SRI; drop the play-CDN | C | — | **Do-now.** Removes the "not for production" CDN + supply-chain risk. |
| A2 | **Data-driven listings** — move properties into `listings.json`, render cards from data | C | — | **Do-now.** "CMS-lite": Amit edits one file, not HTML. Bridges to Phase B CMS. |
| A3 | **SEO + favicon + share** — per-language `<title>`/meta/OG, `sitemap.xml`, `robots.txt`, favicon from the logo | C | — | **Do-now.** |
| A4 | **Privacy policy page** (HE/EN/FR) + link in footer + cookie banner | C draft | B/legal review | Needed once GA4 is live. |
| A5 | **Real content integration** — flagship, listings, sold deals, testimonials, about | C build | A provides | Uses the content checklist already sent. |
| A6 | **Image pipeline** — WebP, responsive `srcset`, lazy-load, compression | C | A's photos | Critical on the dark theme. |
| A7 | **Lead capture backend** — wire form to Formspree/Google-Sheets + anti-spam (honeypot), keep WhatsApp as primary | C wires | B creates endpoint | Turns "opens WhatsApp" into stored, trackable leads. |
| A8 | **GA4 activation** — Consent Mode v2 + Measurement ID + verify events | C code | B provides ID | Events already built. |
| A9 | **Domain + DNS + HTTPS** — buy domain, `CNAME`, enforce HTTPS, remove `noindex` at launch | B | runbook by C | I'll provide exact DNS records. |
| A10 | **QA pass** — Lighthouse (perf), a11y, mobile real-device, broken links | C runs | — | I run; fixes by C. |
| A11 | **FR/EN native proofread** | B/human | A5 | AI translation needs a human check. |
| A12 | **GitHub security cleanups** — fine-grained PAT, 2FA, secret-scanning, Enforce HTTPS | B | — | From the security review. |

**Phase A exit criteria:** real content in, leads stored, analytics live + compliant, on a domain, passes QA, security baseline done.

---

## Phase B — Growth (post-launch)

| # | Step | Owner | Notes |
|---|------|-------|-------|
| B1 | **Multi-page site** — FAQ, About, Contact, "Why Be'er Sheva" | C | The original "full multi-page" direction. |
| B2 | **Real CMS** — headless (Decap/Sanity) or a portal feed (Yad2/Madlan) | C+B | So listings update without touching code/JSON. |
| B3 | **Content/SEO engine** — blog, structured data, ranking program | C+A | Long game; only if Amit commits to content. |
| B4 | **CRM + automations** — lead → CRM → auto follow-up (Make/Zapier) | C+B | The "structured answers feed CRM" from the brief. |
| B5 | **Conversion optimization** — A/B tests on hero/CTA, heatmaps | C+B | Uses the analytics foundation. |
| B6 | **Accessibility AA** — formal WCAG pass | C | If the client needs compliance. |

---

## Skills worth creating (compounding leverage)

These encode what we built here so the *next* client site is hours, not days. Build them with `skill-creator`.

| Skill | What it does | Triggers on | Reuses / pairs with |
|-------|--------------|-------------|---------------------|
| `rtl-landing-builder` | Scaffolds an RTL Hebrew, multi-language (he/en/fr) landing page: design tokens, i18n engine, WhatsApp-first CTA, consent-gated analytics, scroll-hero | "build a Hebrew landing page", "RTL site", "realtor/agent page" | `frontend-design`, `hebrew-rtl` |
| `static-site-deployer` | Repeatable runbook: GitHub Pages/Netlify/Vercel deploy, custom domain, DNS records, HTTPS, `noindex` staging toggle | "deploy this site", "connect a domain", "ship to Netlify" | — |
| `lead-capture-wiring` | Wires a lead form to WhatsApp-compose and/or Formspree/Sheets/CRM, with honeypot anti-spam + consent | "capture leads", "wire this form", "send form to email/CRM" | `analytics-consent-kit` |
| `analytics-consent-kit` | Drops in GA4/Plausible + Consent Mode v2 + cookie banner + a sane event taxonomy (whatsapp_click, lead_submit, lang_switch…) — privacy-compliant by default | "add analytics", "track conversions", "cookie consent" | `lead-capture-wiring` |
| `site-launch-qa` | Pre-launch checklist runner: Lighthouse, a11y, SEO meta/OG/sitemap/favicon, broken links, mobile — emits a severity-tagged report | "is this ready to launch", "pre-launch check", "QA this site" | `security-board` |
| `client-intake-to-content` | Turns an intake form into a content-request checklist + maps answers to page sections (exactly what we did for Amit) | "intake form", "what content do I need from the client" | `rtl-landing-builder` |

Already covered by existing skills: visual design (`frontend-design`), security review (`security-board`), image editing/resizing (your `adobe-*` skills), Hebrew formatting (`hebrew-rtl`).

---

## Recommended starting point
**A1 + A2 + A3** are pure engineering with zero external dependencies — I can do all three now. They harden the build (production CSS), make listings editable-by-data, and add SEO/favicon. That's the highest-leverage block I can execute without waiting on Amit, a domain, or any account.

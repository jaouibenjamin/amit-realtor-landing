# Back-office system — options for Amit (buy vs build)

Need: capture **leads** (from the site), track **deals / sold apartments / money**, **appointment calendar** (Google), **contacts/email/sheets** (Google), and log **WhatsApp** conversations. Solo office, Amit maintains.

## At a glance

| Dimension | **HubSpot (Free → Starter)** | **Airtable** | **Base44 (AI builder)** |
|---|---|---|---|
| Leads from site form | ✅ native forms / API | ✅ via form + API / Make | ✅ API / webhook |
| Deals & pipeline | ✅ (Free = 1 pipeline; Starter = more) | ✅ build it yourself | ✅ build it yourself |
| Appointment calendar | ✅ native Google Calendar sync | ⚙️ via Google/Make | ⚙️ build w/ Calendar API |
| Google contacts/email/sheets | ✅ native | ✅ Sheets native; rest via Make | ⚙️ build via integrations |
| WhatsApp conversations | ⚠️ paid plan for native channel | ⚙️ via Make + WA Business API | ✅ built-in WA Business API |
| Hebrew / RTL | ✅ good | ✅ good | ✅ good |
| **Security ownership** | **Vendor (theirs)** ✅ | Vendor + your access setup | **You** ⚠️ (must review the generated app) |
| Customization | Medium (fixed objects) | High (you model it) | Very high (bespoke) |
| Realistic cost | $0 free; ~$20/mo Starter (WhatsApp, 2 pipelines) | $0 free (1k records); ~$20/user/mo Team | Free tier (limited build credits); paid plans beyond + your review time |
| Maintenance | Low | Medium | Medium–High |
| Lock-in / export | Low–med (good export) | Low (CSV/API) | Higher (platform) |
| Best when… | Standard workflow, want it done + secured | Want custom-ish, cheap, flexible | Bespoke is the goal / product / learning |

## WhatsApp reality (applies to every option)
To log *conversations* (not just click-to-chat) you need the **WhatsApp Business Platform** (Meta) via a provider/BSP. Cost since Jul 2025 is **per-message**, and **inbound replies within 24h are free** — only proactive marketing templates cost cents. For a lead-response workflow, this is basically free. The CRM choice only changes *how* it connects (HubSpot native-but-paid; Airtable/Base44 via the API + automation).

## Honest recommendation
For a **single agent**, building a CRM on Base44 is likely **over-engineering**: you'd pay a subscription *and* own the app's security (recall the documented Base44 auth-bypass class) to rebuild what HubSpot rents for free and secures for you.

- **Default: HubSpot Free** — contacts + deals + Google Calendar at $0, vendor-secured. Add WhatsApp later via Starter (~$20/mo) or a light connector.
- **If he wants more custom + cheap: Airtable** — model leads/deals/appointments exactly his way, wire Google + WhatsApp via Make. Slightly more upkeep.
- **Base44 only if** bespoke is itself the goal (he enjoys building, wants something truly tailored, or plans to productize it) — and budget a security review before real data goes in.

## The 3 questions that decide it
1. Is his workflow **standard** or genuinely custom? (Standard → HubSpot.)
2. Who **maintains** it in 12 months? (Solo → minimize upkeep → HubSpot/Airtable.)
3. Is **building the system** a goal, or just a means to track leads? (Means → buy.)

Whatever he picks, the landing page connects the same way: the site POSTs a lead to one narrow endpoint. No design change.

# Mandir Triloki Dhaam: the website

A Next.js (App Router) site in TypeScript, in the "Colour and Pattern" theme chosen from the mockups
(`../mockups/l-kleur.html`). Three languages, each with its own address: `/nl`, `/en`, `/hi`. Dutch is the default.

## Run it

```bash
npm install
npm run dev
```

`npm run build` builds it, `npm run typecheck` checks the types.

## Where things come from

| What | Where | Notes |
| --- | --- | --- |
| Facts: address, phone, e-mail, IBAN, service times, festival dates | `../content/*.yml` | Read at build time by `src/lib/content.ts`. If a fact is wrong, fix the YAML, never the site. |
| Wording and translations | `src/data/*.json` | Standardised spellings, Hindi, notes, the knowledge section, heritage, FAQ. Imported once from the mockups by `npm run import-mockup-data`; edit the JSON directly from now on. |
| Interface strings | `src/data/strings.json`, plus a few in `src/lib/i18n.ts` | One key, three languages. |
| Design | `src/app/globals.css`, `src/components/Ornament.tsx` | The theme's stylesheet and its drawn ornament. |

Rules the site keeps, taken from the repository's own:

- A festival marked `verify: true` in the YAML is shown as "date to be confirmed", has no calendar button and is
  left out of the calendar file. An unconfirmed end date is not shown at all.
- Content the mandir has not supplied yet (murti names, board members, recordings, photographs, the QR code) is
  wrapped in `<Ph>` and visibly marked as a placeholder. Remove the wrapper when the real content is in.
- No testimonials, follower counts, ANBI claim, or invented devotional text. Funeral rites get a phone number.
- Hindi, and the English of the recovered Dutch texts, are drafts that need a native speaker's and the pandit's check.

## Pages

`/[lang]` home · `/visit` · `/festivals` · `/knowledge` · `/lessons` · `/heritage` · `/join` · `/donate` ·
`/calendar.ics` (the year as a calendar file). Each page is assembled from the sections in `src/components/sections/`.

Dates on a page (next service, next festival, lit lamps) are rendered on the server for "today in Amsterdam",
refreshed hourly, and then follow the visitor's own clock in the browser.

## Forms

Every form posts to `src/app/api/contact/route.ts`, which e-mails the message to the mandir through
[Resend](https://resend.com). Nothing is stored. Set these in Vercel (see `.env.example`):

- `RESEND_API_KEY`: from a Resend account.
- `CONTACT_TO`: where messages go, for example `trilokidhaam@gmail.com`.
- `CONTACT_FROM`: a sender on a domain verified in Resend.

Until all three are set, the forms say they are not connected yet and show the phone number and e-mail address
instead. They never claim a message was sent when it was not.

Seva sign-ups and lit diyas are kept in the visitor's browser only; sharing them between visitors needs a database
and is not built.

## Deploying on Vercel

Set the project's **Root Directory** to `web` (Project → Settings → Build and Deployment). The framework is detected
as Next.js; nothing else needs setting. Do not add a `vercel.json` at the repository root: Vercel applies it even with
the Root Directory set to `web`, and the one that used to serve the static mockups from there made this site 404.

The site tells search engines not to index it until `SITE_INDEXABLE=1` is set. Set `SITE_URL` to the public address
at the same time.

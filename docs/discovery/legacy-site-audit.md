# Legacy site audit — trilokidhaam.nl

Audited 17 September 2026 against the brief in
[`voice-note-2026-09-17.md`](voice-note-2026-09-17.md).

**Method.** Every page was pulled through the site's public WordPress REST API
(`/wp-json/wp/v2/pages`, which is open) and the text extracted from the Divi
shortcode layer. The navigation was parsed from the rendered homepage. The
annual-programme images were read directly. Nothing here is inferred from a
screenshot; the full inventory is in
[`../../data/legacy-page-inventory.csv`](../../data/legacy-page-inventory.csv)
and the recovered text is in [`../../content/legacy/`](../../content/legacy/).

## Platform

| | |
|---|---|
| CMS | WordPress 7.1 |
| Theme | Divi (Elegant Themes) |
| Also installed | WooCommerce 10.1.4 |
| `<html lang>` | `nl-NL` |
| Translation plugin | **none** |
| Sitemap | `robots.txt` advertises `/wp-sitemap.xml` — **404** |
| Pages | **82** |
| Pages reachable from the menu | **10** |
| Pages orphaned | **72** |
| Pages with under 100 characters | 19 |

WooCommerce is installed and carries the standard cart / checkout / my-account
pages, all empty. Either use it (for donations or event tickets) or remove it —
an unused commerce plugin on a charity site is attack surface and maintenance
burden for nothing.

## Headline conclusion

The brief asks for "the right information in Dutch and English." Today the
site is **structurally monolingual** and **factually unreliable**. Those are
the two things to fix, and neither is a design problem.

The site has been redesigned at least three times without the old versions
being removed. The inventory shows four `Home` pages, five `Contact` pages,
three `Kennis` pages, two `FAQ`s, three `Diensten`, three `Media` and three
`Vrijwilligers`. The current menu points at the newest of each; the rest are
still published and still reachable by URL.

---

## A. Wrong or contradictory information

> Severity: highest. These actively mislead visitors, and R1 is the first
> thing the brief asks for.

### A1 — Opening hours are stated three different ways

| Source | Claim |
|---|---|
| Homepage, Zondagdienst page, 2026 poster (both languages) | Sunday **13:00 – 15:30** |
| `/openingstijden/` (orphaned) | Sunday **14:00 – 16:30** |
| `/faq-2/` | **Daily, 08:00 – 20:00** |

13:00–15:30 is correct. The other two are live and findable.

The e-mail address forks the same way: `trilokidhaam@gmail.com` almost
everywhere, `contact@trilokidhaam.nl` on the orphaned contact page.

### A2 — The FAQ page is fabricated

`/faq-2/` states the temple is "open daily from 8 AM to 8 PM", and refers to a
"temple office", to booking ceremonies "online", and to "our expert
astrologers — schedule an appointment today". None of that exists. There is no
office, no booking system and no appointment scheduling.

This is the most damaging page on the site. Someone could drive to
Tongelresestraat on a Wednesday afternoon and find the mandir shut. **Unpublish
it today** — that is a five-minute fix and does not need to wait for a
redesign.

### A3 — Fabricated testimonials and follower counts

- `/vrijwilligers/` carries three named volunteer testimonials — *Anjali
  Verma*, *Ravi Patel*, *Meera Singh* — with quotes about their spiritual
  growth. These are placeholder personas, not members of the community.
- `/contact-4/` (the live contact page) displays "Facebook – 5,000 volgers",
  "X – 3,200 volgers", "YouTube – 2,800 abonnees", "Instagram – 4,500
  volgers".
- `/media/` displays a different set: Facebook 150,210 · Twitter 52,845 ·
  LinkedIn 40,995 · YouTube 113,660 — and its own labels disagree with its own
  headings (headings say Twitter/LinkedIn, labels underneath say
  Instagram/TikTok).

The two pages contradict each other by a factor of thirty. The X/Twitter and
LinkedIn accounts do not appear to exist. Invented quotes attributed to named
people, on a religious charity's own website, is a trust problem well beyond
an SEO one — and for a mandir whose currency *is* trust, it is the finding I
would fix first after A2.

Real numbers, or no numbers. A temple with 200 genuinely engaged local
families is more compelling than one claiming 150,000 anonymous followers.

### A4 — Maha Shivratri start time is missing where it matters

The 2026 poster gives Maha Shivratri a **17:00** start, an hour earlier than
every other festival. The homepage promotes the event but shows only the date.
A visitor reading the homepage arrives an hour late to one of the busiest
nights of the year.

### A5 — Stock imagery and stale years

The live contact page pulls a background photo from Unsplash
(`images.unsplash.com/photo-1720238281873…`, a generic "community gathering").
The temple has its own photographs and a YouTube channel of its own footage.

The orphaned contact page still refers visitors to "het jaarprogramma 2024".
The page holding the 2026 programme is itself still titled "Jaarprogramma
2025", while the menu label says 2026.

---

## B. Information that exists but cannot be reached or read

### B1 — The annual programme is a picture

`/jaarprogramma/` contains exactly two JPEGs and no text: one Dutch poster,
one English. The programme therefore cannot be searched, indexed by Google,
read aloud by a screen reader, translated, copied into a calendar, or read
comfortably on a phone without pinch-zooming.

This is the single most valuable thing the mandir publishes all year.

It is now extracted into
[`../../content/festivals-2026.yml`](../../content/festivals-2026.yml) as
structured bilingual data — which can generate the web calendar, a
subscribable `.ics` feed, `schema.org/Event` markup, social posts, and next
year's poster, all from one source.

Notably the poster is already fully bilingual. Whoever produces it has
**already done the Dutch/English work the brief asks for** — it just never
reaches the website as text.

### B2 — Twelve ceremonies listed, zero explained

`/diensten/` lists Havan, Grah Shanti, Griha Pravesh, Puja, Hindoe Horoscoop,
Shradh, Vivah samskar, **Antyeshti samskar**, Mundan samskar, Sundarkand path,
Kirtan/bhajan and Lezingen. Each is a heading with an **empty** description
body. No explanation, no lead time, no indication of cost, no way to book.

Antyeshti samskar is funeral rites. A family that has just lost someone is
searching for how to reach a pandit *now*, and the page gives them a word.
Fixing this is the highest-value content work on the site, and it needs the
pandit, not a copywriter. Captured with open questions in
[`../../content/services.yml`](../../content/services.yml).

### B3 — The real heritage content is orphaned

The pages with the most substantial writing on the entire site are the 2015-era
knowledge pages, and **not one of them is in the navigation**:

| Page | Characters |
|---|---|
| Overige hoogtijdagen | 7,019 |
| Algemene beginselen | 6,160 |
| **Mantra's** | **5,097** |
| Vedische astrologie | 4,423 |
| Ramayan | 2,619 |
| Shiva mantra | 1,594 |
| Hanuman jayanti | 1,368 |
| Nauratri | 1,226 |
| …plus 5 aartis, Veda's, Mahabharat & Gita, Puja, Yagya | ~7,800 |

**The brief explicitly asks for mantras. The mantras already exist** — a
careful 5,000-character essay on what a mantra is and how mantras are
classified — and have simply been stranded by successive redesigns.

Two of these pages end with "zie de submenu's" ("see the submenus"). The
current menu is flat and has no submenus, so those pointers lead nowhere.

All 39,332 characters are now recovered into
[`../../content/legacy/`](../../content/legacy/) with their original URLs
recorded. **This is the most under-used asset the temple owns.** It is real
writing by people who know the subject, and it is exactly what R5 and R6 ask
for. Restoring it is editing, not authoring.

Two defects found while recovering it:

- The page titled **"Ganesh mantra"** is published at the URL
  `/durga-mantra/`.
- The page titled **"Durga mantra"** (`/durga-mantra-2/`) contains 54
  characters. **The Durga mantra text appears to have been lost** — check for
  an older backup.

### B4 — No sitemap, no hreflang, no i18n mechanism

`robots.txt` points at `/wp-sitemap.xml`, which returns 404. There is no
sitemap at all, so search engines are crawling the site with no guidance —
including all 72 orphaned pages, which are the ones most likely to surface the
wrong opening hours.

There is no translation plugin, no `hreflang`, and `<html lang="nl-NL">` is
hardcoded. English text is instead mixed into Dutch pages at random:
`/vrijwilligers/` opens in English and switches to Dutch halfway down; `/media/`
and `/faq-2/` are English; the rest are Dutch. There is no language switcher,
so an English speaker cannot choose English and a Dutch speaker cannot escape
English.

**R2 is not partially met — there is no mechanism for it.** Whatever is built
next needs real per-language routing (`/nl/…`, `/en/…`) with `hreflang`, and
the content model in `content/` is already shaped for it.

---

## C. Things that look like features but do nothing

### C1 — Every sign-up is an unmanaged mailbox

Course registration, volunteering, pastoral care, ceremony enquiries and
general contact all resolve to "e-mail trilokidhaam@gmail.com". There is no
form anywhere on the site.

Four classes are advertised as *"na voldoende aanmeldingen zal er een groep
worden gemaakt"* — a group will be formed once enough people sign up. Nothing
tells a visitor how many have signed up or whether it is going ahead, so there
is no reason to believe the e-mail leads anywhere. Meanwhile the temple cannot
see demand it may already have.

This is the most obvious first automation: a form, a stored registration, a
confirmation reply, and a count the temple can act on.

### C2 — Volunteer flow describes steps that do not exist

`/vrijwilligers/` presents a four-step process — "fill in the online
registration form", introductory meeting, training, start — with buttons
reading *Aanmelden*, *Inschrijven*, *Training Volgen*. There is no form, and
the buttons do not go anywhere.

### C3 — The Facebook group is private

The homepage asks visitors to join the Facebook group "for more photos and
videos", and the group is private. As the far end of the R7 funnel, that is a
door that only opens for people who are already members. The public content
should be on the site or on the open Instagram/YouTube accounts; keep the group
for the community that is already in it.

### C4 — WooCommerce installed, unused

Cart, checkout, my-account and shop pages exist and are empty. `robots.txt`
carries WooCommerce disallow rules. Either use it for donations/tickets or
uninstall it.

---

## D. What is genuinely good

Worth stating plainly, because the fix here is mostly editorial recovery
rather than new authorship:

- **The Zondagdienst page is excellent.** A clear timetable, a patient
  explanation of what happens in a puja and why (the bell, the tilaka, the
  incense, the havankund, the prasadh), how to take part, and a frank list of
  expectations. It is warm, specific and genuinely useful to a first-time
  visitor. Carry it across nearly verbatim, and translate it — it is the best
  answer the site has to "what will happen if I come?"
- **The 2026 poster is already bilingual**, well designed, and complete.
- **The 2015 knowledge corpus** is thoughtful and substantive (B3).
- **The Vedic-astrology page** explains why festival dates computed for the
  Netherlands can legitimately differ from Indian panchang by a day. That is a
  genuinely distinctive piece of writing, it answers a question every Dutch
  Hindu family has, and it directly resolves the Divali date question.
- **Pandit Vinay Narain is academically trained** in spiritual care. For a
  Dutch audience that is a real credential and it is currently one sentence on
  an orphaned page.
- The temple produces its own video (Aarti, bhajan/kirtan, Hindu Basics) on
  YouTube.

---

## Recommended immediate actions

Independent of any rebuild decision, and each a matter of minutes:

1. **Unpublish `/faq-2/` and `/faq/`** — they state false opening hours (A2).
2. **Delete the fabricated testimonials and every follower count** (A3).
3. **Unpublish `/openingstijden/`** — wrong hours (A1).
4. **Add the 17:00 start time** to Maha Shivratri on the homepage (A4).
5. **Publish the annual programme as text**, alongside the poster (B1).
6. Retitle "Jaarprogramma 2025" → 2026 (A5).
7. Fix the sitemap so the orphaned pages stop being crawled (B4).

1–4 remove active misinformation and can be done by whoever holds the
WordPress login, today, without waiting for anything in this repo.

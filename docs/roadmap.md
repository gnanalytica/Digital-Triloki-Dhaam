# Roadmap

Derived from the brief in
[`discovery/voice-note-2026-09-17.md`](discovery/voice-note-2026-09-17.md) and
the findings in
[`discovery/legacy-site-audit.md`](discovery/legacy-site-audit.md).

The brief sets two stages and one hard date.

> **Stage 1 target: website basics live by Saturday 10 October 2026**,
> the day before Shardiya Navratri begins.

## Why that date is the right one

Navratri 2026 runs 11–19 October, nine consecutive evenings from 18:00. It is
the busiest stretch in the temple's year and the week when the most people
will look the mandir up — new visitors deciding whether to come, families
checking which evening to attend, neighbours wondering what is happening.

It is also a genuine forcing function: nine evenings of traffic will expose
anything wrong with the opening hours, the calendar or the directions, which is
exactly what stage 1 is for.

## Sequencing, and the thing that will actually go wrong

The brief proposes 1 October + 10 days of build. The risk is not the build —
it is that **content decisions in a volunteer organisation take longer than
code**, and stage 1 is almost entirely a content problem:

- The twelve ceremonies need descriptions only the pandit can give (audit B2).
- The Divali date needs confirming (`content/festivals-2026.yml`).
- The ANBI question needs the board.
- Someone has to decide who the English is for.
- Someone has to own the social accounts.

None of that is blocked by a technical decision, and all of it can start now.
Today is 17 September, which means there are three weeks of slack available
*before* the build window opens — but only if the questions go out this week.

**So: start the content track immediately, and let the build track begin on
1 October as proposed.** The questions are gathered at the end of
`discovery/voice-note-2026-09-17.md`; send them as one message.

### Do these today, regardless of anything else

Four fixes remove active misinformation from the live site and need nothing
from this repo — only the WordPress login:

1. Unpublish `/faq-2/` and `/faq/` — they advertise the temple as open daily
   08:00–20:00. It is open Sundays 13:00–15:30. Someone will make a wasted
   journey.
2. Delete the three invented volunteer testimonials and every follower count.
3. Unpublish `/openingstijden/` — wrong hours.
4. Add the 17:00 start time to Maha Shivratri on the homepage.

## Stage 1 — right information, two languages, social loop

### Track A — content (start now, no dependencies)

- [ ] Send the open questions to the board.
- [ ] Confirm the Divali date (9 vs 8 November) with the pandit.
- [ ] Draft the twelve ceremony descriptions with the pandit. Prioritise
      **antyeshti samskar** (funeral rites) — time-critical and needs a phone
      route, not an e-mail address.
- [ ] Decide the 2026/2027 course dates, or mark 2025/2026 as finished. The
      published list currently ends 12 April 2026 and reads as abandoned.
- [ ] Editorial pass on the recovered heritage corpus in `content/legacy/`
      (39,332 characters, 23 pages). This is editing, not writing — the
      material is good. Fix the 2015 typos, restore the lost Durga mantra
      text, and re-file "Ganesh mantra" off the `/durga-mantra/` URL.
- [ ] Translate. Priority order: weekly service → festivals → directions and
      practical info → ceremonies → knowledge corpus. The Zondagdienst page
      translates first; it is the best answer the site has to "what will
      happen if I come?"
- [ ] Get the hosting/donor details (who, what, when it renews, who holds the
      domain).

### Track B — build (from 1 October)

Architecture is **not yet decided** — it depends on question 1 (who edits the
site after launch) and question 2 (rebuild vs. repair). See
[`decisions/`](decisions/).

Independent of that choice, stage 1 ships:

- [ ] Real Dutch/English routing (`/nl/…`, `/en/…`) with `hreflang` and a
      visible language switcher. Today there is no i18n mechanism at all, only
      English text mixed into Dutch pages.
- [ ] Weekly service page — timetable, what to expect, how to take part, what
      is expected of visitors. Adapt the existing Zondagdienst page.
- [ ] Festival calendar generated from `content/festivals-2026.yml`, with a
      subscribable `.ics` feed and `schema.org/Event` markup.
- [ ] Practical visit page: address, map, parking, public transport, shoes,
      what to bring, accessibility. Currently scattered across three pages, two
      of them orphaned and wrong.
- [ ] Ceremonies page with real descriptions and a working enquiry route.
- [ ] Knowledge section restoring the mantras, aartis and scriptures (R5, R6).
- [ ] Donation page with the IBAN, the standing-order instructions, and the
      ANBI position if there is one.
- [ ] One working form, replacing "e-mail us" for course sign-ups (audit C1),
      with a confirmation reply and a registration the temple can actually
      count.
- [ ] Sitemap, canonical URLs, redirects from the 72 orphaned legacy URLs.
- [ ] Only the real social accounts, with no invented numbers.

### Track C — the social loop (R7/R8)

The brief asks for a loop in both directions. The parts that are structural,
rather than a matter of someone remembering to post:

- **Site → social**: embed the temple's own YouTube footage; link Instagram
  and YouTube (both public). Keep the private Facebook group for the existing
  community rather than using it as the public funnel (audit C3).
- **Social → site**: every festival needs a canonical, linkable page to point
  a post at. That is what the calendar is for — a permanent URL per festival
  is what makes a bio link or a story sticker worth having.
- Generate the per-festival social posts from `content/festivals-2026.yml`, so
  the date on Instagram and the date on the site cannot drift.

R7/R8 need a **named person willing to post**, not just a link. If nobody owns
it, build the plumbing and say so honestly rather than pretending the loop
exists.

## Stage 2 — community platform (explicitly deferred)

From the brief: a community-building platform; the mandir as a *centre of
Sanatan Dharma*; "where we connect"; "link people to the right places."

Not to be designed yet — the brief is clear that this comes only once stage 1
is "set up in a right way." Recorded so that stage-1 choices keep the door
open:

- Member accounts / directory
- Event registration with capacity, beyond a single form
- Recurring-donation management
- A referral layer for the "right places" — pandits elsewhere in the
  Netherlands, ashrams, other mandirs, Hindu pastoral care
- Pastoral-care requests with real confidentiality
- Richer teaching content, possibly video

What stage 1 should do to keep it open: keep content as structured data rather
than in a page builder, keep a real URL per festival and per ceremony, and do
not paint the site into a design that assumes anonymous read-only visitors.

## Wider programme

The repository is scoped for "websites, apps, automations, social media
campaigns, connectors." Stage 1 is the website. Candidates for later, roughly
in order of value per unit of effort:

1. **Course/event registration automation** — replaces the unmanaged mailbox
   (C1), and the temple finds out what demand it already has.
2. **Calendar connectors** — `.ics` feed, Google Calendar, and the festival
   dates pushed to Google Business Profile so they show up in local search.
3. **Social posting automation** from `content/festivals-2026.yml`, so a
   festival is announced once and consistently everywhere.
4. **Donation flow** — QR codes exist physically; iDEAL/Tikkie would suit a
   Dutch audience far better than a bank transfer.
5. **Newsletter / WhatsApp broadcast** for the weekly service and festivals.
6. **Poster generation** from the same festival data, closing the loop with
   the artwork the temple already makes well.

## Cross-cutting: GDPR

Not optional, and cheapest to get right before any form exists. The temple
will be collecting names, e-mail addresses, course registrations, **children's
names** (there is a children's programme), possibly photographs of
identifiable people, and pastoral-care requests — which in the Netherlands is
special-category data about religious belief.

Required: a privacy statement, a lawful basis per purpose, explicit parental
consent before any child's name or image is collected or published, a stated
retention period, a photography policy (the Zondagdienst page already asks
visitors to seek permission before filming — the temple should hold itself to
the same standard), and a named person responsible.

There is currently a "Terms and Conditions" page containing 39 characters and
no privacy statement at all.

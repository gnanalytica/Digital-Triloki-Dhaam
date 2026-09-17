# Digital Triloki Dhaam

Digital platform work for **Mandir Triloki Dhaam Eindhoven** — a Hindu temple
on Tongelresestraat in Eindhoven, run by Stichting Senskaar Triloki Dhaam.

This repository covers the website, and in time the apps, automations, social
media campaigns and connectors around it.

Legacy site: <https://trilokidhaam.nl/>

## Where things stand

Discovery is done and the requirements document is drafted. **The build has
not started** and is not starting yet — the next move is agreeing the
requirements with the temple, not writing code.

Architecture is settled: content lives in this repo as structured data and the
site is generated from it, since Sandeep and Mayur will maintain it. See
[`docs/decisions/0001-website-architecture.md`](docs/decisions/0001-website-architecture.md).

The facts, the calendar, the service catalogue and the recovered heritage
content are plain YAML and Markdown with no framework assumptions, so they are
usable as-is whatever gets built on top.

**Stage 1 target: website basics live by Saturday 10 October 2026**, the day
before Shardiya Navratri.

## Start here

**[Requirements document (Google Doc)](https://docs.google.com/document/d/1FDSfuqP_33JA2hOoaIpL35yANqCoa8Bhf0zeh_AYngc/edit)**
— the living document, for the board and the pandit to comment on. Section 11
lists four fixes for the live site that need only the WordPress login; section
12 lists the eight decisions that block the build.

| | |
|---|---|
| [`docs/requirements/`](docs/requirements/) | The requirements document: link to the Doc, the HTML source it is generated from, and what Google Docs' HTML importer does and does not support. |
| [`docs/discovery/voice-note-2026-09-17.md`](docs/discovery/voice-note-2026-09-17.md) | The brief. Transcript of the founding voice note, requirements R1–R8, the deadline, and the open questions for the board. |
| [`docs/discovery/legacy-site-audit.md`](docs/discovery/legacy-site-audit.md) | What the current site actually publishes. Read section A before anything else. |
| [`docs/roadmap.md`](docs/roadmap.md) | Two stages, three work tracks, and the four things to fix on the live site today. |

## Layout

```
content/              Canonical content, stack-independent
  temple.yml            Facts: address, contact, service times, bank, people
  festivals-2026.yml    Annual programme, bilingual, recovered from two JPEGs
  services.yml          The 12 ceremonies, with the questions each still needs
  courses.yml           Hindu Basics, Hindi, music, yoga + session dates
  legacy/               39,332 chars of heritage content rescued from orphaned
                        2015 pages — mantras, aartis, scriptures, teachings
data/
  legacy-page-inventory.csv   All 82 legacy pages: size, language, reachability
docs/
  requirements/         The requirements document (Google Doc + HTML source)
  discovery/            The brief and the audit
  decisions/            Architecture decision records
  roadmap.md
```

## The brief in one paragraph

Two stages. **Stage 1:** the website gives *the right information* in **Dutch
and English** — weekly services, festivals, mantras and related knowledge —
and forms a loop with the temple's social accounts, leading people out to the
platforms and back to the site. **Stage 2**, only once stage 1 is right: a
community-building platform that positions the mandir as a centre of Sanatan
Dharma, connecting people and linking them onward to the right places.

## What discovery found

The brief's first requirement is "the right information." That turns out to be
the whole problem, and it is editorial rather than technical:

- **The site contradicts itself on opening hours** three ways — 13:00–15:30
  (correct), 14:00–16:30, and "daily 08:00–20:00". The last is on a live FAQ
  page that also invents a temple office, online booking and staff
  astrologers. Someone will make a wasted journey.
- **Some content is fabricated.** Three named volunteer testimonials are
  placeholder personas. Follower counts appear on two pages and disagree with
  each other by a factor of thirty; two of the linked accounts do not exist.
  On a mandir's own site, that is a trust problem before it is an SEO one.
- **There is no bilingual mechanism at all** — no translation plugin, no
  `hreflang`, `lang="nl-NL"` hardcoded, and English simply mixed into Dutch
  pages at random with no way to switch. R2 is not partly met; it is absent.
- **The annual programme is two JPEGs.** The most valuable thing the temple
  publishes each year cannot be searched, indexed, translated, screen-read or
  added to a calendar. It is now structured data in `content/festivals-2026.yml`.
- **Twelve ceremonies are listed with empty descriptions** — including
  antyeshti samskar, funeral rites. A bereaved family gets a word and no phone
  number.
- **The best content on the site is unreachable.** 72 of 82 pages are orphaned
  by successive redesigns, and the longest, most careful writing is all in
  them — including a 5,000-character essay on mantras. The brief explicitly
  asks for mantras; they already exist. All of it is recovered into
  `content/legacy/`.

And what is already good, because most of stage 1 is recovery rather than
authorship: the Zondagdienst page is genuinely excellent and should carry
across nearly verbatim; the 2026 poster is already fully bilingual, so someone
is already doing the translation work — it just never reaches the site as
text; and the 2015 knowledge corpus is thoughtful, substantive writing by
people who know the subject.

## Conventions

- `content/` is the single source of truth. If a fact appears in two places,
  one of them is a bug — that is exactly how the opening hours came to have
  three values.
- Every user-facing string carries both `nl` and `en`. Dutch is the default.
- Anything unconfirmed is marked `verify: true` with a note saying who can
  confirm it. **Nothing marked `verify: true` gets published.**
- Never invent devotional, ritual or biographical content. Where the pandit's
  input is needed, the field is marked `needs_drafting: true` and left empty.
  Getting a samskar's description wrong is a matter of respect, not accuracy.

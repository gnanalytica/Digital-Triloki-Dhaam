# 0001 — Website architecture for stage 1

- **Status:** open — blocked on two answers from the temple board
- **Date raised:** 2026-09-17
- **Deadline it feeds:** website basics live by 2026-10-10 (pre-Navratri)

## Context

The legacy site is WordPress 7.1 + Divi + WooCommerce, with 82 pages of which
72 are orphaned by three overlapping redesigns. The audit
([`../discovery/legacy-site-audit.md`](../discovery/legacy-site-audit.md))
found the core problems to be editorial and structural rather than visual:
contradictory facts, fabricated content, no i18n mechanism, and the best
content unreachable.

Stage 1 needs real Dutch/English routing, a calendar driven by data rather
than a JPEG, and at least one working form.

Two facts constrain the choice, and neither is technical:

1. **Someone donated the website and pays the annual fee.** Whoever owns this
   decision needs to know what that covers and when it renews. Migrating away
   could waste a donor's contribution or quietly hand the temple a bill it has
   not budgeted for. It is a relationship question as much as a hosting one.
2. **The temple is volunteer-run.** Whoever edits the site in a year's time
   may not be whoever builds it now. An architecture that only its author can
   update is a slow failure, and the 72 orphaned pages are evidence of what
   happens when site upkeep outruns the people available to do it.

## Blocking questions

**Q1. Who edits the site after launch, and are they comfortable with a CMS?**

- If **volunteers** with varying technical confidence → a CMS is required, and
  the editing experience matters more than the stack.
- If **Sandeep and Mayur** → content can live in this repo, which is faster,
  cheaper, more reliable, and already how `content/` is organised.

**Q2. Rebuild, or repair the existing WordPress in place?**

## Options

### A. Repair WordPress in place

Delete the 72 orphaned pages, add a translation plugin (Polylang or WPML),
replace the fabricated content, publish the programme as text.

- **For:** keeps the donated hosting exactly as it is; volunteers can already
  edit it; nothing to migrate; unquestionably achievable before 10 October.
- **Against:** Divi keeps content locked inside page-builder shortcodes, so it
  stays hard to reuse for social posts, posters or an app; the duplication
  problem recurs because nothing prevents it; ongoing plugin and licence
  maintenance; poor fit with the "apps, automations, connectors" ambition in
  the repo's scope.

### B. Rebuild as a static bilingual site, content in this repo

Astro or similar, i18n routing built in, rendered from `content/`, deployed to
Cloudflare Pages or Vercel. Forms via a hosted form service or a small worker.

- **For:** i18n is a first-class feature rather than a plugin; `content/`
  already has the right shape; one source of truth for site, socials and
  posters; near-zero hosting cost; fast and secure by default; excellent base
  for the automations and connectors in scope.
- **Against:** editing requires the repo unless a CMS is layered on; the
  donated hosting may go unused; there is a real bus-factor risk if only one
  person can deploy.

### C. Rebuild with a headless CMS

As B, plus a hosted CMS (Sanity, Directus, Decap) so volunteers can edit.

- **For:** keeps both the structured content model and non-technical editing;
  the honest answer if Q1 comes back "volunteers".
- **Against:** the most moving parts; another service to fund and administer;
  the tightest fit against 10 October.

## Recommendation, pending answers

**Option B if Q1 is "Sandeep and Mayur"; option C if Q1 is "volunteers".**

In either case the `content/` directory as committed is the right foundation
and needs no rework.

**Option A is the right answer if the 10 October date is immovable and the
board cannot be reached in time.** Note that the four highest-severity audit
findings — false opening hours, fabricated testimonials, invented follower
counts, the missing Maha Shivratri start time — are all fixable in the
existing WordPress **today**, by whoever holds the login. Doing that
immediately de-risks the deadline regardless of which option wins, because it
removes the actively misleading content from the live site without waiting for
any of this.

## Consequences

Not yet decided, so nothing is foreclosed. `content/` is deliberately plain
YAML and Markdown with no framework assumptions, so the discovery work
committed so far survives any of the three outcomes.

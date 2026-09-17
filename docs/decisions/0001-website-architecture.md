# 0001 — Website architecture for stage 1

- **Status:** accepted (Q1 answered 17 Sep 2026) — option B
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

## The deciding question

**Q1. Who edits the site after launch, and are they comfortable with a CMS?**

**Answered 17 September 2026: Sandeep and Mayur.** Content therefore lives in
this repository and the site is generated from it. No CMS is required for
stage 1, which removes the option-C branch below.

**Q2. Rebuild, or repair the existing WordPress in place?** Rebuild, per the
decision recorded at the end of this document.

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

## Decision

**Option B.** Q1 came back "Sandeep and Mayur", so content stays in this
repository as structured data and the site is generated from it — a static
bilingual site (Astro or equivalent) on Cloudflare Pages or Vercel. The
`content/` directory as committed is the foundation and needs no rework.

The trade-off to manage is the one named under option B: only repo-holders
can edit. Two mitigations, neither of which needs deciding now — document the
editing process well enough to hand over, and keep the option of layering a
lightweight CMS on top later if volunteers need to edit directly. That can be
added without rebuilding, which is the main reason option B beats option C
today rather than being a bet against it.

**Option A remains the fallback if the 10 October date proves immovable and
the content decisions do not land in time** — it is the only option certain to
ship by then. Note that the four highest-severity audit findings — false opening hours, fabricated testimonials, invented follower
counts, the missing Maha Shivratri start time — are all fixable in the
existing WordPress **today**, by whoever holds the login. Doing that
immediately de-risks the deadline regardless of which option wins, because it
removes the actively misleading content from the live site without waiting for
any of this.

## Consequences

- `content/` stays plain YAML and Markdown, and becomes the single source of
  truth for the site, the social posts and next year's poster. That is the
  structural fix for the three-way split in the opening hours (audit A1).
- Bilingual routing is a first-class concern of the generator rather than a
  plugin, which is what R2 requires.
- Hosting cost drops to effectively zero, which matters for a volunteer-funded
  charity.
- Editing requires repository access until and unless a CMS is added.
- Still open, and dependent on the hosting-donor question: whether the donated
  WordPress hosting runs in parallel, is retired, or is repurposed.

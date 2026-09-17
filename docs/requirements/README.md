# Requirements document

The living requirements document is a **Google Doc**, so the board and the
pandit can comment on it directly:

**[Mandir Triloki Dhaam Eindhoven — Digital Revamp Requirements (v0.2 DRAFT)](https://docs.google.com/document/d/1FDSfuqP_33JA2hOoaIpL35yANqCoa8Bhf0zeh_AYngc/edit)**

It lives in the **Digital Triloki Dhaam shared drive**:
<https://drive.google.com/drive/folders/0AFZjants0p6PUk9PVA>

A shared drive rather than someone's personal Drive is the right home for this,
and worth keeping to for everything that follows. Files in a shared drive are
owned by the drive, not by an individual — so nothing the temple depends on
disappears when a volunteer's account is closed or handed over. For an
organisation whose last three website redesigns each left content stranded,
that matters more than it sounds.

`requirements-v0.2.html` is the source the document was generated from, kept
here so the text is diffable and the Doc can be rebuilt. **The Doc is
canonical** — once people start commenting and editing, this file will fall
behind. Re-export rather than assuming they match.

## Versions

| | |
|---|---|
| v0.1 | Plain document, no styling. Superseded; retrievable from git history. |
| v0.2 | Current. Same content, designed: cover block, colour-coded severity, banded section headings, zebra tables. |

Each version is a **new Doc with a new URL**, because the Drive connector can
only update a file's metadata (title, parent) — not its contents. There is no
way to replace the body of an existing Google Doc through it. If the URL has
already been circulated, weigh that before regenerating.

## Regenerating

Upload the HTML with `contentMimeType: text/html` and Drive converts it to a
native Google Doc. Its importer supports a useful but narrow slice of CSS, and
fails **silently** outside it — so the design here deliberately stays inside
what was verified by probe rather than what the CSS ought to do.

### Works

| | |
|---|---|
| Text colour | on `span`, and on `h1`–`h3` via a nested `span` |
| Text highlight | `background-color` on a `span` |
| Bold | `font-weight:700` as an **inline style** |
| `font-size` | in `pt`; `px` is converted at 0.75 |
| Font family | **single names only** — Georgia, Roboto, Lato, Merriweather, Roboto Mono, Verdana |
| Cell background | `style="background-color:…"` or the legacy `bgcolor` attribute |
| Cell padding | honoured, converted to `pt` |
| Borderless cells | `border:0` or `border-style:none` |
| Column widths | `pt` and `%` both honoured |
| `text-align`, `line-height` | honoured |
| Nested lists | correct indent, and distinct bullet glyphs per level |
| Horizontal rules | `border-bottom` on a `<p>`, or `border-top` on a `<div>`, becomes a real rule |

### Silently dropped or mangled

| | |
|---|---|
| `<b>` / `<strong>` **inside a table cell** | arrives as literal `**asterisks**`. Use `font-weight:700` instead. Fine in paragraphs and list items. |
| `<hr>` | arrives as literal `-----` text, merged into the following heading. Use the CSS-border trick above. |
| Font *stacks* | truncated. `Georgia,serif` became a font literally named `"Geo"`. |
| Single-sided cell borders | applied to all four sides. For a left accent bar, use a narrow extra column. |
| Columns narrower than ~20pt | widened to about 20pt regardless. |
| `letter-spacing`, `text-transform` | dropped. Type capitals literally if you want them. |
| `page-break-before/after` | dropped entirely. No way to force a page break. |
| `<blockquote>` | flattened to a plain paragraph; colour survives, border and indent do not. |
| `<th>` | becomes an ordinary first row, not a styled header. No advantage over `<td>`. |

Two checks worth running on the source before every upload, since both
failures are invisible until someone reads the Doc:

```sh
grep -c '<hr' requirements-v0.2.html                      # must be 0
grep -oP '<td\b[^>]*>(?:(?!</td>).)*?<(?:b|strong)\b' requirements-v0.2.html  # must be empty
```

To verify what actually survived, export the Doc as `text/html` and inspect
the CSS — `read_file_content` returns markdown, which strips every colour and
all layout, so it cannot tell you whether the design applied.

## Design tokens

Warm maroon and saffron, chosen to sit comfortably with the temple's own
poster artwork rather than against it. Severity colours carry meaning and are
used consistently: red is *misleading a visitor now*, amber is *blocks a
requirement*, green is *already good*, blue is *decided or informational*.

| Role | Hex |
|---|---|
| Maroon (headings, table headers) | `#8C2B26` |
| Maroon dark (cover) | `#6E211D` |
| Saffron (accent) | `#C87B1E` |
| Ink | `#202124` |
| Muted (labels, captions) | `#5F6368` |
| Table rule | `#DADCE0` |
| Section band | `#F1F0EC` |
| Zebra row | `#FAFAF8` |
| Red / tint | `#B3261E` / `#FDECEA` |
| Amber / tint | `#A6650B` / `#FFF6E6` |
| Green / tint | `#1E7B34` / `#EAF6EC` |
| Blue / tint | `#1A5FB4` / `#EAF1FB` |

Type: Georgia for the cover and section headings, the Docs default for body
text, Roboto Mono for URLs, slugs, times and the IBAN.

## What the document covers

Sections 1–4 are the findings, 5–10 the requirements, 11–12 what needs doing
and deciding now, 13–15 scope and approach.

The two sections to read first if short of time:

- **Section 11** — four fixes that remove actively wrong information from the
  live site today, needing only the WordPress login.
- **Section 12** — the eight decisions that block the build, four of which are
  on the critical path and need the pandit or the board.

Everything in the document traces back to [`../discovery/`](../discovery/)
(the transcribed brief and the full audit) and
[`../../content/`](../../content/) (the canonical data).

# Requirements document

The living requirements document is a **Google Doc**, so the board and the
pandit can comment on it directly:

**[Mandir Triloki Dhaam Eindhoven — Digital Revamp Requirements (v0.1 DRAFT)](https://docs.google.com/document/d/1akGXltT6FMmDjNoK3zEaNTnJufHHhu6opvkHWwZnsNs/edit)**

Drive folder: [Digital Triloki Dhaam](https://drive.google.com/drive/folders/1qQZNgu8gygbgCLSnL1WYkufHUt7jmhTr)

`requirements-v0.1.html` is the source that document was generated from, kept
here so the text is diffable and the Doc can be regenerated. **The Doc is
canonical** — once people start commenting and editing, this file will fall
behind. Re-export rather than assuming they match.

## Regenerating

Upload the HTML to Drive with `contentMimeType: text/html` and Drive converts
it to a native Google Doc. Two quirks of that importer to respect, both
already handled in the source here:

- `<hr>` is rendered as literal `-----` text, merged into the following
  heading. Don't use horizontal rules; let the headings do the work.
- `<b>` and `<strong>` **inside a table cell** come through as literal
  asterisks (`**like this**`). Bold works fine in paragraphs and list items,
  but inside `<td>` use plain text or capitals instead.

`<th>` is imported as an ordinary first row rather than a styled header, so
there is no advantage to it over `<td>`.

## What the document covers

Sections 1–4 are the findings, 5–10 the requirements, 11–12 what needs doing
and deciding now, 13–15 scope and approach.

The two sections to read first if short of time:

- **Section 11** — four fixes that remove actively wrong information from the
  live site today, needing only the WordPress login.
- **Section 12** — the eight decisions that block the build, four of which are
  on the critical path and need the pandit or the board.

Everything in the document traces back to
[`../discovery/`](../discovery/) (the transcribed brief and the full audit)
and [`../../content/`](../../content/) (the canonical data).

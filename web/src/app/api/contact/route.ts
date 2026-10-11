// Every form on the site posts here, and each message becomes one row in the mandir's Google Sheet: one tab per
// kind of form, so the pandit has an overview of who signed up for what. The row is written by a small Apps Script
// attached to that Sheet (google-sheet/Code.gs); nothing is stored on the website itself and no e-mail service is
// involved. The Sheet can e-mail the mandir about new rows on its own (Tools > Notification settings).
//
// Until SHEET_WEBHOOK_URL is set, this answers 503 and the form tells the visitor to phone or
// e-mail instead, so nobody is told "sent" when nothing was.
const KINDS: Record<string, string> = {
  ceremony: 'Ceremonies',
  volunteer: 'Volunteers',
  conversation: 'Conversations',
  lessons: 'Lessons',
  story: 'Stories',
  correction: 'Corrections',
  question: 'Questions for the pandit',
};
const MAX = 4000;

export async function POST(request: Request) {
  let body: { kind?: string; lang?: string; fields?: Record<string, unknown> };
  try { body = await request.json(); } catch { return Response.json({ error: 'bad_request' }, { status: 400 }); }
  const tab = KINDS[body.kind ?? ''];
  const input = body.fields && typeof body.fields === 'object' ? body.fields : null;
  if (!tab || !input) return Response.json({ error: 'bad_request' }, { status: 400 });
  // The hidden "website" field is only ever filled in by bots: accept and drop.
  if (input.website) return Response.json({ ok: true });

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(input)) {
    if (/^[a-z_]{1,30}$/.test(key) && typeof value === 'string' && value.trim()) fields[key] = value.trim().slice(0, MAX);
  }
  if (!Object.keys(fields).length || JSON.stringify(fields).length > MAX * 2) return Response.json({ error: 'bad_request' }, { status: 400 });

  const { SHEET_WEBHOOK_URL: url, SHEET_SECRET: secret } = process.env;
  if (!url) return Response.json({ error: 'not_configured' }, { status: 503 });

  try {
    // Apps Script answers a POST with a redirect to where the result can be read. Followed automatically, the
    // redirect carries the POST's headers along and Google answers with an error page, so it is followed by hand.
    const posted = await fetch(url, {
      method: 'POST',
      redirect: 'manual',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ secret: secret ?? '', tab, lang: body.lang ?? '', fields }),
    });
    const next = posted.headers.get('location');
    const result = next ? await fetch(next) : posted;
    const answer = (await result.json().catch(() => null)) as { ok?: boolean } | null;
    if (!answer?.ok) return Response.json({ error: 'send_failed' }, { status: 502 });
  } catch { return Response.json({ error: 'send_failed' }, { status: 502 }); }
  return Response.json({ ok: true });
}

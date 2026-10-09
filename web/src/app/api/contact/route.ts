import { getSite } from '@/lib/content';

// Every form on the site posts here. The message is e-mailed to the mandir through Resend (https://resend.com).
// Nothing is stored. Until RESEND_API_KEY, CONTACT_TO and CONTACT_FROM are set, this answers 503 and the form
// tells the visitor to phone or e-mail instead, so nobody is told "sent" when nothing was.
const KINDS: Record<string, string> = {
  ceremony: 'Aanvraag ceremonie',
  volunteer: 'Aanmelding vrijwilliger',
  conversation: 'Verzoek om een gesprek',
  lessons: 'Aanmelding lessen',
  story: 'Verhaal voor "Stemmen van de ouderen"',
  correction: 'Melding van een fout op de site',
  question: 'Vraag aan de pandit',
};
const MAX = 4000;

export async function POST(request: Request) {
  let body: { kind?: string; lang?: string; fields?: Record<string, unknown> };
  try { body = await request.json(); } catch { return Response.json({ error: 'bad_request' }, { status: 400 }); }
  const subject = KINDS[body.kind ?? ''];
  const fields = body.fields && typeof body.fields === 'object' ? body.fields : null;
  if (!subject || !fields) return Response.json({ error: 'bad_request' }, { status: 400 });
  // The hidden "website" field is only ever filled in by bots: accept and drop.
  if (fields.website) return Response.json({ ok: true });

  const lines = Object.entries(fields)
    .filter(([key, value]) => /^[a-z_]{1,30}$/.test(key) && typeof value === 'string' && value.trim())
    .map(([key, value]) => `${key}: ${String(value).trim().slice(0, MAX)}`);
  if (!lines.length || lines.join('\n').length > MAX * 2) return Response.json({ error: 'bad_request' }, { status: 400 });

  const { RESEND_API_KEY: key, CONTACT_TO: to, CONTACT_FROM: from } = process.env;
  if (!key || !to || !from) return Response.json({ error: 'not_configured' }, { status: 503 });

  const contact = typeof fields.contact === 'string' ? fields.contact.trim() : '';
  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from, to: [to], subject: `[Website] ${subject}`,
      reply_to: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) ? contact : undefined,
      text: `${subject}\nVia de website van ${getSite().temple.name}, taal: ${body.lang ?? '?'}\n\n${lines.join('\n')}\n`,
    }),
  });
  if (!sent.ok) return Response.json({ error: 'send_failed' }, { status: 502 });
  return Response.json({ ok: true });
}

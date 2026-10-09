import strings from '@/data/strings.json';
import type { Festival, Lang, Tr } from './types';

// Copy that only exists on the real site (the mockups had no working forms).
const EXTRA: Record<string, Tr> = {
  form_sending: { nl: 'Bezig met versturen…', en: 'Sending…', hi: 'भेजा जा रहा है…' },
  form_ok: { nl: 'Verstuurd. De mandir neemt contact met u op.', en: 'Sent. The mandir will be in touch.', hi: 'भेज दिया गया। मंदिर आपसे संपर्क करेगा।' },
  form_fail: { nl: 'Versturen is niet gelukt. Probeer het opnieuw, of bel of mail de mandir.', en: 'Sending failed. Please try again, or phone or e-mail the mandir.', hi: 'भेजा नहीं जा सका। कृपया फिर प्रयास करें, या मंदिर को फ़ोन या ईमेल करें।' },
  form_off: { nl: 'Dit formulier is nog niet aangesloten. Bel of mail de mandir:', en: 'This form is not connected yet. Please phone or e-mail the mandir:', hi: 'यह फ़ॉर्म अभी जुड़ा नहीं है। कृपया मंदिर को फ़ोन या ईमेल करें:' },
  seva_note: { nl: 'Uw keuze wordt voorlopig alleen op dit apparaat bewaard.', en: 'For now your choice is kept on this device only.', hi: 'फ़िलहाल आपका चयन केवल इसी डिवाइस पर रहता है।' },
  // Short enough for three columns of buttons on a phone.
  seva_join: { nl: 'Ik help', en: 'I will help', hi: 'सेवा करूँ' },
  seva_mine: { nl: 'U helpt', en: 'Helping', hi: 'आप जुड़े हैं' },
  nav_home: { nl: 'Home', en: 'Home', hi: 'मुखपृष्ठ' },
  home_more: { nl: 'Verder op de site', en: 'More on this site', hi: 'साइट पर और' },
  all_festivals: { nl: 'Het hele jaarprogramma', en: 'The whole year', hi: 'पूरा वार्षिक कार्यक्रम' },
};
const S = { ...(strings as Record<string, Tr>), ...EXTRA };

export const LOCALE: Record<Lang, string> = { nl: 'nl-NL', en: 'en-GB', hi: 'hi-IN-u-nu-latn' };
const REL: Record<Lang, string> = { nl: 'nl', en: 'en', hi: 'hi-u-nu-latn' };

/** A date from YYYY-MM-DD, at local midnight. */
export function day(iso: string): Date {
  const p = iso.split('-');
  return new Date(+p[0], +p[1] - 1, +p[2]);
}
export function startOf(d: Date): Date { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
export function daysBetween(a: Date, b: Date): number { return Math.round((+b - +a) / 864e5); }

/** Everything a component needs to speak one language. */
export function tr(lang: Lang) {
  const t = (key: string): string => { const v = S[key]; return v ? v[lang] || v.nl : key; };
  const L = (obj?: Tr | null): string => (obj ? obj[lang] || obj.nl : '');
  const fmt = (d: Date | string, opts: Intl.DateTimeFormatOptions): string =>
    new Intl.DateTimeFormat(LOCALE[lang], opts).format(typeof d === 'string' ? day(d) : d);
  /** "11 – 19 oktober" or "20 oktober". */
  const range = (f: Pick<Festival, 'date' | 'end'>, month: 'long' | 'short' = 'long'): string => {
    if (!f.end) return fmt(f.date, { day: 'numeric', month });
    const a = day(f.date), b = day(f.end);
    return a.getMonth() === b.getMonth()
      ? a.getDate() + ' – ' + fmt(b, { day: 'numeric', month })
      : fmt(a, { day: 'numeric', month }) + ' – ' + fmt(b, { day: 'numeric', month });
  };
  const inDays = (n: number): string => new Intl.RelativeTimeFormat(REL[lang], { numeric: 'auto' }).format(n, 'day');
  return { lang, t, L, fmt, range, inDays };
}
export type T = ReturnType<typeof tr>;

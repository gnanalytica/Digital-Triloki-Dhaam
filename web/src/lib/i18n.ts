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
  no_service: { nl: 'Geen zondagdienst op {dates}: in die weken is er het avondprogramma.', en: 'No Sunday service on {dates}: the evening programme takes its place.', hi: '{dates} को रविवार सेवा नहीं होगी: उन सप्ताहों में संध्या कार्यक्रम है।' },
  nav_connect: { nl: 'Volg ons', en: 'Follow', hi: 'जुड़ें' },
  f_phone: { nl: 'Telefoonnummer', en: 'Phone number', hi: 'फ़ोन नंबर' },
  f_email_opt: { nl: 'E-mail (niet verplicht)', en: 'E-mail (optional)', hi: 'ईमेल (वैकल्पिक)' },
  join_seva_p: { nl: 'Bij de zondagdienst, op hoogtijdagen, met muziek of achter de schermen. Laat uw gegevens achter, dan bellen wij u.', en: 'At the Sunday service, on festival days, with music or behind the scenes. Leave your details and we will call you.', hi: 'रविवार सेवा में, पर्वों पर, संगीत में या पर्दे के पीछे। अपना विवरण दें, हम आपको फ़ोन करेंगे।' },
  join_reg_btn: { nl: 'Meld u aan als vrijwilliger', en: 'Register as a volunteer', hi: 'सेवक के रूप में पंजीकरण करें' },
  voices_h: { nl: 'Stemmen van bhakta’s', en: 'Voices of bhaktas', hi: 'भक्तों की आवाज़ें' },
  voices_p: { nl: 'Wat betekent de mandir voor u? Bijvoorbeeld: nieuw in Eindhoven, ver van familie, en hier toch een gevoel van thuis vinden. Verhalen verschijnen hier zodra ze gedeeld zijn, met toestemming van de verteller.', en: 'What does the mandir mean to you? For example: new in Eindhoven, far from family, and still finding a feeling of home here. Stories will appear here once they have been shared, with the teller’s consent.', hi: 'मंदिर आपके लिए क्या मायने रखता है? जैसे: आइंडहोवन में नए, परिवार से दूर, और फिर भी यहाँ घर जैसा एहसास पाना। कहानियाँ साझा होने पर, सुनाने वाले की सहमति से, यहाँ दिखेंगी।' },
  voices_empty: { nl: 'Ruimte voor een verhaal', en: 'Room for a story', hi: 'एक कहानी के लिए जगह' },
  voices_cta: { nl: 'Deel uw verhaal', en: 'Share your story', hi: 'अपनी कहानी साझा करें' },
  prac_park_p: { nl: 'Gratis parkeren in de straat. Is daar geen plek, dan is er een grote parkeerplaats naast het spoor.', en: 'Parking in the street is free. If it is full, there is a large car park next to the railway line.', hi: 'सड़क पर पार्किंग निःशुल्क है। जगह न हो तो रेल लाइन के पास एक बड़ा पार्किंग स्थल है।' },
  prac_ov_p: { nl: 'Plan uw reis op 9292.nl naar', en: 'Plan your journey on 9292.nl to', hi: '9292.nl पर अपनी यात्रा की योजना बनाएँ:' },
  les_next: { nl: 'Volgende keer', en: 'Next session', hi: 'अगला सत्र' },
  les_theme: { nl: 'thema', en: 'theme', hi: 'विषय' },
  wa_also: { nl: 'of', en: 'or', hi: 'या' },
  con_h: { nl: 'Blijf verbonden met de mandir', en: 'Stay connected with the mandir', hi: 'मंदिर से जुड़े रहें' },
  con_p: { nl: 'Scan een code met uw telefoon, of tik erop.', en: 'Scan a code with your phone, or tap it.', hi: 'अपने फ़ोन से कोड स्कैन करें, या उस पर टैप करें।' },
  con_more: { nl: 'Alle kanalen en QR-codes', en: 'All channels and QR codes', hi: 'सभी चैनल और QR कोड' },
  con_wa: { nl: 'WhatsApp of bellen', en: 'WhatsApp or call', hi: 'WhatsApp या फ़ोन' },
  con_group: { nl: 'WhatsApp-groep', en: 'WhatsApp group', hi: 'WhatsApp समूह' },
  con_group_btn: { nl: 'Word lid van de WhatsApp-groep', en: 'Join the WhatsApp group', hi: 'WhatsApp समूह से जुड़ें' },
  con_group_p: { nl: 'Groep van de mandir', en: 'The mandir’s group', hi: 'मंदिर का समूह' },
  // The group is the mandir's own; what is posted there is up to its members, so nothing is promised about it.
  ft_wa_p: { nl: 'Word lid van de WhatsApp-groep van de mandir en hoor over hoogtijdagen en wijzigingen in de diensten.', en: 'Join the mandir’s WhatsApp group to hear about festivals and changes to the services.', hi: 'मंदिर के WhatsApp समूह से जुड़ें और पर्वों तथा सेवाओं में बदलाव की जानकारी पाएँ।' },
  cta_yt: { nl: 'Abonneer op YouTube', en: 'Subscribe on YouTube', hi: 'YouTube पर सब्सक्राइब करें' },
  cta_ig: { nl: 'Volg op Instagram', en: 'Follow on Instagram', hi: 'Instagram पर फ़ॉलो करें' },
  cta_fb: { nl: 'Word lid van de groep', en: 'Join the group', hi: 'समूह से जुड़ें' },
  cta_wa: { nl: 'Stuur een bericht', en: 'Send a message', hi: 'संदेश भेजें' },
  cta_call: { nl: 'Bel', en: 'Call', hi: 'फ़ोन करें' },
  con_soon: { nl: 'Link volgt van de mandir.', en: 'Link to follow from the mandir.', hi: 'लिंक मंदिर से शीघ्र।' },
  don_pick: { nl: 'Kies een bedrag', en: 'Choose an amount', hi: 'राशि चुनें' },
  don_other: { nl: 'Ander bedrag', en: 'Other amount', hi: 'अन्य राशि' },
  don_give: { nl: 'Geef € {amount}', en: 'Give € {amount}', hi: '€ {amount} दान करें' },
  don_how: { nl: 'Maak € {amount} over naar het IBAN hierboven, met omschrijving “Donatie”. Online betalen volgt binnenkort.', en: 'Transfer € {amount} to the IBAN above, with the reference “Donatie”. Paying online will follow soon.', hi: 'ऊपर दिए IBAN पर € {amount} भेजें, विवरण में “Donatie” लिखें। ऑनलाइन भुगतान शीघ्र आएगा।' },
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
  /** "from 18:00", or "18:00 – 21:30" where the mandir has given an end time. */
  const hours = (f: Pick<Festival, 'time' | 'until'>): string => (f.until ? `${f.time} – ${f.until}` : `${t('from')} ${f.time}`);
  const inDays = (n: number): string => new Intl.RelativeTimeFormat(REL[lang], { numeric: 'auto' }).format(n, 'day');
  return { lang, t, L, fmt, range, hours, inDays };
}
export type T = ReturnType<typeof tr>;

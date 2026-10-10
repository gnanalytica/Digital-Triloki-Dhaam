'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { nextService, upcoming } from '@/lib/dates';
import { tr } from '@/lib/i18n';
import { useNow } from '@/lib/useNow';
import type { Lang, Site } from '@/lib/types';
import { ContactForm, WhoFields } from '../ContactForm';
import { G } from '../Gloss';
import { Rangoli } from '../Ornament';

// Route icons, drawn on a 32 x 32 grid: mandir, calendar, diya, heart in a hand, book, speech bubbles.
const ROUTES = [
  { id: 'first', label: 'd_first', icon: 'M4 28h24M7 28V17h18v11M9 17c0-6 4-9 7-12 3 3 7 6 7 12M16 5V1.5l4 1.5-4 1.5M13 28v-5a3 3 0 0 1 6 0v5' },
  { id: 'date', label: 'd_date', icon: 'M5 8h22v19H5zM5 13h22M10 5v5M22 5v5M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2' },
  { id: 'ritual', label: 'd_ritual', icon: 'M4 19h24c0 5-5 8-12 8S4 24 4 19zM16 16c-3.5-3-1.5-6 0-10 1.5 4 3.5 7 0 10z' },
  { id: 'help', label: 'd_help', icon: 'M16 18c-5-3.5-7-6-7-8.5a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 2.5-2 5-7 8.5zM4 22c4 0 6 5 12 5s8-5 12-5' },
  { id: 'learn', label: 'd_learn', icon: 'M4 8c5-2 9-1 12 2 3-3 7-4 12-2v16c-5-2-9-1-12 2-3-3-7-4-12-2zM16 10v16' },
  { id: 'talk', label: 'd_talk', icon: 'M4 5h16v11h-9l-4 4v-4H4zM24 11h4v11h-3v4l-4-4h-8v-2' },
] as const;
type RouteId = (typeof ROUTES)[number]['id'];

/** "What brings you here today?": six reasons for coming, each with its own answer and, where it helps, a form. */
export function RouteTabs({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today), x = site.temple;
  const [pick, setPick] = useState<RouteId>('first');
  const tabs = useRef<HTMLDivElement>(null);
  const hours = `${site.service.start} – ${site.service.end}`;
  const form = { lang, phone: x.phone, email: x.email };

  // Other pages can link straight to one of the routes (/nl?route=help#wegwijs), and sections on the same page
  // can ask for one with a "mtd:route" event.
  useEffect(() => {
    const open = (want: string | null) => { if (want && ROUTES.some((r) => r.id === want)) setPick(want as RouteId); };
    open(new URLSearchParams(window.location.search).get('route'));
    const onAsk = (ev: Event) => open((ev as CustomEvent<string>).detail);
    window.addEventListener('mtd:route', onAsk);
    return () => window.removeEventListener('mtd:route', onAsk);
  }, []);

  function onKey(ev: React.KeyboardEvent) {
    if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
    ev.preventDefault();
    const i = ROUTES.findIndex((r) => r.id === pick);
    const next = ROUTES[(i + (ev.key === 'ArrowRight' ? 1 : ROUTES.length - 1)) % ROUTES.length].id;
    setPick(next);
    tabs.current?.querySelector<HTMLButtonElement>(`[data-route="${next}"]`)?.focus();
  }

  let panel: React.ReactNode;
  if (pick === 'first') {
    const s = nextService(now, site.service);
    panel = (
      <>
        <div>
          <h3>{T.t('first_h')}</h3>
          <div className="big">{s.today ? T.t('today') : T.fmt(s.date, { weekday: 'long', day: 'numeric', month: 'long' })}, {hours}</div>
          <p>{x.street}, {x.postal}<br /><a href={x.maps}>{T.t('route')}</a></p>
          <ul className="list">
            {site.programme.map((p) => <li key={p.start}><span><b>{T.L(p.title)}</b><br /><span className="muted"><G lang={lang}>{T.L(p.desc)}</G></span></span><span className="t">{p.start}</span></li>)}
          </ul>
          <p><G lang={lang}>{T.t('first_bell')}</G></p>
        </div>
        <div>
          <p><G lang={lang}>{T.t('first_p')}</G></p>
          <ul className="list">{site.etiquette.map((e) => <li key={e.nl}><G lang={lang}>{T.L(e)}</G></li>)}</ul>
          <p><Link href={`/${lang}/visit`}>{T.t('in_h')}</Link></p>
        </div>
      </>
    );
  } else if (pick === 'date') {
    panel = (
      <>
        <div>
          <h3>{T.t('upcoming_h')}</h3>
          <ul className="list">
            <li><span><b>{T.t('every_sunday')}</b></span><span className="t">{hours}</span></li>
            {upcoming(site.festivals, now, 5).map((f) => (
              <li key={f.id}>
                <span><b>{T.L(f.name)}</b>{f.pending && <span className="flag">{T.t('to_confirm')}</span>}<br />
                  <span className="muted">{T.range(f)}{f.note ? ', ' + T.L(f.note).toLowerCase() : ''}</span></span>
                <span className="t">{T.hours(f)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>{T.t('festival_time_note')}</p>
          <p className="muted">{T.t('calendar_why')}</p>
          <p><Link className="btn" href={`/${lang}/festivals`}>{T.t('all_festivals')}</Link></p>
        </div>
      </>
    );
  } else if (pick === 'ritual') {
    panel = (
      <>
        <div>
          <h3>{T.t('cer_h')}</h3>
          <p><G lang={lang}>{T.t('cer_p')}</G></p>
          {/* Funeral rites cannot wait for a form to be read: a phone number, not a form. */}
          <div className="urgent"><b>{T.t('cer_urgent_h')}</b><p>{T.t('cer_urgent_p')}</p><a href={`tel:${x.tel}`}>{x.phone}</a></div>
        </div>
        <div>
          <ContactForm {...form} kind="ceremony">
            <label><span>{T.t('f_which')}</span><select name="ceremony">{site.ceremonies.map((c) => <option key={c.id}>{T.L(c.name)}</option>)}</select></label>
            <WhoFields lang={lang} />
            <button className="btn">{T.t('cer_request')}</button>
          </ContactForm>
        </div>
      </>
    );
  } else if (pick === 'help') {
    panel = (
      <>
        <div><h3>{T.t('join_seva_h')}</h3><p><G lang={lang}>{T.t('join_p')}</G></p><p>{T.t('join_translate_p')}</p></div>
        <div>
          <ContactForm {...form} kind="volunteer">
            <fieldset><legend>{T.t('c_seva_q')}</legend>
              <div className="checks">{T.t('c_seva_opts').split('|').map((o) => <label key={o}><input type="checkbox" name="help_with" value={o} />{o}</label>)}</div>
            </fieldset>
            <label><span>{T.t('f_name')}</span><input type="text" name="name" required autoComplete="name" /></label>
            <label><span>{T.t('f_phone')}</span><input type="text" name="phone" required autoComplete="tel" inputMode="tel" /></label>
            <label><span>{T.t('f_email_opt')}</span><input type="text" name="email" autoComplete="email" /></label>
            <button className="btn">{T.t('join_reg_btn')}</button>
          </ContactForm>
        </div>
      </>
    );
  } else if (pick === 'learn') {
    panel = (
      <>
        <div>
          <h3>{T.t('courses_h')}</h3>
          <ul className="list">
            {site.courses.map((c) => <li key={c.id}><span><b>{T.L(c.name)}</b><br /><span className="muted">{T.L(c.desc)} {T.t(c.fixed ? 'courses_fixed' : 'courses_gated')}</span></span>{c.time && <span className="t">{c.time}</span>}</li>)}
          </ul>
        </div>
        <div>
          <p><Link className="btn" href={`/${lang}/lessons`}>{T.t('les_btn')}</Link></p>
          <p><Link href={`/${lang}/knowledge`}>{T.t('k_h')}</Link></p>
        </div>
      </>
    );
  } else {
    panel = (
      <>
        <div><h3>{T.t('care_h')}</h3><p><G lang={lang}>{T.t('care_p')}</G></p><p className="muted">{T.t('f_private')}</p></div>
        <div>
          <ContactForm {...form} kind="conversation">
            <label><span>{T.t('f_message')}</span><textarea name="message" /></label>
            <WhoFields lang={lang} />
            <button className="btn">{T.t('care_cta')}</button>
          </ContactForm>
        </div>
      </>
    );
  }

  return (
    <section className="band" id="wegwijs">
      <Rangoli variant="a" />
      <div className="wrap">
        <h2>{T.t('d_ask')}</h2>
        <div className="arcade" role="tablist" ref={tabs} onKeyDown={onKey}>
          {ROUTES.map((r) => (
            <button key={r.id} className="niche" role="tab" data-route={r.id} aria-selected={r.id === pick} tabIndex={r.id === pick ? 0 : -1} onClick={() => setPick(r.id)}>
              <svg viewBox="0 0 32 32" aria-hidden="true"><path className="i" d={r.icon} /></svg>{T.t(r.label)}
            </button>
          ))}
        </div>
        <div className="panel" role="tabpanel" tabIndex={0}>{panel}</div>
        <p className="muted center" style={{ marginTop: 18 }}>{T.t('hours_note')}</p>
      </div>
    </section>
  );
}

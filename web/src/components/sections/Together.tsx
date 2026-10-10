'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import extras from '@/data/extras.json';
import { day, tr } from '@/lib/i18n';
import { festivalsAt } from '@/lib/dates';
import { useNow } from '@/lib/useNow';
import type { Lang, Site, Tr } from '@/lib/types';
import { ContactForm } from '../ContactForm';
import { G } from '../Gloss';
import { LampSVG, Rangoli } from '../Ornament';
import { Ph } from '../Ph';

const TASKS = extras.tasks as Tr[];
const DIYAS = 21;

/** Kept on this device only until the mandir has somewhere shared to keep it. */
function useStored<V>(key: string, initial: V): [V, (v: V) => void] {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    try { const raw = localStorage.getItem('mtd-' + key); if (raw) setValue(JSON.parse(raw)); } catch { /* private mode */ }
  }, [key]);
  return [value, (v) => { setValue(v); try { localStorage.setItem('mtd-' + key, JSON.stringify(v)); } catch { /* private mode */ } }];
}

/** Taking part: report a mistake, offer help, help translate; the seva board for Navratri; light a diya. */
export function Together({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today);
  const [seva, setSeva] = useStored<Record<string, boolean>>('seva', {});
  const [diyas, setDiyas] = useStored('diyas', 0);
  const [voice, setVoice] = useState(false);
  const navratri = festivalsAt(site.festivals, now).find((f) => f.nights && !f.past);
  return (
    <section className="band" id="samen">
      <Rangoli variant="c" />
      <div className="wrap">
        <h2>{T.t('join_h')}</h2>
        <p className="muted" style={{ marginTop: 12, fontSize: '1.15rem' }}><G lang={lang}>{T.t('join_p')}</G></p>
        <div className="trio">
          <div>
            <h3>{T.t('join_fix_h')}</h3>
            <p>{T.t('join_fix_p')}</p>
            <ContactForm lang={lang} kind="correction" phone={site.temple.phone} email={site.temple.email}>
              <label><span>{T.t('f_message')}</span><textarea name="message" required /></label>
              <label><span>{T.t('f_contact')}</span><input type="text" name="contact" /></label>
              <button className="btn">{T.t('join_fix_cta')}</button>
            </ContactForm>
          </div>
          <div>
            <h3>{T.t('join_seva_h')}</h3>
            <p><G lang={lang}>{T.t('join_seva_p')}</G></p>
            {/* The mandir phones volunteers back, so a phone number is asked for, not "e-mail or phone". */}
            <ContactForm lang={lang} kind="volunteer" phone={site.temple.phone} email={site.temple.email}>
              <label><span>{T.t('f_name')}</span><input type="text" name="name" required autoComplete="name" /></label>
              <label><span>{T.t('f_phone')}</span><input type="text" name="phone" required autoComplete="tel" inputMode="tel" /></label>
              <label><span>{T.t('f_email_opt')}</span><input type="text" name="email" autoComplete="email" /></label>
              <button className="btn">{T.t('join_reg_btn')}</button>
            </ContactForm>
          </div>
          <div>
            <h3>{T.t('join_translate_h')}</h3>
            <p>{T.t('join_translate_p')}</p>
            <p><Link className="btn btn-line" href={`/${lang}?route=help#wegwijs`} onClick={() => window.dispatchEvent(new CustomEvent('mtd:route', { detail: 'help' }))}>{T.t('nav_join')}</Link></p>
          </div>
        </div>

        <div className="duo">
          <div>
            {navratri && (
              <>
                <h3>{T.t('seva_h')}</h3>
                <p><G lang={lang}>{T.t('seva_p')}</G></p>
                <Ph T={T} className="seva-scroll">
                  <table>
                    <thead><tr><td />{TASKS.map((task) => <th key={task.nl} scope="col">{T.L(task)}</th>)}</tr></thead>
                    <tbody>
                      {Array.from({ length: navratri.nights! }, (_, i) => {
                        const d = day(navratri.date); d.setDate(d.getDate() + i);
                        return (
                          <tr key={i}>
                            <th scope="row">{T.fmt(d, { weekday: 'short', day: 'numeric', month: 'short' })}</th>
                            {TASKS.map((_, n) => {
                              const key = `${navratri.id}-${i}-${n}`, mine = !!seva[key];
                              return <td key={n}><button type="button" className="seva-btn" aria-pressed={mine} onClick={() => setSeva({ ...seva, [key]: !mine })}>{T.t(mine ? 'seva_mine' : 'seva_join')}</button></td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Ph>
                <p className="muted small">{T.t('seva_note')}</p>
              </>
            )}
          </div>
          <div>
            <h3>{T.t('diya_h')}</h3>
            <p>{T.t('diya_p')}</p>
            <ul className="diya-row">{Array.from({ length: DIYAS }, (_, n) => <li key={n} className={n < diyas ? 'lit' : ''}><LampSVG n={n} /></li>)}</ul>
            <p>
              <button type="button" className="btn" disabled={diyas >= DIYAS} onClick={() => setDiyas(Math.min(DIYAS, diyas + 1))}>{T.t('diya_btn')}</button>{' '}
              <span className="diya-count">{diyas >= DIYAS ? T.t('diya_full') : `${T.t('diya_count')}: ${diyas}`}</span>
            </p>
          </div>
        </div>

        <div className="voices">
          <h3>{T.t('voices_h')}</h3>
          <p>{T.t('voices_p')}</p>
          {/* Nobody's words are invented: the slots stay empty until people tell their own story. */}
          <div className="slots">{[1, 2, 3].map((n) => <div key={n} className="slot">{T.t('voices_empty')}</div>)}</div>
          <p><button type="button" className="btn" aria-expanded={voice} aria-controls="voice-form" onClick={() => setVoice(!voice)}>{T.t('voices_cta')}</button></p>
          <ContactForm lang={lang} kind="story" phone={site.temple.phone} email={site.temple.email} id="voice-form" hidden={!voice}>
            <label><span>{T.t('f_name')}</span><input type="text" name="name" required autoComplete="name" /></label>
            <label><span>{T.t('f_contact')}</span><input type="text" name="contact" required /></label>
            <label><span>{T.t('f_message')}</span><textarea name="message" required /></label>
            <div className="checks"><label><input type="checkbox" name="consent" value="yes" required /><span>{T.t('voices_consent')}</span></label></div>
            <button className="btn">{T.t('f_send')}</button>
          </ContactForm>
        </div>
      </div>
    </section>
  );
}

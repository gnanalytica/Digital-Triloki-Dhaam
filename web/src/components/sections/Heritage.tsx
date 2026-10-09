'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import heritage from '@/data/heritage.json';
import { tr } from '@/lib/i18n';
import type { Lang, Site, Tr } from '@/lib/types';
import { ContactForm } from '../ContactForm';
import { G } from '../Gloss';
import { Jhandi, Rangoli } from '../Ornament';

type Stop = { year: string | Tr; place: Tr; title: Tr; body: Tr; open?: boolean };
const JOURNEY = heritage.journey as Stop[];
const INSTRUMENTS = heritage.instruments as { name: Tr; body: Tr; icon: string }[];

/** The Surinamese-Hindustani layer: the journey, baithak gana, a Sarnami word, Phagwa colours, and voices of the elders. A concept until the board confirms it. */
export function Heritage({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang);
  const [at, setAt] = useState(0), [phagwa, setPhagwa] = useState(false), [voice, setVoice] = useState(false);
  const stop = JOURNEY[at], yr = (s: Stop) => (typeof s.year === 'string' ? s.year : T.L(s.year));

  useEffect(() => {
    document.body.classList.toggle('phagwa', phagwa);
    return () => document.body.classList.remove('phagwa');
  }, [phagwa]);

  return (
    <section className="band band-her" id="erfgoed">
      <Rangoli variant="b" />
      <div className="wrap">
        <div className="her-head">
          <div>
            <h2>{T.t('her_h')}</h2>
            <p className="lead" style={{ marginTop: 12 }}>{T.t('her_p')}</p>
            <p className="concept">{T.t('her_concept')}</p>
          </div>
          <Jhandi />
        </div>
        <div className="route">
          <div className="stops" role="tablist">
            {JOURNEY.map((s, n) => (
              <button key={n} type="button" role="tab" className={'stop' + (s.open ? ' open' : '')} aria-selected={n === at} onClick={() => setAt(n)}>
                <i aria-hidden="true" /><b>{yr(s)}</b><span>{T.L(s.place)}</span>
              </button>
            ))}
          </div>
          <div className="stop-body" role="tabpanel">
            <div className="yr">{yr(stop)}</div>
            <div>{stop.open && <span className="flag">{T.t('her_open')}</span>}<h3>{T.L(stop.title)}</h3><p><G lang={lang}>{T.L(stop.body)}</G></p></div>
          </div>
        </div>

        <div className="her-grid">
          <div>
            <h3>{T.t('music_h')}</h3>
            <p><G lang={lang}>{T.t('music_p')}</G></p>
            <div className="instr">
              {INSTRUMENTS.map((x) => (
                <article key={x.name.nl}>
                  <svg viewBox="0 0 32 32" aria-hidden="true"><path d={x.icon} /></svg>
                  <h4>{T.L(x.name)}</h4><p><G lang={lang}>{T.L(x.body)}</G></p>
                  <button type="button" disabled>{T.t('music_soon')}</button>
                </article>
              ))}
            </div>
            <p><Link className="btn btn-line" href={`/${lang}/lessons`}>{T.t('music_cta')}</Link></p>
          </div>
          <div className="her-side">
            <div className="word">
              <small>{T.t('word_h')}</small><b>{T.t('greet')}</b>
              <p>{T.t('word_p')}</p><p className="word-what">{T.t('word_what')}</p><p className="muted">{T.t('word_note')}</p>
            </div>
            <div className="phagwa">
              <p>{T.t('phagwa_p')}</p>
              <p><button type="button" className="btn btn-line" aria-pressed={phagwa} onClick={() => setPhagwa(!phagwa)}>{T.t(phagwa ? 'phagwa_off' : 'phagwa_on')}</button></p>
            </div>
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

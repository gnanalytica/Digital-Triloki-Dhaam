'use client';
import { useState } from 'react';
import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { ContactForm } from '../ContactForm';

/** Lessons and courses: choose one or more, then sign up with one form. */
export function Lessons({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setPicked((p) => ({ ...p, [id]: !p[id] }));
  const any = Object.values(picked).some(Boolean);
  return (
    <section className="band band-les" id="lessen">
      <div className="wrap">
        <h2>{T.t('les_h')}</h2>
        <p className="lead" style={{ marginTop: 12 }}>{T.t('les_p')}</p>
        <div className="lessons">
          {site.courses.map((c) => (
            <article key={c.id} className="lesson">
              <h4>{T.L(c.name)}</h4>
              <p>{T.L(c.desc)}</p>
              <small>{c.time ? `${T.t('les_sunday')} ${c.time}. ` : ''}{T.t(c.fixed ? 'courses_fixed' : 'courses_gated')}</small>
              <button type="button" className={'btn' + (picked[c.id] ? '' : ' btn-line')} aria-pressed={!!picked[c.id]} onClick={() => toggle(c.id)}>{T.t(picked[c.id] ? 'les_picked' : 'les_btn')}</button>
            </article>
          ))}
        </div>
        <ContactForm lang={lang} kind="lessons" phone={site.temple.phone} email={site.temple.email} id="les-form" hidden={!any}>
          <fieldset><legend>{T.t('les_which')}</legend>
            <div className="checks">
              {site.courses.map((c) => <label key={c.id}><input type="checkbox" name="lessons" value={c.name.nl} checked={!!picked[c.id]} onChange={() => toggle(c.id)} />{T.L(c.name)}</label>)}
            </div>
          </fieldset>
          <label><span>{T.t('f_name')}</span><input type="text" name="name" required autoComplete="name" /></label>
          <label><span>{T.t('f_contact')}</span><input type="text" name="contact" required /></label>
          <label><span>{T.t('les_who')}</span><select name="for_whom">{T.t('les_who_opts').split('|').map((o) => <option key={o}>{o}</option>)}</select></label>
          <p className="muted small">{T.t('les_child')}</p>
          <button className="btn">{T.t('les_send')}</button>
        </ContactForm>
      </div>
    </section>
  );
}

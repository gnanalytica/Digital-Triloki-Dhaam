'use client';
import { useState } from 'react';
import extras from '@/data/extras.json';
import knowledge from '@/data/knowledge.json';
import { festivalsAt, nextService } from '@/lib/dates';
import { tr } from '@/lib/i18n';
import { useNow } from '@/lib/useNow';
import type { KnowledgeItem, Lang, Site, Tr } from '@/lib/types';
import { ContactForm } from '../ContactForm';
import { Ph } from '../Ph';
import { WhatsApp } from './Small';

const TEXTS = (knowledge.items as KnowledgeItem[]).filter((k) => k.verse).slice(0, 5);
const WORDS = extras.words as { hi: string; ro: string; m: Tr }[];

/**
 * Six ways to stay close to the mandir between visits. Each is a working outline: recordings, a live stream,
 * stories, colouring pages and photographs are placeholders until the mandir supplies them.
 */
export function More({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today);
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const service = nextService(now, site.service), past = festivalsAt(site.festivals, now).filter((f) => f.past).slice(-6);
  const Head = ({ k }: { k: string }) => <><h4>{T.t(`ft_${k}_h`)}</h4><p>{T.t(`ft_${k}_p`)}</p></>;
  return (
    <section className="band band-wish" id="wensen">
      <div className="wrap">
        <h2>{T.t('wish_h')}</h2>
        <p className="lead" style={{ marginTop: 12 }}>{T.t('wish_p')}</p>
        <div className="wishes feats">
          <article className="wish feat">
            <Head k="audio" />
            <Ph T={T} as="ul" className="feat-list">
              {TEXTS.map((k) => <li key={k.title.nl}><button type="button" className="feat-play" disabled aria-label={`${T.L(k.title)}: ${T.t('ft_audio_soon')}`} /><b>{T.L(k.title)}</b><small>{T.t('ft_audio_soon')}</small></li>)}
            </Ph>
          </article>

          <article className="wish feat">
            <Head k="live" />
            <Ph T={T} className="frame feat-screen">
              <span>{T.t('ft_live_next')}</span><b>{T.fmt(service.date, { weekday: 'long', day: 'numeric', month: 'long' })}, {site.service.start}</b><span>{T.t('ft_live_ph')}</span>
            </Ph>
            <a className="btn btn-line" target="_blank" rel="noopener" href={site.temple.youtube}>{T.t('ft_live_btn')}</a>
          </article>

          <article className="wish feat">
            <Head k="ask" />
            <ContactForm lang={lang} kind="question" phone={site.temple.phone} email={site.temple.email}>
              <label><span>{T.t('ft_ask_q')}</span><textarea name="question" required /></label>
              <label><span>{T.t('ft_ask_c')}</span><input type="text" name="contact" /></label>
              <button className="btn">{T.t('ft_ask_btn')}</button>
            </ContactForm>
            {/* No questions or answers are invented. */}
            <p className="feat-empty">{T.t('ft_ask_none')}</p>
          </article>

          <article className="wish feat">
            <Head k="kids" />
            <div className="feat-words">
              {WORDS.map((w, n) => (
                <button key={w.ro} type="button" className="feat-word" aria-pressed={!!shown[n]} onClick={() => setShown({ ...shown, [n]: !shown[n] })}>
                  <b lang="hi">{w.hi}</b>{shown[n] && <><i lang="hi-Latn">{w.ro}</i><span>{T.L(w.m)}</span></>}
                </button>
              ))}
            </div>
            <div className="feat-pair">
              {['story', 'colour'].map((k) => <Ph key={k} T={T}><h5>{T.t('ft_kids_' + k)}</h5><p>{T.t('ft_kids_ph')}</p></Ph>)}
            </div>
          </article>

          <article className="wish feat">
            <Head k="wa" />
            <WhatsApp site={site} T={T} text={T.t('ft_wa_msg')} label={T.t('ft_wa_btn')} />
          </article>

          <article className="wish feat">
            <Head k="alb" />
            <Ph T={T} className="feat-albums">
              {past.map((f) => <figure key={f.id}><div className="frame" /><figcaption><b>{T.L(f.name)}</b><span>{T.fmt(f.date, { day: 'numeric', month: 'long' })}, {T.t('ft_alb_ph')}</span></figcaption></figure>)}
            </Ph>
          </article>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import extras from '@/data/extras.json';
import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { G } from '../Gloss';
import { Ph } from '../Ph';

/** Inside the mandir: the altar with numbered murtis, the people, and how to get there. Mostly awaiting the temple's own content. */
export function Inside({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), x = site.temple;
  const [spot, setSpot] = useState(0);
  return (
    <section className="band band-in" id="binnen">
      <div className="wrap">
        <h2>{T.t('in_h')}</h2>
        <p className="lead" style={{ marginTop: 12 }}>{T.t('in_p')}</p>
        <div className="murtis">
          <div className="murti-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/altar.jpg" alt="Het altaar van Mandir Triloki Dhaam met de murti's op een rij" loading="lazy" />
            <div>
              {(extras.spots as number[][]).map((s, n) => (
                <button key={n} type="button" className="spot" aria-pressed={n === spot} style={{ left: s[0] + '%', top: s[1] + '%' }} onClick={() => setSpot(n)}>{n + 1}</button>
              ))}
            </div>
          </div>
          <div id="murti-info" aria-live="polite"><Ph T={T}><h3>{T.t('spot_t')} {spot + 1}</h3><p><G lang={lang}>{T.t('spot_d')}</G></p></Ph></div>
        </div>

        <h3 className="sub">{T.t('ppl_h')}</h3>
        <div className="people">
          <article className="person"><div className="face" aria-hidden="true">V</div><h4>Pandit Vinay Narain</h4><small>{T.t('ppl_role')}</small><p>{T.t('ppl_bio')}</p></article>
          {[1, 2, 3].map((n) => <Ph key={n} T={T} as="article" className="person"><div className="face" aria-hidden="true">?</div><p>{T.t('ppl_ph')}</p></Ph>)}
        </div>

        <h3 className="sub">{T.t('prac_h')}</h3>
        <div className="practical">
          <div><h4>{T.t('prac_park')}</h4><p>{T.t('prac_park_p')}</p></div>
          <div><h4>{T.t('prac_ov')}</h4><p>{T.t('prac_ov_p')} <b>{x.street}, {x.postal}</b>.</p><p style={{ marginTop: 10 }}><a target="_blank" rel="noopener" href="https://9292.nl/">9292.nl</a></p></div>
          <Ph T={T} className="map"><p>{T.t('prac_map')}</p><p><b>{x.street}, {x.postal}</b></p><a className="btn btn-line" target="_blank" rel="noopener" href={x.maps}>{T.t('route')}</a></Ph>
        </div>
      </div>
    </section>
  );
}

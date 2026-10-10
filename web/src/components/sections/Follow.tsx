'use client';
import Link from 'next/link';
import { useState } from 'react';
import knowledge from '@/data/knowledge.json';
import { festivalsAt } from '@/lib/dates';
import { tr } from '@/lib/i18n';
import { useNow } from '@/lib/useNow';
import type { KnowledgeItem, Lang, Site } from '@/lib/types';
import { Feathers } from '../Ornament';

const VERSES = (knowledge.items as KnowledgeItem[]).filter((k) => k.verse);
const KINDS = ['fest', 'verse', 'video', 'ig'] as const;
type Kind = (typeof KINDS)[number];
const BATCH = 6;

/** A YouTube thumbnail that becomes the player when pressed, so nothing is loaded from YouTube until the visitor asks. */
function Video({ id, label }: { id: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) return <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen title={label} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <button className="video" aria-label={label} onClick={() => setPlaying(true)}><img loading="lazy" alt="" src={`/assets/yt-${id}.jpg`} /></button>;
}

/** Everything the mandir publishes, in one feed: festivals (what is coming first), mantras, videos and Instagram posts. */
export function Follow({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today), x = site.temple;
  const [filter, setFilter] = useState<Kind | null>(null), [shown, setShown] = useState(BATCH);
  const all = festivalsAt(site.festivals, now);
  const fests = all.filter((f) => !f.past).concat(all.filter((f) => f.past).reverse());

  const groups: Record<Kind, React.ReactNode[]> = {
    fest: fests.map((f) => (
      <article key={f.id} className={'card card-fest' + (f.past ? ' past' : '')}>
        <small>{T.t('feed_fest')}</small><span className="when">{T.range(f)}</span><h3>{T.L(f.name)}</h3>
        <p className="muted">{f.past ? T.t('past') : `${T.hours(f)}${f.note ? ', ' + T.L(f.note).toLowerCase() : ''}`}</p>
        {f.pending && <p><span className="flag" style={{ margin: 0 }}>{T.t('to_confirm')}</span></p>}
      </article>
    )),
    verse: VERSES.map((k) => (
      <article key={k.title.nl} className="card card-verse">
        <small>{T.t('feed_verse')}</small><h3>{T.L(k.title)}</h3>
        <div className={'verse' + (k.verse!.length < 3 ? ' one' : '')} lang="sa">{k.verse}</div><div className="roman" lang="sa-Latn">{k.roman}</div>
      </article>
    )),
    video: site.videos.map((v) => (
      <article key={v.id} className="card card-media"><Video id={v.id} label={`${T.t('s_play')}: ${T.L(v.title)}`} /><small>YouTube</small><h3>{T.L(v.title)}</h3></article>
    )),
    ig: site.reels.map((g) => {
      const when = T.fmt(g.date, { day: 'numeric', month: 'long', year: 'numeric' });
      return (
        <article key={g.id} className="card card-media">
          <a className="gram" target="_blank" rel="noopener" href={`https://www.instagram.com/reel/${g.id}/`} aria-label={`${T.t('s_ig_open')}: ${when}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span><img loading="lazy" alt="" src={`/assets/ig-${g.id}.jpg`} /></span>
          </a>
          <small>Instagram</small><h3>{when}</h3>
        </article>
      );
    }),
  };
  // Mixed: one of each kind in turn until every kind runs out. It never repeats or pads itself to look endless.
  let items: React.ReactNode[] = [];
  if (filter) items = groups[filter];
  else for (let i = 0, more = true; more; i++) { more = false; for (const k of KINDS) if (groups[k][i]) { items.push(groups[k][i]); more = true; } }
  const visible = items.slice(0, shown), done = shown >= items.length;

  return (
    <section className="band social" id="volg">
      <Feathers />
      <div className="wrap">
        <h2>{T.t('s_h')}</h2>
        <p className="muted" style={{ marginTop: 12, fontSize: '1.15rem' }}>{T.t('s_p')}</p>
        <div className="accounts">
          <a href={x.youtube}><svg aria-hidden="true"><use href="#ic-yt-red" /></svg><span><b>YouTube</b>@{x.youtube.split('@')[1]}</span></a>
          <a href={x.instagram}><svg aria-hidden="true"><use href="#ic-ig-color" /></svg><span><b>Instagram</b>@{x.instagram.replace(/\/$/, '').split('/').pop()}</span></a>
          <a href={x.facebook}><svg aria-hidden="true"><use href="#ic-fb-color" /></svg><span><b>{T.t('s_fb_name')}</b><span>{T.t('feed_private')}</span></span></a>
        </div>
        <p style={{ marginTop: 18 }}><Link className="btn btn-line" href={`/${lang}/connect`}>{T.t('con_more')}</Link></p>
        <div className="feed-chips" role="group">
          {KINDS.map((k) => <button key={k} className="feed-chip" aria-pressed={filter === k} onClick={() => { setFilter(filter === k ? null : k); setShown(BATCH); }}>{T.t('feed_' + k)}</button>)}
        </div>
        <div className="feed feed-grid">{visible}</div>
        <div className={'feed-more' + (done ? ' done' : '')}>
          {done ? <span role="status">{T.t('feed_end').replace('{start}', site.service.start)}</span> : <button type="button" className="btn btn-line" onClick={() => setShown(shown + BATCH)}>{T.t('feed_loading')}</button>}
        </div>
      </div>
    </section>
  );
}

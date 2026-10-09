'use client';
import { useState } from 'react';
import knowledge from '@/data/knowledge.json';
import { daysBetween, startOf, tr } from '@/lib/i18n';
import { useNow } from '@/lib/useNow';
import type { KnowledgeItem, Lang, Tr } from '@/lib/types';
import { G } from '../Gloss';
import { Mandala } from '../Ornament';
import { Ph } from '../Ph';

const ITEMS = knowledge.items as KnowledgeItem[];
const CATS = knowledge.cats as { id: string; name: Tr }[];
const VERSES = ITEMS.filter((k) => k.verse);

function Verse({ item }: { item: KnowledgeItem }) {
  if (!item.verse) return null;
  return <div className={'verse' + (item.verse.length < 3 ? ' one' : '')} lang="sa">{item.verse}</div>;
}

/** Knowledge from the mandir's own archive: a mantra of the day, then mantras, aartis, scriptures, principles and festivals by subject. */
export function Knowledge({ lang, today }: { lang: Lang; today: string }) {
  const T = tr(lang), now = useNow(today);
  const [cat, setCat] = useState('mantra'), [copied, setCopied] = useState(false);
  // The same mantra for everybody on a given date.
  const daily = VERSES[daysBetween(new Date(now.getFullYear(), 0, 1), startOf(now)) % VERSES.length];

  function copy() {
    const text = `${daily.verse!.replace(/\n/g, ' ')} — ${daily.roman}`;
    const done = () => setCopied(true);
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
  }

  return (
    <section className="band sanctum" id="kennis">
      <Mandala />
      <div className="wrap">
        <h2>{T.t('k_h')}</h2>
        <p className="muted" style={{ marginTop: 12, fontSize: '1.15rem' }}>{T.t('k_p')}</p>
        <div className="motd">
          <div><small>{T.t('motd')}</small><h3>{T.L(daily.title)}</h3><Verse item={daily} /></div>
          <div>
            <div className="roman" lang="sa-Latn">{daily.roman}</div>
            {daily.body && <p>{T.L(daily.body)}</p>}
            <p style={{ marginTop: 18 }}><button type="button" className="btn btn-soft" onClick={copy}>{T.t(copied ? 'copied' : 'copy')}</button></p>
            <Ph T={T} className="player"><button type="button" disabled aria-label={T.t('audio_ph')} /><div className="wave" aria-hidden="true">{Array.from({ length: 28 }, (_, n) => <i key={n} />)}</div><span>{T.t('audio_ph')}</span></Ph>
          </div>
        </div>
        <div className="chips" role="group">
          {CATS.map((c) => <button key={c.id} className="chip" aria-pressed={c.id === cat} onClick={() => setCat(c.id)}>{T.L(c.name)}</button>)}
        </div>
        <div className="library">
          {ITEMS.filter((k) => k.cat === cat).map((k) => (
            <article key={k.title.nl} className="entry">
              <h3>{T.L(k.title)}</h3>
              <Verse item={k} />
              {k.verse && <div className="roman" lang="sa-Latn">{k.roman}</div>}
              {k.body && <p><G lang={lang}>{T.L(k.body)}</G></p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

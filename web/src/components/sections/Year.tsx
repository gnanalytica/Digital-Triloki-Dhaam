'use client';
import { useMemo, useState } from 'react';
import heritage from '@/data/heritage.json';
import knowledge from '@/data/knowledge.json';
import { googleCalendarURL } from '@/lib/calendar';
import { festivalsAt } from '@/lib/dates';
import { day, daysBetween, startOf, tr, type T as Tx } from '@/lib/i18n';
import { moonAt, moons } from '@/lib/moon';
import { useNow } from '@/lib/useNow';
import type { FestivalNow, KnowledgeItem, Lang, Site, Tr } from '@/lib/types';
import { G } from '../Gloss';
import { Ph } from '../Ph';
import { LampRow } from './Lamps';

const ALIASES = heritage.aliases as Record<string, string[]>;
const ALIAS_NOTE = heritage.aliasNote as Record<string, Tr>;
// Which entry in the knowledge section explains which festival.
const EXPLAIN: Record<string, string> = { 'shardiya-navratri': 'Navratri', 'chaitra-navratri': 'Navratri', 'maha-shivratri': 'Maha Shivratri', 'hanuman-jayanti': 'Hanuman Jayanti' };
const ABOUT = new Map((knowledge.items as KnowledgeItem[]).filter((k) => k.cat === 'festival').map((k) => [k.title.en, k.body]));

const at = (r: number, a: number): [string, string] => { const t = (a * Math.PI) / 180; return [(r * Math.sin(t)).toFixed(1), (-r * Math.cos(t)).toFixed(1)]; };

/** The year as a ring: 1 January at the top, running clockwise, each festival a marker at its own date, moons round the outside. */
function Ring({ year, fests, next, chosen, now, T, onPick }: { year: number; fests: FestivalNow[]; next?: FestivalNow; chosen: FestivalNow; now: Date; T: Tx; onPick: (id: string) => void }) {
  const jan1 = new Date(year, 0, 1), length = daysBetween(jan1, new Date(year + 1, 0, 1));
  const deg = (d: Date) => (daysBetween(jan1, startOf(d)) / length) * 360;
  const thisYear = now.getFullYear() === year;
  const sky = useMemo(() => moons(year), [year]);

  let last: number | null = null, inner = false;
  const marks = fests.map((f) => {
    const a0 = deg(day(f.date));
    // Markers within nine degrees of the one before step onto the inner track so they do not collide.
    inner = last !== null && a0 - last < 9 ? !inner : false;
    last = a0;
    return { f, a0, r: inner ? 124 : 150 };
  });

  return (
    <svg viewBox="-214 -214 428 428" role="group">
      <circle className="inner-track" r="124" /><circle className="track" r="150" />
      {Array.from({ length: 12 }, (_, m) => {
        const a = deg(new Date(year, m, 1)), p = at(158, a), q = at(168, a), lab = at(184, deg(new Date(year, m, 16)));
        return (
          <g key={m}>
            <line className="tick" x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} />
            <text className={'mlabel' + (thisYear && now.getMonth() === m ? ' now' : '')} x={lab[0]} y={lab[1]}>{T.fmt(new Date(year, m, 1), { month: 'short' })}</text>
          </g>
        );
      })}
      {thisYear && (() => { const a = at(112, deg(now)), b = at(160, deg(now)); return <line className="today" x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />; })()}
      {marks.map(({ f, a0, r }) => {
        if (!f.end) return null;
        const s = at(r, a0), e = at(r, deg(day(f.end)));
        return <path key={f.id} className="span" d={`M${s[0]},${s[1]}A${r},${r} 0 0 1 ${e[0]},${e[1]}`} />;
      })}
      {marks.map(({ f, a0, r }) => {
        const c = at(r, a0);
        return (
          <g key={f.id} className={'mk' + (f.past ? ' past' : '') + (next?.id === f.id ? ' next' : '')} role="button" tabIndex={0} aria-pressed={chosen.id === f.id}
            aria-label={`${T.L(f.name)}, ${T.range(f)}`} transform={`translate(${c[0]} ${c[1]})`} onClick={() => onPick(f.id)}
            onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); onPick(f.id); } }}>
            <circle r="15" fill="transparent" /><circle className="halo" r="13" /><circle className="dot" r="7.5" />
          </g>
        );
      })}
      {sky.map((m) => { const p = at(204, deg(m.date)); return <circle key={+m.date} className={m.type === 'new' ? 'moon-n' : 'moon-f'} cx={p[0]} cy={p[1]} r="4.2" />; })}
    </svg>
  );
}

export function Year({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today), t0 = startOf(now);
  const fests = festivalsAt(site.festivals, now), next = fests.find((f) => !f.past);
  const [picked, setPicked] = useState<string | null>(null), [status, setStatus] = useState('');
  const chosen = fests.find((f) => f.id === (picked ?? next?.id)) ?? fests[fests.length - 1];
  const cd = day(chosen.date), sameMonthEnd = chosen.end && day(chosen.end).getMonth() === cd.getMonth();
  const daysTo = daysBetween(t0, cd), about = ABOUT.get(EXPLAIN[chosen.id] ?? ''), moon = moonAt(now);

  // Search matches the programme's own names and the other names people use for the same day (Divali, Deepavali, Holi…).
  function find(q: string) {
    setStatus('');
    q = q.trim().toLowerCase();
    if (q.length < 2) return;
    const hits = fests.filter((f) => [f.name.nl, f.name.en ?? '', f.name.hi ?? ''].concat(ALIASES[f.id] ?? []).some((n) => n.toLowerCase().includes(q)));
    if (!hits.length) { setStatus(T.t('find_none')); return; }
    setPicked((hits.find((f) => !f.past) ?? hits[0]).id);
  }

  return (
    <section className="band band-year" id="jaar">
      <div className="wrap">
        <h2>{T.t('year_h').replace('2026', String(site.year))}</h2>
        <div className="find">
          <label htmlFor="fest-find">{T.t('find_label')}</label>
          <input type="text" id="fest-find" placeholder={T.t('find_ph')} autoComplete="off" onChange={(ev) => find(ev.target.value)} />
          <span role="status">{status}</span>
        </div>
        <div className="year">
          <div className="ring">
            <Ring year={site.year} fests={fests} next={next} chosen={chosen} now={now} T={T} onPick={setPicked} />
            <div className="ring-centre"><span>{T.fmt(cd, { month: 'long' })}</span><b>{sameMonthEnd ? `${cd.getDate()} – ${day(chosen.end!).getDate()}` : cd.getDate()}</b><i>{T.L(chosen.name)}</i></div>
          </div>
          <div className="fest" aria-live="polite">
            {next?.id === chosen.id && <span className="badge">{daysTo > 0 ? T.inDays(daysTo) : T.t('today')}</span>}
            <h3>{T.L(chosen.name)}</h3>
            <div className="when">{T.range(chosen)}</div>
            {ALIASES[chosen.id] && <p className="alias">{T.t('also')}: {ALIASES[chosen.id].join(', ')}.{ALIAS_NOTE[chosen.id] ? ' ' + T.L(ALIAS_NOTE[chosen.id]) : ''}</p>}
            <p className="meta">{chosen.past ? T.t('past') : `${T.fmt(cd, { weekday: 'long' })}, ${T.hours(chosen)}`}{chosen.note ? `. ${T.L(chosen.note)}.` : ''}</p>
            {chosen.pending && <p><span className="flag" style={{ margin: 0 }}>{T.t('to_confirm')}</span></p>}
            {about && <p><G lang={lang}>{T.L(about)}</G></p>}
            {chosen.nights && <LampRow festival={chosen} now={now} T={T} />}
            {!chosen.past && !chosen.pending && (
              <div className="cal-actions">
                <a className="btn" target="_blank" rel="noopener" href={googleCalendarURL(chosen, site, T)}>{T.t('gcal')}</a>
                <a className="btn btn-line" href={`/${lang}/calendar.ics`} download={`mandir-triloki-dhaam-${site.year}.ics`}>{T.t('ics')}</a>
              </div>
            )}
          </div>
        </div>
        <div className="moon-line">
          <span><i className="moon-new" />{T.t('moon_new')}</span><span><i className="moon-full" />{T.t('moon_full')}</span>
          <span><b>{T.t('moon_today')}:</b> {T.t('moon_names').split('|')[moon.index]}, {moon.lit}% {T.t('moon_lit')}</span>
          <span className="muted">{T.t('moon_note')}</span>
        </div>
        <div className="gallery">
          <h3>{T.t('gal_h')}: {T.L(chosen.name)}</h3>
          <Ph T={T} className="frames">{[1, 2, 3, 4].map((n) => <div key={n} className="frame" />)}<p>{T.t('gal_ph')}</p></Ph>
        </div>
        <p className="muted" style={{ marginTop: 28, maxWidth: '80ch', fontSize: '.98rem' }}>{T.t('festival_time_note')} {T.t('calendar_why')}</p>
      </div>
    </section>
  );
}

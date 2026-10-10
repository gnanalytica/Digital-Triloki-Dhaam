'use client';
import { cancelledAhead, isCancelled, nextService, upcoming } from '@/lib/dates';
import { LOCALE, day, daysBetween, startOf, tr } from '@/lib/i18n';
import { useNow } from '@/lib/useNow';
import type { Lang, Site } from '@/lib/types';
import { LampRow } from './Lamps';

/** The welcome, the two live facts (next service, next festival), the Sunday service drawn to scale, and the Navratri lamps. */
export function Intro({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const T = tr(lang), now = useNow(today), t0 = startOf(now);
  const s = nextService(now, site.service), f = upcoming(site.festivals, now, 1)[0];
  const hours = `${site.service.start} – ${site.service.end}`;
  const away = (date: Date) => { const n = daysBetween(t0, date); return n > 0 ? <u>{T.inDays(n)}</u> : null; };

  // On a Sunday during the service the part in progress is filled and a pin shows the time.
  const total = site.programme.reduce((sum, p) => sum + p.mins, 0);
  const [h, m] = site.service.start.split(':').map(Number);
  const mins = now.getHours() * 60 + now.getMinutes() - (h * 60 + m);
  const live = now.getDay() === 0 && mins >= 0 && mins < total && !isCancelled(now, site.service);
  // Sundays ahead without a day programme (during Navratri the evening programme takes its place).
  const off = cancelledAhead(now, site.service).map((d) => T.fmt(d, { day: 'numeric', month: 'long' }));
  const offList = new Intl.ListFormat(LOCALE[lang], { type: 'conjunction' }).format(off);
  let acc = 0;
  const parts = site.programme.map((p) => { const on = live && mins >= acc && mins < acc + p.mins; acc += p.mins; return { ...p, on }; });
  const current = parts.find((p) => p.on);
  const days = daysBetween(t0, s.date);

  return (
    <>
      <div className="wrap intro">
        <div>
          <p className="greet">{T.t('greet')}</p>
          <h1>{T.t('welcome_h').replace('{start}', site.service.start)}</h1>
        </div>
        <div>
          <p>{T.t('welcome_p')}</p>
          <div className="facts">
            <div className="fact"><span>{T.t('next_service')}</span><b>{s.today ? T.t('today') : T.fmt(s.date, { weekday: 'long', day: 'numeric', month: 'long' })}</b><i>{hours}</i>{away(s.date)}</div>
            {f && <div className="fact"><span>{T.t('next_festival')}</span><b>{T.L(f.name)}</b><i>{T.range(f)}, {T.hours(f)}</i>{away(day(f.date))}</div>}
          </div>
          <div className="sunbar">
            <div className="sb-head">
              <span>{T.t('nav_sunday')}</span>
              {live && current ? <b className="live">{T.t('now_on')}: {T.L(current.title)}</b> : <b>{days > 0 ? T.inDays(days) : T.t('today')}, {site.service.start}</b>}
            </div>
            <div className="sb-track">
              {parts.map((p) => <div key={p.start} className={'seg' + (p.on ? ' on' : '')} style={{ flex: p.mins }}><time>{p.start}</time><span>{T.L(p.title)}</span></div>)}
              {live && <i className="sb-pin" style={{ left: ((mins / total) * 100).toFixed(1) + '%' }} />}
            </div>
            {off.length > 0 && <p className="sb-note">{T.t('no_service').replace('{dates}', offList)}</p>}
          </div>
        </div>
      </div>
      {f?.nights && (
        <div className="wrap">
          <div className="lamp-box">
            <div><h3>{T.t('lamps_h')}</h3><p>{T.range(f)}. {T.t('lamps_p')}</p></div>
            <LampRow festival={f} now={now} T={T} />
          </div>
        </div>
      )}
    </>
  );
}

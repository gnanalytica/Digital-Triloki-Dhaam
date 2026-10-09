import { day, startOf, type T } from '@/lib/i18n';
import type { Festival } from '@/lib/types';
import { LampSVG } from '../Ornament';

/** Nine lamps for a nine-evening festival: one is lit for every evening that has begun. */
export function LampRow({ festival, now, T }: { festival: Festival; now: Date; T: T }) {
  if (!festival.nights) return null;
  const today = startOf(now);
  return (
    <ol className="lamp-row" aria-label={T.L(festival.note)}>
      {Array.from({ length: festival.nights }, (_, i) => {
        const d = day(festival.date); d.setDate(d.getDate() + i);
        return (
          <li key={i} className={'lamp' + (d <= today ? ' lit' : '') + (+d === +today ? ' tonight' : '')}>
            <LampSVG /><b>{d.getDate()}</b><span>{T.fmt(d, { weekday: 'short' })}</span>
          </li>
        );
      })}
    </ol>
  );
}

import type { Festival, FestivalNow } from './types';
import { day, startOf } from './i18n';

/** Today's date in the mandir's own time zone, as YYYY-MM-DD. Used by the server so every page agrees. */
export function todayInAmsterdam(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' }).format(new Date());
}

/** The one weekly service: Sunday 13:00 to 15:30 (content/temple.yml). */
export function nextService(now: Date): { date: Date; today: boolean } {
  const d = startOf(now);
  const today = d.getDay() === 0 && now.getHours() * 60 + now.getMinutes() < 15 * 60 + 30;
  if (!today) d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7));
  return { date: d, today };
}

export function festivalsAt(list: Festival[], now: Date): FestivalNow[] {
  const today = startOf(now);
  return list.map((f) => ({ ...f, past: day(f.end || f.date) < today }));
}
export function upcoming(list: Festival[], now: Date, n = 99): FestivalNow[] {
  return festivalsAt(list, now).filter((f) => !f.past).slice(0, n);
}

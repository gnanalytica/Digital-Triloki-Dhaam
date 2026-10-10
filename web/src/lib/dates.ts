import type { Festival, FestivalNow, Site } from './types';
import { day, startOf } from './i18n';

/** Today's date in the mandir's own time zone, as YYYY-MM-DD. Used by the server so every page agrees. */
export function todayInAmsterdam(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' }).format(new Date());
}

const iso = (d: Date) => d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
const mins = (hhmm: string) => +hhmm.slice(0, 2) * 60 + +hhmm.slice(3, 5);

/** The next Sunday service (times and cancelled Sundays from content/temple.yml). `today` is true until it ends. */
export function nextService(now: Date, service: Site['service']): { date: Date; today: boolean } {
  const d = startOf(now), off = (x: Date) => service.cancelled.includes(iso(x));
  const today = d.getDay() === 0 && !off(d) && now.getHours() * 60 + now.getMinutes() < mins(service.end);
  if (!today) do { d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7)); } while (off(d));
  return { date: d, today };
}
/** Sundays still to come on which there is no day programme. */
export function cancelledAhead(now: Date, service: Site['service']): string[] {
  const today = iso(startOf(now));
  return service.cancelled.filter((x) => x >= today).sort();
}
export const isCancelled = (now: Date, service: Site['service']) => service.cancelled.includes(iso(startOf(now)));

export function festivalsAt(list: Festival[], now: Date): FestivalNow[] {
  const today = startOf(now);
  return list.map((f) => ({ ...f, past: day(f.end || f.date) < today }));
}
export function upcoming(list: Festival[], now: Date, n = 99): FestivalNow[] {
  return festivalsAt(list, now).filter((f) => !f.past).slice(0, n);
}

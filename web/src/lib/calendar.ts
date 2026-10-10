import type { Festival, Site } from './types';
import { day, type T } from './i18n';

const stamp = (d: Date) => d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
function span(f: Festival): [string, string] {
  const a = day(f.date), b = day(f.end || f.date);
  b.setDate(b.getDate() + 1);
  return [stamp(a), stamp(b)];
}
export const place = (site: Site) => `${site.temple.name}, ${site.temple.street}, ${site.temple.postal}`;
/** An all-day entry whose title carries the start time: the programme gives no end time, so none is invented. */
const title = (f: Festival, T: T) => `${T.L(f.name)} (${T.hours(f)})`;

export function googleCalendarURL(f: Festival, site: Site, T: T): string {
  const s = span(f);
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title(f, T)) +
    '&dates=' + s[0] + '/' + s[1] + '&location=' + encodeURIComponent(place(site));
}

/** The year as an iCalendar file. Dates the pandit has not confirmed are left out. */
export function yearICS(site: Site, T: T): string {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mandir Triloki Dhaam//Jaarprogramma//NL', 'X-WR-CALNAME:Mandir Triloki Dhaam ' + site.year];
  for (const f of site.festivals.filter((x) => !x.pending)) {
    const s = span(f);
    lines.push('BEGIN:VEVENT', `UID:${f.id}-${site.year}@trilokidhaam.nl`, `DTSTAMP:${site.year}0101T000000Z`, 'DTSTART;VALUE=DATE:' + s[0],
      'DTEND;VALUE=DATE:' + s[1], 'SUMMARY:' + title(f, T).replace(/,/g, '\\,'), 'LOCATION:' + place(site).replace(/,/g, '\\,'), 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}

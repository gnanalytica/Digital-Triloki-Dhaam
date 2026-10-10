import 'server-only';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import copy from '@/data/site.json';
import type { Ceremony, Course, Festival, ProgrammePart, Reel, Site, Tr, Video } from './types';

// content/ at the root of the repository is the single source of truth for facts: address, contact details,
// service times, the IBAN and every festival date. This module reads those YAML files at build time.
// src/data/site.json only adds what the YAML does not hold: Hindi, standardised spellings, and the wording of
// notes. If the two ever disagree about a fact, the YAML wins.
const CONTENT = path.join(process.cwd(), '..', 'content');
const load = <T>(file: string): T => parse(readFileSync(path.join(CONTENT, file), 'utf8')) as T;

type TempleYml = {
  organisation: { legal_name: string; short_name: string };
  address: { street: string; postal_code: string; city: string; one_line: string };
  contact: { email: string; phone_display: string; phone_e164: string; phone_secondary_display?: string; phone_secondary_e164?: string };
  weekly_service: { start: string; end: string; no_service_dates?: string[]; programme: { start: string; end: string; title: Tr; description: Tr }[] };
  donations: { iban: string; account_holder: string; online_link?: string | null; suggested_amounts?: number[] };
  social: { youtube: string; instagram: string; facebook_group: string };
};
type FestivalYml = {
  id: string; date?: string; dates?: string[]; end_date?: string; start_time?: string; end_time?: string; name: Tr; note?: Tr;
  every_evening?: boolean; verify?: boolean;
};
type FestivalsYml = { year: number; defaults: { start_time: string }; festivals: FestivalYml[] };
type CoursesYml = { courses: { id: string; schedule?: { start: string; end: string }; next_session?: { date: string; theme?: Tr } }[] };

const iso = (v: unknown) => String(v).slice(0, 10);
const minutes = (a: string, b: string) => { const m = (s: string) => +s.slice(0, 2) * 60 + +s.slice(3, 5); return m(b) - m(a); };
// The course ids used in the site copy, where they differ from content/courses.yml.
const COURSE_ALIAS: Record<string, string> = { hindi: 'hindi-classes' };

let cache: Site | null = null;

export function getSite(): Site {
  if (cache) return cache;
  const temple = load<TempleYml>('temple.yml');
  const fest = load<FestivalsYml>('festivals-2026.yml');
  const courses = load<CoursesYml>('courses.yml');
  const wording = new Map(copy.festivals.map((f) => [f.id, f as { name: Tr; note?: Tr }]));

  const festivals: Festival[] = fest.festivals.map((f) => {
    const date = iso(f.date ?? f.dates?.[0]);
    // An end date that is itself unconfirmed is not shown at all.
    const end = f.dates ? iso(f.dates[f.dates.length - 1]) : f.end_date && !f.verify ? iso(f.end_date) : undefined;
    const words = wording.get(f.id);
    const nights = f.every_evening && end ? Math.round((Date.parse(end) - Date.parse(date)) / 864e5) + 1 : undefined;
    return { id: f.id, date, end, time: f.start_time ?? fest.defaults.start_time, until: f.end_time, name: words?.name ?? f.name, note: words?.note ?? f.note, nights, pending: f.verify || undefined };
  }).sort((a, b) => a.date.localeCompare(b.date));

  const programme: ProgrammePart[] = temple.weekly_service.programme.map((p, n) => {
    const words = copy.programme[n];
    return { start: p.start, end: p.end, mins: minutes(p.start, p.end), title: words?.title ?? p.title, desc: words?.desc ?? p.description };
  });

  const byId = new Map(courses.courses.map((c) => [c.id, c]));
  const raw = temple.donations.iban.replace(/\s/g, '');
  const postal = `${temple.address.postal_code} ${temple.address.city}`;

  cache = {
    temple: {
      name: temple.organisation.short_name,
      legalName: temple.organisation.legal_name,
      street: temple.address.street,
      postal,
      phone: temple.contact.phone_display,
      tel: temple.contact.phone_e164,
      email: temple.contact.email,
      iban: raw.replace(/(.{4})/g, '$1 ').trim(),
      ibanRaw: raw,
      phone2: temple.contact.phone_secondary_display,
      tel2: temple.contact.phone_secondary_e164,
      holder: temple.donations.account_holder,
      donateLink: temple.donations.online_link ?? null,
      amounts: temple.donations.suggested_amounts ?? [],
      maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(temple.address.one_line),
      youtube: temple.social.youtube,
      instagram: temple.social.instagram,
      facebook: temple.social.facebook_group,
    },
    service: { start: temple.weekly_service.start, end: temple.weekly_service.end, cancelled: (temple.weekly_service.no_service_dates ?? []).map(iso) },
    programme,
    festivals,
    year: fest.year,
    ceremonies: copy.ceremonies as Ceremony[],
    courses: (copy.courses as Course[]).map((c) => {
      const y = byId.get(COURSE_ALIAS[c.id] ?? c.id), s = y?.schedule;
      const next = y?.next_session ? { date: iso(y.next_session.date), theme: y.next_session.theme } : undefined;
      return { ...c, time: s ? `${s.start} – ${s.end}` : c.time, next };
    }),
    etiquette: copy.etiquette as Tr[],
    videos: copy.videos as Video[],
    reels: copy.instagram as Reel[],
  };
  return cache;
}

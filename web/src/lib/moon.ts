// Moon phases from the average length of a lunar month, counted from the new moon of 6 January 2000.
// Astronomy, good to about half a day. This is NOT the pandit's panchang: tithis and festival dates come from him.
const SYNODIC = 29.530588853;
const REF = Date.UTC(2000, 0, 6, 18, 14) / 864e5;

export type Moon = { type: 'new' | 'full'; date: Date };

export function moons(year: number): Moon[] {
  const out: Moon[] = [];
  const from = Date.UTC(year, 0, 1) / 864e5, to = Date.UTC(year + 1, 0, 1) / 864e5;
  const k = Math.floor((from - REF) / SYNODIC) - 1;
  for (let i = k; i < k + 16; i++) {
    for (const [type, part] of [['new', 0], ['full', 0.5]] as const) {
      const t = REF + (i + part) * SYNODIC;
      if (t < from || t >= to) continue;
      // Kept as a calendar day (the UTC one), so the server and every visitor's browser draw it in the same place.
      const d = new Date(t * 864e5);
      out.push({ type, date: new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) });
    }
  }
  return out;
}

export function moonAt(now: Date): { index: number; lit: number } {
  // Taken at noon on the calendar day, not at the exact instant, so it does not depend on the time zone it is computed in.
  const noon = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12) / 864e5;
  const p = ((((noon - REF) / SYNODIC) % 1) + 1) % 1;
  return { index: Math.round(p * 8) % 8, lit: Math.round(((1 - Math.cos(p * Math.PI * 2)) / 2) * 100) };
}

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
      if (t >= from && t < to) out.push({ type, date: new Date(t * 864e5) });
    }
  }
  return out;
}

export function moonAt(now: Date): { index: number; lit: number } {
  const p = ((((+now / 864e5 - REF) / SYNODIC) % 1) + 1) % 1;
  return { index: Math.round(p * 8) % 8, lit: Math.round(((1 - Math.cos(p * Math.PI * 2)) / 2) * 100) };
}

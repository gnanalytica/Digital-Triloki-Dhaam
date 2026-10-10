export const LANGS = ['nl', 'en', 'hi'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

/** A piece of copy in up to three languages. Dutch is always present and is the fallback. */
export type Tr = { nl: string; en?: string; hi?: string };

export type Festival = {
  id: string;
  /** First day, YYYY-MM-DD. */
  date: string;
  /** Last day, for festivals that span several. */
  end?: string;
  /** Start time, HH:MM. */
  time: string;
  /** End time, HH:MM, where the mandir has given one. */
  until?: string;
  name: Tr;
  note?: Tr;
  /** Number of consecutive evenings, for Navratri. */
  nights?: number;
  /** True while content/ marks the date `verify: true`: shown as "to be confirmed", never as fact. */
  pending?: boolean;
};
export type FestivalNow = Festival & { past: boolean };

export type ProgrammePart = { start: string; end: string; mins: number; title: Tr; desc: Tr };
export type Ceremony = { id: string; name: Tr; gloss?: Tr; desc?: Tr; urgent?: boolean };
export type Course = { id: string; name: Tr; desc: Tr; fixed?: boolean; time?: string; next?: { date: string; theme?: Tr } };
export type Video = { id: string; title: Tr };
export type Reel = { id: string; date: string };

export type Site = {
  temple: {
    name: string; legalName: string; street: string; postal: string; phone: string; tel: string; email: string;
    phone2?: string; tel2?: string;
    iban: string; ibanRaw: string; holder: string; donateLink: string | null; amounts: number[]; maps: string; youtube: string; instagram: string; facebook: string;
  };
  /** The weekly Sunday service. `cancelled` lists Sundays without a day programme, YYYY-MM-DD. */
  service: { start: string; end: string; cancelled: string[] };
  programme: ProgrammePart[];
  festivals: Festival[];
  year: number;
  ceremonies: Ceremony[];
  courses: Course[];
  etiquette: Tr[];
  videos: Video[];
  reels: Reel[];
};

export type KnowledgeItem = { cat: string; title: Tr; verse?: string; roman?: string; body?: Tr };

/**
 * The sections of the site, in menu order. The home page carries all of them as one flowing page, and the menu
 * scrolls to `anchor` there. Each also has a page of its own at /[lang]/[slug], for sharing and for search engines.
 * `label` is a key in the strings.
 */
export const PAGES = [
  { slug: 'visit', anchor: 'wegwijs', label: 'nav_visit' },
  { slug: 'festivals', anchor: 'jaar', label: 'nav_calendar' },
  { slug: 'knowledge', anchor: 'kennis', label: 'nav_learn' },
  { slug: 'lessons', anchor: 'lessen', label: 'les_nav' },
  { slug: 'join', anchor: 'samen', label: 'nav_join' },
  { slug: 'connect', anchor: 'volg', label: 'nav_connect' },
  { slug: 'donate', anchor: 'doneren', label: 'nav_donate' },
] as const;

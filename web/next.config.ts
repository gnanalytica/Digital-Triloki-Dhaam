import type { NextConfig } from 'next';

/**
 * Every page of the old WordPress site (../data/legacy-page-inventory.csv, all 82), mapped to the page of this site
 * that now covers it, so links, bookmarks and search results from before the move keep working. WordPress served
 * them all at /slug/. Pages written in English go to /en, everything else to /nl, the default.
 */
const LEGACY: Record<string, string[]> = {
  '/nl': ['home', 'home-3', 'welkom', 'about', 'beleving', 'fotos', 'uitnodigingen', 'blog'],
  '/en': ['home-2', 'home-4', '416-2', 'about-2', 'impact', 'sample-page', 'terms-and-conditions'],
  '/nl/visit': ['zondagdienst', 'openingstijden', 'routebeschrijving', 'contact', 'contact-2', 'contact-4', 'diensten', 'diensten-2', 'rituelen', 'geestelijk'],
  '/en/visit': ['contact-3', 'contact-5', 'faq', 'faq-2'],
  '/nl/festivals': ['jaarprogramma', 'festivals', 'activiteiten'],
  '/en/festivals': ['kalender'],
  '/nl/knowledge': [
    'kennis', 'kennis-2', 'kennis-3', 'mantras', 'gayatri-mantra', 'shiva-mantra', 'durga-mantra', 'durga-mantra-2',
    'aartis', 'shiva-aarti', 'vishnu-aarti', 'durga-aarti', 'krishna-aarti', 'hanuman-aarti', 'geschriften', 'vedas',
    'ramayan', 'mahabharat-bhagavat-gita', 'algemene-beginselen', 'yagya', 'puja', 'vedische-astrologie',
    'overige-hoogtijdagen', 'uitleg-hoogtijdagen', 'maha-shivratri', 'nauratri', 'hanuman-jayanti',
  ],
  '/nl/lessons': ['educatie', 'cursussen', 'muziekles', 'harmoniumles', 'dholles', 'yoga', 'hindiles'],
  '/nl/join': ['vrijwilligers'],
  '/en/join': ['vrijwilligers-2', 'get-involved'],
  '/nl/donate': ['donatie', 'donatiegegevens', 'winkel', 'winkelwagen', 'afrekenen', 'mijn-account', 'shop'],
  '/en/donate': ['donate'],
  '/nl/connect': ['social-media', 'links'],
  '/en/connect': ['media', 'media-2'],
};

const config: NextConfig = {
  // content/ lives one level up, beside this app; it is read at build time by src/lib/content.ts.
  outputFileTracingRoot: new URL('..', import.meta.url).pathname,
  async redirects() {
    return [
      // Dutch is the default language (content/temple.yml -> web.default_language).
      { source: '/', destination: '/nl', permanent: false },
      ...Object.entries(LEGACY).flatMap(([destination, slugs]) =>
        slugs.map((slug) => ({ source: `/${slug}`, destination, permanent: true })),
      ),
    ];
  },
};

export default config;

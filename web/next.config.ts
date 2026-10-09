import type { NextConfig } from 'next';

const config: NextConfig = {
  // content/ lives one level up, beside this app; it is read at build time by src/lib/content.ts.
  outputFileTracingRoot: new URL('..', import.meta.url).pathname,
  async redirects() {
    // Dutch is the default language (content/temple.yml -> web.default_language).
    return [{ source: '/', destination: '/nl', permanent: false }];
  },
};

export default config;

import type { MetadataRoute } from 'next';
import { PAGES } from '@/lib/pages';
import { LANGS } from '@/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL ?? '';
  return LANGS.flatMap((lang) => ['', ...PAGES.map((p) => '/' + p.slug)].map((path) => ({ url: `${base}/${lang}${path}` })));
}

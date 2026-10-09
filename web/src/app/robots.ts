import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Closed to search engines until the content has been checked and SITE_INDEXABLE=1 is set.
  return process.env.SITE_INDEXABLE === '1'
    ? { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: process.env.SITE_URL ? `${process.env.SITE_URL}/sitemap.xml` : undefined }
    : { rules: { userAgent: '*', disallow: '/' } };
}

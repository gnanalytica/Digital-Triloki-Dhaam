import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSite } from './content';
import { todayInAmsterdam } from './dates';
import { tr } from './i18n';
import { isLang } from './types';

export type PageProps = { params: Promise<{ lang: string }> };

/** What every page needs: the language, the content, and today's date in the mandir's time zone. */
export async function pageContext({ params }: PageProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return { lang, site: getSite(), today: todayInAmsterdam(), T: tr(lang) };
}

/** A page title taken from the same string as the page's own heading. */
export const titled = (key: string) => async ({ params }: PageProps): Promise<Metadata> => {
  const { lang } = await params;
  return isLang(lang) ? { title: tr(lang).t(key) } : {};
};

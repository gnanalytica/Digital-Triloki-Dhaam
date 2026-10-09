import { yearICS } from '@/lib/calendar';
import { getSite } from '@/lib/content';
import { tr } from '@/lib/i18n';
import { LANGS, isLang } from '@/lib/types';

export const dynamic = 'force-static';
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

/** The year's programme as a calendar file people can import or subscribe to. Unconfirmed dates are left out. */
export async function GET(_: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) return new Response('Not found', { status: 404 });
  return new Response(yearICS(getSite(), tr(lang)), { headers: { 'content-type': 'text/calendar; charset=utf-8' } });
}

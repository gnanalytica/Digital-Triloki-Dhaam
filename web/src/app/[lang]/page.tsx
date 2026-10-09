import Link from 'next/link';
import { PAGES } from '@/lib/pages';
import { Garland } from '@/components/Ornament';
import { Follow } from '@/components/sections/Follow';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { RouteTabs } from '@/components/sections/RouteTabs';
import { Mural } from '@/components/sections/Small';
import { Year } from '@/components/sections/Year';
import { pageContext, type PageProps } from '@/lib/page';

// Dates on the page (next service, next festival, lit lamps) are refreshed hourly on the server and live in the browser.
export const revalidate = 3600;

export default async function Home(props: PageProps) {
  const { lang, site, today, T } = await pageContext(props);
  return (
    <main id="main">
      <Hero lang={lang} />
      <Intro lang={lang} site={site} today={today} />
      <Garland />
      <RouteTabs lang={lang} site={site} today={today} />
      <Mural image="altar" />
      <Year lang={lang} site={site} today={today} />
      <Follow lang={lang} site={site} today={today} />
      <div className="wrap" style={{ paddingBottom: 40 }}>
        <h3 className="sub">{T.t('home_more')}</h3>
        <div className="page-links">{PAGES.map((p) => <Link key={p.slug} className="btn btn-line" href={`/${lang}/${p.slug}`}>{T.t(p.label)}</Link>)}</div>
      </div>
    </main>
  );
}

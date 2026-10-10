import { Garland } from '@/components/Ornament';
import { Donate } from '@/components/sections/Donate';
import { Follow } from '@/components/sections/Follow';
import { Hero } from '@/components/sections/Hero';
import { Inside } from '@/components/sections/Inside';
import { Intro } from '@/components/sections/Intro';
import { Knowledge } from '@/components/sections/Knowledge';
import { Lessons } from '@/components/sections/Lessons';
import { More } from '@/components/sections/More';
import { RouteTabs } from '@/components/sections/RouteTabs';
import { Faq, Mural, Puja } from '@/components/sections/Small';
import { Together } from '@/components/sections/Together';
import { Year } from '@/components/sections/Year';
import { pageContext, type PageProps } from '@/lib/page';

// Dates on the page (next service, next festival, lit lamps) are refreshed hourly on the server and live in the browser.
export const revalidate = 3600;

/** The whole site as one flowing page. Every section also has a page of its own (see src/lib/pages.ts). */
export default async function Home(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  const all = { lang, site, today };
  return (
    <main id="main">
      <Hero lang={lang} />
      <Intro {...all} />
      <Garland />
      <RouteTabs {...all} />
      <Inside lang={lang} site={site} />
      <Mural image="altar" />
      <Year {...all} />
      <Knowledge lang={lang} today={today} />
      <Lessons lang={lang} site={site} />
      <Mural image="shiva" variant="b" />
      <Together {...all} />
      <Follow {...all} />
      <Puja lang={lang} site={site} />
      <Faq lang={lang} site={site} />
      <More {...all} />
      <Donate lang={lang} site={site} />
    </main>
  );
}

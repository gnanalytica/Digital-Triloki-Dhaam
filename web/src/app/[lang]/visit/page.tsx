import { Inside } from '@/components/sections/Inside';
import { RouteTabs } from '@/components/sections/RouteTabs';
import { Faq } from '@/components/sections/Small';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('in_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Inside lang={lang} site={site} />
      <RouteTabs lang={lang} site={site} today={today} />
      <Faq lang={lang} />
    </main>
  );
}

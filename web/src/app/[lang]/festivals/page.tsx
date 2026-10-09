import { Follow } from '@/components/sections/Follow';
import { Year } from '@/components/sections/Year';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('year_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Year lang={lang} site={site} today={today} />
      <Follow lang={lang} site={site} today={today} />
    </main>
  );
}

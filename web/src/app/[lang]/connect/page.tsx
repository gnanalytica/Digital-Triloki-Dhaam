import { Connect } from '@/components/sections/Connect';
import { Follow } from '@/components/sections/Follow';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('con_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Connect lang={lang} site={site} />
      <Follow lang={lang} site={site} today={today} />
    </main>
  );
}

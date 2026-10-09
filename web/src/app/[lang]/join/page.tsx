import { More } from '@/components/sections/More';
import { Puja } from '@/components/sections/Small';
import { Together } from '@/components/sections/Together';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('join_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Together lang={lang} site={site} today={today} />
      <More lang={lang} site={site} today={today} />
      <Puja lang={lang} site={site} />
    </main>
  );
}

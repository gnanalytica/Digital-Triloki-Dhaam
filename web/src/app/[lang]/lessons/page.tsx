import { Lessons } from '@/components/sections/Lessons';
import { Faq } from '@/components/sections/Small';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('les_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Lessons lang={lang} site={site} />
      <Faq lang={lang} site={site} />
    </main>
  );
}

import { Donate } from '@/components/sections/Donate';
import { Puja } from '@/components/sections/Small';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('donate_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Donate lang={lang} site={site} />
      <Puja lang={lang} site={site} />
    </main>
  );
}

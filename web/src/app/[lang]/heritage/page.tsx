import { Heritage } from '@/components/sections/Heritage';
import { Mural } from '@/components/sections/Small';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('her_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Heritage lang={lang} site={site} />
      <Mural image="shiva" variant="b" />
    </main>
  );
}

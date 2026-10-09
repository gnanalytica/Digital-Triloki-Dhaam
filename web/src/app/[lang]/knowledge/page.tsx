import { Knowledge } from '@/components/sections/Knowledge';
import { Lessons } from '@/components/sections/Lessons';
import { pageContext, titled, type PageProps } from '@/lib/page';

export const revalidate = 3600;
export const generateMetadata = titled('k_h');

export default async function Page(props: PageProps) {
  const { lang, site, today } = await pageContext(props);
  return (
    <main id="main">
      <Knowledge lang={lang} today={today} />
      <Lessons lang={lang} site={site} />
    </main>
  );
}

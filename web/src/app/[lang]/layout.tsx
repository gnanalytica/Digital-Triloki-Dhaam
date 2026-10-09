import type { Metadata, Viewport } from 'next';
import { Palanquin, Tiro_Devanagari_Hindi } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { GlossPopover } from '@/components/GlossPopover';
import { Header } from '@/components/Header';
import { Sprite } from '@/components/Ornament';
import { getSite } from '@/lib/content';
import { tr } from '@/lib/i18n';
import { LANGS, isLang } from '@/lib/types';
import '../globals.css';

const display = Tiro_Devanagari_Hindi({ weight: '400', style: ['normal', 'italic'], subsets: ['latin', 'devanagari'], variable: '--font-display', display: 'swap' });
const body = Palanquin({ weight: ['400', '500', '600', '700'], subsets: ['latin', 'devanagari'], variable: '--font-body', display: 'swap' });

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));
export const viewport: Viewport = { themeColor: '#7a1528' };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const T = tr(lang), site = getSite();
  return {
    metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
    title: { default: `${site.temple.name} Eindhoven`, template: `%s · ${site.temple.name}` },
    description: T.t('welcome_p'),
    alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}`])) },
    icons: { icon: '/assets/logo.png' },
    // Not indexed until the content has been checked: see .env.example.
    robots: process.env.SITE_INDEXABLE === '1' ? undefined : { index: false, follow: false },
  };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const T = tr(lang), site = getSite();
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">{T.t('skip')}</a>
        <Sprite />
        <Header lang={lang} site={site} />
        {children}
        <Footer lang={lang} site={site} />
        <GlossPopover />
      </body>
    </html>
  );
}

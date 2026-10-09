'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { tr } from '@/lib/i18n';
import { PAGES } from '@/lib/pages';
import { LANGS, type Lang, type Site } from '@/lib/types';

const NAMES: Record<Lang, string> = { nl: 'Nederlands', en: 'English', hi: 'हिंदी' };

export function Header({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), path = usePathname() || `/${lang}`;
  const rest = path.replace(/^\/(nl|en|hi)(?=\/|$)/, '');
  const [read, setRead] = useState(0), [far, setFar] = useState(false);

  // The gold line under the header tracks how far down the page the reader is.
  useEffect(() => {
    let ticking = false;
    const measure = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setRead(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setFar(window.scrollY > window.innerHeight);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(measure); } };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [path]);

  return (
    <>
      <header className="top small" id="top">
        <div className="progress" aria-hidden="true" style={{ transform: `scaleX(${read})` }} />
        <div className="wrap top-row">
          <Link className="brand" href={`/${lang}`} aria-label={site.temple.name}>
            <span className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.png" alt={site.temple.name} width={385} height={400} />
              <span className="shine" aria-hidden="true" />
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            {PAGES.map((p) => (
              <Link key={p.slug} href={`/${lang}/${p.slug}`} aria-current={rest === `/${p.slug}` ? 'page' : undefined}>{T.t(p.label)}</Link>
            ))}
          </nav>
          <div className="icons">
            <a href={site.temple.youtube} aria-label="YouTube"><svg><use href="#ic-yt-red" /></svg></a>
            <a href={site.temple.instagram} aria-label="Instagram"><svg><use href="#ic-ig-color" /></svg></a>
            <a href={site.temple.facebook} aria-label="Facebook"><svg><use href="#ic-fb-color" /></svg></a>
          </div>
          <div className="langs" role="group" aria-label="Taal / Language / भाषा">
            {LANGS.map((l) => <Link key={l} href={`/${l}${rest}`} lang={l} hrefLang={l} aria-current={l === lang ? 'true' : undefined}>{NAMES[l]}</Link>)}
          </div>
        </div>
      </header>
      <button className="to-top" type="button" hidden={!far} aria-label={T.t('to_top')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
}

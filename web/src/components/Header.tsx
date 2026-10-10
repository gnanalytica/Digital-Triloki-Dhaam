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
  const home = rest === '';
  const [read, setRead] = useState(0), [far, setFar] = useState(false), [here, setHere] = useState<string | null>(null);

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

  // Arriving on the home page from another page with a section in the address (/nl#jaar): go to that section once
  // the page has been laid out.
  useEffect(() => {
    const id = home ? decodeURIComponent(window.location.hash.slice(1)) : '';
    if (!id) return;
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    const timers = [setTimeout(go, 80), setTimeout(go, 600)];
    return () => timers.forEach(clearTimeout);
  }, [home, path]);

  // On the home page the menu marks the section the reader is in.
  useEffect(() => {
    setHere(null);
    if (!home) return;
    const spy = new IntersectionObserver((entries) => {
      for (const en of entries) if (en.isIntersecting) setHere(en.target.id);
    }, { rootMargin: '-45% 0px -50% 0px' });
    for (const p of PAGES) { const el = document.getElementById(p.anchor); if (el) spy.observe(el); }
    return () => spy.disconnect();
  }, [home, path]);

  // On the home page the menu scrolls rather than navigates, whatever else is in the address (?route=…).
  function jump(ev: React.MouseEvent, anchor: string) {
    const el = home ? document.getElementById(anchor) : null;
    if (!el) return;
    ev.preventDefault();
    window.history.pushState(null, '', `/${lang}#${anchor}`);
    el.scrollIntoView();
  }

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
            <Link href={`/${lang}`} aria-current={home && !here ? 'page' : undefined} onClick={(ev) => { if (!home) return; ev.preventDefault(); window.history.replaceState(null, '', `/${lang}`); window.scrollTo({ top: 0 }); }}>{T.t('nav_home')}</Link>
            {PAGES.map((p) => (
              <Link key={p.slug} href={`/${lang}#${p.anchor}`} onClick={(ev) => jump(ev, p.anchor)} aria-current={(home ? here === p.anchor : rest === `/${p.slug}`) ? 'page' : undefined}>{T.t(p.label)}</Link>
            ))}
          </nav>
          <div className="icons">
            <a href={site.temple.youtube} aria-label="YouTube"><svg><use href="#ic-yt-red" /></svg></a>
            <a href={site.temple.instagram} aria-label="Instagram"><svg><use href="#ic-ig-color" /></svg></a>
            <a href={site.temple.facebook} aria-label="Facebook"><svg><use href="#ic-fb-color" /></svg></a>
            {site.temple.whatsappGroup && <a href={site.temple.whatsappGroup} aria-label="WhatsApp"><svg><use href="#ic-wa-color" /></svg></a>}
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

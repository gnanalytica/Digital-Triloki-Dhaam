'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Lang, Site } from '@/lib/types';
import { Intro } from './sections/Intro';

/**
 * The wheel. On the home page a copy of the opening screen sits below the footer; when it reaches the place where
 * the real one sits, the page is back at its beginning and simply carries on. The copy is decoration only: it is
 * added in the browser, hidden from assistive technology and cannot be focused.
 */
export function Wheel({ lang, site, today }: { lang: Lang; site: Site; today: string }) {
  const home = usePathname() === `/${lang}`;
  const [mounted, setMounted] = useState(false), loop = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!home || !mounted) return;
    let ticking = false;
    const check = () => {
      ticking = false;
      const el = loop.current, top = document.getElementById('top');
      if (!el || !top || window.scrollY < el.offsetTop - top.offsetHeight) return;
      window.scrollTo({ top: 0, behavior: 'instant' });
      const film = document.querySelector<HTMLVideoElement>('main .film video');
      if (film) { film.currentTime = 0; if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) film.play().catch(() => {}); }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [home, mounted]);

  if (!home || !mounted) return null;
  return (
    <div className="loop" ref={loop} aria-hidden="true" inert>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="film"><img src="/assets/hero-film-first.jpg" alt="" /></div>
      <Intro lang={lang} site={site} today={today} />
    </div>
  );
}

'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LANGS, type Lang } from '@/lib/types';

/**
 * Projector mode, for showing the site on a screen in the mandir with nobody at the keyboard. Open the home page
 * with ?screen in the address:
 *
 *   /nl?screen            Dutch, then English, alternating each time round
 *   /nl?screen=nl         Dutch only        (any list works: ?screen=nl,en,hi)
 *   /nl?screen&speed=90   faster; the default is 60 pixels a second
 *
 * The page scrolls itself slowly from top to bottom, fades, and starts again in the next language. The menu, the
 * forms and the buttons are hidden (see html.screen in globals.css), since nobody can use them. Escape, or any
 * click, leaves projector mode.
 */
export function ScreenMode({ lang }: { lang: Lang }) {
  const path = usePathname();
  const [fading, setFading] = useState(false), [on, setOn] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!query.has('screen') || path !== `/${lang}`) return;
    const wanted = (query.get('screen') || 'nl,en').split(',').filter((l): l is Lang => (LANGS as readonly string[]).includes(l));
    const langs = wanted.length ? wanted : [lang];
    const speed = Math.min(400, Math.max(10, Number(query.get('speed')) || 60));
    const root = document.documentElement;
    root.classList.add('screen');
    setOn(true);

    let frame = 0, last = 0, y = 0, done = false;
    const end = () => document.documentElement.scrollHeight - window.innerHeight;
    const step = (now: number) => {
      // Long gaps (a sleeping tab) are not caught up in one jump.
      const dt = last ? Math.min(100, now - last) : 0;
      last = now;
      y += (speed * dt) / 1000;
      window.scrollTo(0, y);
      if (y >= end() - 1 && !done) { done = true; setFading(true); setTimeout(next, 1400); return; }
      frame = requestAnimationFrame(step);
    };
    const next = () => {
      const to = langs[(langs.indexOf(lang) + 1) % langs.length];
      const keep = window.location.search;
      if (to === lang) { y = 0; window.scrollTo(0, 0); done = false; last = 0; setFading(false); frame = requestAnimationFrame(step); }
      else window.location.assign(`/${to}${keep}`);
    };
    // Let the film play for a moment before the page starts to move.
    const start = setTimeout(() => { frame = requestAnimationFrame(step); }, 6000);

    const leave = () => { window.location.assign(`/${lang}`); };
    const onKey = (ev: KeyboardEvent) => { if (ev.key === 'Escape') leave(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', leave);
    return () => {
      clearTimeout(start); cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKey); window.removeEventListener('click', leave);
      root.classList.remove('screen');
    };
  }, [lang, path]);

  return on ? <div className={'screen-fade' + (fading ? ' on' : '')} aria-hidden="true" /> : null;
}

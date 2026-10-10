'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { tr } from '@/lib/i18n';
import { LANGS, type Lang, type Site } from '@/lib/types';

/**
 * Projector mode, for showing the site on a screen in the mandir with nobody at the keyboard. Open the home page
 * with ?screen in the address:
 *
 *   /nl?screen            Dutch, then English, alternating each time round
 *   /nl?screen=nl         Dutch only        (any list works: ?screen=nl,en,hi)
 *   /nl?screen&speed=90   faster; the default is 60 pixels a second
 *
 * The page scrolls itself slowly from top to bottom, then shows a closing screen with large QR codes (the WhatsApp
 * group, the website, and the donation link once there is one) for people in the room to scan, and starts again
 * in the next language. The menu, the
 * forms and the buttons are hidden (see html.screen in globals.css), since nobody can use them. Escape, or any
 * click, leaves projector mode.
 */
const CLOSING_SECONDS = 18;

export function ScreenMode({ lang, site }: { lang: Lang; site: Site }) {
  const path = usePathname(), T = tr(lang);
  const [fading, setFading] = useState(false), [on, setOn] = useState(false);
  const [codes, setCodes] = useState<{ label: string; svg: string }[]>([]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!query.has('screen') || path !== `/${lang}`) return;
    const wanted = (query.get('screen') || 'nl,en').split(',').filter((l): l is Lang => (LANGS as readonly string[]).includes(l));
    const langs = wanted.length ? wanted : [lang];
    const speed = Math.min(400, Math.max(10, Number(query.get('speed')) || 60));
    const root = document.documentElement;
    root.classList.add('screen');
    setOn(true);

    // The codes for the closing screen, drawn in the browser so the website's own address is always the right one.
    const links = [
      ...(site.temple.whatsappGroup ? [{ label: T.t('con_group'), url: site.temple.whatsappGroup }] : []),
      { label: T.t('screen_site'), url: `${window.location.origin}/${lang}` },
      ...(site.temple.donateLink ? [{ label: T.t('screen_give'), url: site.temple.donateLink.replace('{amount}', '') }] : []),
    ];
    let alive = true;
    import('qrcode').then(async (QR) => {
      const made = await Promise.all(links.map(async (l) => ({ label: l.label, svg: await QR.toString(l.url, { type: 'svg', margin: 1, errorCorrectionLevel: 'M' }) })));
      if (alive) setCodes(made);
    }).catch(() => {});

    let frame = 0, last = 0, y = 0, done = false;
    const end = () => document.documentElement.scrollHeight - window.innerHeight;
    const step = (now: number) => {
      // Long gaps (a sleeping tab) are not caught up in one jump.
      const dt = last ? Math.min(100, now - last) : 0;
      last = now;
      y += (speed * dt) / 1000;
      window.scrollTo(0, y);
      if (y >= end() - 1 && !done) { done = true; setFading(true); setTimeout(next, CLOSING_SECONDS * 1000); return; }
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
      alive = false; clearTimeout(start); cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKey); window.removeEventListener('click', leave);
      root.classList.remove('screen');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, path]);

  if (!on) return null;
  return (
    <div className={'screen-fade' + (fading ? ' on' : '')} aria-hidden="true">
      <div className="screen-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="" />
        <h2>{T.t('con_h')}</h2>
        <p>{T.t('screen_scan')}</p>
        <div className="screen-codes">
          {codes.map((c) => <figure key={c.label}><div dangerouslySetInnerHTML={{ __html: c.svg }} /><figcaption>{c.label}</figcaption></figure>)}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { tr } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

/**
 * The opening film. It loops for as long as the page is open, so it has a pause control, and it does not start
 * by itself for visitors who ask for reduced motion.
 */
export function Hero({ lang }: { lang: Lang }) {
  const T = tr(lang), film = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const v = film.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause(); else v.play().catch(() => {});
    setPaused(v.paused);
  }, []);
  return (
    <div className="film">
      <video ref={film} src="/assets/hero-film.mp4" poster="/assets/hero-film-first.jpg" muted loop playsInline preload="metadata"
        aria-label={T.t('film_label')} onPlay={() => setPaused(false)} onPause={() => setPaused(true)} />
      <button className="film-toggle" type="button" onClick={() => { const v = film.current; if (v) { if (v.paused) v.play(); else v.pause(); } }}>
        {T.t(paused ? 'film_play' : 'film_pause')}
      </button>
    </div>
  );
}

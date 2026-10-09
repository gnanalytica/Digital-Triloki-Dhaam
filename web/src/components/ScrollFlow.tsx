'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ease = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };

/**
 * Ties each section's entrance to the scroll position. As a section rises into view its content fades up, its
 * heading slides in and its ornament turns; scrolling back up plays the same movement in reverse, because the
 * animation is a function of where the page is, not of time. Two numbers are written to each section as CSS
 * variables and globals.css does the rest:
 *   --p  0 → 1 while the section's top travels up the lower part of the screen (entering)
 *   --q  1 → 0 while its bottom leaves through the top of the screen (leaving)
 * Not applied for visitors who ask for reduced motion; without script everything is simply visible.
 */
export function ScrollFlow() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const parts = Array.from(document.querySelectorAll<HTMLElement>('main > section, main > .mural, main > .garland, body > .garland, footer'));
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of parts) {
        const r = el.getBoundingClientRect();
        if (r.top > vh * 1.2 || r.bottom < -vh * 0.2) continue;
        // Whatever is on the first screen when the page opens is already there: it does not make an entrance.
        const first = r.top + window.scrollY < vh * 0.9;
        el.style.setProperty('--p', first ? '1' : ease((vh - r.top) / (vh * 0.55)).toFixed(3));
        el.style.setProperty('--q', ease(r.bottom / (vh * 0.3)).toFixed(3));
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    for (const el of parts) { el.style.setProperty('--p', '0'); el.style.setProperty('--q', '1'); }
    root.classList.add('flow');
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      root.classList.remove('flow');
      for (const el of parts) { el.style.removeProperty('--p'); el.style.removeProperty('--q'); }
    };
  }, [path]);
  return null;
}

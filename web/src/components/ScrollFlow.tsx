'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ease = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };

// The blocks inside a section that make their own entrance and exit.
const ITEMS = [
  '.fact', '.sunbar', '.lamp-box', '.arcade', '.panel', '.murtis > *', '.person', '.practical > div', '.find', '.year > *', '.moon-line',
  '.gallery', '.motd', '.chips', '.entry', '.lesson', '.trio > div', '.duo > div', '.voices', '.accounts', '.feed-chips', '.card',
  '.shop > *', '.faq-list details', '.wish', '.give > div', '.channel', '.foot > div',
].map((s) => `main ${s}, footer ${s}`).join(', ');

/**
 * Ties the page's movement to the scroll position, so it plays forwards scrolling down and backwards scrolling up.
 * Numbers between 0 and 1 are written to elements as CSS variables and globals.css does the rest.
 *
 * On each section (and mural, divider, footer):
 *   --p  0 → 1 while its top travels up the lower part of the screen (entering)
 *   --m  0 → 1 across its whole passage through the screen (while it is being read: ornament turns, patterns drift)
 *   --q  1 → 0 while its bottom leaves through the top of the screen (leaving)
 * On each block inside a section (cards, panels, columns; class "fi"):
 *   --ip, --iq  the same entering and leaving, from the block's own position, with blocks further right slightly later
 *
 * Not applied for visitors who ask for reduced motion; without script everything is simply visible.
 */
export function ScrollFlow() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const touched = new Set<HTMLElement>();
    const set = (el: HTMLElement, name: string, value: number) => { el.style.setProperty(name, value.toFixed(3)); touched.add(el); };
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight, vw = window.innerWidth, y = window.scrollY;
      for (const el of document.querySelectorAll<HTMLElement>('main > section, main > .mural, main > .garland, body > .garland, footer')) {
        const r = el.getBoundingClientRect();
        if (r.top > vh * 1.3 || r.bottom < -vh * 0.3) continue;
        // Whatever is on the first screen when the page opens is already there: it does not make an entrance.
        const first = r.top + y < vh * 0.9;
        set(el, '--p', first ? 1 : ease((vh - r.top) / (vh * 0.55)));
        set(el, '--m', Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))));
        set(el, '--q', ease(r.bottom / (vh * 0.45)));
      }
      for (const el of document.querySelectorAll<HTMLElement>(ITEMS)) {
        const r = el.getBoundingClientRect();
        if (r.top > vh * 1.3 || r.bottom < -vh * 0.3) { if (!el.classList.contains('fi')) { el.classList.add('fi'); set(el, '--ip', r.top > vh ? 0 : 1); set(el, '--iq', 1); } continue; }
        el.classList.add('fi');
        const first = r.top + y < vh * 0.9;
        set(el, '--ip', first ? 1 : ease((vh - r.top) / (vh * 0.32) - (r.left / vw) * 0.45));
        set(el, '--iq', ease(r.bottom / (vh * 0.2)));
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    root.classList.add('flow');
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Content that appears later (a tab, a filter, "more") joins in on the next pass.
    const watch = new MutationObserver(onScroll);
    const main = document.querySelector('main');
    if (main) watch.observe(main, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      watch.disconnect();
      root.classList.remove('flow');
      for (const el of touched) { for (const v of ['--p', '--m', '--q', '--ip', '--iq']) el.style.removeProperty(v); el.classList.remove('fi'); }
    };
  }, [path]);
  return null;
}

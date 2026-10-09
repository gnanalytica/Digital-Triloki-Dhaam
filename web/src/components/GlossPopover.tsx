'use client';
import { useEffect, useState } from 'react';

type Open = { word: string; def: string; left: number; top: number };

/** One popover for the whole page: shows the explanation of whichever glossary term was last tapped. */
export function GlossPopover() {
  const [open, setOpen] = useState<Open | null>(null);
  useEffect(() => {
    const click = (ev: MouseEvent) => {
      const term = (ev.target as Element).closest<HTMLElement>('.term');
      if (!term || !term.dataset.def) { if (!(ev.target as Element).closest('.gloss')) setOpen(null); return; }
      const r = term.getBoundingClientRect();
      const width = Math.min(300, document.documentElement.clientWidth - 24);
      setOpen({
        word: term.textContent || '', def: term.dataset.def,
        left: Math.max(12, Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - width - 12)),
        top: r.bottom + window.scrollY + 8,
      });
    };
    const key = (ev: KeyboardEvent) => { if (ev.key === 'Escape') setOpen(null); };
    document.addEventListener('click', click);
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('click', click); document.removeEventListener('keydown', key); };
  }, []);
  if (!open) return null;
  return <div className="gloss" role="tooltip" style={{ left: open.left, top: open.top }}><b>{open.word}</b>{open.def}</div>;
}

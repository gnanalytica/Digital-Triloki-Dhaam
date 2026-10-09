import heritage from '@/data/heritage.json';
import type { Lang, Tr } from '@/lib/types';

const GLOSSARY = heritage.glossary as Record<string, Tr>;
const WORDS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
const FIND = new RegExp('(^|[^A-Za-zÀ-ÿ])(' + WORDS.join('|') + ')(?![A-Za-zÀ-ÿ])', 'gi');

/**
 * Running text in which words a newcomer may not know (puja, aarti, prasad…) get a dotted underline; tapping one
 * explains it (see GlossPopover). Not applied in Hindi, where these are ordinary words.
 */
export function G({ lang, children }: { lang: Lang; children: string }) {
  if (lang === 'hi') return <>{children}</>;
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const hit of children.matchAll(FIND)) {
    const at = hit.index + hit[1].length, word = hit[2];
    out.push(children.slice(last, at));
    out.push(<button key={at} type="button" className="term" data-term={word.toLowerCase()} data-def={GLOSSARY[word.toLowerCase()]?.[lang] ?? GLOSSARY[word.toLowerCase()]?.nl}>{word}</button>);
    last = at + word.length;
  }
  out.push(children.slice(last));
  return <>{out}</>;
}

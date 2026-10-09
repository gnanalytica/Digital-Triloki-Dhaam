import extras from '@/data/extras.json';
import { tr } from '@/lib/i18n';
import type { Lang, Site, Tr } from '@/lib/types';
import { G } from '../Gloss';
import { Ph } from '../Ph';

const WA_ICON = 'M12 3a9 9 0 0 0-7.7 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3zm0 1.800a7.200 7.200 0 1 1-3.700 13.400l-.3-.2-2.400.6.7-2.300-.2-.3A7.200 7.200 0 0 1 12 4.800zm-3 3.400c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.100s.9 2.500 1 2.600c.1.200 1.800 2.800 4.400 3.800 2.200.9 2.600.7 3.100.6.5 0 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.2-.2-.5-.3l-1.700-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.200-.3.200-.5.1-.3-.1-1.100-.4-2-1.300-.8-.7-1.300-1.500-1.400-1.800-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.5.1-.1 0-.3 0-.5l-.8-1.800c-.2-.4-.4-.4-.5-.4z';
export const whatsappURL = (site: Site, text: string) => `https://wa.me/${site.temple.tel.replace('+', '')}?text=${encodeURIComponent(text)}`;
export const WhatsAppIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d={WA_ICON} /></svg>;

/** Items for a puja, by WhatsApp. The range itself has to come from the mandir. */
export function Puja({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang);
  return (
    <section className="band band-shop" id="puja">
      <div className="wrap">
        <h2>{T.t('shop_h')}</h2>
        <div className="shop">
          <div>
            <p className="lead"><G lang={lang}>{T.t('shop_p')}</G></p>
            <p className="shop-actions">
              <a className="btn btn-wa" target="_blank" rel="noopener" href={whatsappURL(site, T.t('shop_msg'))}><WhatsAppIcon />{T.t('shop_btn')}</a>
              <span>{T.t('shop_or')} {site.temple.phone}</span>
            </p>
          </div>
          <Ph T={T} className="frames">{[1, 2, 3, 4].map((n) => <div key={n} className="frame" />)}<p>{T.t('shop_ph')}</p></Ph>
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Lang }) {
  const T = tr(lang);
  return (
    <section className="band" id="faq">
      <div className="wrap">
        <h2>{T.t('faq_h')}</h2>
        <div className="faq-list">
          {(extras.faq as { q: Tr; a: Tr }[]).map((f) => <details key={f.q.nl}><summary>{T.L(f.q)}</summary><p><G lang={lang}>{T.L(f.a)}</G></p></details>)}
        </div>
      </div>
    </section>
  );
}

/** The two photographs of the mandir used as tinted bands between sections. */
export function Mural({ image, variant }: { image: 'altar' | 'shiva'; variant?: 'b' }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <div className={'mural' + (variant ? ' mural-b' : '')} aria-hidden="true"><img src={`/assets/${image}.jpg`} alt="" loading="lazy" /></div>;
}

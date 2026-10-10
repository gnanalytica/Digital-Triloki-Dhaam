import QRCode from 'qrcode';
import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { Ph } from '../Ph';
import { whatsappURL } from './Small';

/** A QR code for a link, drawn at build time. The code is also the link, so it works by tap as well as by scan. */
async function Code({ url, label }: { url: string; label: string }) {
  const svg = await QRCode.toString(url, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#2b1b24', light: '#ffffff' } });
  return <a className="qr-link" href={url} target="_blank" rel="noopener" aria-label={label} dangerouslySetInnerHTML={{ __html: svg }} />;
}

/**
 * Every way to stay in touch, each with a QR code: the social accounts, the WhatsApp group and the two WhatsApp numbers.
 * TikTok is waiting for its link from the mandir.
 */
export async function Connect({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), x = site.temple;
  const channels = [
    { name: 'YouTube', handle: '@' + x.youtube.split('@')[1], url: x.youtube },
    { name: 'Instagram', handle: '@' + x.instagram.replace(/\/$/, '').split('/').pop(), url: x.instagram },
    { name: T.t('s_fb_name'), handle: T.t('feed_private'), url: x.facebook },
    ...(x.whatsappGroup ? [{ name: T.t('con_group'), handle: T.t('con_group_p'), url: x.whatsappGroup }] : []),
    { name: T.t('con_wa'), handle: x.phone, url: whatsappURL(x.tel, T.t('ft_wa_msg')) },
    ...(x.tel2 && x.phone2 ? [{ name: T.t('con_wa'), handle: x.phone2, url: whatsappURL(x.tel2, T.t('ft_wa_msg')) }] : []),
  ];
  return (
    <section className="band social" id="verbinden">
      <div className="wrap">
        <h2>{T.t('con_h')}</h2>
        <p className="muted" style={{ marginTop: 12, fontSize: '1.15rem' }}>{T.t('con_p')}</p>
        <div className="channels">
          {channels.map((c) => (
            <article key={c.url} className="channel">
              <Code url={c.url} label={`${c.name} ${c.handle}`} />
              <h3>{c.name}</h3><p>{c.handle}</p>
            </article>
          ))}
          {[...(x.whatsappGroup ? [] : [T.t('con_group')]), 'TikTok'].map((name) => (
            <Ph key={name} T={T} as="article" className="channel"><div className="qr-link qr-empty" aria-hidden="true" /><h3>{name}</h3><p>{T.t('con_soon')}</p></Ph>
          ))}
        </div>
      </div>
    </section>
  );
}

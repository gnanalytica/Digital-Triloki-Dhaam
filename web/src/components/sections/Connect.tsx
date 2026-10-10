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
  const wa = (tel: string, phone: string) => ({ icon: 'wa', name: T.t('con_wa'), handle: phone, url: whatsappURL(tel, T.t('ft_wa_msg')), cta: T.t('cta_wa'), call: tel });
  const channels: { icon: string; name: string; handle: string; url: string; cta: string; call?: string }[] = [
    { icon: 'yt-red', name: 'YouTube', handle: '@' + x.youtube.split('@')[1], url: x.youtube, cta: T.t('cta_yt') },
    { icon: 'ig-color', name: 'Instagram', handle: '@' + x.instagram.replace(/\/$/, '').split('/').pop(), url: x.instagram, cta: T.t('cta_ig') },
    { icon: 'fb-color', name: T.t('s_fb_name'), handle: T.t('feed_private'), url: x.facebook, cta: T.t('cta_fb') },
    ...(x.whatsappGroup ? [{ icon: 'wa-color', name: T.t('con_group'), handle: T.t('con_group_p'), url: x.whatsappGroup, cta: T.t('con_group_btn') }] : []),
    { ...wa(x.tel, x.phone), icon: 'wa-color' },
    ...(x.tel2 && x.phone2 ? [{ ...wa(x.tel2, x.phone2), icon: 'wa-color' }] : []),
  ];
  return (
    <section className="band social" id="verbinden">
      <div className="wrap">
        <h2>{T.t('con_h')}</h2>
        <p className="muted" style={{ marginTop: 12, fontSize: '1.15rem' }}>{T.t('con_p')}</p>
        <div className="channels">
          {channels.map((c) => (
            <article key={c.url} className="channel">
              <div className="channel-head"><svg aria-hidden="true"><use href={`#ic-${c.icon}`} /></svg><div><h3>{c.name}</h3><p>{c.handle}</p></div></div>
              <Code url={c.url} label={`${c.name} ${c.handle}`} />
              <a className={'btn' + (c.icon === 'wa-color' ? ' btn-wa' : '')} target="_blank" rel="noopener" href={c.url}>{c.cta}</a>
              {c.call && <a className="channel-call" href={`tel:${c.call}`}>{T.t('cta_call')} {c.handle}</a>}
            </article>
          ))}
          {[...(x.whatsappGroup ? [] : [T.t('con_group')]), 'TikTok'].map((name) => (
            <Ph key={name} T={T} as="article" className="channel"><div className="channel-head"><div><h3>{name}</h3><p>{T.t('con_soon')}</p></div></div><div className="qr-link qr-empty" aria-hidden="true" /></Ph>
          ))}
        </div>
      </div>
    </section>
  );
}

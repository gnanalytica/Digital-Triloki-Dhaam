'use client';
import { useState } from 'react';
import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { Rangoli } from '../Ornament';
import { Ph } from '../Ph';

/** Giving: the IBAN and account holder from content/temple.yml. No ANBI claim is made until the board confirms the status. */
export function Donate({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), [copied, setCopied] = useState(false);
  function copy() {
    const done = () => setCopied(true);
    if (navigator.clipboard) navigator.clipboard.writeText(site.temple.ibanRaw).then(done, done); else done();
  }
  return (
    <section className="band band-give" id="doneren">
      <Rangoli variant="d" />
      <div className="wrap give">
        <div>
          <h2>{T.t('donate_h')}</h2>
          <p style={{ marginTop: 14 }}>{T.t('donate_p')}</p>
        </div>
        <div>
          <div className="iban">{site.temple.iban}</div>
          <p>{T.t('donate_holder')}: {site.temple.holder}</p>
          <p style={{ marginTop: 16 }}><button className="btn" onClick={copy}>{T.t(copied ? 'donate_copied' : 'donate_copy')}</button></p>
          <p className="muted" style={{ marginTop: 12 }}>{T.t('donate_qr')}</p>
          <Ph T={T} className="qr"><div className="qr-box" aria-hidden="true" /><p>{T.t('qr_ph')}</p></Ph>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { Rangoli } from '../Ornament';
import { Ph } from '../Ph';

/** Giving: the IBAN and account holder from content/temple.yml. No ANBI claim is made until the board confirms the status. */
export function Donate({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState<number | null>(null), [other, setOther] = useState(false);
  const link = site.temple.donateLink;
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
          {site.temple.amounts.length > 0 && (
            <div className="amounts">
              <h3>{T.t('don_pick')}</h3>
              <div className="amount-row" role="group" aria-label={T.t('don_pick')}>
                {site.temple.amounts.map((a) => <button key={a} type="button" className="amount" aria-pressed={!other && amount === a} onClick={() => { setOther(false); setAmount(a); }}>€ {a}</button>)}
                <button type="button" className="amount" aria-pressed={other} onClick={() => { setOther(true); setAmount(null); }}>{T.t('don_other')}</button>
              </div>
              {other && <label className="amount-other"><span>{T.t('don_other')} (€)</span><input type="text" inputMode="decimal" autoFocus onChange={(ev) => { const n = Number(ev.target.value.replace(',', '.')); setAmount(n > 0 && n < 100000 ? Math.round(n * 100) / 100 : null); }} /></label>}
              {amount !== null && (link
                // The online link, with the amount where the provider's address takes one.
                ? <p><a className="btn" target="_blank" rel="noopener" href={link.replace('{amount}', String(amount))}>{T.t('don_give').replace('{amount}', String(amount))}</a></p>
                : <p className="amount-how" role="status">{T.t('don_how').replace('{amount}', String(amount))}</p>)}
            </div>
          )}
          <p className="muted" style={{ marginTop: 12 }}>{T.t('donate_qr')}</p>
          <Ph T={T} className="qr"><div className="qr-box" aria-hidden="true" /><p>{T.t('qr_ph')}</p></Ph>
        </div>
      </div>
    </section>
  );
}

import { tr } from '@/lib/i18n';
import type { Lang, Site } from '@/lib/types';
import { Garland, LampSVG, Shikhara } from './Ornament';

export function Footer({ lang, site }: { lang: Lang; site: Site }) {
  const T = tr(lang), x = site.temple;
  return (
    <>
      <Garland />
      <footer>
        <div className="wrap">
          <ul className="diyas" aria-hidden="true">{Array.from({ length: 11 }, (_, n) => <li key={n}><LampSVG n={n} /></li>)}</ul>
          <Shikhara />
          <div className="motto" lang="sa">धर्मो रक्षति रक्षितः</div>
          <p className="muted" style={{ marginInline: 'auto' }}>{T.t('motto_tr')}</p>
          <div className="foot">
            <div>
              <h3>{T.t('contact_h')}</h3>
              <address>{x.street}<br />{x.postal}<br /><a href={`tel:${x.tel}`}>{x.phone}</a><br /><a href={`mailto:${x.email}`}>{x.email}</a></address>
            </div>
            <div>
              <h3>{T.t('every_sunday')}</h3>
              <p>{site.service.start} – {site.service.end}</p>
              <p><a href={x.maps}>{T.t('route')}</a></p>
            </div>
            <div>
              <h3>{T.t('s_h')}</h3>
              <p><a href={x.youtube}>YouTube</a><br /><a href={x.instagram}>Instagram</a><br /><a href={x.facebook}>{T.t('s_fb_name')}</a></p>
              <p className="muted" style={{ marginTop: 12, fontSize: '.95rem' }}>{T.t('footer_org')}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

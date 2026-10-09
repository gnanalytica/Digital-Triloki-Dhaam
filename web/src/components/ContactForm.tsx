'use client';
import { useState } from 'react';
import { tr } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

type State = 'idle' | 'sending' | 'ok' | 'fail' | 'off';

/**
 * A form that posts its named fields to /api/contact, which e-mails them to the mandir. If e-mail has not been
 * configured yet, the visitor is told so and given the phone number and address instead of a false "sent".
 */
export function ContactForm({ lang, kind, phone, email, children, ...rest }: {
  lang: Lang; kind: string; phone: string; email: string; children: React.ReactNode;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>) {
  const T = tr(lang);
  const [state, setState] = useState<State>('idle');

  async function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget, fields: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value !== 'string' || !value) return;
      fields[key] = fields[key] ? fields[key] + ', ' + value : value;
    });
    setState('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind, lang, fields }) });
      if (res.ok) { setState('ok'); form.reset(); }
      else setState(res.status === 503 ? 'off' : 'fail');
    } catch { setState('fail'); }
  }

  return (
    <form {...rest} onSubmit={submit}>
      {children}
      {/* Left empty by people, filled in by bots. */}
      <label className="hp" aria-hidden="true">Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <div role="status" className={state === 'fail' || state === 'off' ? 'err' : undefined}>
        {state === 'sending' && T.t('form_sending')}
        {state === 'ok' && T.t('form_ok')}
        {state === 'fail' && T.t('form_fail')}
        {state === 'off' && <>{T.t('form_off')} <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>, <a href={`mailto:${email}`}>{email}</a></>}
      </div>
    </form>
  );
}

/** The name and contact fields most forms share. */
export function WhoFields({ lang }: { lang: Lang }) {
  const T = tr(lang);
  return (
    <>
      <label><span>{T.t('f_name')}</span><input type="text" name="name" required autoComplete="name" /></label>
      <label><span>{T.t('f_contact')}</span><input type="text" name="contact" required /></label>
    </>
  );
}

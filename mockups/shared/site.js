// Shared behaviour for the mockups: language switching and date helpers.
// Each page defines window.render(), which is called after every language change.
(function () {
  var LANGS = ['nl', 'en', 'hi'];
  var LOCALE = { nl: 'nl-NL', en: 'en-GB', hi: 'hi-IN-u-nu-latn' };
  var D = window.MTD_DATA, S = window.MTD_STR;

  function stored() { try { return localStorage.getItem('mtd-lang'); } catch (e) { return null; } }
  var lang = new URLSearchParams(location.search).get('lang') || stored() || 'nl';
  if (LANGS.indexOf(lang) < 0) lang = 'nl';

  function t(key) { var v = S[key]; return v ? (v[lang] || v.nl) : key; }
  function L(obj) { return obj ? (obj[lang] || obj.nl) : ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function day(iso) { var p = iso.split('-'); return new Date(+p[0], p[1] - 1, +p[2]); }
  function fmt(d, opts) { return new Intl.DateTimeFormat(LOCALE[lang], opts).format(typeof d === 'string' ? day(d) : d); }
  function startOfToday() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }

  // The one weekly service: Sunday 13:00 – 15:30 (content/temple.yml).
  function nextService() {
    var now = new Date(), d = startOfToday();
    var isToday = d.getDay() === 0 && (now.getHours() * 60 + now.getMinutes()) < 15 * 60 + 30;
    if (!isToday) d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7));
    return { date: d, today: isToday };
  }

  function festivals() {
    var today = startOfToday();
    return D.festivals.map(function (f) {
      var last = day(f.end || f.date);
      return Object.assign({}, f, { past: last < today, time: f.time || D.festivalDefaultTime });
    });
  }
  function upcoming(n) { return festivals().filter(function (f) { return !f.past; }).slice(0, n || 99); }

  // "11 – 19 oktober" or "20 oktober"
  function range(f, month) {
    var m = month || 'long';
    if (!f.end) return fmt(f.date, { day: 'numeric', month: m });
    var a = day(f.date), b = day(f.end);
    return a.getMonth() === b.getMonth()
      ? a.getDate() + ' – ' + fmt(b, { day: 'numeric', month: m })
      : fmt(a, { day: 'numeric', month: m }) + ' – ' + fmt(b, { day: 'numeric', month: m });
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-t-ph]').forEach(function (el) { el.placeholder = t(el.dataset.tPh); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    if (window.render) window.render();
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('mtd-lang', l); } catch (e) { /* private mode */ }
    apply();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang]');
    if (b) setLang(b.dataset.lang);
    var c = e.target.closest('[data-copy-iban]');
    if (c) {
      var done = function () { c.textContent = t('donate_copied'); };
      if (navigator.clipboard) navigator.clipboard.writeText(D.temple.iban.replace(/ /g, '')).then(done, done); else done();
    }
  });

  // Forms are illustrative: confirm in place, send nothing.
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    var out = e.target.querySelector('[role="status"]');
    if (out) out.textContent = t('f_sent');
  });

  window.MTD = { t: t, L: L, esc: esc, fmt: fmt, day: day, range: range, nextService: nextService,
    festivals: festivals, upcoming: upcoming, lang: function () { return lang; }, data: D };

  document.addEventListener('DOMContentLoaded', function () {
    var back = document.createElement('a');
    back.href = 'index.html';
    back.className = 'mock-back';
    back.textContent = 'Mockups';
    back.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:99;padding:6px 12px;border-radius:99px;background:#111;color:#fff;font:600 12px/1.2 system-ui,sans-serif;text-decoration:none;opacity:.82';
    if (!window.MTD_ARTIFACT && !/index\.html$|\/$/.test(location.pathname)) document.body.appendChild(back);
    apply();
  });
})();

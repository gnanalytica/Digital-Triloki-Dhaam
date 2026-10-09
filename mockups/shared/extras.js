// Nice-to-have features and placeholders for the colour mockup (l-kleur.html).
//
// WHAT IS REAL
// - The FAQ answers: taken from the mandir's own Zondagdienst page and the 2026 programme.
// - Pandit Vinay Narain's description: content/temple.yml.
// - Moon phases: calculated from the average length of a lunar month. They are astronomy, accurate to within
//   about half a day, and are NOT the pandit's panchang. Tithis and festival dates must come from him.
//
// WHAT IS A PLACEHOLDER (marked on the page with a dashed gold outline and a "Placeholder" tag)
// - Recordings, murti names and stories, festival photos, board members, parking and transport, the QR code.
// - The seva tasks are examples, not the temple's list. Sign-ups, diyas and votes are kept on this device only.
// Nothing here invents a person, a quote or a teaching. Hindi and English are draft translations.

window.MTD_EXTRAS = {
  faq: [
    { q: { nl: 'Wanneer is de mandir open?', en: 'When is the mandir open?', hi: 'मंदिर कब खुला रहता है?' },
      a: { nl: 'Elke zondag van 13:00 tot 15:30, en op de hoogtijdagen uit het jaarprogramma. Daarbuiten is de mandir gesloten.', en: 'Every Sunday from 13:00 to 15:30, and on the festival dates in the yearly programme. Outside those times the mandir is closed.', hi: 'हर रविवार 13:00 से 15:30 तक, और वार्षिक कार्यक्रम के पर्वों पर। इनके अलावा मंदिर बंद रहता है।' } },
    { q: { nl: 'Kost een bezoek iets?', en: 'Does a visit cost anything?', hi: 'क्या आने का कोई शुल्क है?' },
      a: { nl: 'Na de aarti wordt om een vrijwillige donatie gevraagd.', en: 'After the aarti a voluntary donation is asked for.', hi: 'आरती के बाद स्वैच्छिक दान का अनुरोध किया जाता है।' } },
    { q: { nl: 'Wat trek ik aan?', en: 'What should I wear?', hi: 'क्या पहनकर आएँ?' },
      a: { nl: 'Gepaste kleding, geen korte kleding. Uw schoenen doet u uit voordat u de gebedsruimte ingaat.', en: 'Modest clothing, nothing short. You take your shoes off before entering the prayer hall.', hi: 'शालीन वस्त्र, छोटे कपड़े नहीं। प्रार्थना-कक्ष में जाने से पहले जूते उतार दें।' } },
    { q: { nl: 'Mag ik iets meenemen?', en: 'May I bring something?', hi: 'क्या कुछ साथ ला सकते हैं?' },
      a: { nl: 'U kunt bloemen, fruit of zoetigheid meenemen om te offeren. In de mandir is alleen vegetarisch eten toegestaan.', en: 'You may bring flowers, fruit or sweets to offer. Only vegetarian food is allowed in the mandir.', hi: 'चढ़ाने के लिए फूल, फल या मिठाई ला सकते हैं। मंदिर में केवल शाकाहारी भोजन की अनुमति है।' } },
    { q: { nl: 'Mag ik foto’s of video’s maken?', en: 'May I take photos or video?', hi: 'क्या फ़ोटो या वीडियो ले सकते हैं?' },
      a: { nl: 'Vraag het eerst aan de pandit of aan een van de vrijwilligers.', en: 'Please ask the pandit or one of the volunteers first.', hi: 'पहले पंडित जी या किसी सेवक से पूछ लें।' } }
  ],

  // Hotspots on the altar photograph, left to right. Positions are percentages of the picture.
  spots: [[9, 50], [22, 49], [34, 48], [46, 49], [58, 47], [71, 49], [85, 50]],

  // Example seva tasks. The real list has to come from the temple.
  tasks: [
    { nl: 'Prasad klaarmaken', en: 'Preparing prasad', hi: 'प्रसाद बनाना' },
    { nl: 'Muziek en bhajan', en: 'Music and bhajan', hi: 'संगीत और भजन' },
    { nl: 'Opbouwen en opruimen', en: 'Setting up and clearing', hi: 'सजावट और सफ़ाई' }
  ],

  wishes: [
    { id: 'audio', t: { nl: 'Mantra’s en aarti’s om te beluisteren', en: 'Mantras and aartis to listen to', hi: 'सुनने के लिए मंत्र और आरती' }, d: { nl: 'Opnamen van de pandit en de bhajangroep, naast elke tekst.', en: 'Recordings by the pandit and the bhajan group, beside each text.', hi: 'हर पाठ के साथ पंडित जी और भजन मंडली की रिकॉर्डिंग।' } },
    { id: 'live', t: { nl: 'De zondagdienst live volgen', en: 'Follow the Sunday service live', hi: 'रविवार सेवा का सीधा प्रसारण' }, d: { nl: 'Voor wie niet kan komen: ouderen, zieken, familie ver weg.', en: 'For those who cannot come: the elderly, the ill, family far away.', hi: 'जो आ नहीं सकते उनके लिए: बुज़ुर्ग, बीमार, दूर रहने वाले परिजन।' } },
    { id: 'ask', t: { nl: 'Vraag het de pandit', en: 'Ask the pandit', hi: 'पंडित जी से पूछें' }, d: { nl: 'Stel een vraag over geloof of ritueel; antwoorden komen op de site.', en: 'Ask a question about faith or ritual; answers appear on the site.', hi: 'आस्था या अनुष्ठान के बारे में प्रश्न पूछें; उत्तर साइट पर आएँगे।' } },
    { id: 'kids', t: { nl: 'Kinderhoek', en: 'Children’s corner', hi: 'बच्चों का कोना' }, d: { nl: 'Verhalen uit de Ramayan, kleurplaten en de eerste Hindi woorden.', en: 'Stories from the Ramayan, colouring pages and first Hindi words.', hi: 'रामायण की कहानियाँ, रंग भरने के पन्ने और हिंदी के पहले शब्द।' } },
    { id: 'whatsapp', t: { nl: 'Berichten via WhatsApp', en: 'Updates by WhatsApp', hi: 'WhatsApp पर सूचनाएँ' }, d: { nl: 'Een bericht vóór elke hoogtijdag en als een dienst verandert.', en: 'A message before each festival and when a service changes.', hi: 'हर पर्व से पहले और सेवा में बदलाव होने पर संदेश।' } },
    { id: 'albums', t: { nl: 'Fotoalbums per hoogtijdag', en: 'Photo albums for each festival', hi: 'हर पर्व का फ़ोटो एल्बम' }, d: { nl: 'Met toestemming van wie erop staat.', en: 'With the consent of everyone pictured.', hi: 'तस्वीर में दिखने वालों की सहमति से।' } }
  ]
};

Object.assign(window.MTD_STR, {
  ph: { nl: 'Placeholder', en: 'Placeholder', hi: 'प्लेसहोल्डर' },
  ph_toggle_on: { nl: 'Placeholders verbergen', en: 'Hide placeholder marks', hi: 'प्लेसहोल्डर चिह्न छिपाएँ' },
  ph_toggle_off: { nl: 'Placeholders tonen', en: 'Show placeholder marks', hi: 'प्लेसहोल्डर चिह्न दिखाएँ' },
  x_nav: { nl: 'De mandir', en: 'The mandir', hi: 'मंदिर' },

  in_h: { nl: 'De mandir van binnen', en: 'Inside the mandir', hi: 'मंदिर के भीतर' },
  in_p: { nl: 'Tik op een nummer om te zien wie er op het altaar staat.', en: 'Tap a number to see who stands on the altar.', hi: 'वेदी पर कौन विराजमान हैं, यह देखने के लिए किसी अंक पर टैप करें।' },
  spot_t: { nl: 'Murti', en: 'Murti', hi: 'मूर्ति' },
  spot_d: { nl: 'Naam en verhaal van deze murti: aan te leveren door de pandit.', en: 'Name and story of this murti: to be supplied by the pandit.', hi: 'इस मूर्ति का नाम और कथा: पंडित जी देंगे।' },
  ppl_h: { nl: 'Mensen van de mandir', en: 'People of the mandir', hi: 'मंदिर के लोग' },
  ppl_role: { nl: 'Pandit en geestelijk verzorger', en: 'Pandit and spiritual carer', hi: 'पंडित और आध्यात्मिक परामर्शदाता' },
  ppl_bio: { nl: 'Een ervaren, academisch geschoolde geestelijk verzorger met jarenlange ervaring in het begeleiden van mensen op hun spirituele pad.', en: 'An experienced, academically trained spiritual carer with many years of guiding people on their spiritual path.', hi: 'अनुभवी और अकादमिक रूप से प्रशिक्षित आध्यात्मिक परामर्शदाता, जो वर्षों से लोगों का उनके आध्यात्मिक मार्ग पर साथ दे रहे हैं।' },
  ppl_ph: { nl: 'Bestuurslid: naam, rol en foto volgen', en: 'Board member: name, role and photo to follow', hi: 'बोर्ड सदस्य: नाम, भूमिका और फ़ोटो शीघ्र' },
  prac_h: { nl: 'Hoe komt u er?', en: 'Getting there', hi: 'कैसे पहुँचें?' },
  prac_park: { nl: 'Parkeren', en: 'Parking', hi: 'पार्किंग' },
  prac_ov: { nl: 'Openbaar vervoer', en: 'Public transport', hi: 'सार्वजनिक परिवहन' },
  prac_acc: { nl: 'Toegankelijkheid', en: 'Accessibility', hi: 'सुगम्यता' },
  prac_ph: { nl: 'Volgt van het bestuur.', en: 'To follow from the board.', hi: 'बोर्ड से शीघ्र।' },
  prac_map: { nl: 'Hier komt de kaart', en: 'The map goes here', hi: 'यहाँ नक्शा आएगा' },

  moon_new: { nl: 'nieuwe maan', en: 'new moon', hi: 'अमावस्या' },
  moon_full: { nl: 'volle maan', en: 'full moon', hi: 'पूर्णिमा' },
  moon_note: { nl: 'Berekend, bij benadering. Voor tithi’s en feestdagen geldt de kalender van de pandit.', en: 'Calculated, approximate. For tithis and festival dates the pandit’s calendar decides.', hi: 'गणना द्वारा, लगभग। तिथियों और पर्वों के लिए पंडित जी का पंचांग मान्य है।' },
  moon_today: { nl: 'De maan vandaag', en: 'The moon today', hi: 'आज का चंद्रमा' },
  moon_lit: { nl: 'verlicht', en: 'lit', hi: 'प्रकाशित' },
  moon_names: { nl: 'nieuwe maan|wassende sikkel|eerste kwartier|wassende maan|volle maan|afnemende maan|laatste kwartier|afnemende sikkel', en: 'new moon|waxing crescent|first quarter|waxing gibbous|full moon|waning gibbous|last quarter|waning crescent', hi: 'अमावस्या|बढ़ता हँसिया|पहला चतुर्थांश|बढ़ता चंद्र|पूर्णिमा|घटता चंद्र|अंतिम चतुर्थांश|घटता हँसिया' },

  gal_h: { nl: 'Foto’s', en: 'Photos', hi: 'तस्वीरें' },
  gal_ph: { nl: 'Foto’s van deze hoogtijdag komen hier, met toestemming van wie erop staat.', en: 'Photos of this festival will appear here, with the consent of everyone pictured.', hi: 'इस पर्व की तस्वीरें यहाँ आएँगी, उनमें दिखने वालों की सहमति से।' },
  audio_ph: { nl: 'Luister: opname volgt', en: 'Listen: recording to follow', hi: 'सुनें: रिकॉर्डिंग शीघ्र' },

  seva_h: { nl: 'Sewa tijdens Navratri', en: 'Seva during Navratri', hi: 'नवरात्रि में सेवा' },
  seva_p: { nl: 'Kies een avond en een taak. De taken hieronder zijn voorbeelden; de mandir vult de echte lijst in.', en: 'Choose an evening and a task. The tasks below are examples; the mandir will fill in the real list.', hi: 'एक संध्या और एक कार्य चुनें। नीचे के कार्य उदाहरण हैं; असली सूची मंदिर भरेगा।' },
  seva_join: { nl: 'Ik help', en: 'I will help', hi: 'मैं सेवा करूँगा/करूँगी' },
  seva_mine: { nl: 'U helpt', en: 'You are helping', hi: 'आप सेवा कर रहे हैं' },
  seva_note: { nl: 'In deze mockup wordt uw keuze alleen op dit apparaat bewaard.', en: 'In this mockup your choice is kept on this device only.', hi: 'इस मॉकअप में आपका चयन केवल इसी डिवाइस पर रहता है।' },

  diya_h: { nl: 'Steek een diya aan', en: 'Light a diya', hi: 'एक दीया जलाएँ' },
  diya_p: { nl: 'Voor iemand aan wie u denkt, of als dank. Elke tik steekt er één aan.', en: 'For someone you are thinking of, or in thanks. Each tap lights one.', hi: 'किसी अपने की याद में, या कृतज्ञता में। हर टैप पर एक दीया जलता है।' },
  diya_btn: { nl: 'Steek een diya aan', en: 'Light a diya', hi: 'दीया जलाएँ' },
  diya_count: { nl: 'Aangestoken op dit apparaat', en: 'Lit on this device', hi: 'इस डिवाइस पर जलाए गए' },
  diya_full: { nl: 'Alle diya’s branden. Dank u.', en: 'Every diya is lit. Thank you.', hi: 'सब दीये जल रहे हैं। धन्यवाद।' },

  faq_h: { nl: 'Veelgestelde vragen', en: 'Frequently asked questions', hi: 'अक्सर पूछे जाने वाले प्रश्न' },
  wish_h: { nl: 'Meer van de mandir', en: 'More from the mandir', hi: 'मंदिर से और भी' },
  wish_p: { nl: 'Zes manieren om ook tussen de bezoeken door bij de mandir te blijven. De opzet staat er; wat als placeholder is gemarkeerd komt van de pandit en het bestuur.', en: 'Six ways to stay close to the mandir between visits. The outline is in place; whatever is marked as a placeholder has to come from the pandit and the board.', hi: 'दर्शन के बीच भी मंदिर से जुड़े रहने के छह तरीक़े। ढाँचा तैयार है; जो प्लेसहोल्डर के रूप में चिह्नित है वह पंडित जी और बोर्ड से आएगा।' },
  wish_btn: { nl: 'Dit wil ik', en: 'I want this', hi: 'मुझे यह चाहिए' },
  wish_done: { nl: 'Genoteerd', en: 'Noted', hi: 'दर्ज हो गया' },
  qr_ph: { nl: 'Hier komt de QR-code voor een donatie', en: 'The QR code for giving goes here', hi: 'दान का QR कोड यहाँ आएगा' }
});

(function () {
  var X = window.MTD_EXTRAS;
  function store(key, value) {
    try { if (value === undefined) return JSON.parse(localStorage.getItem('mtd-x-' + key) || 'null'); localStorage.setItem('mtd-x-' + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    return value === undefined ? null : value;
  }
  var state = { spot: 0, seva: store('seva') || {}, diyas: store('diyas') || 0, wishes: store('wishes') || {}, marks: true };

  // ---------- Moon ----------
  // Average lunar month, counted from the new moon of 6 January 2000. Good to about half a day.
  var SYNODIC = 29.530588853, REF = Date.UTC(2000, 0, 6, 18, 14) / 864e5;
  X.moons = function (year) {
    var out = [], from = Date.UTC(year, 0, 1) / 864e5, to = Date.UTC(year + 1, 0, 1) / 864e5, k = Math.floor((from - REF) / SYNODIC) - 1;
    for (var i = k; i < k + 16; i++) [['new', 0], ['full', .5]].forEach(function (p) {
      var t = REF + (i + p[1]) * SYNODIC;
      if (t >= from && t < to) out.push({ type: p[0], date: new Date(t * 864e5) });
    });
    return out;
  };
  X.moonNow = function () {
    var p = (((Date.now() / 864e5 - REF) / SYNODIC) % 1 + 1) % 1;
    return { index: Math.round(p * 8) % 8, lit: Math.round((1 - Math.cos(p * Math.PI * 2)) / 2 * 100) };
  };

  var DIYAS = 21;
  function lampSVG(lit, n) {
    return '<svg viewBox="0 0 40 50" aria-hidden="true"><path class="fl" style="--n:' + n + '" d="M20 30C12 22 17 14 20 4C23 14 28 22 20 30Z"/><path class="bowl" d="M4 32h32c0 9-7 14-16 14S4 41 4 32z"/></svg>';
  }

  window.drawExtras = function (chosen) {
    var M = window.MTD, D = M.data, e = M.esc, L = M.L, t = M.t;
    var tag = '<span class="ph-tag">' + e(t('ph')) + '</span>';
    var set = function (id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; };

    // Inside the mandir: the altar with numbered hotspots.
    set('murti-spots', X.spots.map(function (s, n) {
      return '<button type="button" class="spot" data-spot="' + n + '" aria-pressed="' + (n === state.spot) + '" style="left:' + s[0] + '%;top:' + s[1] + '%">' + (n + 1) + '</button>';
    }).join(''));
    set('murti-info', '<div class="ph">' + tag + '<h3>' + e(t('spot_t')) + ' ' + (state.spot + 1) + '</h3><p>' + e(t('spot_d')) + '</p></div>');

    set('people', '<article class="person"><div class="face" aria-hidden="true">V</div><h4>Pandit Vinay Narain</h4><small>' + e(t('ppl_role')) + '</small><p>' + e(t('ppl_bio')) + '</p></article>' +
      new Array(4).join('<article class="person ph">' + tag + '<div class="face" aria-hidden="true">?</div><p>' + e(t('ppl_ph')) + '</p></article>'));
    set('practical', ['prac_park', 'prac_ov', 'prac_acc'].map(function (k) {
      return '<div class="ph">' + tag + '<h4>' + e(t(k)) + '</h4><p>' + e(t('prac_ph')) + '</p></div>';
    }).join('') + '<div class="ph map">' + tag + '<p>' + e(t('prac_map')) + '</p><p><b>' + e(D.temple.street) + ', ' + e(D.temple.postal) + '</b></p><a class="btn btn-line" target="_blank" rel="noopener" href="' + D.temple.maps + '">' + e(t('route')) + '</a></div>');

    // Moon line under the year ring.
    var now = X.moonNow();
    set('moon-line', '<span><i class="moon-new"></i>' + e(t('moon_new')) + '</span><span><i class="moon-full"></i>' + e(t('moon_full')) + '</span>' +
      '<span><b>' + e(t('moon_today')) + ':</b> ' + e(t('moon_names').split('|')[now.index]) + ', ' + now.lit + '% ' + e(t('moon_lit')) + '</span><span class="muted">' + e(t('moon_note')) + '</span>');

    // Photo frames for whichever festival is selected on the ring.
    set('gallery', '<h3>' + e(t('gal_h')) + (chosen ? ': ' + e(L(chosen.name)) : '') + '</h3><div class="frames ph">' + tag + new Array(5).join('<div class="frame"></div>') + '<p>' + e(t('gal_ph')) + '</p></div>');

    // A player waiting for its recording, on the mantra of the day.
    var motd = document.querySelector('#motd > div:last-child');
    if (motd && !motd.querySelector('.player')) motd.insertAdjacentHTML('beforeend', '<div class="player ph">' + tag + '<button type="button" disabled aria-label="' + e(t('audio_ph')) + '"></button><div class="wave" aria-hidden="true">' + new Array(29).join('<i></i>') + '</div><span>' + e(t('audio_ph')) + '</span></div>');

    // Seva board for the next nine-evening festival.
    var nav = M.festivals().filter(function (x) { return x.nights && !x.past; })[0];
    if (nav) {
      var rows = '';
      for (var i = 0; i < nav.nights; i++) {
        var d = M.day(nav.date); d.setDate(d.getDate() + i);
        rows += '<tr><th scope="row">' + e(M.fmt(d, { weekday: 'short', day: 'numeric', month: 'short' })) + '</th>' + X.tasks.map(function (task, n) {
          var key = i + '-' + n, mine = !!state.seva[key];
          return '<td><button type="button" class="seva-btn" data-seva="' + key + '" aria-pressed="' + mine + '">' + e(t(mine ? 'seva_mine' : 'seva_join')) + '</button></td>';
        }).join('') + '</tr>';
      }
      set('seva', '<h3>' + e(t('seva_h')) + '</h3><p>' + e(t('seva_p')) + '</p><div class="seva-scroll ph">' + tag + '<table><thead><tr><td></td>' + X.tasks.map(function (task) { return '<th scope="col">' + e(L(task)) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div><p class="muted small">' + e(t('seva_note')) + '</p>');
    }

    // Light a diya.
    var row = '';
    for (var n = 0; n < DIYAS; n++) row += '<li class="' + (n < state.diyas ? 'lit' : '') + '">' + lampSVG(n < state.diyas, n) + '</li>';
    set('diya-box', '<h3>' + e(t('diya_h')) + '</h3><p>' + e(t('diya_p')) + '</p><ul class="diya-row">' + row + '</ul>' +
      '<p><button type="button" class="btn" id="diya-btn"' + (state.diyas >= DIYAS ? ' disabled' : '') + '>' + e(t('diya_btn')) + '</button> <span class="diya-count">' + e(state.diyas >= DIYAS ? t('diya_full') : t('diya_count') + ': ' + state.diyas) + '</span></p>');

    set('faq-list', X.faq.map(function (f) { return '<details><summary>' + e(L(f.q)) + '</summary><p>' + e(L(f.a)) + '</p></details>'; }).join(''));

    set('qr', '<div class="ph qr">' + tag + '<div class="qr-box" aria-hidden="true"></div><p>' + e(t('qr_ph')) + '</p></div>');

    var toggle = document.getElementById('ph-toggle');
    if (toggle) { toggle.textContent = t(state.marks ? 'ph_toggle_on' : 'ph_toggle_off'); toggle.setAttribute('aria-pressed', String(state.marks)); }
  };

  document.addEventListener('click', function (ev) {
    var el;
    if ((el = ev.target.closest('[data-spot]'))) { state.spot = Number(el.dataset.spot); window.render(); document.querySelector('[data-spot="' + state.spot + '"]').focus(); return; }
    if ((el = ev.target.closest('[data-seva]'))) { var k = el.dataset.seva; if (state.seva[k]) delete state.seva[k]; else state.seva[k] = 1; store('seva', state.seva); window.render(); document.querySelector('[data-seva="' + k + '"]').focus(); return; }
    if (ev.target.closest('#diya-btn')) { state.diyas = Math.min(DIYAS, state.diyas + 1); store('diyas', state.diyas); window.render(); var b = document.getElementById('diya-btn'); if (b && !b.disabled) b.focus(); return; }
    if ((el = ev.target.closest('[data-wish]'))) { var w = el.dataset.wish; if (state.wishes[w]) delete state.wishes[w]; else state.wishes[w] = 1; store('wishes', state.wishes); window.render(); document.querySelector('[data-wish="' + w + '"]').focus(); return; }
    if (ev.target.closest('#ph-toggle')) { state.marks = !state.marks; document.body.classList.toggle('ph-off', !state.marks); window.render(); }
  });
})();

// ---------- Lessons sign-up, puja items, and what Sarnami is ----------
// The lessons and their descriptions come from content/courses.yml. That the mandir has puja items available
// and can be reached about them by WhatsApp comes from Sandeep (7 Oct 2026); the range itself is a placeholder,
// and the WhatsApp number is the mandir's published phone number, to be confirmed as the right one for WhatsApp.
Object.assign(window.MTD_STR, {
  les_nav: { nl: 'Lessen', en: 'Lessons', hi: 'कक्षाएँ' },
  les_h: { nl: 'Lessen en cursussen', en: 'Lessons and courses', hi: 'कक्षाएँ और पाठ्यक्रम' },
  les_p: { nl: 'Kies een of meer lessen en meld u aan. Een groep start zodra er genoeg aanmeldingen zijn; u krijgt dan bericht.', en: 'Choose one or more lessons and sign up. A group starts once enough people have signed up; you will then hear from us.', hi: 'एक या अधिक कक्षाएँ चुनें और नामांकन करें। पर्याप्त नामांकन होते ही समूह शुरू होगा; तब आपको सूचना मिलेगी।' },
  les_btn: { nl: 'Meld u aan', en: 'Sign up', hi: 'नामांकन करें' },
  les_picked: { nl: 'Gekozen', en: 'Chosen', hi: 'चुना गया' },
  les_which: { nl: 'Voor welke lessen?', en: 'Which lessons?', hi: 'कौन-सी कक्षाएँ?' },
  les_who: { nl: 'Voor wie?', en: 'Who is it for?', hi: 'किसके लिए?' },
  les_who_opts: { nl: 'Voor mijzelf|Voor mijn kind|Voor ons allebei', en: 'For myself|For my child|For both of us', hi: 'अपने लिए|अपने बच्चे के लिए|हम दोनों के लिए' },
  les_child: { nl: 'Meldt u een kind aan? Dan vragen we eerst uw toestemming als ouder of verzorger voordat we de naam van uw kind vastleggen.', en: 'Signing up a child? We will first ask for your consent as parent or guardian before recording your child’s name.', hi: 'बच्चे का नामांकन कर रहे हैं? बच्चे का नाम दर्ज करने से पहले हम माता-पिता या अभिभावक के रूप में आपकी सहमति लेंगे।' },
  les_send: { nl: 'Verstuur aanmelding', en: 'Send sign-up', hi: 'नामांकन भेजें' },
  les_sunday: { nl: 'zondag', en: 'Sunday', hi: 'रविवार' },

  shop_h: { nl: 'Artikelen voor uw puja', en: 'Items for your puja', hi: 'पूजा की सामग्री' },
  shop_p: { nl: 'Bij de mandir is een assortiment artikelen voor puja verkrijgbaar. Wilt u weten wat er is, of iets bestellen? Stuur ons een bericht via WhatsApp.', en: 'The mandir has a range of items for puja available. Would you like to know what there is, or order something? Send us a message on WhatsApp.', hi: 'मंदिर में पूजा की कई सामग्रियाँ उपलब्ध हैं। जानना चाहते हैं कि क्या-क्या है, या कुछ मँगवाना है? हमें WhatsApp पर संदेश भेजें।' },
  shop_btn: { nl: 'Stuur een WhatsApp', en: 'Message us on WhatsApp', hi: 'WhatsApp पर संदेश भेजें' },
  shop_msg: { nl: 'Namaste, ik heb een vraag over artikelen voor puja.', en: 'Namaste, I have a question about items for puja.', hi: 'नमस्ते, मुझे पूजा की सामग्री के बारे में पूछना है।' },
  shop_ph: { nl: 'Het assortiment, met foto’s en prijzen, volgt van de mandir.', en: 'The range, with photos and prices, is to follow from the mandir.', hi: 'सामग्री की सूची, फ़ोटो और मूल्य सहित, मंदिर से शीघ्र।' },
  shop_or: { nl: 'Of bel', en: 'Or call', hi: 'या फ़ोन करें' },

  word_what: { nl: 'Wat is Sarnami? De taal van de Surinaamse Hindostanen. Ze is in Suriname gegroeid uit het Bhojpuri en Awadhi van de eerste migranten uit Noord-India, en wordt met Latijnse letters geschreven.', en: 'What is Sarnami? The language of the Surinamese Hindustanis. It grew in Suriname out of the Bhojpuri and Awadhi of the first migrants from North India, and is written in Latin letters.', hi: 'सरनामी क्या है? सूरीनाम के हिंदुस्तानियों की भाषा। यह सूरीनाम में उत्तर भारत से आए पहले प्रवासियों की भोजपुरी और अवधी से बनी, और रोमन लिपि में लिखी जाती है।' }
});

(function () {
  var base = window.drawExtras, picked = {}, drawnFor = null;
  window.drawExtras = function (chosen) {
    base(chosen);
    var M = window.MTD, D = M.data, e = M.esc, L = M.L, t = M.t;
    var cards = document.getElementById('lessons');
    if (cards) cards.innerHTML = D.courses.map(function (c) {
      var on = !!picked[c.id];
      return '<article class="lesson"><h4>' + e(L(c.name)) + '</h4><p>' + e(L(c.desc)) + '</p>' +
        '<small>' + (c.time ? e(t('les_sunday')) + ' ' + c.time + '. ' : '') + e(t(c.fixed ? 'courses_fixed' : 'courses_gated')) + '</small>' +
        '<button type="button" class="btn ' + (on ? '' : 'btn-line') + '" data-les="' + c.id + '" aria-pressed="' + on + '">' + e(t(on ? 'les_picked' : 'les_btn')) + '</button></article>';
    }).join('');
    // The form's own controls are only rebuilt when the language changes, so typing is never lost.
    var form = document.getElementById('les-form');
    if (form && drawnFor !== M.lang()) {
      drawnFor = M.lang();
      form.innerHTML = '<fieldset><legend>' + e(t('les_which')) + '</legend><div class="checks" id="les-checks">' + D.courses.map(function (c) {
        return '<label><input type="checkbox" data-lescheck="' + c.id + '"' + (picked[c.id] ? ' checked' : '') + '>' + e(L(c.name)) + '</label>';
      }).join('') + '</div></fieldset>' +
        '<label><span>' + e(t('f_name')) + '</span><input type="text" id="les-name" required></label>' +
        '<label><span>' + e(t('f_contact')) + '</span><input type="text" id="les-contact" required></label>' +
        '<label><span>' + e(t('les_who')) + '</span><select id="les-who">' + t('les_who_opts').split('|').map(function (o) { return '<option>' + e(o) + '</option>'; }).join('') + '</select></label>' +
        '<p class="muted small">' + e(t('les_child')) + '</p><button class="btn">' + e(t('les_send')) + '</button><div role="status"></div>';
    }
    if (form) form.querySelectorAll('[data-lescheck]').forEach(function (b) { b.checked = !!picked[b.dataset.lescheck]; });

    var shop = document.getElementById('puja-box');
    if (shop) shop.innerHTML = '<div><p class="lead">' + e(t('shop_p')) + '</p><p class="shop-actions"><a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/' + D.temple.tel.replace('+', '') + '?text=' + encodeURIComponent(t('shop_msg')) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3zm0 1.800a7.200 7.200 0 1 1-3.700 13.400l-.3-.2-2.400.6.7-2.300-.2-.300A7.200 7.200 0 0 1 12 4.800zm-3 3.400c-.2 0-.5.100-.7.300-.3.300-.9.900-.9 2.100s.9 2.500 1 2.600c.1.200 1.800 2.800 4.400 3.800 2.200.900 2.600.700 3.100.600.500 0 1.500-.600 1.700-1.200.2-.600.200-1.100.2-1.200-.1-.100-.2-.200-.500-.300l-1.700-.800c-.200-.100-.400-.100-.600.100l-.800 1c-.100.200-.300.200-.500.100-.300-.100-1.100-.400-2-1.300-.800-.700-1.300-1.500-1.400-1.800-.100-.200 0-.400.100-.500l.400-.500c.1-.100.200-.300.300-.500.100-.100 0-.300 0-.500l-.800-1.800c-.200-.400-.400-.400-.500-.400z"/></svg>' +
      e(t('shop_btn')) + '</a><span>' + e(t('shop_or')) + ' ' + e(D.temple.phone) + '</span></p></div>' +
      '<div class="frames ph"><span class="ph-tag">' + e(t('ph')) + '</span>' + new Array(5).join('<div class="frame"></div>') + '<p>' + e(t('shop_ph')) + '</p></div>';
  };

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-les]');
    if (!b) return;
    var id = b.dataset.les, form = document.getElementById('les-form');
    if (picked[id]) delete picked[id]; else picked[id] = 1;
    form.hidden = !Object.keys(picked).length;
    window.render();
    if (!form.hidden) { form.scrollIntoView({ block: 'nearest' }); }
  });
  document.addEventListener('change', function (ev) {
    var box = ev.target.closest && ev.target.closest('[data-lescheck]');
    if (!box) return;
    if (box.checked) picked[box.dataset.lescheck] = 1; else delete picked[box.dataset.lescheck];
    window.render();
  });
})();

// ---------- The six "more from the mandir" features ----------
// Built on request (9 Oct 2026) from what used to be a wish list. Each is a working outline, not finished content:
// - Listen: the titles are the texts already in the knowledge section; the recordings do not exist yet.
// - Live: the next Sunday service is real; whether and where the mandir streams is for the board to decide.
// - Ask the pandit: the form sends nothing in this mockup. No questions or answers are invented.
// - Children's corner: the six Hindi words are everyday vocabulary (draft, to be checked by a Hindi teacher);
//   stories and colouring pages are placeholders.
// - WhatsApp updates: uses the mandir's published phone number, to be confirmed as its WhatsApp number.
// - Albums: one per festival that has already passed this year; the photos themselves are placeholders.
window.MTD_EXTRAS.words = [
  { hi: 'नमस्ते', ro: 'namaste', m: { nl: 'hallo', en: 'hello', hi: 'अभिवादन' } },
  { hi: 'धन्यवाद', ro: 'dhanyavaad', m: { nl: 'dank je wel', en: 'thank you', hi: 'आभार' } },
  { hi: 'माँ', ro: 'maa', m: { nl: 'moeder', en: 'mother', hi: 'माता' } },
  { hi: 'पानी', ro: 'paani', m: { nl: 'water', en: 'water', hi: 'जल' } },
  { hi: 'फूल', ro: 'phool', m: { nl: 'bloem', en: 'flower', hi: 'पुष्प' } },
  { hi: 'दीया', ro: 'diya', m: { nl: 'lampje', en: 'lamp', hi: 'दीपक' } }
];
Object.assign(window.MTD_STR, {
  ft_audio_h: { nl: 'Luister naar mantra’s en aarti’s', en: 'Listen to mantras and aartis', hi: 'मंत्र और आरती सुनें' },
  ft_audio_p: { nl: 'Opnamen van de pandit en de bhajangroep, bij elke tekst uit de kennisbank.', en: 'Recordings by the pandit and the bhajan group, with each text in the knowledge section.', hi: 'ज्ञान अनुभाग के हर पाठ के साथ पंडित जी और भजन मंडली की रिकॉर्डिंग।' },
  ft_audio_soon: { nl: 'opname volgt', en: 'recording to follow', hi: 'रिकॉर्डिंग शीघ्र' },
  ft_live_h: { nl: 'Volg de zondagdienst live', en: 'Follow the Sunday service live', hi: 'रविवार सेवा सीधे देखें' },
  ft_live_p: { nl: 'Voor wie niet kan komen: ouderen, zieken, familie ver weg.', en: 'For those who cannot come: the elderly, the ill, family far away.', hi: 'जो आ नहीं सकते उनके लिए: बुज़ुर्ग, बीमार, दूर रहने वाले परिजन।' },
  ft_live_next: { nl: 'Volgende dienst', en: 'Next service', hi: 'अगली सेवा' },
  ft_live_ph: { nl: 'Hier komt de livestream, als het bestuur daartoe besluit.', en: 'The live stream appears here, if the board decides to offer one.', hi: 'यदि बोर्ड निर्णय ले, तो सीधा प्रसारण यहाँ दिखेगा।' },
  ft_live_btn: { nl: 'Naar het YouTube-kanaal', en: 'Go to the YouTube channel', hi: 'YouTube चैनल पर जाएँ' },
  ft_ask_h: { nl: 'Vraag het de pandit', en: 'Ask the pandit', hi: 'पंडित जी से पूछें' },
  ft_ask_p: { nl: 'Stel een vraag over geloof of ritueel. De pandit kiest welke vragen met antwoord op de site komen, zonder uw naam.', en: 'Ask a question about faith or ritual. The pandit chooses which questions appear on the site with an answer, without your name.', hi: 'आस्था या अनुष्ठान के बारे में प्रश्न पूछें। कौन-से प्रश्न उत्तर सहित साइट पर आएँ, यह पंडित जी तय करेंगे; आपका नाम नहीं दिखेगा।' },
  ft_ask_q: { nl: 'Uw vraag', en: 'Your question', hi: 'आपका प्रश्न' },
  ft_ask_c: { nl: 'E-mail of telefoon, als u persoonlijk antwoord wilt (niet verplicht)', en: 'Email or phone, if you would like a personal answer (optional)', hi: 'ईमेल या फ़ोन, यदि आप व्यक्तिगत उत्तर चाहते हैं (वैकल्पिक)' },
  ft_ask_btn: { nl: 'Verstuur uw vraag', en: 'Send your question', hi: 'प्रश्न भेजें' },
  ft_ask_none: { nl: 'Beantwoorde vragen komen hier te staan.', en: 'Answered questions will appear here.', hi: 'उत्तर दिए गए प्रश्न यहाँ दिखेंगे।' },
  ft_kids_h: { nl: 'Kinderhoek', en: 'Children’s corner', hi: 'बच्चों का कोना' },
  ft_kids_p: { nl: 'Eerste Hindi woorden: tik op een woord om te zien hoe je het zegt en wat het betekent.', en: 'First Hindi words: tap a word to see how to say it and what it means.', hi: 'हिंदी के पहले शब्द: किसी शब्द पर टैप करें और देखें कि उसे कैसे बोलते हैं और उसका अर्थ क्या है।' },
  ft_kids_story: { nl: 'Verhalen uit de Ramayan', en: 'Stories from the Ramayan', hi: 'रामायण की कहानियाँ' },
  ft_kids_colour: { nl: 'Kleurplaten', en: 'Colouring pages', hi: 'रंग भरने के पन्ने' },
  ft_kids_ph: { nl: 'Volgt van de pandit en de lesgroep.', en: 'To follow from the pandit and the teaching group.', hi: 'पंडित जी और शिक्षण समूह से शीघ्र।' },
  ft_wa_h: { nl: 'Berichten via WhatsApp', en: 'Updates by WhatsApp', hi: 'WhatsApp पर सूचनाएँ' },
  ft_wa_p: { nl: 'Een bericht vóór elke hoogtijdag en als een dienst verandert. Niets anders, en u kunt altijd stoppen.', en: 'A message before each festival and when a service changes. Nothing else, and you can stop at any time.', hi: 'हर पर्व से पहले और सेवा में बदलाव होने पर एक संदेश। और कुछ नहीं; आप कभी भी बंद कर सकते हैं।' },
  ft_wa_btn: { nl: 'Meld u aan via WhatsApp', en: 'Sign up on WhatsApp', hi: 'WhatsApp पर जुड़ें' },
  ft_wa_msg: { nl: 'Raam Raam, ik ontvang graag de berichten van Mandir Triloki Dhaam.', en: 'Raam Raam, I would like to receive updates from Mandir Triloki Dhaam.', hi: 'राम राम, मैं मंदिर त्रिलोकी धाम की सूचनाएँ पाना चाहता/चाहती हूँ।' },
  ft_wa_note: { nl: 'Het WhatsApp-nummer moet nog door het bestuur worden bevestigd.', en: 'The WhatsApp number is still to be confirmed by the board.', hi: 'WhatsApp नंबर की पुष्टि बोर्ड द्वारा होनी शेष है।' },
  ft_alb_h: { nl: 'Fotoalbums per hoogtijdag', en: 'Photo albums for each festival', hi: 'हर पर्व का फ़ोटो एल्बम' },
  ft_alb_p: { nl: 'Eén album per hoogtijdag, met toestemming van wie erop staat.', en: 'One album for each festival, with the consent of everyone pictured.', hi: 'हर पर्व का एक एल्बम, तस्वीर में दिखने वालों की सहमति से।' },
  ft_alb_ph: { nl: 'foto’s volgen', en: 'photos to follow', hi: 'तस्वीरें शीघ्र' }
});

(function () {
  var base = window.drawExtras, drawnFor = null, X = window.MTD_EXTRAS;
  // Layout only; colours come from each page's own classes so the three colour versions stay themselves.
  var css = document.createElement('style');
  css.textContent = '.wishes.feats{grid-template-columns:repeat(2,1fr);align-items:start}' +
    '.feat{gap:14px}.feat>p{flex:none}.feat form{margin-top:4px}' +
    '.feat-list{list-style:none;margin:0;padding:0}.feat-list li{display:flex;align-items:center;gap:12px;padding:9px 0;border-top:1px solid rgba(128,128,128,.28)}' +
    '.feat-list b{flex:1;min-width:0;font-weight:600}.feat-list small{opacity:.75;white-space:nowrap}' +
    '.feat-play{flex:none;width:34px;height:34px;border-radius:50%;border:1.5px solid currentColor;background:none;color:inherit;opacity:.55;display:grid;place-items:center;padding:0 0 0 3px}' +
    '.feat-play::before{content:"";border-left:10px solid currentColor;border-block:6px solid transparent}' +
    '.feat-screen{aspect-ratio:16/9;display:grid;place-content:center;gap:4px;text-align:center;padding:16px}.feat-screen b{font:400 1.5rem/1.2 var(--display)}.feat-screen span{font-size:.95rem}' +
    '.feat-words{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}' +
    '.feat-word{min-height:92px;border:1.5px solid rgba(128,128,128,.4);border-radius:10px;background:none;color:inherit;cursor:pointer;display:grid;place-content:center;gap:2px;padding:8px;font:inherit;text-align:center}' +
    '.feat-word b{font:400 1.7rem/1.3 var(--display)}.feat-word i{font-style:italic}.feat-word span{font-size:.92rem;opacity:.8}.feat-word:hover{border-color:currentColor}' +
    '.feat-pair{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:6px}.feat-pair>div{padding:14px}.feat-pair h5{margin:0 0 4px;font:600 1rem/1.3 var(--body)}.feat-pair p{font-size:.92rem}' +
    '.feat-albums{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:6px}.feat-albums figure{margin:0}.feat-albums .frame{aspect-ratio:4/3}' +
    '.feat-albums figcaption{font-size:.92rem;line-height:1.35;margin-top:6px}.feat-albums figcaption b{display:block;font-weight:600}.feat-albums figcaption span{opacity:.75}' +
    '.feat .small{font-size:.9rem}.feat-empty{font-style:italic;opacity:.8;font-size:.95rem;padding-top:12px;border-top:1px solid rgba(128,128,128,.28)}' +
    '@media (max-width:920px){.wishes.feats{grid-template-columns:1fr}.feat-albums{grid-template-columns:1fr 1fr}}';
  document.head.appendChild(css);

  var shown = {};
  window.drawExtras = function (chosen) {
    base(chosen);
    var M = window.MTD, D = M.data, e = M.esc, L = M.L, t = M.t, box = document.getElementById('wishes');
    // Rebuilt only when the language changes, so a half-written question is never lost.
    if (!box || drawnFor === M.lang()) return;
    drawnFor = M.lang();
    var tag = '<span class="ph-tag">' + e(t('ph')) + '</span>';
    var texts = (window.MTD_KNOWLEDGE ? window.MTD_KNOWLEDGE.items : []).filter(function (k) { return k.verse; }).slice(0, 5);
    var ns = M.nextService(), when = ns && ns.date ? M.fmt(ns.date, { weekday: 'long', day: 'numeric', month: 'long' }) : '';
    var past = M.festivals().filter(function (f) { return f.past; }).slice(-6);
    var head = function (k) { return '<h4>' + e(t('ft_' + k + '_h')) + '</h4><p>' + e(t('ft_' + k + '_p')) + '</p>'; };
    box.className = 'wishes feats';
    box.innerHTML =
      '<article class="wish feat" id="ft-audio">' + head('audio') + '<ul class="feat-list ph">' + tag + texts.map(function (k) {
        return '<li><button type="button" class="feat-play" disabled aria-label="' + e(L(k.title)) + ': ' + e(t('ft_audio_soon')) + '"></button><b>' + e(L(k.title)) + '</b><small>' + e(t('ft_audio_soon')) + '</small></li>';
      }).join('') + '</ul></article>' +

      '<article class="wish feat" id="ft-live">' + head('live') + '<div class="frame feat-screen ph">' + tag + '<span>' + e(t('ft_live_next')) + '</span><b>' + e(when) + ', ' + D.programme[0].start + '</b><span>' + e(t('ft_live_ph')) + '</span></div>' +
        '<a class="btn btn-line" target="_blank" rel="noopener" href="' + D.temple.youtube + '">' + e(t('ft_live_btn')) + '</a></article>' +

      '<article class="wish feat" id="ft-ask">' + head('ask') + '<form><label><span>' + e(t('ft_ask_q')) + '</span><textarea required></textarea></label>' +
        '<label><span>' + e(t('ft_ask_c')) + '</span><input type="text"></label><button class="btn">' + e(t('ft_ask_btn')) + '</button><div role="status"></div></form>' +
        '<p class="feat-empty">' + e(t('ft_ask_none')) + '</p></article>' +

      '<article class="wish feat" id="ft-kids">' + head('kids') + '<div class="feat-words">' + X.words.map(function (w, n) {
        return '<button type="button" class="feat-word" data-word="' + n + '" aria-pressed="' + !!shown[n] + '" lang="hi"><b>' + w.hi + '</b>' + (shown[n] ? '<i lang="hi-Latn">' + w.ro + '</i><span lang="' + M.lang() + '">' + e(L(w.m)) + '</span>' : '') + '</button>';
      }).join('') + '</div><div class="feat-pair">' + ['story', 'colour'].map(function (k) {
        return '<div class="ph">' + tag + '<h5>' + e(t('ft_kids_' + k)) + '</h5><p>' + e(t('ft_kids_ph')) + '</p></div>';
      }).join('') + '</div></article>' +

      '<article class="wish feat" id="ft-wa">' + head('wa') + '<a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/' + D.temple.tel.replace('+', '') + '?text=' + encodeURIComponent(t('ft_wa_msg')) + '">' + e(t('ft_wa_btn')) + '</a>' +
        '<p class="muted small">' + e(t('ft_wa_note')) + '</p></article>' +

      '<article class="wish feat" id="ft-albums">' + head('alb') + '<div class="feat-albums ph">' + tag + past.map(function (f) {
        return '<figure><div class="frame"></div><figcaption><b>' + e(L(f.name)) + '</b><span>' + e(M.fmt(M.day(f.date), { day: 'numeric', month: 'long' })) + ', ' + e(t('ft_alb_ph')) + '</span></figcaption></figure>';
      }).join('') + '</div></article>';
  };

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-word]');
    if (!b) return;
    var n = b.dataset.word;
    shown[n] = !shown[n]; drawnFor = null; window.render();
    document.querySelector('[data-word="' + n + '"]').focus();
  });
})();

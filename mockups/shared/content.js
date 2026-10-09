// Mockup content, trilingual (nl / en / hi).
//
// Every fact here is copied from content/*.yml or from the live Zondagdienst
// page. Nothing marked `verify: true` or `needs_drafting: true` in content/ is
// stated as fact: Diwali carries a "to be confirmed" flag, ceremonies without
// a pandit-approved description show their name only, and there is no ANBI
// claim. Hindi is a first draft and needs a native-speaker review.

window.MTD_DATA = {
  temple: {
    name: 'Mandir Triloki Dhaam',
    street: 'Tongelresestraat 371',
    postal: '5642 NC Eindhoven',
    phone: '06-45461229',
    tel: '+31645461229',
    email: 'trilokidhaam@gmail.com',
    iban: 'NL90 INGB 0007 6605 27',
    holder: 'Stichting Senskaar Triloki Dhaam',
    maps: 'https://www.google.com/maps/search/?api=1&query=Tongelresestraat+371+5642+NC+Eindhoven',
    youtube: 'https://www.youtube.com/@mandirtrilokidhaam32',
    instagram: 'https://www.instagram.com/mandirtrilokidhaam/',
    facebook: 'https://www.facebook.com/groups/MandirTrilokiDhaam'
  },

  // The temple's own photographs, copied from the live site into mockups/assets/.
  img: {
    altar: 'assets/altar.jpg',
    shiva: 'assets/shiva.jpg'
  },

  videos: [
    { id: 'QAQ7TqJfOgA', title: { nl: 'Sfeerimpressie van een aarti', en: 'An aarti at the mandir', hi: 'मंदिर में आरती की झलक' } },
    { id: 'RPDuwYl1r48', title: { nl: 'Bhajan en kirtan', en: 'Bhajan and kirtan', hi: 'भजन और कीर्तन' } },
    { id: 'HZCfYq6LsEM', title: { nl: 'Cursus Hindu Basics', en: 'The Hindu Basics course', hi: 'हिंदू बेसिक्स पाठ्यक्रम' } }
  ],

  // The four most recent posts on the temple's Instagram, read 4 Oct 2026. Covers are in assets/.
  instagram: [
    { id: 'DdYkE_SsHld', date: '2026-09-17' },
    { id: 'Db4GqZmMtGI', date: '2026-08-10' },
    { id: 'Db22oTmM6Zs', date: '2026-08-10' },
    { id: 'DUYL5jiAKOu', date: '2026-02-05' }
  ],

  programme: [
    { start: '13:00', end: '14:00', mins: 60,
      title: { nl: 'Puja en bhajan', en: 'Puja and bhajan', hi: 'पूजा और भजन' },
      desc: { nl: 'Offeren aan de goden en samen religieuze liederen zingen.', en: 'Offerings to the deities and singing devotional songs together.', hi: 'देवताओं को अर्पण और मिलकर भजन गाना।' } },
    { start: '14:00', end: '15:00', mins: 60,
      title: { nl: 'Pravachan', en: 'Pravachan', hi: 'प्रवचन' },
      desc: { nl: 'Lezing over een onderwerp uit het hindoeïsme, soms met ruimte voor vragen.', en: 'A talk on a topic from Hinduism, sometimes with room for questions.', hi: 'हिंदू धर्म के किसी विषय पर प्रवचन, कभी-कभी प्रश्नों के लिए समय के साथ।' } },
    { start: '15:00', end: '15:30', mins: 30,
      title: { nl: 'Aarti en prasad', en: 'Aarti and prasad', hi: 'आरती और प्रसाद' },
      desc: { nl: 'Eerbetoon aan de goden met muziek, daarna prasad en panchamrit.', en: 'Homage to the deities with music, then prasad and panchamrit.', hi: 'संगीत के साथ आरती, फिर प्रसाद और पंचामृत।' } }
  ],

  // content/festivals-2026.yml, spellings standardised as that file recommends.
  festivals: [
    { id: 'makar-sankranti', date: '2026-01-14', name: { nl: 'Makar Sankranti', en: 'Makar Sankranti', hi: 'मकर संक्रांति' } },
    { id: 'vasant-panchami', date: '2026-01-23', name: { nl: 'Vasant Panchami, Saraswati Puja', en: 'Vasant Panchami, Saraswati Puja', hi: 'वसंत पंचमी, सरस्वती पूजा' } },
    { id: 'maha-shivratri', date: '2026-02-15', time: '17:00', name: { nl: 'Maha Shivratri', en: 'Maha Shivratri', hi: 'महाशिवरात्रि' } },
    { id: 'holika-dahan', date: '2026-03-02', name: { nl: 'Holika Dahan', en: 'Holika Dahan', hi: 'होलिका दहन' } },
    { id: 'chaitra-navratri', date: '2026-03-18', name: { nl: 'Chaitra Navratri', en: 'Chaitra Navratri', hi: 'चैत्र नवरात्रि' } },
    { id: 'ramnavami', date: '2026-03-26', name: { nl: 'Ramnavami', en: 'Ramnavami', hi: 'रामनवमी' } },
    { id: 'hanuman-jayanti', date: '2026-04-01', name: { nl: 'Hanuman Jayanti', en: 'Hanuman Jayanti', hi: 'हनुमान जयंती' } },
    { id: 'shravan-somvaar', date: '2026-08-03', end: '2026-08-24', name: { nl: 'Shravan Somvaar Shivpuja', en: 'Shravan Somvaar Shivpuja', hi: 'श्रावण सोमवार शिवपूजा' },
      note: { nl: 'Vier maandagen', en: 'Four Mondays', hi: 'चार सोमवार' } },
    { id: 'krishna-janmashtami', date: '2026-09-03', name: { nl: 'Krishna Janmashtami', en: 'Krishna Janmashtami', hi: 'कृष्ण जन्माष्टमी' } },
    { id: 'ganesh-chaturthi', date: '2026-09-14', name: { nl: 'Ganesh Chaturthi', en: 'Ganesh Chaturthi', hi: 'गणेश चतुर्थी' } },
    { id: 'shardiya-navratri', date: '2026-10-11', end: '2026-10-19', nights: 9, name: { nl: 'Shardiya Navratri', en: 'Shardiya Navratri', hi: 'शारदीय नवरात्रि' },
      note: { nl: 'Negen avonden, elke avond', en: 'Nine evenings, every evening', hi: 'नौ संध्याएँ, हर शाम' } },
    { id: 'vijaya-dashami', date: '2026-10-20', name: { nl: 'Vijaya Dashami (Dussehra)', en: 'Vijaya Dashami (Dussehra)', hi: 'विजयादशमी (दशहरा)' } },
    { id: 'divali', date: '2026-11-09', pending: true, name: { nl: 'Diwali', en: 'Diwali', hi: 'दिवाली' } },
    { id: 'geeta-jayanti', date: '2026-12-20', time: '13:00', name: { nl: 'Geeta Jayanti', en: 'Geeta Jayanti', hi: 'गीता जयंती' } }
  ],
  festivalDefaultTime: '18:00',

  // content/services.yml. Only puja and yagya have an approved description.
  ceremonies: [
    { id: 'antyeshti', urgent: true, name: { nl: 'Antyeshti samskar', en: 'Antyeshti samskar', hi: 'अंत्येष्टि संस्कार' }, gloss: { nl: 'uitvaartrituelen', en: 'funeral rites', hi: 'अंतिम संस्कार' } },
    { id: 'shradh', name: { nl: 'Shradh', en: 'Shradh', hi: 'श्राद्ध' }, gloss: { nl: 'rituelen voor overledenen', en: 'rites for the departed', hi: 'दिवंगतों के लिए' } },
    { id: 'vivah', name: { nl: 'Vivah samskar', en: 'Vivah samskar', hi: 'विवाह संस्कार' }, gloss: { nl: 'huwelijk', en: 'marriage', hi: 'विवाह' } },
    { id: 'mundan', name: { nl: 'Mundan samskar', en: 'Mundan samskar', hi: 'मुंडन संस्कार' }, gloss: { nl: 'eerste haarknipbeurt', en: 'first haircut', hi: 'पहला मुंडन' } },
    { id: 'griha-pravesh', name: { nl: 'Griha Pravesh', en: 'Griha Pravesh', hi: 'गृह प्रवेश' }, gloss: { nl: 'intrek in een nieuw huis', en: 'moving into a new home', hi: 'नए घर में प्रवेश' } },
    { id: 'puja', name: { nl: 'Puja', en: 'Puja', hi: 'पूजा' },
      desc: { nl: 'Een Vedische ceremonie van enkele uren, bedoeld om hindernissen weg te nemen of positieve tendensen te bevorderen. Uitgevoerd door een daartoe opgeleide pandit die de mantra’s uit de Veda’s reciteert.', en: 'A Vedic ceremony lasting a few hours, performed to clear obstacles or strengthen positive tendencies, by a trained pandit who recites the mantras from the Vedas.', hi: 'कुछ घंटों का वैदिक अनुष्ठान, बाधाएँ दूर करने या शुभ प्रवृत्तियों को बढ़ाने के लिए। प्रशिक्षित पंडित वेदों के मंत्रों का पाठ करते हैं।' } },
    { id: 'yagya', name: { nl: 'Yagya', en: 'Yagya', hi: 'यज्ञ' },
      desc: { nl: 'Rituelen met een levensondersteunend effect, voor het welzijn van een persoon, een familie, een organisatie of een samenleving.', en: 'Rituals with a life-supporting effect, for the wellbeing of a person, a family, an organisation or a community.', hi: 'व्यक्ति, परिवार, संस्था या समाज के कल्याण के लिए किए जाने वाले जीवन-पोषक अनुष्ठान।' } },
    { id: 'havan', name: { nl: 'Havan', en: 'Havan', hi: 'हवन' } },
    { id: 'grah-shanti', name: { nl: 'Grah Shanti', en: 'Grah Shanti', hi: 'ग्रह शांति' } },
    { id: 'sundarkand', name: { nl: 'Sundarkand path', en: 'Sundarkand path', hi: 'सुंदरकांड पाठ' } },
    { id: 'kirtan', name: { nl: 'Kirtan en bhajan', en: 'Kirtan and bhajan', hi: 'कीर्तन और भजन' } },
    { id: 'horoscope', name: { nl: 'Hindoe-horoscoop', en: 'Hindu horoscope', hi: 'कुंडली' } },
    { id: 'lezingen', name: { nl: 'Lezingen', en: 'Lectures', hi: 'व्याख्यान' } }
  ],

  courses: [
    { id: 'hindu-basics', fixed: true, time: '13:00 – 15:30',
      name: { nl: 'Hindu Basics', en: 'Hindu Basics', hi: 'हिंदू बेसिक्स' },
      desc: { nl: 'Een brede inleiding in de fundamenten van Sanatan Dharma: filosofie, rituelen en cultuur. Ook samen met kinderen.', en: 'A broad introduction to the foundations of Sanatan Dharma: philosophy, ritual and culture. Children welcome with a parent.', hi: 'सनातन धर्म की बुनियाद का परिचय: दर्शन, अनुष्ठान और संस्कृति। बच्चों के साथ भी।' } },
    { id: 'hindi', fixed: true, time: '12:00 – 13:00',
      name: { nl: 'Hindilessen', en: 'Hindi classes', hi: 'हिंदी कक्षाएँ' },
      desc: { nl: 'Voor kinderen en volwassenen, vóór de zondagdienst.', en: 'For children and adults, before the Sunday service.', hi: 'बच्चों और बड़ों के लिए, रविवार सेवा से पहले।' } },
    { id: 'harmonium', name: { nl: 'Harmonium', en: 'Harmonium', hi: 'हारमोनियम' },
      desc: { nl: 'Van de basis tot gevorderde technieken, onder begeleiding van ervaren muzikanten.', en: 'From the basics to advanced technique, guided by experienced musicians.', hi: 'शुरुआत से उन्नत तकनीक तक, अनुभवी संगीतकारों के साथ।' } },
    { id: 'dhol', name: { nl: 'Dhol', en: 'Dhol', hi: 'ढोल' },
      desc: { nl: 'Ontdek de ritmische wereld van de dhol.', en: 'Discover the rhythmic world of the dhol.', hi: 'ढोल की लय की दुनिया को जानें।' } },
    { id: 'kids-music', name: { nl: 'Muziek voor kinderen', en: 'Music for children', hi: 'बच्चों के लिए संगीत' },
      desc: { nl: 'Een speelse kennismaking met muziek voor de kleintjes.', en: 'A playful first step into music for the youngest.', hi: 'छोटे बच्चों का संगीत से खेल-खेल में परिचय।' } },
    { id: 'yoga', name: { nl: 'Yoga en meditatie', en: 'Yoga and meditation', hi: 'योग और ध्यान' },
      desc: { nl: 'Sessies om lichaam en geest in balans te brengen.', en: 'Sessions to bring body and mind into balance.', hi: 'शरीर और मन में संतुलन लाने वाले सत्र।' } }
  ],

  // Condensed from the live Zondagdienst page.
  etiquette: [
    { nl: 'Doe uw schoenen uit voordat u de gebedsruimte ingaat.', en: 'Take off your shoes before entering the prayer hall.', hi: 'प्रार्थना-कक्ष में जाने से पहले जूते उतारें।' },
    { nl: 'Draag gepaste kleding, geen korte kleding.', en: 'Dress modestly; no short clothing.', hi: 'शालीन वस्त्र पहनें; छोटे कपड़े नहीं।' },
    { nl: 'Eet geen vlees, vis of ei en drink geen alcohol voor uw bezoek.', en: 'No meat, fish, egg or alcohol before your visit.', hi: 'आने से पहले मांस, मछली, अंडा या मदिरा न लें।' },
    { nl: 'Zet uw telefoon op stil.', en: 'Put your phone on silent.', hi: 'फ़ोन साइलेंट पर रखें।' },
    { nl: 'Vraag het even voordat u foto’s of video’s maakt.', en: 'Ask before taking photos or video.', hi: 'फ़ोटो या वीडियो लेने से पहले पूछ लें।' },
    { nl: 'Bloemen, fruit of zoetigheid meenemen om te offeren mag.', en: 'You may bring flowers, fruit or sweets to offer.', hi: 'चाहें तो चढ़ाने के लिए फूल, फल या मिठाई लाएँ।' }
  ],

  // The recovered 2015 corpus in content/legacy/.
  knowledge: [
    { title: { nl: 'Mantra’s', en: 'Mantras', hi: 'मंत्र' }, desc: { nl: 'Wat een mantra is, en de Gayatri-, Shiva- en Ganesh-mantra.', en: 'What a mantra is, and the Gayatri, Shiva and Ganesh mantras.', hi: 'मंत्र क्या है, और गायत्री, शिव व गणेश मंत्र।' } },
    { title: { nl: 'Aarti’s', en: 'Aartis', hi: 'आरतियाँ' }, desc: { nl: 'Durga, Hanuman, Krishna, Shiva en Vishnu.', en: 'Durga, Hanuman, Krishna, Shiva and Vishnu.', hi: 'दुर्गा, हनुमान, कृष्ण, शिव और विष्णु।' } },
    { title: { nl: 'Geschriften', en: 'Scriptures', hi: 'शास्त्र' }, desc: { nl: 'De Veda’s, de Ramayan, de Mahabharat en de Gita.', en: 'The Vedas, the Ramayan, the Mahabharat and the Gita.', hi: 'वेद, रामायण, महाभारत और गीता।' } },
    { title: { nl: 'Hoogtijdagen uitgelegd', en: 'The festivals explained', hi: 'पर्वों का अर्थ' }, desc: { nl: 'Navratri, Maha Shivratri, Hanuman Jayanti en meer.', en: 'Navratri, Maha Shivratri, Hanuman Jayanti and more.', hi: 'नवरात्रि, महाशिवरात्रि, हनुमान जयंती और अन्य।' } },
    { title: { nl: 'De Vedische kalender', en: 'The Vedic calendar', hi: 'वैदिक पंचांग' }, desc: { nl: 'Waarom een feestdag in Nederland een dag kan verschillen van India.', en: 'Why a festival in the Netherlands can fall a day apart from India.', hi: 'नीदरलैंड में कोई पर्व भारत से एक दिन आगे-पीछे क्यों हो सकता है।' } },
    { title: { nl: 'Algemene beginselen', en: 'General principles', hi: 'मूल सिद्धांत' }, desc: { nl: 'De grondgedachten van Sanatan Dharma.', en: 'The core ideas of Sanatan Dharma.', hi: 'सनातन धर्म के मूल विचार।' } }
  ]
};

window.MTD_STR = {
  // navigation
  nav_visit: { nl: 'Uw bezoek', en: 'Your visit', hi: 'आपकी यात्रा' },
  nav_sunday: { nl: 'Zondagdienst', en: 'Sunday service', hi: 'रविवार सेवा' },
  nav_calendar: { nl: 'Jaarprogramma', en: 'Festivals', hi: 'उत्सव' },
  nav_ceremonies: { nl: 'Rituelen', en: 'Ceremonies', hi: 'संस्कार' },
  nav_learn: { nl: 'Kennis', en: 'Knowledge', hi: 'ज्ञान' },
  nav_join: { nl: 'Doe mee', en: 'Take part', hi: 'जुड़ें' },
  nav_donate: { nl: 'Doneren', en: 'Donate', hi: 'दान' },
  skip: { nl: 'Naar de inhoud', en: 'Skip to content', hi: 'सामग्री पर जाएँ' },
  lang_label: { nl: 'Taal', en: 'Language', hi: 'भाषा' },
  temple_kind: { nl: 'Hindoetempel in Eindhoven', en: 'Hindu temple in Eindhoven', hi: 'आइंडहोवन का हिंदू मंदिर' },

  // shared facts and labels
  every_sunday: { nl: 'Elke zondag', en: 'Every Sunday', hi: 'हर रविवार' },
  next_service: { nl: 'Eerstvolgende dienst', en: 'Next service', hi: 'अगली सेवा' },
  today: { nl: 'Vandaag', en: 'Today', hi: 'आज' },
  from: { nl: 'vanaf', en: 'from', hi: 'से' },
  to_confirm: { nl: 'Datum wordt nog bevestigd', en: 'Date to be confirmed', hi: 'तिथि की पुष्टि शेष' },
  route: { nl: 'Route in Google Maps', en: 'Directions in Google Maps', hi: 'Google Maps में रास्ता' },
  call: { nl: 'Bel', en: 'Call', hi: 'फ़ोन करें' },
  email_us: { nl: 'E-mail', en: 'E-mail', hi: 'ई-मेल' },
  add_calendar: { nl: 'Zet het jaarprogramma in uw agenda', en: 'Add the festivals to your calendar', hi: 'उत्सव अपने कैलेंडर में जोड़ें' },
  all_festivals: { nl: 'Bekijk het hele jaarprogramma', en: 'See the full year', hi: 'पूरा वर्ष देखें' },
  plan_visit: { nl: 'Bereid uw bezoek voor', en: 'Plan your visit', hi: 'अपनी यात्रा की तैयारी करें' },
  watch: { nl: 'Bekijk op YouTube', en: 'Watch on YouTube', hi: 'YouTube पर देखें' },

  welcome_h: { nl: 'Iedereen is welkom, elke zondag om 13:00', en: 'Everyone is welcome, every Sunday at 13:00', hi: 'हर रविवार दोपहर 1 बजे, सबका स्वागत है' },
  welcome_p: { nl: 'Mandir Triloki Dhaam is een hindoetempel aan de Tongelresestraat in Eindhoven: een plek van rust, devotie en gemeenschap. U bent welkom, ook als u voor het eerst komt.', en: 'Mandir Triloki Dhaam is a Hindu temple on Tongelresestraat in Eindhoven: a place of calm, devotion and community. You are welcome, also if this is your first visit.', hi: 'मंदिर त्रिलोकी धाम आइंडहोवन की टोंगेलरेसेस्ट्राट पर स्थित हिंदू मंदिर है: शांति, भक्ति और समुदाय का स्थान। पहली बार आ रहे हों, तब भी आपका स्वागत है।' },
  hours_note: { nl: 'De mandir is open tijdens de zondagdienst en op de hoogtijdagen uit het jaarprogramma.', en: 'The mandir is open during the Sunday service and on the festival dates in the yearly programme.', hi: 'मंदिर रविवार सेवा के समय और वार्षिक कार्यक्रम के पर्वों पर खुला रहता है।' },

  sunday_h: { nl: 'Wat gebeurt er op zondag?', en: 'What happens on a Sunday?', hi: 'रविवार को क्या होता है?' },
  sunday_p: { nl: 'Tweeënhalf uur, in drie delen. U mag meezingen, in stilte luisteren en vragen stellen aan de pandit of de sewaks.', en: 'Two and a half hours, in three parts. You can sing along, listen quietly, and ask the pandit or the sewaks anything.', hi: 'ढाई घंटे, तीन भागों में। आप साथ गा सकते हैं, शांति से सुन सकते हैं, और पंडित जी या सेवकों से प्रश्न पूछ सकते हैं।' },

  first_h: { nl: 'Komt u voor het eerst?', en: 'Coming for the first time?', hi: 'पहली बार आ रहे हैं?' },
  first_p: { nl: 'De mandir is een reine plek waar we elkaar met respect behandelen. Dit is wat we van iedere bezoeker vragen.', en: 'The mandir is a pure place where we treat each other with respect. This is what we ask of every visitor.', hi: 'मंदिर एक पवित्र स्थान है जहाँ हम एक-दूसरे का आदर करते हैं। हर आगंतुक से हमारा यही अनुरोध है।' },
  first_bell: { nl: 'Bij het begin van de puja klinkt een bel, en vaak zet de pandit of een sewak een tilaka op uw voorhoofd als teken van zegen. Na de aarti krijgt u prasad en panchamrit.', en: 'A bell rings as the puja begins, and the pandit or a sewak will often place a tilaka on your forehead as a blessing. After the aarti you receive prasad and panchamrit.', hi: 'पूजा के आरंभ में घंटी बजती है, और पंडित जी या सेवक आशीर्वाद स्वरूप आपके माथे पर तिलक लगाते हैं। आरती के बाद प्रसाद और पंचामृत मिलता है।' },

  upcoming_h: { nl: 'Binnenkort in de mandir', en: 'Coming up at the mandir', hi: 'मंदिर में आगामी' },
  festival_time_note: { nl: 'Hoogtijdagen beginnen om 18:00, tenzij anders vermeld.', en: 'Festivals start at 18:00 unless stated otherwise.', hi: 'पर्व शाम 6 बजे शुरू होते हैं, जब तक अलग समय न लिखा हो।' },
  year_h: { nl: 'Jaarprogramma 2026', en: 'Festivals in 2026', hi: 'वार्षिक कार्यक्रम 2026' },
  past: { nl: 'Geweest', en: 'Past', hi: 'बीत गया' },
  navratri_lead: { nl: 'Negen avonden voor de Godin, elke avond vanaf 18:00.', en: 'Nine evenings for the Goddess, every evening from 18:00.', hi: 'देवी की नौ संध्याएँ, हर शाम 6 बजे से।' },
  night: { nl: 'Avond', en: 'Evening', hi: 'संध्या' },
  next_festival: { nl: 'Eerstvolgende hoogtijdag', en: 'Next festival', hi: 'अगला पर्व' },
  calendar_why: { nl: 'De mandir volgt de Vedische kalender zoals die voor Nederland wordt berekend. Daardoor kan een datum een dag afwijken van kalenders uit India.', en: 'The mandir follows the Vedic calendar as calculated for the Netherlands, so a date can fall a day apart from calendars made for India.', hi: 'मंदिर नीदरलैंड के लिए गणना किए गए वैदिक पंचांग का पालन करता है, इसलिए कोई तिथि भारत के पंचांग से एक दिन अलग हो सकती है।' },

  cer_h: { nl: 'Rituelen en ceremoniën voor uw familie', en: 'Rituals and ceremonies for your family', hi: 'आपके परिवार के लिए अनुष्ठान और संस्कार' },
  cer_p: { nl: 'Pandit Vinay Narain verzorgt samskars en rituelen voor families. Neem contact op, dan bespreken we wat er nodig is.', en: 'Pandit Vinay Narain performs samskars and rituals for families. Get in touch and we will talk through what is needed.', hi: 'पंडित विनय नारायण परिवारों के लिए संस्कार और अनुष्ठान कराते हैं। संपर्क करें, हम आवश्यकता पर बात करेंगे।' },
  cer_urgent_h: { nl: 'Is er iemand overleden?', en: 'Has someone passed away?', hi: 'क्या किसी का देहांत हुआ है?' },
  cer_urgent_p: { nl: 'Bel ons voor antyeshti samskar. Wacht niet op een antwoord per e-mail.', en: 'Call us for antyeshti samskar. Do not wait for an e-mail reply.', hi: 'अंत्येष्टि संस्कार के लिए हमें फ़ोन करें। ई-मेल के उत्तर की प्रतीक्षा न करें।' },
  cer_request: { nl: 'Vraag een ritueel aan', en: 'Request a ceremony', hi: 'अनुष्ठान का अनुरोध करें' },

  care_h: { nl: 'Levensvragen', en: 'Questions of life', hi: 'जीवन के प्रश्न' },
  care_p: { nl: 'Pandit Vinay Narain is een academisch geschoolde geestelijk verzorger. Hij kan samen met u nagaan of persoonlijke begeleiding bij uw situatie past.', en: 'Pandit Vinay Narain is an academically trained spiritual carer. He can explore with you whether personal guidance fits your situation.', hi: 'पंडित विनय नारायण अकादमिक रूप से प्रशिक्षित आध्यात्मिक परामर्शदाता हैं। वे आपके साथ देख सकते हैं कि व्यक्तिगत मार्गदर्शन आपकी स्थिति के अनुकूल है या नहीं।' },
  care_cta: { nl: 'Vraag een gesprek aan', en: 'Ask for a conversation', hi: 'बातचीत का अनुरोध करें' },

  learn_h: { nl: 'Kennis uit de mandir', en: 'Knowledge from the mandir', hi: 'मंदिर से ज्ञान' },
  learn_p: { nl: 'Mantra’s, aarti’s en uitleg uit het archief van de mandir.', en: 'Mantras, aartis and explanations from the mandir’s own archive.', hi: 'मंदिर के अपने संग्रह से मंत्र, आरतियाँ और व्याख्याएँ।' },
  gayatri_note: { nl: 'De Gayatri-mantra. Zoals alle rivieren uitkomen in de oceaan, zo zijn alle mantra’s verenigd in de Gayatri.', en: 'The Gayatri mantra. As all rivers reach the ocean, so all mantras are united in the Gayatri.', hi: 'गायत्री मंत्र। जैसे सब नदियाँ सागर में मिलती हैं, वैसे ही सब मंत्र गायत्री में समाए हैं।' },

  courses_h: { nl: 'Cursussen en lessen', en: 'Courses and classes', hi: 'पाठ्यक्रम और कक्षाएँ' },
  courses_fixed: { nl: 'Op cursuszondagen. De data voor 2026/2027 volgen.', en: 'On course Sundays. Dates for 2026/2027 to follow.', hi: 'पाठ्यक्रम वाले रविवारों को। 2026/2027 की तिथियाँ शीघ्र।' },
  courses_gated: { nl: 'Start zodra er genoeg aanmeldingen zijn.', en: 'Starts once enough people have signed up.', hi: 'पर्याप्त नामांकन होते ही शुरू होगा।' },
  courses_cta: { nl: 'Meld uw interesse', en: 'Register your interest', hi: 'अपनी रुचि दर्ज करें' },

  join_h: { nl: 'De mandir maken we samen', en: 'We make the mandir together', hi: 'मंदिर हम सब मिलकर बनाते हैं' },
  join_p: { nl: 'Alles in de mandir wordt gedaan door vrijwilligers. Er is altijd plaats voor nog twee handen.', en: 'Everything at the mandir is done by volunteers. There is always room for another pair of hands.', hi: 'मंदिर का हर काम स्वयंसेवक करते हैं। दो और हाथों के लिए सदा स्थान है।' },
  join_seva_h: { nl: 'Help mee als sewak', en: 'Help as a sewak', hi: 'सेवक बनकर हाथ बँटाएँ' },
  join_seva_p: { nl: 'Bij de zondagdienst, op hoogtijdagen, met muziek of achter de schermen.', en: 'At the Sunday service, on festival days, with music or behind the scenes.', hi: 'रविवार सेवा में, पर्वों पर, संगीत में या पर्दे के पीछे।' },
  join_translate_h: { nl: 'Vertaal met ons mee', en: 'Translate with us', hi: 'हमारे साथ अनुवाद करें' },
  join_translate_p: { nl: 'Deze site is er in het Nederlands, Engels en Hindi. Vertalingen worden door de gemeenschap gemaakt en nagekeken.', en: 'This site is in Dutch, English and Hindi. Translations are made and checked by the community.', hi: 'यह साइट डच, अंग्रेज़ी और हिंदी में है। अनुवाद समुदाय द्वारा किए और जाँचे जाते हैं।' },
  join_fix_h: { nl: 'Ziet u iets dat niet klopt?', en: 'Seen something that is not right?', hi: 'कुछ ग़लत दिखा?' },
  join_fix_p: { nl: 'Een datum, een tijd, een spelling: laat het weten, dan passen we het aan.', en: 'A date, a time, a spelling: tell us and we will correct it.', hi: 'तिथि, समय या वर्तनी: बताइए, हम सुधार देंगे।' },
  join_fix_cta: { nl: 'Meld een verbetering', en: 'Suggest a correction', hi: 'सुधार सुझाएँ' },
  join_follow_h: { nl: 'Blijf op de hoogte', en: 'Stay in touch', hi: 'जुड़े रहें' },
  join_follow_p: { nl: 'Beelden van aarti’s, bhajans en lessen op YouTube en Instagram. De Facebookgroep is besloten, voor wie al bij de gemeenschap hoort.', en: 'Footage of aartis, bhajans and classes on YouTube and Instagram. The Facebook group is private, for those already part of the community.', hi: 'आरती, भजन और कक्षाओं के वीडियो YouTube और Instagram पर। Facebook समूह निजी है, समुदाय के सदस्यों के लिए।' },

  donate_h: { nl: 'Steun de mandir', en: 'Support the mandir', hi: 'मंदिर को सहयोग दें' },
  donate_p: { nl: 'Met uw vrijwillige bijdrage kunnen we onze spirituele en culturele activiteiten voortzetten. U kunt eenmalig overmaken of een maandelijkse overschrijving instellen bij uw bank.', en: 'Your voluntary contribution keeps our spiritual and cultural activities going. You can make a single transfer or set up a monthly one with your bank.', hi: 'आपके स्वैच्छिक सहयोग से हमारी आध्यात्मिक और सांस्कृतिक गतिविधियाँ चलती रहती हैं। आप एक बार या अपने बैंक से मासिक अंतरण कर सकते हैं।' },
  donate_holder: { nl: 'Ten name van', en: 'Account holder', hi: 'खाताधारक' },
  donate_copy: { nl: 'Kopieer IBAN', en: 'Copy IBAN', hi: 'IBAN कॉपी करें' },
  donate_copied: { nl: 'IBAN gekopieerd', en: 'IBAN copied', hi: 'IBAN कॉपी हो गया' },
  donate_qr: { nl: 'In de mandir hangen QR-codes voor een donatie ter plaatse.', en: 'QR codes for giving on the spot are displayed in the mandir.', hi: 'मंदिर में दान के लिए QR कोड लगे हैं।' },

  contact_h: { nl: 'Contact', en: 'Contact', hi: 'संपर्क' },
  motto_tr: { nl: 'De Dharma beschermt wie haar beschermt', en: 'Dharma protects those who protect it', hi: 'धर्म उसकी रक्षा करता है जो धर्म की रक्षा करता है' },
  footer_org: { nl: 'Mandir Triloki Dhaam wordt gedragen door Stichting Senskaar Triloki Dhaam.', en: 'Mandir Triloki Dhaam is run by Stichting Senskaar Triloki Dhaam.', hi: 'मंदिर त्रिलोकी धाम का संचालन Stichting Senskaar Triloki Dhaam करती है।' },

  // forms
  f_name: { nl: 'Uw naam', en: 'Your name', hi: 'आपका नाम' },
  f_contact: { nl: 'E-mail of telefoon', en: 'E-mail or phone', hi: 'ई-मेल या फ़ोन' },
  f_message: { nl: 'Uw bericht', en: 'Your message', hi: 'आपका संदेश' },
  f_which: { nl: 'Waar gaat het om?', en: 'What is it about?', hi: 'किस बारे में है?' },
  f_send: { nl: 'Verstuur', en: 'Send', hi: 'भेजें' },
  f_sent: { nl: 'Verstuurd. In deze mockup wordt er niets echt verzonden.', en: 'Sent. Nothing is actually sent in this mockup.', hi: 'भेज दिया गया। इस मॉकअप में वास्तव में कुछ नहीं भेजा जाता।' },
  f_private: { nl: 'Alleen de pandit leest dit bericht.', en: 'Only the pandit reads this message.', hi: 'यह संदेश केवल पंडित जी पढ़ते हैं।' },

  // design C: "what brings you here?"
  c_ask: { nl: 'Namaste. Waarvoor komt u?', en: 'Namaste. What brings you here?', hi: 'नमस्ते। आप किसलिए आए हैं?' },
  c_i_first: { nl: 'Ik kom voor het eerst', en: 'I am visiting for the first time', hi: 'मैं पहली बार आ रहा/रही हूँ' },
  c_i_date: { nl: 'Ik zoek een datum', en: 'I am looking for a date', hi: 'मुझे कोई तिथि देखनी है' },
  c_i_ritual: { nl: 'Ik wil een ritueel aanvragen', en: 'I want to request a ceremony', hi: 'मुझे अनुष्ठान कराना है' },
  c_i_help: { nl: 'Ik wil meehelpen', en: 'I want to help', hi: 'मैं सेवा करना चाहता/चाहती हूँ' },
  c_i_learn: { nl: 'Ik wil iets leren', en: 'I want to learn', hi: 'मैं सीखना चाहता/चाहती हूँ' },
  c_i_talk: { nl: 'Ik zit met een levensvraag', en: 'I have a question of life', hi: 'मेरे मन में जीवन का प्रश्न है' },
  c_week_h: { nl: 'Deze week', en: 'This week', hi: 'इस सप्ताह' },
  c_seva_opts: { nl: 'Zondagdienst|Hoogtijdagen|Muziek en bhajan|Vertalen en website', en: 'Sunday service|Festival days|Music and bhajan|Translation and website', hi: 'रविवार सेवा|पर्व|संगीत और भजन|अनुवाद और वेबसाइट' },
  c_seva_q: { nl: 'Waarbij wilt u helpen?', en: 'What would you like to help with?', hi: 'आप किसमें सहयोग करना चाहेंगे?' }
};

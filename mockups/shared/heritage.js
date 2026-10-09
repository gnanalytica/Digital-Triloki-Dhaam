// Surinamese-Hindustani heritage layer for the mockups.
//
// STATUS: CONCEPT. None of this has been confirmed by the temple.
// - The glossary definitions follow the mandir's own pages (mostly the Zondagdienst page).
// - The festival aliases are spellings the mandir's own poster and old pages use, plus the common ones.
// - The journey (1873, 1916, 1975) and the instrument notes are general, widely published history of the
//   Hindustani community of Suriname. They say nothing about this mandir in particular, and the last stop of
//   the journey is deliberately empty: the mandir's own story has to come from the board.
// - No quotes, memories or recordings are invented. Where one is needed there is an empty place for it.
// Hindi and English are draft translations of the Dutch.

window.MTD_HERITAGE = {
  journey: [
    { year: '1873',
      place: { nl: 'India naar Suriname', en: 'India to Suriname', hi: 'भारत से सूरीनाम' },
      title: { nl: 'De Lalla Rookh', en: 'The Lalla Rookh', hi: 'लल्ला रूख' },
      body: { nl: 'Op 5 juni 1873 komt het eerste schip met contractarbeiders uit Brits-Indië aan in Paramaribo. De meesten komen uit het huidige Uttar Pradesh en Bihar. Ze nemen hun taal, hun liederen en hun dharm mee.', en: 'On 5 June 1873 the first ship carrying contract labourers from British India arrives in Paramaribo. Most come from what is now Uttar Pradesh and Bihar. They bring their language, their songs and their dharm with them.', hi: '5 जून 1873 को ब्रिटिश भारत से गिरमिटिया मज़दूरों को लेकर पहला जहाज़ पारामारिबो पहुँचता है। अधिकतर लोग आज के उत्तर प्रदेश और बिहार से आते हैं। वे अपनी भाषा, अपने गीत और अपना धर्म साथ लाते हैं।' } },
    { year: '1873 – 1916',
      place: { nl: 'Suriname', en: 'Suriname', hi: 'सूरीनाम' },
      title: { nl: 'Een nieuwe gemeenschap', en: 'A new community', hi: 'एक नया समुदाय' },
      body: { nl: 'Tot 1916 volgen ruim 34.000 mensen. Na hun contract blijven velen in Suriname. Uit hun streektalen groeit het Sarnami, en pandits, de Ramayan en feesten als Phagwa en Diwali houden de traditie levend.', en: 'By 1916 more than 34,000 people have followed. When their contracts end, many stay in Suriname. Out of their regional languages grows Sarnami, and pandits, the Ramayan and festivals such as Phagwa and Diwali keep the tradition alive.', hi: '1916 तक 34,000 से अधिक लोग आ चुके होते हैं। अनुबंध पूरा होने पर बहुत से लोग सूरीनाम में ही बस जाते हैं। उनकी बोलियों से सरनामी भाषा बनती है, और पंडित, रामायण तथा फगवा और दिवाली जैसे पर्व परंपरा को जीवित रखते हैं।' } },
    { year: '1975',
      place: { nl: 'Suriname naar Nederland', en: 'Suriname to the Netherlands', hi: 'सूरीनाम से नीदरलैंड' },
      title: { nl: 'Opnieuw beginnen', en: 'Starting again', hi: 'फिर से शुरुआत' },
      body: { nl: 'Rond de onafhankelijkheid van Suriname op 25 november 1975 verhuizen veel Hindostaanse families naar Nederland. Ook hier bouwen ze mandirs en verenigingen op.', en: 'Around Suriname’s independence on 25 November 1975 many Hindustani families move to the Netherlands. Here too they build mandirs and associations.', hi: '25 नवंबर 1975 को सूरीनाम की स्वतंत्रता के आसपास बहुत से हिंदुस्तानी परिवार नीदरलैंड आ जाते हैं। यहाँ भी वे मंदिर और संस्थाएँ खड़ी करते हैं।' } },
    { year: { nl: 'Nu', en: 'Today', hi: 'आज' }, open: true,
      place: { nl: 'Eindhoven', en: 'Eindhoven', hi: 'आइंडहोवन' },
      title: { nl: 'Mandir Triloki Dhaam', en: 'Mandir Triloki Dhaam', hi: 'मंदिर त्रिलोकी धाम' },
      body: { nl: 'Hier hoort het verhaal van deze mandir: wanneer en door wie hij is begonnen, en wat hij voor de gemeenschap in Eindhoven is geworden. Dit deel schrijft het bestuur.', en: 'The story of this mandir belongs here: when and by whom it was started, and what it has become for the community in Eindhoven. This part is for the board to write.', hi: 'यहाँ इस मंदिर की अपनी कथा आएगी: इसकी शुरुआत कब और किसने की, और आइंडहोवन के समुदाय के लिए यह क्या बन गया है। यह भाग बोर्ड लिखेगा।' } }
  ],

  instruments: [
    { id: 'dholak', name: { nl: 'Dholak', en: 'Dholak', hi: 'ढोलक' },
      body: { nl: 'Een trom met twee vellen die met de handen wordt bespeeld. Hij geeft het ritme aan bij bhajans en kirtan.', en: 'A two-headed drum played with the hands. It sets the rhythm for bhajans and kirtan.', hi: 'दो मुँह वाला ढोल जो हाथों से बजाया जाता है। भजन और कीर्तन में ताल यही देता है।' },
      icon: 'M6 12c0-4 20-4 20 0v8c0 4-20 4-20 0zM6 12c0 4 20 4 20 0M10 14v8M16 15v8M22 14v8' },
    { id: 'harmonium', name: { nl: 'Harmonium', en: 'Harmonium', hi: 'हारमोनियम' },
      body: { nl: 'Een klein orgel met een blaasbalg. De zanger speelt de melodie en pompt met de andere hand.', en: 'A small organ with a bellows. The singer plays the melody and pumps with the other hand.', hi: 'धौंकनी वाला छोटा बाजा। गायक एक हाथ से सुर बजाता है और दूसरे से धौंकनी चलाता है।' },
      icon: 'M4 12h24v12H4zM4 17h24M8 17v7M12 17v7M16 17v7M20 17v7M24 17v7M9 12V8h14v4' },
    { id: 'dhantal', name: { nl: 'Dhantal', en: 'Dhantal', hi: 'धनताल' },
      body: { nl: 'Een lange stalen staaf die met een hoefijzervormige klopper wordt aangeslagen. Zijn heldere tik hoort bij de baithak gana, de muziek van de Hindostaanse gemeenschap.', en: 'A long steel rod struck with a horseshoe-shaped beater. Its bright ring belongs to baithak gana, the music of the Hindustani community.', hi: 'इस्पात की लंबी छड़ जिसे नाल के आकार के टुकड़े से बजाया जाता है। इसकी खनक बैठक गाना की पहचान है, जो हिंदुस्तानी समुदाय का संगीत है।' },
      icon: 'M16 3v26M12 29h8M22 9c5 0 5 8 0 8M22 9v8' }
  ],

  // id in MTD_DATA.festivals -> other names people search for.
  aliases: {
    'divali': ['Divali', 'Deepavali', 'Dipavali'],
    'shardiya-navratri': ['Nauratri', 'Navaratri'],
    'chaitra-navratri': ['Nauratri', 'Navaratri'],
    'holika-dahan': ['Holi', 'Phagwa'],
    'ramnavami': ['Ramnaumi', 'Ram Naumi', 'Ram Navami'],
    'krishna-janmashtami': ['Janamashtmi', 'Janmashtami'],
    'vijaya-dashami': ['Dussehra', 'Dashera', 'Dasara'],
    'maha-shivratri': ['Shivratri', 'Shiv Ratri'],
    'makar-sankranti': ['Makar Sakranti', 'Sankranti'],
    'geeta-jayanti': ['Gita Jayanti']
  },
  aliasNote: {
    'holika-dahan': { nl: 'De avond vóór Phagwa (Holi).', en: 'The evening before Phagwa (Holi).', hi: 'फगवा (होली) से पहले की शाम।' }
  },

  // Tap-to-explain words. Definitions follow the mandir's own Zondagdienst page.
  glossary: {
    pandit: { nl: 'Hindoepriester die de rituelen leidt.', en: 'The Hindu priest who leads the rituals.' },
    sewak: { nl: 'Dienaar: een vrijwilliger die in de mandir helpt.', en: 'Servant: a volunteer who helps in the mandir.' },
    sewaks: { nl: 'Dienaren: de vrijwilligers die in de mandir helpen.', en: 'Servants: the volunteers who help in the mandir.' },
    puja: { nl: 'Eredienst: gebed, zang en offergaven voor de goden.', en: 'Worship: prayer, song and offerings to the deities.' },
    bhajan: { nl: 'Religieus lied dat samen wordt gezongen.', en: 'A devotional song sung together.' },
    bhajans: { nl: 'Religieuze liederen die samen worden gezongen.', en: 'Devotional songs sung together.' },
    pravachan: { nl: 'Lezing over een onderwerp uit het hindoeïsme.', en: 'A talk on a topic from Hinduism.' },
    aarti: { nl: 'Eerbetoon aan de goden met licht en muziek.', en: 'Homage to the deities with light and music.' },
    prasad: { nl: 'Gezegende offergaven die na de dienst worden gedeeld.', en: 'Blessed offerings shared after the service.' },
    panchamrit: { nl: 'Melk met vijf ingrediënten, uitgedeeld na de aarti.', en: 'Milk with five ingredients, given out after the aarti.' },
    tilaka: { nl: 'Rode of gele stip op het voorhoofd, als teken van zegen.', en: 'A red or yellow mark on the forehead, as a sign of blessing.' },
    mantra: { nl: 'Heilige formule die wordt gereciteerd.', en: 'A sacred formula that is recited.' },
    murti: { nl: 'Godenbeeld.', en: 'An image of a deity.' },
    murtis: { nl: 'Godenbeelden.', en: 'Images of the deities.' },
    yagya: { nl: 'Vuurritueel voor het welzijn van een persoon, familie of gemeenschap.', en: 'A fire ritual for the wellbeing of a person, family or community.' },
    kirtan: { nl: 'Samenzang waarbij een voorzanger wordt nagezongen.', en: 'Call-and-response singing led by one voice.' },
    samskar: { nl: 'Ritueel bij een overgang in het leven, zoals geboorte, huwelijk of overlijden.', en: 'A rite at a turning point in life, such as birth, marriage or death.' },
    samskars: { nl: 'Rituelen bij overgangen in het leven, zoals geboorte, huwelijk of overlijden.', en: 'Rites at turning points in life, such as birth, marriage or death.' }
  }
};

Object.assign(window.MTD_STR, {
  her_nav: { nl: 'Erfgoed', en: 'Heritage', hi: 'विरासत' },
  her_h: { nl: 'Van India via Suriname naar Eindhoven', en: 'From India, by way of Suriname, to Eindhoven', hi: 'भारत से सूरीनाम होते हुए आइंडहोवन तक' },
  her_p: { nl: 'De mandir komt voort uit de Hindostaanse gemeenschap van Suriname. Kies een halte.', en: 'The mandir grows out of the Hindustani community of Suriname. Choose a stop.', hi: 'यह मंदिर सूरीनाम के हिंदुस्तानी समुदाय से निकला है। कोई पड़ाव चुनें।' },
  her_concept: { nl: 'Concept: nog te bevestigen door het bestuur', en: 'Concept: to be confirmed by the board', hi: 'प्रारूप: बोर्ड की पुष्टि शेष' },
  her_open: { nl: 'Nog te schrijven', en: 'Still to be written', hi: 'अभी लिखा जाना है' },
  greet: { nl: 'Raam Raam', en: 'Raam Raam', hi: 'राम राम' },
  word_h: { nl: 'Sarnami woord van de week', en: 'Sarnami word of the week', hi: 'इस सप्ताह का सरनामी शब्द' },
  word_p: { nl: 'De begroeting van de gemeenschap: twee keer de naam van Raam. Zo opent ook de eigen poster van de mandir.', en: 'The community’s greeting: the name of Raam, twice. It is how the mandir’s own poster opens too.', hi: 'समुदाय का अभिवादन: राम का नाम दो बार। मंदिर का अपना पोस्टर भी इसी से शुरू होता है।' },
  word_note: { nl: 'Volgende woorden: te kiezen door Sarnami-sprekers van de mandir.', en: 'Further words: to be chosen by the mandir’s Sarnami speakers.', hi: 'आगे के शब्द: मंदिर के सरनामी बोलने वाले चुनेंगे।' },
  music_h: { nl: 'Baithak gana', en: 'Baithak gana', hi: 'बैठक गाना' },
  music_p: { nl: 'De muziek die de gemeenschap uit Suriname meenam: zittend gezongen, met drie instrumenten.', en: 'The music the community brought from Suriname: sung seated, with three instruments.', hi: 'वह संगीत जो समुदाय सूरीनाम से साथ लाया: बैठकर गाया जाता है, तीन वाद्यों के साथ।' },
  music_soon: { nl: 'Opname volgt', en: 'Recording to follow', hi: 'रिकॉर्डिंग शीघ्र' },
  music_cta: { nl: 'Naar de harmonium- en dhollessen', en: 'See the harmonium and dhol lessons', hi: 'हारमोनियम और ढोल की कक्षाएँ देखें' },
  voices_h: { nl: 'Stemmen van de ouderen', en: 'Voices of the elders', hi: 'बुज़ुर्गों की आवाज़ें' },
  voices_p: { nl: 'Herinneringen aan de mandir, en aan opgroeien als hindoe in Suriname en Nederland. Hier komen ze te staan zodra ze zijn opgetekend, met toestemming van de verteller.', en: 'Memories of the mandir, and of growing up Hindu in Suriname and the Netherlands. They will appear here once they have been recorded, with the teller’s consent.', hi: 'मंदिर की यादें, और सूरीनाम तथा नीदरलैंड में हिंदू के रूप में बड़े होने की यादें। दर्ज होते ही, सुनाने वाले की सहमति से, वे यहाँ दिखाई देंगी।' },
  voices_empty: { nl: 'Plaats voor een herinnering', en: 'Room for a memory', hi: 'एक स्मृति के लिए स्थान' },
  voices_cta: { nl: 'Deel een herinnering', en: 'Share a memory', hi: 'अपनी स्मृति साझा करें' },
  voices_consent: { nl: 'De mandir mag mijn verhaal op de website plaatsen.', en: 'The mandir may publish my story on the website.', hi: 'मंदिर मेरी कथा वेबसाइट पर प्रकाशित कर सकता है।' },
  phagwa_on: { nl: 'Bekijk de Phagwa-kleuren', en: 'Preview the Phagwa colours', hi: 'फगवा के रंग देखें' },
  phagwa_off: { nl: 'Zet de Phagwa-kleuren uit', en: 'Turn the Phagwa colours off', hi: 'फगवा के रंग हटाएँ' },
  phagwa_p: { nl: 'Op de dag van Phagwa krijgt de hele site een zachte waas van kleur.', en: 'On the day of Phagwa the whole site takes on a soft wash of colour.', hi: 'फगवा के दिन पूरी साइट पर रंगों की हल्की छटा आ जाती है।' },
  also: { nl: 'Ook', en: 'Also', hi: 'अन्य नाम' },
  find_ph: { nl: 'Zoek een feest, bijvoorbeeld Diwali of Phagwa', en: 'Find a festival, for example Diwali or Phagwa', hi: 'पर्व खोजें, जैसे दिवाली या फगवा' },
  find_none: { nl: 'Niet gevonden in het programma van 2026.', en: 'Not found in the 2026 programme.', hi: '2026 के कार्यक्रम में नहीं मिला।' },
  find_label: { nl: 'Zoek een feest', en: 'Find a festival', hi: 'पर्व खोजें' }
});

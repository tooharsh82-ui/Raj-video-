export interface ServiceItem {
  title: string;
  desc: string;
}

export interface EquipmentItem {
  title: string;
  desc: string;
}

export interface Translation {
  navHome: string;
  navServices: string;
  navEquipment: string;
  navAbout: string;
  navPortfolio: string;
  navLocation: string;
  navContact: string;

  heroLabel: string;
  heroHeading: string;
  heroSubtitle: string;
  heroBtnContact: string;
  heroBtnWhatsApp: string;

  servicesLabel: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesList: ServiceItem[];

  equipmentLabel: string;
  equipmentTitle: string;
  equipmentSubtitle: string;
  equipmentList: EquipmentItem[];

  aboutLabel: string;
  aboutTitle: string;
  aboutRole: string;
  aboutHeading: string;
  aboutText1: string;
  aboutText2: string;
  aboutBullet1: string;
  aboutBullet2: string;
  aboutBullet3: string;

  portfolioLabel: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  portfolioTabsAll: string;
  portfolioTabsCeremonies: string;
  portfolioTabsPortraits: string;
  portfolioCandidTitle: string;
  portfolioCandidDesc: string;
  portfolioWeddingTitle: string;
  portfolioWeddingDesc: string;
  portfolioUploadZoneTitle: string;
  portfolioUploadZoneDesc: string;
  portfolioUploadSuccess: string;
  portfolioUploadError: string;
  portfolioClearBtn: string;

  locationLabel: string;
  locationTitle: string;
  locationSubtitle: string;
  locationAddressHeader: string;
  locationAddressDesc: string;
  locationTimingHeader: string;
  locationTimingDesc: string;
  locationButtonMaps: string;

  contactLabel: string;
  contactTitle: string;
  contactSubtitle: string;
  contactBtnCall: string;
  contactBtnWhatsApp: string;
}

export const translations: Record<"hi" | "en", Translation> = {
  hi: {
    navHome: "गृह",
    navServices: "सेवाएँ",
    navEquipment: "हमारे उपकरण",
    navAbout: "हमारे बारे में",
    navPortfolio: "तस्वीरें",
    navLocation: "पता",
    navContact: "संपर्क",

    heroLabel: "स्थानीय और विश्वसनीय फोटोग्राफी",
    heroHeading: "यादों को बनाते हैं अमर",
    heroSubtitle: "फोटोग्राफी और वीडियोग्राफी सेवाएँ जो आपके खास पलों को हमेशा के लिए संजोकर रखें। बिना किसी तड़क-भड़क के, केवल शुद्ध भावनाएं और यादें।",
    heroBtnContact: "संपर्क करें",
    heroBtnWhatsApp: "WhatsApp पर बात करें",

    servicesLabel: "विशेष रुप से प्रदर्शित सेवाएँ",
    servicesTitle: "हमारा काम, आपकी ख़ुशी",
    servicesSubtitle: "शादी-समारोह से लेकर आपकी निजी धरोहरों तक, हर क्षण की प्रामाणिक और मनमोहक प्रस्तुति।",
    servicesList: [
      {
        title: "शादी फोटोग्राफी",
        desc: "पारंपरिक रीति-रिवाजों और सिंदूरदान की रस्मों के हर भावपूर्ण क्षण को सुंदर रंगों और प्रकाश में ढालना।"
      },
      {
        title: "शादी वीडियोग्राफी",
        desc: "विवाह के पवित्र मांगलिक भजनों, हँसी-मज़ाक और आंसुओं को सहेजता जीवंत सिनेमाई वीडियो शूट।"
      },
      {
        title: "प्री-वेडिंग शूट",
        desc: "शादी से पहले आपके आपसी स्नेह और प्राकृतिक संवाद को खूबसूरत दृश्यों के बीच कैमरे में उतारना।"
      },
      {
        title: "ड्रोन शूट",
        desc: "आसमान की ऊंचाई से आपके भव्य विवाह मंडप और बारात की अद्भुत एवं विहंगम तस्वीरें।"
      },
      {
        title: "जन्मदिन समारोह",
        desc: "बच्चों की चुलबुली मुस्कान और केक काटने के खुशनुमा पलों की जीवंत तस्वीरें।"
      },
      {
        title: "कार्यक्रम कवरेज",
        desc: "स्थानीय सामाजिक, धार्मिक और पारिवारिक उत्सवों का संपूर्ण एवं प्रामाणिक वृत्तचित्र।"
      },
      {
        title: "पारिवारिक समारोह",
        desc: "पूजा, तिलक, मुंडन अथवा गृह प्रवेश जैसे मांगलिक प्रसंगों में पूरे परिवार की अमूल्य यादें।"
      }
    ],

    equipmentLabel: "हमारी क्षमता और साधन",
    equipmentTitle: "अभिलेखीय गुणवत्ता के उच्च उपकरण",
    equipmentSubtitle: "तारीखों और सालों के दावों से अधिक हम अपने आधुनिक कैमरों और निष्पक्ष संपादन कौशल पर भरोसा करते हैं।",
    equipmentList: [
      {
        title: "प्रोफेशनल कैमरे",
        desc: "अति-उच्च रिज़ॉल्यूशन वाले कैमरे जो रात्रि के मंद प्रकाश में भी बिना शोर के शुद्ध और तीक्ष्ण तस्वीरें खींचते हैं।"
      },
      {
        title: "स्थिर वीडियो और जिम्बल",
        desc: "बारात के शोर और थिरकते कदमों के बीच भी बिना किसी कंपन के अत्यंत सुगम और सिनेमाई वीडियो फुटेज।"
      },
      {
        title: "दक्ष संपादन और रंग-सज्जा",
        desc: "हर छवि के मूल सौंदर्य को निखारती शालीन संपादन कला, जिसमें फिजूल की बनावट या तड़क-भड़क नहीं होती।"
      },
      {
        title: "सटीक ऑडियो रिकॉर्डिंग",
        desc: "मंत्रोच्चार और वचनों की स्पष्ट ध्वनि को मूल रूप में सहेजने के लिए संवेदनशील बाहरी माइक्रोफोन।"
      }
    ],

    aboutLabel: "परिचय",
    aboutTitle: "चुनू जी",
    aboutRole: "राज वीडियो के मुख्य सूत्रधार",
    aboutHeading: "साझा यादें, प्रामाणिक अनुभव",
    aboutText1: "राज वीडियो, अर्रा बिंदटोली में स्थित एक फोटोग्राफी और वीडियोग्राफी सेवा है। हमारा उद्देश्य आपके खास पलों को सुंदर तस्वीरों और वीडियो के माध्यम से संजोना है। हम कृत्रिम प्रसाधनों और बनावटी दृश्यों के बजाय आपके वास्तविक पारिवारिक स्नेह और शुद्ध मुस्कान को महत्व देते हैं।",
    aboutText2: "अर्रा बिंदटोली के इस छोटे से हिस्से से शुरू होकर हमारा काम केवल पेशेवर सेवा नहीं, बल्कि स्थानीय संस्कृति और पारिवारिक धरोहर का एक अटूट हिस्सा बन चुका है। हम आपकी अमूल्य यादों को अगली पीढ़ियों के लिए सुरक्षित करने के लिए प्रतिबद्ध हैं।",
    aboutBullet1: "प्रत्येक तस्वीर में प्राकृतिक प्रकाश और वास्तविक हाव-भाव",
    aboutBullet2: "स्थानीय परिवेश और परंपराओं की गहरी समझ",
    aboutBullet3: "बिना किसी दिखावे या अनावश्यक दावों के पारदर्शी व्यवहार",

    portfolioLabel: "हमारा काम",
    portfolioTitle: "कुछ चुने हुए पल",
    portfolioSubtitle: "विज्ञापन और बड़े दावों के बजाय, काम की सादगी खुद अपनी कहानी कहती है।",
    portfolioTabsAll: "सभी तस्वीरें",
    portfolioTabsCeremonies: "शादी व हल्दी",
    portfolioTabsPortraits: "सुंदर प्रसंग",
    portfolioCandidTitle: "हल्दी रस्म की कोमलता",
    portfolioCandidDesc: "हल्दी समारोह के पीले रंगों के बीच दुल्हन की सहज मुस्कान, अर्रा बिंदटोली का एक वास्तविक पल।",
    portfolioWeddingTitle: "सिंदूरदान का पावन क्षण ",
    portfolioWeddingDesc: "पारंपरिक विवाह का सबसे भावुक और गौरवमयी पल, जिसे प्राकृतिक प्रकाश में बेहद सूक्ष्मता से सहेजा गया है।",
    portfolioUploadZoneTitle: "अपनी यादों को हमारे फ्रेम में देखें",
    portfolioUploadZoneDesc: "यहाँ अपनी कोई भी पारिवारिक तस्वीर अपलोड (या ड्रैग-एंड-ड्रॉप) करें और देखें कि वह हमारे विशेष राज वीडियो पोर्टफोलियो फ्रेम में कैसी सजेगी।",
    portfolioUploadSuccess: "आपकी तस्वीर सफलतापूर्वक आयात की गई है! नीचे फ्रेम में पूर्वावलोकन देखें।",
    portfolioUploadError: "कृपया केवल इमेज फाइल ही अपलोड करें (JPG, PNG)।",
    portfolioClearBtn: "तस्वीर हटाएं",

    locationLabel: "हमारा पता",
    locationTitle: "अर्रा बिंदटोली में हमारा घर",
    locationSubtitle: "स्थानीय ग्राहकों के लिए सीधे संपर्क करना बेहद आसान है। चाय पर आएं और अपने विवाह के प्रसंग साझा करें।",
    locationAddressHeader: "कार्यालय का पता",
    locationAddressDesc: "राज वीडियो, अर्रा बिंदटोली, आरा, बिहार - 802301",
    locationTimingHeader: "मिलने का समय",
    locationTimingDesc: "सोमवार से रविवार: सुबह 10:00 बजे से रात 08:00 बजे तक",
    locationButtonMaps: "गूगल मैप पर देखें",

    contactLabel: "त्वरित संपर्क",
    contactTitle: "सीधे बात करें, बिना किसी झंझट के",
    contactSubtitle: "हम किसी लंबे फॉर्म या ईमेल का इंतज़ार नहीं करवाते। नीचे दिए गए बटनों से सीधे कॉल करें या तुरंत WhatsApp चैट शुरू करें।",
    contactBtnCall: "फ़ोन कॉल करें",
    contactBtnWhatsApp: "WhatsApp चैट शुरू करें"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navEquipment: "Our Equipment",
    navAbout: "About",
    navPortfolio: "Portfolio",
    navLocation: "Location",
    navContact: "Contact",

    heroLabel: "Authentic & Trusted Local Photography",
    heroHeading: "Making Memories Eternal",
    heroSubtitle: "Photography and videography services that preserve your special moments forever. No superficial marketing, just pure emotions and timeless archives.",
    heroBtnContact: "Contact Us",
    heroBtnWhatsApp: "Chat on WhatsApp",

    servicesLabel: "Featured Services",
    servicesTitle: "We Capture What Matters",
    servicesSubtitle: "From sacred wedding ceremonies to intimate family events, we document your reality beautifully.",
    servicesList: [
      {
        title: "Wedding Photography",
        desc: "Preserving every deep emotion and ritual of your traditional wedding in rich, natural colors."
      },
      {
        title: "Traditional Videography",
        desc: "A beautiful High-Definition representation of holy wedding hymns, laughter, and tearful farewells."
      },
      {
        title: "Pre-Wedding Shoots",
        desc: "Capturing your quiet affection and natural chemistry in scenic locations before you tie the knot."
      },
      {
        title: "Drone Cinematography",
        desc: "Breathtaking stable aerial captures of your grand wedding venue and arriving procession (Baraat)."
      },
      {
        title: "Birthday & Rice Ceremonies",
        desc: "Preserving the innocent laughter of children and happy milestones with close family members."
      },
      {
        title: "Event Documentary",
        desc: "Honest and complete digital archiving of local cultural festivals, community events, and prayer meetings."
      },
      {
        title: "Family Celebrations",
        desc: "A warm photographic preservation of Tilak, Mundan, and housewarming ceremonies with your elders."
      }
    ],

    equipmentLabel: "Our Capability",
    equipmentTitle: "Archival-Grade Professional Tools",
    equipmentSubtitle: "Instead of talking about decades of experience, we showcase our focus on modern technology and skilled editing.",
    equipmentList: [
      {
        title: "High-Resolution Full-Frame Cameras",
        desc: "Modern digital bodies paired with pro-grade lenses that capture ultra-sharp images even under dim evening lights."
      },
      {
        title: "Stabilization Systems",
        desc: "Professional 3-axis gimbals providing perfectly smooth, shake-free documentation during lively wedding processions."
      },
      {
        title: "Cinematic Color & Story Editing",
        desc: "Elegant and realistic post-production. We avoid bright artificial presets, focusing instead on true-to-life tones."
      },
      {
        title: "Directional External Audio Gear",
        desc: "Dedicated lapel and shotgun microphones to record the clarity of sacred mantras and emotional vows with zero distortion."
      }
    ],

    aboutLabel: "About Us",
    aboutTitle: "Chunnu Ji",
    aboutRole: "Lead Photographer & Proprietor",
    aboutHeading: "Genuine Presence, Local Roots",
    aboutText1: "Raj Video, located in Ara Bindtoli, is a professional wedding photography and videography service. Our single mission is to document your beautiful moments with dignity and honesty. We believe in capturing your natural smiles, quiet tears, and real laughter rather than forced poses under harsh studio conditions.",
    aboutText2: "Belonging directly to Ara Bindtoli, we view our business not as a commercial corporate machine, but as an essential service to the families of our community. We handle every assignment with personal care and absolute honesty.",
    aboutBullet1: "Natural light, authentic details, and zero forced poses",
    aboutBullet2: "Deep local understanding of family traditions and rituals",
    aboutBullet3: "Honest pricing with absolutely no hidden charges",

    portfolioLabel: "Our Portfolio",
    portfolioTitle: "Moments Captured with Grace",
    portfolioSubtitle: "We let our clean frames speak for themselves, without any fake reviews or exaggerated awards.",
    portfolioTabsAll: "All Images",
    portfolioTabsCeremonies: "Weddings & Haldi",
    portfolioTabsPortraits: "Intimate Memories",
    portfolioCandidTitle: "Glow of Haldi Ceremony",
    portfolioCandidDesc: "A serene candid moment during the traditional Haldi ritual, documented meticulously at Ara Bindtoli.",
    portfolioWeddingTitle: "The Holy Union",
    portfolioWeddingDesc: "The deep emotion of the traditional Sindoor ritual, captured in beautiful soft ambient room lighting.",
    portfolioUploadZoneTitle: "See Your Photograph in Our Frame",
    portfolioUploadZoneDesc: "Upload your own wedding invitation, family photo, or personal portrait here to visualize how beautifully we frame and deliver your printed archives.",
    portfolioUploadSuccess: "Your image loaded beautifully! Scroll down to see the live framed preview.",
    portfolioUploadError: "Please upload an image file (JPG, PNG) under 10MB.",
    portfolioClearBtn: "Remove Image",

    locationLabel: "Our Location",
    locationTitle: "Visit Our Workspace in Ara Bindtoli",
    locationSubtitle: "Frictionless local access. Walk in to outline your wedding schedule over a hot cup of tea.",
    locationAddressHeader: "Studio Address",
    locationAddressDesc: "Raj Video, Ara Bindtoli, Ara, Bihar - 802301",
    locationTimingHeader: "Studio Hours",
    locationTimingDesc: "Monday to Sunday: 10:00 AM to 08:00 PM",
    locationButtonMaps: "Open in Google Maps",

    contactLabel: "Instant Contact",
    contactTitle: "Call or WhatsApp Us Instantly",
    contactSubtitle: "We do not believe in complicated booking forms. Connect directly with the team using the instant buttons below.",
    contactBtnCall: "Call Studio Now",
    contactBtnWhatsApp: "Chat on WhatsApp"
  }
};

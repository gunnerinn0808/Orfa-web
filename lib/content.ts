export const hero = {
  headline: "Fallegur garður, minni fyrirhöfn",
  subheadline: "Grassláttur og slátturóbotar til leigu á Akureyri.",
  primaryCta: { label: "Hafa samband", href: "/hafa-samband" },
  secondaryCta: { label: "Skoða þjónustu", href: "/slatturobot" },
  image: {
    main: {
      src: "/images/lawn-mowed.jpg",
      alt: "Nýslegin grasflöt",
    },
    accent: {
      src: "/images/lawn-garden-path.jpg",
      alt: "Fallega sleginn garður með hellulögðum stíg",
    },
  },
};

export const robotBenefits = [
  {
    icon: "eye",
    title: "Eftirlit",
    body: "Við fylgjumst með vélinni allan leigutímann svo þú þarft ekki að hafa áhyggjur af neinu.",
  },
  {
    icon: "wrench",
    title: "Niðursetning",
    body: "Við setjum vélina upp og stillum hana fyrir garðinn þinn þegar leigan hefst.",
  },
  {
    icon: "warehouse",
    title: "Geymsla yfir veturinn",
    body: "Þegar sláttutímabilinu lýkur tökum við vélina í geymslu fram á næsta vor.",
  },
  {
    icon: "settings",
    title: "Þrif, hnífaskipti og önnur umhirða",
    body: "Við sjáum um reglulegt viðhald á meðan vélin er hjá þér, meðal annars þrif og hnífaskipti.",
  },
] as const;

export const beforeAfter = {
  eyebrow: "Fyrir og eftir",
  heading: "Sýnilegur munur á garðinum",
  body: "Regluleg, lítill sláttur með slátturóbot skilar öðruvísi útkomu en hefðbundinn sláttur. Þessi mynd er úr garði sem hefur verið sleginn reglulega með róbot yfir sumarið.",
  points: [
    {
      title: "Mosi hverfur",
      body: "Regluleg og létt sláttur veikir mosann og gefur grasinu meira svigrúm til að þykkna.",
    },
    {
      title: "Garðurinn verður jafnari",
      body: "Tíður sláttur jafnar út vöxtinn og skilar sléttari, þéttari grasflöt.",
    },
    {
      title: "Grasið nýtist sem áburður",
      body: "Fínt afskorið gras fellur ofan í svörðinn og skilar næringu til baka. Garðurinn verður grænni og fallegri.",
    },
  ],
  image: {
    src: "/images/before-after-lawn.jpg",
    alt: "Sami garður fyrir og eftir reglulegan slátt með slátturóbot, mosi horfinn og grasflötin orðin jöfn og græn",
  },
};

export const grassMowing = {
  eyebrow: "Önnur þjónusta",
  heading: "Grassláttur",
  body: "Viltu frekar að við sjáum alfarið um sláttinn? Við bjóðum einnig upp á hefðbundinn grasslátt fyrir þá sem vilja fá garðinn sleginn reglulega.",
  points: [
    "Við finnum réttan frest fyrir þinn garð",
    "Þjónustutímabil frá maí til september",
    "Snyrtileg umgjörð eftir hvern slátt",
    "Sveigjanlegt fyrirkomulag eftir þörfum garðsins",
  ],
  cta: { label: "Fá grasslátt", href: "/grassslattur" },
  image: {
    src: "/images/tractor-mowing.jpg",
    alt: "Sláttutraktor á grasflöt við fjölbýlishús",
  },
};

export const about = {
  heading: "Um Orfa",
  lead: "Orfa var stofnað af Gunnari Þór Sigurðarsyni, 18 ára frumkvöðli sem hefur starfað undir nafninu Gunnsi Garðsláttur síðan 2022.",
  trustNote:
    "Orfa er staðsett á Akureyri og leggur metnað í að hver garður fái persónulega og vandaða umhirðu, hvort sem verkefnið er stórt eða lítið.",
  values: [
    {
      title: "Frumkvæði",
      body: "Við fylgjumst með nýjustu tækni í slátturóbotum og leitum sjálf lausna svo þú þurfir ekki að hafa áhyggjur af neinu.",
    },
    {
      title: "Jákvæðni",
      body: "Þjónustulund og gott viðmót í öllum samskiptum, frá fyrstu fyrirspurn og út leigutímann.",
    },
    {
      title: "Sveigjanleiki",
      body: "Lausnin er löguð að þínum garði og þínum þörfum, ekki öfugt.",
    },
  ],
};

export const aboutFacts = [
  { icon: "map", label: "Þjónustusvæði", value: "Akureyri" },
  {
    icon: "badge",
    label: "Reynsla",
    value: "Garðslátt síðan 2022",
  },
  { icon: "calendar", label: "Stofnað", value: "2026" },
] as const;

export const aboutStory = [
  "Ég heiti Gunnar Þór Sigurðarson og er 18 ára gamall frumkvöðull. Ég hef starfað við garðslátt undir nafninu Gunnsi Garðsláttur síðan sumarið 2022, þegar ég var í 8. bekk.",
  "Eftir nokkur ár í grasslætti stofnaði ég Orfa árið 2026 til að þróa starfsemina áfram og bjóða upp á nýja og spennandi þjónustu: útleigu á slátturóbotum.",
  "Markmiðið er að gera garðhirðu einfaldari og þægilegri fyrir viðskiptavini. Ég legg mikla áherslu á persónulega og góða þjónustu, skýr samskipti og að hver viðskiptavinur fái lausn sem hentar hans garði og þörfum.",
  "Með Orfa vil ég byggja upp trausta þjónustu þar sem gæði, áreiðanleiki og góð samskipti eru í fyrirrúmi.",
] as const;

export const faqs = [
  {
    q: "Hvernig virkar leiga á slátturóbot?",
    a: "Þú sendir okkur fyrirspurn með upplýsingum um garðinn þinn. Við finnum róbot sem hentar, setjum hann upp hjá þér og hann sér svo um daglegan slátt allt sumarið.",
  },
  {
    q: "Hentar slátturóbot fyrir minn garð?",
    a: "Flestir garðar henta vel fyrir slátturóbot, en lögun, halli og umgirðing skipta máli. Við förum yfir aðstæður hjá þér og ráðleggjum hvað hentar best.",
  },
  {
    q: "Hversu stóran garð getur róbotinn slegið?",
    a: "Það fer eftir tegund róbots. Við bjóðum upp á mismunandi gerðir af róbotum, miðað við halla og fermetrafjölda garðsins. Sendu okkur upplýsingar um þinn garð og við ráðleggjum réttu vélina fyrir hann.",
  },
  {
    q: "Hvað þarf að undirbúa áður en róbotinn er settur upp?",
    a: "Í flestum tilfellum þarf lítið annað en aðgang að garðinum og rafmagn fyrir hleðslustöðina. Við förum yfir nákvæm atriði með þér áður en uppsetning fer fram.",
  },
  {
    q: "Þarf að grafa vír í garðinn fyrir róbotinn?",
    a: "Nei. Róbotarnir sem við bjóðum upp á staðsetja sig með gervihnattasambandi í stað hefðbundins jaðarvírs, svo ekki þarf að leggja vír í garðinn. Þeir tengjast rafmagni með venjulegri innstungu og nota lítið rafmagn.",
  },
  {
    q: "Hvað gerist ef eitthvað kemur upp á?",
    a: "Róbotinn sendir okkur sjálfkrafa tilkynningu í símann ef eitthvað er athugavert, og við mætum eins fljótt og hægt er. Ef upp kemur alvarlegt tilvik er róbotinn tryggður, og á meðan hann er í viðgerð sláum við garðinn þinn á sama verði eða ódýrara.",
  },
  {
    q: "Hvað kostar að leigja slátturóbot?",
    a: "Verð fer eftir stærð og lögun garðsins. Sendu okkur fyrirspurn og þú færð tilboð sem hentar þínum garði.",
  },
] as const;

export const contactInterests = [
  "Útleigu á slátturóbot",
  "Grasslátt",
  "Bæði",
] as const;

export const testimonials = [
  {
    quote:
      "Ég hef undanfarin ár notið þjónustu hjá honum Gunnari, hann hefur séð um að slá garðinn hjá mér og ég gæti hreinlega ekki verið sáttari, þjónustulundin hjá honum er eitthvað annað frábær. Hann skilar góðu verki og frágangur hjá honum er til fyrirmyndar. Ég mæli 100% með honum til allra verka, ekki hika við að leita til hans. Topp maður með topp þjónustu.",
    author: "Unnur Elva Vébjörnsdóttir",
    rating: 5,
  },
  {
    quote: "Ég mæli svo sannarlega með Gunnari. Vinnur vel og ég er mjög ánægð með störf hans.",
    author: "Júlíana Þórhildur Lárusdóttir",
    rating: 5,
  },
] as const;

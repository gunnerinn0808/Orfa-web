export const site = {
  name: "Orfa",
  tagline: "Slátturóbot á leigu og grassláttur",
  description:
    "Orfa leigir út slátturóbota og býður upp á grasslátt, einfaldar og þægilegar lausnir svo þú getir sleppt við sláttinn.",

  // Placeholder domain — replace with the real production domain before launch (used by sitemap.ts/robots.ts).
  url: "https://www.example.com",

  // Formspree form ID — endpoint is https://formspree.io/f/{formspreeFormId}. Not a secret.
  formspreeFormId: "xvkgdegn",

  // Contact details.
  phone: "842 2828",
  phoneHref: "tel:+3548422828",
  email: "gunnsigardslattur@gmail.com",
  location: "Akureyri",
  facebookName: "Orfa",

  nav: [
    { href: "/", label: "Heim" },
    { href: "/slatturobot", label: "Slátturóbot" },
    { href: "/grassslattur", label: "Grassláttur" },
    { href: "/um-okkur", label: "Um okkur" },
    { href: "/hafa-samband", label: "Hafðu samband" },
  ],

  navCta: { href: "/hafa-samband", label: "Leigja slátturóbot" },
} as const;

export type NavItem = (typeof site.nav)[number];

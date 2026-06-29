export const PARTNERS = [
  { name: "EduLink", logo: "/partners/edulink.png" },
  {
    name: "Open Badge",
    logo: "/partners/openbadge.png",
    href: "https://openbadgefactory.com/",
  },
  {
    name: "ISET Sousse",
    logo: "/partners/isetso.png",
    href: "https://isetso.rnu.tn/fr",
  },
  {
    name: "Avignon Université",
    logo: "/partners/avignonuniversite.png",
    href: "https://univ-avignon.fr/",
  },
  {
    name: "Graasp",
    logo: "/partners/graasp.png",
    href: "https://graasp.org",
  },
] as const

export type Partner = (typeof PARTNERS)[number]

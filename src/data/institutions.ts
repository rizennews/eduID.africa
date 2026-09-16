import type { Locale } from "@/lib/i18n";

export type InstitutionStatus = "national" | "catchall" | "not-connected";

export interface Institution {
  id: string;
  name: {
    en: string;
    fr: string;
    pt: string;
  };
  country: {
    en: string;
    fr: string;
    pt: string;
  };
  federation: {
    en: string;
    fr: string;
    pt: string;
  };
  servicesCount: number;
  statusType: InstitutionStatus;
}

export const institutionsData: Institution[] = [
  {
    id: "ug-legon",
    name: {
      en: "University of Ghana, Legon",
      fr: "Université du Ghana, Legon",
      pt: "Universidade de Gana, Legon",
    },
    country: {
      en: "Ghana",
      fr: "Ghana",
      pt: "Gana",
    },
    federation: {
      en: "eduID.africa catchall",
      fr: "fédération d'accueil eduID.africa",
      pt: "federação genérica eduID.africa",
    },
    servicesCount: 3,
    statusType: "catchall",
  },
  {
    id: "uon-nairobi",
    name: {
      en: "University of Nairobi",
      fr: "Université de Nairobi",
      pt: "Universidade de Nairóbi",
    },
    country: {
      en: "Kenya",
      fr: "Kenya",
      pt: "Quénia",
    },
    federation: {
      en: "KENET national federation",
      fr: "fédération nationale KENET",
      pt: "federação nacional KENET",
    },
    servicesCount: 7,
    statusType: "national",
  },
  {
    id: "uy1-yaounde",
    name: {
      en: "Université de Yaoundé I",
      fr: "Université de Yaoundé I",
      pt: "Universidade de Yaoundé I",
    },
    country: {
      en: "Cameroon",
      fr: "Cameroun",
      pt: "Camarões",
    },
    federation: {
      en: "Not yet connected",
      fr: "Pas encore connecté",
      pt: "Ainda não ligada",
    },
    servicesCount: 0,
    statusType: "not-connected",
  },
  {
    id: "mak-uganda",
    name: {
      en: "Makerere University",
      fr: "Université Makerere",
      pt: "Universidade Makerere",
    },
    country: {
      en: "Uganda",
      fr: "Ouganda",
      pt: "Uganda",
    },
    federation: {
      en: "RENU national federation",
      fr: "fédération nationale RENU",
      pt: "federação nacional RENU",
    },
    servicesCount: 6,
    statusType: "national",
  },
  {
    id: "ucad-dakar",
    name: {
      en: "Université Cheikh Anta Diop (UCAD)",
      fr: "Université Cheikh Anta Diop (UCAD)",
      pt: "Universidade Cheikh Anta Diop (UCAD)",
    },
    country: {
      en: "Senegal",
      fr: "Sénégal",
      pt: "Senegal",
    },
    federation: {
      en: "snRER national federation",
      fr: "fédération nationale snRER",
      pt: "federação nacional snRER",
    },
    servicesCount: 5,
    statusType: "national",
  },
  {
    id: "uct-capetown",
    name: {
      en: "University of Cape Town",
      fr: "Université du Cap",
      pt: "Universidade da Cidade do Cabo",
    },
    country: {
      en: "South Africa",
      fr: "Afrique du Sud",
      pt: "África do Sul",
    },
    federation: {
      en: "TENET national federation",
      fr: "fédération nationale TENET",
      pt: "federação nacional TENET",
    },
    servicesCount: 8,
    statusType: "national",
  },
  {
    id: "aau-addis",
    name: {
      en: "Addis Ababa University",
      fr: "Université d'Addis-Abeba",
      pt: "Universidade de Adis Abeba",
    },
    country: {
      en: "Ethiopia",
      fr: "Éthiopie",
      pt: "Etiópia",
    },
    federation: {
      en: "CERENET national federation",
      fr: "fédération nationale CERENET",
      pt: "federação nacional CERENET",
    },
    servicesCount: 4,
    statusType: "national",
  },
  {
    id: "ufhb-abidjan",
    name: {
      en: "Université Félix Houphouët-Boigny",
      fr: "Université Félix Houphouët-Boigny",
      pt: "Universidade Félix Houphouët-Boigny",
    },
    country: {
      en: "Côte d'Ivoire",
      fr: "Côte d'Ivoire",
      pt: "Costa do Marfim",
    },
    federation: {
      en: "eduID.africa catchall",
      fr: "fédération d'accueil eduID.africa",
      pt: "federação genérica eduID.africa",
    },
    servicesCount: 3,
    statusType: "catchall",
  },
  {
    id: "unza-lusaka",
    name: {
      en: "University of Zambia",
      fr: "Université de Zambie",
      pt: "Universidade da Zâmbia",
    },
    country: {
      en: "Zambia",
      fr: "Zambie",
      pt: "Zâmbia",
    },
    federation: {
      en: "ZAMREN national federation",
      fr: "fédération nationale ZAMREN",
      pt: "federação nacional ZAMREN",
    },
    servicesCount: 5,
    statusType: "national",
  },
];

export function getInstitutions(locale: Locale) {
  return institutionsData.map((inst) => ({
    id: inst.id,
    name: inst.name[locale] || inst.name.en,
    country: inst.country[locale] || inst.country.en,
    federation: inst.federation[locale] || inst.federation.en,
    servicesCount: inst.servicesCount,
    statusType: inst.statusType,
  }));
}

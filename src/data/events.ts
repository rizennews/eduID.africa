import type { Locale } from "@/lib/i18n";

export interface RoadshowEvent {
  id: string;
  month: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  day: string;
  year: string;
  title: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  venue: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  duration: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  audience: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  status: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  statusType: "open" | "filling" | "planning";
  indicoUrl: string;
}

export const roadshowEvents: RoadshowEvent[] = [
  {
    id: "accra-2026",
    month: {
      en: "Aug",
      fr: "Août",
      pt: "Ago",
      ar: "أغسطس",
    },
    day: "19",
    year: "2026",
    title: {
      en: "West Africa T&I Roadshow — Accra",
      fr: "Roadshow T&I Afrique de l'Ouest — Accra",
      pt: "Roadshow de T&I da África Ocidental — Acra",
      ar: "جولة T&I في غرب أفريقيا — أكرا",
    },
    venue: {
      en: "University of Ghana, Legon",
      fr: "Université du Ghana, Legon",
      pt: "Universidade de Gana, Legon",
      ar: "جامعة غانا، ليغون",
    },
    duration: {
      en: "2 days",
      fr: "2 jours",
      pt: "2 dias",
      ar: "يومان",
    },
    audience: {
      en: "HEI IT administrators",
      fr: "Administrateurs informatiques d'ESR",
      pt: "Administradores de TI de IES",
      ar: "مسؤولو تكنولوجيا المعلومات في مؤسسات التعليم العالي",
    },
    status: {
      en: "Open",
      fr: "Ouvert",
      pt: "Aberto",
      ar: "مفتوح",
    },
    statusType: "open",
    indicoUrl: "https://indico.wacren.net/event/accra-ti-roadshow",
  },
  {
    id: "nairobi-2026",
    month: {
      en: "Sep",
      fr: "Sept",
      pt: "Set",
      ar: "سبتمبر",
    },
    day: "9",
    year: "2026",
    title: {
      en: "East Africa T&I Roadshow — Nairobi",
      fr: "Roadshow T&I Afrique de l'Est — Nairobi",
      pt: "Roadshow de T&I da África Oriental — Nairóbi",
      ar: "جولة T&I في شرق أفريقيا — نيروبي",
    },
    venue: {
      en: "KENET offices",
      fr: "Bureaux du KENET",
      pt: "Instalações da KENET",
      ar: "مكاتب KENET",
    },
    duration: {
      en: "2 days",
      fr: "2 jours",
      pt: "2 dias",
      ar: "يومان",
    },
    audience: {
      en: "HEI IT administrators + NRO operators",
      fr: "Administrateurs informatiques d'ESR + opérateurs NRO",
      pt: "Administradores de TI de IES + operadores NRO",
      ar: "مسؤولو تكنولوجيا المعلومات في مؤسسات التعليم العالي ومشغلو NRO",
    },
    status: {
      en: "Open",
      fr: "Ouvert",
      pt: "Aberto",
      ar: "مفتوح",
    },
    statusType: "open",
    indicoUrl: "https://indico.wacren.net/event/nairobi-ti-roadshow",
  },
  {
    id: "dakar-2026",
    month: {
      en: "Oct",
      fr: "Oct",
      pt: "Out",
      ar: "أكتوبر",
    },
    day: "14",
    year: "2026",
    title: {
      en: "Francophone Africa — Dakar",
      fr: "Afrique Francophone — Dakar",
      pt: "África Francófona — Dacar",
      ar: "أفريقيا الناطقة بالفرنسية — داكار",
    },
    venue: {
      en: "UCAD",
      fr: "UCAD",
      pt: "UCAD",
      ar: "جامعة الشيخ أنتا ديوب (UCAD)",
    },
    duration: {
      en: "2 days",
      fr: "2 jours",
      pt: "2 dias",
      ar: "يومان",
    },
    audience: {
      en: "French-language cohort",
      fr: "Cohorte francophone",
      pt: "Coorte de língua francesa",
      ar: "المجموعة الناطقة بالفرنسية",
    },
    status: {
      en: "Filling",
      fr: "Presque complet",
      pt: "A esgotar",
      ar: "شبه ممتلئ",
    },
    statusType: "filling",
    indicoUrl: "https://indico.wacren.net/event/dakar-ti-roadshow",
  },
  {
    id: "lusaka-2026",
    month: {
      en: "Nov",
      fr: "Nov",
      pt: "Nov",
      ar: "نوفمبر",
    },
    day: "4",
    year: "2026",
    title: {
      en: "Southern Africa T&I Roadshow — Lusaka",
      fr: "Roadshow T&I Afrique Australe — Lusaka",
      pt: "Roadshow de T&I da África Austral — Lusaca",
      ar: "جولة T&I في أفريقيا الجنوبية — لوساكا",
    },
    venue: {
      en: "ZAMREN host",
      fr: "Hôte ZAMREN",
      pt: "Anfitrião ZAMREN",
      ar: "المضيف ZAMREN",
    },
    duration: {
      en: "2 days",
      fr: "2 jours",
      pt: "2 dias",
      ar: "يومان",
    },
    audience: {
      en: "HEI IT administrators",
      fr: "Administrateurs informatiques d'ESR",
      pt: "Administradores de TI de IES",
      ar: "مسؤولو تكنولوجيا المعلومات في مؤسسات التعليم العالي",
    },
    status: {
      en: "Planning",
      fr: "Planification",
      pt: "Em planeamento",
      ar: "قيد التخطيط",
    },
    statusType: "planning",
    indicoUrl: "https://indico.wacren.net/event/lusaka-ti-roadshow",
  },
];

export function getRoadshowEvents(locale: Locale) {
  return roadshowEvents.map((event) => ({
    id: event.id,
    month: event.month[locale] || event.month.en,
    day: event.day,
    year: event.year,
    title: event.title[locale] || event.title.en,
    venue: event.venue[locale] || event.venue.en,
    duration: event.duration[locale] || event.duration.en,
    audience: event.audience[locale] || event.audience.en,
    status: event.status[locale] || event.status.en,
    statusType: event.statusType,
    indicoUrl: event.indicoUrl,
  }));
}

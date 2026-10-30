import type { Locale } from "@/lib/i18n";

export interface EventDescription {
  intro: string;
  audienceLabel: string;
  audienceItems: string[];
  outcomesLabel: string;
  outcomesItems: string[];
}

export interface RoadshowEvent {
  id: string;
  image?: string;
  startDate?: string;
  endDate?: string;
  description?: {
    en: EventDescription;
    fr: EventDescription;
    pt: EventDescription;
    ar: EventDescription;
  };
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
  statusType: "open" | "filling" | "planning" | "deactivated";
  indicoUrl: string;
  isActive?: boolean;
}

export const roadshowEvents: RoadshowEvent[] = [
  {
    id: "niger-2026",
    image: "/event/niger-workshop.jpg",
    startDate: "2026-11-02",
    endDate: "2026-11-03",
    description: {
      en: {
        intro: "This online workshop aims to equip participants with fundamental knowledge of identity management in a federated environment. It will present the key concepts and requirements needed to help institutions implement identity management and integrate it into a federation. The in-person hands-on workshops will build practical skills in implementing and managing federated identity solutions.",
        audienceLabel: "Target audience",
        audienceItems: [
          "DevOps engineers and application developers from NRENs",
          "Systems engineers and network administrators from National Research and Education Networks (NRENs)",
        ],
        outcomesLabel: "Expected outcomes",
        outcomesItems: [
          "Better understanding of the concepts and requirements related to federated identity management.",
          "Institutions prepared for the next steps towards setting up a federation and implementing eduID/eduroam.",
        ],
      },
      fr: {
        intro: "Cet atelier en ligne vise à outiller les participants avec les connaissances fondamentales sur la gestion des identités dans un environnement fédéré. Il permettra de présenter les concepts clés et les exigences nécessaires pour aider les institutions à mettre en œuvre la gestion des identités et leur intégration dans une fédération. Les ateliers pratiques en présentiel développeront les pratiques dans la mise en œuvre et la gestion de solutions d'identité fédérée.",
        audienceLabel: "Public cible",
        audienceItems: [
          "Ingénieurs DevOps et développeurs d'applications des NREN",
          "Ingénieurs systèmes et administrateurs réseaux des Réseaux Nationaux de Recherche et d'Éducation (NREN)",
        ],
        outcomesLabel: "Principaux résultats attendus",
        outcomesItems: [
          "Meilleure compréhension des concepts et des exigences liés à la gestion des identités fédérées.",
          "Institutions préparées pour les prochaines étapes vers la mise en place d'une fédération et l'implémentation d'eduID/eduroam.",
        ],
      },
      pt: {
        intro: "Este workshop online visa equipar os participantes com conhecimentos fundamentais sobre a gestão de identidades num ambiente federado. Serão apresentados os conceitos e requisitos essenciais para ajudar as instituições a implementar a gestão de identidades e a sua integração numa federação. Os workshops práticos presenciais desenvolverão as práticas de implementação e gestão de soluções de identidade federada.",
        audienceLabel: "Público-alvo",
        audienceItems: [
          "Engenheiros DevOps e desenvolvedores de aplicações das NREN",
          "Engenheiros de sistemas e administradores de redes das Redes Nacionais de Ensino e Pesquisa (NREN)",
        ],
        outcomesLabel: "Resultados esperados",
        outcomesItems: [
          "Melhor compreensão dos conceitos e requisitos relacionados com a gestão de identidades federadas.",
          "Instituições preparadas para os próximos passos rumo à criação de uma federação e à implementação do eduID/eduroam.",
        ],
      },
      ar: {
        intro: "يهدف هذا الورشة عبر الإنترنت إلى تزويد المشاركين بالمعرفة الأساسية حول إدارة الهوية في بيئة فيدرالية. ستعرض المفاهيم والمتطلبات الرئيسية اللازمة لمساعدة المؤسسات على تنفيذ إدارة الهوية ودمجها في اتحاد. وستطوّر ورش العمل العملية الحضورية الممارسات في تنفيذ وإدارة حلول الهوية الفيدرالية.",
        audienceLabel: "الجمهور المستهدف",
        audienceItems: [
          "مهندسو DevOps ومطوّرو التطبيقات في شبكات NREN",
          "مهندسو الأنظمة ومديرو الشبكات في شبكات البحث والتعليم الوطنية (NREN)",
        ],
        outcomesLabel: "النتائج المتوقعة",
        outcomesItems: [
          "فهم أفضل للمفاهيم والمتطلبات المتعلقة بإدارة الهوية الفيدرالية.",
          "مؤسسات مستعدة للخطوات التالية نحو إنشاء اتحاد وتنفيذ eduID/eduroam.",
        ],
      },
    },
    month: {
      en: "Nov",
      fr: "Nov",
      pt: "Nov",
      ar: "نوفمبر",
    },
    day: "2-3",
    year: "2026",
    title: {
      en: "Trust and Identity Roadshow - Niger",
      fr: "Roadshow Confiance et Identité - Niger",
      pt: "Roadshow de Confiança e Identidade - Níger",
      ar: "جولة الثقة والهوية - النيجر",
    },
    venue: {
      en: "Niamey",
      fr: "Niamey",
      pt: "Niamei",
      ar: "نيامي",
    },
    duration: {
      en: "2 days",
      fr: "2 jours",
      pt: "2 dias",
      ar: "يومان",
    },
    audience: {
      en: "HEI IT administrators + NRENs",
      fr: "Administrateurs informatiques d'ESR + RNRE",
      pt: "Administradores de TI de IES + RNER",
      ar: "مسؤولو تكنولوجيا المعلومات في مؤسسات التعليم العالي + شبكات NREN",
    },
    status: {
      en: "Open",
      fr: "Ouvert",
      pt: "Aberto",
      ar: "مفتوح",
    },
    statusType: "open",
    indicoUrl: "https://indico.wacren.net/event/281/",
    isActive: true,
  },
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
      en: "West Africa T&I Roadshow: Accra",
      fr: "Roadshow T&I Afrique de l'Ouest: Accra",
      pt: "Roadshow de T&I da África Ocidental: Acra",
      ar: "جولة T&I في غرب أفريقيا: أكرا",
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
      en: "Deactivated",
      fr: "Désactivé",
      pt: "Desativado",
      ar: "معطل",
    },
    statusType: "deactivated",
    indicoUrl: "https://indico.wacren.net/event/accra-ti-roadshow",
    isActive: false,
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
      en: "East Africa T&I Roadshow: Nairobi",
      fr: "Roadshow T&I Afrique de l'Est: Nairobi",
      pt: "Roadshow de T&I da África Oriental: Nairóbi",
      ar: "جولة T&I في شرق أفريقيا: نيروبي",
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
      en: "Deactivated",
      fr: "Désactivé",
      pt: "Desativado",
      ar: "معطل",
    },
    statusType: "deactivated",
    indicoUrl: "https://indico.wacren.net/event/nairobi-ti-roadshow",
    isActive: false,
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
      en: "Francophone Africa: Dakar",
      fr: "Afrique Francophone: Dakar",
      pt: "África Francófona: Dacar",
      ar: "أفريقيا الناطقة بالفرنسية: داكار",
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
      en: "Deactivated",
      fr: "Désactivé",
      pt: "Desativado",
      ar: "معطل",
    },
    statusType: "deactivated",
    indicoUrl: "https://indico.wacren.net/event/dakar-ti-roadshow",
    isActive: false,
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
      en: "Southern Africa T&I Roadshow: Lusaka",
      fr: "Roadshow T&I Afrique Australe: Lusaka",
      pt: "Roadshow de T&I da África Austral: Lusaca",
      ar: "جولة T&I في أفريقيا الجنوبية: لوساكا",
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
      en: "Deactivated",
      fr: "Désactivé",
      pt: "Desativado",
      ar: "معطل",
    },
    statusType: "deactivated",
    indicoUrl: "https://indico.wacren.net/event/lusaka-ti-roadshow",
    isActive: false,
  },
];

export function getRoadshowEvents(locale: Locale) {
  return roadshowEvents.map((event) => ({
    id: event.id,
    image: event.image,
    startDate: event.startDate,
    endDate: event.endDate,
    description: event.description?.[locale] || event.description?.en,
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
    isActive: event.isActive ?? true,
  }));
}

export type LocalizedRoadshowEvent = ReturnType<typeof getRoadshowEvents>[number];

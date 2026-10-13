import type { Locale } from "@/lib/i18n";

export interface PolicySection {
  id: string;
  number: string;
  title: Record<Locale, string>;
  content?: Record<Locale, string[]>;
  subsections?: {
    id: string;
    number: string;
    title: Record<Locale, string>;
    content: Record<Locale, string[]>;
    bullets?: Record<Locale, string[]>;
  }[];
  bullets?: Record<Locale, string[]>;
  definitions?: {
    term: string;
    definition: Record<Locale, string>;
  }[];
}

export interface PolicyDocument {
  id: "federation-policy" | "mrps";
  title: Record<Locale, string>;
  shortTitle: Record<Locale, string>;
  version: string;
  lastModified: string;
  authors: string[];
  license: string;
  licenseUrl: string;
  attribution: Record<Locale, string>;
  description: Record<Locale, string>;
  sections: PolicySection[];
}

export const federationPolicy: PolicyDocument = {
  id: "federation-policy",
  title: {
    en: "eduID.africa Identity Federation Policy",
    fr: "Politique de la Fédération d'Identité eduID.africa",
    pt: "Política da Federação de Identidade eduID.africa",
    ar: "سياسة اتحاد الهوية الرقمية eduID.africa",
  },
  shortTitle: {
    en: "Identity Federation Policy",
    fr: "Politique de la Fédération",
    pt: "Política da Federação",
    ar: "سياسة الاتحاد",
  },
  version: "v0.1",
  lastModified: "20 May 2021",
  authors: ["Mwotil Alex", "Omo Oaiya", "Mario Reale", "Eriko Porto"],
  license: "Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0)",
  licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
  attribution: {
    en: 'Based on the "SWAMID Federation Policy", written by L. Johansson, T. Wiberg, V. Nordh, P. Axelsson, M. Berglund (©2020 SUNET — Swedish University Computer Network).',
    fr: 'Basé sur la « SWAMID Federation Policy », rédigée par L. Johansson, T. Wiberg, V. Nordh, P. Axelsson, M. Berglund (©2020 SUNET — Swedish University Computer Network).',
    pt: 'Baseado na "SWAMID Federation Policy", da autoria de L. Johansson, T. Wiberg, V. Nordh, P. Axelsson, M. Berglund (©2020 SUNET — Swedish University Computer Network).',
    ar: 'مبني على "SWAMID Federation Policy"، صاغها L. Johansson و T. Wiberg و V. Nordh و P. Axelsson و M. Berglund (حقوق النشر ©2020 SUNET — شبكة حواسيب الجامعات السويدية).',
  },
  description: {
    en: "Governing framework defining rights, operational obligations, legal terms, and dispute resolution for all participants in the African continental catch-all identity federation.",
    fr: "Cadre directeur définissant les droits, obligations opérationnelles, conditions légales et règlement des différends pour tous les participants à la fédération d'identité continentale africaine.",
    pt: "Quadro regulador que define direitos, obrigações operacionais, condições jurídicas e resolução de litígios para todos os participantes na federação pan-africana de identidade.",
    ar: "الإطار الحاكم الذي يحدد الحقوق والالتزامات التشغيلية والشروط القانونية وتسوية النزاعات لجميع المشاركين في اتحاد الهوية القاري الأفريقي الشامل.",
  },
  sections: [
    {
      id: "definitions",
      number: "1",
      title: {
        en: "Terminology & Definitions",
        fr: "Terminologie et définitions",
        pt: "Terminologia e Definições",
        ar: "المصطلحات والتعريفات",
      },
      content: {
        en: [
          'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.',
          "The following terms and definitions apply throughout this document:",
        ],
        fr: [
          'Les termes clés « DOIT » (MUST), « NE DOIT PAS » (MUST NOT), « EXIGÉ » (REQUIRED), « DEVRA » (SHALL), « NE DEVRA PAS » (SHALL NOT), « DEVRAIT » (SHOULD), « NE DEVRAIT PAS » (SHOULD NOT), « RECOMMANDÉ » (RECOMMENDED), « PEUT » (MAY) et « FACULTATIF » (OPTIONAL) sont interprétés selon le RFC 2119.',
          "Les termes et définitions suivants s'appliquent à l'ensemble du présent document :",
        ],
        pt: [
          'Os termos-chave "DEVE", "NÃO DEVE", "OBRIGATÓRIO", "DEVERÁ", "NÃO DEVERÁ", "RECOMENDA-SE", "PODE" e "OPCIONAL" neste documento devem ser interpretados conforme o RFC 2119.',
          "Os seguintes termos e definições aplicam-se a este documento:",
        ],
        ar: [
          'تُفسر الكلمات المفتاحية "يجب" و "يجب ألا" و "مطلوب" و "يتعين" و "ينبغي" و "يوصى به" و "يجوز" و "اختياري" وفقاً لما هو موضح في RFC 2119.',
          "تنطبق المصطلحات والتعريفات التالية في جميع أنحاء هذه الوثيقة:",
        ],
      },
      definitions: [
        {
          term: "Federation",
          definition: {
            en: "A group of organizations that come together to collaborate and facilitate resource access under a set of defined and agreed rules.",
            fr: "Groupe d'organisations s'associant pour collaborer et faciliter l'accès aux ressources selon des règles définies et acceptées.",
            pt: "Conjunto de organizações que colaboram e facilitam o acesso a recursos ao abrigo de regras definidas e acordadas.",
            ar: "مجموعة من المؤسسات التي تجتمع للتعاون وتسهيل الوصول إلى الموارد بموجب مجموعة من القواعد المحددة والمتفق عليها.",
          },
        },
        {
          term: "Federation Operator",
          definition: {
            en: "UbuntuNet Alliance, WACREN & ASREN service portfolio units that provide infrastructure for authentication and authorization to federation members.",
            fr: "Les unités de services d'UbuntuNet Alliance, WACREN et ASREN fournissant l'infrastructure d'authentification et d'autorisation aux membres de la fédération.",
            pt: "Unidades operacionais da UbuntuNet Alliance, WACREN e ASREN que fornecem a infraestrutura de autenticação e autorização.",
            ar: "وحدات محفظة خدمات UbuntuNet Alliance و WACREN و ASREN التي توفر البنية التحتية للمصادقة والتفويض لأعضاء الاتحاد.",
          },
        },
        {
          term: "eduID.africa Identity Federation",
          definition: {
            en: "The African continental catch-all identity federation.",
            fr: "La fédération d'identité continentale africaine chapeau (catch-all).",
            pt: "A federação continental africana de identidade digital abrangente.",
            ar: "اتحاد الهوية الرقمية القاري الأفريقي الشامل (catch-all).",
          },
        },
        {
          term: "Federation Member",
          definition: {
            en: "An organization that runs an identity provider(s) or service provider(s) that has joined eduID.africa and agreed to be bound by the eduID.africa federation policy.",
            fr: "Organisation exploitant un ou plusieurs fournisseurs d'identité (IdP) ou fournisseurs de services (SP) ayant rejoint eduID.africa et accepté d'être liée par sa politique.",
            pt: "Organização que opera IdP(s) ou SP(s), aderiu ao eduID.africa e concordou em vincular-se à respetiva política.",
            ar: "مؤسسة تدير مزود(ي) هوية أو مزود(ي) خدمة انضمت إلى eduID.africa ووافقت على الالتزام بسياسة الاتحاد.",
          },
        },
        {
          term: "Interfederation",
          definition: {
            en: "A collaboration between identity federations to ease access to service providers and hence services/resources (e.g., eduGAIN).",
            fr: "Collaboration entre fédérations d'identités visant à faciliter l'accès aux fournisseurs de services et à leurs ressources (ex. eduGAIN).",
            pt: "Colaboração entre federações de identidade para simplificar o acesso a fornecedores de serviços e recursos (ex. eduGAIN).",
            ar: "تعاون بين اتحادات الهوية لتسهيل الوصول إلى مزودي الخدمة والموارد العالمية (مثل eduGAIN).",
          },
        },
        {
          term: "Identity Provider (IdP)",
          definition: {
            en: "The IdP authenticates members of a home organization against an existing identity management system and makes assertions on what attributes should be relayed to a service provider.",
            fr: "L'IdP authentifie les membres d'une organisation d'origine auprès d'un référentiel d'identités existant et transmet les attributs nécessaires aux fournisseurs de services.",
            pt: "O IdP autentica membros de uma organização de origem e emite declarações com atributos enviados aos prestadores de serviços.",
            ar: "يقوم مزود الهوية بمصادقة أعضاء المؤسسة الأصلية وإرسال تأكيدات بالسمات المسموح بها إلى مزود الخدمة.",
          },
        },
        {
          term: "Service Provider (SP)",
          definition: {
            en: "The SP provides and grants access to end users for services or resources available on the eduID.africa federation.",
            fr: "Le SP octroie l'accès aux utilisateurs finaux aux services ou ressources mis à disposition sur la fédération eduID.africa.",
            pt: "O prestador de serviços que disponibiliza e gere o acesso a serviços ou recursos na federação eduID.africa.",
            ar: "يوفر مزود الخدمة ويمنح حق الوصول للمستخدمين النهائيين إلى الخدمات أو الموارد المتاحة في الاتحاد.",
          },
        },
        {
          term: "Attribute",
          definition: {
            en: "An end user piece of information that identifies their properties managed within a home organization (Attribute Authority).",
            fr: "Élément d'information décrivant les propriétés de l'utilisateur final, géré au sein de son organisation d'origine (autorité d'attributs).",
            pt: "Dado do utilizador final que descreve as suas propriedades geridas na organização de origem (Autoridade de Atributos).",
            ar: "بيانات المستخدم النهائي التي تحدد خصائصه المدارة داخل مؤسسته الأصلية (سلطة السمات).",
          },
        },
        {
          term: "End User",
          definition: {
            en: "A person affiliated to a home organization based on their role and makes use of a service provider.",
            fr: "Personne affiliée à une organisation d'origine selon son rôle et utilisant un fournisseur de services.",
            pt: "Pessoa vinculada a uma organização de origem com base no seu papel e que utiliza um fornecedor de serviços.",
            ar: "شخص ينتمي إلى مؤسسة أصلية بناءً على دوره ويستخدم مزود خدمة.",
          },
        },
      ],
    },
    {
      id: "introduction",
      number: "2",
      title: {
        en: "Introduction & Purpose",
        fr: "Introduction et objet",
        pt: "Introdução e Objetivos",
        ar: "المقدمة والأهداف",
      },
      content: {
        en: [
          "The African catch-all federation (confederation) eduID.africa is an identity federation that covers Africa and is designed to:",
        ],
        fr: [
          "La fédération panafricaine chapeau eduID.africa couvre le continent africain et a pour missions de :",
        ],
        pt: [
          "A federação abrangente continental eduID.africa cobre toda a África e destina-se a:",
        ],
        ar: [
          "اتحاد eduID.africa القاري الشامل يغطي قارة أفريقيا ومصمم لتحقيق ما يلي:",
        ],
      },
      bullets: {
        en: [
          "Facilitate and simplify the introduction of shared services across the federation.",
          "Fast-track the rollout of identity federations in Africa.",
          "Provide guidelines and best practices to constituent countries in establishing national federations.",
          "Onboard institutions within the region without an operational national federation in order to support continental and global research collaboration.",
        ],
        fr: [
          "Faciliter et simplifier le déploiement de services partagés au sein de la fédération.",
          "Accélérer le déploiement des fédérations d'identités à travers l'Afrique.",
          "Fournir des directives et bonnes pratiques aux pays membres pour la création de fédérations nationales.",
          "Intégrer les établissements de la région dépourvus de fédération nationale afin de soutenir la recherche collaborative.",
        ],
        pt: [
          "Facilitar e simplificar a introdução de serviços partilhados na federação.",
          "Acelerar a implementação de federações de identidade em África.",
          "Fornecer diretrizes e boas práticas para o estabelecimento de federações nacionais.",
          "Integrar instituições da região que não possuam federação nacional para apoiar a colaboração científica.",
        ],
        ar: [
          "تسهيل وتبسيط إدخال الخدمات المشتركة عبر الاتحاد.",
          "تسريع نشر اتحادات الهوية في جميع أنحاء أفريقيا.",
          "تقديم إرشادات وأفضل الممارسات للبلدان الأعضاء في إنشاء اتحادات وطنية.",
          "ضم المؤسسات في المناطق التي تفتقر إلى اتحاد وطني لدعم التعاون البحثي.",
        ],
      },
    },
    {
      id: "governance",
      number: "3",
      title: {
        en: "Governance and Roles",
        fr: "Gouvernance et rôles",
        pt: "Governança e Funções",
        ar: "الحوكمة والأدوار",
      },
      content: {
        en: [
          "The governance of the eduID.africa identity federation is delegated to the three Regional Research & Education Networks: UbuntuNet Alliance (East, Central and Southern Africa), WACREN (West and Central Africa), and ASREN (North Africa), all operating within the African continent and mandated to plan, manage, and run regional networks.",
          "Legal services for the federation shall be provided by UbuntuNet Alliance. The management team is drawn from the three entities.",
        ],
        fr: [
          "La gouvernance de la fédération eduID.africa est déléguée aux trois réseaux régionaux d'enseignement et de recherche : UbuntuNet Alliance (Afrique de l'Est, Centrale et Australe), WACREN (Afrique de l'Ouest et Centrale) et ASREN (Afrique du Nord).",
          "Les services juridiques de la fédération sont assurés par UbuntuNet Alliance. L'équipe de direction est issue des trois entités.",
        ],
        pt: [
          "A governança do eduID.africa é delegada às três Redes Regionais de Investigação e Educação: UbuntuNet Alliance, WACREN e ASREN.",
          "Os serviços jurídicos da federação são assegurados pela UbuntuNet Alliance. A equipa executiva é constituída por representantes das três entidades.",
        ],
        ar: [
          "تُفوض حوكمة اتحاد eduID.africa إلى شبكات البحث والتعليم الإقليمية الثلاث: UbuntuNet Alliance و WACREN و ASREN.",
          "يقدم تحالف UbuntuNet Alliance الخدمات القانونية للاتحاد، وتتشكل الإدارة المشتركة من الكيانات الثلاثة.",
        ],
      },
      subsections: [
        {
          id: "management-team",
          number: "3.1",
          title: {
            en: "Management Team Responsibilities",
            fr: "Responsabilités de l'équipe de direction",
            pt: "Responsabilidades da Equipa de Gestão",
            ar: "مسؤوليات فريق الإدارة",
          },
          content: {
            en: ["The joint management team shall:"],
            fr: ["L'équipe de direction conjointe assure les missions suivantes :"],
            pt: ["Compete à equipa de gestão conjunta:"],
            ar: ["يتولى فريق الإدارة المشترك ما يلي:"],
          },
          bullets: {
            en: [
              "Set criteria for membership and admission to the federation, performing grant, deny, and revoke actions.",
              "Approve changes to the Federation Policy prepared by the Federation Operators.",
              "Maintain formal ties with relevant national and international organizations.",
              "Provide future directions and enhancements for the Federation with support from the operations team.",
              "Coordinate and sign interfederation agreements (e.g. with eduGAIN).",
              "Address financing of the Federation and approve operational fee schedules upon proposal.",
            ],
            fr: [
              "Établir les critères d'adhésion et d'admission, en accordant, refusant ou révoquant les adhésions.",
              "Approuver les modifications de la politique de la fédération préparées par les opérateurs.",
              "Maintenir les relations officielles avec les organisations nationales et internationales.",
              "Définir les orientations stratégiques futures avec l'appui de l'équipe opérationnelle.",
              "Coordonner et signer les accords d'interfédération.",
              "Gérer le financement et approuver les barèmes de cotisation opérationnelle.",
            ],
            pt: [
              "Definir critérios de admissão, aprovando, recusando ou revogando adesões.",
              "Aprovar alterações à Política da Federação propostas pelos operadores.",
              "Manter laços formais com entidades nacionais e internacionais.",
              "Definir orientações estratégicas futuras com o apoio operacional.",
              "Coordenar e subscrever acordos de interfederação.",
              "Supervisionar o financiamento e aprovar tabelas de custos operacionais.",
            ],
            ar: [
              "تحديد معايير العضوية والقبول، مع صلاحية المنح والرفض والإلغاء.",
              "الموافقة على تعديلات سياسة الاتحاد المعدة من قبل المشغلين.",
              "الحفاظ على العلاقات الرسمية مع المنظمات الوطنية والدولية ذات الصلة.",
              "تحديد التوجيهات المستقبلية والتطويرات المستمرة للاتحاد.",
              "تنسيق وتوقيع اتفاقيات الاتحادات المتداخلة (Interfederation).",
              "إدارة تمويل الاتحاد والموافقة على أي رسوم تشغيلية مقترحة.",
            ],
          },
        },
        {
          id: "operations-team",
          number: "3.2",
          title: {
            en: "Operations Team Responsibilities",
            fr: "Responsabilités de l'équipe des opérations",
            pt: "Responsabilidades da Equipa Operacional",
            ar: "مسؤوليات فريق العمليات",
          },
          content: {
            en: [
              "The eduID.africa operations team consists of one technical team member from each of the three RRENs (WACREN, UbuntuNet Alliance, and ASREN) providing tier support, metadata verification, and infrastructure maintenance.",
            ],
            fr: [
              "L'équipe des opérations se compose d'un ingénieur issu de chacun des trois réseaux régionaux (WACREN, UbuntuNet Alliance et ASREN) pour assurer le support, la validation des métadonnées et la maintenance de l'infrastructure.",
            ],
            pt: [
              "A equipa operacional é composta por um membro técnico de cada uma das três redes regionais, fornecendo suporte de linha, verificação de metadados e manutenção.",
            ],
            ar: [
              "يتألف فريق عمليات eduID.africa من عضو فني واحد من كل شبكة من الشبكات الإقليمية الثلاث لتقديم الدعم والتحقق من البيانات الوصفية وصيانة البنية التحتية.",
            ],
          },
          bullets: {
            en: [
              "Support secure and trustworthy operational management following approved procedures.",
              "Act as centre of competence: test identity software, publish configuration deployment guides, and maintain technology profiles.",
              "Temporarily suspend individual technology profiles for members that disrupt trustworthy operations.",
              "Publish member registry data in compliance with metadata registration practice statements.",
            ],
            fr: [
              "Garantir une exploitation sûre et fiable selon les procédures approuvées.",
              "Agir comme centre de compétences : tester les logiciels d'identité et publier les guides d'intégration.",
              "Suspendre temporairement le profil d'un membre compromettant la sécurité du réseau.",
              "Publier le registre des métadonnées conformément aux pratiques de déclaration.",
            ],
            pt: [
              "Garantir a operação segura e fiável em conformidade com os procedimentos formais.",
              "Atuar como centro de competência tecnológica e publicar guias de configuração.",
              "Suspender perfis tecnológicos que ameacem a segurança do ecossistema.",
              "Publicar dados cadastrais de metadados de acordo com os padrões da federação.",
            ],
            ar: [
              "دعم الإدارة التشغيلية الآمنة والموثوقة وفقاً للإجراءات المعتمدة.",
              "العمل كمركز كفاءة: اختبار برمجيات الهوية وإصدار أدلة النشر والتكوين.",
              "التعليق المؤقت للأنماط التقنية لأي عضو يتسبب في الإخلال بأمن الاتحاد.",
              "نشر بيانات السجل الوصفي للأعضاء وفق معايير الممارسة المعتمدة.",
            ],
          },
        },
      ],
    },
    {
      id: "eligibility",
      number: "4",
      title: {
        en: "Eligibility Criteria",
        fr: "Critères d'éligibilité",
        pt: "Critérios de Elegibilidade",
        ar: "معايير الأهلية",
      },
      content: {
        en: [
          "eduID.africa provides a continental workspace for higher education and research institutions to gain direct operational experience with federated identity management. The following entities are eligible to join:",
        ],
        fr: [
          "eduID.africa offre un espace continental permettant aux établissements d'enseignement supérieur et de recherche d'acquérir une expérience concrète de la gestion d'identités fédérées :",
        ],
        pt: [
          "O eduID.africa disponibiliza um ambiente continental para que as instituições beneficiem da gestão de identidades federadas. São elegíveis:",
        ],
        ar: [
          "يوفر eduID.africa بيئة قارية لمؤسسات التعليم العالي والبحث لاكتساب خبرة مباشرة في إدارة الهويات الموحدة. الكيانات التالية مؤهلة:",
        ],
      },
      bullets: {
        en: [
          "Service Providers offering relevant academic and scientific services that promote Federated Identity Management (FIM) and eduGAIN adoption across Africa.",
          "All Research and Education Identity Providers (universities, colleges, research centres) with a legal presence in Africa and without an existing operational national identity federation.",
          "Applying institutions MUST provide formal evidence of legal registration within their country of operation.",
        ],
        fr: [
          "Fournisseurs de services (SP) proposant des ressources académiques favorisant l'adoption de la gestion d'identités fédérées et d'eduGAIN en Afrique.",
          "Fournisseurs d'identité (IdP) de recherche et d'enseignement supérieur ayant une existence légale en Afrique et ne disposant pas d'une fédération nationale.",
          "Les institutions candidates DOIVENT fournir une preuve officielle de leur enregistrement légal dans leur pays d'activité.",
        ],
        pt: [
          "Prestadores de Serviços com ofertas académicas relevantes que promovam a adoção de gestão de identidade federada e eduGAIN.",
          "Provedores de Identidade de IES e centros de investigação com presença jurídica em África sem federação nacional ativa.",
          "As instituições candidatas DEVEM apresentar comprovativo formal de registo legal no respetivo país de operação.",
        ],
        ar: [
          "مزودو الخدمة (SPs) الذين يقدمون خدمات أكاديمية وبحثية تعزز اعتماد إدارة الهوية الموحدة و eduGAIN.",
          "مزودو الهوية (IdPs) للبحث والتعليم العالي ذوو الوجود القانوني في أفريقيا دون وجود اتحاد وطني قائم.",
          "يجب على المؤسسات المتقدمة تقديم دليل رسمي على التسجيل القانوني داخل بلد العمل.",
        ],
      },
    },
    {
      id: "procedures",
      number: "5",
      title: {
        en: "Procedures: Joining & Withdrawing",
        fr: "Procédures : Adhésion et retrait",
        pt: "Procedimentos: Adesão e Cancelamento",
        ar: "الإجراءات: الانضمام والانسحاب",
      },
      subsections: [
        {
          id: "how-to-join",
          number: "5.1",
          title: {
            en: "How to Join",
            fr: "Modalités d'adhésion",
            pt: "Como Aderir",
            ar: "كيفية الانضمام",
          },
          content: {
            en: [
              "Eligible organizations apply in writing via an authorized official representative, agreeing to be bound by the Federation Policy.",
              "Each application, including the Identity Management Practice Statement (where applicable), is evaluated by the Federation Operators, who produce an evaluation report.",
              "The management team decides whether to grant or deny admission. If denied, formal written reasons are communicated to the applicant.",
            ],
            fr: [
              "Les organisations éligibles postulent par écrit via un représentant officiel habilité, s'engageant à respecter la politique de la fédération.",
              "Chaque demande, accompagnée de la déclaration de pratiques de gestion d'identités, est examinée par les opérateurs qui rédigent un rapport d'évaluation.",
              "L'équipe de direction statue sur l'acceptation ou le refus. Tout refus est motivé et notifié par écrit au demandeur.",
            ],
            pt: [
              "As entidades candidatas submetem requerimento por escrito através de representante credenciado, aceitando cumprir a Política da Federação.",
              "Cada processo é avaliado pelos operadores técnicos, emitindo-se um relatório formal de admissão.",
              "A equipa de gestão delibera sobre a aprovação ou rejeição, comunicando-se eventuais recusas com fundamentação expressa.",
            ],
            ar: [
              "تتقدم المؤسسات المؤهلة بطلب كتابي عبر ممثل رسمي مفوض، مع الموافقة على الالتزام بسياسة الاتحاد.",
              "يقوم مشغلو الاتحاد بتقييم الطلب وبيان ممارسات إدارة الهوية، وإعداد تقرير تقييم فني.",
              "يبت فريق الإدارة في قبول أو رفض الطلب مع إخطار رسمي كتابي بالأسباب في حال الرفض.",
            ],
          },
        },
        {
          id: "how-to-withdraw",
          number: "5.2",
          title: {
            en: "How to Withdraw",
            fr: "Modalités de retrait",
            pt: "Como Cancelar a Participação",
            ar: "كيفية الانسحاب",
          },
          content: {
            en: [
              "A Federation Member may cancel its membership at any time by sending a formal request to the Federation Operators.",
              "Cancellation implies the removal of all Technology Profiles and metadata entries for the organization within a reasonable timeframe.",
              "The Federation Operator may announce a termination date to members with reasonable notice, operating on a best-effort basis until closure.",
            ],
            fr: [
              "Un membre de la fédération peut résilier son adhésion à tout moment par demande écrite transmise aux opérateurs.",
              "La résiliation entraîne le retrait de l'ensemble des profils technologiques et métadonnées dans un délai raisonnable.",
              "L'opérateur peut également notifier une date de cessation de service avec préavis suffisant.",
            ],
            pt: [
              "Qualquer membro pode revogar a sua adesão mediante pedido formal enviado aos operadores da federação.",
              "O cancelamento implica a remoção de todos os perfis e registos nos prazos operacionais definidos.",
              "Os operadores podem notificar a cessação de atividade da federação salvaguardando os interesses dos membros.",
            ],
            ar: [
              "يجوز لأي عضو إلغاء عضويته في أي وقت بإرسال طلب رسمي إلى مشغلي الاتحاد.",
              "يترتب على الإلغاء سحب جميع الأنماط التقنية والبيانات الوصفية للمؤسسة في غضون فترة زمنية معقولة.",
              "يجوز لمشغل الاتحاد إعلان تاريخ إنهاء الخدمة مع إشعار مسبق ومعقول للأعضاء.",
            ],
          },
        },
      ],
    },
    {
      id: "legal",
      number: "6",
      title: {
        en: "Legal Conditions of Use & Jurisdiction",
        fr: "Conditions juridiques et juridiction",
        pt: "Condições Jurídicas e Foro",
        ar: "الشروط القانونية والاختصاص القضائي",
      },
      subsections: [
        {
          id: "termination",
          number: "6.1",
          title: {
            en: "Termination & Revocation",
            fr: "Résiliation et révocation",
            pt: "Rescisão e Revogação",
            ar: "الإنهاء والإلغاء",
          },
          content: {
            en: [
              "Failure to comply with the Federation Policy may result in membership revocation.",
              "Upon detecting a breach, the Federation Operators issue a formal notification of concern with a deadline for rectification.",
              "If unrectified, a formal notification of impending revocation is issued, followed by management revocation and technology profile cancellation.",
            ],
            fr: [
              "Le non-respect de la politique peut entraîner la révocation immédiate de l'adhésion.",
              "En cas de manquement, les opérateurs émettent un avertissement formel précisant un délai de mise en conformité.",
              "À défaut de régularisation, un préavis de révocation est adressé avant suspension définitive des services.",
            ],
            pt: [
              "O incumprimento dos termos da política pode resultar na revogação do estatuto de membro.",
              "Constatada uma infração, é emitida notificação com prazo para sanação da irregularidade.",
              "Persistindo a não conformidade, segue-se aviso prévio e cancelamento dos acessos federados.",
            ],
            ar: [
              "قد يؤدي عدم الامتثال لسياسة الاتحاد إلى إلغاء العضوية.",
              "عند اكتشاف أي خرق، يصدر المشغلون إشعار قلق رسمي مع تحديد موعد نهائي للتصحيح.",
              "في حال عدم المعالجة، يصدر إشعار إنهاء وشيك تليه إجراءات الإلغاء الفعلي.",
            ],
          },
        },
        {
          id: "liability",
          number: "6.2",
          title: {
            en: "Liability and Indemnification",
            fr: "Responsabilité et indemnisation",
            pt: "Responsabilidade e Indemnização",
            ar: "المسؤولية والتعويض",
          },
          content: {
            en: [
              'The Federation Operator offers services on an "as is" basis without liability for faults, service downtime, or defects, while striving to resolve issues diligently.',
              "Limitation of liability does not apply in cases of gross negligence or wilful misconduct by personnel.",
              "Membership alone does not create enforceable rights or liabilities directly between Federation Members.",
              "Neither party shall be liable for indirect or consequential damages.",
            ],
            fr: [
              'Les services sont fournis « en l\'état » (as is) sans garantie de disponibilité ininterrompue, les opérateurs œuvrant avec diligence pour remédier aux incidents.',
              "La limitation de responsabilité ne s'applique pas en cas de faute lourde ou d'acte intentionnel.",
              "L'adhésion ne confère aucun droit d'action directe ou responsabilité entre membres entre eux.",
              "Aucune des parties ne pourra être tenue responsable des dommages indirects ou consécutifs.",
            ],
            pt: [
              'Os serviços são prestados "tal como estão" (as is), sem garantia de funcionamento ininterrupto.',
              "As limitações de responsabilidade não operam em caso de negligência grave ou dolo comprovado.",
              "A qualidade de membro não gera direitos de indemnização direta entre entidades parceiras.",
              "Nenhuma das partes responde por danos indiretos ou emergentes.",
            ],
            ar: [
              'يقدم مشغل الاتحاد الخدمة على أساس "كما هي" دون مسؤولية عن الأعطال أو فترات التوقف، مع بذل أقصى جهد لمعالجة الخلل.',
              "لا يسري تحديد المسؤولية في حالات الإهمال الجسيم أو سوء السلوك المتعمد.",
              "لا تنشئ العضوية وحدها حقوقاً أو التزامات واجبة النفاذ بين الأعضاء بعضهم ببعض.",
              "لا يتحمل أي طرف المسؤولية عن الأضرار غير المباشرة أو التبعية.",
            ],
          },
        },
        {
          id: "jurisdiction",
          number: "6.3",
          title: {
            en: "Jurisdiction & Dispute Resolution (Malawi)",
            fr: "Juridiction et règlement des litiges (Malawi)",
            pt: "Foro Competente e Arbitragem (Malawi)",
            ar: "الاختصاص القضائي وتسوية المنازعات (ملاوي)",
          },
          content: {
            en: [
              "UbuntuNet Alliance provides the legal foundation for the federation.",
              "Disputes concerning the Federation Policy shall be settled primarily through amicable negotiation within four weeks of written claim.",
              "If unresolved, disputes shall be submitted in writing to the Chairman of the Centre for Litigation and Dispute Resolution, Republic of Malawi, who will appoint an independent arbitrator.",
              "The arbitrator's determination shall be final, and all other policy provisions remain in full force and effect.",
            ],
            fr: [
              "UbuntuNet Alliance assure le portage juridique de la fédération.",
              "Les différends sont traités prioritairement par négociation amiable sous un délai de quatre semaines.",
              "À défaut d'accord, le litige est soumis au président du Centre de contentieux et de règlement des litiges de la République du Malawi (Centre for Litigation and Dispute Resolution), qui désigne un arbitre.",
              "La décision de l'arbitre est sans appel et n'altère pas la validité des autres clauses.",
            ],
            pt: [
              "A personalidade jurídica da federação assenta na UbuntuNet Alliance.",
              "Os litígios são dirimidos primariamente por negociação direta no prazo de quatro semanas.",
              "Na ausência de acordo, a arbitragem é remetida ao Centro de Resolução de Litígios da República do Malawi.",
              "A decisão arbitral é vinculativa para as partes.",
            ],
            ar: [
              "يوفر تحالف UbuntuNet Alliance الكيان القانوني للاتحاد.",
              "تتم تسوية المنازعات أولاً عبر المفاوضات الودية خلال أربعة أسابيع من الإشعار المكتوب.",
              "في حال تعذر الحل، يُحال النزاع إلى رئيس مركز التقاضي وتسوية المنازعات في جمهورية ملاوي لتعيين محكم مستقل.",
              "يعد قرار التحكيم ملزماً ونهائياً وتظل كافة البنود الأخرى سارية المفعول.",
            ],
          },
        },
        {
          id: "amendment",
          number: "6.5",
          title: {
            en: "Amendments (60-Day Notice)",
            fr: "Modifications (Préavis de 60 jours)",
            pt: "Alterações (Aviso Prévio de 60 Dias)",
            ar: "التعديلات (إشعار لمدة 60 يوماً)",
          },
          content: {
            en: [
              "The Federation Operators have the right to amend the Federation Policy from time to time.",
              "Any changes MUST be formally approved by the Governing Body and SHALL be communicated to all Federation Members in written form at least 60 days before taking effect.",
            ],
            fr: [
              "Les opérateurs de la fédération se réservent le droit d'amender la politique de gouvernance.",
              "Toute modification DOIT être validée par le conseil de direction et NOTIFIÉE par écrit à tous les membres au moins 60 jours avant son entrée en vigueur.",
            ],
            pt: [
              "Os operadores da federação têm a faculdade de rever a presente política.",
              "Qualquer alteração DEVE ser homologada pela administração e COMUNICADA por escrito com pelo menos 60 dias de antecedência.",
            ],
            ar: [
              "يحق لمشغلي الاتحاد تعديل سياسة الاتحاد من وقت لآخر.",
              "يجب اعتماد أي تعديل من قبل الهيئة الحاكمة، ويتم إخطار جميع الأعضاء كتابياً قبل 60 يوماً على الأقل من تاريخ سريانه.",
            ],
          },
        },
      ],
    },
  ],
};

export const mrpsPolicy: PolicyDocument = {
  id: "mrps",
  title: {
    en: "Metadata Registration Practice Statement (MRPS)",
    fr: "Déclaration de Pratiques d'Enregistrement des Métadonnées (MRPS)",
    pt: "Declaração de Práticas de Registo de Metadados (MRPS)",
    ar: "بيان ممارسات تسجيل البيانات الوصفية (MRPS)",
  },
  shortTitle: {
    en: "MRPS Statement",
    fr: "Déclaration MRPS",
    pt: "Declaração MRPS",
    ar: "بيان MRPS",
  },
  version: "1.0",
  lastModified: "June 2, 2021",
  authors: ["Mario Reale", "Alex Mwotil", "Omo Oaiya", "Eriko Porto"],
  license: "Creative Commons Attribution 3.0 (CC BY 3.0)",
  licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
  attribution: {
    en: "Draws on authoritative foundational work carried out by the UK Access Management Federation and the ACOnet Identity Federation with gratitude.",
    fr: "S'inspire avec gratitude des travaux fondamentaux menés par la UK Access Management Federation et l'ACOnet Identity Federation.",
    pt: "Inspirado com gratidão nas referências técnicas elaboradas pela UK Access Management Federation e pela ACOnet Identity Federation.",
    ar: "مستمد مع خالص التقدير من الأعمال التأسيسية التي أعدها اتحاد إدارة الوصول في المملكة المتحدة (UK Access Management Federation) واتحاد الهوية ACOnet.",
  },
  description: {
    en: "Operational specification detailing the rules, domain verification checks, SAML metadata extensions, and certificate standards used by eduID.africa for entity registration.",
    fr: "Spécification opérationnelle détaillant les règles d'enregistrement, vérifications WHOIS de domaine, extensions SAML et conformité TLS/SSL.",
    pt: "Especificação técnica que rege o registo de entidades, validação DNS WHOIS, extensões de metadados SAML e certificados de segurança.",
    ar: "المواصفات التشغيلية التي توضح القواعد وفحوصات التحقق من النطاقات وامتدادات بيانات SAML الوصفية ومعايير الشهادات لتسجيل الكيانات.",
  },
  sections: [
    {
      id: "mrps-definitions",
      number: "1",
      title: {
        en: "Definitions & Applicability",
        fr: "Définitions et champ d'application",
        pt: "Definições e Âmbito",
        ar: "التعريفات ونطاق التطبيق",
      },
      content: {
        en: [
          "This document describes the metadata registration practices of the Federation Operator with effect from June 2, 2021. All entity registrations processed by the Operator follow these guidelines.",
          "Entities registered without an explicit registration policy reference are assumed to operate under historical practice regimes.",
        ],
        fr: [
          "Le présent document décrit les pratiques d'enregistrement des métadonnées de l'opérateur en vigueur depuis le 2 juin 2021.",
          "Toute entité enregistrée sans mention explicite d'une politique de référence est réputée relever d'un régime historique.",
        ],
        pt: [
          "Este documento define os procedimentos de registo de metadados em vigor desde 2 de junho de 2021.",
          "As entidades sem indicação de política de registo presumem-se integradas ao abrigo de regimes anteriores.",
        ],
        ar: [
          "تصف هذه الوثيقة ممارسات تسجيل البيانات الوصفية المعتمدة من مشغل الاتحاد السارية منذ 2 يونيو 2021.",
          "يُفترض أن الكيانات المسجلة دون الإشارة إلى سياسة معينة قد سُجلت وفق أنظمة سابقة.",
        ],
      },
    },
    {
      id: "mrps-eligibility",
      number: "2",
      title: {
        en: "Member Eligibility and Entity Ownership",
        fr: "Éligibilité des membres et propriété des entités",
        pt: "Elegibilidade e Titularidade de Entidades",
        ar: "أهلية الأعضاء وملكية الكيانات",
      },
      content: {
        en: [
          "Only approved Members of the Federation are eligible to make use of the Federation Operator's registry to publish entities. Registration requests from non-members SHALL NOT be accepted.",
          "The membership procedure verifies legal capacity against official national and corporate registers, ensuring all entities operate under a verified contractual agreement.",
          "Registered Representatives: The member designates authorized individuals who are permitted to act on behalf of the organization in dealings with the Federation Operator.",
          "Canonical Name: Each member is assigned a canonical name disclosed in the entity's <md:OrganizationName> element [SAML-Metadata-OS].",
        ],
        fr: [
          "Seuls les membres reconnus peuvent inscrire des entités dans le registre de l'opérateur. Les demandes tierces sont REJETÉES.",
          "La procédure vérifie la capacité juridique des demandeurs auprès des registres officiels.",
          "Représentants habilités : L'organisation mandate des interlocuteurs accrédités pour administrer les métadonnées.",
          "Nom canonique : Chaque membre dispose d'une désignation officielle enregistrée sous l'élément <md:OrganizationName>.",
        ],
        pt: [
          "Apenas membros credenciados podem publicar entidades no registo central. Pedidos de entidades externas NÃO são aceites.",
          "A idoneidade e capacidade jurídica das instituições são aferidas mediante consultas a bases de dados oficiais.",
          "Representantes Registados: A instituição designa os pontos de contacto autorizados para interações operacionais.",
          "Denominação Canónica: A organização tem um nome oficial constante na tag <md:OrganizationName>.",
        ],
        ar: [
          "يحق فقط للأعضاء المعتمدين في الاتحاد استخدام سجل المشغل لتسجيل الكيانات. ولا تُقبل أي طلبات من مصادر أخرى.",
          "يتحقق المشغل من الأهلية القانونية للمؤسسة من خلال قواعد البيانات الرسمية.",
          "الممثلون المفوضون: تُحدد المؤسسة أشخاصاً معتمدين يحق لهم التصرف نيابة عنها لدى مشغل الاتحاد.",
          "الاسم القانوني المعتمد: يُدرج الاسم الرسمي للعضو في عنصر <md:OrganizationName> في البيانات الوصفية.",
        ],
      },
    },
    {
      id: "mrps-metadata-format",
      number: "3",
      title: {
        en: "Metadata Format & SAML-Metadata-RPI",
        fr: "Format des métadonnées et extension SAML-RPI",
        pt: "Formato de Metadados e Extensão SAML-RPI",
        ar: "تنسيق البيانات الوصفية وامتداد SAML-RPI",
      },
      content: {
        en: [
          "All metadata registered by the Federation Operator SHALL incorporate the [SAML-Metadata-RPI-V1.0] extension to certify the Operator as registrar and denote the active MRPS version.",
          'The authority URI is designated as "https://www.eduid.africa/" with timestamped registrationInstant attributes.',
        ],
        fr: [
          "Toutes les métadonnées publiées DOIVENT intégrer l'extension [SAML-Metadata-RPI-V1.0] attestant du rôle d'autorité d'enregistrement de l'opérateur.",
          "L'URI d'autorité d'enregistrement officielle est « https://www.eduid.africa/ » avec horodatage d'inscription.",
        ],
        pt: [
          "Os metadados integrados DEVEM utilizar a extensão [SAML-Metadata-RPI-V1.0] identificando formalmente a autoridade de registo.",
          'A autoridade de registo oficial é "https://www.eduid.africa/", incluindo marca temporal de validação.',
        ],
        ar: [
          "يجب أن تستخدم كافة البيانات الوصفية المسجلة امتداد [SAML-Metadata-RPI-V1.0] لتأكيد دور المشغل كمسجل رسمي وتوضيح إصدار السياسة المطبق.",
          'يُعين عنوان السلطة المسجلة بـ "https://www.eduid.africa/" مع تاريخ وتوقيت التسجيل بدقة.',
        ],
      },
    },
    {
      id: "mrps-validation",
      number: "4",
      title: {
        en: "Entity Validation & Domain Verification",
        fr: "Validation des entités et vérification du domaine",
        pt: "Validação de Entidades e Verificação de Domínios",
        ar: "التحقق من الكيانات وإثبات ملكية النطاق",
      },
      content: {
        en: [
          "The Federation Operator strictly verifies each member's right to use requested domain names associated with entityID attributes prior to metadata publication:",
        ],
        fr: [
          "L'opérateur vérifie rigoureusement la légitimité du demandeur sur les noms de domaine associés aux entityID :",
        ],
        pt: [
          "O operador valida formalmente a titularidade de todos os domínios associados aos entityID requeridos:",
        ],
        ar: [
          "يتحقق المشغل بصرامة من حق العضو في استخدام النطاقات المرتبطة بسمات entityID قبل النشر:",
        ],
      },
      bullets: {
        en: [
          "DNS WHOIS Verification: The member's canonical name must match registrant information returned by standard DNS WHOIS queries.",
          "Letter of Permission: Alternatively, a signed letter of authority from the registered domain owner may grant per-entity authorization (excluding unapproved sub-domains).",
          "EntityID Format: Must be an absolute URI with http, https, or urn schemes (https-scheme URIs are strongly RECOMMENDED for all members).",
          "Technical Validation: Ensures valid SAML XML schemas, complete operational endpoint descriptors, and valid TLS/SSL certificates.",
        ],
        fr: [
          "Vérification DNS WHOIS : Concordance stricte entre le nom de l'établissement et les données du registre WHOIS.",
          "Lettre d'autorisation : Lettre formelle du propriétaire du nom de domaine autorisant expressément l'entité.",
          "Format entityID : URI absolue (http, https ou urn), le protocole https étant VIVEMENT RECOMMANDÉ.",
          "Validation technique : Contrôle de schéma SAML XML, complétude des points de terminaison et certificats TLS/SSL valides.",
        ],
        pt: [
          "Verificação WHOIS DNS: Correspondência entre o titular da entidade e os dados de registo do domínio.",
          "Autorização expressa: Declaração assinada pelo titular do domínio autorizando a integração.",
          "Formato entityID: URI absoluta válida, sendo FORTEMENTE RECOMENDADO o protocolo https.",
          "Conformidade técnica: Validação estrita de esquemas SAML e certificação TLS/SSL nos endpoints de serviço.",
        ],
        ar: [
          "التحقق عبر DNS WHOIS: تطابق الاسم القانوني للعضو مع بيانات مسجل النطاق في استعلامات WHOIS.",
          "خطاب تفويض معتمد: تقديم تفويض كتابي رسمي من مالك النطاق المسجل يمنح الحق للكيان المعني.",
          "تنسيق entityID: يجب أن يكون عنوان URI مطلقاً (ويوصى بشدة باستخدام بروتوكول https لجميع الأعضاء).",
          "التحقق الفني: التأكد من اكتمال عناصر SAML XML وصحة شهادات الأمان والتشفير TLS/SSL.",
        ],
      },
    },
    {
      id: "mrps-management",
      number: "5",
      title: {
        en: "Entity Management & Change Requests",
        fr: "Gestion des entités et modifications",
        pt: "Gestão e Alteração de Entidades",
        ar: "إدارة الكيانات وطلبات التعديل",
      },
      content: {
        en: [
          "Once admitted, members may request additions, configuration modifications, or decommissioning of entities through their verified Registered Representatives via designated secure communication channels.",
          "The Federation Operator reserves the authority to perform unsolicited modifications or temporary suspensions to safeguard metadata security, maintain interfederation compliance (e.g. eduGAIN), or resolve cryptographic emergencies.",
        ],
        fr: [
          "Les membres actifs peuvent solliciter l'ajout, la mise à jour ou le retrait d'entités par le biais de leurs représentants accrédités.",
          "L'opérateur conserve la prérogative d'intervenir unilatéralement en urgence pour préserver la sécurité de la fédération ou la conformité intercontinentale.",
        ],
        pt: [
          "Os membros podem solicitar adições, atualizações ou desativações de entidades através dos seus representantes oficiais.",
          "O operador reserva-se o poder de efetuar correções imediatas de segurança para salvaguardar a integridade dos metadados.",
        ],
        ar: [
          "يحق للأعضاء المعتمدين طلب إضافة أو تعديل أو إزالة الكيانات من خلال ممثليهم الرسميين عبر قنوات آمنة.",
          "يحتفظ مشغل الاتحاد بحق إجراء تعديلات أمنية طارئة لحماية سلامة البيانات والامتثال لاتحادات eduGAIN العالمية.",
        ],
      },
    },
  ],
};

export const policyDocumentsList: PolicyDocument[] = [federationPolicy, mrpsPolicy];

export function getPolicyDocument(id: string): PolicyDocument | undefined {
  return policyDocumentsList.find((doc) => doc.id === id);
}

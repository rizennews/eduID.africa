import type { Locale } from "@/lib/i18n";

export interface NewsArticle {
  slug: string;
  image: string;
  externalUrl?: string;
  imageCaption: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  category: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  date: string;
  readTime: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  title: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  excerpt: {
    en: string;
    fr: string;
    pt: string;
    ar: string;
  };
  content: {
    en: string[];
    fr: string[];
    pt: string[];
    ar: string[];
  };
  keyTakeaways: {
    en: string[];
    fr: string[];
    pt: string[];
    ar: string[];
  };
  meta: {
    programme: string;
    region: string;
  };
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "five-new-african-members-join-edugain",
    image: "/news/AC3-story-0425.jpg.webp",
    externalUrl: "https://connect.geant.org/2025/04/15/five-new-african-members-join-edugain",
    imageCaption: {
      en: "Five new African national identity federations join the eduGAIN interfederation service, bringing the continental total to 14.",
      fr: "Cinq nouvelles fédérations d'identité africaines rejoignent le service d'interfédération eduGAIN, portant le total continental à 14.",
      pt: "Cinco novas federações de identidade africanas aderem ao serviço de interfederação eduGAIN, elevando o total continental para 14.",
      ar: "خمسة اتحادات هوية أفريقية جديدة تنضم إلى خدمة التداخل eduGAIN، ليبلغ الإجمالي القاري 14.",
    },
    category: {
      en: "Federation Expansion",
      fr: "Extension de la fédération",
      pt: "Expansão da Federação",
      ar: "توسع الاتحاد",
    },
    date: "15 April 2025",
    readTime: {
      en: "4 min read",
      fr: "4 min de lecture",
      pt: "4 min de leitura",
      ar: "قراءة في 4 دقائق",
    },
    title: {
      en: "Five new African members join eduGAIN!",
      fr: "Cinq nouveaux membres africains rejoignent eduGAIN !",
      pt: "Cinco novos membros africanos aderem ao eduGAIN!",
      ar: "خمسة أعضاء أفارقة جدد ينضمون إلى eduGAIN!",
    },
    excerpt: {
      en: "Today, online services are crucial for research and education. These can be for e-learning, teaching and conferencing, scientific collaboration, analysing and sharing data, accessing journals and libraries. Access to these resources is usually controlled with a user name and password. As the number and variety of services expand, often being delivered by service providers outside the institution or even the country, the effort needed to manage and maintain all of these different user credentials becomes complicated and expensive.",
      fr: "Aujourd'hui, les services en ligne sont essentiels pour la recherche et l'enseignement : formation en ligne, cours et conférences, collaboration scientifique, analyse et partage de données, accès aux revues et aux bibliothèques. L'accès à ces ressources est généralement contrôlé par un nom d'utilisateur et un mot de passe. À mesure que le nombre et la variété des services augmentent, souvent fournis par des prestataires situés hors de l'institution voire hors du pays, l'effort nécessaire pour gérer et maintenir toutes ces identifiants différents devient complexe et coûteux.",
      pt: "Hoje, os serviços online são cruciais para a investigação e o ensino. Podem ser para e-learning, ensino e conferência, colaboração científica, análise e partilha de dados, acesso a revistas e bibliotecas. O acesso a estes recursos é geralmente controlado com um nome de utilizador e uma palavra-passe. À medida que o número e a variedade de serviços aumentam, muitas vezes prestados por prestadores fora da instituição ou mesmo fora do país, o esforço necessário para gerir e manter todas estas credenciais diferentes torna-se complicado e dispendioso.",
      ar: "اليوم، خدمات الأونلاين ضرورية للبحث والتعليم. يمكن أن تكون هذه الخدمات للتعلم الإلكتروني والتدريس والمؤتمرات، والتعاون العلمي، وتحليل البيانات ومشاركتها، والوصول إلى المجلات والمكتبات. عادةً ما يكون الوصول إلى هذه الموارد متحكماً فيه من خلال اسم المستخدم وكلمة المرور. ومع توسع عدد الخدمات وتنوّعها، التي يقدّمها غالبًا مزودون خارج المؤسسة أو حتى خارج البلد، يصبح الجهد اللازم لإدارة وصيانة جميع بيانات الاعتماد المختلفة هذا معقدًا ومكلفًا.",
    },
    keyTakeaways: {
      en: [
        "Five new federations join: eduID.tg (Togo), eduID.bf (Burkina Faso), MAREN IF (Malawi), GARNET IF (Ghana), and TERNET IF (Tanzania).",
        "African eduGAIN membership grows to 14 countries, joining Ethiopia, Kenya, Somalia, South Africa, Uganda, Zambia, Nigeria, Algeria, and Morocco.",
        "eduGAIN now serves 78 national federations worldwide, supporting nearly 6,000 institutions and an estimated 30 million users.",
        "eduID.africa plays a central role in accelerating digital transformation across the continent's research and education communities.",
      ],
      fr: [
        "Cinq nouvelles fédérations rejoignent : eduID.tg (Togo), eduID.bf (Burkina Faso), MAREN IF (Malawi), GARNET IF (Ghana) et TERNET IF (Tanzanie).",
        "L'adhésion africaine à eduGAIN passe à 14 pays, rejoignant l'Éthiopie, le Kenya, la Somalie, l'Afrique du Sud, l'Ouganda, la Zambie, le Nigeria, l'Algérie et le Maroc.",
        "eduGAIN compte désormais 78 fédérations nationales dans le monde, soutenant près de 6 000 établissements et environ 30 millions d'utilisateurs.",
        "eduID.africa joue un rôle central dans l'accélération de la transformation numérique des communautés de recherche et d'enseignement du continent.",
      ],
      pt: [
        "Cinco novas federações aderem: eduID.tg (Togo), eduID.bf (Burkina Faso), MAREN IF (Malawi), GARNET IF (Gana) e TERNET IF (Tanzânia).",
        "A adesão africana ao eduGAIN cresce para 14 países, juntando-se à Etiópia, Quénia, Somália, África do Sul, Uganda, Zâmbia, Nigéria, Argélia e Marrocos.",
        "O eduGAIN conta agora com 78 federações nacionais em todo o mundo, apoiando cerca de 6.000 instituições e um estimado de 30 milhões de utilizadores.",
        "O eduID.africa desempenha um papel central na aceleração da transformação digital das comunidades de investigação e educação do continente.",
      ],
      ar: [
        "خمسة اتحادات جديدة تنضم: eduID.tg (توغو)، وeduID.bf (بوركينا فاسو)، وMAREN IF (ملاوي)، وGARNET IF (غانا)، وTERNET IF (تنزانيا).",
        "يرتفع عدد الدول الأفريقية الأعضاء في eduGAIN إلى 14 دولة، لتنضم إلى إثيوبيا وكينيا والصومال وجنوب أفريقيا وأوغندا وزامبيا ونيجيريا والجزائر والمغرب.",
        "يخدم eduGAIN الآن 78 اتحاداً وطنياً حول العالم، يدعم ما يقرب من 6,000 مؤسسة وما يُقدَّر بـ 30 مليون مستخدم.",
        "يضطلع eduID.africa بدور محوري في تسريع التحول الرقمي لمجتمعات البحث والتعليم في القارة.",
      ],
    },
    content: {
      en: [
        "Five new countries — Togo, Burkina Faso, Malawi, Ghana, and Tanzania — have joined the African eduGAIN community, bringing the continental total to 14. By interfederating with eduGAIN, their institutions now gain access to thousands of international research platforms and digital services through a single trusted identity.",
        "Today, online services are crucial for research and education: e-learning, teaching, conferencing, scientific collaboration, data analysis, and journal and library access. Managing and maintaining disparate credentials across service providers is complex and costly. Identity federations solve this by allowing participating institutions to authenticate users on behalf of participating service providers.",
        "eduGAIN provides an efficient, flexible way for participating institutions, and their affiliated users and services, to interconnect with multiple authentication and authorisation infrastructures. This gives users one trusted identity from their own institution for hundreds of services worldwide. Today eduGAIN is used by 78 national federations worldwide and supports nearly 6,000 institutions and an estimated 30 million users.",
        "In Africa, identity federations have grown steadily. At the heart of this progress is eduID.africa, an identity federation designed by UbuntuNet Alliance and WACREN under the EU co-funded AfricaConnect3 project. By accelerating national federation deployment, eduID.africa and eduGAIN jointly drive digital transformation across African research and education.",
        "The new additions are eduID.tg (Togo), eduID.bf (Burkina Faso), MAREN IF (Malawi), GARNET IF (Ghana), and TERNET IF (Tanzania). They join a vibrant network including Ethiopia, Kenya, Somalia, South Africa, Uganda, Zambia, Nigeria, Algeria, and Morocco.",
      ],
      fr: [
        "Cinq nouveaux pays ont rejoint la communauté africaine eduGAIN, portant le total continental à 14.",
      ],
      pt: [
        "Cinco novos países aderiram à comunidade africana do eduGAIN, elevando o total continental para 14.",
      ],
      ar: [
        "انضمت خمس دول جديدة إلى مجتمع eduGAIN الأفريقي، ليبلغ الإجمالي القاري 14.",
      ],
    },
    meta: {
      programme: "AfricaConnect3 / GÉANT / eduID.africa",
      region: "Pan-African",
    },
  },
  {
    slug: "simplifying-access-to-research4life-resources",
    image: "/news/iStock-2198392876.jpg.webp",
    externalUrl: "https://connect.geant.org/2025/02/21/simplifying-access-to-research4life-resources",
    imageCaption: {
      en: "Researchers and students signing in with their institutional credentials to access scholarly resources online.",
      fr: "Chercheurs et étudiants se connectant avec leurs identifiants institutionnels pour accéder aux ressources scientifiques en ligne.",
      pt: "Investigadores e estudantes a iniciar sessão com as suas credenciais institucionais para aceder a recursos académicos online.",
      ar: "الباحثون والطلاب يسجلون الدخول ببيانات اعتماد المؤسسة للوصول إلى الموارد الأكاديمية عبر الإنترنت.",
    },
    category: {
      en: "Trust and identity",
      fr: "Confiance et identité",
      pt: "Confiança e Identidade",
      ar: "الثقة والهوية",
    },
    date: "21 February 2025",
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
      pt: "3 min de leitura",
      ar: "قراءة في 3 دقائق",
    },
    title: {
      en: "Simplifying access to Research4Life resources",
      fr: "Simplifier l'accès aux ressources Research4Life",
      pt: "Simplificar o acesso aos recursos Research4Life",
      ar: "تبسيط الوصول إلى موارد Research4Life",
    },
    excerpt: {
      en: "Research4Life, in partnership with UbuntuNet Alliance and GÉANT – with support from the European Union and the AfricaConnect project – has successfully launched a Federated Single Sign-On (SSO) pilot for academic institutions. This initiative ensures secure academic resource access by allowing users to log in with their institutional credentials, eliminating the need for shared passwords.",
      fr: "Research4Life, en partenariat avec l'UbuntuNet Alliance et GÉANT – avec le soutien de l'Union européenne et du projet AfricaConnect – a lancé avec succès un pilote d'authentification fédérée unique (SSO) pour les établissements académiques. Cette initiative garantit un accès sécurisé aux ressources académiques en permettant aux utilisateurs de se connecter avec leurs identifiants institutionnels, éliminant le besoin de mots de passe partagés.",
      pt: "A Research4Life, em parceria com a UbuntuNet Alliance e a GÉANT – com o apoio da União Europeia e do projeto AfricaConnect – lançou com sucesso um piloto de Single Sign-On (SSO) federado para instituições de ensino superior. Esta iniciativa garante um acesso seguro a recursos académicos, permitindo que os utilizadores iniciem sessão com as suas credenciais institucionais, eliminando a necessidade de palavras-passe partilhadas.",
      ar: "أطلقت Research4Life بالشراكة مع UbuntuNet Alliance وGÉANT – بدعم من الاتحاد الأوروبي ومشروع AfricaConnect – تجربة تسجيل دخول موحد فيدرالي (SSO) للمؤسسات الأكاديمية بنجاح. يضمن هذا المبادرة وصولاً آمناً إلى الموارد الأكاديمية من خلال السماح للمستخدمين بتسجيل الدخول باستخدام بيانات اعتماد مؤسستهم، مما يلغي الحاجة إلى كلمات مرور مشتركة.",
    },
    keyTakeaways: {
      en: [
        "Research4Life launches a federated single sign-on (SSO) pilot for academic institutions.",
        "UbuntuNet Alliance and GÉANT partner on the deployment, backed by the European Union's AfricaConnect project.",
        "Users sign in with their institutional credentials instead of shared passwords.",
      ],
      fr: [
        "Research4Life lance un pilote d'authentification fédérée unique (SSO) pour les établissements académiques.",
        "UbuntuNet Alliance et GÉANT collaborent au déploiement, soutenus par le projet AfricaConnect de l'Union européenne.",
        "Les utilisateurs se connectent avec leurs identifiants institutionnels au lieu de mots de passe partagés.",
      ],
      pt: [
        "A Research4Life lança um piloto de Single Sign-On (SSO) federado para instituições de ensino superior.",
        "A UbuntuNet Alliance e a GÉANT colaboram na implementação, apoiadas pelo projeto AfricaConnect da União Europeia.",
        "Os utilizadores iniciam sessão com as suas credenciais institucionais em vez de palavras-passe partilhadas.",
      ],
      ar: [
        "تطلق Research4Life تجربة تسجيل دخول موحد فيدرالي (SSO) للمؤسسات الأكاديمية.",
        "تتعاون UbuntuNet Alliance وGÉANT في النشر، بدعم من مشروع AfricaConnect التابع للاتحاد الأوروبي.",
        "يسجل المستخدمون الدخول باستخدام بيانات اعتماد مؤسستهم بدلاً من كلمات المرور المشتركة.",
      ],
    },
    content: {
      en: [
        "Research4Life, in partnership with UbuntuNet Alliance and GÉANT – with support from the European Union and the AfricaConnect project – has successfully launched a Federated Single Sign-On (SSO) pilot for academic institutions.",
        "The pilot ensures secure academic resource access by allowing users to log in with their institutional credentials, eliminating the need for shared passwords. Institutions participating in an identity federation reuse the trust relationship they already maintain with their users.",
        "Federated access connects researchers to the Research4Life programmes' scholarly resources without creating and managing additional accounts, simplifying onboarding for campuses across Africa.",
      ],
      fr: [
        "Research4Life, en partenariat avec l'UbuntuNet Alliance et GÉANT – avec le soutien de l'Union européenne et du projet AfricaConnect – a lancé avec succès un pilote d'authentification fédérée unique (SSO) pour les établissements académiques.",
        "Ce pilote garantit un accès sécurisé aux ressources académiques en permettant aux utilisateurs de se connecter avec leurs identifiants institutionnels, éliminant le besoin de mots de passe partagés.",
        "L'accès fédéré connecte les chercheurs aux ressources scientifiques des programmes Research4Life sans créer ni gérer de comptes supplémentaires.",
      ],
      pt: [
        "A Research4Life, em parceria com a UbuntuNet Alliance e a GÉANT – com o apoio da União Europeia e do projeto AfricaConnect – lançou com sucesso um piloto de Single Sign-On (SSO) federado para instituições de ensino superior.",
        "O piloto garante um acesso seguro a recursos académicos, permitindo que os utilizadores iniciem sessão com as suas credenciais institucionais, eliminando a necessidade de palavras-passe partilhadas.",
        "O acesso federado liga os investigadores aos recursos científicos dos programas Research4Life sem criar nem gerir contas adicionais.",
      ],
      ar: [
        "أطلقت Research4Life بالشراكة مع UbuntuNet Alliance وGÉANT – بدعم من الاتحاد الأوروبي ومشروع AfricaConnect – تجربة تسجيل دخول موحد فيدرالي (SSO) للمؤسسات الأكاديمية بنجاح.",
        "تضمن التجربة وصولاً آمناً إلى الموارد الأكاديمية من خلال السماح للمستخدمين بتسجيل الدخول باستخدام بيانات اعتماد مؤسستهم، مما يلغي الحاجة إلى كلمات مرور مشتركة.",
        "يربط الوصول الفيدرالي الباحثين بالموارد العلمية لبرامج Research4Life دون الحاجة إلى إنشاء أو إدارة حسابات إضافية.",
      ],
    },
    meta: {
      programme: "AfricaConnect3 / GÉANT / Research4Life",
      region: "Pan-African",
    },
  },
  {
    slug: "eduid-africa-advances-federated-identity-management",
    image: "/news/eduID.africa-1320x742.png.webp",
    externalUrl: "https://connect.geant.org/2023/03/06/eduid-africa-advances-federated-identity-management-in-the-education-ecosystem-in-africa",
    imageCaption: {
      en: "eduID.africa — the continental trust and identity federation for Africa's research and education community.",
      fr: "eduID.africa — la fédération continentale de confiance et d'identité pour les communautés de recherche et d'enseignement africaines.",
      pt: "eduID.africa — a federação continental de confiança e identidade para as comunidades de investigação e educação africanas.",
      ar: "eduID.africa — الاتحاد القاري للثقة والهوية لمجتمعات البحث والتعليم الأفريقية.",
    },
    category: {
      en: "Community News",
      fr: "Actualités de la communauté",
      pt: "Notícias da Comunidade",
      ar: "أخبار المجتمع",
    },
    date: "6 March 2023",
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
      pt: "3 min de leitura",
      ar: "قراءة في 3 دقائق",
    },
    title: {
      en: "eduID.africa advances federated identity management in the education ecosystem in Africa",
      fr: "eduID.africa fait progresser la gestion d'identité fédérée dans l'écosystème éducatif africain",
      pt: "eduID.africa avança na gestão de identidade federada no ecossistema educativo africano",
      ar: "eduID.africa يعزز إدارة الهوية الفيدرالية في منظومة التعليم في أفريقيا",
    },
    excerpt: {
      en: "Our identity is our uniqueness. Online identity and its management are vital to global migration to digital infrastructure, and citizens can only achieve an effective modern society with efficient governance and administration of digital identities.",
      fr: "Notre identité est notre singularité. L'identité en ligne et sa gestion sont vitales pour la migration mondiale vers les infrastructures numériques, et les citoyens ne peuvent atteindre une société moderne efficace sans une gouvernance et une administration efficientes des identités numériques.",
      pt: "A nossa identidade é a nossa singularidade. A identidade online e a sua gestão são vitais para a migração global para infraestruturas digitais, e os cidadãos só podem alcançar uma sociedade moderna eficaz com uma governação e administração eficientes das identidades digitais.",
      ar: "هويتنا هي تميزنا. تُعد الهوية الرقمية وإدارتها أمراً حيوياً للانتقال العالمي إلى البنية التحتية الرقمية، ولا يمكن للمواطنين تحقيق مجتمع حديث فعال دون حكامة وإدارة فعّالة للهويات الرقمية.",
    },
    keyTakeaways: {
      en: [
        "eduID.africa federates digital identity across Africa's research and education community.",
        "Online identity management underpins the shift to digital infrastructure and efficient public administration.",
        "The federation is an AfricaConnect3 initiative led by UbuntuNet Alliance and WACREN.",
      ],
      fr: [
        "eduID.africa fédère l'identité numérique au sein des communautés de recherche et d'enseignement africaines.",
        "La gestion de l'identité en ligne sous-tend la transition vers les infrastructures numériques et une administration publique efficace.",
        "La fédération est une initiative AfricaConnect3 portée par l'UbuntuNet Alliance et WACREN.",
      ],
      pt: [
        "O eduID.africa federa a identidade digital das comunidades de investigação e educação africanas.",
        "A gestão da identidade online sustenta a transição para infraestruturas digitais e uma administração pública eficiente.",
        "A federação é uma iniciativa AfricaConnect3 liderada pela UbuntuNet Alliance e pela WACREN.",
      ],
      ar: [
        "يدعم eduID.africa تجميع الهوية الرقمية في مجتمعات البحث والتعليم الأفريقية.",
        "تُعد إدارة الهوية الرقمية أساساً للتحول إلى البنية التحتية الرقمية والإدارة العامة الفعّالة.",
        "الاتحاد مبادرة ضمن برنامج AfricaConnect3 يقودها UbuntuNet Alliance وWACREN.",
      ],
    },
    content: {
      en: [
        "Our identity is our uniqueness. Online identity and its management are vital to global migration to digital infrastructure, and citizens can only achieve an effective modern society with efficient governance and administration of digital identities.",
        "eduID.africa addresses this by federating digital identity across the continent's research and education community, giving students, researchers, and staff one trusted identity for online services.",
        "The federation is an AfricaConnect3 initiative led by UbuntuNet Alliance and WACREN, connecting national federations and institutions to eduGAIN and the global research and education network.",
      ],
      fr: [
        "Notre identité est notre singularité. L'identité en ligne et sa gestion sont vitales pour la migration mondiale vers les infrastructures numériques.",
        "eduID.africa fédère l'identité numérique au sein des communautés de recherche et d'enseignement du continent.",
        "La fédération est une initiative AfricaConnect3 portée par l'UbuntuNet Alliance et WACREN.",
      ],
      pt: [
        "A nossa identidade é a nossa singularidade. A identidade online e a sua gestão são vitais para a migração global para infraestruturas digitais.",
        "O eduID.africa federa a identidade digital das comunidades de investigação e educação do continente.",
        "A federação é uma iniciativa AfricaConnect3 liderada pela UbuntuNet Alliance e pela WACREN.",
      ],
      ar: [
        "هويتنا هي تميزنا. تُعد الهوية الرقمية وإدارتها أمراً حيوياً للانتقال العالمي إلى البنية التحتية الرقمية.",
        "يقوم eduID.africa بتجميع الهوية الرقمية في مجتمعات البحث والتعليم في القارة.",
        "الاتحاد مبادرة ضمن برنامج AfricaConnect3 يقودها UbuntuNet Alliance وWACREN.",
      ],
    },
    meta: {
      programme: "AfricaConnect3 / UbuntuNet Alliance & WACREN",
      region: "Pan-African",
    },
  },
  {
    slug: "eduid-africa-joins-edugain",
    image: "/news/EDU-3-1320x743.jpg.webp",
    externalUrl: "https://connect.geant.org/2022/10/28/eduid-africa-joins-edugain",
    imageCaption: {
      en: "eduID.africa connects to the eduGAIN interfederation service, extending global trust to African research and education.",
      fr: "eduID.africa se connecte au service d'interfédération eduGAIN, étendant la confiance mondiale aux communautés de recherche et d'enseignement africaines.",
      pt: "O eduID.africa liga-se ao serviço de interfederação eduGAIN, estendendo a confiança global às comunidades de investigação e educação africanas.",
      ar: "يتصل eduID.africa بخدمة التداخل eduGAIN، ويوسع الثقة العالمية إلى مجتمعات البحث والتعليم الأفريقية.",
    },
    category: {
      en: "Education",
      fr: "Éducation",
      pt: "Educação",
      ar: "التعليم",
    },
    date: "28 October 2022",
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
      pt: "3 min de leitura",
      ar: "قراءة في 3 دقائق",
    },
    title: {
      en: "eduID.africa joins eduGAIN",
      fr: "eduID.africa rejoint eduGAIN",
      pt: "eduID.africa junta-se ao eduGAIN",
      ar: "eduID.africa ينضم إلى eduGAIN",
    },
    excerpt: {
      en: "Students, researchers, scientists and educators across Africa's research and education landscape can now have secure and trusted access to global online resources as the eduID.africa Catch-All Federation joins the eduGAIN interfederation.",
      fr: "Les étudiants, chercheurs, scientifiques et enseignants de tout le paysage de la recherche et de l'enseignement en Afrique peuvent désormais accéder de manière sûre et fiable aux ressources mondiales en ligne, la Fédération Catch-All d'eduID.africa rejoignant l'interfédération eduGAIN.",
      pt: "Estudantes, investigadores, cientistas e educadores de todo o panorama de investigação e educação de África podem agora aceder de forma segura e fiável a recursos online globais, à medida que a Catch-All Federation do eduID.africa se junta à interfederação eduGAIN.",
      ar: "يمكن الآن للطلاب والباحثين والعلماء والمعلمين في منظومة البحث والتعليم عبر أفريقيا الوصول الآمن والموثوق إلى الموارد العالمية عبر الإنترنت، مع انضمام اتحاد eduID.africa الشامل إلى خدمة التداخل eduGAIN.",
    },
    keyTakeaways: {
      en: [
        "eduID.africa's Catch-All Federation joins the eduGAIN interfederation service.",
        "Students, researchers, and educators gain secure, trusted access to global online resources.",
        "The milestone connects Africa's research and education community to the worldwide federation network.",
      ],
      fr: [
        "La Fédération Catch-All d'eduID.africa rejoint le service d'interfédération eduGAIN.",
        "Étudiants, chercheurs et enseignants accèdent à des ressources mondiales en ligne de manière sûre et fiable.",
        "Cette étape relie les communautés de recherche et d'enseignement africaines au réseau mondial de fédérations.",
      ],
      pt: [
        "A Catch-All Federation do eduID.africa junta-se ao serviço de interfederação eduGAIN.",
        "Estudantes, investigadores e educadores obtêm acesso seguro e fiável a recursos online globais.",
        "Marco que liga as comunidades de investigação e educação africanas à rede mundial de federações.",
      ],
      ar: [
        "ينضم اتحاد eduID.africa الشامل إلى خدمة التداخل eduGAIN.",
        "يحصل الطلاب والباحثون والمعلمون على وصول آمن وموثوق إلى الموارد العالمية عبر الإنترنت.",
        "إنجاز يربط مجتمعات البحث والتعليم الأفريقية بالشبكة العالمية للاتحادات.",
      ],
    },
    content: {
      en: [
        "Students, researchers, scientists and educators across Africa's research and education landscape can now have secure and trusted access to global online resources as the eduID.africa Catch-All Federation joins the eduGAIN interfederation.",
        "The Catch-All Federation gives institutions that do not yet have a national federation a way to participate in the global trust framework, signing in with their institutional credentials.",
        "Joining eduGAIN connects the continental federation to a worldwide community of national federations, research platforms, and scholarly services.",
      ],
      fr: [
        "Les étudiants, chercheurs, scientifiques et enseignants en Afrique peuvent désormais accéder de manière sûre et fiable aux ressources mondiales en ligne, la Fédération Catch-All d'eduID.africa rejoignant l'interfédération eduGAIN.",
        "La Fédération Catch-All permet aux institutions sans fédération nationale de participer au cadre de confiance mondial.",
        "L'adhésion à eduGAIN relie la fédération continentale à une communauté mondiale de fédérations nationales et de plateformes de recherche.",
      ],
      pt: [
        "Estudantes, investigadores, cientistas e educadores de África podem agora aceder de forma segura e fiável a recursos online globais, com a Catch-All Federation do eduID.africa a juntar-se à interfederação eduGAIN.",
        "A Catch-All Federation permite que instituições sem federação nacional participem no quadro de confiança global.",
        "A adesão ao eduGAIN liga a federação continental a uma comunidade mundial de federações nacionais e plataformas de investigação.",
      ],
      ar: [
        "يمكن الآن للطلاب والباحثين والعلماء والمعلمين في أفريقيا الوصول الآمن والموثوق إلى الموارد العالمية عبر الإنترنت، مع انضمام اتحاد eduID.africa الشامل إلى خدمة التداخل eduGAIN.",
        "يمنح الاتحاد الشامل المؤسسات التي لا تملك اتحاداً وطنياً بعد طريقة للمشاركة في إطار الثقة العالمي.",
        "يربط الانضمام إلى eduGAIN الاتحاد القاري بمجتمع عالمي من الاتحادات الوطنية ومنصات البحث والخدمات الأكاديمية.",
      ],
    },
    meta: {
      programme: "AfricaConnect3 / GÉANT / eduGAIN",
      region: "Pan-African",
    },
  },
];

export function getNewsArticles(locale: Locale): {
  slug: string;
  image: string;
  externalUrl?: string;
  imageCaption: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  meta: { programme: string; region: string };
}[] {
  return newsArticles.map((article) => ({
    slug: article.slug,
    image: article.image,
    imageCaption: article.imageCaption[locale] || article.imageCaption.en,
    category: article.category[locale] || article.category.en,
    date: article.date,
    readTime: article.readTime[locale] || article.readTime.en,
    title: article.title[locale] || article.title.en,
    excerpt: article.excerpt[locale] || article.excerpt.en,
    externalUrl: article.externalUrl,
    meta: article.meta,
  }));
}

export function getNewsArticleBySlug(slug: string, locale: Locale): {
  slug: string;
  image: string;
  externalUrl?: string;
  imageCaption: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  meta: { programme: string; region: string };
} | null {
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return null;
  return {
    slug: article.slug,
    image: article.image,
    imageCaption: article.imageCaption[locale] || article.imageCaption.en,
    category: article.category[locale] || article.category.en,
    date: article.date,
    readTime: article.readTime[locale] || article.readTime.en,
    title: article.title[locale] || article.title.en,
    excerpt: article.excerpt[locale] || article.excerpt.en,
    externalUrl: article.externalUrl,
    content: article.content[locale] || article.content.en,
    keyTakeaways: article.keyTakeaways[locale] || article.keyTakeaways.en,
    meta: article.meta,
  };
}

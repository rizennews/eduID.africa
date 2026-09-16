import type { Locale } from "@/lib/i18n";

export interface NewsArticle {
  slug: string;
  image: string;
  imageCaption: {
    en: string;
    fr: string;
    pt: string;
  };
  category: {
    en: string;
    fr: string;
    pt: string;
  };
  date: string;
  readTime: {
    en: string;
    fr: string;
    pt: string;
  };
  title: {
    en: string;
    fr: string;
    pt: string;
  };
  excerpt: {
    en: string;
    fr: string;
    pt: string;
  };
  content: {
    en: string[];
    fr: string[];
    pt: string[];
  };
  keyTakeaways: {
    en: string[];
    fr: string[];
    pt: string[];
  };
  meta: {
    programme: string;
    region: string;
  };
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "bonafid-1-0-released",
    image: "/news/bonafid-release.jpg",
    imageCaption: {
      en: "Engineering teams in West Africa deploying BonafID 1.0 production identity provider infrastructure.",
      fr: "Équipes d'ingénierie en Afrique de l'Ouest déployant l'infrastructure de fournisseur d'identité BonafID 1.0.",
      pt: "Equipas de engenharia na África Ocidental a implementar a infraestrutura do provedor de identidade BonafID 1.0.",
    },
    category: {
      en: "Platform Announcement",
      fr: "Annonce de la plateforme",
      pt: "Anúncio da Plataforma",
    },
    date: "12 May 2026",
    readTime: {
      en: "4 min read",
      fr: "4 min de lecture",
      pt: "4 min de leitura",
    },
    title: {
      en: "BonafID 1.0 released — first production-ready deployment begins across six institutions",
      fr: "Sortie de BonafID 1.0 — premier déploiement en production auprès de six établissements",
      pt: "Lançamento do BonafID 1.0 — primeira implementação em produção começa em seis instituições",
    },
    excerpt: {
      en: "WACREN announces the AC4 production release of BonafID, marking the transition from pilot to operational platform. Six institutions across Ghana, Senegal, and Cameroon are the first to deploy the production version, with 14 additional onboardings scheduled before year-end.",
      fr: "WACREN annonce la sortie en production AC4 de BonafID, marquant la transition du statut pilote à une plateforme opérationnelle. Six établissements au Ghana, au Sénégal et au Cameroun sont les premiers à déployer la version de production, avec 14 intégrations supplémentaires prévues avant la fin de l'année.",
      pt: "A WACREN anuncia o lançamento em produção AC4 do BonafID, assinalando a transição de piloto para plataforma operacional. Seis instituições no Gana, Senegal e Camarões são as primeiras a implementar a versão de produção, com 14 integrações adicionais agendadas até ao final do ano.",
    },
    keyTakeaways: {
      en: [
        "First production version (v1.0) officially deployed under the AfricaConnect4 programme.",
        "Initial cohort includes six major higher education institutions across West and Central Africa.",
        "Automated SIS and LDAP connector tools eliminate manual student credential ingestion.",
        "Full federation compliance with eduID.africa, eduGAIN, and geteduroam out-of-the-box.",
      ],
      fr: [
        "Première version de production (v1.0) officiellement déployée dans le cadre du programme AfricaConnect4.",
        "La cohorte initiale comprend six grands établissements d'enseignement supérieur d'Afrique de l'Ouest et Centrale.",
        "Les outils d'extraction automatisée SIS et LDAP éliminent la saisie manuelle des identifiants.",
        "Conformité fédérale native avec eduID.africa, eduGAIN et geteduroam.",
      ],
      pt: [
        "Primeira versão de produção (v1.0) oficialmente implementada no âmbito do programa AfricaConnect4.",
        "A coorte inicial inclui seis grandes instituições de ensino superior na África Ocidental e Central.",
        "Ferramentas automáticas de conexão SIS e LDAP eliminam a ingestão manual de credenciais.",
        "Conformidade total com eduID.africa, eduGAIN e geteduroam pronta a usar.",
      ],
    },
    content: {
      en: [
        "WACREN announces the AC4 production release of BonafID, marking the transition from pilot to operational platform. Six institutions across Ghana, Senegal, and Cameroon are the first to deploy the production version, with 14 additional onboardings scheduled before year-end.",
        "BonafID is an open-source, cloud-hosted academic identity provider designed specifically to eliminate the infrastructural barriers that have historically prevented African universities from joining trust federations. By removing the need for on-premise servers, specialized cryptographers, and complex Shibboleth/SimpleSAMLphp server maintenance, BonafID enables campus IT teams to stand up sovereign identity services within weeks.",
        "The first cohort of six institutions includes national research universities and technical colleges in Ghana (GARNET), Senegal (snRER), and Cameroon (RIC). Through BonafID's built-in connector modules, existing student information systems (SIS) and active directory databases were synchronized with eduID.africa federation metadata without disruptive database migrations.",
        "With production deployment underway, students, faculty, and research fellows at these six campuses immediately gain access to global eduroam Wi-Fi authentication and cross-border digital research repositories in eduGAIN. A further 14 institutions are currently undergoing data validation and are slated for go-live during Q3 and Q4 2026.",
      ],
      fr: [
        "WACREN annonce la sortie en production AC4 de BonafID, marquant la transition du statut pilote à une plateforme opérationnelle. Six établissements au Ghana, au Sénégal et au Cameroun sont les premiers à déployer la version de production, avec 14 intégrations supplémentaires prévues avant la fin de l'année.",
        "BonafID est un fournisseur d'identité académique open source, hébergé dans le cloud, conçu spécifiquement pour éliminer les barrières d'infrastructure qui empêchaient jusqu'ici les universités africaines de rejoindre les fédérations d'identité. En supprimant le besoin de serveurs sur site, d'experts en cryptographie et de maintenance complexe de serveurs Shibboleth/SimpleSAMLphp, BonafID permet aux équipes informatiques de déployer des services d'identité souverains en quelques semaines.",
        "La première cohorte de six établissements comprend des universités nationales de recherche et des instituts technologiques au Ghana (GARNET), au Sénégal (snRER) et au Cameroun (RIC). Grâce aux modules d'intégration de BonafID, les systèmes de gestion des dossiers étudiants (SIS) et les annuaires Active Directory existants ont été synchronisés avec les métadonnées eduID.africa sans migration perturbatrice.",
        "Avec ce déploiement en production, les étudiants, enseignants et chercheurs de ces six campus bénéficient immédiatement de l'authentification Wi-Fi mondiale eduroam et d'un accès aux référentiels scientifiques internationaux via eduGAIN. Quatorze autres établissements finalisent actuellement la validation de leurs données pour une mise en service au cours des 3e et 4e trimestres 2026.",
      ],
      pt: [
        "A WACREN anuncia o lançamento em produção AC4 do BonafID, assinalando a transição de piloto para plataforma operacional. Seis instituições no Gana, Senegal e Camarões são as primeiras a implementar a versão de produção, com 14 integrações adicionais agendadas até ao final do ano.",
        "O BonafID é um provedor de identidade académica de código aberto, hospedado na nuvem, concebido especificamente para eliminar as barreiras de infraestrutura que historicamente impediram as universidades africanas de participar em federações de confiança. Ao dispensar servidores locais, especialistas em criptografia e manutenção complexa de servidores Shibboleth/SimpleSAMLphp, o BonafID permite que as equipas de TI dos campi implementem serviços de identidade soberanos em poucas semanas.",
        "A coorte inaugural de seis instituições compreende universidades nacionais de investigação e faculdades técnicas no Gana (GARNET), Senegal (snRER) e Camarões (RIC). Através dos conectores integrados do BonafID, os sistemas de gestão académica (SIS) e diretórios LDAP existentes foram sincronizados com os metadados da federação eduID.africa sem migrações complexas de dados.",
        "Com esta entrada em produção, estudantes, professores e investigadores destes seis campi ganham acesso imediato à autenticação Wi-Fi mundial eduroam e a milhares de repositórios digitais no eduGAIN. Mais 14 instituições encontram-se em fase de validação de dados com ativação prevista para os 3º e 4º trimestres de 2026.",
      ],
    },
    meta: {
      programme: "AfricaConnect4 (Year 2)",
      region: "West & Central Africa (WACREN)",
    },
  },
  {
    slug: "abidjan-ti-roadshow-12-institutions",
    image: "/news/abidjan-roadshow.jpg",
    imageCaption: {
      en: "HEI IT administrators and campus engineers collaborating during hands-on BonafID assessment in Abidjan.",
      fr: "Administrateurs informatiques et ingénieurs d'ESR collaborant lors de l'évaluation pratique BonafID à Abidjan.",
      pt: "Administradores de TI e engenheiros de IES a colaborar durante a avaliação prática do BonafID em Abidjan.",
    },
    category: {
      en: "Capacity Building",
      fr: "Renforcement des capacités",
      pt: "Capacitação",
    },
    date: "28 April 2026",
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
      pt: "3 min de leitura",
    },
    title: {
      en: "Abidjan T&I Roadshow: 12 institutions begin BonafID assessment",
      fr: "Roadshow T&I d'Abidjan : 12 établissements entament l'évaluation BonafID",
      pt: "Roadshow de T&I de Abidjan: 12 instituições iniciam avaliação BonafID",
    },
    excerpt: {
      en: "The May West Africa roadshow hosted 34 HEI IT administrators from Côte d'Ivoire, Mali, and Burkina Faso. Twelve institutions completed the initial BonafID readiness assessment.",
      fr: "Le roadshow d'Afrique de l'Ouest organisé à Abidjan a réuni 34 administrateurs informatiques d'ESR de Côte d'Ivoire, du Mali et du Burkina Faso. Douze établissements ont finalisé avec succès leur évaluation de maturité BonafID.",
      pt: "O roadshow da África Ocidental em Abidjan reuniu 34 administradores de TI de IES da Costa do Marfim, Mali e Burkina Faso. Doze instituições concluíram a avaliação inicial de prontidão do BonafID.",
    },
    keyTakeaways: {
      en: [
        "34 campus engineers and CIOs gathered in Abidjan for 4 days of hands-on technical labs.",
        "12 institutions finalized their identity readiness assessment and SIS mapping.",
        "Participants deployed working sandbox instances of BonafID and verified SAML/OIDC metadata.",
      ],
      fr: [
        "34 ingénieurs de campus et directeurs informatiques réunis à Abidjan pour 4 jours d'ateliers pratiques.",
        "12 établissements ont finalisé l'évaluation de leur infrastructure d'identité et le mappage de leurs annuaires.",
        "Les participants ont configuré des instances de test BonafID et validé les métadonnées SAML/OIDC.",
      ],
      pt: [
        "34 engenheiros e diretores de TI reuniram-se em Abidjan para 4 dias de laboratórios práticos.",
        "12 instituições finalizaram o diagnóstico de prontidão e mapeamento de sistemas académicos.",
        "Os participantes configuraram instâncias de teste do BonafID e validaram metadados SAML/OIDC.",
      ],
    },
    content: {
      en: [
        "The May West Africa roadshow hosted 34 HEI IT administrators from Côte d'Ivoire, Mali, and Burkina Faso. Twelve institutions completed the initial BonafID readiness assessment.",
        "Organized by WACREN in collaboration with RITER (Côte d'Ivoire), the four-day intensive workshop brought together university CIOs, systems architects, and campus network engineers to address the practicalities of campus identity federation.",
        "Participants worked directly with the eduID.africa engineering team to audit their campus directory structures, evaluate data hygiene in student management systems, and test BonafID's automated schema mapping engine.",
        "By the close of the roadshow, 12 universities had produced signed readiness assessments and technical deployment roadmaps, positioning them to complete federation onboarding within the next 90 days.",
      ],
      fr: [
        "Le roadshow d'Afrique de l'Ouest organisé à Abidjan a réuni 34 administrateurs informatiques d'ESR de Côte d'Ivoire, du Mali et du Burkina Faso. Douze établissements ont finalisé avec succès leur évaluation de maturité BonafID.",
        "Organisé par WACREN en partenariat avec le RITER (Côte d'Ivoire), cet atelier intensif de quatre jours a permis aux DSI d'universités, architectes systèmes et ingénieurs réseau de maîtriser les aspects concrets de la fédération d'identités.",
        "Les participants ont collaboré directement avec l'équipe technique d'eduID.africa pour auditer la structure de leurs annuaires, évaluer la qualité des données de scolarité et tester le moteur de mappage automatisé de BonafID.",
        "À l'issue de cet événement, 12 universités ont validé leurs audits de conformité technique et leurs feuilles de route de déploiement pour une intégration complète dans les 90 jours.",
      ],
      pt: [
        "O roadshow da África Ocidental em Abidjan reuniu 34 administradores de TI de IES da Costa do Marfim, Mali e Burkina Faso. Doze instituições concluíram a avaliação inicial de prontidão do BonafID.",
        "Organizado pela WACREN em parceria com a RITER (Costa do Marfim), o workshop intensivo de quatro dias reuniu diretores de TI universitários e engenheiros de redes para abordar os requisitos práticos de federação.",
        "Os participantes trabalharam diretamente com os engenheiros do eduID.africa na auditoria de diretórios de campus, validação de integridade de dados e testes práticos com o motor de integração do BonafID.",
        "No encerramento do evento, 12 universidades finalizaram avaliações formais de prontidão e roteiros técnicos para concluir o processo de adesão nos próximos 90 dias.",
      ],
    },
    meta: {
      programme: "WACREN T&I Roadshows",
      region: "Francophone West Africa",
    },
  },
  {
    slug: "ethiopia-joins-continental-federation",
    image: "/news/ethiopia-peering.jpg",
    imageCaption: {
      en: "Addis Ababa research and education network interconnected with eduID.africa continental federation.",
      fr: "Réseau d'enseignement et de recherche d'Addis-Abeba interconnecté avec la fédération continentale eduID.africa.",
      pt: "Rede de investigação e educação de Adis Abeba interligada com a federação continental eduID.africa.",
    },
    category: {
      en: "Federation Expansion",
      fr: "Extension de la fédération",
      pt: "Expansão da Federação",
    },
    date: "14 April 2026",
    readTime: {
      en: "3 min read",
      fr: "3 min de lecture",
      pt: "3 min de leitura",
    },
    title: {
      en: "Ethiopia joins the continental federation — 18 institutions now connected via CERENET",
      fr: "L'Éthiopie rejoint la fédération continentale — 18 établissements désormais connectés via CERENET",
      pt: "Etiópia junta-se à federação continental — 18 instituições conectadas através da CERENET",
    },
    excerpt: {
      en: "CERENET's national federation officially peers with eduID.africa, adding Ethiopia's 18 registered research institutions to the continental network and expanding eduGAIN access across the Horn of Africa.",
      fr: "La fédération nationale de CERENET s'interconnecte officiellement avec eduID.africa, ajoutant 18 établissements de recherche éthiopiens au réseau continental et étendant l'accès eduGAIN dans la Corne de l'Afrique.",
      pt: "A federação nacional da CERENET interliga-se oficialmente com o eduID.africa, somando 18 instituições de investigação da Etiópia à rede continental e expandindo o acesso eduGAIN no Corno de África.",
    },
    keyTakeaways: {
      en: [
        "CERENET becomes the latest National Research and Education Network to peer directly with eduID.africa.",
        "18 Ethiopian higher learning and scientific institutions gain bilateral access to continental resources.",
        "Accelerates research collaboration between Eastern Africa and peer institutions across UbuntuNet, WACREN, and ASREN.",
      ],
      fr: [
        "CERENET devient le plus récent RNRE à s'interconnecter directement avec eduID.africa.",
        "18 universités et centres de recherche éthiopiens bénéficient d'un accès bilatéral aux ressources continentales.",
        "Accélération des partenariats scientifiques entre l'Afrique de l'Est et les établissements membres d'UbuntuNet, WACREN et ASREN.",
      ],
      pt: [
        "A CERENET torna-se a mais recente Rede Nacional de Investigação e Educação a interligar-se diretamente com o eduID.africa.",
        "18 universidades e centros de investigação etíopes ganham acesso bilateral aos recursos continentais.",
        "Acelera a colaboração científica entre a África Oriental e instituições parceiras na UbuntuNet, WACREN e ASREN.",
      ],
    },
    content: {
      en: [
        "CERENET's national federation officially peers with eduID.africa, adding Ethiopia's 18 registered research institutions to the continental network and expanding eduGAIN access across the Horn of Africa.",
        "Following comprehensive metadata exchange and security conformance testing with the UbuntuNet Alliance and WACREN operational teams, CERENET's central federation hub has completed bilateral peering with eduID.africa.",
        "This milestone brings over 180,000 students, researchers, and scientific staff into the continental trust boundary. Ethiopian academic staff can now access digital libraries, computational clusters, and shared scientific datasets across Africa and internationally without separate authentication hurdles.",
        "The peering also sets the stage for rapid nationwide rollout of eduroam Wi-Fi at all 18 member campuses, backed by the regional RadSec proxy infrastructure.",
      ],
      fr: [
        "La fédération nationale de CERENET s'interconnecte officiellement avec eduID.africa, ajoutant 18 établissements de recherche éthiopiens au réseau continental et étendant l'accès eduGAIN dans la Corne de l'Afrique.",
        "Après des tests approfondis d'échange de métadonnées et de conformité de sécurité menés avec les équipes d'UbuntuNet Alliance et de WACREN, le hub central de fédération de CERENET est désormais pleinement opérationnel au niveau continental.",
        "Cette étape majeure intègre plus de 180 000 étudiants, chercheurs et personnels académiques dans le périmètre de confiance continental. La communauté scientifique éthiopienne bénéficie dès aujourd'hui d'un accès fluide aux bibliothèques numériques, aux centres de calcul partagés et aux plateformes de collaboration sans barrières d'authentification.",
        "Cette interconnexion prépare également le déploiement accéléré d'eduroam sur les 18 campus connectés via l'infrastructure proxy régionale RadSec.",
      ],
      pt: [
        "A federação nacional da CERENET interliga-se oficialmente com o eduID.africa, somando 18 instituições de investigação da Etiópia à rede continental e expandindo o acesso eduGAIN no Corno de África.",
        "Após testes exaustivos de intercâmbio de metadados e conformidade de segurança com as equipas operacionais da UbuntuNet Alliance e da WACREN, o hub central da federação da CERENET concluiu com sucesso a interligação com o eduID.africa.",
        "Este marco integra mais de 180.000 estudantes, docentes e investigadores no espaço de confiança continental. A comunidade académica etíope passa a usufruir de acesso simplificado a bibliotecas digitais e clusters computacionais em África e a nível global.",
        "A interligação viabiliza igualmente a expansão rápida do eduroam nos 18 campi universitários com suporte da infraestrutura de proxy RadSec.",
      ],
    },
    meta: {
      programme: "UbuntuNet Alliance & AfricaConnect4",
      region: "Eastern Africa (CERENET)",
    },
  },
  {
    slug: "geteduroam-regional-service-reaches-4200-certificates",
    image: "/news/geteduroam-service.jpg",
    imageCaption: {
      en: "African university students and researchers securely connecting to global eduroam Wi-Fi across campus.",
      fr: "Étudiants et chercheurs africains se connectant en toute sécurité au réseau Wi-Fi mondial eduroam sur les campus.",
      pt: "Estudantes e investigadores universitários africanos a ligarem-se com segurança ao Wi-Fi mundial eduroam nos campi.",
    },
    category: {
      en: "Service Milestones",
      fr: "Jalons du service",
      pt: "Marcos do Serviço",
    },
    date: "2 April 2026",
    readTime: {
      en: "2 min read",
      fr: "2 min de lecture",
      pt: "2 min de leitura",
    },
    title: {
      en: "geteduroam regional service reaches 4,200 active certificate installations",
      fr: "Le service régional geteduroam franchit le cap des 4 200 certificats actifs installés",
      pt: "Serviço regional geteduroam atinge 4.200 instalações ativas de certificados",
    },
    excerpt: {
      en: "The AC4 geteduroam deployment passes 4,200 active certificates, reflecting growing student and staff adoption at connected campuses across the WACREN region.",
      fr: "Le déploiement geteduroam AC4 franchit le cap des 4 200 certificats actifs, témoignant d'une adoption croissante parmi les étudiants et le personnel sur les campus connectés de la région WACREN.",
      pt: "A implementação geteduroam AC4 ultrapassa 4.200 certificados ativos, refletindo a crescente adoção por estudantes e funcionários em campi conectados na região da WACREN.",
    },
    keyTakeaways: {
      en: [
        "4,200+ secure Wi-Fi certificates actively installed across Android, iOS, Windows, and macOS devices.",
        "EAP-TLS certificate-based authentication replaces vulnerable password-based Wi-Fi onboarding.",
        "Catchall programme provides institutions without national federation access with immediate geteduroam profiles.",
      ],
      fr: [
        "Plus de 4 200 certificats Wi-Fi sécurisés installés sur appareils Android, iOS, Windows et macOS.",
        "L'authentification par certificat EAP-TLS remplace l'enregistrement Wi-Fi par mot de passe vulnérable.",
        "Le programme de rattrapage offre aux établissements sans fédération nationale des profils geteduroam immédiats.",
      ],
      pt: [
        "Mais de 4.200 certificados Wi-Fi seguros instalados em dispositivos Android, iOS, Windows e macOS.",
        "A autenticação por certificado EAP-TLS substitui métodos vulneráveis baseados em palavras-passe.",
        "O programa catchall disponibiliza perfis geteduroam imediatos para instituições sem federação nacional.",
      ],
    },
    content: {
      en: [
        "The AC4 geteduroam deployment passes 4,200 active certificates, reflecting growing student and staff adoption at connected campuses across the WACREN region.",
        "Using geteduroam, students and faculty download cryptographic client certificates directly to their laptops and smartphones with a single authentication step. This eliminates the widespread risks of credential theft associated with shared passwords on open campus networks.",
        "The regional RADIUS / RadSec backbone maintained by WACREN and UbuntuNet Alliance ensures roaming users authenticate seamlessly whether working in their home laboratory or visiting research institutes across Africa.",
        "With new onboarding tools launched in BonafID 1.0, participating institutions report a 70% reduction in IT support tickets related to wireless network setup.",
      ],
      fr: [
        "Le déploiement geteduroam AC4 franchit le cap des 4 200 certificats actifs, témoignant d'une adoption croissante parmi les étudiants et le personnel sur les campus connectés de la région WACREN.",
        "Grâce à geteduroam, étudiants et enseignants téléchargent des certificats cryptographiques directement sur leurs ordinateurs et téléphones en une seule étape d'authentification. Cela élimine les risques d'usurpation d'identifiants liés aux mots de passe partagés sur les réseaux de campus.",
        "La dorsale régionale RADIUS / RadSec opérée par WACREN et UbuntuNet Alliance assure une itinérance fluide des utilisateurs, qu'ils soient dans leur laboratoire ou en visite dans des centres de recherche partenaires.",
        "Avec les nouveaux outils d'intégration simplifiés de BonafID 1.0, les universités participantes constatent une baisse de 70 % des tickets de support informatique liés à la configuration Wi-Fi.",
      ],
      pt: [
        "A implementação geteduroam AC4 ultrapassa 4.200 certificados ativos, refletindo a crescente adoção por estudantes e funcionários em campi conectados na região da WACREN.",
        "Com o geteduroam, estudantes e professores transferem certificados criptográficos diretamente para portáteis e telemóveis numa única etapa de autenticação, eliminando os riscos de segurança de redes abertas de campus.",
        "A infraestrutura regional de RADIUS / RadSec mantida pela WACREN e UbuntuNet Alliance garante que utilizadores em mobilidade acedem à rede instantaneamente em qualquer instituição participante.",
        "Com as ferramentas simplificadas do BonafID 1.0, as universidades parceiras registam uma redução de 70% nos pedidos de suporte técnico relacionados com Wi-Fi.",
      ],
    },
    meta: {
      programme: "AfricaConnect4 Roaming",
      region: "WACREN & UbuntuNet Alliance",
    },
  },
];

export function getNewsArticles(locale: Locale): {
  slug: string;
  image: string;
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
    meta: article.meta,
  }));
}

export function getNewsArticleBySlug(slug: string, locale: Locale): {
  slug: string;
  image: string;
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
    content: article.content[locale] || article.content.en,
    keyTakeaways: article.keyTakeaways[locale] || article.keyTakeaways.en,
    meta: article.meta,
  };
}

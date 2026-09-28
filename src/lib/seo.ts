import type { Metadata } from "next";
import { type Locale, locales, defaultLocale } from "./i18n";

export const siteConfig = {
  name: "eduID.africa",
  shortName: "eduID",
  domain: "eduid.africa",
  baseUrl: "https://eduid.africa",
  twitterHandle: "@wacren",
  organization: "Pan-African Trust & Identity Federation",
  themeColor: "#060D1A",
  defaultOgImage: "/og-preview.jpg",
  socials: {
    x: "https://x.com/wacren",
    linkedin: "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/",
    facebook: "https://www.facebook.com/WACRENinfo",
    bluesky: "https://bsky.app/profile/wacren.bsky.social",
    mastodon: "https://mastodon.social/@WACREN",
    email: "eduid@wacren.net",
  },
  partners: [
    { name: "WACREN", fullName: "West and Central African Research and Education Network", url: "https://wacren.net" },
    { name: "UbuntuNet Alliance", fullName: "Eastern and Southern African Research and Education Network", url: "https://ubuntunet.net" },
    { name: "ASREN", fullName: "Arab States Research and Education Network", url: "https://www.asren.net" },
  ],
};

export interface MetadataProps {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  authors?: string[];
}

export function createLocalizedMetadata({
  locale,
  path = "",
  title,
  description,
  keywords,
  image,
  imageAlt,
  ogType = "website",
  publishedTime,
  modifiedTime,
  section,
  authors,
}: MetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.baseUrl}/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  // Alternate language links for SEO (hreflang)
  const languageAlternates: Record<string, string> = {};
  for (const loc of locales) {
    languageAlternates[loc] = `${siteConfig.baseUrl}/${loc}${cleanPath === "/" ? "" : cleanPath}`;
  }
  languageAlternates["x-default"] = `${siteConfig.baseUrl}/${defaultLocale}${cleanPath === "/" ? "" : cleanPath}`;

  const defaultTitles: Record<Locale, string> = {
    en: "eduID.africa — Sovereign Digital Identity Federation for African Academia",
    fr: "eduID.africa — Fédération d'Identité Numérique Souveraine pour l'Afrique",
    pt: "eduID.africa — Federação Soberana de Identidade Digital para África",
    ar: "eduID.africa — اتحاد الهوية الرقمية السيادية للأكاديميا الأفريقية",
  };

  const defaultDescriptions: Record<Locale, string> = {
    en: "Pan-African trust federation providing sovereign federated single sign-on, verifiable digital credentials, and cross-border research access across 54 African nations.",
    fr: "Fédération de confiance panafricaine offrant une authentification unique souveraine, des diplômes numériques vérifiables et un accès à la recherche dans 54 nations.",
    pt: "Federação pan-africana de confiança fornecendo Single Sign-On soberano, credenciais digitais verificáveis e acesso à pesquisa em 54 nações.",
    ar: "اتحاد ثقة أفريقي شامل يوفر دخولاً موحداً سيادياً، وشهادات أكاديمية رقمية قابلة للتحقق، وإمكانية وصول بحثي عابرة للحدود عبر 54 دولة أفريقية.",
  };

  const finalTitle = title || defaultTitles[locale];
  const finalDescription = description || defaultDescriptions[locale];

  // Resolve OpenGraph preview image (defaults to the campus hero preview image)
  const resolvedImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.baseUrl}${image.startsWith("/") ? image : `/${image}`}`
    : `${siteConfig.baseUrl}${siteConfig.defaultOgImage}`;

  const resolvedImageAlt =
    imageAlt ||
    title ||
    `${siteConfig.name} — Sovereign Identity for African Education & Research`;

  const isJpg = resolvedImageUrl.endsWith(".jpg") || resolvedImageUrl.endsWith(".jpeg");

  return {
    title: finalTitle,
    description: finalDescription,
    keywords:
      keywords ||
      "eduID, Africa, sovereign identity, academic federation, NREN, student ID, digital diploma, SSO, research trust, WACREN, UbuntuNet, ASREN, eduroam, eduGAIN",
    authors: [{ name: siteConfig.organization, url: siteConfig.baseUrl }],
    creator: siteConfig.organization,
    publisher: siteConfig.organization,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : locale === "pt" ? "pt_PT" : "ar_SA",
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => (l === "en" ? "en_US" : l === "fr" ? "fr_FR" : l === "pt" ? "pt_PT" : "ar_SA")),
      type: ogType,
      images: [
        {
          url: resolvedImageUrl,
          secureUrl: resolvedImageUrl,
          width: 1200,
          height: 630,
          type: isJpg ? "image/jpeg" : "image/png",
          alt: resolvedImageAlt,
        },
      ],
      ...(ogType === "article" && publishedTime ? { publishedTime } : {}),
      ...(ogType === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(ogType === "article" && section ? { section } : {}),
      ...(ogType === "article" && authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [
        {
          url: resolvedImageUrl,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.png"],
    },
    manifest: "/manifest.webmanifest",
    category: "technology",
    classification: "Academic Research & Sovereign Identity Infrastructure",
  };
}

export function generateOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "SoftwareApplication", "GovernmentProject"],
        "@id": `${siteConfig.baseUrl}/#organization`,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, "eduID Africa", "eduID Trust Federation"],
        url: siteConfig.baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.baseUrl}/logo.png`,
          caption: siteConfig.name,
          width: 512,
          height: 512,
        },
        image: `${siteConfig.baseUrl}/og-preview.jpg`,
        description:
          locale === "fr"
            ? "Fédération panafricaine d'identité souveraine pour l'enseignement supérieur et la recherche reliant 54 nations africaines."
            : locale === "pt"
            ? "Federação pan-africana de identidade soberana para o ensino superior e investigação interligando 54 nações africanas."
            : locale === "ar"
            ? "اتحاد الهوية الرقمية السيادية الأفريقي للتعليم العالي والبحث العلمي يربط 54 دولة أفريقية."
            : "Pan-African sovereign digital identity federation for higher education and research connecting 54 African nations.",
        areaServed: {
          "@type": "Continent",
          name: "Africa",
        },
        sameAs: [
          siteConfig.socials.x,
          siteConfig.socials.linkedin,
          siteConfig.socials.facebook,
          siteConfig.socials.bluesky,
          siteConfig.socials.mastodon,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.socials.email,
          contactType: "technical support",
          availableLanguage: ["English", "French", "Portuguese", "Arabic"],
          areaServed: "Africa",
        },
        member: siteConfig.partners.map((p) => ({
          "@type": "Organization",
          name: `${p.name} (${p.fullName})`,
          url: p.url,
        })),
        funder: {
          "@type": "Project",
          name: "AfricaConnect4",
          description: "Co-funded by the European Union under the AfricaConnect programme",
        },
        applicationCategory: "SecurityApplication",
        operatingSystem: "All",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.baseUrl}/#website`,
        url: siteConfig.baseUrl,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.baseUrl}/#organization`,
        },
        inLanguage: ["en", "fr", "pt", "ar"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.baseUrl}/${locale}/get-started?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function generateBreadcrumbSchema({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  const homeLabels: Record<Locale, string> = {
    en: "Home",
    fr: "Accueil",
    pt: "Início",
    ar: "الرئيسية",
  };

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabels[locale],
      item: `${siteConfig.baseUrl}/${locale}`,
    },
    ...items.map((item, index) => {
      const cleanPath = item.path.startsWith("/") ? item.path : `/${item.path}`;
      return {
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${siteConfig.baseUrl}/${locale}${cleanPath}`,
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function generateArticleSchema({
  locale,
  title,
  description,
  slug,
  image,
  datePublished,
}: {
  locale: Locale;
  title: string;
  description: string;
  slug: string;
  image?: string;
  datePublished?: string;
}) {
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.baseUrl}${image.startsWith("/") ? image : `/${image}`}`
    : `${siteConfig.baseUrl}/og-preview.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.baseUrl}/${locale}/news/${slug}`,
    },
    headline: title,
    description: description,
    image: [resolvedImage],
    datePublished: datePublished || "2026-05-12T00:00:00Z",
    dateModified: datePublished || "2026-05-12T00:00:00Z",
    author: {
      "@type": "Organization",
      name: "eduID.africa",
      url: siteConfig.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.baseUrl}/logo.png`,
      },
    },
    inLanguage: locale,
  };
}

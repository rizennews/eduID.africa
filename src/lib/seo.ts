import type { Metadata } from "next";
import { type Locale, locales, defaultLocale } from "./i18n";

export const siteConfig = {
  name: "eduID.africa",
  shortName: "eduID",
  domain: "eduid.africa",
  baseUrl: "https://eduid.africa",
  twitterHandle: "@eduIDafrica",
  organization: "Pan-African Trust & Identity Federation",
  themeColor: "#060D1A",
};

interface MetadataProps {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: "website" | "article";
}

export function createLocalizedMetadata({
  locale,
  path = "",
  title,
  description,
  keywords,
  ogType = "website",
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

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords || "eduID, Africa, sovereign identity, academic federation, NREN, student ID, digital diploma, SSO, research trust, WACREN, UbuntuNet, ASREN",
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
          url: `${siteConfig.baseUrl}/og-preview.png`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Sovereign Identity for African Education & Research`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      creator: siteConfig.twitterHandle,
      images: [`${siteConfig.baseUrl}/og-preview.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "SoftwareApplication"],
        "@id": `${siteConfig.baseUrl}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.baseUrl}/logo.png`,
          caption: siteConfig.name,
        },
        description:
          locale === "fr"
            ? "Fédération panafricaine d'identité souveraine pour l'enseignement supérieur et la recherche."
            : locale === "pt"
            ? "Federação pan-africana de identidade soberana para o ensino superior e pesquisa."
            : locale === "ar"
            ? "اتحاد الهوية الرقمية السيادية الأفريقي للتعليم العالي والبحث العلمي."
            : "Pan-African sovereign digital identity federation for higher education and research.",
        areaServed: {
          "@type": "Place",
          name: "Africa",
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
      },
    ],
  };
}

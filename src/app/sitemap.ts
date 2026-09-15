import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Root routes for all supported languages
  const localizedEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteConfig.baseUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1.0 : 0.9,
    alternates: {
      languages: {
        en: `${siteConfig.baseUrl}/en`,
        fr: `${siteConfig.baseUrl}/fr`,
        pt: `${siteConfig.baseUrl}/pt`,
      },
    },
  }));

  return localizedEntries;
}

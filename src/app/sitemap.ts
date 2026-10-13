import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { locales } from "@/lib/i18n";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // All static sub-pages in eduID.africa
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/get-started", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/federation-map", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/for-institutions", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/for-nren", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/bonafid", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/how-it-works", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/news", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/events", changeFrequency: "weekly" as const, priority: 0.75 },
    { path: "/training", changeFrequency: "weekly" as const, priority: 0.75 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/governance", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/modules", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.65 },
    { path: "/policies", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Generate localized entries for each static page with full hreflang alternates
  for (const page of staticPages) {
    for (const locale of locales) {
      const url = `${siteConfig.baseUrl}/${locale}${page.path}`;
      const languageAlternates: Record<string, string> = {};
      for (const loc of locales) {
        languageAlternates[loc] = `${siteConfig.baseUrl}/${loc}${page.path}`;
      }
      languageAlternates["x-default"] = `${siteConfig.baseUrl}/en${page.path}`;

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: locale === "en" ? page.priority : Math.max(0.1, Number((page.priority - 0.05).toFixed(2))),
        alternates: {
          languages: languageAlternates,
        },
      });
    }
  }

  // Generate localized entries for each news article
  for (const article of newsArticles) {
    for (const locale of locales) {
      const articlePath = `/news/${article.slug}`;
      const url = `${siteConfig.baseUrl}/${locale}${articlePath}`;
      const languageAlternates: Record<string, string> = {};
      for (const loc of locales) {
        languageAlternates[loc] = `${siteConfig.baseUrl}/${loc}${articlePath}`;
      }
      languageAlternates["x-default"] = `${siteConfig.baseUrl}/en${articlePath}`;

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: languageAlternates,
        },
      });
    }
  }

  return entries;
}

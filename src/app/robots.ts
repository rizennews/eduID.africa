import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["Twitterbot", "facebookexternalhit", "LinkedInBot", "WhatsApp", "Slackbot", "TelegramBot"],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    host: siteConfig.baseUrl,
  };
}

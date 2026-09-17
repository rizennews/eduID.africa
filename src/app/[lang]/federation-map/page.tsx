import * as React from "react";
import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { FederationMapHero } from "@/components/FederationMapHero";
import { FederationMapExplorer } from "@/components/FederationMapExplorer";
import { FederationContactCtaSection } from "@/components/FederationContactCtaSection";
import { GovernancePartnersSection } from "@/components/GovernancePartnersSection";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  return createLocalizedMetadata({
    locale,
    path: "/federation-map",
    title: "Federation Map — eduID.africa",
    description:
      "Explore the interactive map of African countries in the eduID.africa federation categorized by National federation, Catchall / BonafID, In development, and Not connected.",
  });
}

export default async function FederationMapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A162B]">
      {/* Searchable-Style Navbar */}
      <Header locale={locale} dict={dict} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner: Federation Map */}
        <FederationMapHero locale={locale} dict={dict} />

        {/* Interactive Explorer: Map, Category Filters, Search & Directory */}
        <React.Suspense fallback={<div className="min-h-[400px]" />}>
          <FederationMapExplorer locale={locale} dict={dict.federationMapPage} />
        </React.Suspense>

      </main>

      {/* Modern Massive Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

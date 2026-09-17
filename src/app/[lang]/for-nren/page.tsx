import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { NrenOverviewSection } from "@/components/NrenOverviewSection";
import { NrenSovereignSection } from "@/components/NrenSovereignSection";
import { NrenChecklistSection } from "@/components/NrenChecklistSection";
import { NrenDocsSection } from "@/components/NrenDocsSection";
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
    path: "/for-nren",
    title: "For NRENs — Build a National Federation — eduID.africa",
    description:
      "Sovereign identity infrastructure, governance frameworks, training roadshows, and continental peering for Africa's National Research and Education Networks.",
  });
}

export default async function ForNrenPage({
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      {/* Searchable-Style Navbar */}
      <Header locale={locale} dict={dict} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Reusable Hero Component */}
        <AboutHero
          title={
            <>
              For <span className="text-white/80">NRENs</span>
            </>
          }
          subtitle={dict.nrenPage.hero.subtitle}
        />

        {/* NREN Sovereign Infrastructure Overview Section */}
        <NrenOverviewSection locale={locale} dict={dict} />

        {/* Path of Preference: Sovereign Infrastructure Ledger (A, B, C) */}
        <NrenSovereignSection locale={locale} dict={dict} />

        {/* Readiness Checklist & Stepping Stone Callout */}
        <NrenChecklistSection locale={locale} dict={dict} />

        {/* Documentation and Tooling Ledger */}
        <NrenDocsSection locale={locale} dict={dict} />
      </main>

      {/* Modern Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

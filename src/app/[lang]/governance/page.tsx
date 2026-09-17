import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { GovernanceIntroSection } from "@/components/GovernanceIntroSection";
import { GovernanceLeadershipSection } from "@/components/GovernanceLeadershipSection";
import { GovernancePoliciesSection } from "@/components/GovernancePoliciesSection";
import { GovernanceProgrammeSection } from "@/components/GovernanceProgrammeSection";
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
    path: "/governance",
    title: "Governance — eduID.africa",
    description:
      "Standards-aligned. Transparently governed. Built to last. eduID.africa's governance framework ensures the continental federation operates to international standards.",
  });
}

export default async function GovernancePage({
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
        {/* Unified Hero Banner using shared AboutHero */}
        <AboutHero
          title={
            <>
              Governance &amp; <span className="text-white/80">Trust</span>
            </>
          }
          subtitle={
            dict.governancePage.hero.subtitle ||
            "Standards-aligned continental oversight and operational framework."
          }
        />

        {/* Standards & Accountability Overview Section */}
        <GovernanceIntroSection locale={locale} dict={dict} />

        {/* Programme Leadership Section */}
        <GovernanceLeadershipSection locale={locale} dict={dict} />

        {/* Policies and Terms Section */}
        <GovernancePoliciesSection locale={locale} dict={dict} />

        {/* AfricaConnect4 Programme Section */}
        <GovernanceProgrammeSection locale={locale} dict={dict} />
      </main>

      {/* Modern Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

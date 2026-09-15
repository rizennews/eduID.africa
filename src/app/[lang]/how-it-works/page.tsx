import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { HowItWorksHero } from "@/components/HowItWorksHero";
import { HowItWorksIntroSection } from "@/components/HowItWorksIntroSection";
import { HowItWorksLayersSection } from "@/components/HowItWorksLayersSection";
import { UserJourneySection } from "@/components/UserJourneySection";
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
    path: "/how-it-works",
    title: "How it works — eduID.africa",
    description:
      "Three layers. One identity. Continent-scale access. eduID.africa operates across campus identity governance, national federation, and continental aggregation connecting African researchers and students to global resources.",
  });
}

export default async function HowItWorksPage({
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
        {/* Hero Banner: How it works */}
        <HowItWorksHero locale={locale} dict={dict} />

        {/* Intro Section: Three layers. One identity. Continent-scale access. */}
        <HowItWorksIntroSection locale={locale} dict={dict} />

        {/* Three Cards Section: BonafID, eduID.africa, geteduroam */}
        <HowItWorksLayersSection locale={locale} dict={dict} />

        {/* User Journey Section: From arrival to access */}
        <UserJourneySection locale={locale} dict={dict} />

        {/* Continental Governance & Global REN Partners */}
        <GovernancePartnersSection locale={locale} dict={dict} />
      </main>

      {/* Modern Massive Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

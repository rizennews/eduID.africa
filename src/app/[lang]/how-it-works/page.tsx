import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { HowItWorksIntroSection } from "@/components/HowItWorksIntroSection";
import { HowItWorksLayersSection } from "@/components/HowItWorksLayersSection";
import { UserJourneySection } from "@/components/UserJourneySection";
import { ArchitecturePathsSection } from "@/components/ArchitecturePathsSection";
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
  const dict = await getDictionary(locale);

  return createLocalizedMetadata({
    locale,
    path: "/how-it-works",
    title: `${dict.howItWorks.heroTitle} — eduID.africa`,
    description: dict.howItWorks.heroSubtitle || dict.howItWorks.architecturePaths.description,
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      {/* Searchable-Style Navbar */}
      <Header locale={locale} dict={dict} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner using shared AboutHero */}
        <AboutHero
          title={dict.howItWorks.heroTitle}
          subtitle={dict.howItWorks.description}
          locale={locale}
          dict={dict}
        />

        {/* Intro Section: Three layers. One identity. Continent-scale access. */}
        <HowItWorksIntroSection locale={locale} dict={dict} />

        {/* Three Cards Section: BonafID, eduID.africa, geteduroam */}
        <HowItWorksLayersSection locale={locale} dict={dict} />

        {/* User Journey Section: From arrival to access */}
        <UserJourneySection locale={locale} dict={dict} />

        {/* Architecture Section: Where your country fits (Path A & Path B) */}
        <ArchitecturePathsSection locale={locale} dict={dict} />
      </main>

      {/* Modern Massive Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { AboutOverviewSection } from "@/components/AboutOverviewSection";
import { AboutNetworksSection } from "@/components/AboutNetworksSection";
import { AboutMissionSection } from "@/components/AboutMissionSection";
import { AboutTimelineSection } from "@/components/AboutTimelineSection";
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
    path: "/about",
    title: "About eduID.africa — Africa's Continental Trust & Identity Framework",
    description:
      "A Trusted Digital Identity Federation for African Research and Education",
  });
}

export default async function AboutPage({
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
        {/* Hero Banner: About eduID */}
        <AboutHero
          title={dict.nav.eduid.about.title}
          subtitle={dict.about.description}
          locale={locale}
          dict={dict}
        />

        {/* Three networks. One framework. (Three Joined Side-by-Side) */}
        <AboutNetworksSection locale={locale} dict={dict} />

        {/* Mission: Two levels. One framework. */}
        <AboutMissionSection locale={locale} dict={dict} />

        {/* Timeline: How we got here */}
        <AboutTimelineSection locale={locale} dict={dict} />
      </main>

      {/* Modern Massive Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

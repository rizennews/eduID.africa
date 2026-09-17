import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { InstitutionsOverviewSection } from "@/components/InstitutionsOverviewSection";
import { InstitutionsBenefitsSection } from "@/components/InstitutionsBenefitsSection";
import { InstitutionsConnectSection } from "@/components/InstitutionsConnectSection";
import { InstitutionsSupportSection } from "@/components/InstitutionsSupportSection";
import { InstitutionsCtaSection } from "@/components/InstitutionsCtaSection";
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
    path: "/for-institutions",
    title: "For Institutions — eduID.africa",
    description:
      "Connect your university, polytechnic, or research centre to national federations and continental academic identity services.",
  });
}

export default async function ForInstitutionsPage({
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
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <AboutHero
          title={
            <>
              For <span className="text-white/80">Institutions</span>
            </>
          }
          subtitle="Connect your campus identity management to national federations and continental services across Africa."
        />

        {/* Institution Overview Section */}
        <InstitutionsOverviewSection locale={locale} dict={dict} />

        {/* What your institution gains: 6-Card Architectural Ledger */}
        <InstitutionsBenefitsSection locale={locale} dict={dict} />

        {/* How to connect your institution: 5-Step Sequence Ledger */}
        <InstitutionsConnectSection locale={locale} dict={dict} />

        {/* Support throughout: 3-Column Architectural Ledger */}
        <InstitutionsSupportSection locale={locale} dict={dict} />

        {/* Ready to start onboarding CTA */}
        <InstitutionsCtaSection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

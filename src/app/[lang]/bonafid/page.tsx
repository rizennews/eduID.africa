import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { BonafIdOverviewSection } from "@/components/BonafIdOverviewSection";
import { BonafIdProblemSection } from "@/components/BonafIdProblemSection";
import { BonafIdStackSection } from "@/components/BonafIdStackSection";
import { BonafIdRequestSection } from "@/components/BonafIdRequestSection";
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
    path: "/bonafid",
    title: "BonafID Platform — eduID.africa",
    description:
      "Cloud-hosted academic identity and verifiable digital student and researcher credentials for African institutions.",
  });
}

export default async function BonafIdPage({
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
              Bonaf<span className="text-[#1A73C3]">ID</span>
            </>
          }
          subtitle="Sovereign cloud identity and verifiable academic credentials for African students, researchers, and faculties."
        />

        {/* BonafID Overview Section */}
        <BonafIdOverviewSection locale={locale} dict={dict} />

        {/* The problem BonafID exists to fix: 4-Card Architectural Ledger */}
        <BonafIdProblemSection locale={locale} dict={dict} />

        {/* How BonafID fits in the stack: 5-Layer Architectural Diagram */}
        <BonafIdStackSection locale={locale} dict={dict} />

        {/* Request BonafID for your institution: 2-Column Ledger */}
        <BonafIdRequestSection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

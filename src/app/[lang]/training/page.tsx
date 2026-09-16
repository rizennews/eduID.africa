import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { TrainingOverviewSection } from "@/components/TrainingOverviewSection";
import { TrainingResourcesSection } from "@/components/TrainingResourcesSection";
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
    path: "/training",
    title: "Training & Capacity Building — eduID.africa",
    description:
      "Technical tutorials, administrator workshops, and deployment roadshows for African campus engineers and NREN operators.",
  });
}

export default async function TrainingPage({
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
              Training &amp; <span className="text-[#1A73C3]">Capacity</span>
            </>
          }
          subtitle="Technical tutorials, administrator workshops, and deployment roadshows for African campus engineers."
        />

        {/* Training Overview: Hands-on deployment support */}
        <TrainingOverviewSection locale={locale} dict={dict} />

        {/* Self-paced resources: 4-Card Architectural Ledger with Lucide Animated Icons */}
        <TrainingResourcesSection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

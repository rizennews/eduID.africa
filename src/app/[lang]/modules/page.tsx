import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { ModulesOverviewSection } from "@/components/ModulesOverviewSection";
import { ModulesCatalogSection } from "@/components/ModulesCatalogSection";
import { ModulesCtaSection } from "@/components/ModulesCtaSection";
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
    path: "/modules",
    title: "Federation Modules & Integration SDKs — eduID.africa",
    description:
      "Federation libraries, protocol adapters, automated connectors, and deployment recipes for African campus engineers and national federations.",
  });
}

export default async function ModulesPage({
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
          title={dict.modulesPage.hero.title}
          subtitle={dict.modulesPage.hero.subtitle}
          locale={locale}
          dict={dict}
        />

        {/* Modules Overview: Modular federation tooling */}
        <ModulesOverviewSection locale={locale} dict={dict} />

        {/* Modules Catalog: 4 Core Modules with Lucide Animated Icons */}
        <ModulesCatalogSection locale={locale} dict={dict} />

        {/* CTA Section */}
        <ModulesCtaSection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

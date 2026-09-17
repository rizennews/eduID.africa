import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { GetStartedOverviewSection } from "@/components/GetStartedOverviewSection";
import { InstitutionSearchSection } from "@/components/InstitutionSearchSection";
import { GetStartedStepsSection } from "@/components/GetStartedStepsSection";
import { GetStartedNotConnectedSection } from "@/components/GetStartedNotConnectedSection";
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
    path: "/get-started",
    title: "Get Started — eduID.africa",
    description:
      "Set up geteduroam in under three minutes. Seamless Wi-Fi access across every connected campus in the region.",
  });
}

export default async function GetStartedPage({
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
          title={dict.getStartedPage.heroTitle}
          subtitle={dict.getStartedPage.heroSubtitle}
          locale={locale}
          dict={dict}
        />

        {/* Page Overview Section: Set up geteduroam in under three minutes */}
        <GetStartedOverviewSection locale={locale} dict={dict as any} />

        {/* Institution Search Section: Is your university connected? */}
        <InstitutionSearchSection locale={locale} dict={dict as any} />

        {/* Three Steps to geteduroam: Download, Sign in, and Connect */}
        <GetStartedStepsSection locale={locale} dict={dict as any} />

        {/* Not Connected Yet Section: Information for IT admins & Contact */}
        <GetStartedNotConnectedSection locale={locale} dict={dict as any} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

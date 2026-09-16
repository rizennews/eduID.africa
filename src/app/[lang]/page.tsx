import { isValidLocale, defaultLocale, getDictionary, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PathwaysCards } from "@/components/PathwaysCards";
import { TrustMetrics } from "@/components/TrustMetrics";
import { FederationMapSection } from "@/components/FederationMapSection";
import { GovernancePartnersSection } from "@/components/GovernancePartnersSection";
import { Footer } from "@/components/Footer";

export default async function Page({
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
        <Hero locale={locale} dict={dict} />
        <PathwaysCards locale={locale} dict={dict} />
        <TrustMetrics locale={locale} dict={dict} />
        <FederationMapSection locale={locale} dict={dict} />
        <GovernancePartnersSection locale={locale} dict={dict} />
      </main>

      {/* Modern Massive Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

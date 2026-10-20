import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { AboutNetworksSection } from "@/components/AboutNetworksSection";
import { AboutMissionSection } from "@/components/AboutMissionSection";
import { AboutTimelineSection } from "@/components/AboutTimelineSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";

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
    path: "/about",
    title: `${dict.nav.eduid.about.title} | eduID.africa`,
    description: dict.about.description,
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
          visualPlaceholder={
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 group">
              <Image
                src="/students-studying-together-in-a-brightly-lit-libra-2026-09-23-10-46-45-utc.jpg"
                alt="Students studying together in a brightly lit library"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          }
        />

        {/* Three networks. One framework. (Three Joined Side-by-Side) */}
        <AboutNetworksSection locale={locale} dict={dict} />

        {/* Mission: Two levels. One framework. */}
        <AboutMissionSection locale={locale} dict={dict} />

        {/* Timeline: How we got here */}
        <AboutTimelineSection locale={locale} dict={dict} />
      </main>

      {/* Modern Massive Wordmark Footer with EU Funding Statement */}
      <Footer locale={locale} dict={dict} showFundingBanner={true} />
    </div>
  );
}

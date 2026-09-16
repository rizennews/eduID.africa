import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { EventsScheduleSection } from "@/components/EventsScheduleSection";
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
    path: "/events",
    title: "Events & Roadshows — eduID.africa",
    description:
      "Upcoming conferences, technical workshops, and continental identity engineering roadshows across Africa.",
  });
}

export default async function EventsPage({
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
              Events &amp; <span className="text-[#1A73C3]">Roadshows</span>
            </>
          }
          subtitle={
            locale === "fr"
              ? "Conférences, webinaires, ateliers techniques et sommets de l'identité continentale."
              : locale === "pt"
              ? "Conferências, webinars, workshops técnicos e cúpulas de identidade continental."
              : "Conferences, webinars, technical workshops, and continental identity summits."
          }
        />
        <EventsScheduleSection locale={locale} dict={dict as any} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}


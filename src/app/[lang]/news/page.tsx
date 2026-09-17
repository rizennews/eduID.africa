import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { NewsListingSection } from "@/components/NewsListingSection";
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
    path: "/news",
    title: "News & Announcements — eduID.africa",
    description:
      "Latest announcements, milestone reports, and federation deployments across Africa's research and education community.",
  });
}

export default async function NewsPage({
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
              News &amp; <span className="text-white/80">Updates</span>
            </>
          }
          subtitle="Continental federation announcements, deployment milestones, and community updates."
        />

        {/* Latest Announcements Listing Section */}
        <NewsListingSection locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

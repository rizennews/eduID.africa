import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const article of newsArticles) {
      params.push({
        lang,
        slug: article.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  const article = getNewsArticleBySlug(resolvedParams.slug, locale);
  if (!article) {
    return {
      title: "Announcement Not Found — eduID.africa",
    };
  }

  return createLocalizedMetadata({
    locale,
    path: `/news/${resolvedParams.slug}`,
    title: `${article.title} — eduID.africa`,
    description: article.excerpt,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  const dict = await getDictionary(locale);
  const article = getNewsArticleBySlug(resolvedParams.slug, locale);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2)
    .map((a) => ({
      slug: a.slug,
      title: a.title[locale] || a.title.en,
      category: a.category[locale] || a.category.en,
      date: a.date,
      excerpt: a.excerpt[locale] || a.excerpt.en,
    }));

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      <Header locale={locale} dict={dict} />
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href={`/${locale}/news`}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-[#0B357B] transition-colors"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
              <span>{dict.newsPage.backToNews}</span>
            </Link>
          </div>

          {/* Article Header & Metadata Ledger */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono mb-4">
            <span className="text-[#1A73C3] uppercase tracking-wider font-semibold">
              {article.category}
            </span>
            <span className="text-slate-300" aria-hidden="true">/</span>
            <span className="text-slate-500 font-sans">{article.date}</span>
            <span className="text-slate-300" aria-hidden="true">/</span>
            <span className="text-slate-400 font-sans">{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#0B357B] tracking-tight leading-[1.2] mb-8">
            {article.title}
          </h1>

          {/* Lead Excerpt */}
          <p className="text-lg sm:text-xl text-slate-700 font-sans leading-relaxed font-normal mb-10 pb-8 border-b border-dashed border-slate-300/80">
            {article.excerpt}
          </p>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="border border-dashed border-slate-300 bg-white/70 p-6 sm:p-8 mb-12">
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-600 font-semibold mb-4">
                {dict.newsPage.keyTakeaways}
              </h2>
              <ul className="space-y-3">
                {article.keyTakeaways.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 font-sans leading-relaxed"
                  >
                    <span className="text-[#1A73C3] mt-0.5 shrink-0 font-mono font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Body Content */}
          <div className="space-y-6 text-slate-700 font-sans text-base sm:text-lg leading-relaxed">
            {article.content.slice(1).map((paragraph, idx) => (
              <p key={idx} className="font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Context Ledger Box */}
          <div className="mt-12 pt-6 border-t border-dashed border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/40 p-6 border border-slate-200/80">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                {dict.newsPage.metaProgramme}
              </div>
              <div className="font-sans text-sm font-medium text-[#0B357B] mt-1">
                {article.meta.programme}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                {dict.newsPage.metaRegion}
              </div>
              <div className="font-sans text-sm font-medium text-[#0B357B] mt-1">
                {article.meta.region}
              </div>
            </div>
          </div>

          {/* Related Announcements */}
          <div className="mt-16 pt-10 border-t border-dashed border-slate-300">
            <h2 className="font-serif font-normal text-2xl text-[#0B357B] tracking-tight mb-8">
              {dict.newsPage.relatedTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  className="border border-dashed border-slate-300 bg-white/40 p-6 flex flex-col justify-between hover:bg-slate-100/40 transition-colors group"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-500 mb-2">
                      <span className="text-[#0B357B] uppercase tracking-wider">{rel.category}</span>
                      <span className="mx-2">/</span>
                      <span>{rel.date}</span>
                    </div>
                    <Link href={`/${locale}/news/${rel.slug}`} className="block">
                      <h3 className="font-serif text-lg text-[#0B357B] group-hover:text-[#1A73C3] transition-colors leading-snug">
                        {rel.title}
                      </h3>
                    </Link>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
                    <Link
                      href={`/${locale}/news/${rel.slug}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
                    >
                      <span>{dict.newsPage.readMore}</span>
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

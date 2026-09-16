"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getNewsArticles } from "@/data/news";

interface NewsListingSectionProps {
  locale: Locale;
  dict: {
    newsPage: {
      title: string;
      subtitle: string;
      featuredBadge: string;
      readMore: string;
      backToNews: string;
      keyTakeaways: string;
      relatedTitle: string;
      metaProgramme: string;
      metaRegion: string;
    };
  };
}

export function NewsListingSection({ locale, dict }: NewsListingSectionProps) {
  const articles = getNewsArticles(locale);
  const [leadArticle, ...restArticles] = articles;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {dict.newsPage.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {dict.newsPage.subtitle}
          </p>
        </div>

        {/* Lead / Featured Announcement Card */}
        {leadArticle && (
          <div className="border border-dashed border-slate-300 bg-white/70 p-6 sm:p-10 mb-12 transition-colors duration-200 hover:bg-white group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Metadata Ledger */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono">
                    <span className="text-[#1A73C3] font-semibold uppercase tracking-wider">
                      {dict.newsPage.featuredBadge}
                    </span>
                    <span className="text-slate-300" aria-hidden="true">/</span>
                    <span className="text-slate-600 uppercase tracking-wider font-medium">
                      {leadArticle.category}
                    </span>
                    <span className="text-slate-300" aria-hidden="true">/</span>
                    <span className="text-slate-500 font-sans">
                      {leadArticle.date}
                    </span>
                    <span className="text-slate-300" aria-hidden="true">/</span>
                    <span className="text-slate-400 font-sans">
                      {leadArticle.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <Link href={`/${locale}/news/${leadArticle.slug}`} className="block mt-4">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#0B357B] tracking-tight leading-[1.22] group-hover:text-[#1A73C3] transition-colors">
                      {leadArticle.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                    {leadArticle.excerpt}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-dashed border-slate-300/80">
                  <Link
                    href={`/${locale}/news/${leadArticle.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
                  >
                    <span>{dict.newsPage.readMore}</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Lead Featured Image */}
              <div className="lg:col-span-5">
                <Link href={`/${locale}/news/${leadArticle.slug}`} className="block overflow-hidden border border-dashed border-slate-300 bg-slate-100">
                  <img
                    src={leadArticle.image}
                    alt={leadArticle.title}
                    className="w-full h-auto aspect-16/10 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Architectural Ledger for remaining articles */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white/40">
          {restArticles.map((article) => (
            <div
              key={article.slug}
              className="flex flex-col justify-between p-6 sm:p-8 transition-colors duration-200 hover:bg-slate-100/40 group"
            >
              <div>
                {/* Card Thumbnail Image */}
                <Link href={`/${locale}/news/${article.slug}`} className="block overflow-hidden border border-dashed border-slate-300 bg-slate-100 mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto aspect-16/9 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </Link>

                {/* Meta Ledger */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500">
                  <span className="uppercase tracking-wider text-[#0B357B] font-medium">
                    {article.category}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">/</span>
                  <span className="font-sans text-slate-500">{article.date}</span>
                </div>

                {/* Title */}
                <Link href={`/${locale}/news/${article.slug}`} className="block mt-3">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
                    {article.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mt-3 font-normal line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-dashed border-slate-300/80">
                <Link
                  href={`/${locale}/news/${article.slug}`}
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
    </section>
  );
}

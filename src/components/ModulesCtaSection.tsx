"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface ModulesCtaSectionProps {
  locale: Locale;
  dict: {
    modulesPage: {
      ctaSection: {
        title: string;
        description: string;
        actionPrimary: string;
        actionSecondary: string;
      };
    };
  };
}

export function ModulesCtaSection({ locale, dict }: ModulesCtaSectionProps) {
  const { ctaSection } = dict.modulesPage;

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Display Headline */}
        <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#0B357B] tracking-tight leading-tight mb-4">
          {ctaSection.title}
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal max-w-2xl mx-auto mb-8">
          {ctaSection.description}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-[#0B357B] text-white hover:bg-[#1A73C3] shadow-sm transition-all"
          >
            <span>{ctaSection.actionPrimary}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="https://github.com/WACREN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:text-[#0B357B] transition-all shadow-2xs"
          >
            <span>{ctaSection.actionSecondary}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

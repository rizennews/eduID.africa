"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface TrainingOverviewSectionProps {
  locale: Locale;
  dict: {
    trainingPage: {
      overview: {
        headline1: string;
        headline2: string;
        description: string;
        audience: string;
        format: string;
      };
    };
  };
}

export function TrainingOverviewSection({ locale, dict }: TrainingOverviewSectionProps) {
  const { overview } = dict.trainingPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-12 sm:py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Serif Display Headline (No Eyebrow) */}
          <div className="lg:col-span-5">
            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[38px] text-[#0B357B] tracking-tight leading-[1.18]">
              <span>{overview.headline1}</span>{" "}
              <span className="text-[#1A73C3] block mt-1">{overview.headline2}</span>
            </h2>
          </div>

          {/* Right Column: Refined Editorial Narrative with Dashed Hairline Divider */}
          <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-12 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {overview.description}
            </p>

            {/* Target Audience & Format Ledger (Slash-separated, no bullet dots) */}
            <div className="pt-6 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700 font-sans">
              <span>{overview.audience}</span>
              <span className="text-slate-300" aria-hidden="true">/</span>
              <span>{overview.format}</span>
            </div>

            {/* Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
              >
                <span>Request a Roadshow Workshop</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/bonafid`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B357B] transition-colors"
              >
                <span>Explore BonafID Platform</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

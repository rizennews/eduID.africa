"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface GetStartedOverviewSectionProps {
  locale: Locale;
  dict: {
    getStartedPage: {
      overview: {
        headline1: string;
        headline2: string;
        description: string;
        specs: string[];
        actionPrimary: string;
        actionSecondary: string;
      };
    };
  };
}

export function GetStartedOverviewSection({ locale, dict }: GetStartedOverviewSectionProps) {
  const { overview } = dict.getStartedPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-12 sm:py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Display Headline (No Eyebrow) */}
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

            {/* Specifications Ledger (Slash-separated, no bullet dots) */}
            <div className="pt-6 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-slate-700 font-sans">
              {overview.specs.map((spec, idx) => (
                <React.Fragment key={idx}>
                  <span>{spec}</span>
                  {idx < overview.specs.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="https://www.geteduroam.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#0B357B] text-white text-xs sm:text-[13px] font-medium font-sans hover:bg-[#072454] shadow-2xs transition-all active:scale-[0.98] select-none"
              >
                <span>{overview.actionPrimary}</span>
                <span className="text-sm font-normal">↗</span>
              </a>
              <Link
                href={`/${locale}/for-institutions`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B357B] transition-colors"
              >
                <span>{overview.actionSecondary}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

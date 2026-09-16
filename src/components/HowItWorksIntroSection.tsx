"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface HowItWorksIntroSectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      headline1: string;
      headline2: string;
      description: string;
    };
  };
}

export function HowItWorksIntroSection({ locale: _locale, dict }: HowItWorksIntroSectionProps) {
  return (
    <section className="border-y border-dashed border-slate-300 py-12 sm:py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Serif Headline */}
          <div className="lg:col-span-5">
            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[38px] text-[#0B357B] tracking-tight leading-[1.18]">
              <span>{dict.howItWorks.headline1}</span>{" "}
              <span className="text-[#1A73C3] block mt-1">{dict.howItWorks.headline2}</span>
            </h2>
          </div>

          {/* Right Column: Refined Narrative with Dashed Hairline Divider */}
          <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-12 space-y-4">
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {dict.howItWorks.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

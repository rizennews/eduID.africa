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
    <section className="pt-10 sm:pt-12 pb-6 sm:pb-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Executive Card: Three Layers Architecture Statement */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Display Headline */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-[1.15]">
                <span>{dict.howItWorks.headline1}</span>{" "}
                <span className="text-[#1A73C3] block mt-1.5">{dict.howItWorks.headline2}</span>
              </h2>
            </div>

            {/* Right Column: Refined Narrative with Divider */}
            <div className="lg:col-span-7 lg:border-l lg:border-slate-200/90 lg:pl-12">
              <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal">
                {dict.howItWorks.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="border-y border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#0B357B] tracking-tight leading-[1.18] w-full">
          <span>{dict.howItWorks.headline1}</span>{" "}
          <span className="text-[#1A73C3] inline-block mt-2">{dict.howItWorks.headline2}</span>
        </h2>
      </div>
    </section>
  );
}

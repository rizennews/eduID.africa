"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutOverviewSectionProps {
  locale?: Locale;
  dict: {
    about: {
      headline1: string;
      headline2: string;
      description: string;
      networksLabel?: string;
      network1?: string;
      network2?: string;
      network3?: string;
      ctaGovernance?: string;
      ctaHowItWorks?: string;
    };
  };
}

export function AboutOverviewSection({ dict }: AboutOverviewSectionProps) {
  return (
    <section className="border-y border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        {/* Refined Editorial Narrative */}
        <p className="text-lg sm:text-xl text-slate-700 font-sans leading-relaxed font-normal w-full max-w-none">
          {dict.about.description}
        </p>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutIntroSectionProps {
  locale: Locale;
  dict: {
    about: {
      headline1: string;
      headline2: string;
      description: string;
    };
  };
}

export function AboutIntroSection({ dict }: AboutIntroSectionProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-4 sm:pb-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Intro Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-snug">
          <span>{dict.about.headline1}</span>{" "}
          <span className="text-[#1A73C3]">{dict.about.headline2}</span>
        </h2>

        {/* Intro Description */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed w-full max-w-none font-normal">
          {dict.about.description}
        </p>
      </div>
    </section>
  );
}

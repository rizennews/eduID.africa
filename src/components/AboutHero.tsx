"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutHeroProps {
  locale?: Locale;
  dict?: {
    about?: {
      badge?: string;
    };
  };
}

export function AboutHero({ locale: _locale, dict: _dict }: AboutHeroProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Editorial Title */}
        <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0B357B] tracking-tight">
          About <span className="text-[#1A73C3]">eduID.africa</span>
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto font-normal">
          Africa&apos;s continental Trust &amp; Identity framework for research and education.
        </p>
      </div>
    </section>
  );
}

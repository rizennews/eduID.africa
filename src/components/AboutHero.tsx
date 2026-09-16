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

export function AboutHero({ dict }: AboutHeroProps) {
  const badge = dict?.about?.badge || "About eduID.africa";

  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Pill Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300/80 bg-white text-xs font-mono uppercase tracking-wider text-slate-600 mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A73C3]" aria-hidden="true" />
          <span>{badge}</span>
        </div>

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

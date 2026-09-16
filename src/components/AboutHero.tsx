"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

export interface AboutHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  locale?: Locale;
  dict?: any;
}

export function AboutHero({
  title = (
    <>
      About <span className="text-[#1A73C3]">eduID.africa</span>
    </>
  ),
  subtitle = "Africa's continental Trust & Identity framework for research and education.",
}: AboutHeroProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B357B] tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export { AboutHero as PageHero };

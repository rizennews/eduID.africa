"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface AboutOverviewSectionProps {
  locale: Locale;
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

export function AboutOverviewSection({ locale, dict }: AboutOverviewSectionProps) {
  return (
    <section className="bg-[#F8FAFC] pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monolithic Frankli Architectural Grid Framing */}
        <div className="border-y border-dashed border-slate-300 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Serif Headline */}
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A73C3] block mb-3">
                Pan-African Trust Architecture
              </span>
              <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[38px] text-[#0B357B] tracking-tight leading-[1.18]">
                <span>{dict.about.headline1}</span>{" "}
                <span className="text-[#1A73C3] block mt-1">{dict.about.headline2}</span>
              </h2>
            </div>

            {/* Right Column: Refined Editorial Narrative with Dashed Hairline Divider */}
            <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-12 space-y-6">
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
                {dict.about.description}
              </p>

              {/* Governing Regional RENs Ledger */}
              <div className="pt-6 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-y-2 gap-x-6">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {dict.about.networksLabel || "Jointly Governed By"}:
                </span>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 font-sans">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B357B]" aria-hidden="true" />
                    {dict.about.network1 || "UbuntuNet Alliance"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73C3]" aria-hidden="true" />
                    {dict.about.network2 || "WACREN"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A1B]" aria-hidden="true" />
                    {dict.about.network3 || "ASREN"}
                  </span>
                </div>
              </div>

              {/* Minimal Split Action Links */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href={`/${locale}/governance`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
                >
                  <span>{dict.about.ctaGovernance || "Explore Governance"}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href={`/${locale}/how-it-works`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  <span>{dict.about.ctaHowItWorks || "How it works"}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

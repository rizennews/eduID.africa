"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface ArchitecturePathsSectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      architecturePaths: {
        kicker: string;
        headline: string;
        description: string;
        pathA: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
        pathB: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
      };
    };
  };
}

export function ArchitecturePathsSection({
  locale: _locale,
  dict,
}: ArchitecturePathsSectionProps) {
  const data = dict.howItWorks.architecturePaths;

  return (
    <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
            {data.kicker}
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Dual Architectural Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Path A Card: Sovereign National Federation */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#0B357B]/40 p-7 sm:p-9 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              {/* Path Header Tag */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider uppercase bg-blue-50 text-[#0B357B] border border-blue-200/80">
                  {data.pathA.tag}
                </span>

                <span className="w-2.5 h-2.5 rounded-full bg-[#0B357B]" aria-hidden="true" />
              </div>

              {/* Path Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight leading-snug mb-4">
                {data.pathA.title}
              </h3>

              {/* Path Narrative Description */}
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                {data.pathA.description}
              </p>
            </div>

            {/* "Best For" Callout Panel */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <div className="rounded-2xl bg-blue-50/70 border border-blue-200/70 p-4 sm:p-4.5 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0B357B] mt-1.5 shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-semibold text-slate-800 font-sans leading-relaxed">
                  {data.pathA.bestFor}
                </p>
              </div>
            </div>
          </div>

          {/* Path B Card: Direct Catchall On-Ramp */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#DE4A1B]/40 p-7 sm:p-9 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              {/* Path Header Tag */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider uppercase bg-orange-50 text-[#DE4A1B] border border-orange-200/80">
                  {data.pathB.tag}
                </span>

                <span className="w-2.5 h-2.5 rounded-full bg-[#DE4A1B]" aria-hidden="true" />
              </div>

              {/* Path Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight leading-snug mb-4">
                {data.pathB.title}
              </h3>

              {/* Path Narrative Description */}
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                {data.pathB.description}
              </p>
            </div>

            {/* "Best For" Callout Panel */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <div className="rounded-2xl bg-orange-50/70 border border-orange-200/70 p-4 sm:p-4.5 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DE4A1B] mt-1.5 shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-semibold text-slate-800 font-sans leading-relaxed">
                  {data.pathB.bestFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

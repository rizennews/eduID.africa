"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface ConnectStep {
  step: string;
  title: string;
  description: string;
}

interface InstitutionsConnectSectionProps {
  locale?: Locale;
  dict: {
    institutionsPage: {
      connectSection: {
        title: string;
        description: string;
        steps: ConnectStep[];
      };
    };
  };
}

export function InstitutionsConnectSection({ locale: _locale, dict }: InstitutionsConnectSectionProps) {
  const { connectSection } = dict.institutionsPage;

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {connectSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {connectSection.description}
          </p>
        </div>

        {/* 5-Step Architectural Sequence Ledger */}
        <div className="border-t border-dashed border-slate-300 divide-y divide-dashed divide-slate-300/80">
          {connectSection.steps.map((item, idx) => {
            const isCompleted = item.step === "✓";

            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start py-6 sm:py-8 transition-colors duration-200 hover:bg-slate-100/40 px-2 sm:px-4"
              >
                {/* Column 1: Step Number / Checkmark Badge */}
                <div className="md:col-span-1 pt-0.5">
                  {isCompleted ? (
                    <span className="w-7 h-7 rounded-full bg-[#1A73C3] text-white flex items-center justify-center font-mono text-xs font-bold shadow-2xs">
                      ✓
                    </span>
                  ) : (
                    <span className="w-7 h-7 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-xs font-semibold text-[#0B357B] shadow-2xs">
                      {item.step}
                    </span>
                  )}
                </div>

                {/* Column 2: Step Title */}
                <div className="md:col-span-4 lg:col-span-4">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0B357B] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Column 3: Detailed Description */}
                <div className="md:col-span-7 lg:col-span-7">
                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

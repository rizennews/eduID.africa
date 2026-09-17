"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface BenefitItem {
  num: string;
  title: string;
  desc: string;
}

interface InstitutionsBenefitsSectionProps {
  locale?: Locale;
  dict: {
    institutionsPage: {
      benefitsSection: {
        title: string;
        description: string;
        items: BenefitItem[];
      };
    };
  };
}

export function InstitutionsBenefitsSection({ locale: _locale, dict }: InstitutionsBenefitsSectionProps) {
  const { benefitsSection } = dict.institutionsPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {benefitsSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {benefitsSection.description}
          </p>
        </div>

        {/* 6-Card Monolithic Architectural Ledger (3x2) */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white/40">
          {benefitsSection.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-100/40 border-b border-dashed border-slate-300/80 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-dashed md:[&:nth-child(odd)]:border-slate-300/80 lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n))]:border-dashed lg:[&:not(:nth-child(3n))]:border-slate-300/80 lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 [&:last-child]:border-b-0"
            >
              <div>
                {/* Index / Number Badge */}
                <span className="font-mono text-xs font-semibold text-[#1A73C3] block mb-3">
                  {item.num}
                </span>

                {/* Benefit Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-3 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

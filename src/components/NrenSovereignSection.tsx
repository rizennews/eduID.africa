"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface NrenSovereignSectionProps {
  locale: Locale;
  dict: {
    nrenPage: {
      sovereignSection: {
        eyebrow: string;
        headline: string;
        description: string;
        featureA: {
          letter: string;
          title: string;
          desc: string;
        };
        featureB: {
          letter: string;
          title: string;
          desc: string;
        };
        featureC: {
          letter: string;
          title: string;
          desc: string;
          linkText: string;
        };
      };
    };
  };
}

export function NrenSovereignSection({ locale, dict }: NrenSovereignSectionProps) {
  const { sovereignSection } = dict.nrenPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {sovereignSection.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {sovereignSection.description}
          </p>
        </div>

        {/* 3-Column Monolithic Architectural Ledger (A, B, C) */}
        <div className="mt-10 sm:mt-12 border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white/40">
          {/* Card A: Governance sovereignty */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40">
            <div>
              <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-sm font-semibold text-[#0B357B] shadow-2xs mb-6">
                {sovereignSection.featureA.letter}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                {sovereignSection.featureA.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                {sovereignSection.featureA.desc}
              </p>
            </div>
          </div>

          {/* Card B: Tooling and technical support */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40">
            <div>
              <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-sm font-semibold text-[#1A73C3] shadow-2xs mb-6">
                {sovereignSection.featureB.letter}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                {sovereignSection.featureB.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                {sovereignSection.featureB.desc}
              </p>
            </div>
          </div>

          {/* Card C: T&I Roadshow programme */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40">
            <div>
              <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-sm font-semibold text-[#DE4A1B] shadow-2xs mb-6">
                {sovereignSection.featureC.letter}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                {sovereignSection.featureC.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                {sovereignSection.featureC.desc}
              </p>
            </div>

            {/* View roadshow schedule link */}
            <div className="mt-8 pt-4 border-t border-dashed border-slate-300/80">
              <Link
                href={`/${locale}/events`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
              >
                <span>{sovereignSection.featureC.linkText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

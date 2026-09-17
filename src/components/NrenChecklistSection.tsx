"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface NrenChecklistSectionProps {
  locale: Locale;
  dict: {
    nrenPage: {
      checklistSection: {
        eyebrow: string;
        headline: string;
        intro: string;
        items: string[];
        callout: {
          title: string;
          desc: string;
          linkText: string;
        };
      };
    };
  };
}

export function NrenChecklistSection({ locale, dict }: NrenChecklistSectionProps) {
  const { checklistSection } = dict.nrenPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Eyebrow, Headline, Intro & Callout Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[38px] text-[#0B357B] tracking-tight leading-[1.18]">
                {checklistSection.headline}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
                {checklistSection.intro}
              </p>
            </div>

            {/* Advisory Callout: Not ready for Path A yet? */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1A73C3] font-semibold">
                  Path B Alternative
                </span>
              </div>
              <h4 className="font-serif text-lg text-[#0B357B] font-normal mb-2">
                {checklistSection.callout.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-4 font-normal">
                {checklistSection.callout.desc}
              </p>
              <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
                <Link
                  href={`/${locale}/how-it-works`}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-white bg-[#0B357B] transition-opacity hover:opacity-90"
                >
                  <span>{checklistSection.callout.linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 5-Step Checklist Ledger */}
          <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-12">
            <div className="divide-y divide-dashed divide-slate-300/80 border-y border-dashed border-slate-300/80">
              {checklistSection.items.map((item, idx) => (
                <div key={idx} className="py-5 sm:py-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center mt-0.5 shadow-2xs">
                    <svg
                      className="w-3.5 h-3.5 text-[#1A73C3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-sans text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

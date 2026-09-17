"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface DocItem {
  category: string;
  title: string;
  meta: string;
  action: string;
}

interface NrenDocsSectionProps {
  locale?: Locale;
  dict: {
    nrenPage: {
      docsSection: {
        title: string;
        items: DocItem[];
      };
    };
  };
}

export function NrenDocsSection({ locale: _locale, dict }: NrenDocsSectionProps) {
  const { docsSection } = dict.nrenPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Headline */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {docsSection.title}
          </h2>
        </div>

        {/* Monolithic 3-Column Resource Ledger */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white/40">
          {docsSection.items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 sm:p-8 lg:p-8 transition-colors duration-200 hover:bg-slate-100/40"
            >
              <div>
                {/* Category Pill / Tag */}
                <div className="mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block">
                    {item.category}
                  </span>
                </div>

                {/* Document Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Metadata */}
                <p className="font-mono text-xs text-slate-500 mt-4 leading-relaxed">
                  {item.meta}
                </p>
              </div>

              {/* Action Button / Link */}
              <div className="mt-8 pt-5 border-t border-dashed border-slate-300/80">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 ${
                    ["bg-[#0B357B]", "bg-[#1A73C3]", "bg-[#DE4A1B]"][idx % 3]
                  }`}
                >
                  <span>{item.action}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

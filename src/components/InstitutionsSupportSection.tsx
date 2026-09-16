"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface SupportItem {
  title: string;
  description: string;
  linkText?: string;
  href?: string;
}

interface InstitutionsSupportSectionProps {
  locale: Locale;
  dict: {
    institutionsPage: {
      supportSection: {
        title: string;
        description: string;
        items: SupportItem[];
      };
    };
  };
}

export function InstitutionsSupportSection({ locale, dict }: InstitutionsSupportSectionProps) {
  const { supportSection } = dict.institutionsPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {supportSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {supportSection.description}
          </p>
        </div>

        {/* 3-Column Architectural Support Ledger */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white/40">
          {supportSection.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Link (if present) */}
              {item.linkText && item.href && (
                <div className="mt-8 pt-4 border-t border-dashed border-slate-300/80">
                  <Link
                    href={`/${locale}${item.href}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

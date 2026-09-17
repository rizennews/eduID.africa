"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface BonafIdRequestSectionProps {
  locale: Locale;
  dict: {
    bonafidPage: {
      requestSection: {
        title: string;
        description: string;
        card1: {
          title: string;
          description: string;
          action: string;
          href: string;
        };
        card2: {
          title: string;
          description: string;
          action: string;
          href: string;
        };
      };
    };
  };
}

export function BonafIdRequestSection({ locale, dict }: BonafIdRequestSectionProps) {
  const { requestSection } = dict.bonafidPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 w-full">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {requestSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {requestSection.description}
          </p>
          <div className="mt-8">
            <a
              href="https://bonafid.africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 h-11 px-6 rounded-full bg-[#0B357B] text-white text-sm font-medium hover:bg-[#1A73C3] transition-colors shadow-2xs"
            >
              <span>Visit BonafID website</span>
              <span className="font-mono font-bold transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* 2-Column Monolithic Architectural Ledger */}
        <div className="hidden border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white/40">
          {/* Card 1: For institutions */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                {requestSection.card1.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                {requestSection.card1.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-dashed border-slate-300/80">
              <Link
                href={`/${locale}${requestSection.card1.href}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
              >
                <span>{requestSection.card1.action}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: For NRENs and developers */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/40">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                {requestSection.card2.title}
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                {requestSection.card2.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-dashed border-slate-300/80">
              <a
                href={requestSection.card2.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
              >
                <span>{requestSection.card2.action}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

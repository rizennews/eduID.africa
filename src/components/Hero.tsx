"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, type ArrowRightIconHandle, SearchIcon, type SearchIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
  dict: {
    hero: {
      headline1: string;
      headline2: string;
      description: string;
      ctaNren: string;
      ctaInstitution: string;
    };
  };
}

export function Hero({ locale, dict }: HeroProps) {
  // Clean trailing arrow from dictionary string if present
  const nrenLabel = dict.hero.ctaNren.replace(/→\s*$/, "").trim();
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const searchRef = React.useRef<SearchIconHandle>(null);

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Clean Typography & Interactive CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 text-left">
            {/* Main Dual Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-[1.12]">
              <span className="block text-[#0A162B]">
                {dict.hero.headline1}
              </span>
              <span className="block mt-2 text-[#1A73C3]">
                {dict.hero.headline2}
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-2xl font-normal">
              {dict.hero.description}
            </p>

            {/* Action Buttons with Lucide-Animated Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Primary Button: For NRENs with authentic animated arrow */}
              <Link
                href={`/${locale}/for-nren`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#1A73C3] text-white text-sm font-bold font-outfit shadow-sm hover:bg-[#155ea0] hover:shadow-md transition-all active:scale-[0.98] select-none"
              >
                <span>{nrenLabel}</span>
                <ArrowRightIcon ref={arrowRef} size={18} className="text-white" />
              </Link>

              {/* Secondary Button: Check your institution with authentic animated search icon */}
              <Link
                href={`/${locale}/for-institutions`}
                onMouseEnter={() => searchRef.current?.startAnimation()}
                onMouseLeave={() => searchRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-white border-2 border-slate-300 text-slate-800 text-sm font-semibold font-outfit hover:bg-slate-50 hover:border-[#0B357B] hover:text-[#0B357B] shadow-xs transition-all active:scale-[0.98] select-none"
              >
                <SearchIcon ref={searchRef} size={18} className="text-slate-500 group-hover:text-[#0B357B] transition-colors" />
                <span>{dict.hero.ctaInstitution}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Visible Placeholder Container (Ready for incoming image asset) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-lg lg:max-w-none aspect-[4/3] max-h-[340px] lg:max-h-[360px] rounded-2xl bg-white border-2 border-dashed border-slate-300 shadow-xs flex flex-col items-center justify-center p-6 text-center select-none">
              <span className="font-outfit font-bold text-xs uppercase tracking-wider text-slate-400">
                Visual Design Placeholder
              </span>
              <span className="text-xs text-slate-400 font-sans mt-1">
                (Ready for final graphic asset)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

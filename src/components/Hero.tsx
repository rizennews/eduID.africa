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

  const eyebrow =
    locale === "fr"
      ? "Infrastructure de confiance"
      : locale === "pt"
      ? "Infraestrutura de confiança"
      : "Trust & Identity";

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-[#EEF4FB] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Consistent Editorial Typography & Minimal CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 text-left">
            {/* Minimal Pill Eyebrow (Consistent with other sections) */}
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-2xs">
                {eyebrow}
              </span>

              {/* Main Headline in official eduID Navy (#0B357B) and eduID Blue (#1A73C3) */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.16] mt-4 max-w-2xl">
                <span className="text-[#0B357B]">{dict.hero.headline1}</span>{" "}
                <span className="text-[#1A73C3]">{dict.hero.headline2}</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {dict.hero.description}
            </p>

            {/* Action Buttons: Official eduID Brand Colors (Navy & Blue) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Button: For NRENs in official eduID Navy */}
              <Link
                href={`/${locale}/for-nren`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-[#0B357B] text-white text-xs sm:text-[13px] font-medium font-sans hover:bg-[#072454] shadow-2xs transition-all active:scale-[0.98] select-none"
              >
                <span>{nrenLabel}</span>
                <ArrowRightIcon ref={arrowRef} size={15} className="text-white" />
              </Link>

              {/* Secondary Button: Check your institution in eduID Navy text */}
              <Link
                href={`/${locale}/for-institutions`}
                onMouseEnter={() => searchRef.current?.startAnimation()}
                onMouseLeave={() => searchRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white border border-slate-200/90 text-[#0B357B] text-xs sm:text-[13px] font-medium font-sans hover:bg-blue-50/50 hover:text-[#1A73C3] hover:border-blue-200 shadow-2xs transition-all active:scale-[0.98] select-none"
              >
                <SearchIcon
                  ref={searchRef}
                  size={15}
                  className="text-[#1A73C3] group-hover:text-[#0B357B] transition-colors"
                />
                <span>{dict.hero.ctaInstitution}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Dashed Placeholder matching the new design language */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-lg lg:max-w-none aspect-[4/3] max-h-[320px] lg:max-h-[350px] border border-dashed border-slate-300 bg-white/60 p-8 text-center flex flex-col items-center justify-center select-none">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                Visual Graphic Asset
              </span>
              <span className="text-xs text-slate-400 font-sans mt-1.5">
                (Pan-African Trust Topology)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

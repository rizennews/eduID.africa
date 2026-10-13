"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-[#1A73C3] text-white border-b border-[#145FA3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Consistent Editorial Typography & Minimal CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 text-left">
            <div>
              {/* Main Headline in white and soft highlight */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.16] max-w-2xl text-white">
                <span>{dict.hero.headline1}</span>{" "}
                <span className="text-white/80">{dict.hero.headline2}</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="font-sans text-base sm:text-lg text-blue-50/95 leading-relaxed max-w-xl font-normal">
              {dict.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Button: For NRENs in official eduID Navy */}
              <Link
                href={`/${locale}/for-nren`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-[#0B357B] text-white text-xs sm:text-[13px] font-medium font-sans hover:bg-[#072454] border border-white/20 shadow-xs transition-all active:scale-[0.98] select-none"
              >
                <span>{nrenLabel}</span>
                <ArrowRightIcon ref={arrowRef} size={15} className="text-white" />
              </Link>

              {/* Secondary Button: Check your institution in crisp white with Navy text */}
              <Link
                href={`/${locale}/for-institutions`}
                onMouseEnter={() => searchRef.current?.startAnimation()}
                onMouseLeave={() => searchRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-[#0B357B] text-xs sm:text-[13px] font-medium font-sans hover:bg-blue-50 shadow-xs transition-all active:scale-[0.98] select-none"
              >
                <SearchIcon
                  ref={searchRef}
                  size={15}
                  className="text-[#1A73C3] transition-colors"
                />
                <span>{dict.hero.ctaInstitution}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-xl lg:max-w-none aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image 
                src="/young-adults-walking-and-talking-on-college-campus-2026-09-21-11-39-22-utc .jpg"
                alt="Students walking and talking on a college campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

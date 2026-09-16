"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface FederationMapHeroProps {
  locale?: Locale;
  dict: {
    federationMapPage: {
      hero: {
        title: string;
        subtitle: string;
      };
    };
  };
}

export function FederationMapHero({ dict }: FederationMapHeroProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Minimal Editorial Serif Title */}
        <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0B357B] tracking-tight">
          Federation <span className="text-[#1A73C3]">Map</span>
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto font-normal leading-relaxed">
          {dict.federationMapPage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}

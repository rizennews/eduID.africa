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
    <section className="bg-[#0B357B] text-white py-10 sm:py-12 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          {dict.federationMapPage.hero.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-sans max-w-2xl mx-auto leading-relaxed">
          {dict.federationMapPage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}

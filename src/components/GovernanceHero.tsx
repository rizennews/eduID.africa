"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface GovernanceHeroProps {
  locale?: Locale;
  dict: {
    governancePage: {
      hero: {
        title: string;
        subtitle?: string;
      };
    };
  };
}

export function GovernanceHero({ dict }: GovernanceHeroProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B357B] tracking-tight">
          {dict.governancePage.hero.title}
        </h1>
        {dict.governancePage.hero.subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
            {dict.governancePage.hero.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}


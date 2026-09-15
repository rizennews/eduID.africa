"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface GovernanceHeroProps {
  locale?: Locale;
  dict: {
    governancePage: {
      hero: {
        title: string;
      };
    };
  };
}

export function GovernanceHero({ dict }: GovernanceHeroProps) {
  return (
    <section className="bg-[#0B357B] text-white py-10 sm:py-12 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          {dict.governancePage.hero.title}
        </h1>
      </div>
    </section>
  );
}

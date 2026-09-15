"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutHeroProps {
  locale?: Locale;
  dict?: unknown;
}

export function AboutHero({ locale: _locale, dict: _dict }: AboutHeroProps) {
  return (
    <section className="bg-[#0B357B] text-white py-10 sm:py-12 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          About eduID
        </h1>
      </div>
    </section>
  );
}

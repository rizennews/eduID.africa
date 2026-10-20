"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface InstitutionsOverviewSectionProps {
  locale?: Locale;
  dict: {
    institutionsPage: {
      overview: {
        headline1: string;
        headline2: string;
        description: string;
        audience: string;
        timeline: string;
      };
    };
  };
}

export function InstitutionsOverviewSection({ dict }: InstitutionsOverviewSectionProps) {
  const { overview } = dict.institutionsPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal w-full max-w-none">
          {overview.description}
        </p>
      </div>
    </section>
  );
}

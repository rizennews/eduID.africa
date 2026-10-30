"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface NrenOverviewSectionProps {
  locale?: Locale;
  dict: {
    nrenPage: {
      overview: {
        eyebrow: string;
        headline1: string;
        headline2: string;
        subheadline?: string;
        description: string;
      };
      pillars?: {
        sovereignty: { title: string; desc: string };
        roadshows: { title: string; desc: string };
        peering: { title: string; desc: string };
      };
    };
  };
}

export function NrenOverviewSection({ dict }: NrenOverviewSectionProps) {
  const { overview } = dict.nrenPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {overview.subheadline && (
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0B357B] tracking-tight leading-tight mb-4">
            {overview.subheadline}
          </h2>
        )}
        <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal w-full max-w-none">
          {overview.description}
        </p>
      </div>
    </section>
  );
}
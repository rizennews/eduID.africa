"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface BonafIdOverviewSectionProps {
  locale: Locale;
  dict: {
    bonafidPage: {
      overview: {
        headline1: string;
        headline2: string;
        description: string;
        badges: string[];
      };
    };
  };
}

export function BonafIdOverviewSection({ locale, dict }: BonafIdOverviewSectionProps) {
  const { overview } = dict.bonafidPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-8 sm:py-10 lg:py-12 bg-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Refined Editorial Narrative (Centered and Expanded) */}
        <p className="text-lg sm:text-xl text-slate-700 font-sans leading-relaxed font-normal w-full">
          {overview.description}
        </p>
      </div>
    </section>
  );
}

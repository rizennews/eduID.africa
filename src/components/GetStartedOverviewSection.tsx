"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface GetStartedOverviewSectionProps {
  locale: Locale;
  dict: {
    getStartedPage: {
      overview: {
        headline1: string;
        headline2: string;
        description: string;
        specs: string[];
        actionPrimary: string;
        actionSecondary: string;
      };
    };
  };
}

export function GetStartedOverviewSection({ locale, dict }: GetStartedOverviewSectionProps) {
  const { overview } = dict.getStartedPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal max-w-none mx-auto">
          {overview.description}
        </p>
      </div>
    </section>
  );
}

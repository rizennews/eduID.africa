"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface NrenOverviewSectionProps {
  locale: Locale;
  dict: {
    nrenPage: {
      overview: {
        eyebrow: string;
        headline1: string;
        headline2: string;
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

export function NrenOverviewSection({ locale, dict }: NrenOverviewSectionProps) {
  const { overview, pillars } = dict.nrenPage;

  return (
    <section className="border-b border-dashed border-slate-300 py-6 sm:py-8 lg:py-10 bg-white/40">
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal">
          {overview.description}
        </p>
      </div>
    </section>
  );
}

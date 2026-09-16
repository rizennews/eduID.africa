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
    <section className="border-b border-dashed border-slate-300 py-12 sm:py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Serif Display Headline */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#1A73C3] block mb-3">
              {overview.eyebrow}
            </span>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[38px] text-[#0B357B] tracking-tight leading-[1.18]">
              <span>{overview.headline1}</span>{" "}
              <span className="text-[#1A73C3] block mt-1">{overview.headline2}</span>
            </h2>
          </div>

          {/* Right Column: Refined Editorial Narrative with Dashed Hairline Divider */}
          <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-12 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {overview.description}
            </p>

            {/* Core Pillars Ledger */}
            {pillars && (
              <div className="pt-6 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-y-2 gap-x-6">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  Core Pillars:
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700 font-sans">
                  <span>{pillars.sovereignty.title}</span>
                  <span className="text-slate-300" aria-hidden="true">/</span>
                  <span>{pillars.roadshows.title}</span>
                  <span className="text-slate-300" aria-hidden="true">/</span>
                  <span>{pillars.peering.title}</span>
                </div>
              </div>
            )}

            {/* Minimal Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                href={`/${locale}/how-it-works`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
              >
                <span>Explore Technical Architecture</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`/${locale}/governance`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B357B] transition-colors"
              >
                <span>Continental Governance</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

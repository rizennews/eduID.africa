"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutNetworksSectionProps {
  locale: Locale;
  dict: {
    about: {
      networksSection: {
        headline: string;
        description: string;
        network1: {
          shortName: string;
          fullName: string;
          region: string;
        };
        network2: {
          shortName: string;
          fullName: string;
          region: string;
        };
        network3: {
          shortName: string;
          fullName: string;
          region: string;
        };
      };
    };
  };
}

export function AboutNetworksSection({ locale: _locale, dict }: AboutNetworksSectionProps) {
  const data = dict.about.networksSection;

  const networks = [
    {
      shortName: data.network1.shortName,
      fullName: data.network1.fullName,
      region: data.network1.region,
      accent: "#0B357B",
    },
    {
      shortName: data.network2.shortName,
      fullName: data.network2.fullName,
      region: data.network2.region,
      accent: "#1A73C3",
    },
    {
      shortName: data.network3.shortName,
      fullName: data.network3.fullName,
      region: data.network3.region,
      accent: "#DE4A1B",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300/80 bg-white text-xs font-mono uppercase tracking-wider text-slate-600 mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73C3]" aria-hidden="true" />
            <span>Regional Leadership</span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Monolithic 3-Column Architectural Grid */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80">
          {networks.map((net) => (
            <div
              key={net.shortName}
              className="group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/50"
            >
              {/* Upper Content: Serif Headline & Relaxed Body */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: net.accent }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Regional REN
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-[#0B357B] tracking-tight leading-snug">
                  {net.shortName}
                </h3>

                <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                  {net.fullName}
                </p>
              </div>

              {/* Spacious Negative Space Spacer */}
              <div className="min-h-[80px] sm:min-h-[100px] flex-1" />

              {/* Footer Area: Dashed Divider + Region Tag on Left, Dot Beacon on Right */}
              <div className="pt-4 border-t border-dashed border-slate-300/80 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-600 tracking-wider">
                  {net.region}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: net.accent }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

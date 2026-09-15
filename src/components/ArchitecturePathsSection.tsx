"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface ArchitecturePathsSectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      architecturePaths: {
        kicker: string;
        headline: string;
        description: string;
        pathA: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
        pathB: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
      };
    };
  };
}

export function ArchitecturePathsSection({
  locale: _locale,
  dict,
}: ArchitecturePathsSectionProps) {
  const data = dict.howItWorks.architecturePaths;

  const paths = [
    {
      num: "01",
      tag: data.pathA.tag,
      title: data.pathA.title,
      description: data.pathA.description,
      bestFor: data.pathA.bestFor,
      badgeColor: "bg-blue-50 text-[#0B357B] border-blue-200/80",
    },
    {
      num: "02",
      tag: data.pathB.tag,
      title: data.pathB.title,
      description: data.pathB.description,
      bestFor: data.pathB.bestFor,
      badgeColor: "bg-orange-50 text-[#DE4A1B] border-orange-200/80",
    },
  ];

  return (
    <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80 mb-3">
            {data.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Minimalist 3-Column List with Dashed Dividers */}
        <div className="border-t border-dashed border-slate-300">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="py-7 sm:py-8 border-b border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline transition-colors hover:bg-slate-50/50 px-2 sm:px-3 rounded-lg"
            >
              {/* Column 1: Monospaced Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-sm sm:text-base font-medium text-slate-400">
                  {path.num}
                </span>
              </div>

              {/* Column 2: Title and Best For Badge */}
              <div className="md:col-span-5 space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 tracking-tight leading-snug">
                  {path.title}
                </h3>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-sans border ${path.badgeColor}`}
                  >
                    {path.bestFor}
                  </span>
                </div>
              </div>

              {/* Column 3: Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {path.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

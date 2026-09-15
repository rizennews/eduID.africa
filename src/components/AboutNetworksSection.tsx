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
      badgeClass: "bg-blue-50 text-[#0B357B] border-blue-200/80",
    },
    {
      shortName: data.network2.shortName,
      fullName: data.network2.fullName,
      region: data.network2.region,
      accent: "#1A73C3",
      badgeClass: "bg-sky-50 text-[#1A73C3] border-sky-200/80",
    },
    {
      shortName: data.network3.shortName,
      fullName: data.network3.fullName,
      region: data.network3.region,
      accent: "#DE4A1B",
      badgeClass: "bg-amber-50 text-[#DE4A1B] border-amber-200/80",
    },
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Three Joined Side-by-Side Container */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200/90 grid grid-cols-1 md:grid-cols-3">
          {networks.map((net) => (
            <div
              key={net.shortName}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: net.accent }}
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                    {net.shortName}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {net.fullName}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100/90">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-outfit border ${net.badgeClass}`}
                >
                  {net.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";

interface AboutNetworksSectionProps {
  locale: Locale;
  dict: {
    about: {
      networksSection: {
        headline: string;
        description: string;
        kicker?: string;
        tag?: string;
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

export function AboutNetworksSection({ dict }: AboutNetworksSectionProps) {
  const data = dict.about.networksSection;

  const networks = [
    {
      shortName: data.network1.shortName,
      fullName: data.network1.fullName,
      region: data.network1.region,
      url: "https://ubuntunet.net/",
      logo: "/networks-logo/ubuntunet-alliance-logo-2.png",
      accent: "#0B357B",
    },
    {
      shortName: data.network2.shortName,
      fullName: data.network2.fullName,
      region: data.network2.region,
      url: "https://wacren.net/",
      logo: "/networks-logo/wacren.png",
      accent: "#1A73C3",
    },
    {
      shortName: data.network3.shortName,
      fullName: data.network3.fullName,
      region: data.network3.region,
      url: "https://www.asren.net",
      logo: "/networks-logo/asren.png",
      accent: "#DE4A1B",
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {data.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Regional Network Map Illustration Slot */}
        <div className="mb-10 max-w-5xl mx-auto">
          <VisualPlaceholder
            type="map"
            title="Three Regional REN Operational Map Slot"
            dimensions="1200 × 420 (Regional Network Topology)"
            description="Slot for continental map illustration showing the operational footprint of UbuntuNet Alliance, WACREN, and ASREN."
            aspectRatio="aspect-[21/9]"
            theme="light"
          />
        </div>

        {/* Monolithic 3-Column Architectural Grid */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80">
          {networks.map((net) => (
            <a
              key={net.shortName}
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/50"
              style={{ "--card-accent": net.accent } as React.CSSProperties}
            >
              {/* Upper Content: Serif Headline & Relaxed Body */}
              <div>
                <div className="mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {data.tag || "Regional REN"}
                  </span>
                </div>

                <div className="mb-4 h-12 sm:h-14 lg:h-16 flex items-center">
                  <Image
                    src={net.logo}
                    alt={net.shortName}
                    width={180}
                    height={60}
                    className="max-w-[140px] max-h-[48px] object-contain object-left"
                  />
                </div>

                <h3 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[var(--card-accent)] transition-colors">
                  {net.shortName}
                </h3>

                <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                  {net.fullName}
                </p>
              </div>

              {/* Normal Spacer to push footer down */}
              <div className="flex-1 mt-8" />

              {/* Footer Area: Dashed Divider + Region Tag */}
              <div className="pt-4 border-t border-dashed border-slate-300/80 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-600 tracking-wider">
                  {net.region}
                </span>
                <span className="font-mono font-bold text-[var(--card-accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

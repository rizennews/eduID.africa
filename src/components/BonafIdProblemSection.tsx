"use client";

import * as React from "react";
import { Cloud, Network, Globe, ShieldCheck } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { Locale } from "@/lib/i18n";

interface ProblemItem {
  icon: string;
  title: string;
  desc: string;
}

interface BonafIdProblemSectionProps {
  locale?: Locale;
  dict: {
    bonafidPage: {
      problemSection: {
        title: string;
        description: string;
        items: ProblemItem[];
      };
    };
  };
}

export function BonafIdProblemSection({ locale: _locale, dict }: BonafIdProblemSectionProps) {
  const { problemSection } = dict.bonafidPage;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <Cloud className="w-5 h-5 text-[#0B357B]" />;
      case "network":
        return <Network className="w-5 h-5 text-[#1A73C3]" />;
      case "globe":
        return <Globe className="w-5 h-5 text-[#0B357B]" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-[#DE4A1B]" />;
      default:
        return <Globe className="w-5 h-5 text-[#0B357B]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {problemSection.description}
          </p>
        </div>

        {/* 4-Card Monolithic Architectural Ledger */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/40">
          {problemSection.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-100/40 border-b border-dashed border-slate-300/80 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-dashed md:[&:nth-child(odd)]:border-slate-300/80 lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-dashed lg:[&:not(:last-child)]:border-slate-300/80 lg:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 [&:last-child]:border-b-0"
            >
              <div>
                {/* Real Animated Lucide Icon */}
                <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-2xs mb-6">
                  <AnimatedIcon animation="hover-scale">
                    {getIcon(item.icon)}
                  </AnimatedIcon>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

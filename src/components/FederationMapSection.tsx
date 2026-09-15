"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  ClockIcon,
  CloudSyncIcon,
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@/components/icons";
import { CircleDashed } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface FederationMapSectionProps {
  locale: Locale;
  dict: {
    mapSection: {
      title: string;
      description: string;
      statusOperational: string;
      statusDevelopment: string;
      statusCatchall: string;
      statusNotConnected: string;
      cta: string;
    };
  };
}

export function FederationMapSection({
  locale,
  dict,
}: FederationMapSectionProps) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);

  const statusItems = [
    {
      label: dict.mapSection.statusOperational,
      icon: CircleCheckIcon,
      iconColor: "text-[#0B357B]",
      badgeBg: "bg-blue-50/90 border border-blue-200/80",
    },
    {
      label: dict.mapSection.statusDevelopment,
      icon: ClockIcon,
      iconColor: "text-[#1A73C3]",
      badgeBg: "bg-sky-50/90 border border-sky-200/80",
    },
    {
      label: dict.mapSection.statusCatchall,
      icon: CloudSyncIcon,
      iconColor: "text-[#DE4A1B]",
      badgeBg: "bg-orange-50/90 border border-orange-200/80",
    },
    {
      label: dict.mapSection.statusNotConnected,
      icon: CircleDashed,
      iconColor: "text-slate-400",
      badgeBg: "bg-slate-100 border border-slate-200/80",
    },
  ];

  const ctaText = dict.mapSection.cta.replace(/→\s*$/, "").trim();

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Narrative & CTA */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4 text-left">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#0A162B] tracking-tight leading-[1.15]">
              {dict.mapSection.title}
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {dict.mapSection.description}
            </p>

            <div className="pt-2">
              <Link
                href={`/${locale}/federation-map`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-[#0B357B] text-white text-sm font-bold font-outfit hover:bg-[#072454] shadow-sm hover:shadow-md transition-all active:scale-[0.98] select-none"
              >
                <span>{ctaText}</span>
                <ArrowRightIcon ref={arrowRef} size={16} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Status Categorization Panel */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-300 shadow-md shadow-slate-900/[0.04] p-6 sm:p-8 space-y-3.5">
              <div className="text-xs font-bold font-outfit uppercase tracking-wider text-slate-400 pb-1 border-b border-slate-100">
                Infrastructure Status Categories
              </div>

              <div className="divide-y divide-slate-100">
                {statusItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 py-3.5 first:pt-2 last:pb-0"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.badgeBg}`}
                      >
                        <Icon size={16} className={item.iconColor} />
                      </div>
                      <span className="font-heading font-bold text-sm sm:text-base text-[#0A162B] leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

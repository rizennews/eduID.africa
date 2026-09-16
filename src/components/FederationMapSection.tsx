"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/icons";
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
  const leftArrowRef = React.useRef<ArrowRightIconHandle>(null);

  const statusItems = [
    {
      label: dict.mapSection.statusOperational,
      count:
        locale === "fr"
          ? "12 pays"
          : locale === "pt"
          ? "12 países"
          : "12 countries",
      beacon: (
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
        </span>
      ),
      queryParam: "national_federation",
    },
    {
      label: dict.mapSection.statusDevelopment,
      count:
        locale === "fr"
          ? "8 pays"
          : locale === "pt"
          ? "8 países"
          : "8 countries",
      beacon: (
        <span className="inline-flex h-2 w-2 rounded-full bg-[#1A73C3] ring-2 ring-sky-100" />
      ),
      queryParam: "in_development",
    },
    {
      label: dict.mapSection.statusCatchall,
      count:
        locale === "fr"
          ? "27 pays"
          : locale === "pt"
          ? "27 países"
          : "27 countries",
      beacon: (
        <span className="inline-flex h-2 w-2 rounded-full bg-[#DE4A1B] ring-2 ring-orange-100" />
      ),
      queryParam: "catchall_bonafid",
    },
    {
      label: dict.mapSection.statusNotConnected,
      count:
        locale === "fr"
          ? "7 pays"
          : locale === "pt"
          ? "7 países"
          : "7 countries",
      beacon: (
        <span className="inline-flex h-2 w-2 rounded-full border border-slate-400 bg-transparent" />
      ),
      queryParam: "not_connected",
    },
  ];

  const ctaText = dict.mapSection.cta.replace(/→\s*$/, "").trim();

  const eyebrow =
    locale === "fr"
      ? "Carte continentale"
      : locale === "pt"
      ? "Mapa continental"
      : "Continental Map";

  const taxonomyLabel =
    locale === "fr"
      ? "Catégories de statut"
      : locale === "pt"
      ? "Categorias de estado"
      : "Status Taxonomy";

  const nationsLabel =
    locale === "fr"
      ? "54 Nations africaines"
      : locale === "pt"
      ? "54 Nações africanas"
      : "54 African Nations";

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title, Narrative & Primary Action */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5 text-left">
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-2xs">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#0B357B] tracking-tight leading-[1.16] mt-4 max-w-xl">
                {dict.mapSection.title}
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {dict.mapSection.description}
            </p>

            <div className="pt-2">
              <Link
                href={`/${locale}/federation-map`}
                onMouseEnter={() => leftArrowRef.current?.startAnimation()}
                onMouseLeave={() => leftArrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#0B357B] text-white text-sm font-bold font-outfit hover:bg-[#072454] shadow-sm hover:shadow-md transition-all active:scale-[0.98] select-none"
              >
                <span>{ctaText}</span>
                <ArrowRightIcon ref={leftArrowRef} size={16} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Status Ledger (Frankli Style) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="border border-dashed border-slate-300 bg-white/70 backdrop-blur-xs p-7 sm:p-9 transition-colors">
              {/* Card Header: Taxonomy Eyebrow + Continental Count */}
              <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-300">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500">
                  {taxonomyLabel}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {nationsLabel}
                </span>
              </div>

              {/* Status Rows with Dashed Dividers and Clean Beacons */}
              <div className="divide-y divide-dashed divide-slate-200/90">
                {statusItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/${locale}/federation-map?category=${item.queryParam}`}
                    className="group/item flex items-center justify-between py-4 transition-colors hover:bg-slate-100/50 -mx-2 px-2 rounded-lg"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="shrink-0">{item.beacon}</div>
                      <span className="font-serif text-base sm:text-[17px] text-[#0B357B] font-normal leading-snug group-hover/item:text-[#1A73C3] transition-colors truncate">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 pl-3 shrink-0">
                      <span className="font-mono text-xs text-slate-400 font-medium">
                        {item.count}
                      </span>
                      <span className="text-slate-300 group-hover/item:text-slate-700 group-hover/item:translate-x-0.5 transition-all text-xs">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

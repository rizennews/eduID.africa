"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface PathwayCardData {
  tag?: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  number?: string;
}

interface PathwaysCardsProps {
  locale: Locale;
  dict: {
    pathways: {
      eyebrow?: string;
      heading?: string;
      subheading?: string;
      card1: PathwayCardData;
      card2: PathwayCardData;
      card3: PathwayCardData;
    };
  };
}

interface PathwayColumnProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  locale: Locale;
  buttonBgClass: string;
}

function PathwayColumn({ title, description, cta, href, locale, buttonBgClass }: PathwayColumnProps) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const cleanCta = cta.replace(/→\s*$/, "").trim();

  return (
    <Link
      href={`/${locale}${href}`}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
      className="group relative flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-colors duration-200 hover:bg-slate-100/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73C3] select-none"
    >
      {/* Upper Content: Serif Headline & Relaxed Body */}
      <div>
        <h2 className="font-serif text-2xl sm:text-[26px] lg:text-[28px] font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
          {title}
        </h2>
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-3.5 sm:mt-4 font-normal">
          {description}
        </p>
      </div>

      {/* Compact Negative Space Spacer */}
      <div className="min-h-[28px] sm:min-h-[36px] flex-1" />

      {/* Footer Area: Dashed Divider + Styled Action Button */}
      <div className="pt-4 sm:pt-5 border-t border-dashed border-slate-300/90 mt-auto">
        <div className="flex items-center justify-start">
          <span
            className={cn(
              "inline-flex items-center gap-2 h-10 px-5 rounded-full text-xs sm:text-[13px] font-medium font-sans text-white shadow-2xs transition-all duration-200 group-hover:shadow-xs",
              buttonBgClass
            )}
          >
            <span>{cleanCta}</span>
            <div className="shrink-0 group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRightIcon
                ref={arrowRef}
                size={14}
                className="text-white p-0 hover:bg-transparent"
              />
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PathwaysCards({ locale, dict }: PathwaysCardsProps) {
  const heading =
    dict.pathways.heading ||
    (locale === "fr"
      ? "Trois voies d'accès à la fédération continentale."
      : locale === "pt"
      ? "Três vias de acesso à federação continental."
      : "Three pathways into the continental federation.");

  const columns = [
    {
      title: dict.pathways.card1.title,
      description: dict.pathways.card1.description,
      cta: dict.pathways.card1.cta,
      href: dict.pathways.card1.href,
      buttonBgClass: "bg-[#0B357B] hover:bg-[#072454]", // eduID Navy
    },
    {
      title: dict.pathways.card2.title,
      description: dict.pathways.card2.description,
      cta: dict.pathways.card2.cta,
      href: dict.pathways.card2.href,
      buttonBgClass: "bg-[#1A73C3] hover:bg-[#155fa3]", // eduID Blue
    },
    {
      title: dict.pathways.card3.title,
      description: dict.pathways.card3.description,
      cta: dict.pathways.card3.cta,
      href: dict.pathways.card3.href,
      buttonBgClass: "bg-[#DE4A1B] hover:bg-[#c23b12]", // eduID Orange
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0B357B] tracking-tight leading-[1.16] max-w-3xl">
            {heading}
          </h2>
        </div>

        {/* The Monolithic Editorial Grid */}
        <div className="border-t border-b border-dashed border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 border-x border-slate-300/80 bg-white/40">
            {columns.map((col, idx) => (
              <PathwayColumn
                key={idx}
                title={col.title}
                description={col.description}
                cta={col.cta}
                href={col.href}
                locale={locale}
                buttonBgClass={col.buttonBgClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

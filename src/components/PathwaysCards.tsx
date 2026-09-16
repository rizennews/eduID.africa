"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

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
}

function PathwayColumn({ title, description, cta, href, locale }: PathwayColumnProps) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const cleanCta = cta.replace(/→\s*$/, "").trim();

  return (
    <Link
      href={`/${locale}${href}`}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
      className="group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:bg-slate-100/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73C3] select-none"
    >
      {/* Upper Content: Serif Headline & Relaxed Body */}
      <div>
        <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-[#0A162B] tracking-tight leading-snug group-hover:text-[#0B357B] transition-colors">
          {title}
        </h2>
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 sm:mt-5 font-normal">
          {description}
        </p>
      </div>

      {/* Spacious Negative Space Spacer */}
      <div className="min-h-[90px] sm:min-h-[130px] lg:min-h-[160px] flex-1" />

      {/* Footer Area: Dashed Divider + Left Label / Right Arrow */}
      <div className="pt-5 sm:pt-6 border-t border-dashed border-slate-300/90 mt-auto">
        <div className="flex items-center justify-between gap-4 text-xs sm:text-[13px] font-medium tracking-wide text-slate-700 group-hover:text-[#0A162B] transition-colors">
          <span className="font-sans font-medium">{cleanCta}</span>
          <div className="shrink-0 group-hover:translate-x-1.5 transition-transform duration-200">
            <ArrowRightIcon
              ref={arrowRef}
              size={16}
              className="text-slate-600 group-hover:text-[#0A162B] p-0 hover:bg-transparent"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PathwaysCards({ locale, dict }: PathwaysCardsProps) {
  const eyebrow =
    dict.pathways.eyebrow ||
    (locale === "fr" ? "Voies d'accès" : locale === "pt" ? "Vias de acesso" : "Pathways");

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
    },
    {
      title: dict.pathways.card2.title,
      description: dict.pathways.card2.description,
      cta: dict.pathways.card2.cta,
      href: dict.pathways.card2.href,
    },
    {
      title: dict.pathways.card3.title,
      description: dict.pathways.card3.description,
      cta: dict.pathways.card3.cta,
      href: dict.pathways.card3.href,
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching the reference: Pill Eyebrow + Elegant Serif Heading */}
        <div className="mb-10 sm:mb-14">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-2xs">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A162B] tracking-tight leading-[1.16] mt-4 max-w-3xl">
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

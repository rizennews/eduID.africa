"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface FederationContactCtaSectionProps {
  locale: Locale;
  dict: {
    federationMapPage: {
      cta: {
        headline: string;
        description: string;
        button: string;
      };
    };
  };
}

export function FederationContactCtaSection({
  locale,
  dict,
}: FederationContactCtaSectionProps) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const cta = dict.federationMapPage.cta;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frankli Minimal Architectural Card */}
        <div className="border border-dashed border-slate-300 bg-white p-6 sm:p-10 lg:p-12 relative">
          <div className="relative z-10 max-w-2xl space-y-4 text-left">
            {/* Editorial Serif Headline */}
            <h2 className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-[#0B357B] tracking-tight leading-tight">
              {cta.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {cta.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={`/${locale}/get-started`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-lg bg-[#0B357B] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1A73C3] transition-all select-none w-full sm:w-auto text-center cursor-pointer"
              >
                <span>{cta.button}</span>
                <ArrowRightIcon ref={arrowRef} size={15} className="text-white" />
              </Link>

              <Link
                href={`/${locale}/how-it-works`}
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A73C3] hover:text-[#0B357B] transition-colors text-center sm:text-left py-2 sm:py-0"
              >
                Learn how it works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

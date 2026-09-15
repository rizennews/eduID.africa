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
        {/* Executive White Card Container */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Background Radial Accent */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl space-y-4 text-left">
            {/* Kicker Tag */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
              Continental Onboarding
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
              {cta.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {cta.description}
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`mailto:info@eduid.africa?subject=${encodeURIComponent(
                  "Connecting our Country / NREN to eduID.africa"
                )}`}
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
                className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#0B357B] text-white text-sm font-bold font-outfit hover:bg-[#072454] shadow-sm hover:shadow-md transition-all active:scale-[0.98] select-none"
              >
                <span>{cta.button}</span>
                <ArrowRightIcon ref={arrowRef} size={16} className="text-white" />
              </Link>

              <Link
                href={`/${locale}/how-it-works`}
                className="text-sm font-semibold text-[#1A73C3] hover:text-[#0B357B] hover:underline underline-offset-4 transition-colors"
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

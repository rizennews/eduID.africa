"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

export interface AboutHeroDict {
  nav?: {
    eduid?: {
      about?: {
        title?: string;
      };
    };
  };
  howItWorks?: {
    heroSubtitle?: string;
  };
  about?: {
    description?: string;
  };
  [key: string]: unknown;
}

export interface AboutHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  locale?: Locale;
  dict?: AboutHeroDict;
  visualPlaceholder?: React.ReactNode;
  showSubtitle?: boolean;
}

export function AboutHero({
  title,
  subtitle,
  dict,
  visualPlaceholder,
  showSubtitle = false,
}: AboutHeroProps) {
  const displayTitle = title ?? dict?.nav?.eduid?.about?.title ?? (
    <>
      About <span className="text-white/80">eduID.africa</span>
    </>
  );

  const displaySubtitle = subtitle ?? dict?.about?.description;

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-[#1A73C3] text-white border-b border-[#145FA3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {visualPlaceholder ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Title and Narrative (Maintained for About page) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.16]">
                {displayTitle}
              </h1>

              {displaySubtitle && (
                <p className="text-base sm:text-lg text-blue-50/95 font-sans font-normal leading-relaxed w-full max-w-none">
                  {displaySubtitle}
                </p>
              )}
            </div>

            {/* Right Column: Visual Placeholder Container */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
              {visualPlaceholder}
            </div>
          </div>
        ) : (
          <div className="max-w-none mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
              {displayTitle}
            </h1>

            {showSubtitle && displaySubtitle && (
              <p className="mt-4 text-base sm:text-lg text-blue-50/95 font-sans font-normal leading-relaxed max-w-3xl mx-auto">
                {displaySubtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export { AboutHero as PageHero };

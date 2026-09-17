"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface UserJourneySectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      userJourney: {
        kicker: string;
        headline: string;
        description: string;
        step1: { num: string; title: string; description: string };
        step2: { num: string; title: string; description: string };
        step3: { num: string; title: string; description: string };
        step4: { num: string; title: string; description: string };
        step5: { num: string; title: string; description: string };
        step6: { num: string; title: string; description: string };
      };
    };
  };
}

interface JourneyStepRowProps {
  num: string;
  title: string;
  description: string;
}

function JourneyStepRow({ num, title, description }: JourneyStepRowProps) {
  return (
    <div className="group py-6 sm:py-8 border-b border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline transition-colors hover:bg-slate-50/50 px-2 sm:px-4">
      {/* Column 1: Monospaced Step Number */}
      <div className="md:col-span-1">
        <span className="font-mono text-xs sm:text-sm font-semibold text-slate-400">
          {num}
        </span>
      </div>

      {/* Column 2: Editorial Serif Step Title */}
      <div className="md:col-span-5">
        <h3 className="font-serif font-normal text-lg sm:text-xl text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
          {title}
        </h3>
      </div>

      {/* Column 3: Descriptive Narrative */}
      <div className="md:col-span-6">
        <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export function UserJourneySection({ locale: _locale, dict }: UserJourneySectionProps) {
  const journey = dict.howItWorks.userJourney;

  const steps = [
    journey.step1,
    journey.step2,
    journey.step3,
    journey.step4,
    journey.step5,
    journey.step6,
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-6 sm:pb-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0B357B] tracking-tight leading-[1.18]">
            {journey.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal whitespace-nowrap">
            {journey.description}
          </p>
        </div>

        {/* Minimalist Ledger List with Dashed Dividers */}
        <div className="border-t border-dashed border-slate-300">
          {steps.map((step, idx) => (
            <JourneyStepRow
              key={idx}
              num={step.num}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

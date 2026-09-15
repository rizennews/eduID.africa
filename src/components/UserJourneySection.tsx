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

export function UserJourneySection({ locale: _locale, dict }: UserJourneySectionProps) {
  const journey = dict.howItWorks.userJourney;

  const steps = [
    {
      num: journey.step1.num,
      title: journey.step1.title,
      description: journey.step1.description,
    },
    {
      num: journey.step2.num,
      title: journey.step2.title,
      description: journey.step2.description,
    },
    {
      num: journey.step3.num,
      title: journey.step3.title,
      description: journey.step3.description,
    },
    {
      num: journey.step4.num,
      title: journey.step4.title,
      description: journey.step4.description,
    },
    {
      num: journey.step5.num,
      title: journey.step5.title,
      description: journey.step5.description,
    },
    {
      num: journey.step6.num,
      title: journey.step6.title,
      description: journey.step6.description,
    },
  ];

  return (
    <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80 mb-3">
            {journey.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {journey.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {journey.description}
          </p>
        </div>

        {/* Minimalist 3-Column List with Dashed Dividers (Matching Reference) */}
        <div className="border-t border-dashed border-slate-300">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="py-7 sm:py-8 border-b border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline transition-colors hover:bg-slate-50/50 px-2 sm:px-3 rounded-lg"
            >
              {/* Column 1: Monospaced Step Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-sm sm:text-base font-medium text-slate-400">
                  {step.num}
                </span>
              </div>

              {/* Column 2: Bold Step Title */}
              <div className="md:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 tracking-tight leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Column 3: Descriptive Narrative */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

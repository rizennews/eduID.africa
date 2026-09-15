"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";
import { Check } from "lucide-react";

interface UserJourneySectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      userJourney: {
        kicker: string;
        headline: string;
        description: string;
        step1: { num: string; title: string };
        step2: { num: string; title: string };
        step3: { num: string; title: string };
        step4: { num: string; title: string };
        step5: { num: string; title: string };
        step6: { num: string; title: string };
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
      isFinal: false,
    },
    {
      num: journey.step2.num,
      title: journey.step2.title,
      isFinal: false,
    },
    {
      num: journey.step3.num,
      title: journey.step3.title,
      isFinal: false,
    },
    {
      num: journey.step4.num,
      title: journey.step4.title,
      isFinal: false,
    },
    {
      num: journey.step5.num,
      title: journey.step5.title,
      isFinal: false,
    },
    {
      num: journey.step6.num,
      title: journey.step6.title,
      isFinal: true,
    },
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
            {journey.kicker}
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {journey.headline}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {journey.description}
          </p>
        </div>

        {/* 6-Step Flow Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between h-full ${
                step.isFinal
                  ? "bg-emerald-50/50 border-2 border-emerald-300/80 shadow-sm hover:border-emerald-400"
                  : "bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#1A73C3]/40"
              }`}
            >
              <div>
                {/* Step Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                      step.isFinal
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 group-hover:bg-[#1A73C3] group-hover:text-white"
                    }`}
                  >
                    {step.isFinal ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
                  </div>

                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider font-mono ${
                      step.isFinal ? "text-emerald-700" : "text-slate-400"
                    }`}
                  >
                    {step.isFinal ? "Outcome" : `0${idx + 1}`}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className={`text-sm sm:text-base font-bold font-heading tracking-tight leading-snug ${
                    step.isFinal ? "text-emerald-950" : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>
              </div>

              {/* Progress Line on Desktop */}
              {!step.isFinal && (
                <div
                  className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-px bg-slate-200 z-10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

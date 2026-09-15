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
      tag: "01",
      accent: "#DE4A1B",
      cardBg: "bg-orange-50/60 hover:bg-orange-50",
      borderColor: "border-orange-200/90 hover:border-[#DE4A1B]",
      topBar: "bg-[#DE4A1B]",
      numBadge: "bg-[#DE4A1B] text-white shadow-sm",
      tagBadge: "bg-orange-100/90 text-[#DE4A1B] border border-orange-200/80",
      titleColor: "text-slate-900 group-hover:text-[#DE4A1B]",
      lineColor: "bg-orange-300",
    },
    {
      num: journey.step2.num,
      title: journey.step2.title,
      isFinal: false,
      tag: "02",
      accent: "#0B357B",
      cardBg: "bg-blue-50/60 hover:bg-blue-50",
      borderColor: "border-blue-200/90 hover:border-[#0B357B]",
      topBar: "bg-[#0B357B]",
      numBadge: "bg-[#0B357B] text-white shadow-sm",
      tagBadge: "bg-blue-100/90 text-[#0B357B] border border-blue-200/80",
      titleColor: "text-slate-900 group-hover:text-[#0B357B]",
      lineColor: "bg-blue-300",
    },
    {
      num: journey.step3.num,
      title: journey.step3.title,
      isFinal: false,
      tag: "03",
      accent: "#4F46E5",
      cardBg: "bg-indigo-50/60 hover:bg-indigo-50",
      borderColor: "border-indigo-200/90 hover:border-indigo-500",
      topBar: "bg-indigo-600",
      numBadge: "bg-indigo-600 text-white shadow-sm",
      tagBadge: "bg-indigo-100/90 text-indigo-700 border border-indigo-200/80",
      titleColor: "text-slate-900 group-hover:text-indigo-700",
      lineColor: "bg-indigo-300",
    },
    {
      num: journey.step4.num,
      title: journey.step4.title,
      isFinal: false,
      tag: "04",
      accent: "#1A73C3",
      cardBg: "bg-sky-50/60 hover:bg-sky-50",
      borderColor: "border-sky-200/90 hover:border-[#1A73C3]",
      topBar: "bg-[#1A73C3]",
      numBadge: "bg-[#1A73C3] text-white shadow-sm",
      tagBadge: "bg-sky-100/90 text-[#1A73C3] border border-sky-200/80",
      titleColor: "text-slate-900 group-hover:text-[#1A73C3]",
      lineColor: "bg-sky-300",
    },
    {
      num: journey.step5.num,
      title: journey.step5.title,
      isFinal: false,
      tag: "05",
      accent: "#0D9488",
      cardBg: "bg-teal-50/60 hover:bg-teal-50",
      borderColor: "border-teal-200/90 hover:border-teal-500",
      topBar: "bg-teal-600",
      numBadge: "bg-teal-600 text-white shadow-sm",
      tagBadge: "bg-teal-100/90 text-teal-700 border border-teal-200/80",
      titleColor: "text-slate-900 group-hover:text-teal-700",
      lineColor: "bg-teal-300",
    },
    {
      num: "✓",
      title: journey.step6.title,
      isFinal: true,
      tag: "Outcome",
      accent: "#059669",
      cardBg: "bg-emerald-50/80 hover:bg-emerald-50",
      borderColor: "border-emerald-300 hover:border-emerald-500",
      topBar: "bg-emerald-600",
      numBadge: "bg-emerald-600 text-white shadow-sm font-black text-base",
      tagBadge: "bg-emerald-100 text-emerald-800 border border-emerald-300",
      titleColor: "text-emerald-950",
      lineColor: "bg-emerald-300",
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

        {/* 6-Step Flow Progression: Pure Color-Driven Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full shadow-2xs hover:shadow-md ${step.cardBg} ${step.borderColor}`}
            >
              {/* Vibrant Top Color Accent Bar */}
              <div className={`h-1.5 w-full ${step.topBar}`} />

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Step Top Header: Solid Color Number Badge & Color Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight transition-transform duration-200 group-hover:scale-105 ${step.numBadge}`}
                    >
                      {step.num}
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider font-mono px-2 py-0.5 rounded-md ${step.tagBadge}`}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`text-sm sm:text-base font-bold font-heading tracking-tight leading-snug transition-colors duration-200 ${step.titleColor}`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${step.topBar}`} aria-hidden="true" />
                  <span className="text-[11px] font-medium text-slate-500 font-sans">
                    {step.isFinal ? "Connected" : `Step 0${idx + 1}`}
                  </span>
                </div>
              </div>

              {/* Connecting Step Indicator Line on Desktop */}
              {!step.isFinal && (
                <div
                  className={`hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-0.5 ${step.lineColor} z-20 rounded-full`}
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

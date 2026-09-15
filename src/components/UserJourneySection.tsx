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
      num: "01",
      title: journey.step1.title,
      color: "#DE4A1B",
      bgHover: "hover:border-[#DE4A1B]/40",
      topLine: "bg-[#DE4A1B]",
      dotColor: "bg-[#DE4A1B]",
      textColor: "text-[#DE4A1B]",
      isFinal: false,
    },
    {
      num: "02",
      title: journey.step2.title,
      color: "#0B357B",
      bgHover: "hover:border-[#0B357B]/40",
      topLine: "bg-[#0B357B]",
      dotColor: "bg-[#0B357B]",
      textColor: "text-[#0B357B]",
      isFinal: false,
    },
    {
      num: "03",
      title: journey.step3.title,
      color: "#4F46E5",
      bgHover: "hover:border-indigo-400",
      topLine: "bg-[#4F46E5]",
      dotColor: "bg-[#4F46E5]",
      textColor: "text-[#4F46E5]",
      isFinal: false,
    },
    {
      num: "04",
      title: journey.step4.title,
      color: "#1A73C3",
      bgHover: "hover:border-[#1A73C3]/40",
      topLine: "bg-[#1A73C3]",
      dotColor: "bg-[#1A73C3]",
      textColor: "text-[#1A73C3]",
      isFinal: false,
    },
    {
      num: "05",
      title: journey.step5.title,
      color: "#0D9488",
      bgHover: "hover:border-teal-400",
      topLine: "bg-[#0D9488]",
      dotColor: "bg-[#0D9488]",
      textColor: "text-[#0D9488]",
      isFinal: false,
    },
    {
      num: "✓",
      title: journey.step6.title,
      color: "#059669",
      bgHover: "hover:border-emerald-400",
      topLine: "bg-[#059669]",
      dotColor: "bg-[#059669]",
      textColor: "text-[#059669]",
      isFinal: true,
    },
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
            {journey.kicker}
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {journey.headline}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {journey.description}
          </p>
        </div>

        {/* Minimalist Colored Timeline Rail (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-4 mb-4 px-1" aria-hidden="true">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`h-1 flex-1 rounded-full ${step.topLine}`} />
              <div className={`w-2 h-2 rounded-full ${step.dotColor}`} />
            </div>
          ))}
        </div>

        {/* 6 Minimalist Color-Accented Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-sm ${step.bgHover}`}
            >
              <div>
                {/* Top Minimal Number & Dot */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span
                    className={`font-mono text-xs sm:text-sm font-black tracking-wider ${step.textColor}`}
                  >
                    {step.num}
                  </span>

                  <span className={`w-2 h-2 rounded-full ${step.dotColor}`} aria-hidden="true" />
                </div>

                {/* Minimal Clean Step Title */}
                <h3 className="text-sm sm:text-base font-semibold font-heading text-slate-900 tracking-tight leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Minimal Bottom Step Label */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium font-mono text-slate-400 uppercase tracking-wider">
                  {step.isFinal ? "Outcome" : `Step 0${idx + 1}`}
                </span>

                <span
                  className={`text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5 ${step.textColor}`}
                  aria-hidden="true"
                >
                  {step.isFinal ? "✓" : "→"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      watermark: "01",
      phase: "Phase 01",
      title: journey.step1.title,
      isFinal: false,
      tag: "IAM DEPLOYMENT",
      gradient: "from-[#DE4A1B] via-[#C53B11] to-[#992B08]",
      shadow: "hover:shadow-[#DE4A1B]/40",
      railColor: "bg-[#DE4A1B]",
    },
    {
      num: journey.step2.num,
      watermark: "02",
      phase: "Phase 02",
      title: journey.step2.title,
      isFinal: false,
      tag: "FEDERATION",
      gradient: "from-[#0B357B] via-[#08285E] to-[#051A40]",
      shadow: "hover:shadow-[#0B357B]/50",
      railColor: "bg-[#0B357B]",
    },
    {
      num: journey.step3.num,
      watermark: "03",
      phase: "Phase 03",
      title: journey.step3.title,
      isFinal: false,
      tag: "GLOBAL MESH",
      gradient: "from-[#4F46E5] via-[#4338CA] to-[#312E81]",
      shadow: "hover:shadow-[#4F46E5]/40",
      railColor: "bg-[#4F46E5]",
    },
    {
      num: journey.step4.num,
      watermark: "04",
      phase: "Phase 04",
      title: journey.step4.title,
      isFinal: false,
      tag: "CLIENT APP",
      gradient: "from-[#1A73C3] via-[#125CA0] to-[#0C4376]",
      shadow: "hover:shadow-[#1A73C3]/40",
      railColor: "bg-[#1A73C3]",
    },
    {
      num: journey.step5.num,
      watermark: "05",
      phase: "Phase 05",
      title: journey.step5.title,
      isFinal: false,
      tag: "SECURITY CERT",
      gradient: "from-[#0D9488] via-[#0F766E] to-[#115E59]",
      shadow: "hover:shadow-[#0D9488]/40",
      railColor: "bg-[#0D9488]",
    },
    {
      num: "✓",
      watermark: "✓",
      phase: "Outcome",
      title: journey.step6.title,
      isFinal: true,
      tag: "SEAMLESS ACCESS",
      gradient: "from-[#059669] via-[#047857] to-[#064E3B]",
      shadow: "hover:shadow-[#059669]/50",
      railColor: "bg-[#059669]",
    },
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-14 sm:pb-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
            {journey.kicker}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {journey.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {journey.description}
          </p>
        </div>

        {/* Chromatic Flow Progression Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-4 px-1" aria-hidden="true">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`h-1.5 flex-1 rounded-full ${step.railColor} opacity-80`} />
              <div className={`w-2 h-2 rounded-full ${step.railColor}`} />
            </div>
          ))}
        </div>

        {/* Solid Color Monoliths: Bold, High-Impact Color Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3.5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[310px] sm:min-h-[330px] lg:min-h-[350px] overflow-hidden bg-gradient-to-b ${step.gradient} text-white shadow-lg ${step.shadow} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 select-none`}
            >
              {/* Giant Background Watermark Number */}
              <span
                className="absolute -right-2 -top-3 text-8xl lg:text-9xl font-black font-mono tracking-tighter text-white/[0.12] group-hover:text-white/[0.22] group-hover:scale-105 transition-all duration-300 pointer-events-none select-none leading-none"
                aria-hidden="true"
              >
                {step.watermark}
              </span>

              {/* Ambient Inner Lighting Glow */}
              <div
                className="absolute inset-0 bg-radial from-white/[0.15] via-transparent to-black/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Row: Pill Tag & Step Number Indicator */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/95 uppercase shadow-xs">
                    {step.tag}
                  </span>

                  <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-xs font-black font-mono text-white shadow-xs group-hover:bg-white group-hover:text-slate-950 transition-colors duration-200">
                    {step.num}
                  </div>
                </div>

                {/* Main Step Headline */}
                <h3 className="text-base sm:text-lg lg:text-base xl:text-lg font-bold font-heading text-white tracking-tight leading-snug drop-shadow-xs">
                  {step.title}
                </h3>
              </div>

              {/* Bottom Metadata & Directional Flow */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-medium text-white/90">
                <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-white/80">
                  {step.phase}
                </span>

                <span
                  className="font-bold text-sm tracking-tight text-white group-hover:translate-x-1 transition-transform duration-200"
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

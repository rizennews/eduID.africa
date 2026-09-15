"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface AboutTimelineSectionProps {
  locale: Locale;
  dict: {
    about: {
      timeline: {
        kicker: string;
        headline: string;
        step1: {
          year: string;
          title: string;
          description: string;
        };
        step2: {
          year: string;
          title: string;
          description: string;
        };
        step3: {
          year: string;
          title: string;
          description: string;
        };
        step4: {
          year: string;
          title: string;
          description: string;
          badge?: string;
        };
        step5: {
          year: string;
          indicator?: string;
          title: string;
          description: string;
          badge?: string;
        };
      };
    };
  };
}

export function AboutTimelineSection({ locale: _locale, dict }: AboutTimelineSectionProps) {
  const data = dict.about.timeline;

  const milestones = [
    {
      year: data.step1.year,
      title: data.step1.title,
      description: data.step1.description,
      tag: "Genesis",
      accent: "#0B357B",
      isCurrent: false,
      isFuture: false,
    },
    {
      year: data.step2.year,
      title: data.step2.title,
      description: data.step2.description,
      tag: "Campus IAM",
      accent: "#1A73C3",
      isCurrent: false,
      isFuture: false,
    },
    {
      year: data.step3.year,
      title: data.step3.title,
      description: data.step3.description,
      tag: "Adoption",
      accent: "#0B357B",
      isCurrent: false,
      isFuture: false,
    },
    {
      year: data.step4.year,
      title: data.step4.title,
      description: data.step4.description,
      tag: data.step4.badge || "Live Production",
      accent: "#1A73C3",
      isCurrent: true,
      isFuture: false,
    },
    {
      year: data.step5.year,
      indicator: data.step5.indicator || "→",
      title: data.step5.title,
      description: data.step5.description,
      tag: data.step5.badge || "Scale Targets",
      accent: "#DE4A1B",
      isCurrent: false,
      isFuture: true,
    },
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-outfit text-[#1A73C3] bg-blue-50 border border-blue-200/80">
            {data.kicker}
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {data.headline}
          </h2>
        </div>

        {/* Desktop Chronological Track (lg+) */}
        <div className="hidden lg:block relative">
          {/* Horizontal Connecting Timeline Spine */}
          <div className="absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-slate-200" aria-hidden="true">
            <div className="h-full bg-gradient-to-r from-[#0B357B] via-[#1A73C3] to-[#DE4A1B] w-full" />
          </div>

          <div className="grid grid-cols-5 gap-5 relative z-10">
            {milestones.map((m) => (
              <div key={m.year} className="flex flex-col items-center">
                {/* Milestone Node */}
                <div className="mb-5 flex flex-col items-center">
                  <div
                    className={`w-13 h-13 rounded-full flex items-center justify-center font-bold font-heading text-xs shadow-md transition-transform hover:scale-105 ${
                      m.isCurrent
                        ? "bg-[#1A73C3] text-white ring-4 ring-blue-100"
                        : m.isFuture
                        ? "bg-white text-[#DE4A1B] border-2 border-[#DE4A1B] ring-4 ring-orange-50"
                        : "bg-white text-[#0B357B] border-2 border-slate-300 hover:border-[#0B357B]"
                    }`}
                  >
                    {m.isFuture ? (
                      <span className="flex items-center gap-0.5 text-sm font-extrabold">
                        {m.indicator}
                      </span>
                    ) : (
                      <span>{m.year}</span>
                    )}
                  </div>

                  <span
                    className={`mt-2 text-xs font-extrabold font-mono tracking-tight ${
                      m.isCurrent
                        ? "text-[#1A73C3]"
                        : m.isFuture
                        ? "text-[#DE4A1B]"
                        : "text-slate-500"
                    }`}
                  >
                    {m.year}
                  </span>
                </div>

                {/* Milestone Card */}
                <div
                  className={`w-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 h-full ${
                    m.isCurrent
                      ? "bg-white border-2 border-[#1A73C3] shadow-md shadow-blue-500/5 ring-1 ring-[#1A73C3]/20"
                      : m.isFuture
                      ? "bg-amber-50/30 border-2 border-dashed border-orange-200/90 shadow-2xs hover:bg-white hover:border-orange-300"
                      : "bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Status / Phase Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-outfit uppercase tracking-wider ${
                          m.isCurrent
                            ? "bg-blue-100 text-[#0B357B]"
                            : m.isFuture
                            ? "bg-orange-100 text-[#DE4A1B]"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {m.tag}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-base font-bold font-heading text-slate-900 tracking-tight leading-snug mb-2.5">
                      {m.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed font-normal">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Roadmap (< lg) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              {/* Node Marker on Spine */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-xs ${
                  m.isCurrent
                    ? "bg-[#1A73C3] text-white ring-4 ring-blue-100"
                    : m.isFuture
                    ? "bg-white text-[#DE4A1B] border-2 border-[#DE4A1B] ring-4 ring-orange-50"
                    : "bg-white text-[#0B357B] border-2 border-slate-300"
                }`}
              >
                {m.isFuture ? m.indicator : "•"}
              </div>

              {/* Milestone Card */}
              <div
                className={`rounded-2xl p-5 sm:p-6 transition-all ${
                  m.isCurrent
                    ? "bg-white border-2 border-[#1A73C3] shadow-md shadow-blue-500/5 ring-1 ring-[#1A73C3]/20"
                    : m.isFuture
                    ? "bg-amber-50/30 border-2 border-dashed border-orange-200/90"
                    : "bg-white border border-slate-200/90 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold font-mono text-slate-900">
                      {m.year}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold font-outfit uppercase tracking-wider ${
                        m.isCurrent
                          ? "bg-blue-100 text-[#0B357B]"
                          : m.isFuture
                          ? "bg-orange-100 text-[#DE4A1B]"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold font-heading text-slate-900 tracking-tight leading-snug mb-2">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

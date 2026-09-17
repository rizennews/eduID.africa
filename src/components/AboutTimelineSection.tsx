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
    <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-2xs">
              {data.kicker}
            </span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {data.headline}
          </h2>
        </div>

        {/* Desktop Chronological Track (lg+) */}
        <div className="hidden lg:block relative">
          {/* Horizontal Connecting Dashed Spine */}
          <div
            className="absolute top-[20px] left-[5%] right-[5%] border-t border-dashed border-slate-300"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex flex-col items-center">
                {/* Milestone Node */}
                <div className="mb-5 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs border transition-all bg-white ${m.isCurrent
                        ? "border-[#1A73C3] text-[#1A73C3] ring-4 ring-blue-50"
                        : m.isFuture
                          ? "border-[#DE4A1B] text-[#DE4A1B] ring-4 ring-orange-50"
                          : "border-slate-300 text-slate-600 hover:border-[#0B357B]"
                      }`}
                  >
                    {m.isFuture ? (
                      <span className="text-sm">{m.indicator}</span>
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </div>

                  <span
                    className={`mt-2 font-mono text-xs tracking-tight ${m.isCurrent
                        ? "text-[#1A73C3] font-medium"
                        : m.isFuture
                          ? "text-[#DE4A1B] font-medium"
                          : "text-slate-500"
                      }`}
                  >
                    {m.year}
                  </span>
                </div>

                {/* Minimal Dashed Milestone Card */}
                <div className="w-full border border-dashed border-slate-300 bg-white p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-50/60 h-full">
                  <div>
                    {/* Status Tag without dot */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                        {m.tag}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-serif font-normal text-[15px] sm:text-base text-[#0B357B] tracking-tight leading-snug mb-2">
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
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l border-dashed border-slate-300 ml-4 sm:ml-6 space-y-6">
          {milestones.map((m, idx) => (
            <div key={m.year} className="relative">
              {/* Node Marker on Spine */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono bg-white border ${m.isCurrent
                    ? "border-[#1A73C3] text-[#1A73C3] ring-4 ring-blue-50"
                    : m.isFuture
                      ? "border-[#DE4A1B] text-[#DE4A1B] ring-4 ring-orange-50"
                      : "border-slate-300 text-[#0B357B]"
                  }`}
              >
                {m.isFuture ? m.indicator : idx + 1}
              </div>

              {/* Milestone Card */}
              <div className="border border-dashed border-slate-300 bg-white p-5 sm:p-6 transition-colors duration-200 hover:bg-slate-50/60">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#0B357B] font-medium">
                      {m.year}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                      {m.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif font-normal text-base text-[#0B357B] tracking-tight leading-snug mb-2">
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

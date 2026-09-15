"use client";

import * as React from "react";
import { EarthIcon, type EarthIconHandle, WorkflowIcon, type WorkflowIconHandle, CloudSyncIcon, type CloudSyncIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface AboutMissionSectionProps {
  locale: Locale;
  dict: {
    about: {
      mission: {
        kicker: string;
        headline: string;
        description: string;
        level1: {
          tag: string;
          title: string;
          description: string;
        };
        level2: {
          tag: string;
          title: string;
          description: string;
        };
        level2b: {
          tag: string;
          title: string;
          description: string;
        };
      };
    };
  };
}

export function AboutMissionSection({ locale: _locale, dict }: AboutMissionSectionProps) {
  const earthRef = React.useRef<EarthIconHandle>(null);
  const workflowRef = React.useRef<WorkflowIconHandle>(null);
  const cloudRef = React.useRef<CloudSyncIconHandle>(null);

  const mission = dict.about.mission;

  return (
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold font-outfit uppercase tracking-widest text-[#1A73C3] block mb-2">
            {mission.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {mission.headline}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {mission.description}
          </p>
        </div>

        {/* Architectural Schematic: Level 1 Roof over Level 2 Dual Tracks */}
        <div className="space-y-5 max-w-6xl mx-auto">
          {/* Top Overarching Card: Level 1 — Continental framework */}
          <div
            className="group relative rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#1A73C3]/50 p-7 sm:p-9 shadow-sm hover:shadow-md transition-all"
            onMouseEnter={() => earthRef.current?.startAnimation()}
            onMouseLeave={() => earthRef.current?.stopAnimation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Icon & Badges */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A73C3] group-hover:scale-105 transition-transform">
                    <EarthIcon ref={earthRef} size={24} className="text-[#1A73C3]" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-bold font-outfit uppercase tracking-wider text-[#1A73C3]">
                      {mission.level1.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#0A162B] tracking-tight">
                  {mission.level1.title}
                </h3>
              </div>

              {/* Right Column: Narrative & Feature Highlights */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level1.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73C3]" aria-hidden="true" />
                    eduGAIN Global Node
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B357B]" aria-hidden="true" />
                    Standardization &amp; Trust Governance
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A1B]" aria-hidden="true" />
                    International R&amp;E Representation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dual Tracks: Level 2 & Level 2b Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Pathway 1: Level 2 — National federation support */}
            <div
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#0B357B]/50 p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              onMouseEnter={() => workflowRef.current?.startAnimation()}
              onMouseLeave={() => workflowRef.current?.stopAnimation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold font-outfit uppercase tracking-wider text-[#0B357B]">
                    {mission.level2.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200/80 flex items-center justify-center text-[#0B357B] group-hover:scale-105 transition-transform">
                    <WorkflowIcon ref={workflowRef} size={20} className="text-[#0B357B]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#0A162B] tracking-tight">
                  {mission.level2.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level2.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B357B]" aria-hidden="true" />
                  <span>Sovereign country-owned identity infrastructure</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B357B]" aria-hidden="true" />
                  <span>NREN governance tooling, training &amp; roadshows</span>
                </div>
              </div>
            </div>

            {/* Pathway 2: Level 2b — Catchall for those that cannot yet */}
            <div
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#DE4A1B]/50 p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              onMouseEnter={() => cloudRef.current?.startAnimation()}
              onMouseLeave={() => cloudRef.current?.stopAnimation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-bold font-outfit uppercase tracking-wider text-[#DE4A1B]">
                    {mission.level2b.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center text-[#DE4A1B] group-hover:scale-105 transition-transform">
                    <CloudSyncIcon ref={cloudRef} size={20} className="text-[#DE4A1B]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#0A162B] tracking-tight">
                  {mission.level2b.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level2b.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A1B]" aria-hidden="true" />
                  <span>Cloud-hosted, open-source federated IAM</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A1B]" aria-hidden="true" />
                  <span>Instant participation via <strong className="text-[#0A162B] font-bold">BonafID</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

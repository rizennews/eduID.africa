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
    <section className="pt-6 sm:pt-8 pb-6 sm:pb-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-2xs">
              {mission.kicker}
            </span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {mission.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {mission.description}
          </p>
        </div>

        {/* Architectural Schematic: Level 1 Roof over Level 2 Dual Tracks */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Top Overarching Card: Level 1 — Continental framework */}
          <div
            className="group relative border border-dashed border-slate-300 bg-white p-8 sm:p-10 transition-colors duration-200 hover:bg-slate-50/50"
            onMouseEnter={() => earthRef.current?.startAnimation()}
            onMouseLeave={() => earthRef.current?.stopAnimation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Icon & Tag */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A73C3]">
                    <EarthIcon ref={earthRef} size={22} className="text-[#1A73C3]" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1A73C3]">
                    {mission.level1.tag}
                  </span>
                </div>

                <h3 className="font-serif font-normal text-2xl sm:text-3xl text-[#0B357B] tracking-tight leading-snug">
                  {mission.level1.title}
                </h3>
              </div>

              {/* Right Column: Narrative & Feature Highlights */}
              <div className="lg:col-span-8 lg:border-l lg:border-dashed lg:border-slate-300/80 lg:pl-8 space-y-4">
                <p className="text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level1.description}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700 font-sans">
                    eduGAIN Global Node
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700 font-sans">
                    Standardization &amp; Trust Governance
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700 font-sans">
                    International R&amp;E Representation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dual Tracks: Level 2 & Level 2b Monolithic Grid */}
          <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 bg-white">
            {/* Pathway 1: Level 2 — National federation support */}
            <div
              className="group relative p-8 sm:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-50/50"
              onMouseEnter={() => workflowRef.current?.startAnimation()}
              onMouseLeave={() => workflowRef.current?.stopAnimation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0B357B]">
                    {mission.level2.tag}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B357B]">
                    <WorkflowIcon ref={workflowRef} size={18} className="text-[#0B357B]" />
                  </div>
                </div>

                <h3 className="font-serif font-normal text-2xl text-[#0B357B] tracking-tight leading-snug">
                  {mission.level2.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level2.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 font-sans">
                <span>Sovereign country-owned identity infrastructure</span>
                <span className="text-slate-300" aria-hidden="true">/</span>
                <span>NREN governance tooling, training &amp; roadshows</span>
              </div>
            </div>

            {/* Pathway 2: Level 2b — Catchall for those that cannot yet */}
            <div
              className="group relative p-8 sm:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-50/50"
              onMouseEnter={() => cloudRef.current?.startAnimation()}
              onMouseLeave={() => cloudRef.current?.stopAnimation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#DE4A1B]">
                    {mission.level2b.tag}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#DE4A1B]">
                    <CloudSyncIcon ref={cloudRef} size={18} className="text-[#DE4A1B]" />
                  </div>
                </div>

                <h3 className="font-serif font-normal text-2xl text-[#0B357B] tracking-tight leading-snug">
                  {mission.level2b.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {mission.level2b.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-dashed border-slate-300/80 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 font-sans">
                <span>Cloud-hosted, open-source federated IAM</span>
                <span className="text-slate-300" aria-hidden="true">/</span>
                <span>
                  Instant participation via{" "}
                  <span className="text-[#0B357B] font-medium">BonafID</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import {
  ClockIcon,
  type ClockIconHandle,
  EarthIcon,
  type EarthIconHandle,
  WorkflowIcon,
  type WorkflowIconHandle,
  ShieldCheckIcon,
  type ShieldCheckIconHandle,
  CircleCheckIcon,
  type CircleCheckIconHandle,
} from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface RoadmapItem {
  id: string;
  title: string;
  timeline: string;
  status: "completed" | "upcoming" | "scheduled" | string;
}

interface GovernanceProgrammeSectionProps {
  locale?: Locale;
  dict: {
    governancePage: {
      programmeSection: {
        kicker: string;
        title: string;
        description: string;
        facts: {
          duration: { label: string; value: string };
          funder: { label: string; value: string };
          partners: { label: string; value: string };
          deliverables: { label: string; value: string };
        };
        roadmap: {
          title: string;
          items: RoadmapItem[];
        };
      };
    };
  };
}

function FactCard({
  icon: Icon,
  label,
  value,
  isSpan2 = false,
}: {
  icon: React.ComponentType<{ ref?: React.Ref<any>; size?: number; className?: string }>;
  label: string;
  value: string;
  isSpan2?: boolean;
}) {
  const iconRef = React.useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);

  return (
    <div
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className={`p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between ${
        isSpan2 ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-slate-100 group-hover:border-slate-300 group-hover:text-slate-900 transition-all duration-200">
          <Icon ref={iconRef} size={18} className="p-0 hover:bg-transparent" />
        </div>
      </div>
      <p className="text-sm sm:text-[15px] font-bold font-heading text-[#0A162B] group-hover:text-slate-900 transition-colors leading-relaxed">
        {value}
      </p>
    </div>
  );
}

function MilestoneCard({ item, index }: { item: RoadmapItem; index: number }) {
  const checkRef = React.useRef<CircleCheckIconHandle>(null);
  const clockRef = React.useRef<ClockIconHandle>(null);
  const earthRef = React.useRef<EarthIconHandle>(null);

  const isCompleted = item.status === "completed" || item.timeline.includes("✓");
  const isYear2 = item.timeline.includes("Year 2") || item.timeline.includes("Année 2") || item.timeline.includes("Ano 2");

  const handleMouseEnter = () => {
    checkRef.current?.startAnimation();
    clockRef.current?.startAnimation();
    earthRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    checkRef.current?.stopAnimation();
    clockRef.current?.stopAnimation();
    earthRef.current?.stopAnimation();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
    >
      <div>
        {/* Milestone Timeline Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Phase 0{index + 1}
          </span>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-700 border border-emerald-200/80">
              <CircleCheckIcon ref={checkRef} size={14} className="p-0 hover:bg-transparent text-emerald-600" />
              <span>{item.timeline}</span>
            </span>
          ) : isYear2 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 text-[#1A73C3] border border-blue-200/80">
              <ClockIcon ref={clockRef} size={14} className="p-0 hover:bg-transparent text-[#1A73C3]" />
              <span>{item.timeline}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-slate-100 text-slate-600 border border-slate-200/80">
              <EarthIcon ref={earthRef} size={14} className="p-0 hover:bg-transparent text-slate-500" />
              <span>{item.timeline}</span>
            </span>
          )}
        </div>

        {/* Deliverable Title */}
        <h4 className="text-base sm:text-[17px] font-bold font-heading text-[#0A162B] group-hover:text-slate-900 transition-colors leading-snug">
          {item.title}
        </h4>
      </div>

      {/* Status Footer Note */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
        <span className="font-medium text-slate-500">
          {isCompleted
            ? "Completed · Active in production"
            : isYear2
            ? "Upcoming target milestone"
            : "Scheduled continental delivery"}
        </span>
      </div>
    </div>
  );
}

export function GovernanceProgrammeSection({
  locale: _locale,
  dict,
}: GovernanceProgrammeSectionProps) {
  const section = dict.governancePage.programmeSection;

  return (
    <section className="pt-8 sm:pt-10 pb-20 sm:pb-28 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-bold font-mono tracking-widest text-[#1A73C3] uppercase mb-2">
            {section.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.description}
          </p>
        </div>

        {/* 4 Program Metadata Fact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <FactCard
            icon={ClockIcon}
            label={section.facts.duration.label}
            value={section.facts.duration.value}
          />
          <FactCard
            icon={EarthIcon}
            label={section.facts.funder.label}
            value={section.facts.funder.value}
          />
          <FactCard
            icon={WorkflowIcon}
            label={section.facts.partners.label}
            value={section.facts.partners.value}
          />
          <FactCard
            icon={ShieldCheckIcon}
            label={section.facts.deliverables.label}
            value={section.facts.deliverables.value}
          />
        </div>

        {/* eduID.africa within AC4 Deliverables Card */}
        <div className="mt-10 sm:mt-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="px-6 sm:px-8 py-5 bg-slate-50/70 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                Deliverables & Milestones
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0A162B] tracking-tight">
                {section.roadmap.title}
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">
              AC4 Deliverables · 2026–2029
            </span>
          </div>

          {/* 4 Roadmap Milestone Cards */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 bg-slate-50/30">
            {section.roadmap.items.map((item, index) => (
              <MilestoneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

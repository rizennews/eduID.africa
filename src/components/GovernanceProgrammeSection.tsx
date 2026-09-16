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

function FactTile({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ ref?: React.Ref<any>; size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  const iconRef = React.useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);

  return (
    <div
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="p-6 bg-white hover:bg-slate-50/50 transition-all duration-200 group flex flex-col justify-between"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-[#1A73C3]/10 group-hover:border-[#1A73C3]/30 group-hover:text-[#0B357B] transition-all duration-200">
          <Icon ref={iconRef} size={16} className="p-0 hover:bg-transparent" />
        </div>
      </div>
      <p className="text-sm sm:text-[15px] font-sans font-medium text-slate-800 group-hover:text-[#0B357B] transition-colors leading-relaxed">
        {value}
      </p>
    </div>
  );
}

function MilestoneTile({ item, index }: { item: RoadmapItem; index: number }) {
  const checkRef = React.useRef<CircleCheckIconHandle>(null);
  const clockRef = React.useRef<ClockIconHandle>(null);
  const earthRef = React.useRef<EarthIconHandle>(null);

  const isCompleted = item.status === "completed" || item.timeline.includes("✓");
  const isYear2 =
    item.timeline.includes("Year 2") ||
    item.timeline.includes("Année 2") ||
    item.timeline.includes("Ano 2");

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
      className="p-6 bg-white hover:bg-slate-50/50 transition-all duration-200 group flex flex-col justify-between"
    >
      <div>
        {/* Milestone Phase & Timeline Pill (No beacon dots) */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Phase 0{index + 1}
          </span>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
              <CircleCheckIcon
                ref={checkRef}
                size={13}
                className="p-0 hover:bg-transparent text-emerald-600"
              />
              <span>{item.timeline}</span>
            </span>
          ) : isYear2 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium bg-blue-50 text-[#1A73C3] border border-blue-200/80">
              <ClockIcon
                ref={clockRef}
                size={13}
                className="p-0 hover:bg-transparent text-[#1A73C3]"
              />
              <span>{item.timeline}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
              <EarthIcon
                ref={earthRef}
                size={13}
                className="p-0 hover:bg-transparent text-slate-500"
              />
              <span>{item.timeline}</span>
            </span>
          )}
        </div>

        {/* Deliverable Title */}
        <h4 className="text-base font-serif font-normal text-[#0B357B] group-hover:text-[#1A73C3] transition-colors leading-snug">
          {item.title}
        </h4>
      </div>

      {/* Status Footer Note */}
      <div className="pt-4 mt-5 border-t border-dashed border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
        <span>
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
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#F8FAFC] border-t border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1A73C3] uppercase mb-2">
            {section.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#0B357B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.description}
          </p>
        </div>

        {/* 4 Program Metadata Facts in Monolithic Architectural Grid */}
        <div className="border border-dashed border-slate-300 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-slate-300">
          <FactTile
            icon={ClockIcon}
            label={section.facts.duration.label}
            value={section.facts.duration.value}
          />
          <FactTile
            icon={EarthIcon}
            label={section.facts.funder.label}
            value={section.facts.funder.value}
          />
          <FactTile
            icon={WorkflowIcon}
            label={section.facts.partners.label}
            value={section.facts.partners.value}
          />
          <FactTile
            icon={ShieldCheckIcon}
            label={section.facts.deliverables.label}
            value={section.facts.deliverables.value}
          />
        </div>

        {/* eduID.africa within AC4 Deliverables Architectural Container */}
        <div className="mt-10 sm:mt-12 border border-dashed border-slate-300 bg-white overflow-hidden">
          {/* Card Header Bar */}
          <div className="px-6 sm:px-8 py-4 bg-slate-50/60 border-b border-dashed border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                Deliverables & Milestones
              </span>
              <h3 className="text-base sm:text-lg font-serif font-normal text-[#0B357B] tracking-tight">
                {section.roadmap.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              AC4 Deliverables · 2026–2029
            </span>
          </div>

          {/* 4 Roadmap Milestone Tiles with Dashed Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-dashed divide-slate-300">
            {section.roadmap.items.map((item, index) => (
              <MilestoneTile key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


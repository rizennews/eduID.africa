"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface ArchitecturePathsSectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      architecturePaths: {
        kicker: string;
        headline: string;
        description: string;
        pathA: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
        pathB: {
          tag: string;
          title: string;
          description: string;
          bestFor: string;
        };
      };
    };
  };
}

interface PathColumnProps {
  num: string;
  tag: string;
  title: string;
  description: string;
  bestFor: string;
  tagClass: string;
}

function PathColumn({
  num,
  tag,
  title,
  description,
  bestFor,
  tagClass,
}: PathColumnProps) {
  return (
    <div className="group p-8 sm:p-10 lg:p-12 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-200">
      <div>
        {/* Header: Number & Tag (No dots) */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="font-mono text-xs font-bold text-slate-400">
            {num}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border border-dashed ${tagClass}`}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-normal text-2xl sm:text-3xl text-[#0B357B] tracking-tight leading-snug mb-4 group-hover:text-[#1A73C3] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Bottom "Best For" Panel with Dashed Border */}
      <div className="mt-8 pt-5 border-t border-dashed border-slate-200">
        <div className="p-3.5 bg-slate-50/70 border border-dashed border-slate-200">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B357B] block mb-1">
            Recommended For
          </span>
          <p className="text-xs sm:text-sm font-medium text-slate-700 font-sans leading-relaxed">
            {bestFor}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ArchitecturePathsSection({
  dict,
}: ArchitecturePathsSectionProps) {
  const data = dict.howItWorks.architecturePaths;

  const paths = [
    {
      num: "01",
      tag: data.pathA.tag,
      title: data.pathA.title,
      description: data.pathA.description,
      bestFor: data.pathA.bestFor,
      tagClass: "bg-blue-50 text-[#0B357B] border-blue-200",
    },
    {
      num: "02",
      tag: data.pathB.tag,
      title: data.pathB.title,
      description: data.pathB.description,
      bestFor: data.pathB.bestFor,
      tagClass: "bg-orange-50 text-[#DE4A1B] border-orange-200",
    },
  ];

  return (
    <section className="pt-6 sm:pt-8 pb-14 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-10 sm:mb-14">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0B357B] tracking-tight leading-[1.18]">
            {data.headline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal whitespace-nowrap">
            {data.description}
          </p>
        </div>

        {/* Monolithic 2-Column Architectural Grid */}
        <div className="border-t border-b border-dashed border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 border-x border-slate-300/80 bg-white">
            {paths.map((path) => (
              <PathColumn
                key={path.num}
                num={path.num}
                tag={path.tag}
                title={path.title}
                description={path.description}
                bestFor={path.bestFor}
                tagClass={path.tagClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

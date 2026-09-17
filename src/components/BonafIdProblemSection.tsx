"use client";

import * as React from "react";
import {
  CloudDownloadIcon,
  type CloudDownloadIconHandle,
  LinkIcon,
  type LinkIconHandle,
  EarthIcon,
  type EarthIconHandle,
  ShieldCheckIcon,
  type ShieldCheckIconHandle,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface ProblemItem {
  icon: string;
  title: string;
  desc: string;
}

interface BonafIdProblemSectionProps {
  locale?: Locale;
  dict: {
    bonafidPage: {
      problemSection: {
        title: string;
        description: string;
        items: ProblemItem[];
      };
    };
  };
}

interface ProblemCardProps {
  item: ProblemItem;
  idx: number;
}

function ProblemCard({ item, idx }: ProblemCardProps) {
  const cloudRef = React.useRef<CloudDownloadIconHandle>(null);
  const linkRef = React.useRef<LinkIconHandle>(null);
  const earthRef = React.useRef<EarthIconHandle>(null);
  const shieldRef = React.useRef<ShieldCheckIconHandle>(null);

  const handleMouseEnter = () => {
    cloudRef.current?.startAnimation();
    linkRef.current?.startAnimation();
    earthRef.current?.startAnimation();
    shieldRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    cloudRef.current?.stopAnimation();
    linkRef.current?.stopAnimation();
    earthRef.current?.stopAnimation();
    shieldRef.current?.stopAnimation();
  };

  const renderIcon = () => {
    switch (item.icon) {
      case "cloud":
        return (
          <CloudDownloadIcon
            ref={cloudRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
      case "network":
        return (
          <LinkIcon
            ref={linkRef}
            size={20}
            className="text-[#1A73C3]"
          />
        );
      case "globe":
        return (
          <EarthIcon
            ref={earthRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
      case "shield":
        return (
          <ShieldCheckIcon
            ref={shieldRef}
            size={20}
            className="text-[#DE4A1B]"
          />
        );
      default:
        return (
          <EarthIcon
            ref={earthRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
    }
  };

  const isOdd = idx % 2 === 0;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group p-8 sm:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-100/40 border-b border-dashed border-slate-300/80",
        isOdd ? "md:border-r md:border-dashed md:border-slate-300/80" : "",
        "lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-dashed lg:[&:not(:last-child)]:border-slate-300/80 lg:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 [&:last-child]:border-b-0"
      )}
    >
      <div>
        {/* Genuine Lucide Animated Icon Badge */}
        <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-2xs mb-6 group-hover:border-slate-400 group-hover:shadow-xs transition-all">
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function BonafIdProblemSection({ locale: _locale, dict }: BonafIdProblemSectionProps) {
  const { problemSection } = dict.bonafidPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 w-full">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {problemSection.description}
          </p>
        </div>

        {/* 4-Card Monolithic Architectural Ledger with Genuine Lucide Animated Icons */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/40">
          {problemSection.items.map((item, idx) => (
            <ProblemCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

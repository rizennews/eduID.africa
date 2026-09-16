"use client";

import * as React from "react";
import {
  BookTextIcon,
  type BookTextIconHandle,
  PlayIcon,
  type PlayIconHandle,
  ClipboardCheckIcon,
  type ClipboardCheckIconHandle,
  WrenchIcon,
  type WrenchIconHandle,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface ResourceItem {
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
}

interface TrainingResourcesSectionProps {
  locale?: Locale;
  dict: {
    trainingPage: {
      resourcesSection: {
        title: string;
        items: ResourceItem[];
      };
    };
  };
}

interface ResourceCardProps {
  item: ResourceItem;
  idx: number;
}

function ResourceCard({ item, idx }: ResourceCardProps) {
  const bookRef = React.useRef<BookTextIconHandle>(null);
  const playRef = React.useRef<PlayIconHandle>(null);
  const clipboardRef = React.useRef<ClipboardCheckIconHandle>(null);
  const wrenchRef = React.useRef<WrenchIconHandle>(null);

  const handleMouseEnter = () => {
    bookRef.current?.startAnimation();
    playRef.current?.startAnimation();
    clipboardRef.current?.startAnimation();
    wrenchRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    bookRef.current?.stopAnimation();
    playRef.current?.stopAnimation();
    clipboardRef.current?.stopAnimation();
    wrenchRef.current?.stopAnimation();
  };

  const renderIcon = () => {
    switch (item.icon) {
      case "book":
        return (
          <BookTextIcon
            ref={bookRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
      case "play":
        return (
          <PlayIcon
            ref={playRef}
            size={20}
            className="text-[#DE4A1B]"
          />
        );
      case "clipboard":
        return (
          <ClipboardCheckIcon
            ref={clipboardRef}
            size={20}
            className="text-[#1A73C3]"
          />
        );
      case "wrench":
        return (
          <WrenchIcon
            ref={wrenchRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
      default:
        return (
          <BookTextIcon
            ref={bookRef}
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
        {/* Lucide Animated Icon Badge */}
        <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-2xs mb-6 group-hover:border-slate-400 group-hover:shadow-xs transition-all">
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4 font-normal">
          {item.description}
        </p>
      </div>

      {/* Action Link */}
      <div className="mt-8 pt-4 border-t border-dashed border-slate-300/80">
        <a
          href={item.href}
          onClick={(e) => {
            if (item.href === "#" || item.href.endsWith(".pdf")) {
              e.preventDefault();
            }
          }}
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
        >
          <span>{item.action}</span>
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}

export function TrainingResourcesSection({ locale: _locale, dict }: TrainingResourcesSectionProps) {
  const { resourcesSection } = dict.trainingPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Headline (No Eyebrow) */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {resourcesSection.title}
          </h2>
        </div>

        {/* 4-Card Architectural Ledger with Genuine Lucide Animated Icons */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/40">
          {resourcesSection.items.map((item, idx) => (
            <ResourceCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

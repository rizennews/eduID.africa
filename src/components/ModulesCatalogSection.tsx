"use client";

import * as React from "react";
import Link from "next/link";
import {
  CloudDownloadIcon,
  type CloudDownloadIconHandle,
  LinkIcon,
  type LinkIconHandle,
  EarthIcon,
  type EarthIconHandle,
  WrenchIcon,
  type WrenchIconHandle,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface ModuleItem {
  icon: string;
  category: string;
  title: string;
  description: string;
  status: string;
  action: string;
  href: string;
}

interface ModulesCatalogSectionProps {
  locale: Locale;
  dict: {
    modulesPage: {
      catalogSection: {
        title: string;
        description: string;
        items: ModuleItem[];
      };
    };
  };
}

interface ModuleCardProps {
  item: ModuleItem;
  idx: number;
  locale: Locale;
}

function ModuleCard({ item, idx, locale }: ModuleCardProps) {
  const cloudRef = React.useRef<CloudDownloadIconHandle>(null);
  const linkRef = React.useRef<LinkIconHandle>(null);
  const earthRef = React.useRef<EarthIconHandle>(null);
  const wrenchRef = React.useRef<WrenchIconHandle>(null);

  const handleMouseEnter = () => {
    cloudRef.current?.startAnimation();
    linkRef.current?.startAnimation();
    earthRef.current?.startAnimation();
    wrenchRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    cloudRef.current?.stopAnimation();
    linkRef.current?.stopAnimation();
    earthRef.current?.stopAnimation();
    wrenchRef.current?.stopAnimation();
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
      case "wrench":
        return (
          <WrenchIcon
            ref={wrenchRef}
            size={20}
            className="text-[#DE4A1B]"
          />
        );
      default:
        return (
          <CloudDownloadIcon
            ref={cloudRef}
            size={20}
            className="text-[#0B357B]"
          />
        );
    }
  };

  const isExternal = item.href.startsWith("http");
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
        {/* Top Header: Icon & Status */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-2xs group-hover:border-slate-400 group-hover:shadow-xs transition-all">
            {renderIcon()}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 border border-slate-300/80 bg-white/80 text-[#0B357B] font-medium rounded-full">
            {item.status}
          </span>
        </div>

        {/* Category */}
        <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
          {item.category}
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
        {isExternal ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
          >
            <span>{item.action}</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        ) : (
          <Link
            href={`/${locale}${item.href}`}
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#0B357B] hover:text-[#1A73C3] transition-colors"
          >
            <span>{item.action}</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function ModulesCatalogSection({ locale, dict }: ModulesCatalogSectionProps) {
  const { catalogSection } = dict.modulesPage;

  return (
    <section id="catalog" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Headline (No Eyebrow) */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {catalogSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {catalogSection.description}
          </p>
        </div>

        {/* 4-Card Architectural Ledger */}
        <div className="border-y border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/40">
          {catalogSection.items.map((item, idx) => (
            <ModuleCard key={idx} item={item} idx={idx} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

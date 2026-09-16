"use client";

import * as React from "react";
import {
  CloudSyncIcon,
  type CloudSyncIconHandle,
  EarthIcon,
  type EarthIconHandle,
  ShieldCheckIcon,
  type ShieldCheckIconHandle,
} from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface HowItWorksLayersSectionProps {
  locale?: Locale;
  dict: {
    howItWorks: {
      layers: {
        card1: {
          title: string;
          description: string;
          solves: string;
        };
        card2: {
          title: string;
          description: string;
          solves: string;
        };
        card3: {
          title: string;
          description: string;
          solves: string;
        };
      };
    };
  };
}

interface LayerColumnProps {
  layerTag: string;
  title: string;
  description: string;
  solves: string;
  tagClass: string;
  icon: React.ReactNode;
  onHover?: () => void;
  onLeave?: () => void;
}

function LayerColumn({
  layerTag,
  title,
  description,
  solves,
  tagClass,
  icon,
  onHover,
  onLeave,
}: LayerColumnProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group p-7 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-200"
    >
      <div>
        {/* Header: Layer Tag (No dots) & Animated Icon */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border border-dashed ${tagClass}`}
          >
            {layerTag}
          </span>
          <div
            className="w-9 h-9 rounded-lg bg-white border border-dashed border-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs"
            aria-hidden="true"
          >
            {icon}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-serif font-normal text-2xl sm:text-[26px] text-[#0B357B] tracking-tight leading-snug mb-3 group-hover:text-[#1A73C3] transition-colors">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Bottom "Solves" Panel with Dashed Border */}
      <div className="mt-8 pt-4 border-t border-dashed border-slate-200">
        <div className="p-3.5 bg-slate-50/70 border border-dashed border-slate-200">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0B357B] block mb-1">
            Solves
          </span>
          <p className="text-xs sm:text-sm font-medium text-slate-700 font-sans leading-relaxed">
            {solves}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksLayersSection({ locale: _locale, dict }: HowItWorksLayersSectionProps) {
  const cloudRef = React.useRef<CloudSyncIconHandle>(null);
  const earthRef = React.useRef<EarthIconHandle>(null);
  const shieldRef = React.useRef<ShieldCheckIconHandle>(null);

  const layers = dict.howItWorks.layers;

  const cards = [
    {
      layerTag: "LAYER 1 — CAMPUS IAM",
      title: layers.card1.title,
      description: layers.card1.description,
      solves: layers.card1.solves,
      tagClass: "bg-orange-50 text-[#DE4A1B] border-orange-200",
      icon: <CloudSyncIcon ref={cloudRef} size={20} className="text-[#DE4A1B]" />,
      onHover: () => cloudRef.current?.startAnimation(),
      onLeave: () => cloudRef.current?.stopAnimation(),
    },
    {
      layerTag: "LAYER 2 — CONTINENTAL FEDERATION",
      title: layers.card2.title,
      description: layers.card2.description,
      solves: layers.card2.solves,
      tagClass: "bg-blue-50 text-[#0B357B] border-blue-200",
      icon: <EarthIcon ref={earthRef} size={20} className="text-[#0B357B]" />,
      onHover: () => earthRef.current?.startAnimation(),
      onLeave: () => earthRef.current?.stopAnimation(),
    },
    {
      layerTag: "LAYER 3 — WI-FI & SERVICES",
      title: layers.card3.title,
      description: layers.card3.description,
      solves: layers.card3.solves,
      tagClass: "bg-sky-50 text-[#1A73C3] border-sky-200",
      icon: <ShieldCheckIcon ref={shieldRef} size={20} className="text-[#1A73C3]" />,
      onHover: () => shieldRef.current?.startAnimation(),
      onLeave: () => shieldRef.current?.stopAnimation(),
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monolithic 3-Column Architectural Grid */}
        <div className="border-t border-b border-dashed border-slate-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-300/80 border-x border-slate-300/80 bg-white">
            {cards.map((card) => (
              <LayerColumn
                key={card.layerTag}
                layerTag={card.layerTag}
                title={card.title}
                description={card.description}
                solves={card.solves}
                tagClass={card.tagClass}
                icon={card.icon}
                onHover={card.onHover}
                onLeave={card.onLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

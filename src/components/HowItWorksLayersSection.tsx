"use client";

import * as React from "react";
import { CloudSyncIcon, type CloudSyncIconHandle, EarthIcon, type EarthIconHandle, ShieldCheckIcon, type ShieldCheckIconHandle } from "@/components/icons";
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
      accent: "#DE4A1B",
      badgeClass: "bg-orange-50 text-[#DE4A1B] border-orange-200/80",
      icon: <CloudSyncIcon ref={cloudRef} size={22} className="text-[#DE4A1B]" />,
      onHover: () => cloudRef.current?.startAnimation(),
      onLeave: () => cloudRef.current?.stopAnimation(),
    },
    {
      layerTag: "LAYER 2 — CONTINENTAL FEDERATION",
      title: layers.card2.title,
      description: layers.card2.description,
      solves: layers.card2.solves,
      accent: "#0B357B",
      badgeClass: "bg-blue-50 text-[#0B357B] border-blue-200/80",
      icon: <EarthIcon ref={earthRef} size={22} className="text-[#0B357B]" />,
      onHover: () => earthRef.current?.startAnimation(),
      onLeave: () => earthRef.current?.stopAnimation(),
    },
    {
      layerTag: "LAYER 3 — WI-FI & SERVICES",
      title: layers.card3.title,
      description: layers.card3.description,
      solves: layers.card3.solves,
      accent: "#1A73C3",
      badgeClass: "bg-sky-50 text-[#1A73C3] border-sky-200/80",
      icon: <ShieldCheckIcon ref={shieldRef} size={22} className="text-[#1A73C3]" />,
      onHover: () => shieldRef.current?.startAnimation(),
      onLeave: () => shieldRef.current?.stopAnimation(),
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.layerTag}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              onMouseEnter={card.onHover}
              onMouseLeave={card.onLeave}
            >
              <div>
                {/* Header: Layer Badge & Animated Micro-Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold font-outfit uppercase tracking-wider border ${card.badgeClass}`}
                  >
                    {card.layerTag}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight leading-snug mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom "Solves" Panel */}
              <div className="mt-7 pt-4 border-t border-slate-100">
                <div className="rounded-xl bg-slate-50/90 border border-slate-200/70 p-3.5 sm:p-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono block mb-1">
                    Solves:
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 font-sans leading-relaxed">
                    {card.solves}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

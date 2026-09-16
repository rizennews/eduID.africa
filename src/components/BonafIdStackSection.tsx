"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface StackLayer {
  level: string;
  title: string;
  subtitle: string;
  badge: string;
  connector?: string;
  isHighlighted?: boolean;
}

interface BonafIdStackSectionProps {
  locale?: Locale;
  dict: {
    bonafidPage: {
      stackSection: {
        title: string;
        layers: StackLayer[];
      };
    };
  };
}

export function BonafIdStackSection({ locale: _locale, dict }: BonafIdStackSectionProps) {
  const { stackSection } = dict.bonafidPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {stackSection.title}
          </h2>
        </div>

        {/* Vertical Architectural Stack */}
        <div className="space-y-1">
          {stackSection.layers.map((layer, idx) => (
            <React.Fragment key={idx}>
              {/* Layer Card */}
              <div
                className={`p-5 sm:p-6 rounded-2xl transition-all duration-200 ${
                  layer.isHighlighted
                    ? "border-2 border-[#1A73C3] bg-white shadow-sm ring-4 ring-[#1A73C3]/10"
                    : "border border-slate-200/90 bg-white/80 shadow-2xs hover:bg-white"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs uppercase tracking-wider ${
                          layer.isHighlighted ? "text-[#1A73C3] font-semibold" : "text-slate-400"
                        }`}
                      >
                        {layer.level}
                      </span>
                    </div>
                    <h3
                      className={`font-serif font-normal tracking-tight ${
                        layer.isHighlighted
                          ? "text-xl sm:text-2xl text-[#0B357B]"
                          : "text-lg sm:text-xl text-[#0B357B]"
                      }`}
                    >
                      {layer.title}
                    </h3>
                    <p className="font-sans text-slate-600 text-xs sm:text-sm mt-1 font-normal">
                      {layer.subtitle}
                    </p>
                  </div>

                  {/* Layer Badge / Meta */}
                  <div className="sm:text-right shrink-0">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono ${
                        layer.isHighlighted
                          ? "font-medium text-white bg-[#1A73C3] shadow-2xs"
                          : "text-slate-600 bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical Dashed Connector Between Layers */}
              {idx < stackSection.layers.length - 1 && (
                <div className="flex justify-center py-1 select-none" aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-px border-r border-dashed border-slate-300" />
                    <span className="font-mono text-xs text-slate-400">
                      {layer.connector || "↕"}
                    </span>
                    <span className="h-4 w-px border-r border-dashed border-slate-300" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

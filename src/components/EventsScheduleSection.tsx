"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getRoadshowEvents } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventsScheduleSectionProps {
  locale: Locale;
  dict: {
    eventsPage: {
      title: string;
      subtitle: string;
      registerIndico: string;
      detailsLabel: string;
      hostCta: {
        title: string;
        description: string;
        action: string;
      };
    };
  };
}

export function EventsScheduleSection({ locale, dict }: EventsScheduleSectionProps) {
  const events = getRoadshowEvents(locale);

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {dict.eventsPage.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {dict.eventsPage.subtitle}
          </p>
        </div>

        {/* Events Ledger Container */}
        <div className="border-y border-dashed border-slate-300 divide-y divide-dashed divide-slate-300/80 bg-white/50">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.indicoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 sm:p-8 transition-colors duration-200 hover:bg-slate-100/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Date Badge + Title + Metadata */}
                <div className="flex items-start sm:items-center gap-5 sm:gap-6 flex-1">
                  {/* Calendar Date Block */}
                  <div className="shrink-0 w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-center shadow-2xs group-hover:border-[#1A73C3] group-hover:bg-blue-50/30 transition-all">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1A73C3]">
                      {event.month}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-medium text-[#0B357B] leading-none mt-0.5">
                      {event.day}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {event.year}
                    </span>
                  </div>

                  {/* Title & Metadata Ledger */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
                        {event.title}
                      </h3>
                      {/* External Indicator */}
                      <span className="text-slate-400 group-hover:text-[#1A73C3] transition-colors text-base font-normal">
                        ↗
                      </span>
                    </div>

                    {/* Metadata Ledger with Slashes */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-mono text-slate-600 mt-2.5">
                      <span className="font-medium text-slate-800 font-sans">
                        {event.venue}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">/</span>
                      <span className="text-slate-500 font-sans">
                        {event.duration}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">/</span>
                      <span className="text-slate-500 font-sans">
                        {event.audience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Status Pill + CTA Button */}
                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-dashed border-slate-200">
                  {/* Status Badge */}
                  <div>
                    {event.statusType === "open" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-200 bg-emerald-50 text-emerald-700">
                        {event.status}
                      </span>
                    )}
                    {event.statusType === "filling" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-amber-200 bg-amber-50 text-amber-700">
                        {event.status}
                      </span>
                    )}
                    {event.statusType === "planning" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-300 bg-slate-100 text-slate-600">
                        {event.status}
                      </span>
                    )}
                  </div>

                  {/* Register on Indico Action Link */}
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 bg-white font-mono text-xs font-medium text-[#0B357B] group-hover:border-[#1A73C3] group-hover:text-[#1A73C3] group-hover:bg-blue-50/20 transition-all shadow-2xs">
                    <span>{dict.eventsPage.registerIndico}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Host a Roadshow CTA Box */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-10 border border-dashed border-slate-300 bg-white/70 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
          <div className="max-w-2xl">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight">
              {dict.eventsPage.hostCta.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-2">
              {dict.eventsPage.hostCta.description}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B357B] text-white font-mono text-xs sm:text-sm font-medium hover:bg-[#1A73C3] transition-colors shrink-0 shadow-xs group/btn"
          >
            <span>{dict.eventsPage.hostCta.action}</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

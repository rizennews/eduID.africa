"use client";

import * as React from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

interface BonafIdRequestSectionProps {
  locale?: Locale;
  dict: {
    bonafidPage: {
      requestSection: {
        title: string;
        description: string;
        visitWebsite?: string;
        card1?: {
          title: string;
          description: string;
          action: string;
          href: string;
        };
        card2?: {
          title: string;
          description: string;
          action: string;
          href: string;
        };
      };
    };
  };
}

export function BonafIdRequestSection({ dict }: BonafIdRequestSectionProps) {
  const { requestSection } = dict.bonafidPage;

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Primary Action (Heading removed per request) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-sans leading-relaxed font-normal">
              {requestSection.description}
            </p>

            <div className="pt-2">
              <a
                href="https://bonafid.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 h-11 px-6 rounded-full bg-[#0B357B] text-white text-sm font-medium hover:bg-[#1A73C3] transition-colors shadow-2xs"
              >
                <span>{requestSection.visitWebsite || "Visit BonafID website"}</span>
                <span className="font-mono font-bold transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: BonafID Logo */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm p-6 sm:p-8 rounded-2xl bg-[#0B357B] border border-blue-900/30 shadow-md flex items-center justify-center">
              <Image
                src="/BonafID-Logo.png"
                alt="BonafID Logo"
                width={260}
                height={80}
                unoptimized
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

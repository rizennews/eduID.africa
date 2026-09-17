"use client";

import * as React from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

interface GetStartedStepsSectionProps {
  locale?: Locale;
  dict: {
    getStartedPage: {
      stepsSection: {
        title: string;
        step1: {
          num: string;
          title: string;
          description: string;
          platforms: string[];
          playStore: string;
          appStore: string;
        };
        step2: {
          num: string;
          title: string;
          description: string;
          mockupLabel: string;
          mockupTitle: string;
          mockupUsername: string;
          mockupAction: string;
        };
        step3: {
          num: string;
          title: string;
          description: string;
          accessLabel: string;
          accessItems: string[];
        };
      };
    };
  };
}

export function GetStartedStepsSection({ locale: _locale, dict }: GetStartedStepsSectionProps) {
  const { stepsSection } = dict.getStartedPage;
  const { step1, step2, step3 } = stepsSection;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (No Eyebrow) */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {stepsSection.title}
          </h2>
        </div>

        {/* Steps Sequence Ledger */}
        <div className="border-t border-dashed border-slate-300 divide-y divide-dashed divide-slate-300/80">
          {/* STEP 1: Download geteduroam app */}
          <div className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-sm font-semibold text-[#0B357B] shadow-2xs shrink-0">
                  {step1.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {step1.title}
                </h3>
              </div>

              <p className="font-sans text-slate-600 text-base leading-relaxed font-normal pt-1">
                {step1.description}
              </p>

              {/* Supported Platforms Ledger (Slash-separated, no bullet dots) */}
              <div className="pt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono text-slate-500">
                {step1.platforms.map((platform, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-slate-700 font-medium">{platform}</span>
                    {idx < step1.platforms.length - 1 && (
                      <span className="text-slate-300" aria-hidden="true">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* App Store Download Badges */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 lg:pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=app.eduroam.geteduroam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-300 bg-white hover:border-[#0B357B] hover:bg-slate-50 transition-all shadow-2xs group w-full"
              >
                <img
                  src="/google-play.svg"
                  alt="Google Play"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="text-left min-w-0">
                  <span className="block text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider leading-none truncate">
                    Android
                  </span>
                  <span className="block text-xs font-medium font-sans text-slate-800 group-hover:text-[#0B357B] truncate">
                    {step1.playStore}
                  </span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/app/geteduroam/id1504076137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-300 bg-white hover:border-[#0B357B] hover:bg-slate-50 transition-all shadow-2xs group w-full"
              >
                <img
                  src="/app-store.svg"
                  alt="App Store"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="text-left min-w-0">
                  <span className="block text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider leading-none truncate">
                    iOS &amp; Apple
                  </span>
                  <span className="block text-xs font-medium font-sans text-slate-800 group-hover:text-[#0B357B] truncate">
                    {step1.appStore}
                  </span>
                </div>
              </a>

              <a
                href="https://www.geteduroam.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-300 bg-white hover:border-[#0B357B] hover:bg-slate-50 transition-all shadow-2xs group w-full"
              >
                <img
                  src="/windows.svg"
                  alt="Windows"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="text-left min-w-0">
                  <span className="block text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider leading-none truncate">
                    Windows
                  </span>
                  <span className="block text-xs font-medium font-sans text-slate-800 group-hover:text-[#0B357B] truncate">
                    {(step1 as any).windowsStore || "Get for Windows"}
                  </span>
                </div>
              </a>

              <a
                href="https://www.geteduroam.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-300 bg-white hover:border-[#0B357B] hover:bg-slate-50 transition-all shadow-2xs group w-full"
              >
                <img
                  src="/linux.svg"
                  alt="Linux"
                  className="w-7 h-7 object-contain shrink-0"
                />
                <div className="text-left min-w-0">
                  <span className="block text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider leading-none truncate">
                    Linux
                  </span>
                  <span className="block text-xs font-medium font-sans text-slate-800 group-hover:text-[#0B357B] truncate">
                    {(step1 as any).linuxStore || "Get for Linux"}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* STEP 2: Sign in with your institutional account */}
          <div className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center font-mono text-sm font-semibold text-[#0B357B] shadow-2xs shrink-0">
                  {step2.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {step2.title}
                </h3>
              </div>

              <p className="font-sans text-slate-600 text-base leading-relaxed font-normal pt-1">
                {step2.description}
              </p>
            </div>

            {/* Interactive geteduroam Login Screen Mockup */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <div className="w-full max-w-sm border border-dashed border-slate-300 bg-slate-50/70 p-6 rounded-2xl shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-200">
                  <span className="font-mono text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {step2.mockupLabel}
                  </span>
                </div>
                <div className="pt-4 space-y-3">
                  <h4 className="font-serif text-lg font-normal text-[#0B357B]">
                    {step2.mockupTitle}
                  </h4>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 flex items-center justify-between">
                      <span className="font-sans text-xs sm:text-[13px] text-slate-700">
                        {step2.mockupUsername}
                      </span>
                      <span className="text-slate-300 text-[10px] font-mono">IDP</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-white text-slate-400 tracking-widest text-xs">
                      ••••••••
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-full bg-[#0B357B] text-white font-mono text-xs font-medium hover:bg-[#1A73C3] transition-colors shadow-2xs"
                  >
                    {step2.mockupAction}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: You're connected — everywhere */}
          <div className="py-10 sm:py-12 space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#1A73C3] text-white flex items-center justify-center font-mono text-sm font-bold shadow-2xs shrink-0">
                  {step3.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0B357B] tracking-tight leading-snug">
                  {step3.title}
                </h3>
              </div>

              <p className="font-sans text-slate-600 text-base leading-relaxed font-normal pt-1">
                {step3.description}
              </p>
            </div>

            {/* Access Capabilities Ledger Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70">
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1A73C3] mb-3">
                {step3.accessLabel}
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-sans font-medium text-slate-700">
                {step3.accessItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hover:text-[#0B357B] transition-colors">{item}</span>
                    {idx < step3.accessItems.length - 1 && (
                      <span className="text-slate-300" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

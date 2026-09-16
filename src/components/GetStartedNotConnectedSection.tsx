import * as React from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface GetStartedNotConnectedSectionProps {
  locale: Locale;
  dict: {
    getStartedPage?: {
      notConnectedSection?: {
        title: string;
        description: string;
        actionAdmins: string;
        actionContact: string;
      };
    };
  };
}

export function GetStartedNotConnectedSection({
  locale,
  dict,
}: GetStartedNotConnectedSectionProps) {
  const sectionData = dict.getStartedPage?.notConnectedSection || {
    title: "Is your institution not connected yet?",
    description:
      "If your university doesn't appear in the directory, the path forward depends on your country's NREN. We can point you to the right contact — or help your IT team start the onboarding process directly.",
    actionAdmins: "Information for IT admins",
    actionContact: "Contact the eduID.africa team",
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-dashed border-slate-300 rounded-2xl bg-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xs">
          {/* Subtle background radial tint */}
          <div
            className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-transparent blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            {/* Main Headline */}
            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#0B357B] tracking-tight leading-tight">
              {sectionData.title}
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {sectionData.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/for-institutions`}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0B357B] text-white font-mono text-xs sm:text-sm font-medium hover:bg-[#1A73C3] transition-all shadow-2xs active:scale-[0.98]"
              >
                <span>{sectionData.actionAdmins}</span>
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full border border-slate-300 bg-white text-slate-800 font-mono text-xs sm:text-sm font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-all shadow-2xs active:scale-[0.98]"
              >
                <span>{sectionData.actionContact}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

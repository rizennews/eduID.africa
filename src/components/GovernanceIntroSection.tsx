"use client";

import * as React from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

interface GovernanceIntroSectionProps {
  locale?: Locale;
  dict: {
    governanceSection: {
      title: string;
      partner1: string;
      partner2: string;
      partner3: string;
      partner4: string;
      partner5: string;
      partner6: string;
    };
    governancePage: {
      intro: {
        headline1: string;
        headline2: string;
        description: string;
      };
    };
  };
}

const PARTNER_LOGOS = [
  {
    name: "UbuntuNet Alliance",
    logoSrc: "/networks-logo/ubuntunet-alliance.png",
    width: 150,
    height: 44,
    className: "max-h-8 sm:max-h-9 w-auto max-w-[90%] object-contain",
  },
  {
    name: "WACREN",
    logoSrc: "/networks-logo/wacren.png",
    width: 120,
    height: 38,
    className: "max-h-7 sm:max-h-8 w-auto object-contain",
  },
  {
    name: "ASREN",
    logoSrc: "/networks-logo/asren.png",
    width: 110,
    height: 38,
    className: "max-h-7 sm:max-h-8 w-auto object-contain",
  },
  {
    name: "eduGAIN",
    logoSrc: "/networks-logo/eduGAIN.png",
    width: 130,
    height: 36,
    className: "max-h-6 sm:max-h-7 w-auto object-contain",
  },
  {
    name: "AfricaConnect4",
    logoSrc: "/networks-logo/africaconnect4.webp",
    width: 120,
    height: 40,
    className: "max-h-7 sm:max-h-8 w-auto object-contain",
  },
  {
    name: "GÉANT",
    logoSrc: "/networks-logo/geant.jpg",
    width: 120,
    height: 36,
    className: "max-h-6 sm:max-h-7 w-auto object-contain",
  },
];

export function GovernanceIntroSection({
  locale: _locale,
  dict,
}: GovernanceIntroSectionProps) {
  return (
    <section className="border-y border-dashed border-slate-300 py-12 sm:py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-serif font-normal text-[#0B357B] tracking-tight leading-[1.2]">
              <span>{dict.governancePage.intro.headline1}</span>{" "}
              <span className="text-[#1A73C3] block mt-2">
                {dict.governancePage.intro.headline2}
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative & Partner Logos Strip */}
          <div className="lg:col-span-7 lg:border-l lg:border-dashed lg:border-slate-300 lg:pl-12 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
              {dict.governancePage.intro.description}
            </p>

            {/* Embedded Partner Logos */}
            <div className="pt-6 border-t border-dashed border-slate-200">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                {dict.governanceSection.title}
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 items-center">
                {PARTNER_LOGOS.map((partner) => (
                  <div
                    key={partner.name}
                    className="h-14 sm:h-16 rounded-xl bg-white border border-dashed border-slate-300 p-2 flex items-center justify-center hover:border-slate-400 hover:bg-slate-50/50 transition-all select-none"
                    title={partner.name}
                  >
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      unoptimized
                      className={partner.className}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

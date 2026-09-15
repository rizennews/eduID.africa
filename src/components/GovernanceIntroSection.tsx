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
    width: 140,
    height: 42,
    className: "max-h-8 sm:max-h-9 w-auto object-contain",
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
    <section className="pt-10 sm:pt-12 pb-6 sm:pb-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Executive Card: Standards-aligned Governance Statement */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Display Headline */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-[1.15]">
                <span>{dict.governancePage.intro.headline1}</span>{" "}
                <span className="text-[#1A73C3] block mt-1.5">
                  {dict.governancePage.intro.headline2}
                </span>
              </h2>
            </div>

            {/* Right Column: Refined Narrative with Divider & Partner Logos Strip */}
            <div className="lg:col-span-7 lg:border-l lg:border-slate-200/90 lg:pl-12 space-y-6">
              <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed font-normal">
                {dict.governancePage.intro.description}
              </p>

              {/* Embedded Partner Logos */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                  {dict.governanceSection.title}
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 items-center">
                  {PARTNER_LOGOS.map((partner) => (
                    <div
                      key={partner.name}
                      className="h-16 sm:h-18 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-2.5 flex items-center justify-center hover:bg-white hover:border-slate-300 hover:shadow-2xs transition-all select-none"
                      title={partner.name}
                    >
                      <Image
                        src={partner.logoSrc}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        className={partner.className}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

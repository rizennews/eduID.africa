"use client";

import * as React from "react";
import Image from "next/image";
import { CircleCheckIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface LeadershipRoleData {
  role: string;
  entity: string;
  scope: string[];
}

interface GovernanceLeadershipSectionProps {
  locale?: Locale;
  dict: {
    governancePage: {
      leadershipSection: {
        kicker: string;
        title: string;
        subtitle: string;
        roles: {
          programmeLead: LeadershipRoleData;
          technicalLead: LeadershipRoleData;
          communications: LeadershipRoleData;
          regionalPartnerEastSouth: LeadershipRoleData;
          regionalPartnerNorth: LeadershipRoleData;
          technicalPartner: LeadershipRoleData;
        };
      };
    };
  };
}

interface RoleCardConfig {
  key: keyof GovernanceLeadershipSectionProps["dict"]["governancePage"]["leadershipSection"]["roles"];
  logoSrc: string;
  logoAlt: string;
  badgeClass: string;
  logoWidth: number;
  logoHeight: number;
}

const ROLE_CONFIGS: RoleCardConfig[] = [
  {
    key: "programmeLead",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    badgeClass: "bg-blue-50 text-[#0B357B] border-blue-200/80",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "technicalLead",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    badgeClass: "bg-sky-50 text-[#1A73C3] border-sky-200/80",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "communications",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    badgeClass: "bg-amber-50 text-amber-900 border-amber-200/80",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "regionalPartnerEastSouth",
    logoSrc: "/networks-logo/ubuntunet-alliance.png",
    logoAlt: "UbuntuNet Alliance Logo",
    badgeClass: "bg-emerald-50 text-emerald-900 border-emerald-200/80",
    logoWidth: 150,
    logoHeight: 45,
  },
  {
    key: "regionalPartnerNorth",
    logoSrc: "/networks-logo/asren.png",
    logoAlt: "ASREN Logo",
    badgeClass: "bg-teal-50 text-teal-900 border-teal-200/80",
    logoWidth: 110,
    logoHeight: 40,
  },
  {
    key: "technicalPartner",
    logoSrc: "/networks-logo/geant.jpg",
    logoAlt: "GÉANT Logo",
    badgeClass: "bg-indigo-50 text-indigo-900 border-indigo-200/80",
    logoWidth: 110,
    logoHeight: 38,
  },
];

export function GovernanceLeadershipSection({
  locale: _locale,
  dict,
}: GovernanceLeadershipSectionProps) {
  const section = dict.governancePage.leadershipSection;

  return (
    <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.subtitle}
          </p>
        </div>

        {/* 6-Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ROLE_CONFIGS.map((config) => {
            const roleData = section.roles[config.key];
            if (!roleData) return null;

            return (
              <div
                key={config.key}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Role Badge & Partner Logo */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold font-outfit uppercase tracking-wider whitespace-nowrap shrink-0 border ${config.badgeClass}`}
                    >
                      {roleData.role}
                    </span>

                    <div className="h-10 sm:h-12 flex items-center justify-end shrink-0 min-w-0">
                      <Image
                        src={config.logoSrc}
                        alt={config.logoAlt}
                        width={config.logoWidth}
                        height={config.logoHeight}
                        unoptimized
                        className="max-h-10 sm:max-h-11 w-auto max-w-[150px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Entity / Leadership Title */}
                  <h3 className="text-xl font-bold font-heading text-[#0A162B] tracking-tight mt-4 mb-2">
                    {roleData.entity}
                  </h3>
                </div>

                {/* Scope of Responsibility List */}
                <div className="pt-4 border-t border-slate-100/90 mt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
                    Responsibilities
                  </span>
                  <ul className="space-y-2">
                    {roleData.scope.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed group/item"
                      >
                        <CircleCheckIcon
                          size={15}
                          className="p-0 hover:bg-transparent text-[#1A73C3] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import { CircleCheckIcon, type CircleCheckIconHandle } from "@/components/icons";
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
  logoWidth: number;
  logoHeight: number;
}

const ROLE_CONFIGS: RoleCardConfig[] = [
  {
    key: "programmeLead",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "technicalLead",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "communications",
    logoSrc: "/networks-logo/wacren.png",
    logoAlt: "WACREN Logo",
    logoWidth: 100,
    logoHeight: 32,
  },
  {
    key: "regionalPartnerEastSouth",
    logoSrc: "/networks-logo/ubuntunet-alliance.png",
    logoAlt: "UbuntuNet Alliance Logo",
    logoWidth: 150,
    logoHeight: 45,
  },
  {
    key: "regionalPartnerNorth",
    logoSrc: "/networks-logo/asren.png",
    logoAlt: "ASREN Logo",
    logoWidth: 110,
    logoHeight: 40,
  },
  {
    key: "technicalPartner",
    logoSrc: "/networks-logo/geant.jpg",
    logoAlt: "GÉANT Logo",
    logoWidth: 110,
    logoHeight: 38,
  },
];

function ResponsibilityItem({ item }: { item: string }) {
  const iconRef = React.useRef<CircleCheckIconHandle>(null);

  return (
    <li
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed group/item cursor-default"
    >
      <CircleCheckIcon
        ref={iconRef}
        size={15}
        className="p-0 hover:bg-transparent text-[#1A73C3] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
      />
      <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
    </li>
  );
}

function LeadershipRoleCard({
  config,
  roleData,
}: {
  config: RoleCardConfig;
  roleData: LeadershipRoleData;
}) {
  return (
    <div className="p-6 sm:p-7 bg-white border border-dashed border-slate-300 hover:border-[#1A73C3]/60 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Bar: Role Pill & Partner Logo */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-dashed border-slate-200">
          <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-700 bg-slate-100/80 border border-slate-200 rounded">
            {roleData.role}
          </span>

          <div className="h-8 sm:h-9 flex items-center justify-end shrink-0 min-w-0">
            <Image
              src={config.logoSrc}
              alt={config.logoAlt}
              width={config.logoWidth}
              height={config.logoHeight}
              unoptimized
              className="max-h-7 sm:max-h-8 w-auto max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Entity / Leadership Title */}
        <h3 className="text-xl font-serif font-normal text-[#0B357B] tracking-tight mt-5 mb-2 group-hover:text-[#1A73C3] transition-colors">
          {roleData.entity}
        </h3>
      </div>

      {/* Scope of Responsibility List */}
      <div className="pt-4 border-t border-dashed border-slate-200 mt-5">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-3">
          Responsibilities
        </span>
        <ul className="space-y-2.5">
          {roleData.scope.map((item, idx) => (
            <ResponsibilityItem key={idx} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function GovernanceLeadershipSection({
  locale: _locale,
  dict,
}: GovernanceLeadershipSectionProps) {
  const section = dict.governancePage.leadershipSection;

  return (
    <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#0B357B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.subtitle}
          </p>
        </div>

        {/* 6-Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ROLE_CONFIGS.map((config) => {
            const roleData = section.roles[config.key];
            if (!roleData) return null;

            return (
              <LeadershipRoleCard
                key={config.key}
                config={config}
                roleData={roleData}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


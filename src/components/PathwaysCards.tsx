"use client";

import * as React from "react";
import Link from "next/link";
import {
  WorkflowIcon,
  CloudSyncIcon,
  GraduationCapIcon,
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface PathwayCardData {
  tag: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  number?: string;
}

interface PathwaysCardsProps {
  locale: Locale;
  dict: {
    pathways: {
      card1: PathwayCardData;
      card2: PathwayCardData;
      card3: PathwayCardData;
    };
  };
}

interface PathwayConfig {
  tag: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  number: string;
  trackLabel: string;
  chips: string[];
  icon: React.ComponentType<{ ref?: React.Ref<any>; size?: number; className?: string }>;
  iconColor: string;
  iconBg: string;
  cornerGradient: string;
  buttonStyle: string;
}

function PathwayCardItem({
  card,
  locale,
}: {
  card: PathwayConfig;
  locale: Locale;
}) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const iconRef = React.useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);
  const Icon = card.icon;

  const handleMouseEnter = () => {
    arrowRef.current?.startAnimation();
    iconRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    arrowRef.current?.stopAnimation();
    iconRef.current?.stopAnimation();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:shadow-slate-900/[0.06] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 p-7 sm:p-8 group overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting in Top-Right Corner */}
      <div
        className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-bl ${card.cornerGradient} blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60`}
      />

      {/* Card Body */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Meta Bar: Minimal Icon + Technical Track Number */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-200 shadow-2xs ${card.iconBg}`}
          >
            <Icon ref={iconRef} size={22} className={`p-0 hover:bg-transparent ${card.iconColor}`} />
          </div>

          <div className="text-right">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-400 block">
              {card.number}
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 block mt-0.5">
              {card.trackLabel}
            </span>
          </div>
        </div>

        {/* Card Title */}
        <h2 className="font-heading font-extrabold text-xl sm:text-[22px] text-[#0A162B] tracking-tight leading-snug group-hover:text-slate-900 transition-colors">
          {card.title}
        </h2>

        {/* Card Description */}
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-3 flex-1 font-normal">
          {card.description}
        </p>

        {/* Technical Capability Micro-Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5 mb-8">
          {card.chips.map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[11px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Row: Seamless Integrated Button */}
      <div className="relative z-10 mt-auto pt-2">
        <Link
          href={`/${locale}${card.href}`}
          className={`group/btn inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-[13px] font-bold font-outfit uppercase tracking-wider transition-all duration-150 active:scale-[0.98] select-none cursor-pointer ${card.buttonStyle}`}
        >
          <span>{card.cta.replace(/→\s*$/, "").trim()}</span>
          <ArrowRightIcon
            ref={arrowRef}
            size={15}
            className="p-0 hover:bg-transparent group-hover/btn:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}

export function PathwaysCards({ locale, dict }: PathwaysCardsProps) {
  const cards: PathwayConfig[] = [
    {
      ...dict.pathways.card1,
      number: "01",
      trackLabel: locale === "fr" ? "Voie Nationale" : locale === "pt" ? "Via Nacional" : "Sovereign NREN",
      chips:
        locale === "fr"
          ? ["IdP Souverain", "Interconnexion", "T&I Roadshows"]
          : locale === "pt"
          ? ["IdP Soberano", "Peering NREN", "T&I Roadshows"]
          : ["Sovereign IdP", "Peering Framework", "T&I Roadshows"],
      icon: WorkflowIcon,
      iconColor: "text-[#0B357B]",
      iconBg: "bg-blue-50/70 border-blue-200/60 group-hover:border-blue-300",
      cornerGradient: "from-[#0B357B]/[0.08] via-[#0B357B]/[0.02] to-transparent",
      buttonStyle: "bg-[#0B357B] hover:bg-[#072559] text-white shadow-2xs hover:shadow-xs",
    },
    {
      ...dict.pathways.card2,
      number: "02",
      trackLabel: locale === "fr" ? "Voie Catchall" : locale === "pt" ? "Via Catchall" : "Cloud Catchall",
      chips:
        locale === "fr"
          ? ["IAM Cloud", "Zéro sur site", "BonafID Clé en main"]
          : locale === "pt"
          ? ["IAM em Nuvem", "Sem Servidores", "BonafID Turnkey"]
          : ["Cloud-Hosted IAM", "Zero On-Premises", "BonafID Turnkey"],
      icon: CloudSyncIcon,
      iconColor: "text-[#DE4A1B]",
      iconBg: "bg-orange-50/70 border-orange-200/60 group-hover:border-orange-300",
      cornerGradient: "from-[#DE4A1B]/[0.08] via-[#DE4A1B]/[0.02] to-transparent",
      buttonStyle: "bg-[#DE4A1B] hover:bg-[#c43e14] text-white shadow-2xs hover:shadow-xs",
    },
    {
      ...dict.pathways.card3,
      number: "03",
      trackLabel: locale === "fr" ? "Annuaire Campus" : locale === "pt" ? "Diretório Campus" : "Institution Directory",
      chips:
        locale === "fr"
          ? ["Wi-Fi eduroam", "Accès eduGAIN", "Vérification Campus"]
          : locale === "pt"
          ? ["Wi-Fi eduroam", "Acesso eduGAIN", "Verificação Campus"]
          : ["eduroam Wi-Fi", "eduGAIN Access", "Campus Lookup"],
      icon: GraduationCapIcon,
      iconColor: "text-[#1A73C3]",
      iconBg: "bg-sky-50/70 border-sky-200/60 group-hover:border-sky-300",
      cornerGradient: "from-[#1A73C3]/[0.08] via-[#1A73C3]/[0.02] to-transparent",
      buttonStyle: "bg-[#0A162B] hover:bg-[#1A73C3] text-white shadow-2xs hover:shadow-xs",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {cards.map((card, idx) => (
            <PathwayCardItem key={idx} card={card} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

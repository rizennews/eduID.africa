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

function PathwayCardItem({
  card,
  locale,
}: {
  card: {
    tag: string;
    title: string;
    description: string;
    cta: string;
    href: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    tagStyle: string;
    buttonStyle: string;
    iconColor: string;
  };
  locale: Locale;
}) {
  const arrowRef = React.useRef<ArrowRightIconHandle>(null);
  const Icon = card.icon;

  return (
    <div className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-300 shadow-md shadow-slate-900/[0.04] p-6 sm:p-7">
      {/* Card Body */}
      <div className="flex-1 flex flex-col">
        {/* Eyebrow / Tag Badge with Lucide-Animated Micro-Icon */}
        <div className="mb-3.5">
          <span
            className={`inline-flex items-center gap-1.5 font-outfit text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${card.tagStyle}`}
          >
            <Icon size={14} className={card.iconColor} />
            <span>{card.tag}</span>
          </span>
        </div>

        {/* Card Title */}
        <h2 className="font-heading font-bold text-xl sm:text-[22px] text-[#0A162B] tracking-tight mb-2.5 leading-snug">
          {card.title}
        </h2>

        {/* Card Description */}
        <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed flex-1 mb-5">
          {card.description}
        </p>
      </div>

      {/* Card Footer: Action Button with Animated Arrow */}
      <div className="pt-5 border-t border-slate-200 mt-auto">
        <Link
          href={`/${locale}${card.href}`}
          onMouseEnter={() => arrowRef.current?.startAnimation()}
          onMouseLeave={() => arrowRef.current?.stopAnimation()}
          className={`group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-outfit transition-all active:scale-[0.98] select-none ${card.buttonStyle}`}
        >
          <span>{card.cta.replace(/→\s*$/, "").trim()}</span>
          <ArrowRightIcon ref={arrowRef} size={15} />
        </Link>
      </div>
    </div>
  );
}

export function PathwaysCards({ locale, dict }: PathwaysCardsProps) {
  const cards = [
    {
      ...dict.pathways.card1,
      icon: WorkflowIcon,
      iconColor: "text-[#0B357B]",
      tagStyle: "text-[#0B357B] bg-blue-50/90 border border-blue-200",
      buttonStyle: "bg-[#0B357B] text-white hover:bg-[#082659]",
    },
    {
      ...dict.pathways.card2,
      icon: CloudSyncIcon,
      iconColor: "text-[#DE4A1B]",
      tagStyle: "text-[#DE4A1B] bg-orange-50/90 border border-orange-200",
      buttonStyle: "bg-[#DE4A1B] text-white hover:bg-[#c43e14]",
    },
    {
      ...dict.pathways.card3,
      icon: GraduationCapIcon,
      iconColor: "text-[#1A73C3]",
      tagStyle: "text-[#1A73C3] bg-sky-50/90 border border-sky-200",
      buttonStyle: "bg-white border-2 border-slate-300 text-slate-800 hover:bg-slate-50",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 bg-[#F1F5F9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {cards.map((card, idx) => (
            <PathwayCardItem key={idx} card={card} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

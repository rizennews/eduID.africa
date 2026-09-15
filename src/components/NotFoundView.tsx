"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
  EarthIcon,
  type EarthIconHandle,
  WorkflowIcon,
  type WorkflowIconHandle,
  ShieldCheckIcon,
  type ShieldCheckIconHandle,
  GraduationCapIcon,
  type GraduationCapIconHandle,
} from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface DestinationItem {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface NotFoundViewProps {
  locale?: Locale;
  dict: any;
}

function DestinationCard({
  item,
  locale,
  icon: Icon,
}: {
  item: DestinationItem;
  locale: Locale;
  icon: React.ComponentType<{ ref?: React.Ref<any>; size?: number; className?: string }>;
}) {
  const iconRef = React.useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);

  return (
    <Link
      href={`/${locale}${item.href}`}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between text-left cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-slate-100 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors">
            <Icon ref={iconRef} size={18} className="p-0 hover:bg-transparent" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Federation
          </span>
        </div>
        <h4 className="text-sm font-bold font-heading text-[#0A162B] group-hover:text-[#0B357B] transition-colors leading-snug">
          {item.title}
        </h4>
        <p className="text-xs text-slate-500 font-sans mt-1.5 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1A73C3] group-hover:text-[#0B357B] transition-colors">
        <span>{item.cta}</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

export function NotFoundView({ locale = "en", dict }: NotFoundViewProps) {
  const pageDict = dict.notFoundPage || {
    badge: "404 Error · Route Not Found",
    title: "Identity not found on this path",
    description:
      "The page, federation resource, or document you requested could not be located. It may have moved or does not exist across the continental network.",
    homeButton: "Back to Home",
    mapButton: "Explore Federation Map",
    destinationsLabel: "POPULAR FEDERATION DESTINATIONS",
    destinations: [
      {
        id: "map",
        title: "Federation Map",
        description: "Interactive coverage across 54 African nations and sovereign NRENs.",
        href: "/federation-map",
        cta: "View Map",
      },
      {
        id: "how-it-works",
        title: "Three Layers",
        description: "BonafID campus IAM, continental federation, and geteduroam.",
        href: "/how-it-works",
        cta: "Learn More",
      },
      {
        id: "governance",
        title: "Governance & Policies",
        description: "Operational leadership, AfricaConnect4 programme, and policy documents.",
        href: "/governance",
        cta: "Read Policies",
      },
      {
        id: "about",
        title: "About eduID",
        description: "Continental Trust & Identity governed by UbuntuNet, WACREN, and ASREN.",
        href: "/about",
        cta: "About Us",
      },
    ],
  };

  const homeArrowRef = React.useRef<ArrowRightIconHandle>(null);
  const mapEarthRef = React.useRef<EarthIconHandle>(null);

  const iconsMap: Record<string, any> = {
    map: EarthIcon,
    "how-it-works": WorkflowIcon,
    governance: ShieldCheckIcon,
    about: GraduationCapIcon,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A162B]">
      {/* Site Header */}
      <Header locale={locale} dict={dict} />

      {/* Main 404 Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle Background Radial Gradients */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0B357B]/5 via-[#1A73C3]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          {/* Eyebrow / Error Code Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[#DE4A1B] text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#DE4A1B] animate-pulse" />
            <span>{pageDict.badge}</span>
          </div>

          {/* Sculpted 404 Number Display */}
          <div className="relative select-none my-2">
            <div className="text-8xl sm:text-9xl lg:text-[140px] font-extrabold font-heading tracking-tight leading-none text-[#0A162B]">
              <span className="text-[#0B357B]">4</span>
              <span className="mx-1 relative inline-block text-[#1A73C3]">
                0
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DE4A1B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#DE4A1B]"></span>
                </span>
              </span>
              <span className="text-[#0B357B]">4</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0A162B] tracking-tight max-w-2xl mx-auto">
            {pageDict.title}
          </h1>

          {/* Narrative */}
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            {pageDict.description}
          </p>

          {/* Recovery Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href={`/${locale}`}
              onMouseEnter={() => homeArrowRef.current?.startAnimation()}
              onMouseLeave={() => homeArrowRef.current?.stopAnimation()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#0B357B] hover:bg-[#072352] text-white text-sm font-bold font-sans shadow-sm hover:shadow transition-all duration-150 w-full sm:w-auto cursor-pointer group"
            >
              <span>{pageDict.homeButton}</span>
              <ArrowRightIcon
                ref={homeArrowRef}
                size={16}
                className="p-0 hover:bg-transparent text-white group-hover:translate-x-0.5 transition-transform"
              />
            </Link>

            <Link
              href={`/${locale}/federation-map`}
              onMouseEnter={() => mapEarthRef.current?.startAnimation()}
              onMouseLeave={() => mapEarthRef.current?.stopAnimation()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 text-sm font-bold font-sans shadow-2xs transition-all duration-150 w-full sm:w-auto cursor-pointer group"
            >
              <EarthIcon
                ref={mapEarthRef}
                size={16}
                className="p-0 hover:bg-transparent text-slate-500 group-hover:text-slate-900 transition-colors"
              />
              <span>{pageDict.mapButton}</span>
            </Link>
          </div>

          {/* Popular Federation Destinations */}
          <div className="mt-14 sm:mt-18 pt-10 border-t border-slate-200/70">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-6">
              {pageDict.destinationsLabel}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pageDict.destinations.map((dest: DestinationItem) => (
                <DestinationCard
                  key={dest.id}
                  item={dest}
                  locale={locale}
                  icon={iconsMap[dest.id] || EarthIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Signature Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

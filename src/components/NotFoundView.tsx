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
} from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface NotFoundViewProps {
  locale?: Locale;
  dict: any;
}

export function NotFoundView({ locale = "en", dict }: NotFoundViewProps) {
  const pageDict = dict.notFoundPage || {
    title: "Identity not found on this path",
    description:
      "The page, federation resource, or document you requested could not be located. It may have moved or does not exist across the continental network.",
    homeButton: "Back to Home",
    mapButton: "Explore Federation Map",
  };

  const homeArrowRef = React.useRef<ArrowRightIconHandle>(null);
  const mapEarthRef = React.useRef<EarthIconHandle>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A162B]">
      {/* Site Header */}
      <Header locale={locale} dict={dict} />

      {/* Main 404 Minimal Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Clean Minimal 404 Number */}
          <div className="select-none mb-3">
            <span className="text-8xl sm:text-9xl lg:text-[140px] font-extrabold font-heading tracking-tight leading-none text-[#0B357B]">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0A162B] tracking-tight">
            {pageDict.title}
          </h1>

          {/* Narrative */}
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
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
        </div>
      </main>

      {/* Signature Wordmark Footer */}
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

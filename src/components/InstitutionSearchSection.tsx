"use client";

import * as React from "react";
import Link from "next/link";
import { SearchIcon } from "@/components/icons";
import { getInstitutions, type InstitutionStatus } from "@/data/institutions";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface InstitutionSearchSectionProps {
  locale: Locale;
  dict: {
    getStartedPage: {
      institutionSearch: {
        title: string;
        subtitle: string;
        searchPlaceholder: string;
        searchButton: string;
        filterAll: string;
        filterNational: string;
        filterCatchall: string;
        filterNotConnected: string;
        servicesLabel: string;
        noResults: string;
        requestOnboarding: string;
        statusLabels: {
          national: string;
          catchall: string;
          notConnected: string;
        };
      };
    };
  };
}

export function InstitutionSearchSection({ locale, dict }: InstitutionSearchSectionProps) {
  const searchConfig = dict.getStartedPage.institutionSearch;
  const allInstitutions = React.useMemo(() => getInstitutions(locale), [locale]);

  const [query, setQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<"all" | InstitutionStatus>("all");

  const filteredInstitutions = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return allInstitutions.filter((inst) => {
      // Status filter
      if (activeFilter !== "all" && inst.statusType !== activeFilter) {
        return false;
      }
      // Text query match (name, country, or federation)
      if (!q) return true;
      return (
        inst.name.toLowerCase().includes(q) ||
        inst.country.toLowerCase().includes(q) ||
        inst.federation.toLowerCase().includes(q)
      );
    });
  }, [allInstitutions, query, activeFilter]);

  const filterTabs: Array<{ id: "all" | InstitutionStatus; label: string }> = [
    { id: "all", label: searchConfig.filterAll },
    { id: "national", label: searchConfig.filterNational },
    { id: "catchall", label: searchConfig.filterCatchall },
    { id: "not-connected", label: searchConfig.filterNotConnected },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {searchConfig.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {searchConfig.subtitle}
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Main Search Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <SearchIcon size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchConfig.searchPlaceholder}
                className="w-full h-12 pl-11 pr-4 rounded-full border border-slate-300 bg-white text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A73C3] focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="h-12 px-7 rounded-full bg-[#0B357B] text-white font-mono text-xs sm:text-sm font-medium hover:bg-[#072454] shadow-2xs transition-all shrink-0 active:scale-[0.98]"
            >
              {searchConfig.searchButton}
            </button>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all",
                    isActive
                      ? "bg-[#0B357B] text-white shadow-2xs"
                      : "bg-white border border-slate-300/80 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Institutions Results Ledger */}
        <div className="border-y border-dashed border-slate-300 divide-y divide-dashed divide-slate-300/80 bg-white/60">
          {filteredInstitutions.length > 0 ? (
            filteredInstitutions.map((inst) => {
              return (
                <div
                  key={inst.id}
                  className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-200 hover:bg-slate-50/70 group"
                >
                  {/* Left: Name and Metadata Ledger */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
                      {inst.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono text-slate-600">
                      <span className="font-medium text-slate-800 font-sans">{inst.country}</span>
                      <span className="text-slate-300" aria-hidden="true">·</span>
                      <span className="text-slate-600 font-sans">{inst.federation}</span>
                      {inst.servicesCount > 0 && (
                        <>
                          <span className="text-slate-300" aria-hidden="true">·</span>
                          <span className="text-slate-500 font-sans">
                            {inst.servicesCount} {searchConfig.servicesLabel}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Status Badge & Connect Action */}
                  <div className="flex items-center gap-4 shrink-0 pt-2 sm:pt-0">
                    {inst.statusType === "national" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-2xs">
                        {searchConfig.statusLabels.national}
                      </span>
                    )}
                    {inst.statusType === "catchall" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-amber-200 bg-amber-50 text-amber-700 shadow-2xs">
                        {searchConfig.statusLabels.catchall}
                      </span>
                    )}
                    {inst.statusType === "not-connected" && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-300 bg-slate-100 text-slate-600 shadow-2xs">
                        {searchConfig.statusLabels.notConnected}
                      </span>
                    )}

                    {inst.statusType === "not-connected" ? (
                      <Link
                        href={`/${locale}/contact`}
                        className="text-xs sm:text-sm font-medium text-[#1A73C3] hover:underline underline-offset-4 transition-all"
                      >
                        Request connection →
                      </Link>
                    ) : (
                      <a
                        href="https://www.geteduroam.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#0B357B] group-hover:text-[#1A73C3] group-hover:underline underline-offset-4 transition-all"
                      >
                        <span>Connect</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="py-12 px-6 text-center space-y-4">
              <p className="text-base text-slate-600 font-sans">
                {searchConfig.noResults}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B357B] text-white font-mono text-xs font-medium hover:bg-[#1A73C3] transition-colors shadow-2xs"
              >
                <span>{searchConfig.requestOnboarding}</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

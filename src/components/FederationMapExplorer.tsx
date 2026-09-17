"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  type AfricanCountry,
  type FederationCategory,
  AFRICAN_COUNTRIES,
} from "@/data/african-countries";
import { InteractiveAfricaMap } from "@/components/InteractiveAfricaMap";
import { CountryFlag } from "@/components/ui/CountryFlag";
import {
  SearchIcon,
  Building2Icon,
  EarthIcon,
  ShieldCheckIcon,
  CircleCheckIcon,
} from "@/components/icons";
import { X, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface FederationMapExplorerProps {
  locale?: Locale;
  dict: {
    categories: {
      all: string;
      national_federation: string;
      catchall_bonafid: string;
      in_development: string;
      not_connected: string;
    };
    search: {
      placeholder: string;
      noResults: string;
    };
    cta: {
      headline: string;
      description: string;
      button: string;
    };
  };
}

export function FederationMapExplorer({
  locale = "en",
  dict,
}: FederationMapExplorerProps) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState<FederationCategory | "all">("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<AfricanCountry | null>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const inspectorRef = React.useRef<HTMLDivElement>(null);

  // Sync category filter from URL search params (e.g. /federation-map?category=national_federation)
  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (
      cat === "national_federation" ||
      cat === "catchall_bonafid" ||
      cat === "in_development" ||
      cat === "not_connected"
    ) {
      setSelectedCategory(cat);
      setTimeout(() => {
        mapContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [searchParams]);

  // Smooth scroll to inspector on mobile when a country is selected
  React.useEffect(() => {
    if (selectedCountry && typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        inspectorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [selectedCountry]);

  // Compute category counts
  const counts = React.useMemo(() => {
    return {
      all: AFRICAN_COUNTRIES.length,
      national_federation: AFRICAN_COUNTRIES.filter((c) => c.category === "national_federation").length,
      catchall_bonafid: AFRICAN_COUNTRIES.filter((c) => c.category === "catchall_bonafid").length,
      in_development: AFRICAN_COUNTRIES.filter((c) => c.category === "in_development").length,
      not_connected: AFRICAN_COUNTRIES.filter((c) => c.category === "not_connected").length,
    };
  }, []);

  // Filtered countries based on search and category
  const filteredCountries = React.useMemo(() => {
    return AFRICAN_COUNTRIES.filter((country) => {
      const matchesCategory =
        selectedCategory === "all" || country.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        country.name.toLowerCase().includes(q) ||
        country.iso2.toLowerCase().includes(q) ||
        country.nren.toLowerCase().includes(q) ||
        country.federationName.toLowerCase().includes(q) ||
        country.regionalRen.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Automatically select country if search results in an exact single match
  React.useEffect(() => {
    if (searchQuery.trim().length >= 2 && filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    }
  }, [searchQuery, filteredCountries]);

  const getCategoryBadge = (category: FederationCategory) => {
    switch (category) {
      case "national_federation":
        return {
          bg: "bg-blue-50 border-blue-200 text-[#0B357B]",
          label: dict.categories.national_federation,
        };
      case "catchall_bonafid":
        return {
          bg: "bg-orange-50 border-orange-200 text-[#DE4A1B]",
          label: dict.categories.catchall_bonafid,
        };
      case "in_development":
        return {
          bg: "bg-amber-50 border-amber-200 text-amber-800",
          label: dict.categories.in_development,
        };
      case "not_connected":
      default:
        return {
          bg: "bg-slate-100 border-slate-200 text-slate-600",
          label: dict.categories.not_connected,
        };
    }
  };

  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Top Controls: Search Bar & Category Filter Tabs */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {/* Minimal Search Input with Animated Search Icon & Dropdown */}
            <div className="relative w-full sm:max-w-md">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <SearchIcon size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder={dict.search.placeholder}
                className="w-full h-11 pl-10 pr-10 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0B357B] focus:ring-1 focus:ring-[#0B357B]/20 transition-all text-ellipsis"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}

              {/* Instant Search Results Dropdown Popover */}
              {isSearchOpen && searchQuery.trim() !== "" && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg border border-dashed border-slate-300 shadow-xl z-40 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-2 bg-slate-50 border-b border-dashed border-slate-200 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <span>Search Results ({filteredCountries.length})</span>
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                    >
                      Close ✕
                    </button>
                  </div>

                  {filteredCountries.length > 0 ? (
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {filteredCountries.slice(0, 8).map((c) => {
                        const badge = getCategoryBadge(c.category);
                        return (
                          <div
                            key={`search-drop-${c.iso2}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsSearchOpen(false);
                            }}
                            className="p-3 hover:bg-blue-50/50 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <CountryFlag iso2={c.iso2} name={c.name} className="w-5 h-3.5" />
                              <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                {c.iso2}
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-[#0B357B] font-sans truncate">
                                  {c.name}
                                </p>
                                <p className="text-[11px] text-slate-500 font-sans truncate">
                                  {c.nren} • {c.regionalRen}
                                </p>
                              </div>
                            </div>

                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 border ${badge.bg}`}
                            >
                              {badge.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500 font-sans">
                      {dict.search.noResults}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Total Filtered Count */}
            <div className="text-xs font-mono text-slate-500 text-left sm:text-right shrink-0">
              Showing <span className="font-bold text-[#0B357B]">{filteredCountries.length}</span> of 54 countries
            </div>
          </div>

          {/* Minimal Frankli Category Tabs (Horizontally scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: "all" as const, label: dict.categories.all, count: counts.all },
              {
                id: "national_federation" as const,
                label: dict.categories.national_federation,
                count: counts.national_federation,
              },
              {
                id: "catchall_bonafid" as const,
                label: dict.categories.catchall_bonafid,
                count: counts.catchall_bonafid,
              },
              {
                id: "in_development" as const,
                label: dict.categories.in_development,
                count: counts.in_development,
              },
              {
                id: "not_connected" as const,
                label: dict.categories.not_connected,
                count: counts.not_connected,
              },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-lg text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 border cursor-pointer select-none touch-manipulation ${
                    isActive
                      ? "bg-[#0B357B] text-white border-[#0B357B]"
                      : "bg-white text-slate-600 border border-dashed border-slate-300 hover:border-slate-400 hover:text-[#0B357B]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                      isActive ? "bg-white/20 text-white font-bold" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Interactive Grid: Map on Left + Country Inspector on Right */}
        <div ref={mapContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start scroll-mt-20">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-7 xl:col-span-8">
            <InteractiveAfricaMap
              selectedCategory={selectedCategory}
              selectedCountry={selectedCountry}
              onSelectCountry={setSelectedCountry}
              searchQuery={searchQuery}
              dict={dict}
            />
          </div>

          {/* Right Column: Frankli Minimal Country Inspector Panel */}
          <div ref={inspectorRef} className="lg:col-span-5 xl:col-span-4 scroll-mt-20">
            {selectedCountry ? (
              <div className="bg-white border border-dashed border-slate-300 p-5 sm:p-6 lg:p-7 space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-dashed border-slate-200">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <CountryFlag iso2={selectedCountry.iso2} name={selectedCountry.name} className="w-8 h-5.5 rounded-xs shadow-2xs shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-0.5">
                        Selected Country
                      </span>
                      <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#0B357B] tracking-tight truncate">
                        {selectedCountry.name}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0B357B] border border-slate-200 shrink-0">
                    {selectedCountry.iso2}
                  </span>
                </div>

                {/* Status Badge (No dot) */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Trust Status
                  </span>
                  {(() => {
                    const badge = getCategoryBadge(selectedCountry.category);
                    return (
                      <span
                        className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border ${badge.bg}`}
                      >
                        {badge.label}
                      </span>
                    );
                  })()}
                </div>

                {/* Infrastructure Details with Animated Lucide Icons */}
                <div className="space-y-2.5 pt-1">
                  {/* Item 1: NREN (Building2Icon) */}
                  <div className="group/item bg-slate-50/60 hover:bg-slate-50 transition-colors border border-dashed border-slate-200 p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                      <Building2Icon size={14} className="text-[#1A73C3] shrink-0" />
                      <span>National R&amp;E Network (NREN)</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 font-sans">
                      {selectedCountry.nren}
                    </p>
                  </div>

                  {/* Item 2: Federation Architecture (ShieldCheckIcon) */}
                  <div className="group/item bg-slate-50/60 hover:bg-slate-50 transition-colors border border-dashed border-slate-200 p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                      <ShieldCheckIcon size={14} className="text-[#0B357B] shrink-0" />
                      <span>Federation Architecture</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 font-sans">
                      {selectedCountry.federationName}
                    </p>
                  </div>

                  {/* Item 3: Regional R&E Network (EarthIcon) */}
                  <div className="group/item bg-slate-50/60 hover:bg-slate-50 transition-colors border border-dashed border-slate-200 p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                      <EarthIcon size={14} className="text-[#DE4A1B] shrink-0" />
                      <span>Regional R&amp;E Network</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 font-sans">
                      {selectedCountry.regionalRen}
                    </p>
                  </div>

                  {/* Item 4: Connected Institutions (CircleCheckIcon) */}
                  {selectedCountry.institutionsCount && (
                    <div className="group/item bg-blue-50/30 hover:bg-blue-50/50 transition-colors border border-dashed border-blue-200 p-3 sm:p-3.5">
                      <div className="flex items-center gap-2 text-[#0B357B] text-[10px] font-mono uppercase tracking-wider mb-1">
                        <CircleCheckIcon size={14} className="text-[#0B357B] shrink-0" />
                        <span>Connected Institutions</span>
                      </div>
                      <p className="font-serif font-normal text-base sm:text-lg text-[#0B357B]">
                        {selectedCountry.institutionsCount}+ Higher Education Institutions
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Link
                    href={`/${locale}/how-it-works`}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] text-xs font-mono font-bold uppercase tracking-wider text-center transition-colors"
                  >
                    How it Works
                  </Link>
                  <Link
                    href={`/${locale}/get-started`}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#0B357B] text-white hover:bg-[#1A73C3] text-xs font-mono font-bold uppercase tracking-wider text-center transition-colors"
                  >
                    Get Started
                  </Link>
                </div>

                <button
                  onClick={() => setSelectedCountry(null)}
                  className="w-full py-2 rounded-lg border border-dashed border-slate-300 text-xs font-mono font-medium uppercase tracking-wider text-slate-500 hover:border-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <div className="bg-white border border-dashed border-slate-300 p-5 sm:p-7 lg:p-8 space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#0B357B] tracking-tight leading-snug">
                    African Federation Summary
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    Tap or click any country on the map or use the search bar above to inspect its sovereign NREN, federation deployment, and regional connectivity.
                  </p>
                </div>

                {/* Status Breakdown Ledger Rows (No dots) */}
                <div className="space-y-2 sm:space-y-2.5 pt-1">
                  <div className="flex items-center justify-between p-3 sm:p-3.5 bg-blue-50/40 border border-dashed border-blue-200">
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#0B357B]">
                      National Federations
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0B357B]">
                      {counts.national_federation} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-3.5 bg-orange-50/40 border border-dashed border-orange-200">
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#DE4A1B]">
                      Catchall / BonafID On-Ramp
                    </span>
                    <span className="font-mono text-xs font-bold text-[#DE4A1B]">
                      {counts.catchall_bonafid} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-3.5 bg-amber-50/40 border border-dashed border-amber-200">
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                      Roadmap in Development
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-800">
                      {counts.in_development} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-3.5 bg-slate-50/60 border border-dashed border-slate-200">
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                      Not Yet Connected
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-600">
                      {counts.not_connected} countries
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* Call to Action: Is your country not listed? */}
            <div className="bg-white border border-dashed border-slate-300 p-5 sm:p-7">
              <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#0B357B] tracking-tight leading-snug">
                {dict.cta.headline}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {dict.cta.description}
              </p>
              <div className="pt-5 flex flex-col sm:flex-row items-stretch gap-3">
                <Link
                  href={`/${locale}/get-started`}
                  className="flex-1 flex items-center justify-center py-2.5 px-2 rounded-lg bg-[#0B357B] text-white hover:bg-[#1A73C3] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-center transition-colors"
                >
                  {dict.cta.button}
                </Link>
                <Link
                  href={`/${locale}/how-it-works`}
                  className="flex-1 flex items-center justify-center py-2.5 px-2 rounded-lg bg-[#DE4A1B] text-white hover:bg-[#c23e14] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-center transition-colors leading-tight"
                >
                  Learn how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

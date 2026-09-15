"use client";

import * as React from "react";
import Link from "next/link";
import {
  type AfricanCountry,
  type FederationCategory,
  AFRICAN_COUNTRIES,
} from "@/data/african-countries";
import { InteractiveAfricaMap } from "@/components/InteractiveAfricaMap";
import {
  Search,
  X,
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowUp,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
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
  };
}

export function FederationMapExplorer({
  locale = "en",
  dict,
}: FederationMapExplorerProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<FederationCategory | "all">("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<AfricanCountry | null>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const directoryRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToMap = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    mapContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToDirectory = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    directoryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          dot: "bg-[#0B357B]",
          label: dict.categories.national_federation,
        };
      case "catchall_bonafid":
        return {
          bg: "bg-orange-50 border-orange-200 text-[#DE4A1B]",
          dot: "bg-[#DE4A1B]",
          label: dict.categories.catchall_bonafid,
        };
      case "in_development":
        return {
          bg: "bg-amber-50 border-amber-200 text-amber-800",
          dot: "bg-[#F59E0B]",
          label: dict.categories.in_development,
        };
      case "not_connected":
      default:
        return {
          bg: "bg-slate-100 border-slate-200 text-slate-600",
          dot: "bg-slate-400",
          label: dict.categories.not_connected,
        };
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Top Controls: Search Bar & Category Filter Pills */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input with Instant Results Dropdown */}
            <div className="relative w-full sm:max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder={dict.search.placeholder}
                className="w-full h-11 pl-10 pr-10 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-hidden focus:border-[#1A73C3] focus:ring-2 focus:ring-[#1A73C3]/15 transition-all"
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
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl z-40 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
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
                    <>
                      <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                        {filteredCountries.slice(0, 6).map((c) => {
                          const badge = getCategoryBadge(c.category);
                          return (
                            <div
                              key={`search-drop-${c.iso2}`}
                              onClick={() => {
                                setSelectedCountry(c);
                                setIsSearchOpen(false);
                              }}
                              className="p-3 hover:bg-blue-50/70 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80">
                                  {c.iso2}
                                </span>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold font-heading text-slate-900 truncate">
                                    {c.name}
                                  </p>
                                  <p className="text-[11px] text-slate-500 font-sans truncate">
                                    {c.nren} • {c.regionalRen}
                                  </p>
                                </div>
                              </div>

                              <span
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-outfit uppercase shrink-0 border ${badge.bg}`}
                              >
                                <span className={`w-1 h-1 rounded-full ${badge.dot}`} />
                                {badge.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSearchOpen(false);
                          handleScrollToDirectory();
                        }}
                        className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-[#1A73C3] flex items-center justify-center gap-1.5 transition-colors border-t border-slate-100 cursor-pointer"
                      >
                        <span>View all {filteredCountries.length} in directory</span>
                        <ArrowDown size={13} />
                      </button>
                    </>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500 font-sans">
                      {dict.search.noResults}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Total Filtered Count & Jump Button */}
            <div className="flex items-center gap-3 justify-between sm:justify-end">
              {searchQuery.trim() !== "" && (
                <button
                  type="button"
                  onClick={handleScrollToDirectory}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#1A73C3] border border-blue-200/80 text-xs font-bold font-outfit hover:bg-blue-100 transition-all cursor-pointer shadow-2xs"
                >
                  <span>View {filteredCountries.length} in directory</span>
                  <ArrowDown size={13} />
                </button>
              )}
              <div className="text-xs font-mono text-slate-500 text-right">
                Showing <span className="font-bold text-slate-900">{filteredCountries.length}</span> of 54 countries
              </div>
            </div>
          </div>

          {/* Category Tabs (Horizontally scrollable on mobile, wrapping on desktop) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap no-scrollbar">
            {[
              { id: "all" as const, label: dict.categories.all, count: counts.all },
              {
                id: "national_federation" as const,
                label: dict.categories.national_federation,
                count: counts.national_federation,
                accent: "text-[#0B357B]",
              },
              {
                id: "catchall_bonafid" as const,
                label: dict.categories.catchall_bonafid,
                count: counts.catchall_bonafid,
                accent: "text-[#DE4A1B]",
              },
              {
                id: "in_development" as const,
                label: dict.categories.in_development,
                count: counts.in_development,
                accent: "text-amber-700",
              },
              {
                id: "not_connected" as const,
                label: dict.categories.not_connected,
                count: counts.not_connected,
                accent: "text-slate-500",
              },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-200 border cursor-pointer select-none ${
                    isActive
                      ? "bg-[#0B357B] text-white border-[#0B357B] shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
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
        <div ref={mapContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
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

          {/* Right Column: Country Inspector Panel */}
          <div className="lg:col-span-5 xl:col-span-4">
            {selectedCountry ? (
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block mb-0.5">
                      Selected Country
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                      {selectedCountry.name}
                    </h3>
                  </div>

                  <span className="text-lg font-black font-mono px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/70">
                    {selectedCountry.iso2}
                  </span>
                </div>

                {/* Status Badge */}
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Trust Status
                  </span>
                  {(() => {
                    const badge = getCategoryBadge(selectedCountry.category);
                    return (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-outfit uppercase tracking-wider border ${badge.bg}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                        {badge.label}
                      </span>
                    );
                  })()}
                </div>

                {/* Infrastructure Details */}
                <div className="space-y-3 pt-2">
                  <div className="rounded-xl bg-slate-50/80 border border-slate-200/60 p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase mb-1">
                      <Building2 size={14} className="text-[#1A73C3]" />
                      <span>National R&amp;E Network (NREN)</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 font-heading">
                      {selectedCountry.nren}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 border border-slate-200/60 p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase mb-1">
                      <ShieldCheck size={14} className="text-[#0B357B]" />
                      <span>Federation Architecture</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 font-sans">
                      {selectedCountry.federationName}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 border border-slate-200/60 p-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase mb-1">
                      <Globe2 size={14} className="text-[#DE4A1B]" />
                      <span>Regional R&amp;E Network</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 font-sans">
                      {selectedCountry.regionalRen}
                    </p>
                  </div>

                  {selectedCountry.institutionsCount && (
                    <div className="rounded-xl bg-blue-50/60 border border-blue-200/60 p-3.5">
                      <div className="flex items-center gap-2 text-[#0B357B] text-xs font-mono uppercase mb-1">
                        <CheckCircle2 size={14} className="text-[#0B357B]" />
                        <span>Connected Institutions</span>
                      </div>
                      <p className="text-lg font-extrabold text-[#0B357B] font-heading">
                        {selectedCountry.institutionsCount}+ Higher Education Institutions
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCountry(null)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#1A73C3] block mb-1">
                    Continental Status
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight leading-snug">
                    African Federation Summary
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-sans leading-relaxed">
                    Click any country on the map or select from the directory below to inspect its sovereign NREN, federation deployment, and regional connectivity.
                  </p>
                </div>

                {/* Status Breakdown Metrics */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border border-blue-200/80">
                    <span className="text-xs font-bold text-[#0B357B] font-sans">
                      National Federations
                    </span>
                    <span className="font-mono text-sm font-extrabold text-[#0B357B]">
                      {counts.national_federation} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-orange-50/70 border border-orange-200/80">
                    <span className="text-xs font-bold text-[#DE4A1B] font-sans">
                      Catchall / BonafID On-Ramp
                    </span>
                    <span className="font-mono text-sm font-extrabold text-[#DE4A1B]">
                      {counts.catchall_bonafid} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/70 border border-amber-200/80">
                    <span className="text-xs font-bold text-amber-800 font-sans">
                      Roadmap in Development
                    </span>
                    <span className="font-mono text-sm font-extrabold text-amber-800">
                      {counts.in_development} countries
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-semibold text-slate-600 font-sans">
                      Not Yet Connected
                    </span>
                    <span className="font-mono text-sm font-bold text-slate-600">
                      {counts.not_connected} countries
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Country Directory: Minimalist 3-Column Dashed Row Layout */}
        <div ref={directoryRef} id="country-directory" className="pt-8 scroll-mt-20">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                Country Directory
              </h3>
              <p className="text-sm text-slate-500 font-sans mt-0.5">
                Full listing of mapped African countries and identity federations
              </p>
            </div>
          </div>

          <div className="border-t border-dashed border-slate-300">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, idx) => {
                const badge = getCategoryBadge(country.category);
                const isSelected = selectedCountry?.iso2 === country.iso2;

                return (
                  <div
                    key={country.iso2}
                    className={`border-b border-dashed border-slate-300 transition-colors ${
                      isSelected ? "bg-blue-50/40" : "hover:bg-slate-50/50"
                    }`}
                  >
                    {/* Main Row Header */}
                    <div
                      onClick={() => setSelectedCountry(isSelected ? null : country)}
                      className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center cursor-pointer px-2 sm:px-3"
                    >
                      {/* Column 1: Monospaced Index & ISO Code */}
                      <div className="md:col-span-2 flex items-center gap-3">
                        <span className="font-mono text-xs text-slate-400 font-semibold w-6">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/70">
                          {country.iso2}
                        </span>
                        <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                          {country.regionalRen}
                        </span>
                      </div>

                      {/* Column 2: Country Name & NREN */}
                      <div className="md:col-span-5">
                        <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
                          {country.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-sans mt-0.5">
                          NREN: <span className="font-semibold text-slate-700">{country.nren}</span>
                        </p>
                      </div>

                      {/* Column 3: Federation Status & Action Button */}
                      <div className="md:col-span-5 flex items-center justify-between gap-3 mt-1.5 md:mt-0">
                        <div>
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold font-outfit uppercase tracking-wider border ${badge.bg}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                            {badge.label}
                          </span>
                          <p className="text-xs text-slate-500 font-sans mt-1">
                            {country.federationName}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCountry(isSelected ? null : country);
                          }}
                          className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-outfit transition-all cursor-pointer select-none ${
                            isSelected
                              ? "bg-[#0B357B] text-white shadow-xs"
                              : "text-[#1A73C3] hover:text-[#0B357B] hover:bg-blue-100/60"
                          }`}
                        >
                          <span>{isSelected ? "Hide" : "Details"}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              isSelected ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Inline Expandable Country Details Card */}
                    {isSelected && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="mb-5 mx-1 sm:mx-3 p-4 sm:p-6 rounded-2xl bg-white border border-blue-200/90 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-black px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/70">
                              {country.iso2}
                            </span>
                            <div>
                              <h5 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                                {country.name} — Trust & Identity Profile
                              </h5>
                              <p className="text-xs text-slate-500 font-sans">
                                Sovereign NREN: <span className="font-semibold text-slate-700">{country.nren}</span>
                              </p>
                            </div>
                          </div>

                          {/* Primary "View on Map" Button */}
                          <button
                            type="button"
                            onClick={handleScrollToMap}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0B357B] text-white text-xs font-bold font-outfit hover:bg-[#072454] transition-all shadow-xs active:scale-[0.98] cursor-pointer w-full sm:w-auto"
                          >
                            <span>View on Map</span>
                            <ArrowUp size={14} />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                          {/* Col 1: Architecture Model */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                              Architecture Model
                            </span>
                            <p className="text-xs font-bold text-slate-900 font-heading">
                              {country.category === "national_federation"
                                ? "Path A — Sovereign National Federation"
                                : country.category === "catchall_bonafid"
                                ? "Path B — Catchall via BonafID"
                                : country.category === "in_development"
                                ? "National Roadmap in Active Development"
                                : "Unconnected — Initial Consultation"}
                            </p>
                            <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                              {country.category === "national_federation"
                                ? "NREN operates national federation and peers directly with eduID.africa upward to eduGAIN."
                                : country.category === "catchall_bonafid"
                                ? "Institutions participate directly in continental federation via BonafID without needing national infrastructure."
                                : country.category === "in_development"
                                ? "Technical policy and identity federation deployment currently underway."
                                : "NREN or institutions can connect to eduID.africa via BonafID on-ramp."}
                            </p>
                          </div>

                          {/* Col 2: Peering & Regional REN */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                              Regional Peering & Scope
                            </span>
                            <p className="text-xs font-bold text-slate-900 font-heading">
                              {country.regionalRen}
                            </p>
                            <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                              {country.institutionsCount
                                ? `${country.institutionsCount} higher education & research institutions connected.`
                                : "Direct institutional onboarding open via eduID.africa BonafID catchall."}
                            </p>
                            <p className="text-[11px] font-mono text-[#0B357B] font-semibold pt-1">
                              Global Trust: eduGAIN Connected
                            </p>
                          </div>

                          {/* Col 3: Actions */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between gap-3">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                                Quick Action
                              </span>
                              <p className="text-xs font-bold text-slate-800 font-sans mt-0.5">
                                Explore Architecture or Connect
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                              <Link
                                href={`/${locale}/how-it-works`}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] text-xs font-semibold font-outfit transition-colors shadow-2xs text-center"
                              >
                                <span>How it Works</span>
                                <ArrowRight size={12} />
                              </Link>

                              <Link
                                href={`/${locale}/get-started`}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#1A73C3] text-white hover:bg-[#0B357B] text-xs font-bold font-outfit transition-colors shadow-2xs text-center"
                              >
                                <span>Get Started</span>
                                <ArrowRight size={12} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-slate-500 font-sans text-sm">
                {dict.search.noResults}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

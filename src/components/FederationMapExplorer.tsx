"use client";

import * as React from "react";
import {
  type AfricanCountry,
  type FederationCategory,
  AFRICAN_COUNTRIES,
} from "@/data/african-countries";
import { InteractiveAfricaMap } from "@/components/InteractiveAfricaMap";
import { Search, X, Building2, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FederationMapExplorerProps {
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

export function FederationMapExplorer({ dict }: FederationMapExplorerProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<FederationCategory | "all">("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<AfricanCountry | null>(null);

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
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={dict.search.placeholder}
                className="w-full h-11 pl-10 pr-10 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-hidden focus:border-[#1A73C3] focus:ring-2 focus:ring-[#1A73C3]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Total Filtered Count */}
            <div className="text-xs font-mono text-slate-500 text-right">
              Showing <span className="font-bold text-slate-900">{filteredCountries.length}</span> of 54 countries
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
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
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-200 border cursor-pointer select-none ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-7 xl:col-span-8">
            <InteractiveAfricaMap
              selectedCategory={selectedCategory}
              selectedCountry={selectedCountry}
              onSelectCountry={setSelectedCountry}
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
        <div className="pt-8">
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
                    onClick={() => setSelectedCountry(country)}
                    className={`py-5 sm:py-6 border-b border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center cursor-pointer transition-colors px-2 sm:px-3 rounded-lg ${
                      isSelected ? "bg-blue-50/60" : "hover:bg-slate-50/60"
                    }`}
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

                    {/* Column 3: Federation Status & Architecture */}
                    <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

                      <span className="text-xs font-bold text-[#1A73C3] hidden md:inline">
                        Select →
                      </span>
                    </div>
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

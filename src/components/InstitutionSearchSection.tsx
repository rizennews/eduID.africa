"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  ChevronDown,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import {
  allInstitutions,
  searchInstitutions,
  findByDomain,
  getCountries,
  directoryMeta,
  REPRESENTATIVE_IDS,
  type CompiledInstitution,
  type InstitutionStatus,
} from "@/data/institutions";
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
        allCountries?: string;
        filterCountryLabel?: string;
        filterAll: string;
        filterNational: string;
        filterCatchall: string;
        filterNotConnected: string;
        servicesLabel: string;
        representativeLabel?: string;
        representativeNote?: string;
        searchResultsLabel?: string;
        foundCount?: string;
        noResults: string;
        requestOnboarding: string;
        domainRecognized?: string;
        domainUnrecognized?: string;
        domainReady?: string;
        domainNotConnected?: string;
        statusLabels: {
          national: string;
          catchall: string;
          notConnected: string;
        };
      };
    };
  };
}

/** Country flag from flagcdn.com using the ISO 3166-1 alpha-2 code */
function CountryFlag({
  code,
  size = 20,
  className,
}: {
  code: string;
  size?: number;
  className?: string;
}) {
  if (!code) return null;
  return (
    <Image
      src={`https://flagcdn.com/w${size * 2}/${code.toLowerCase()}.png`}
      alt=""
      width={size}
      height={Math.round(size * 0.75)}
      className={cn("inline-block rounded-sm object-cover", className)}
      unoptimized
    />
  );
}

export function InstitutionSearchSection({
  locale,
  dict,
}: InstitutionSearchSectionProps) {
  const searchConfig = dict.getStartedPage.institutionSearch;
  const countries = React.useMemo(() => getCountries(), []);

  const [query, setQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<
    "all" | InstitutionStatus
  >("all");
  const [showAllDefault, setShowAllDefault] = React.useState(false);

  const cleanQuery = query.trim().toLowerCase();
  const isQuerying = cleanQuery.length > 0;
  const hasCountryFilter = selectedCountry !== "all";

  // Domain detection (Option 3: email/domain lookup)
  const isEmailOrDomain = React.useMemo(() => {
    if (!cleanQuery) return false;
    return cleanQuery.includes("@") || /\.[a-z]{2,}$/.test(cleanQuery);
  }, [cleanQuery]);

  const extractedDomain = React.useMemo(() => {
    if (!isEmailOrDomain) return null;
    let domain = cleanQuery;
    if (domain.includes("@")) domain = domain.split("@")[1] || "";
    domain = domain
      .replace(/^https?:\/\//, "")
      .replace(/\/.*$/, "")
      .trim();
    return domain || null;
  }, [isEmailOrDomain, cleanQuery]);

  const domainMatch = React.useMemo(() => {
    if (!extractedDomain) return null;
    return findByDomain(extractedDomain);
  }, [extractedDomain]);

  // Filtered institutions
  const filteredInstitutions = React.useMemo(() => {
    if (isEmailOrDomain && extractedDomain) {
      return domainMatch ? [domainMatch] : [];
    }
    if (
      !isQuerying &&
      !hasCountryFilter &&
      statusFilter === "all" &&
      !showAllDefault
    ) {
      return allInstitutions.filter((inst) =>
        (REPRESENTATIVE_IDS as readonly string[]).includes(inst.id)
      );
    }
    return searchInstitutions(cleanQuery, {
      country: selectedCountry !== "all" ? selectedCountry : undefined,
      status: statusFilter,
    });
  }, [
    cleanQuery,
    isQuerying,
    hasCountryFilter,
    selectedCountry,
    statusFilter,
    showAllDefault,
    isEmailOrDomain,
    extractedDomain,
    domainMatch,
  ]);

  const isShowingRepresentative =
    !isQuerying &&
    !hasCountryFilter &&
    statusFilter === "all" &&
    !showAllDefault &&
    !isEmailOrDomain;

  const selectedCountryStats = React.useMemo(() => {
    if (!hasCountryFilter) return null;
    return countries.find((c) => c.key === selectedCountry) || null;
  }, [hasCountryFilter, selectedCountry, countries]);

  const filterTabs: Array<{
    id: "all" | InstitutionStatus;
    label: string;
  }> = [
    { id: "all", label: searchConfig.filterAll },
    { id: "connected", label: searchConfig.filterNational || "Connected" },
    { id: "not-connected", label: searchConfig.filterNotConnected },
  ];

  return (
    <section
      id="institution-directory"
      className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] border-b border-dashed border-slate-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-6 sm:mb-8">
          <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#0B357B] tracking-tight leading-tight">
            {searchConfig.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {searchConfig.subtitle}
          </p>
          {/* Live stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
            <span>{directoryMeta.stats.total} institutions indexed</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-600">
              {directoryMeta.stats.connected} connected
            </span>
            <span className="text-slate-300">·</span>
            <span>{directoryMeta.stats.countries} countries</span>
          </div>
        </div>

        {/* Combined Search: Name + Country Dropdown + Email Domain */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search size={18} strokeWidth={2} />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (e.target.value.trim().length > 0) {
                    setShowAllDefault(false);
                  }
                }}
                placeholder={searchConfig.searchPlaceholder}
                className="w-full h-12 pl-11 pr-10 rounded-full border border-slate-300 bg-white text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1A73C3] focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              )}
            </div>

            {/* Country Selector Dropdown (Option 2) */}
            <div className="relative shrink-0 sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                {selectedCountry !== "all" ? (
                  <CountryFlag
                    code={
                      countries.find((c) => c.key === selectedCountry)
                        ?.code || ""
                    }
                    size={16}
                  />
                ) : (
                  <Globe size={16} strokeWidth={2} />
                )}
              </div>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  if (e.target.value !== "all") setShowAllDefault(true);
                }}
                className="w-full h-12 pl-10 pr-9 rounded-full border border-slate-300 bg-white text-sm font-sans text-slate-700 focus:outline-none focus:border-[#1A73C3] focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all cursor-pointer appearance-none"
              >
                <option value="all">
                  {searchConfig.allCountries || "All African Countries"}
                </option>
                {countries.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label} ({c.total})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                <ChevronDown size={14} strokeWidth={2.5} />
              </div>
            </div>

            {/* Search CTA */}
            <button
              onClick={(e) => e.preventDefault()}
              className="h-12 px-7 rounded-full bg-[#0B357B] text-white font-mono text-xs sm:text-sm font-medium hover:bg-[#1A73C3] shadow-2xs transition-all shrink-0 active:scale-[0.98]"
            >
              {searchConfig.searchButton}
            </button>
          </div>

          {/* Filter Tabs & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => {
                const isActive = statusFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setStatusFilter(tab.id);
                      if (tab.id !== "all") setShowAllDefault(true);
                    }}
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

            <div className="flex items-center gap-3">
              {(isQuerying ||
                hasCountryFilter ||
                statusFilter !== "all") && (
                <button
                  onClick={() => {
                    setQuery("");
                    setSelectedCountry("all");
                    setStatusFilter("all");
                    setShowAllDefault(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#DE4A1B] transition-colors"
                >
                  <RotateCcw size={12} strokeWidth={2} />
                  <span>Reset filters</span>
                </button>
              )}

              {!isQuerying &&
                !hasCountryFilter &&
                statusFilter === "all" && (
                  <button
                    onClick={() => setShowAllDefault(!showAllDefault)}
                    className="text-xs font-mono text-[#1A73C3] hover:underline underline-offset-4"
                  >
                    {showAllDefault
                      ? "← Show 3 connection models"
                      : `Browse all ${allInstitutions.length} institutions →`}
                  </button>
                )}
            </div>
          </div>
        </div>

        {/* Domain Verification Banner (Option 3) */}
        {isEmailOrDomain && extractedDomain && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl border border-dashed transition-all bg-white shadow-2xs">
            {domainMatch ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.5}
                      className="text-emerald-600 shrink-0"
                    />
                    <span className="font-mono text-xs text-emerald-800 font-medium">
                      {searchConfig.domainRecognized ||
                        "Institutional domain recognized"}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-xs text-slate-700">
                      @{extractedDomain}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-slate-700 pl-6">
                    Matches{" "}
                    <strong className="text-[#0B357B]">
                      {domainMatch.name}
                    </strong>{" "}
                    <span className="inline-flex items-center gap-1">
                      <CountryFlag code={domainMatch.countryCode} size={14} />
                      {domainMatch.country}
                    </span>
                    .{" "}
                    {domainMatch.status === "connected"
                      ? searchConfig.domainReady ||
                        "Active geteduroam profile available."
                      : searchConfig.domainNotConnected ||
                        "Not yet connected to eduroam."}
                  </p>
                </div>
                {domainMatch.status === "connected" ? (
                  <a
                    href="https://www.geteduroam.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0B357B] text-white font-mono text-xs font-medium hover:bg-[#1A73C3] transition-colors shrink-0 shadow-2xs"
                  >
                    <span>Download geteduroam</span>
                    <ExternalLink size={12} strokeWidth={2.5} />
                  </a>
                ) : (
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-800 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] transition-colors shrink-0"
                  >
                    <span>Request connection</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      size={16}
                      strokeWidth={2.5}
                      className="text-amber-600 shrink-0"
                    />
                    <span className="font-mono text-xs text-amber-800 font-medium">
                      {searchConfig.domainUnrecognized ||
                        "Domain not found in registry"}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-xs text-slate-700">
                      @{extractedDomain}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-slate-600 pl-6">
                    {searchConfig.domainNotConnected ||
                      "This domain is not registered with an eduroam identity provider yet."}
                  </p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-800 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] transition-colors shrink-0"
                >
                  <span>Request onboarding</span>
                  <ArrowRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Country NREN Info Banner (Option 2) */}
        {selectedCountryStats && !isEmailOrDomain && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50/70 to-slate-50 border-dashed shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <CountryFlag code={selectedCountryStats.code} size={18} />
                  <span className="font-bold text-[#0B357B]">
                    {selectedCountryStats.label}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-medium">
                    {selectedCountryStats.connected} connected
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">
                    {selectedCountryStats.total -
                      selectedCountryStats.connected}{" "}
                    not yet connected
                  </span>
                </div>
                <div className="text-xs font-sans text-slate-500 pl-7">
                  {selectedCountryStats.total} registered institution
                  {selectedCountryStats.total !== 1 ? "s" : ""} in the
                  African university directory
                </div>
              </div>
              <Link
                href={`/${locale}/communities/nrens`}
                className="text-xs font-mono text-[#1A73C3] hover:underline underline-offset-4 shrink-0"
              >
                View NREN profiles →
              </Link>
            </div>
          </div>
        )}

        {/* Ledger Header */}
        <div className="flex items-center justify-between py-2.5 px-1 text-xs font-mono text-slate-500 border-b border-dashed border-slate-300">
          <div>
            {isQuerying || hasCountryFilter || statusFilter !== "all" ? (
              <span>
                {searchConfig.searchResultsLabel || "Search results"}:{" "}
                <strong className="text-slate-800">
                  {filteredInstitutions.length}
                </strong>{" "}
                institution{filteredInstitutions.length !== 1 ? "s" : ""}
                {hasCountryFilter ? ` in ${selectedCountry}` : ""}
              </span>
            ) : isShowingRepresentative ? (
              <span>
                {searchConfig.representativeLabel ||
                  "Representative connection models"}
              </span>
            ) : (
              <span>
                Showing {filteredInstitutions.length} institutions across
                Africa
              </span>
            )}
          </div>
          <div className="hidden sm:block text-slate-400">
            {isShowingRepresentative
              ? "Type a university, country, or @email to search"
              : "Sources: geteduroam + Hipo Registry"}
          </div>
        </div>

        {/* Institution Results List */}
        <div className="border-b border-dashed border-slate-300 divide-y divide-dashed divide-slate-300/80 bg-white/60">
          {filteredInstitutions.length > 0 ? (
            (showAllDefault ||
            isQuerying ||
            hasCountryFilter ||
            statusFilter !== "all"
              ? filteredInstitutions.slice(0, 50)
              : filteredInstitutions
            ).map((inst) => (
              <div
                key={inst.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-200 hover:bg-slate-50/70 group"
              >
                {/* Left: Flag, University Info */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Country Flag */}
                  <div className="pt-1.5 shrink-0">
                    <CountryFlag code={inst.countryCode} size={20} />
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
                        {inst.name}
                      </h3>
                      {inst.domains.length > 0 && (
                        <span className="text-xs font-mono text-slate-400">
                          @{inst.domains[0]}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono text-slate-600">
                      <span className="font-medium text-slate-800 font-sans">
                        {inst.country}
                      </span>
                      {inst.eduroam && (
                        <>
                          <span
                            className="text-slate-300"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span className="text-slate-500 font-sans">
                            {inst.eduroam.profiles} eduroam profile
                            {inst.eduroam.profiles !== 1 ? "s" : ""}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Status + CTA */}
                <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0 pl-8 sm:pl-0">
                  {inst.status === "connected" ? (
                    <>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-2xs">
                        <CheckCircle2 size={12} strokeWidth={2.5} />
                        Connected
                      </span>
                      <a
                        href="https://www.geteduroam.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#0B357B] group-hover:text-[#1A73C3] group-hover:underline underline-offset-4 transition-all"
                      >
                        <span>Connect</span>
                        <ExternalLink size={12} strokeWidth={2} />
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-300 bg-slate-100 text-slate-600 shadow-2xs">
                        {searchConfig.statusLabels.notConnected}
                      </span>
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#1A73C3] hover:underline underline-offset-4 transition-all"
                      >
                        <span>Request connection</span>
                        <ArrowRight size={12} strokeWidth={2} />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="py-14 px-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Search size={20} strokeWidth={2} />
              </div>
              <div className="max-w-md mx-auto space-y-1.5">
                <h4 className="font-serif text-lg text-[#0B357B]">
                  {searchConfig.noResults}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-sans">
                  If your university or email domain doesn&apos;t appear, your
                  IT team can connect through eduID.africa or your national
                  NREN.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B357B] text-white font-mono text-xs font-medium hover:bg-[#1A73C3] transition-colors shadow-2xs"
                >
                  <span>{searchConfig.requestOnboarding}</span>
                  <ArrowRight size={12} strokeWidth={2.5} />
                </Link>
                <Link
                  href={`/${locale}/for-institutions`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:bg-slate-50 transition-colors"
                >
                  <span>Information for IT admins</span>
                  <ArrowRight size={12} strokeWidth={2} />
                </Link>
                <button
                  onClick={() => {
                    setQuery("");
                    setSelectedCountry("all");
                    setStatusFilter("all");
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-slate-700 px-2 py-1"
                >
                  <RotateCcw size={12} strokeWidth={2} />
                  Clear search
                </button>
              </div>
            </div>
          )}

          {/* Pagination notice */}
          {(showAllDefault ||
            isQuerying ||
            hasCountryFilter ||
            statusFilter !== "all") &&
            filteredInstitutions.length > 50 && (
              <div className="py-4 text-center text-xs font-mono text-slate-400 border-t border-dashed border-slate-200">
                Showing 50 of {filteredInstitutions.length} results. Refine
                your search to narrow results.
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

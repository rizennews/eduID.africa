"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";
import { federationPolicy, mrpsPolicy, type PolicyDocument, type PolicySection } from "@/data/policies";
import { Search, X, Printer, Link2, Check, ArrowRight, FileText } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";

interface PoliciesDocumentViewerProps {
  locale: Locale;
  dict: any;
}

export function PoliciesDocumentViewer({ locale, dict }: PoliciesDocumentViewerProps) {
  const [activeTab, setActiveTab] = React.useState<"federation-policy" | "mrps" | "downloads">("federation-policy");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const activeDoc: PolicyDocument = activeTab === "mrps" ? mrpsPolicy : federationPolicy;

  const filteredSections = React.useMemo(() => {
    if (!searchQuery.trim()) return activeDoc.sections;
    const query = searchQuery.toLowerCase();

    return activeDoc.sections.filter((section) => {
      const titleMatch = section.title[locale]?.toLowerCase().includes(query) || section.title.en.toLowerCase().includes(query);
      const contentMatch = section.content?.[locale]?.some((p) => p.toLowerCase().includes(query)) || section.content?.en?.some((p) => p.toLowerCase().includes(query));
      const bulletMatch = section.bullets?.[locale]?.some((b) => b.toLowerCase().includes(query)) || section.bullets?.en?.some((b) => b.toLowerCase().includes(query));
      const defMatch = section.definitions?.some(
        (d) => d.term.toLowerCase().includes(query) || d.definition[locale]?.toLowerCase().includes(query)
      );
      const subMatch = section.subsections?.some(
        (sub) =>
          sub.title[locale]?.toLowerCase().includes(query) ||
          sub.content[locale]?.some((p) => p.toLowerCase().includes(query)) ||
          sub.bullets?.[locale]?.some((b) => b.toLowerCase().includes(query))
      );

      return titleMatch || contentMatch || bulletMatch || defMatch || subMatch;
    });
  }, [activeDoc, searchQuery, locale]);

  const handleCopyLink = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
      navigator.clipboard.writeText(url);
      setCopiedId(sectionId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-dashed border-slate-300 pb-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setActiveTab("federation-policy");
                setSearchQuery("");
              }}
              className={`px-4 py-2.5 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "federation-policy"
                  ? "bg-[#0B357B] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#0B357B] hover:text-[#0B357B]"
              }`}
            >
              <span>{federationPolicy.shortTitle[locale]}</span>
              <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono">v0.1</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("mrps");
                setSearchQuery("");
              }}
              className={`px-4 py-2.5 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "mrps"
                  ? "bg-[#0B357B] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#0B357B] hover:text-[#0B357B]"
              }`}
            >
              <span>{mrpsPolicy.shortTitle[locale]}</span>
              <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono">v1.0</span>
            </button>

            <button
              onClick={() => setActiveTab("downloads")}
              className={`px-4 py-2.5 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "downloads"
                  ? "bg-[#0B357B] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#0B357B] hover:text-[#0B357B]"
              }`}
            >
              <span>{dict?.governancePage?.policiesSection?.downloadCta ? `${dict.governancePage.policiesSection.downloadCta} & Details` : "Downloads & Legal Summary"}</span>
            </button>
          </div>

          {activeTab !== "downloads" && (
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={locale === "fr" ? "Rechercher dans le texte..." : locale === "pt" ? "Pesquisar nos termos..." : locale === "ar" ? "البحث في السياسة..." : "Search clauses..."}
                  className="w-full text-xs font-sans pl-8 pr-7 py-2 bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-[#0B357B] text-slate-800 placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search query"
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                onClick={handlePrint}
                title="Print Policy"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-[#0B357B] hover:border-[#0B357B] text-xs font-mono transition-colors cursor-pointer group"
              >
                <AnimatedIcon animation="hover-scale">
                  <Printer className="w-3.5 h-3.5" />
                </AnimatedIcon>
                <span>Print</span>
              </button>
            </div>
          )}
        </div>

        {activeTab === "downloads" ? (
          /* Downloads and Legal Summary View */
          <div className="space-y-8">
            <div className="bg-white border border-dashed border-slate-300 p-6 sm:p-8 rounded-lg shadow-2xs">
              <div className="max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B357B] block mb-2">
                  Official Governing Repository
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0B357B] tracking-tight">
                  eduID.africa Legal & Operational Documentation
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  These authoritative documents define the rights, obligations, dispute procedures, and metadata validation practices governing institutions and research networks participating in eduID.africa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Document 1 Card */}
                <div className="p-6 rounded-lg bg-slate-50 border border-dashed border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#0B357B]/40 hover:bg-white transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-[#0B357B]">
                        Policy Document
                      </span>
                      <span className="font-mono text-xs text-slate-500">v0.1 • May 2021</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#0B357B]">
                      {federationPolicy.title[locale]}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {federationPolicy.description[locale]}
                    </p>
                    <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] font-mono text-slate-500 space-y-1">
                      <div><strong className="text-slate-700">Authors:</strong> {federationPolicy.authors.join(", ")}</div>
                      <div><strong className="text-slate-700">Governance:</strong> UbuntuNet Alliance, WACREN, ASREN</div>
                      <div><strong className="text-slate-700">Legal Seat:</strong> Republic of Malawi</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setActiveTab("federation-policy")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0B357B] text-white text-xs font-mono font-medium hover:bg-[#1A73C3] transition-colors cursor-pointer group"
                    >
                      <span>Read Policy Online</span>
                      <AnimatedIcon animation="hover-right">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </AnimatedIcon>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white border border-slate-300 text-slate-700 text-xs font-mono font-medium hover:border-[#0B357B] transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Export / Print</span>
                    </button>
                  </div>
                </div>

                {/* Document 2 Card */}
                <div className="p-6 rounded-lg bg-slate-50 border border-dashed border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#0B357B]/40 hover:bg-white transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800">
                        Operational Practice
                      </span>
                      <span className="font-mono text-xs text-slate-500">v1.0 • June 2021</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#0B357B]">
                      {mrpsPolicy.title[locale]}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {mrpsPolicy.description[locale]}
                    </p>
                    <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] font-mono text-slate-500 space-y-1">
                      <div><strong className="text-slate-700">Authors:</strong> {mrpsPolicy.authors.join(", ")}</div>
                      <div><strong className="text-slate-700">Metadata Standard:</strong> SAML-Metadata-RPI-V1.0</div>
                      <div><strong className="text-slate-700">Validation:</strong> DNS WHOIS & TLS/SSL</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setActiveTab("mrps")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0B357B] text-white text-xs font-mono font-medium hover:bg-[#1A73C3] transition-colors cursor-pointer group"
                    >
                      <span>Read MRPS Online</span>
                      <AnimatedIcon animation="hover-right">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </AnimatedIcon>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white border border-slate-300 text-slate-700 text-xs font-mono font-medium hover:border-[#0B357B] transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Export / Print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Policy Reader View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white border border-dashed border-slate-300 p-5 rounded-lg">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Table of Contents
                </span>
                <nav className="space-y-1.5 text-xs font-sans">
                  {activeDoc.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-2.5 py-1.5 rounded text-slate-700 hover:text-[#0B357B] hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-mono text-[#1A73C3] font-semibold mr-1.5">{section.number}.</span>
                      <span>{section.title[locale]}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-[11px] font-mono text-slate-500 space-y-1.5">
                  <div><strong>Version:</strong> {activeDoc.version}</div>
                  <div><strong>Date:</strong> {activeDoc.lastModified}</div>
                  <div><strong>Authors:</strong> {activeDoc.authors.join(", ")}</div>
                  <div className="text-[10px] text-slate-400 pt-1 leading-normal">
                    {activeDoc.attribution[locale]}
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 bg-white border border-dashed border-slate-300 p-6 sm:p-10 rounded-lg space-y-10">
              {/* Document Header Banner */}
              <div className="border-b border-dashed border-slate-200 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-100 text-[#0B357B]">
                    {activeDoc.version}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-600 bg-slate-100">
                    {activeDoc.lastModified}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-500 bg-slate-100">
                    {activeDoc.license}
                  </span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B357B] tracking-tight leading-tight">
                  {activeDoc.title[locale]}
                </h1>

                <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {activeDoc.description[locale]}
                </p>

                <div className="mt-4 p-3 rounded bg-blue-50/60 border border-dashed border-blue-200 text-xs font-mono text-slate-600 leading-relaxed">
                  {activeDoc.attribution[locale]}
                </div>
              </div>

              {/* Sections List */}
              {filteredSections.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-lg">
                  <p className="text-sm font-sans text-slate-600">
                    No clauses matched your query &ldquo;{searchQuery}&rdquo;.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-3 text-xs font-mono text-[#0B357B] hover:underline"
                  >
                    Clear search query
                  </button>
                </div>
              ) : (
                filteredSections.map((section: PolicySection) => (
                  <article key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                      <h2 className="font-serif text-xl sm:text-2xl text-[#0B357B] tracking-tight flex items-baseline gap-2">
                        <span className="font-mono text-base sm:text-lg text-[#1A73C3] font-bold">
                          {section.number}
                        </span>
                        <span>{section.title[locale]}</span>
                      </h2>

                      <button
                        onClick={() => handleCopyLink(section.id)}
                        title="Copy section link"
                        className="text-xs font-mono text-slate-400 hover:text-[#0B357B] transition-colors flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded hover:bg-slate-50"
                      >
                        {copiedId === section.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Link2 className="w-3.5 h-3.5" />
                            <span>Link</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Paragraph Content */}
                    {section.content?.[locale]?.map((paragraph, idx) => (
                      <p key={idx} className="text-sm sm:text-[15px] text-slate-700 font-sans leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {/* Bullets */}
                    {section.bullets?.[locale] && (
                      <ul className="space-y-2 pt-1 pl-2">
                        {section.bullets[locale].map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                            <span className="text-[#1A73C3] font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Definitions (if section 1) */}
                    {section.definitions && (
                      <div className="grid grid-cols-1 gap-3 pt-2">
                        {section.definitions.map((def, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-slate-300 transition-colors"
                          >
                            <span className="font-mono font-bold text-xs uppercase text-[#0B357B] block mb-1">
                              {def.term}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                              {def.definition[locale]}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections?.map((sub) => (
                      <div key={sub.id} id={sub.id} className="scroll-mt-24 pl-3 sm:pl-4 border-l-2 border-blue-200/80 space-y-3 pt-2">
                        <h3 className="font-serif text-base sm:text-lg text-[#0B357B] font-semibold flex items-baseline gap-2">
                          <span className="font-mono text-xs sm:text-sm text-[#1A73C3] font-bold">{sub.number}</span>
                          <span>{sub.title[locale]}</span>
                        </h3>

                        {sub.content[locale]?.map((paragraph, idx) => (
                          <p key={idx} className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                            {paragraph}
                          </p>
                        ))}

                        {sub.bullets?.[locale] && (
                          <ul className="space-y-1.5 pl-2">
                            {sub.bullets[locale].map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 font-sans leading-relaxed">
                                <span className="text-[#1A73C3] font-bold mt-0.5">–</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </article>
                ))
              )}

              {/* Document Footer / Notice */}
              <div className="pt-8 border-t border-dashed border-slate-300 text-xs font-mono text-slate-500 space-y-2">
                <p>
                  <strong>Legal Representative:</strong> UbuntuNet Alliance provides the legal foundation for eduID.africa.
                </p>
                <p>
                  <strong>Amendments & Inquiries:</strong> Contact the coordination secretariat at{" "}
                  <a href="mailto:eduid@wacren.net" className="text-[#0B357B] underline underline-offset-2">
                    eduid@wacren.net
                  </a>
                  . Changes require 60 days written notice to all members.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { FileTextIcon, type FileTextIconHandle, DownloadIcon, type DownloadIconHandle } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface PolicyDocument {
  id: string;
  title: string;
  audience: string;
  version: string;
  date: string;
  href: string;
}

interface GovernancePoliciesSectionProps {
  locale?: Locale;
  dict: {
    governancePage: {
      policiesSection: {
        kicker: string;
        title: string;
        subtitle: string;
        downloadCta: string;
        documents: PolicyDocument[];
      };
    };
  };
}

function PolicyDocumentRow({
  doc,
  downloadCta,
}: {
  doc: PolicyDocument;
  downloadCta: string;
}) {
  const fileRef = React.useRef<FileTextIconHandle>(null);
  const downloadRef = React.useRef<DownloadIconHandle>(null);

  const handleMouseEnter = () => {
    fileRef.current?.startAnimation();
    downloadRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    fileRef.current?.stopAnimation();
    downloadRef.current?.stopAnimation();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-5 sm:p-6 lg:p-7 hover:bg-slate-50/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
    >
      {/* Left: Minimal Document Icon & Metadata */}
      <div className="flex items-start sm:items-center gap-4 min-w-0">
        <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-[#1A73C3]/10 group-hover:border-[#1A73C3]/30 group-hover:text-[#0B357B] transition-all duration-200">
          <FileTextIcon ref={fileRef} size={18} className="p-0 hover:bg-transparent" />
        </div>

        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-serif font-normal text-[#0B357B] group-hover:text-[#1A73C3] transition-colors leading-snug">
            {doc.title}
          </h4>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-sans mt-1.5">
            <span className="font-semibold text-slate-700 font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100/80 border border-slate-200/70">
              {doc.audience}
            </span>
            <span className="text-slate-300 font-mono">/</span>
            <span className="font-mono text-slate-600 font-medium">
              {doc.version}
            </span>
            <span className="text-slate-300 font-mono">/</span>
            <span className="text-slate-500 font-sans">{doc.date}</span>
          </div>
        </div>
      </div>

      {/* Right: Minimal Download Button with Animated Download Icon */}
      <div className="shrink-0 pt-2 md:pt-0">
        <a
          href={doc.href}
          onClick={(e) => {
            if (doc.href === "#") {
              e.preventDefault();
            }
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B357B] border border-dashed border-slate-300 hover:border-slate-400 text-xs font-mono font-medium transition-all duration-150 group/btn cursor-pointer select-none w-full md:w-auto"
        >
          <DownloadIcon
            ref={downloadRef}
            size={15}
            className="p-0 hover:bg-transparent text-slate-400 group-hover/btn:text-[#1A73C3] transition-colors shrink-0"
          />
          <span>{downloadCta}</span>
        </a>
      </div>
    </div>
  );
}

export function GovernancePoliciesSection({
  locale: _locale,
  dict,
}: GovernancePoliciesSectionProps) {
  const section = dict.governancePage.policiesSection;

  return (
    <section className="pt-6 sm:pt-8 pb-8 sm:pb-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-none mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#0B357B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.subtitle}
          </p>
        </div>

        {/* Document Collection Architectural Ledger */}
        <div className="border border-dashed border-slate-300 bg-white overflow-hidden">
          {/* Collection Header Bar */}
          <div className="px-6 sm:px-8 py-4 bg-slate-50/60 border-b border-dashed border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
              {section.kicker}
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {section.documents.length} official documents available
            </span>
          </div>

          {/* List of Documents with Dashed Dividers */}
          <div className="divide-y divide-dashed divide-slate-200">
            {section.documents.map((doc) => (
              <PolicyDocumentRow
                key={doc.id}
                doc={doc}
                downloadCta={section.downloadCta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

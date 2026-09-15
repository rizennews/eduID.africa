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
      {/* Left: Animated Document Icon & Metadata */}
      <div className="flex items-start sm:items-center gap-4 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1A73C3] border border-blue-200/70 flex items-center justify-center shrink-0 group-hover:bg-[#0B357B] group-hover:text-white group-hover:border-[#0B357B] transition-all duration-200 shadow-2xs">
          <FileTextIcon ref={fileRef} size={20} className="p-0 hover:bg-transparent" />
        </div>

        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-bold font-heading text-[#0A162B] group-hover:text-[#1A73C3] transition-colors leading-snug">
            {doc.title}
          </h4>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-sans mt-1.5">
            <span className="font-semibold text-slate-700 font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200/70">
              {doc.audience}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-slate-600 font-medium">
              {doc.version}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-sans">{doc.date}</span>
          </div>
        </div>
      </div>

      {/* Right: Download PDF Button with Animated Download Icon */}
      <div className="shrink-0 pt-2 md:pt-0">
        <a
          href={doc.href}
          onClick={(e) => {
            if (doc.href === "#") {
              e.preventDefault();
            }
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B357B] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0B357B] text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-150 shadow-2xs group/btn cursor-pointer select-none w-full md:w-auto"
        >
          <DownloadIcon
            ref={downloadRef}
            size={16}
            className="p-0 hover:bg-transparent text-slate-500 group-hover/btn:text-white transition-colors shrink-0"
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
    <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading text-[#0A162B] tracking-tight leading-tight">
            {section.title}
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            {section.subtitle}
          </p>
        </div>

        {/* Document Collection Wrapper */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Card Collection Header */}
          <div className="px-6 sm:px-8 py-5 bg-slate-50/70 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold font-heading text-[#0A162B] tracking-tight">
              {section.kicker}
            </h3>
            <span className="text-xs font-mono font-semibold text-slate-500">
              {section.documents.length} official documents available
            </span>
          </div>

          {/* List of Documents with Animated Icons */}
          <div className="divide-y divide-slate-100">
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

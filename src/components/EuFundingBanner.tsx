import * as React from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

interface EuFundingBannerProps {
  locale?: Locale;
  dict?: any;
}

export function EuFundingBanner({ locale: _locale, dict }: EuFundingBannerProps) {
  const fundedBy = dict?.fundingBanner?.fundedBy || "FUNDED BY";
  const statement =
    dict?.fundingBanner?.statement ||
    "The European Union — under the EU Global Gateway Strategy and the Africa-Europe Investment Package, through DG INTPA.";
  const disclaimer =
    dict?.fundingBanner?.disclaimer ||
    "Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible.";

  return (
    <section aria-label="EU Funding Statement" className="border-t border-dashed border-slate-300 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Prominent Logo + Funded Statement */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="shrink-0">
              <Image
                src="/GG EU logos.png"
                alt="Global Gateway and European Union"
                width={520}
                height={160}
                className="w-48 sm:w-60 lg:w-72 h-auto object-contain"
                priority={false}
              />
            </div>
            <div className="space-y-2 flex-1">
              <span className="block font-mono text-xs font-bold tracking-wider text-slate-400 uppercase">
                {fundedBy}
              </span>
              <p className="font-sans text-sm sm:text-[15px] text-slate-800 font-medium leading-relaxed">
                {statement}
              </p>
            </div>
          </div>

          {/* Right Column: Legal Disclaimer with Left Divider */}
          <div className="lg:col-span-5 lg:border-l lg:border-dashed lg:border-slate-300 lg:pl-10 pt-6 lg:pt-0 border-t lg:border-t-0 border-dashed border-slate-200">
            <p className="font-sans text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

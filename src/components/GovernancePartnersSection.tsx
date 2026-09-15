import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export interface PartnerItem {
  name: string;
  logoUrl?: string;
  role?: string;
}

export interface GovernancePartnersSectionProps {
  locale?: Locale;
  dict: {
    governanceSection: {
      title: string;
      partner1: string;
      partner2: string;
      partner3: string;
      partner4: string;
      partner5: string;
      partner6: string;
    };
  };
  title?: string;
  partners?: PartnerItem[];
  className?: string;
}

export function GovernancePartnersSection({
  dict,
  title,
  partners: customPartners,
  className = "",
}: GovernancePartnersSectionProps) {
  const displayTitle = title || dict.governanceSection.title;

  const defaultPartners: PartnerItem[] = [
    { name: dict.governanceSection.partner1, role: "Regional REN" },
    { name: dict.governanceSection.partner2, role: "Regional REN" },
    { name: dict.governanceSection.partner3, role: "Regional REN" },
    { name: dict.governanceSection.partner4, role: "Global Trust" },
    { name: dict.governanceSection.partner5, role: "EU Program" },
    { name: dict.governanceSection.partner6, role: "Partner REN" },
  ];

  const displayPartners = customPartners || defaultPartners;

  return (
    <section
      className={`relative py-8 sm:py-10 bg-white border-t border-slate-200/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading — Strictly on ONE LINE */}
        <div className="text-center w-full max-w-none mx-auto mb-6 sm:mb-8">
          <h2 className="font-heading font-bold text-sm sm:text-base md:text-[17px] lg:text-lg text-slate-700 leading-snug tracking-tight sm:whitespace-nowrap">
            {displayTitle}
          </h2>
        </div>

        {/* Logo Containers (Supports both Typography and Image Assets) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {displayPartners.map((partner, idx) => (
            <div
              key={idx}
              className="h-20 sm:h-22 rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs flex flex-col items-center justify-center p-3 sm:p-4 text-center select-none hover:border-slate-300 transition-colors"
            >
              {partner.logoUrl ? (
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={140}
                  height={48}
                  className="max-h-10 w-auto object-contain"
                />
              ) : (
                <span className="font-heading font-bold text-xs sm:text-sm text-[#0A162B] tracking-tight leading-tight">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

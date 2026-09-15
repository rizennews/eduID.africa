import * as React from "react";
import { EarthIcon, ActivityIcon, WorkflowIcon, ShieldCheckIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";

interface StatItem {
  value: string;
  label: string;
}

interface TrustMetricsProps {
  locale: Locale;
  dict: {
    metrics: {
      kicker: string;
      stat1: StatItem;
      stat2: StatItem;
      stat3: StatItem;
      stat4: StatItem;
    };
  };
}

export function TrustMetrics({ dict }: TrustMetricsProps) {
  const stats = [
    {
      value: dict.metrics.stat1.value,
      label: dict.metrics.stat1.label,
      icon: EarthIcon,
      iconColor: "text-[#0B357B]",
      badgeBg: "bg-blue-50/90 border border-blue-200/70",
    },
    {
      value: dict.metrics.stat2.value,
      label: dict.metrics.stat2.label,
      icon: ActivityIcon,
      iconColor: "text-[#DE4A1B]",
      badgeBg: "bg-orange-50/90 border border-orange-200/70",
    },
    {
      value: dict.metrics.stat3.value,
      label: dict.metrics.stat3.label,
      icon: WorkflowIcon,
      iconColor: "text-[#1A73C3]",
      badgeBg: "bg-sky-50/90 border border-sky-200/70",
    },
    {
      value: dict.metrics.stat4.value,
      label: dict.metrics.stat4.label,
      icon: ShieldCheckIcon,
      iconColor: "text-[#0B357B]",
      badgeBg: "bg-slate-100 border border-slate-200/70",
    },
  ];

  return (
    <section className="relative py-4 sm:py-5 lg:py-6 bg-white border-y border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-0 lg:divide-x divide-slate-200/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx === 0
                    ? "lg:pr-6"
                    : idx === stats.length - 1
                    ? "lg:pl-6"
                    : "lg:px-6"
                } py-1`}
              >
                {/* Soft Tinted Icon Badge with Authentic Lucide-Animated Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.badgeBg}`}
                >
                  <Icon size={20} className={stat.iconColor} />
                </div>

                {/* Stat Text */}
                <div>
                  <div className="font-heading font-bold text-xl sm:text-2xl lg:text-[22px] tracking-tight text-[#0A162B] leading-snug">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs sm:text-[13px] text-slate-500 font-medium leading-snug mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

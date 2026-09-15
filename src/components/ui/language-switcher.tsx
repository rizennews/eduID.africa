"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Set cookie for 1 year
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Replace current locale prefix in pathname
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-sm",
        className
      )}
    >
      <div className="flex items-center pl-2 pr-1 text-slate-500">
        <Globe size={14} className="text-[#1A73C3]" />
      </div>
      <div className="flex items-center gap-1">
        {locales.map((loc) => {
          const isActive = loc === currentLocale;
          return (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={cn(
                "px-2.5 py-1 text-xs font-semibold rounded-lg transition-all duration-200",
                isActive
                  ? "bg-[#1A73C3] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0B357B] hover:bg-slate-100"
              )}
              title={localeNames[loc]}
            >
              {loc.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

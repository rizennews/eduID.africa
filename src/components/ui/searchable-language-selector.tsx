"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { ChevronDown, Check } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FlagUK, FlagFrance, FlagPortugal, FlagArabic } from "@/components/ui/flags";
import { cn } from "@/lib/utils";

interface LanguageOption {
  code: Locale;
  label: string;
  flagComponent: React.ComponentType<{ className?: string }>;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", flagComponent: FlagUK },
  { code: "fr", label: "Français", flagComponent: FlagFrance },
  { code: "pt", label: "Português", flagComponent: FlagPortugal },
  { code: "ar", label: "العربية", flagComponent: FlagArabic },
];

interface SearchableLanguageSelectorProps {
  currentLocale: Locale;
  className?: string;
}

export function SearchableLanguageSelector({
  currentLocale,
  className,
}: SearchableLanguageSelectorProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];
  const CurrentFlag = currentLang.flagComponent;

  const handleSelectLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Set persistence cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Rewrite path to target locale
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") || "/";
    router.push(newPath);
    setOpen(false);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Select Language"
          className={cn(
            "inline-flex items-center justify-center gap-2 h-11 px-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-sm font-semibold shadow-xs hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73C3] transition-all cursor-pointer select-none",
            open && "border-slate-400 bg-slate-50",
            className
          )}
        >
          <CurrentFlag className="w-5 h-3.5 shadow-xs" />
          <ChevronDown
            size={14}
            className={cn(
              "text-slate-500 transition-transform duration-200",
              open && "rotate-180 text-slate-800"
            )}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[185px] bg-white rounded-2xl p-2 shadow-2xl border border-slate-100 ring-1 ring-black/5 focus:outline-none animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === currentLocale;
            const FlagIcon = lang.flagComponent;

            return (
              <DropdownMenu.Item
                key={lang.code}
                onSelect={() => handleSelectLanguage(lang.code)}
                className={cn(
                  "relative flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors outline-none select-none",
                  isSelected
                    ? "bg-slate-100/90 text-[#0B357B] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <div className="flex items-center gap-3">
                  <FlagIcon className="w-5 h-3.5 shadow-xs" />
                  <span className="font-outfit font-medium">{lang.label}</span>
                </div>

                {isSelected && (
                  <Check size={16} className="text-[#DE4A1B] stroke-[2.5]" />
                )}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

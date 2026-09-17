export const locales = ["en", "fr", "pt", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  pt: "Português",
  ar: "العربية",
};

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }
  return dictionaries[defaultLocale]();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

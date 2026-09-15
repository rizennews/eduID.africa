import { headers } from "next/headers";
import { defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { NotFoundView } from "@/components/NotFoundView";

export default async function LocalizedNotFound() {
  const headerList = await headers();
  const localeHeader = headerList.get("x-locale") as Locale | null;
  const locale: Locale =
    localeHeader && locales.includes(localeHeader) ? localeHeader : defaultLocale;
  const dict = await getDictionary(locale);

  return <NotFoundView locale={locale} dict={dict} />;
}

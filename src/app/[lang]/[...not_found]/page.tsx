import { defaultLocale, getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { NotFoundView } from "@/components/NotFoundView";

export default async function CatchAllNotFound({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;
  const dict = await getDictionary(locale);

  return <NotFoundView locale={locale} dict={dict} />;
}

import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { headers } from "next/headers";
import { defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { Providers } from "@/components/providers";
import { NotFoundView } from "@/components/NotFoundView";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default async function RootNotFound() {
  const headerList = await headers();
  const localeHeader = headerList.get("x-locale") as Locale | null;
  const locale: Locale =
    localeHeader && locales.includes(localeHeader) ? localeHeader : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F8FAFC] text-[#0A162B] font-sans antialiased min-h-screen selection:bg-[#1A73C3] selection:text-white">
        <Providers>
          <NotFoundView locale={defaultLocale} dict={dict} />
        </Providers>
      </body>
    </html>
  );
}

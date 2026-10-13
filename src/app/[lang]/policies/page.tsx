import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { PoliciesDocumentViewer } from "@/components/PoliciesDocumentViewer";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;
  const dict = await getDictionary(locale);

  const titleMap: Record<Locale, string> = {
    en: "Federation Policies & Operational Statements",
    fr: "Politiques de la fédération et déclarations opérationnelles",
    pt: "Políticas da Federação e Declarações Operacionais",
    ar: "سياسات الاتحاد وبيانات الممارسة التشغيلية",
  };

  const descMap: Record<Locale, string> = {
    en: "Authoritative governing framework, Identity Federation Policy (v0.1), and Metadata Registration Practice Statement (MRPS v1.0) for eduID.africa.",
    fr: "Cadre directeur officiel, politique de la fédération d'identité (v0.1) et déclaration de pratiques d'enregistrement des métadonnées (MRPS v1.0) d'eduID.africa.",
    pt: "Quadro regulador oficial, Política da Federação de Identidade (v0.1) e Declaração de Práticas de Registo de Metadados (MRPS v1.0) do eduID.africa.",
    ar: "الإطار التنظيمي المعتمد، وسياسة اتحاد الهوية (v0.1)، وبيان ممارسات تسجيل البيانات الوصفية (MRPS v1.0) لـ eduID.africa.",
  };

  return createLocalizedMetadata({
    locale,
    path: "/policies",
    title: `${titleMap[locale]} — eduID.africa`,
    description: descMap[locale],
  });
}

export default async function PoliciesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  const dict = await getDictionary(locale);

  const heroSubtitleMap: Record<Locale, string> = {
    en: "Authoritative frameworks, participant obligations, dispute resolution, and metadata registration statements governing the continental federation.",
    fr: "Cadres directeurs officiels, obligations des participants, règlement des litiges et déclarations d'enregistrement régissant la fédération continentale.",
    pt: "Normas reguladoras oficiais, deveres dos participantes, resolução de litígios e práticas de metadados da federação continental.",
    ar: "الأطر التنظيمية المعتمدة والتزامات المشاركين وتسوية المنازعات وممارسات تسجيل البيانات الوصفية الحاكمة للاتحاد القاري.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <AboutHero
          title={dict.footer.terms || "Policies & Terms"}
          subtitle={heroSubtitleMap[locale]}
          locale={locale}
          dict={dict}
        />
        <PoliciesDocumentViewer locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

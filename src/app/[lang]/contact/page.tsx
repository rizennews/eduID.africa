import Image from "next/image";
import type { Metadata } from "next";
import { isValidLocale, defaultLocale, getDictionary, locales, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
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

  return createLocalizedMetadata({
    locale,
    path: "/contact",
    title: `${dict.contactPage.hero.title} — eduID.africa`,
    description: dict.contactPage.hero.subtitle,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isValidLocale(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLocale;

  const dict = await getDictionary(locale);

  const regionalNetworks = [
    {
      name: dict.contactPage.regionalPartners.wacrenName,
      desc: dict.contactPage.regionalPartners.wacrenDesc,
      url: "https://wacren.net/",
      logo: "/networks-logo/wacren.png",
    },
    {
      name: dict.contactPage.regionalPartners.ubuntunetName,
      desc: dict.contactPage.regionalPartners.ubuntunetDesc,
      url: "https://ubuntunet.net/",
      logo: "/networks-logo/ubuntunet-alliance-logo-2.png",
    },
    {
      name: dict.contactPage.regionalPartners.asrenName,
      desc: dict.contactPage.regionalPartners.asrenDesc,
      url: "https://www.asren.net",
      logo: "/networks-logo/asren.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <AboutHero
          title={dict.contactPage.hero.title}
          subtitle={dict.contactPage.hero.subtitle}
          locale={locale}
          dict={dict}
        />

        <section className="py-12 sm:py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Direct Inquiries */}
              <div className="lg:col-span-6 bg-white border border-dashed border-slate-300 p-6 sm:p-8 flex flex-col justify-between h-full gap-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#0B357B] tracking-tight">
                      {dict.contactPage.inquiries.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                      {dict.contactPage.inquiries.description}
                    </p>
                  </div>

                  {/* Email card */}
                  <div className="p-5 rounded-lg bg-blue-50/60 border border-dashed border-blue-200/80">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      {dict.contactPage.inquiries.emailLabel}
                    </span>
                    <a
                      href="mailto:eduid@wacren.net"
                      className="text-base sm:text-lg font-mono font-medium text-[#0B357B] hover:text-[#1A73C3] hover:underline underline-offset-4 flex items-center gap-2"
                    >
                      <span>eduid@wacren.net</span>
                      <span className="text-sm">↗</span>
                    </a>
                  </div>
                </div>

                {/* Social media links */}
                <div className="space-y-3 pt-4 border-t border-dashed border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    {dict.contactPage.inquiries.socialsLabel}
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="https://x.com/wacren"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>{dict.contactPage.inquiries.followX}</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>{dict.contactPage.inquiries.connectLinkedIn}</span>
                    </a>
                    <a
                      href="https://www.facebook.com/WACRENinfo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>{dict.contactPage.inquiries.followFacebook || "Facebook"}</span>
                    </a>
                    <a
                      href="https://bsky.app/profile/wacren.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 568 501" aria-hidden="true">
                        <path d="M123.12 35.78C180.84 74.2 247.92 147.66 284 189.72c36.08-42.06 103.16-115.52 160.88-153.94C486.23 8.16 548-18.66 548 45.44c0 12.82-7.38 107.53-11.72 123.2-16.14 58.26-74.9 73.18-127.11 64.32 91.28 15.52 114.54 67.02 64.44 118.4-76.08 78.02-160.4-38.3-189.61-78.96-29.21 40.66-113.53 156.98-189.61 78.96-50.1-51.38-26.84-102.88 64.44-118.4-52.21 8.86-110.97-6.06-127.11-64.32C27.38 152.97 20 58.26 20 45.44 20-18.66 81.77 8.16 123.12 35.78z"/>
                      </svg>
                      <span>{dict.contactPage.inquiries.followBluesky || "Bluesky"}</span>
                    </a>
                    <a
                      href="https://mastodon.social/@WACREN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-mono text-xs font-medium hover:border-[#0B357B] hover:text-[#0B357B] hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C16.486.096 14.168 0 12.003 0c-2.164 0-4.482.096-5.961.309C3.355.703 1.088 2.735.738 5.313.36 8.093.308 11.238.308 12.285c0 1.047.052 4.192.43 6.972.35 2.578 2.617 4.61 5.304 5.004 1.48.213 3.797.309 5.961.309 2.165 0 4.483-.096 5.962-.309 2.687-.394 4.954-2.426 5.304-5.004.378-2.78.43-5.925.43-6.972 0-1.047-.052-4.192-.43-6.972zm-4.394 10.372h-2.45v-5.698c0-1.428-.598-2.153-1.795-2.153-1.319 0-1.978.855-1.978 2.564v3.31H11.35v-3.31c0-1.709-.66-2.564-1.979-2.564-1.197 0-1.795.725-1.795 2.153v5.698H5.126V9.45c0-1.428.365-2.565 1.096-3.411.73-.846 1.688-1.27 2.873-1.27 1.373 0 2.413.528 3.12 1.583.707-1.055 1.747-1.583 3.12-1.583 1.185 0 2.143.424 2.873 1.27.73.846 1.096 1.983 1.096 3.411v6.235z"/>
                      </svg>
                      <span>{dict.contactPage.inquiries.followMastodon || "Mastodon"}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Regional Partners */}
              <div className="lg:col-span-6 bg-white border border-dashed border-slate-300 p-6 sm:p-8 flex flex-col justify-between h-full gap-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#0B357B] tracking-tight">
                    {dict.contactPage.regionalPartners.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {dict.contactPage.regionalPartners.subtitle}
                  </p>
                </div>

                <div className="space-y-3.5 flex-1 flex flex-col justify-end pt-2">
                  {regionalNetworks.map((net) => (
                    <a
                      key={net.url}
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-dashed border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#0B357B]/40 hover:shadow-2xs transition-all flex items-center gap-4"
                    >
                      <div className="w-16 sm:w-20 h-12 shrink-0 flex items-center justify-center bg-white border border-slate-200/80 p-1.5 rounded">
                        <Image
                          src={net.logo}
                          alt={net.name}
                          width={100}
                          height={40}
                          className="max-h-8 max-w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono font-bold text-xs uppercase text-[#0B357B] group-hover:text-[#1A73C3] transition-colors">
                            {net.name}
                          </span>
                          <span className="font-mono text-xs text-slate-400 group-hover:text-[#0B357B] transition-colors">
                            ↗
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                          {net.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}

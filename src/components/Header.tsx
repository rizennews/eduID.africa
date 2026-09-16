"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { EduIDLogo } from "@/components/ui/logo";
import { SearchableLanguageSelector } from "@/components/ui/searchable-language-selector";
import { type Locale } from "@/lib/i18n";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  dict: {
    brand: {
      name: string;
      tagline: string;
    };
    nav: {
      eduid: {
        label: string;
        about: { title: string; desc: string };
        howItWorks: { title: string; desc: string };
        federationMap: { title: string; desc: string };
        governance: { title: string; desc: string };
      };
      communities: {
        label: string;
        nrens: { title: string; desc: string };
        institutions: { title: string; desc: string };
      };
      bonafId: {
        label: string;
        desc: string;
      };
      resources: {
        label: string;
        news: { title: string; desc: string };
        upcomingEvents: { title: string; desc: string };
        training: { title: string; desc: string };
        modules: { title: string; desc: string };
      };
      actions: {
        getStarted: string;
      };
    };
  };
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const eduidItems = [
    {
      title: dict.nav.eduid.about.title,
      desc: dict.nav.eduid.about.desc,
      href: `/${locale}/about`,
    },
    {
      title: dict.nav.eduid.howItWorks.title,
      desc: dict.nav.eduid.howItWorks.desc,
      href: `/${locale}/how-it-works`,
    },
    {
      title: dict.nav.eduid.federationMap.title,
      desc: dict.nav.eduid.federationMap.desc,
      href: `/${locale}/federation-map`,
    },
    {
      title: dict.nav.eduid.governance.title,
      desc: dict.nav.eduid.governance.desc,
      href: `/${locale}/governance`,
    },
  ];

  const communitiesItems = [
    {
      title: dict.nav.communities.nrens.title,
      desc: dict.nav.communities.nrens.desc,
      href: `/${locale}/for-nren`,
      tag: "Networks",
    },
    {
      title: dict.nav.communities.institutions.title,
      desc: dict.nav.communities.institutions.desc,
      href: `/${locale}/communities/institutions`,
      tag: "Universities",
    },
  ];

  const resourcesItems = [
    {
      title: dict.nav.resources.news.title,
      desc: dict.nav.resources.news.desc,
      href: `/${locale}/news`,
    },
    {
      title: dict.nav.resources.upcomingEvents.title,
      desc: dict.nav.resources.upcomingEvents.desc,
      href: `/${locale}/events`,
    },
    {
      title: dict.nav.resources.training.title,
      desc: dict.nav.resources.training.desc,
      href: `/${locale}/training`,
    },
    {
      title: dict.nav.resources.modules.title,
      desc: dict.nav.resources.modules.desc,
      href: `/${locale}/modules`,
      tag: "Tools",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-6"
        ref={navRef}
      >
        {/* Left: Prominent Official Logo (No top bar, clicks to home) */}
        <div className="shrink-0 flex items-center">
          <EduIDLogo size="md" href={`/${locale}`} />
        </div>

        {/* Center: Exact User-Specified Categorized Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 relative">
          {/* Dropdown 1: eduID.africa */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "eduid" ? null : "eduid")}
              onMouseEnter={() => setOpenDropdown("eduid")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium font-sans text-slate-700 hover:text-[#0B357B] hover:bg-slate-100/80 focus-visible:outline-none transition-colors cursor-pointer select-none",
                openDropdown === "eduid" && "bg-slate-100/90 text-[#0B357B]"
              )}
            >
              <span>{dict.nav.eduid.label}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "text-slate-400 transition-transform duration-200",
                  openDropdown === "eduid" && "rotate-180 text-[#0B357B]"
                )}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "eduid" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full pt-2 z-50"
                >
                  <div className="w-80 bg-white rounded-2xl p-2 shadow-xl border border-slate-200/80 overflow-hidden">
                    <div className="grid gap-0.5">
                      {eduidItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors outline-none cursor-pointer"
                        >
                          <p className="text-sm font-medium font-sans text-[#0B357B] group-hover:text-[#1A73C3] transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dropdown 2: Communities */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "communities" ? null : "communities")}
              onMouseEnter={() => setOpenDropdown("communities")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium font-sans text-slate-700 hover:text-[#0B357B] hover:bg-slate-100/80 focus-visible:outline-none transition-colors cursor-pointer select-none",
                openDropdown === "communities" && "bg-slate-100/90 text-[#0B357B]"
              )}
            >
              <span>{dict.nav.communities.label}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "text-slate-400 transition-transform duration-200",
                  openDropdown === "communities" && "rotate-180 text-[#0B357B]"
                )}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "communities" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full pt-2 z-50"
                >
                  <div className="w-80 bg-white rounded-2xl p-2 shadow-xl border border-slate-200/80 overflow-hidden">
                    <div className="grid gap-0.5">
                      {communitiesItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors outline-none cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-medium font-sans text-[#0B357B] group-hover:text-[#1A73C3] transition-colors">
                              {item.title}
                            </p>
                            {item.tag && (
                              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-50 text-[#1A73C3] border border-blue-200/60">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standalone Link 3: bonafID */}
          <Link
            href={`/${locale}/bonafid`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium font-sans text-slate-700 hover:text-[#DE4A1B] hover:bg-slate-100/80 transition-colors select-none"
          >
            <span>{dict.nav.bonafId.label}</span>
          </Link>

          {/* Dropdown 4: Resources */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
              onMouseEnter={() => setOpenDropdown("resources")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium font-sans text-slate-700 hover:text-[#0B357B] hover:bg-slate-100/80 focus-visible:outline-none transition-colors cursor-pointer select-none",
                openDropdown === "resources" && "bg-slate-100/90 text-[#0B357B]"
              )}
            >
              <span>{dict.nav.resources.label}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "text-slate-400 transition-transform duration-200",
                  openDropdown === "resources" && "rotate-180 text-[#0B357B]"
                )}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full pt-2 z-50"
                >
                  <div className="w-80 bg-white rounded-2xl p-2 shadow-xl border border-slate-200/80 overflow-hidden">
                    <div className="grid gap-0.5">
                      {resourcesItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors outline-none cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-medium font-sans text-[#0B357B] group-hover:text-[#1A73C3] transition-colors">
                              {item.title}
                            </p>
                            {item.tag && (
                              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-orange-50 text-[#DE4A1B] border border-orange-200/60">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: SVG Flag Selector & "Get Started" CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <SearchableLanguageSelector currentLocale={locale} />

          <Link
            href={`/${locale}/get-started`}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-full text-xs sm:text-[13px] font-medium font-sans text-[#DE4A1B] bg-white border border-[#DE4A1B] hover:bg-[#DE4A1B] hover:text-white shadow-2xs transition-all active:scale-[0.98] select-none"
          >
            <span>{dict.nav.actions.getStarted}</span>
            <ArrowUpRight size={14} className="stroke-[2]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <SearchableLanguageSelector currentLocale={locale} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-24 bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl p-6 max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="space-y-6">
              {/* Mobile eduID.africa */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-heading px-2">
                  {dict.nav.eduid.label}
                </h3>
                <div className="grid gap-1">
                  {eduidItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <p className="text-sm font-medium font-sans text-[#0B357B]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 font-sans font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Communities */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono px-2">
                  {dict.nav.communities.label}
                </h3>
                <div className="grid gap-0.5">
                  {communitiesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <p className="text-sm font-medium font-sans text-[#0B357B]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 font-sans font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile bonafID */}
              <div className="px-2">
                <Link
                  href={`/${locale}/bonafid`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium font-sans text-[#0B357B] hover:text-[#DE4A1B]"
                >
                  {dict.nav.bonafId.label}
                </Link>
              </div>

              {/* Mobile Resources */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono px-2">
                  {dict.nav.resources.label}
                </h3>
                <div className="grid gap-0.5">
                  {resourcesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <p className="text-sm font-medium font-sans text-[#0B357B]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 font-sans font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/${locale}/get-started`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[#DE4A1B] text-white text-sm font-bold font-outfit shadow-md hover:bg-[#c93b12] transition-colors"
                >
                  <span>{dict.nav.actions.getStarted}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

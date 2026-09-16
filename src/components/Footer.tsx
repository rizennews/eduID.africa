import * as React from "react";
import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: {
    footer: {
      tagline: string;
      colNrenTitle: string;
      colNrenLink1: string;
      colNrenLink2: string;
      colNrenLink3: string;
      colNrenLink4: string;
      colResourcesTitle: string;
      colResourcesLink1: string;
      colResourcesLink2: string;
      colResourcesLink3: string;
      colResourcesLink4: string;
      colOrgTitle: string;
      colOrgLink1: string;
      colOrgLink2: string;
      colOrgLink3: string;
      colOrgLink4: string;
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200/90 overflow-hidden">
      {/* Subtle organic ambient glow inspired by modern brand footers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl h-72 rounded-full bg-gradient-to-r from-[#0B357B]/[0.05] via-[#1A73C3]/[0.08] to-[#DE4A1B]/[0.06] blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand Info & 3 Navigation Columns */}
        <div className="pt-12 sm:pt-16 pb-10 sm:pb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Column 1: Social Icons & Narrative */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 space-y-4 pr-0 lg:pr-6">
            {/* Social Icons: X & LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow eduID.africa on X"
                className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with eduID.africa on LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </AnimatedIcon>
              </a>
            </div>

            <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Column 2: For NRENs */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-medium uppercase tracking-wider text-slate-400">
              {dict.footer.colNrenTitle}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/for-nren`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colNrenLink1}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/bonafid`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colNrenLink2}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/bonafid`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colNrenLink3}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/training`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colNrenLink4}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-medium uppercase tracking-wider text-slate-400">
              {dict.footer.colResourcesTitle}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/modules`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colResourcesLink1}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/training`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colResourcesLink2}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/federation-map`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colResourcesLink3}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/news`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colResourcesLink4}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Organisation */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-medium uppercase tracking-wider text-slate-400">
              {dict.footer.colOrgTitle}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colOrgLink1}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/governance`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colOrgLink2}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/policies`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colOrgLink3}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm font-normal text-slate-600 hover:text-[#0B357B] transition-colors"
                >
                  {dict.footer.colOrgLink4}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Massive Wordmark: FULLSCREEN Edge-to-Edge across entire viewport */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 select-none overflow-x-clip">
        <svg
          viewBox="0 0 880 145"
          className="w-full h-auto block select-none overflow-visible max-h-[260px]"
          preserveAspectRatio="xMidYMid meet"
          aria-label="eduID.africa"
          role="img"
          style={{ overflow: 'visible' }}
        >
          <text
            x="50%"
            y="110"
            textAnchor="middle"
            fontSize="130"
            letterSpacing="-0.035em"
            style={{ fontFamily: "'Outfit', var(--font-outfit), sans-serif", fontWeight: 900 }}
          >
            <tspan fill="#0B357B">edu</tspan>
            <tspan fill="#1A73C3">ID</tspan>
            <tspan fill="#DE4A1B">.africa</tspan>
          </text>
        </svg>
      </div>

      {/* Bottom Bar: Copyright & Legal Policies (Aligned with standard container) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-6 pb-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 font-sans text-center sm:text-left">
          <div className="flex items-center gap-6 justify-center sm:justify-start">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-slate-800 transition-colors"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-slate-800 transition-colors"
            >
              {dict.footer.terms}
            </Link>
          </div>

          <div className="text-center sm:text-right">
            {dict.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

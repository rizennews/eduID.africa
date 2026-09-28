import * as React from "react";
import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { EuFundingBanner } from "@/components/EuFundingBanner";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200/90 overflow-hidden">
      {/* EU / Global Gateway Funding Statement Banner */}
      <EuFundingBanner locale={locale} dict={dict} />

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
            {/* Social Icons: X, LinkedIn, Facebook, Bluesky, Mastodon & Email */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://x.com/wacren"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WACREN on X"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with WACREN on LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="https://www.facebook.com/WACRENinfo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WACREN on Facebook"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="https://bsky.app/profile/wacren.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WACREN on Bluesky"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 568 501" aria-hidden="true">
                    <path d="M123.12 35.78C180.84 74.2 247.92 147.66 284 189.72c36.08-42.06 103.16-115.52 160.88-153.94C486.23 8.16 548-18.66 548 45.44c0 12.82-7.38 107.53-11.72 123.2-16.14 58.26-74.9 73.18-127.11 64.32 91.28 15.52 114.54 67.02 64.44 118.4-76.08 78.02-160.4-38.3-189.61-78.96-29.21 40.66-113.53 156.98-189.61 78.96-50.1-51.38-26.84-102.88 64.44-118.4-52.21 8.86-110.97-6.06-127.11-64.32C27.38 152.97 20 58.26 20 45.44 20-18.66 81.77 8.16 123.12 35.78z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="https://mastodon.social/@WACREN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow WACREN on Mastodon"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C16.486.096 14.168 0 12.003 0c-2.164 0-4.482.096-5.961.309C3.355.703 1.088 2.735.738 5.313.36 8.093.308 11.238.308 12.285c0 1.047.052 4.192.43 6.972.35 2.578 2.617 4.61 5.304 5.004 1.48.213 3.797.309 5.961.309 2.165 0 4.483-.096 5.962-.309 2.687-.394 4.954-2.426 5.304-5.004.378-2.78.43-5.925.43-6.972 0-1.047-.052-4.192-.43-6.972zm-4.394 10.372h-2.45v-5.698c0-1.428-.598-2.153-1.795-2.153-1.319 0-1.978.855-1.978 2.564v3.31H11.35v-3.31c0-1.709-.66-2.564-1.979-2.564-1.197 0-1.795.725-1.795 2.153v5.698H5.126V9.45c0-1.428.365-2.565 1.096-3.411.73-.846 1.688-1.27 2.873-1.27 1.373 0 2.413.528 3.12 1.583.707-1.055 1.747-1.583 3.12-1.583 1.185 0 2.143.424 2.873 1.27.73.846 1.096 1.983 1.096 3.411v6.235z" />
                  </svg>
                </AnimatedIcon>
              </a>
              <a
                href="mailto:eduid@wacren.net"
                aria-label="Email eduid@wacren.net"
                className="w-9 h-9 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B357B] hover:border-[#0B357B] hover:bg-slate-50 transition-all active:scale-95"
              >
                <AnimatedIcon animation="hover-scale">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

      {/* The Massive Wordmark: FULLSCREEN Edge-to-Edge across entire viewport with subtle architectural opacity */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 select-none overflow-x-clip">
        <svg
          viewBox="0 0 880 145"
          className="w-full h-auto block select-none overflow-visible max-h-[260px] opacity-40 hover:opacity-60 transition-opacity duration-300"
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
              href={`/${locale}/policies`}
              className="hover:text-slate-800 transition-colors"
            >
              {dict.footer.terms}
            </Link>
            <Link
              href={`/${locale}/policies`}
              className="hover:text-slate-800 transition-colors"
            >
              {dict.footer.privacy}
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

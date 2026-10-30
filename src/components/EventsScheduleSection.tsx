"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { getRoadshowEvents, type LocalizedRoadshowEvent } from "@/data/events";

interface EventsScheduleSectionProps {
  locale: Locale;
  dict: {
    eventsPage: {
      title: string;
      subtitle: string;
      registerIndico: string;
      detailsLabel: string;
      countdownDay: string;
      countdownDays: string;
      countdownToday: string;
      tabAll: string;
      tabPast: string;
      tabPresent: string;
      tabFuture: string;
      searchPlaceholder: string;
      noResults: string;
      badgePast: string;
      badgePresent: string;
      hostCta: {
        title: string;
        description: string;
        action: string;
      };
    };
  };
}

type Countdown =
  | { type: "days"; days: number }
  | { type: "today" }
  | { type: "done" }
  | null;

function getCountdown(
  startDate: string | undefined,
  endDate: string | undefined,
  now: Date | null
): Countdown {
  if (!startDate || !now) return null;
  const start = new Date(`${startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return null;
  const end = endDate
    ? new Date(`${endDate}T23:59:59`)
    : new Date(start.getTime() + 24 * 60 * 60 * 1000 - 1);
  if (now.getTime() > end.getTime()) return { type: "done" };

  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const nowDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.round(
    (startDay.getTime() - nowDay.getTime()) / (24 * 60 * 60 * 1000)
  );
  if (days <= 0) {
    // On the opening day show "starts today"; for any later event day
    // the chip disappears entirely.
    const isStartDay = nowDay.getTime() === startDay.getTime();
    return isStartDay ? { type: "today" } : { type: "done" };
  }
  return { type: "days", days };
}

type EventCategory = "past" | "present" | "future";
type TabId = "all" | EventCategory;

// Deactivated events are treated as past — they are no longer running,
// whatever their scheduled date says.
function classifyEvent(event: LocalizedRoadshowEvent, now: Date): EventCategory {
  if (event.statusType === "deactivated") return "past";
  if (!event.startDate) return "future";
  const start = new Date(`${event.startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return "future";
  const end = event.endDate
    ? new Date(`${event.endDate}T23:59:59`)
    : new Date(start.getTime() + 24 * 60 * 60 * 1000 - 1);
  if (now.getTime() < start.getTime()) return "future";
  if (now.getTime() > end.getTime()) return "past";
  return "present";
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function DateChip({
  month,
  day,
  year,
  className,
}: {
  month: string;
  day: string;
  year: string;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-center py-2.5 px-3 shadow-2xs " +
        (className ?? "")
      }
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A73C3]">
        {month}
      </span>
      <span className="font-serif text-2xl font-medium text-[#0B357B] leading-none mt-0.5">
        {day}
      </span>
      <span className="text-[10px] font-mono text-slate-500 mt-1">{year}</span>
    </div>
  );
}

function statusPillClass(statusType: string): string {
  if (statusType === "open") return "bg-[#C2410C] text-white";
  if (statusType === "filling") return "bg-amber-700 text-white";
  return "bg-slate-500 text-white";
}

function EventCard({
  event,
  dict,
  today,
  priority,
}: {
  event: LocalizedRoadshowEvent;
  dict: EventsScheduleSectionProps["dict"];
  today: Date | null;
  priority?: boolean;
}) {
  const countdown = getCountdown(event.startDate, event.endDate, today);
  const category = today ? classifyEvent(event, today) : null;
  const isUrgent =
    countdown?.type === "today" ||
    (countdown?.type === "days" && countdown.days <= 3);

  // While an event is running, the "Present" badge replaces the countdown.
  const showCountdown =
    countdown && countdown.type !== "done" && category !== "present";

  const countdownText =
    countdown?.type === "today"
      ? dict.eventsPage.countdownToday
      : countdown?.type === "days" && countdown.days === 1
      ? dict.eventsPage.countdownDay
      : countdown?.type === "days"
      ? dict.eventsPage.countdownDays.replace("{count}", String(countdown.days))
      : null;

  // Past events link to the event page for reference rather than registration.
  const ctaText =
    category === "past" ? dict.eventsPage.detailsLabel : dict.eventsPage.registerIndico;

  const badges = (
    <>
      {category === "present" ? (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white font-mono text-[10px] font-bold uppercase tracking-wider text-[#15803D] shadow-2xs">
          {dict.eventsPage.badgePresent}
        </span>
      ) : (
        <span
          className={
            "inline-flex items-center px-3 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs " +
            statusPillClass(event.statusType)
          }
        >
          {event.status}
        </span>
      )}
      {category === "past" && (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-2xs">
          {dict.eventsPage.badgePast}
        </span>
      )}
      {showCountdown && countdownText && (
        <span
          className={
            "inline-flex items-center px-3 py-1.5 rounded-full bg-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs " +
            (isUrgent ? "text-[#C2410C]" : "text-[#0B357B]")
          }
        >
          {countdownText}
        </span>
      )}
    </>
  );

  return (
    <a
      href={event.indicoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white shadow-2xs hover:border-[#1A73C3] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Poster Image — only when the event actually has one */}
      {event.image ? (
        <div className="relative bg-slate-100">
          <Image
            src={event.image}
            alt={event.title}
            width={1920}
            height={1080}
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={
              "w-full aspect-video object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 " +
              (category === "past" ? "opacity-75 saturate-50" : "")
            }
          />

          {/* Top-Right Badges */}
          <div className="absolute top-3 right-3 flex flex-wrap items-center justify-end gap-2">
            {badges}
          </div>

          {/* Date Chip — straddles the image edge */}
          <DateChip
            month={event.month}
            day={event.day}
            year={event.year}
            className="absolute left-4 -bottom-4 w-16 z-10"
          />
        </div>
      ) : (
        /* No poster: badges and date chip sit inside the card body */
        <div className="flex items-start justify-between gap-3 px-5 sm:px-6 pt-5">
          <DateChip month={event.month} day={event.day} year={event.year} className="w-16" />
          <div className="flex flex-wrap items-center justify-end gap-2">{badges}</div>
        </div>
      )}

      {/* Content */}
      <div
        className={
          "relative flex flex-1 flex-col gap-4 p-5 sm:p-6 " +
          (event.image ? "pt-8" : "")
        }
      >
        <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#0B357B] tracking-tight leading-snug group-hover:text-[#1A73C3] transition-colors">
          {event.title}
        </h3>

        {event.description && (
          <p className="text-sm text-slate-600 font-sans leading-relaxed font-normal">
            {event.description.intro}
          </p>
        )}

        {/* Footer: Location + Register Link */}
        <div className="mt-auto pt-4 border-t border-dashed border-slate-200 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 font-sans min-w-0">
            <MapPinIcon className="w-4 h-4 shrink-0 text-slate-500" />
            <span className="truncate">
              {event.venue}
              {event.duration ? ` / ${event.duration}` : ""}
            </span>
          </span>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-[#C2410C] group-hover:text-[#c23b12] font-sans transition-colors">
            <span>{ctaText}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function EventsScheduleSection({ locale, dict }: EventsScheduleSectionProps) {
  // Only real, active events are listed — placeholder/deactivated entries
  // are never shown, in any tab.
  const allEvents = React.useMemo(
    () =>
      getRoadshowEvents(locale).filter(
        (event) => !(event.isActive === false || event.statusType === "deactivated")
      ),
    [locale]
  );
  const featured = allEvents.find(
    (event) => !(event.isActive === false || event.statusType === "deactivated")
  );

  // Category tabs and countdowns depend on the visitor's current date, which
  // is only known on the client after mount — the statically rendered page
  // never disagrees with it.
  const [today, setToday] = React.useState<Date | null>(null);
  React.useEffect(() => {
    setToday(new Date());
  }, []);

  const [activeTab, setActiveTab] = React.useState<TabId>("all");
  const [query, setQuery] = React.useState("");

  const tabs: Array<{ id: TabId; label: string }> = [
    { id: "all", label: dict.eventsPage.tabAll },
    { id: "past", label: dict.eventsPage.tabPast },
    { id: "present", label: dict.eventsPage.tabPresent },
    { id: "future", label: dict.eventsPage.tabFuture },
  ];

  const q = query.trim().toLowerCase();
  const visibleEvents = allEvents.filter((event) => {
    const matchesTab =
      activeTab === "all" ||
      (today !== null && classifyEvent(event, today) === activeTab);
    if (!matchesTab) return false;
    if (!q) return true;
    return (
      event.title.toLowerCase().includes(q) ||
      event.venue.toLowerCase().includes(q) ||
      event.audience.toLowerCase().includes(q) ||
      (event.description?.intro.toLowerCase().includes(q) ?? false)
    );
  });

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toolbar: Category Tabs + Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={
                    "px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-medium border transition-colors " +
                    (isActive
                      ? "bg-[#0B357B] border-[#0B357B] text-white shadow-xs"
                      : "bg-white border-dashed border-slate-300 text-slate-600 hover:border-[#1A73C3] hover:text-[#1A73C3]")
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dict.eventsPage.searchPlaceholder}
              aria-label={dict.eventsPage.searchPlaceholder}
              className="w-full rounded-full border border-dashed border-slate-300 bg-white py-2.5 pl-11 pr-4 text-sm font-sans text-slate-700 placeholder:text-slate-500 focus:border-[#1A73C3] focus:outline-none focus:ring-2 focus:ring-[#1A73C3]/15 transition-colors"
            />
          </div>
        </div>

        {/* Event Cards Grid / Empty State */}
        {visibleEvents.length === 0 ? (
          <div className="border border-dashed border-slate-300 bg-white/60 rounded-2xl px-6 py-14 text-center">
            <p className="font-mono text-sm text-slate-500">
              {dict.eventsPage.noResults}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                dict={dict}
                today={today}
                priority={idx === 0}
              />
            ))}
          </div>
        )}

        {/* Audience & Expected Outcomes Ledger */}
        {featured?.description && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border border-dashed border-slate-300 bg-white/60 rounded-2xl p-6 sm:p-8">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#0B357B] font-semibold">
                {featured.description.audienceLabel}
              </h4>
              <ul className="mt-3 space-y-2">
                {featured.description.audienceItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm text-slate-600 font-sans leading-relaxed"
                  >
                    <span className="text-[#1A73C3] shrink-0 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#0B357B] font-semibold">
                {featured.description.outcomesLabel}
              </h4>
              <ul className="mt-3 space-y-2">
                {featured.description.outcomesItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm text-slate-600 font-sans leading-relaxed"
                  >
                    <span className="text-[#C2410C] shrink-0 font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Host a Roadshow CTA Box */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-10 border border-dashed border-slate-300 bg-white/70 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
          <div className="max-w-2xl">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B357B] tracking-tight">
              {dict.eventsPage.hostCta.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-2">
              {dict.eventsPage.hostCta.description}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B357B] text-white font-mono text-xs sm:text-sm font-medium hover:bg-[#1A73C3] transition-colors shrink-0 shadow-xs group/btn"
          >
            <span>{dict.eventsPage.hostCta.action}</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

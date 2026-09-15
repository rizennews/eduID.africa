"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

interface NotFoundViewProps {
  locale?: Locale;
  dict: any;
}

function AirplaneIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M32 4C30.8 4 30 5.2 30 7.5V23L8.5 33.5C7.4 34.1 7 35.5 7.6 36.6C8.2 37.6 9.6 38 10.7 37.4L30 30V48L22.5 53.2C21.6 53.8 21.3 55 21.8 55.9C22.3 56.8 23.4 57.2 24.3 56.6L32 52.8L39.7 56.6C40.6 57.2 41.7 56.8 42.2 55.9C42.7 55 42.4 53.8 41.5 53.2L34 48V30L53.3 37.4C54.4 38 55.8 37.6 56.4 36.6C57 35.5 56.6 34.1 55.5 33.5L34 23V7.5C34 5.2 33.2 4 32 4Z" />
    </svg>
  );
}

const PLANES = [
  // Top right cluster
  { id: 1, top: "4%", left: "74%", rotate: -18, size: 28, delay: 0.2 },
  { id: 2, top: "11%", left: "60%", rotate: -8, size: 30, delay: 0.5 },
  { id: 3, top: "14%", left: "65%", rotate: 16, size: 30, delay: 0.8 },
  { id: 4, top: "19%", left: "61%", rotate: -42, size: 32, delay: 0.3 },
  { id: 5, top: "27%", left: "67%", rotate: 26, size: 28, delay: 0.7 },
  { id: 6, top: "38%", left: "68%", rotate: -36, size: 30, delay: 0.4 },
  { id: 7, top: "43%", left: "58%", rotate: -86, size: 30, delay: 0.9 },
  // Bottom left cluster
  { id: 8, top: "72%", left: "21%", rotate: -32, size: 32, delay: 0.6 },
  { id: 9, top: "86%", left: "28%", rotate: 14, size: 30, delay: 0.1 },
];

export function NotFoundView({ locale = "en", dict }: NotFoundViewProps) {
  const pageDict = dict.notFoundPage || {
    title: "Lost in flight?",
    homeButton: "Find your way home",
  };

  return (
    <main className="min-h-screen w-full relative flex items-center justify-center bg-[#FAFAFA] text-[#0A162B] selection:bg-slate-200 overflow-hidden">
      {/* Floating Airplanes with Soft Drop Shadows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {PLANES.map((plane) => (
          <motion.div
            key={plane.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
              rotate: [plane.rotate, plane.rotate + 1.2, plane.rotate],
            }}
            transition={{
              y: {
                duration: 4 + (plane.id % 3),
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 5 + (plane.id % 2),
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.9, delay: plane.delay },
              scale: { duration: 0.9, delay: plane.delay },
            }}
            style={{
              position: "absolute",
              top: plane.top,
              left: plane.left,
              filter: "drop-shadow(5px 12px 6px rgba(0, 0, 0, 0.14))",
            }}
            className="text-[#D4D8DF]"
          >
            <AirplaneIcon size={plane.size} />
          </motion.div>
        ))}
      </div>

      {/* Text Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 sm:px-14 lg:px-24 py-16">
        <div className="max-w-md">
          {/* 404 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[44px] font-bold font-heading text-[#111827] tracking-tight leading-tight">
            404
          </h1>

          {/* Lost in flight? */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal font-sans text-slate-400 tracking-tight leading-tight mt-1">
            {pageDict.title}
          </h2>

          {/* Find your way home */}
          <div className="mt-8 sm:mt-10">
            <Link
              href={`/${locale}`}
              className="text-xs sm:text-sm font-normal text-slate-400 hover:text-slate-900 transition-colors inline-block"
            >
              {pageDict.homeButton}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

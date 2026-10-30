"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface VisualPlaceholderProps {
  type?: string;
  badge?: string;
  title?: string;
  dimensions?: string;
  description?: string;
  aspectRatio?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function VisualPlaceholder({
  title = "Visual Placeholder",
  dimensions,
  description,
  aspectRatio = "aspect-[16/10]",
  theme = "light",
  className = "",
}: VisualPlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 text-center transition-all select-none",
        aspectRatio,
        isDark
          ? "border border-dashed border-white/25 bg-white/5 backdrop-blur-md text-white"
          : "border border-dashed border-slate-300 bg-slate-100/60 backdrop-blur-md text-slate-800",
        className
      )}
    >
      {/* Decorative blurred color glow behind */}
      <div
        className={cn(
          "absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none",
          isDark
            ? "bg-gradient-to-tr from-sky-400/20 via-blue-500/10 to-transparent"
            : "bg-gradient-to-tr from-blue-300/20 via-slate-200/30 to-transparent"
        )}
      />

      {/* Subtle Shimmer Accent Line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md space-y-1.5">
        {/* Title */}
        {title && (
          <h4
            className={cn(
              "font-serif text-base sm:text-lg font-normal tracking-tight leading-snug",
              isDark ? "text-white/90" : "text-[#0B357B]"
            )}
          >
            {title}
          </h4>
        )}

        {/* Optional Description */}
        {description && (
          <p
            className={cn(
              "font-sans text-xs sm:text-sm leading-relaxed max-w-sm line-clamp-2",
              isDark ? "text-white/70" : "text-slate-500"
            )}
          >
            {description}
          </p>
        )}

        {/* Dimensions & Spec Footer */}
        {dimensions && (
          <div
            className={cn(
              "pt-1 text-[11px] font-mono tracking-widest uppercase",
              isDark ? "text-white/40" : "text-slate-500"
            )}
          >
            {dimensions}
          </div>
        )}
      </div>
    </div>
  );
}

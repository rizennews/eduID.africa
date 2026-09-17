import * as React from "react";

export function FlagUK({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`rounded-sm overflow-hidden shrink-0 shadow-xs border border-black/10 ${className}`}
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        {/* Blue background */}
        <rect width="60" height="40" fill="#012169" />
        {/* White saltire */}
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFF" strokeWidth="8" />
        {/* Red saltire */}
        <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="4" />
        <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
        {/* White cross */}
        <path d="M30,0 v40 M0,20 h60" stroke="#FFF" strokeWidth="12" />
        {/* Red cross */}
        <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="8" />
      </g>
    </svg>
  );
}

export function FlagFrance({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`rounded-sm overflow-hidden shrink-0 shadow-xs border border-black/10 ${className}`}
      aria-hidden="true"
    >
      <rect width="20" height="40" fill="#002395" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#ED2939" />
    </svg>
  );
}

export function FlagPortugal({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`rounded-sm overflow-hidden shrink-0 shadow-xs border border-black/10 ${className}`}
      aria-hidden="true"
    >
      {/* Green field (2/5) */}
      <rect width="24" height="40" fill="#046A38" />
      {/* Red field (3/5) */}
      <rect x="24" width="36" height="40" fill="#DA291C" />
      {/* Yellow Armillary sphere & shield */}
      <circle cx="24" cy="20" r="9" fill="#FFCC00" stroke="#B8860B" strokeWidth="0.8" />
      <path
        d="M21 14 h6 v7 a3 3 0 0 1 -6 0 z"
        fill="#FFFFFF"
        stroke="#DA291C"
        strokeWidth="1.2"
      />
      <circle cx="24" cy="18" r="1" fill="#002395" />
    </svg>
  );
}

export function FlagArabic({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`rounded-sm overflow-hidden shrink-0 shadow-xs border border-black/10 ${className}`}
      aria-hidden="true"
    >
      {/* Green background (Arab League flag) */}
      <rect width="60" height="40" fill="#007A3D" />
      {/* White Arab League emblem (simplified wreath + circle) */}
      <circle cx="30" cy="20" r="9" fill="none" stroke="white" strokeWidth="1.2" />
      <circle cx="30" cy="20" r="4" fill="none" stroke="white" strokeWidth="1" />
      {/* Simplified wreath arcs */}
      <path d="M22 20 Q23 14 30 13 Q37 14 38 20" fill="none" stroke="white" strokeWidth="1" />
      <path d="M22 20 Q23 26 30 27 Q37 26 38 20" fill="none" stroke="white" strokeWidth="1" />
    </svg>
  );
}

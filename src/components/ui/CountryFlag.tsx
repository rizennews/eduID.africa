import * as React from "react";

interface CountryFlagProps {
  iso2: string;
  name: string;
  className?: string;
}

export function CountryFlag({
  iso2,
  name,
  className = "w-5 h-3.5",
}: CountryFlagProps) {
  const code = iso2.toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={`Flag of ${name}`}
      loading="lazy"
      width={24}
      height={16}
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.dataset.triedLocal) {
          target.dataset.triedLocal = "true";
          target.src = `/flags/${code}.svg`;
        }
      }}
      className={`rounded-xs object-cover border border-slate-200/90 shrink-0 shadow-2xs ${className}`}
    />
  );
}

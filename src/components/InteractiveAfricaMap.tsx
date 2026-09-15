"use client";

import * as React from "react";
import {
  type AfricanCountry,
  type FederationCategory,
  AFRICAN_COUNTRIES,
} from "../data/african-countries";
import { AFRICA_MAP_PATHS, type CountryPath } from "../data/africa-map-paths";

interface InteractiveAfricaMapProps {
  selectedCategory: FederationCategory | "all";
  selectedCountry: AfricanCountry | null;
  onSelectCountry: (country: AfricanCountry) => void;
  dict: {
    categories: {
      all: string;
      national_federation: string;
      catchall_bonafid: string;
      in_development: string;
      not_connected: string;
    };
  };
}

export function InteractiveAfricaMap({
  selectedCategory,
  selectedCountry,
  onSelectCountry,
  dict,
}: InteractiveAfricaMapProps) {
  const [hoveredCountry, setHoveredCountry] = React.useState<AfricanCountry | null>(null);
  const [tooltipPos, setTooltipPos] = React.useState({ x: 0, y: 0 });

  // Fast country lookup by ISO2 code
  const countryMap = React.useMemo(() => {
    const map = new Map<string, AfricanCountry>();
    AFRICAN_COUNTRIES.forEach((c) => map.set(c.iso2, c));
    return map;
  }, []);

  const getCategoryColor = (category: FederationCategory, isHovered: boolean, isSelected: boolean) => {
    if (isSelected) return "#0284C7"; // Vivid selected blue glow

    switch (category) {
      case "national_federation":
        return isHovered ? "#1A73C3" : "#0B357B";
      case "catchall_bonafid":
        return isHovered ? "#F97316" : "#DE4A1B";
      case "in_development":
        return isHovered ? "#FBBF24" : "#F59E0B";
      case "not_connected":
      default:
        return isHovered ? "#CBD5E1" : "#E2E8F0";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement>, country: AfricanCountry) => {
    setHoveredCountry(country);
    const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect() || e.currentTarget.closest("svg")?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="relative w-full rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-xs overflow-hidden select-none">
      {/* Map Header Status Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0B357B] animate-pulse" />
          <span className="text-xs font-bold font-outfit uppercase tracking-wider text-slate-500">
            Interactive Continental Trust Map
          </span>
        </div>

        <span className="text-xs font-mono text-slate-400">
          54 African Countries Mapped
        </span>
      </div>

      {/* SVG Map of Africa */}
      <div className="relative w-full max-w-3xl mx-auto aspect-[850/900]">
        <svg
          viewBox="0 0 850 900"
          className="w-full h-full drop-shadow-xs"
          role="img"
          aria-label="Map of Africa showing Trust and Identity Federation status"
        >
          {/* Base Country Polygons */}
          <g>
            {AFRICA_MAP_PATHS.map((item: CountryPath) => {
              const country = countryMap.get(item.iso2);
              if (!country) return null;

              const isDimmed =
                selectedCategory !== "all" && country.category !== selectedCategory;
              const isSelected = selectedCountry?.iso2 === country.iso2;
              const isHovered = hoveredCountry?.iso2 === country.iso2;
              const fillColor = getCategoryColor(country.category, isHovered, isSelected);

              return (
                <path
                  key={item.iso2}
                  d={item.d}
                  fill={fillColor}
                  stroke="#FFFFFF"
                  strokeWidth={isSelected ? "2.2" : "0.9"}
                  strokeLinejoin="round"
                  opacity={isDimmed ? 0.3 : 1}
                  className="cursor-pointer transition-all duration-200 hover:opacity-100"
                  onMouseMove={(e) => handleMouseMove(e, country)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onSelectCountry(country)}
                />
              );
            })}
          </g>

          {/* Country Name Labels Directly on the Map */}
          <g className="select-none">
            {AFRICA_MAP_PATHS.map((item: CountryPath) => {
              const country = countryMap.get(item.iso2);
              if (!country) return null;

              const isDimmed =
                selectedCategory !== "all" && country.category !== selectedCategory;
              const isSelected = selectedCountry?.iso2 === country.iso2;
              const isHovered = hoveredCountry?.iso2 === country.iso2;

              const isLightBg =
                country.category === "not_connected" && !isSelected && !isHovered;
              const textColor = isLightBg ? "#334155" : "#FFFFFF";
              const strokeColor = isLightBg
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(15, 23, 42, 0.65)";

              return (
                <text
                  key={`label-${item.iso2}`}
                  x={item.labelX}
                  y={item.labelY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={item.fontSize}
                  fill={textColor}
                  stroke={strokeColor}
                  strokeWidth={isLightBg ? 0.4 : 0.6}
                  paintOrder="stroke fill"
                  fontWeight={isSelected || isHovered ? "800" : "600"}
                  opacity={isDimmed ? 0.35 : 1}
                  className="cursor-pointer font-sans tracking-tight transition-all duration-150"
                  onMouseMove={(e) => handleMouseMove(e, country)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onSelectCountry(country)}
                >
                  {item.shortName}
                </text>
              );
            })}
          </g>
        </svg>

        {/* Floating Tooltip */}
        {hoveredCountry && (
          <div
            className="absolute pointer-events-none z-30 transform -translate-x-1/2 -translate-y-full -mt-3 bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2.5 rounded-xl shadow-xl border border-slate-700/80 text-left min-w-[180px] max-w-xs transition-opacity duration-150"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y}px`,
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-heading font-bold text-sm text-white">
                {hoveredCountry.name}
              </span>
              <span className="text-[10px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/15 text-slate-200">
                {hoveredCountry.iso2}
              </span>
            </div>

            <div className="text-[11px] font-medium text-slate-300 space-y-0.5 font-sans">
              <p>
                <span className="text-slate-400">NREN:</span>{" "}
                <span className="text-white font-semibold">{hoveredCountry.nren}</span>
              </p>
              <p>
                <span className="text-slate-400">Region:</span>{" "}
                <span className="text-white font-semibold">{hoveredCountry.regionalRen}</span>
              </p>
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-800 flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    hoveredCountry.category === "national_federation"
                      ? "#0B357B"
                      : hoveredCountry.category === "catchall_bonafid"
                      ? "#DE4A1B"
                      : hoveredCountry.category === "in_development"
                      ? "#F59E0B"
                      : "#94A3B8",
                }}
              />
              <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-slate-200">
                {dict.categories[hoveredCountry.category]}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans font-medium">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-[#0B357B] shrink-0" />
          <span className="text-slate-700">{dict.categories.national_federation}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-[#DE4A1B] shrink-0" />
          <span className="text-slate-700">{dict.categories.catchall_bonafid}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-[#F59E0B] shrink-0" />
          <span className="text-slate-700">{dict.categories.in_development}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-[#CBD5E1] shrink-0" />
          <span className="text-slate-600">{dict.categories.not_connected}</span>
        </div>
      </div>
    </div>
  );
}

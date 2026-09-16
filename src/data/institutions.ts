/**
 * Data layer for the African University Directory.
 *
 * Uses a pre-compiled JSON dataset built from two open sources:
 *   Source A: geteduroam Discovery CDN (https://discovery.eduroam.app)
 *   Source B: Hipo University Domains Registry (GitHub CDN)
 *
 * Re-compile the dataset with: node scripts/compile-institutions.mjs
 */

import compiledData from "@/data/african_universities.json";

export type InstitutionStatus = "connected" | "not-connected";

export interface CompiledInstitution {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  domains: string[];
  webPages: string[];
  stateProvince: string | null;
  status: InstitutionStatus;
  eduroam: {
    catIdp: number;
    eduroamId: string;
    profiles: number;
  } | null;
}

export interface DirectoryMeta {
  generatedAt: string;
  sources: {
    eduroam: string;
    hipo: string;
  };
  stats: {
    total: number;
    connected: number;
    notConnected: number;
    countries: number;
  };
}

// Cast imported JSON
const directory = compiledData as {
  _meta: DirectoryMeta;
  institutions: CompiledInstitution[];
};

/** Metadata about the compiled directory */
export const directoryMeta: DirectoryMeta = directory._meta;

/** All 840+ African universities */
export const allInstitutions: CompiledInstitution[] = directory.institutions;

/** The 3 representative examples always shown by default */
export const REPRESENTATIVE_IDS = [
  "university-of-ghana",         // Ghana - connected (eduroam catchall)
  "university-of-nairobi",       // Kenya - connected (national federation)
  "universit-de-yaound-i",       // Cameroon - not yet connected
] as const;

/**
 * Find an institution by campus email domain.
 * Supports both exact domain match and subdomain matching.
 * e.g., "student@st.ug.edu.gh" → matches "ug.edu.gh"
 */
export function findByDomain(
  emailOrDomain: string
): CompiledInstitution | null {
  let domain = emailOrDomain.toLowerCase().trim();

  // Extract domain from email address
  if (domain.includes("@")) {
    domain = domain.split("@")[1] || "";
  }
  // Strip protocol/path fragments
  domain = domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "").trim();

  if (!domain) return null;

  return (
    allInstitutions.find((inst) =>
      inst.domains.some(
        (d) =>
          d.toLowerCase() === domain ||
          domain.endsWith("." + d.toLowerCase())
      )
    ) || null
  );
}

/**
 * Get a sorted list of unique countries with institution counts.
 */
export function getCountries(): Array<{
  key: string;
  label: string;
  code: string;
  total: number;
  connected: number;
}> {
  const map = new Map<
    string,
    { label: string; code: string; total: number; connected: number }
  >();

  for (const inst of allInstitutions) {
    const existing = map.get(inst.country);
    if (existing) {
      existing.total++;
      if (inst.status === "connected") existing.connected++;
    } else {
      map.set(inst.country, {
        label: inst.country,
        code: inst.countryCode,
        total: 1,
        connected: inst.status === "connected" ? 1 : 0,
      });
    }
  }

  return Array.from(map.entries())
    .map(([key, val]) => ({ key, ...val }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * Search institutions by query string.
 * Searches across name, country, and domains.
 */
export function searchInstitutions(
  query: string,
  options?: {
    country?: string;
    status?: InstitutionStatus | "all";
    limit?: number;
  }
): CompiledInstitution[] {
  const q = query.toLowerCase().trim();
  const { country, status = "all", limit } = options || {};

  let results = allInstitutions;

  // Country filter
  if (country && country !== "all") {
    results = results.filter((inst) => inst.country === country);
  }

  // Status filter
  if (status !== "all") {
    results = results.filter((inst) => inst.status === status);
  }

  // Text query
  if (q) {
    results = results.filter(
      (inst) =>
        inst.name.toLowerCase().includes(q) ||
        inst.country.toLowerCase().includes(q) ||
        inst.domains.some((d) => d.toLowerCase().includes(q))
    );
  }

  // Limit
  if (limit && limit > 0) {
    results = results.slice(0, limit);
  }

  return results;
}

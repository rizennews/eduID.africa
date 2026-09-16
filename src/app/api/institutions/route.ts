import { NextResponse } from "next/server";

const EDUROAM_DISCOVERY_URL =
  "https://discovery.eduroam.app/v1/discovery.json";

// ISO 3166-1 alpha-2 codes for African countries
const AFRICAN_CODES = new Set([
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD",
  "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET",
  "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG",
  "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW",
  "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG",
  "TN", "UG", "ZM", "ZW",
]);

const CODE_TO_COUNTRY: Record<string, string> = {
  DZ: "Algeria", AO: "Angola", BJ: "Benin", BW: "Botswana",
  BF: "Burkina Faso", BI: "Burundi", CV: "Cabo Verde", CM: "Cameroon",
  CF: "Central African Republic", TD: "Chad", KM: "Comoros", CG: "Congo",
  CD: "DR Congo", CI: "Côte d'Ivoire", DJ: "Djibouti", EG: "Egypt",
  GQ: "Equatorial Guinea", ER: "Eritrea", SZ: "Eswatini", ET: "Ethiopia",
  GA: "Gabon", GM: "Gambia", GH: "Ghana", GN: "Guinea", GW: "Guinea-Bissau",
  KE: "Kenya", LS: "Lesotho", LR: "Liberia", LY: "Libya", MG: "Madagascar",
  MW: "Malawi", ML: "Mali", MR: "Mauritania", MU: "Mauritius", MA: "Morocco",
  MZ: "Mozambique", NA: "Namibia", NE: "Niger", NG: "Nigeria", RW: "Rwanda",
  ST: "São Tomé and Príncipe", SN: "Senegal", SC: "Seychelles",
  SL: "Sierra Leone", SO: "Somalia", ZA: "South Africa", SS: "South Sudan",
  SD: "Sudan", TZ: "Tanzania", TG: "Togo", TN: "Tunisia", UG: "Uganda",
  ZM: "Zambia", ZW: "Zimbabwe",
};

/**
 * GET /api/institutions
 *
 * Live endpoint that fetches the official geteduroam discovery feed
 * and returns African eduroam-connected institutions.
 *
 * Query parameters:
 *   ?country=GH  - Filter by country code
 *   ?q=nairobi   - Search by name
 *
 * Response is cached for 1 hour (revalidate: 3600).
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const countryFilter = searchParams.get("country")?.toUpperCase();
    const query = searchParams.get("q")?.toLowerCase().trim();

    // Fetch the live eduroam discovery feed with ISR caching
    const res = await fetch(EDUROAM_DISCOVERY_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch eduroam discovery feed" },
        { status: 502 }
      );
    }

    const data = await res.json();

    // Filter to African institutions
    let african = (data.instances || [])
      .filter((inst: { country?: string }) => {
        const code = (inst.country || "").toUpperCase();
        return AFRICAN_CODES.has(code);
      })
      .map(
        (inst: {
          cat_idp: number;
          id: string;
          name: string;
          country: string;
          profiles: Array<{ id: string; name: string }>;
          geo: Array<{ lat: number; lon: number }>;
        }) => ({
          catIdp: inst.cat_idp,
          eduroamId: inst.id,
          name: inst.name,
          country: CODE_TO_COUNTRY[inst.country.toUpperCase()] || inst.country,
          countryCode: inst.country.toUpperCase(),
          profiles: inst.profiles?.length || 0,
          status: "connected" as const,
        })
      );

    // Apply country filter
    if (countryFilter) {
      african = african.filter(
        (inst: { countryCode: string }) => inst.countryCode === countryFilter
      );
    }

    // Apply query search
    if (query) {
      african = african.filter((inst: { name: string; country: string }) =>
        inst.name.toLowerCase().includes(query) ||
        inst.country.toLowerCase().includes(query)
      );
    }

    // Sort by country then name
    african.sort((a: { country: string; name: string }, b: { country: string; name: string }) => {
      const c = a.country.localeCompare(b.country);
      return c !== 0 ? c : a.name.localeCompare(b.name);
    });

    return NextResponse.json({
      total: african.length,
      lastUpdated: new Date().toISOString(),
      source: "discovery.eduroam.app",
      institutions: african,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

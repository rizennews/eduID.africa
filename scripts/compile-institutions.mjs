/**
 * scripts/compile-institutions.mjs
 *
 * Build-time script that fetches two free, open data sources and
 * cross-references them to produce a comprehensive African university directory:
 *
 * Source A: geteduroam Global Discovery CDN (GÉANT / eduroam)
 *   https://discovery.eduroam.app/v1/discovery.json
 *   → 5,200+ verified eduroam identity providers worldwide
 *
 * Source B: Hipo Open University Domains Registry (GitHub Raw CDN)
 *   https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json
 *   → 10,000+ universities worldwide with official web domains
 *
 * Output: src/data/african_universities.json
 *
 * Cross-referencing logic:
 *   - If a university exists in Source A (eduroam) → status = "connected"
 *   - If a university exists in Source B but NOT Source A → status = "not-connected"
 *   - Domains from Source B enable email domain lookup
 *
 * Run: node scripts/compile-institutions.mjs
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EDUROAM_DISCOVERY_URL =
  "https://discovery.eduroam.app/v1/discovery.json";
const HIPO_UNIVERSITIES_URL =
  "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

// ISO 3166-1 alpha-2 codes for all 54 African countries
const AFRICAN_COUNTRY_CODES = new Set([
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD",
  "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET",
  "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG",
  "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW",
  "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG",
  "TN", "UG", "ZM", "ZW",
]);

const AFRICAN_COUNTRY_NAMES = new Set([
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cape Verde", "Cameroon", "Central African Republic", "Chad",
  "Comoros", "Congo", "Ivory Coast", "Côte d'Ivoire", "Democratic Republic of the Congo",
  "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia",
  "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho",
  "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius",
  "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
  "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
  "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia",
  "Uganda", "Zambia", "Zimbabwe",
  // United Republic of Tanzania (used in some datasets)
  "United Republic of Tanzania",
  // Republic of the Congo, etc.
  "Republic of the Congo",
  "The Democratic Republic Of The Congo",
  "Congo, the Democratic Republic of the",
]);

// Map alpha-2 codes to their canonical country names
const CODE_TO_COUNTRY = {
  DZ: "Algeria", AO: "Angola", BJ: "Benin", BW: "Botswana",
  BF: "Burkina Faso", BI: "Burundi", CV: "Cabo Verde", CM: "Cameroon",
  CF: "Central African Republic", TD: "Chad", KM: "Comoros", CG: "Congo",
  CD: "Democratic Republic of the Congo", CI: "Côte d'Ivoire",
  DJ: "Djibouti", EG: "Egypt", GQ: "Equatorial Guinea", ER: "Eritrea",
  SZ: "Eswatini", ET: "Ethiopia", GA: "Gabon", GM: "Gambia", GH: "Ghana",
  GN: "Guinea", GW: "Guinea-Bissau", KE: "Kenya", LS: "Lesotho",
  LR: "Liberia", LY: "Libya", MG: "Madagascar", MW: "Malawi", ML: "Mali",
  MR: "Mauritania", MU: "Mauritius", MA: "Morocco", MZ: "Mozambique",
  NA: "Namibia", NE: "Niger", NG: "Nigeria", RW: "Rwanda",
  ST: "Sao Tome and Principe", SN: "Senegal", SC: "Seychelles",
  SL: "Sierra Leone", SO: "Somalia", ZA: "South Africa", SS: "South Sudan",
  SD: "Sudan", TZ: "Tanzania", TG: "Togo", TN: "Tunisia", UG: "Uganda",
  ZM: "Zambia", ZW: "Zimbabwe",
};

// Normalize names for fuzzy matching
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Normalize country name to canonical form
function normalizeCountryName(name) {
  const lower = name.toLowerCase().trim();
  if (lower.includes("ivory coast") || lower.includes("cote d")) return "Côte d'Ivoire";
  if (lower.includes("cape verde") || lower.includes("cabo verde")) return "Cabo Verde";
  if (lower.includes("eswatini") || lower.includes("swaziland")) return "Eswatini";
  if (lower.includes("tanzania")) return "Tanzania";
  if (lower.includes("democratic") && lower.includes("congo")) return "Democratic Republic of the Congo";
  if (lower.includes("congo") && !lower.includes("democratic")) return "Congo";
  for (const canonical of AFRICAN_COUNTRY_NAMES) {
    if (normalize(canonical) === normalize(name)) return canonical;
  }
  return name;
}

async function fetchJSON(url, label) {
  console.log(`📡 Fetching ${label}...`);
  const startTime = Date.now();
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${label}: ${response.status}`);
  const data = await response.json();
  console.log(`   ✓ ${label} fetched in ${Date.now() - startTime}ms`);
  return data;
}

async function main() {
  console.log("\n🔧 eduID.africa Institution Directory Compiler\n");
  console.log("━".repeat(60));

  // Step 1: Fetch both data sources in parallel
  const [eduroamData, hipoData] = await Promise.all([
    fetchJSON(EDUROAM_DISCOVERY_URL, "geteduroam Discovery Feed"),
    fetchJSON(HIPO_UNIVERSITIES_URL, "Hipo University Domains"),
  ]);

  console.log(`\n📊 Raw data:`);
  console.log(`   eduroam instances: ${eduroamData.instances?.length || 0}`);
  console.log(`   Hipo universities: ${hipoData.length}`);

  // Step 2: Extract African eduroam institutions (Source A)
  const eduroamAfricanMap = new Map();
  for (const inst of eduroamData.instances || []) {
    const code = (inst.country || "").toUpperCase();
    if (AFRICAN_COUNTRY_CODES.has(code)) {
      const country = CODE_TO_COUNTRY[code] || code;
      const normalizedName = normalize(inst.name);
      eduroamAfricanMap.set(normalizedName, {
        catIdp: inst.cat_idp,
        eduroamId: inst.id,
        name: inst.name,
        country,
        countryCode: code,
        profiles: (inst.profiles || []).length,
        geo: inst.geo || [],
      });
    }
  }

  console.log(`   African eduroam providers: ${eduroamAfricanMap.size}`);

  // Step 3: Extract African universities from Hipo (Source B)
  const hipoAfricanMap = new Map();
  for (const uni of hipoData) {
    const code = (uni.alpha_two_code || "").toUpperCase();
    const countryName = normalizeCountryName(uni.country || "");
    if (AFRICAN_COUNTRY_CODES.has(code) || AFRICAN_COUNTRY_NAMES.has(countryName)) {
      const country = CODE_TO_COUNTRY[code] || countryName;
      const normalizedName = normalize(uni.name);
      hipoAfricanMap.set(normalizedName, {
        name: uni.name,
        country,
        countryCode: code,
        domains: uni.domains || [],
        webPages: uni.web_pages || [],
        stateProvince: uni["state-province"] || null,
      });
    }
  }

  console.log(`   African Hipo universities: ${hipoAfricanMap.size}`);

  // Step 4: Cross-reference & merge
  const mergedInstitutions = [];
  const matched = new Set();

  // 4a: Start with all Hipo universities (the complete directory)
  for (const [normalizedName, hipo] of hipoAfricanMap) {
    // Try to find an eduroam match using fuzzy name comparison
    let eduroamMatch = eduroamAfricanMap.get(normalizedName);

    // Broader fuzzy matching if no exact match
    if (!eduroamMatch) {
      for (const [eduroamNorm, eduroamInst] of eduroamAfricanMap) {
        // Same country + significant name overlap
        if (
          eduroamInst.countryCode === hipo.countryCode &&
          (eduroamNorm.includes(normalizedName.split(" ")[0]) ||
            normalizedName.includes(eduroamNorm.split(" ")[0]))
        ) {
          // Calculate Jaccard similarity of name tokens
          const hipoTokens = new Set(normalizedName.split(" ").filter(t => t.length > 2));
          const eduroamTokens = new Set(eduroamNorm.split(" ").filter(t => t.length > 2));
          const intersection = [...hipoTokens].filter(t => eduroamTokens.has(t));
          const union = new Set([...hipoTokens, ...eduroamTokens]);
          const similarity = union.size > 0 ? intersection.length / union.size : 0;

          if (similarity >= 0.4) {
            eduroamMatch = eduroamInst;
            break;
          }
        }
      }
    }

    const isConnected = !!eduroamMatch;
    if (eduroamMatch) {
      matched.add(normalize(eduroamMatch.name));
    }

    // Generate a slug-safe ID
    const id = normalizedName
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60);

    mergedInstitutions.push({
      id,
      name: hipo.name,
      country: hipo.country,
      countryCode: hipo.countryCode,
      domains: hipo.domains,
      webPages: hipo.webPages,
      stateProvince: hipo.stateProvince,
      status: isConnected ? "connected" : "not-connected",
      eduroam: eduroamMatch
        ? {
            catIdp: eduroamMatch.catIdp,
            eduroamId: eduroamMatch.eduroamId,
            profiles: eduroamMatch.profiles,
          }
        : null,
    });
  }

  // 4b: Add eduroam-only institutions not in Hipo (NRENs, research orgs)
  for (const [normalizedName, eduroamInst] of eduroamAfricanMap) {
    if (!matched.has(normalizedName)) {
      const id = normalizedName
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);

      mergedInstitutions.push({
        id,
        name: eduroamInst.name,
        country: eduroamInst.country,
        countryCode: eduroamInst.countryCode,
        domains: [],
        webPages: [],
        stateProvince: null,
        status: "connected",
        eduroam: {
          catIdp: eduroamInst.catIdp,
          eduroamId: eduroamInst.eduroamId,
          profiles: eduroamInst.profiles,
        },
      });
    }
  }

  // Step 5: Sort by country then name
  mergedInstitutions.sort((a, b) => {
    const countryCompare = a.country.localeCompare(b.country);
    if (countryCompare !== 0) return countryCompare;
    return a.name.localeCompare(b.name);
  });

  // Step 6: Compile stats
  const connected = mergedInstitutions.filter((i) => i.status === "connected").length;
  const notConnected = mergedInstitutions.filter((i) => i.status === "not-connected").length;
  const countriesSet = new Set(mergedInstitutions.map((i) => i.country));

  const output = {
    _meta: {
      generatedAt: new Date().toISOString(),
      sources: {
        eduroam: EDUROAM_DISCOVERY_URL,
        hipo: HIPO_UNIVERSITIES_URL,
      },
      stats: {
        total: mergedInstitutions.length,
        connected,
        notConnected,
        countries: countriesSet.size,
      },
    },
    institutions: mergedInstitutions,
  };

  // Step 7: Write output
  const outputPath = join(__dirname, "..", "src", "data", "african_universities.json");
  writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");

  console.log("\n━".repeat(60));
  console.log(`\n✅ African University Directory compiled successfully!\n`);
  console.log(`   📁 Output: src/data/african_universities.json`);
  console.log(`   🏫 Total institutions: ${mergedInstitutions.length}`);
  console.log(`   ✅ Connected (eduroam): ${connected}`);
  console.log(`   ⏳ Not yet connected: ${notConnected}`);
  console.log(`   🌍 Countries covered: ${countriesSet.size}`);
  console.log(`\n   Top countries:`);

  // Country breakdown
  const countryCounts = {};
  for (const inst of mergedInstitutions) {
    countryCounts[inst.country] = (countryCounts[inst.country] || 0) + 1;
  }
  Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([country, count]) => {
      const connectedInCountry = mergedInstitutions.filter(
        (i) => i.country === country && i.status === "connected"
      ).length;
      console.log(
        `   ${country.padEnd(30)} ${String(count).padStart(4)} total, ${String(connectedInCountry).padStart(3)} connected`
      );
    });

  console.log("");
}

main().catch((err) => {
  console.error("❌ Compilation failed:", err.message);
  process.exit(1);
});

import { CompanyProfile, GapAnalysisResult } from "./types";
import { IntelligenceMatrix } from "./IntelligenceMatrix";

function fallbackResult(): GapAnalysisResult {
  return {
    readinessScore: 0,
    riskScore: 100,
    missingCertifications: [],
    readinessTier: "Emerging Exporter",
  };
}

export function runGapAnalysis(
  profile: CompanyProfile
): GapAnalysisResult {
  const rules =
    IntelligenceMatrix?.[profile.industry]?.[profile.exportMarket];

  // Safety Guard (Prevents Runtime Crash Forever)
  if (!rules) {
    console.error(
      "Missing IntelligenceMatrix configuration:",
      profile.industry,
      profile.exportMarket
    );
    return fallbackResult();
  }

  const requiredCerts = rules.required;

  const missingCertifications = requiredCerts.filter(
    (cert) => !profile.certifications.includes(cert)
  );

  let readinessScore = 100;

  readinessScore -= missingCertifications.length * 15;

  if (!profile.hasQualitySystem) readinessScore -= 10;
  if (!profile.hasPreviousExports) readinessScore -= 5;

  if (profile.annualVolume > 10000) readinessScore -= 5;

  readinessScore = Math.max(0, readinessScore);

  const riskScore =
    rules.riskWeight +
    missingCertifications.length * 10 +
    (profile.hasQualitySystem ? 0 : 5);

  let readinessTier: GapAnalysisResult["readinessTier"] =
    "Emerging Exporter";

  if (readinessScore >= 85) readinessTier = "Global Market Ready";
  else if (readinessScore >= 70) readinessTier = "Export Ready";
  else if (readinessScore >= 50) readinessTier = "Developing Exporter";

  return {
    readinessScore,
    riskScore,
    missingCertifications,
    readinessTier,
  };
}
import { CompanyProfile, GapAnalysisResult } from "./types";
import { IntelligenceMatrix } from "./IntelligenceMatrix";

function fallbackResult(): GapAnalysisResult {
  return {
    complianceScore: 0,
    riskScore: 100,
    missingCertifications: [],
    readinessTier: "Not Ready",
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

  let complianceScore = 100;

  complianceScore -= missingCertifications.length * 15;

  if (!profile.hasQualitySystem) complianceScore -= 10;
  if (!profile.hasPreviousExports) complianceScore -= 5;

  if (profile.annualVolume > 10000) complianceScore -= 5;

  complianceScore = Math.max(0, complianceScore);

  const riskScore =
    rules.riskWeight +
    missingCertifications.length * 10 +
    (profile.hasQualitySystem ? 0 : 5);

  let readinessTier: GapAnalysisResult["readinessTier"] =
    "Not Ready";

  if (complianceScore >= 85) readinessTier = "Market Entry Ready";
  else if (complianceScore >= 70) readinessTier = "Export Ready";
  else if (complianceScore >= 50) readinessTier = "Developing";

  return {
    complianceScore,
    riskScore,
    missingCertifications,
    readinessTier,
  };
}
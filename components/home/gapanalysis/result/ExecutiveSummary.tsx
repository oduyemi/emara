"use client";
import { useGenerateNarrative } from "./GenerateNarrative";
import { CompanyProfile, GapAnalysisResult } from "../engine/types";

export default function ExecutiveSummary({
  profile,
  result,
}: {
  profile: CompanyProfile;
  result: GapAnalysisResult;
}) {
  const generateNarrative = useGenerateNarrative();

  const narrativeText = generateNarrative({
    industry: profile.industry,
    market: profile.exportMarket,
    tier: result.readinessTier,
    score: result.complianceScore,
    gaps: result.missingCertifications,
  });

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Executive Compliance Summary</h4>
      <p className="text-neutral-400 whitespace-pre-line leading-relaxed">
        {narrativeText}
      </p>
    </div>
  );
}
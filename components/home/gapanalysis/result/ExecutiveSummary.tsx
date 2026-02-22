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
    <div className="mt-14 p-10 bg-red-950 border border-red-950 rounded-3xl">
      <h4 className="text-xl font-semibold mb-6 text-white">
        Executive Compliance Summary
      </h4>
      <p className="text-neutral-400 whitespace-pre-line leading-relaxed">
        {narrativeText}
      </p>
    </div>
  );
}
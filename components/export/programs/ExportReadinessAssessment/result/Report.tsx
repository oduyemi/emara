"use client";
import ResultsPanel from "./ResultPanel";
import ExecutiveSummary from "./ExecutiveSummary";
import RecommendedNextSteps from "./NextSteps";
import ContinueJourney from "./ContinueJourney";

import { CompanyProfile, GapAnalysisResult } from "../engine/types";

export default function ExportReadinessReport({
  profile,
  result,
}: {
  profile: CompanyProfile;
  result: GapAnalysisResult;
}) {
  return (
    <section className="space-y-16">

      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Export Readiness Report
        </h2>

        <p className="text-neutral-400 max-w-2xl">
          Based on your responses, Emara has evaluated your export readiness
          and identified areas that require attention before entering
          international markets.
        </p>
      </div>

      {/* Overview */}
      <ResultsPanel result={result} />

      {/* Executive Narrative */}
      <ExecutiveSummary
        profile={profile}
        result={result}
      />

      {/* Next Steps */}
      <RecommendedNextSteps
        tier={result.readinessTier}
      />

      {/* Continue Journey */}
      <ContinueJourney />

    </section>
  );
}
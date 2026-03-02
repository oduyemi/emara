"use client";
import { useTranslations } from "next-intl";
import { GapAnalysisResult } from "../engine/types";
import RiskIndicator from "./RiskIndicator";
import ComplianceGauge from "./ComplianceGuage";
import MissingCertifications from "./MissingCertifications";

export default function ResultsPanel({
  result,
}: {
  result: GapAnalysisResult;
}) {
  const t = useTranslations("GapAnalysisInteractive");

  const readinessKeyMap: Record<string, string> = {
    "Not Ready": "readiness_not_ready",
    "Developing": "readiness_developing",
    "Export Ready": "readiness_export_ready",
    "Market Entry Ready": "readiness_market_entry_ready",
  };

  return (
    <div className="border border-neutral-800 rounded-3xl p-12 space-y-12">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <ComplianceGauge score={result.complianceScore} />

        <div className="space-y-6 w-full">
          <div>
            <h3 className="text-2xl font-semibold">
              {t(readinessKeyMap[result.readinessTier])}
            </h3>
            <p className="text-neutral-400">
              {t("results_export_readiness_classification")}
            </p>
          </div>

          <RiskIndicator score={result.riskScore} />
        </div>
      </div>

      <MissingCertifications
        certifications={result.missingCertifications}
      />
    </div>
  );
}
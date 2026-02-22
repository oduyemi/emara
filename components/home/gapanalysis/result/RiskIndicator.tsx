"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function getRiskLevel(score: number) {
  if (score >= 70)
    return { key: "risk_high_label", color: "bg-red-500" };

  if (score >= 40)
    return { key: "risk_moderate_label", color: "bg-yellow-500" };

  return { key: "risk_low_label", color: "bg-emerald-500" };
}

export default function RiskIndicator({ score }: { score: number }) {
  const t = useTranslations("GapAnalysisInteractive");

  const risk = getRiskLevel(score);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-neutral-400">
        <span>{t("results_risk_exposure_index")}</span>
        <span>{t(risk.key)}</span>
      </div>

      <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(score, 100)}%` }}
          transition={{ duration: 0.8 }}
          className={`h-full ${risk.color}`}
        />
      </div>
    </div>
  );
}
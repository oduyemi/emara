"use client";
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion";
import { Step } from "./engine/types";


export default function ProgressBar({ current }: { current: number }) {
  const t = useTranslations("AssessmentInteractive")

  const steps: Step[] = [
    "industry",
    "product",
    "market",
    "volume",
    "certifications",
    "operations",
    "results"
];  

  const percentage = ((current - 1) / (steps.length - 1)) * 100;

  

  return (
    <div className="space-y-6 mb-14">

      {/* Step Labels */}
      <div className="flex justify-between text-xs text-neutral-500">
        {steps.map((step, index) => (
          <span
            key={step}
            className={
              index + 1 <= current
                ? "text-emerald-400"
                : "text-neutral-600"
            }
          >
            {t(`progress_${step}`)}
          </span>
        ))}
      </div>

      {/* Progress Track */}
      <div className="relative w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6 }}
          className="h-full bg-emerald-500"
        />
      </div>
    </div>
  );
}
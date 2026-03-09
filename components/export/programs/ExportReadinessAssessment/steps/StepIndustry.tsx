"use client";
import { useTranslations, useLocale } from "next-intl"
import { Industry } from "../engine/types";

export default function StepIndustry({
  value,
  onChange,
  onNext,
}: {
  value: Industry;
  onChange: (v: Industry) => void;
  onNext: () => void;
}) {
    const t = useTranslations("AssessmentInteractive")
    const industries: Industry[] = [
        "processed_food",
        "agriculture",
        "cosmetics",
        "pharmaceuticals",
        "textiles",
        "industrial_equipment",
      ];    

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">
      {t("step1_title")}
      </h2>
      <p className="text-neutral-400 max-w-xl">
        {t("step1_description")}
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => onChange(industry)}
            className={`p-6 rounded-2xl border ${
              value === industry
                ? "border-red-950 text-black"
                : "border-neutral-800 bg-red-950 text-white"
            }`}
          >
            {t(`industry_${industry}`)}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="bg-red-950 text-white px-6 py-3 rounded-xl hover:bg-red-900"
      >
        {t("button_continue")}
      </button>
    </div>
  );
}
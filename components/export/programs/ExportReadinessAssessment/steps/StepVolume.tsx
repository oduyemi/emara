"use client";
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion";

export default function StepVolume({
  annualVolume,
  onChange,
  onNext,
}: {
  annualVolume: number;
  onChange: (value: number) => void;
  onNext: () => void;
}) {
  const t = useTranslations("AssessmentInteractive")
  const isValid = annualVolume > 0;

  function getVolumeTier(volume: number) {
    if (volume >= 50000) return t(`high_scale`);
    if (volume >= 10000) return t("growth_stage");
    if (volume > 0) return t("emerging");
    return "";
  }

  const tier = getVolumeTier(annualVolume);

  return (
    <div className="space-y-10">

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold">
          {t("step4_title")}
        </h2>
        <p className="text-neutral-400 max-w-xl">
          {t("step4_description")}
        </p>
      </div>

      <div className="max-w-xl space-y-6">

        <div className="space-y-2">
          <label className="text-sm text-neutral-400">
            {t("input_annual_volume_description")}
          </label>
          <input
            type="number"
            value={annualVolume || ""}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder="e.g. 12,000"
            className="w-full p-4 border border-neutral-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        {annualVolume > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 border border-red-800 rounded-xl"
          >
            <div className="text-sm text-neutral-400">
              {t("export_scale_classification")}
            </div>
            <div className="text-lg font-medium mt-1">
              {tier}
            </div>
          </motion.div>
        )}
      </div>

      <div>
        <button
          disabled={!isValid}
          onClick={onNext}
          className={`px-8 py-3 rounded-xl transition ${
            isValid
              ? "bg-red-950 text-white hover:bg-red-900"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          {t("button_continue")}
        </button>
      </div>
    </div>
  );
}
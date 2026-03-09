"use client";
import { useTranslations, useLocale } from "next-intl"


export default function StepProduct({
  productName,
  onChange,
  onNext,
}: {
  productName: string;
  onChange: (value: string) => void;
  onNext: () => void;
}) {
  const t = useTranslations("AssessmentInteractive")
  const isValid = productName.trim().length > 2;

  return (
    <div className="space-y-10">

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold">
          {t("step2_title")}
        </h2>
        <p className="text-neutral-400 max-w-xl">
          {t("step2_description")}
        </p>
      </div>

      <div className="space-y-6 max-w-xl">
        <div className="space-y-2">
          <label className="text-sm text-neutral-400">
            {t("input_product_name")}
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => onChange(e.target.value)}
            placeholder="e.g. Processed Cashew Nuts"
            className="w-full p-4 border border-red-950 rounded-2xl focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        <div className="text-xs text-neutral-500">
          {t("advanced_note")}
        </div>
      </div>

      <div>
        <button
          disabled={!isValid}
          onClick={onNext}
          className={`px-8 py-3 rounded-xl transition ${
            isValid
              ? "bg-red-950 text-white hover:bg-red-900 text-white"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          {t("button_continue")}
        </button>
      </div>
    </div>
  );
}
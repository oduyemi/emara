"use client";
import { useTranslations, useLocale } from "next-intl"

export default function StepOperations({
  hasQualitySystem,
  hasPreviousExports,
  onChange,
  onRun,
}: {
  hasQualitySystem: boolean;
  hasPreviousExports: boolean;
  onChange: (field: string, value: boolean) => void;
  onRun: () => void;
}) {
  const t = useTranslations("AssessmentInteractive")

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">
        {t("step6_title")}
      </h2>
      <p className="text-neutral-400 max-w-xl">
          {t("step6_description")}
        </p>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={hasQualitySystem}
            onChange={(e) =>
              onChange("hasQualitySystem", e.target.checked)
            }
          />
          {t("checkbox_quality_system")}
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={hasPreviousExports}
            onChange={(e) =>
              onChange("hasPreviousExports", e.target.checked)
            }
          />
          {t("checkbox_previous_exports")}
        </label>
      </div>

      <button
        onClick={onRun}
        className="bg-red-950 text-white px-6 py-3 rounded-xl hover:bg-red-900"
      >
        {t("button_run")}
      </button>
    </div>
  );
}
"use client";
import { useTranslations } from "next-intl";

export default function MissingCertifications({
  certifications,
}: {
  certifications: string[];
}) {
  const t = useTranslations("AssessmentInteractive");

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">
        {t("results_readiness_gaps")}
      </h4>

      {certifications.length === 0 ? (
        <div className="p-6 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-400">
          {t("results_no_gaps")}
        </div>
      ) : (
        <div className="grid gap-3">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="p-4 border border-neutral-800 rounded-xl"
            >
              <div className="font-medium">{cert}</div>
              <div className="text-sm text-neutral-500">
                {t("results_required_notice")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
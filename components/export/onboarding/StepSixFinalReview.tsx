"use client";
import { useMemo } from "react";
import { CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { saveOnboardingStep } from "@/lib/api/onboarding";

type Props = {
  onBack: () => void;
  onSubmit: () => void;
};

export const StepSixFinalReview = ({ onBack, onSubmit }: Props) => {
  const t = useTranslations("stepSix");

  const profileScore = 85;

  const tier = useMemo(() => {
    if (profileScore >= 80) return "Gold";
    if (profileScore >= 60) return "Silver";
    return "Bronze";
  }, [profileScore]);

  const tierStyles = {
    Bronze: "bg-amber-100 text-amber-700",
    Silver: "bg-gray-200 text-gray-700",
    Gold: "bg-yellow-100 text-yellow-700",
  };

  const progressWidth = `${profileScore}%`;

  const handleSubmit = async () => {
    try {
      await saveOnboardingStep(6, {});
  
      // redirect or success screen
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-secondary mb-2">
          {t("title")}
        </h2>

        <p className="text-black text-sm max-w-2xl">
          {t("description")}
        </p>
      </div>

      {/* Tier Card */}
      <div className="rounded-2xl border bg-gradient-to-r from-[#0F233F] to-[#132B4A] text-gray-300 p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={18} />
          <p className="text-sm uppercase text-accent opacity-80">
            {t("tierLabel")}
          </p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span
            className={`px-4 py-2 rounded-full text-black text-sm font-medium ${
              tierStyles[tier as "Bronze" | "Silver" | "Gold"]
            }`}
          >
            {t(`tiers.${tier}`)}
          </span>

          <span className="text-sm opacity-80">
            {t("completion", { percent: profileScore })}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-700"
            style={{ width: progressWidth }}
          />
        </div>

        <p className="text-sm opacity-90">
          {t("tierDescription")}
        </p>
      </div>

      {/* Profile Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#0F233F]">
          {t("summary.title")}
        </h3>

        <div className="grid gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4">
            <CheckCircle2 size={18} className="text-green-600" />
            <span>{t("summary.company")}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4">
            <CheckCircle2 size={18} className="text-green-600" />
            <span>{t("summary.compliance")}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4">
            <CheckCircle2 size={18} className="text-green-600" />
            <span>{t("summary.operations")}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle size={18} className="text-amber-500" />
            <span>{t("status.pending")}</span>
          </div>
        </div>
      </div>

      {/* Submission Card */}
      <div className="border rounded-2xl p-6 bg-gray-50 shadow-sm">
        <h4 className="text-sm font-semibold text-[#0F233F] mb-2">
          {t("submit.title")}
        </h4>

        <p className="text-xs text-gray-600 mb-6">
          {t("submit.description")}
        </p>

        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm transition"
          >
            {t("actions.back")}
          </button>

          <button
            onClick={handleSubmit}
            className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            {t("actions.submit")}
          </button>
        </div>
      </div>
    </div>
  );
};
"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



const OPTIONS = [
  { label: "Very High", value: 5 },
  { label: "High", value: 4 },
  { label: "Indifferent", value: 3 },
  { label: "Low", value: 2 },
  { label: "Very Low", value: 1 },
];

export const StepLayout = ({
  title,
  questions,
  answers,
  onAnswer,
  stepIndex,
  totalSteps,
}: any) => {
  const t = useTranslations("ReadinessForm.stepLayout");

  return (
    <div>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-wider text-green-600 font-medium mb-2">
          {t("step", { current: stepIndex + 1, total: totalSteps })}
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {t("instruction")}
        </p>
      </div>

      {/* Questions */}
      <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">

        {questions.map((q: any) => (
          <div
            key={q.id}
            className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >

            {/* Status */}
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-400">{t("questionLabel")}</span>
              {answers[q.id] && (
                <span className="text-xs text-green-500">✓ {t("answered")}</span>
              )}
            </div>

            {/* Question */}
            <p className="mb-5 text-base font-medium text-gray-800">
              {q.text}
            </p>

            {/* Options */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {OPTIONS.map((opt) => {
                const active = answers[q.id] === opt.value;

                return (
                  <button
                    key={opt.label}
                    onClick={() => onAnswer(q.id, opt.value)}
                    className={`relative py-3 rounded-xl text-sm font-medium border transition-all
                      ${
                        active
                          ? "btn-primary border-transparent shadow-md"
                          : "bg-gray-50 border-gray-200 hover:border-gray-400 hover:bg-white"
                      }`}
                  >
                    {active && (
                      <motion.div
                        layoutId={`active-${q.id}`}
                        className="absolute inset-0 rounded-xl bg-white/10"
                      />
                    )}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
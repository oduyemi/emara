"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STEPS } from "./question";
import { StepLayout } from "./StepLayout";
import { StepOneFields } from "./Fields";
import { useTranslations } from "next-intl";


export const ExportReadinessForm = () => {
  const t = useTranslations("ReadinessForm");
  const [mode, setMode] = useState<"intro" | "questions" | "result">("intro");
  const [formData, setFormData] = useState<any>({});
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = STEPS[stepIndex];

  const handleAnswer = (id: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const isStepComplete = currentStep?.questions.every(
    (q) => answers[q.id] !== undefined
  );

  const progress =
    mode === "questions"
      ? (stepIndex / STEPS.length) * 100
      : 0;

  const next = () => {
    if (mode === "intro") {
      setMode("questions");
      return;
    }

    if (!isStepComplete) return;

    if (stepIndex < STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setMode("result");
    }
  };

  const prev = () => {
    if (mode === "questions" && stepIndex === 0) {
      setMode("intro");
      return;
    }
    setStepIndex((i) => i - 1);
  };

  const totalScore = Object.values(answers).reduce(
    (sum, val) => sum + val,
    0
  );

  const maxScore = Object.keys(answers).length * 5;

  const percentage =
    maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-50 via-white to-emerald-50 opacity-10" />

      {/* Header */}
      <div className="relative z-10 px-6 py-4 border-b flex justify-between">
        <h1 className="font-semibold">{t("header.title")}</h1>

        <div className="text-sm text-gray-400">
          {mode === "questions" &&
            `${stepIndex + 1} / ${STEPS.length}`}
        </div>
      </div>

      {/* Progress */}
      {mode === "questions" && (
        <div className="h-[3px] bg-gray-100">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl">

          <AnimatePresence mode="wait">

            {/* INTRO */}
            {mode === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="bg-white border rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-4">
                  {t("intro.title")}
                </h2>

                <StepOneFields data={formData} setData={setFormData} />
                <div className="flex justify-end">
                  <button
                    onClick={next}
                    className="mt-6 px-6 py-3 rounded-xl btn-primary"
                  >
                    {t("intro.cta")}
                  </button>
                </div>
              </motion.div>
            )}

            {/* QUESTIONS */}
            {mode === "questions" && (
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="bg-white border rounded-2xl p-10 shadow-xl"
              >
                <StepLayout
                  title={currentStep.title}
                  questions={currentStep.questions}
                  answers={answers}
                  onAnswer={handleAnswer}
                  stepIndex={stepIndex}
                  totalSteps={STEPS.length}
                />

                {/* Navigation */}
                <div className="flex justify-between mt-10">
                  <button onClick={prev} className="text-gray-500">
                    ← {t("navigation.back")}
                  </button>

                  <button
                    onClick={next}
                    disabled={!isStepComplete}
                    className="px-6 py-3 rounded-xl btn-primary disabled:opacity-40"
                  >
                    {t("navigation.continue")}
                  </button>
                </div>
              </motion.div>
            )}

            {/* RESULT */}
            {mode === "result" && (
              <motion.div key="result" className="text-center">
                <h2 className="text-2xl mb-4">{t("result.title")}</h2>

                <div className="text-6xl font-bold text-green-500">
                  {percentage}%
                </div>
                <p className="mt-4 text-gray-600">
                  {t("result.title")}
              </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
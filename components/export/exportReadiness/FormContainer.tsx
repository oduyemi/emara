"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCALE_OPTIONS } from "./RadioScale";
import { STEPS } from "./question";
import { StepOneFields } from "./Fields";

export const ExportReadinessForm = () => {
  const [mode, setMode] = useState<"intro" | "questions" | "result">("intro");
  const [formData, setFormData] = useState<any>({});
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false); 

  const allQuestions = useMemo(
    () =>
      STEPS.flatMap((step) =>
        step.questions.map((q) => ({ ...q, stepTitle: step.title }))
      ),
    []
  );

  const current = allQuestions[index];

  const isAnswered = answers[current?.id] !== undefined;

  const progress =
    mode === "intro"
      ? 0
      : (index / allQuestions.length) * 100;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const next = () => {
    if (mode === "intro") {
      // validate intro form
      const requiredFields = [
        "Full Name",
        "Email",
        "Company Name",
        "Company Address",
        "City",
        "State",
        "Country",
        "Phone Number",
      ];

      const isValid = requiredFields.every(
        (field) => formData[field] && formData[field].trim() !== ""
      );

      if (!isValid) {
        setError(true);
        setTimeout(() => setError(false), 500);
        return;
      }

      setMode("questions");
      return;
    }

    if (!isAnswered) {
      setError(true);
      setTimeout(() => setError(false), 400);
      return;
    }

    if (index < allQuestions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setMode("result");
    }
  };

  const prev = () => {
    if (mode === "questions" && index === 0) {
      setMode("intro");
      return;
    }

    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const totalScore = Object.values(answers).reduce(
    (sum, val) => sum + val,
    0
  );

  const maxScore = allQuestions.length * 5;

  const percentage =
    maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-emerald-300 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-gray-900">Export Readiness</h1>
          <p className="text-xs text-muted">
            From local supply → global markets
          </p>
        </div>

        <div className="text-sm text-gray-400">
          {mode === "intro"
            ? "Start"
            : mode === "result"
            ? "Done"
            : `${index + 1} / ${allQuestions.length}`}
        </div>
      </div>

      {/* Progress */}
      <div className="relative z-10 h-[3px] bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="text-center mt-4">
          <p className="text-sm text-red-500 font-medium">
            Please complete all required fields before continuing
          </p>
        </div>
      )}

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {mode === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Take Your Business Global
                  </h2>
                  <p className="text-muted mt-3">
                    Discover your export readiness and unlock global
                    opportunities.
                  </p>
                </div>

                <StepOneFields data={formData} setData={setFormData} />

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={next}
                    className="btn-primary px-6 py-3 rounded-xl shadow-md"
                  >
                    Start Assessment →
                  </button>
                </div>
              </motion.div>
            )}

            {mode === "questions" && current && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="bg-white border border-gray-100 rounded-2xl p-10 shadow-xl"
              >
                <p className="text-xs font-medium text-accent mb-3 uppercase">
                  {current.stepTitle}
                </p>

                <h2 className="text-2xl font-semibold text-muted mb-10">
                  {current.text}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {SCALE_OPTIONS.map((opt) => {
                    const active = answers[current.id] === opt.value;

                    return (
                      <motion.button
                        key={opt.value}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleAnswer(opt.value)}
                        className={`px-4 py-4 rounded-xl border text-sm font-medium transition
                          ${
                            active
                              ? "bg-red-900 text-white border-accent"
                              : "bg-white border-gray-200 hover:border-gray-400"
                          }`}
                      >
                        {opt.label}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-10 text-sm text-gray-400">
                  <button onClick={prev}>← Back</button>
                  <button onClick={next} className="hover:text-gray-700">
                    Next →
                  </button>
                </div>
              </motion.div>
            )}

            {mode === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-gray-500 mb-2">
                  Your Export Readiness Score
                </p>

                <div className="text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                  {percentage}%
                </div>

                <p className="mt-4 text-gray-600">
                  You're on your way to becoming a global exporter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

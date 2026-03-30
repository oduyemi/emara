"use client";
import { motion } from "framer-motion";


export const StepLayout = ({
  title,
  questions,
  onAnswer,
  answers,
}: any) => {
  const OPTIONS = [
    { label: "Very High", value: 5 },
    { label: "High", value: 4 },
    { label: "Indifferent", value: 3 },
    { label: "Low", value: 2 },
    { label: "Very Low", value: 1 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10 text-gray-900">{title}</h2>
      <div className="space-y-8">
        {questions.map((q: string, i: number) => (
          <div key={i}>
            <p className="mb-4 text-lg text-gray-700">{q}</p>
            <div className="grid grid-cols-5 gap-3">
              {OPTIONS.map((opt) => {
                const active = answers[q] === opt.value;
                return (
                  <button
                    key={opt.label}
                    onClick={() => onAnswer(q, opt.value)}
                    className={`relative py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-pill"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 rounded-lg bg-green-500/20"
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

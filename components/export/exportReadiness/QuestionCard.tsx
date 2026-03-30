"use client";
import { motion } from "framer-motion";

const OPTIONS = [
  { label: "Very High", value: 5 },
  { label: "High", value: 4 },
  { label: "Indifferent", value: 3 },
  { label: "Low", value: 2 },
  { label: "Very Low", value: 1 },
];

export const QuestionCard = ({
  step,
  totalSteps,
  question,
  value,
  onSelect,
}: any) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0A1625] text-white">

      <div className="w-full max-w-2xl">

        {/* Progress */}
        <div className="mb-8">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-[#4FD1C5]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="text-xs text-white/40 mt-2">
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
        >
          <h2 className="text-2xl font-semibold leading-relaxed mb-10">
            {question}
          </h2>

          <div className="grid gap-3">

            {OPTIONS.map((opt) => (
              <button
                key={opt.label}
                onClick={() => onSelect(opt.value)}
                className={`group relative px-6 py-4 rounded-xl text-left transition-all duration-200 ${
                  value === opt.value
                    ? "bg-accent text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <span className="font-medium">{opt.label}</span>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-accent/20 to-transparent" />
              </button>
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};
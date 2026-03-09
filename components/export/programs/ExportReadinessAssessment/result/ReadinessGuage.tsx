"use client";
import { motion } from "framer-motion";

export default function ReadinessGauge({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg width="180" height="180" className="rotate-[-90deg]">
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#262626"
          strokeWidth="12"
          fill="transparent"
        />

        <motion.circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#10b981"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute text-3xl font-semibold">
        {score}%
      </div>
    </div>
  );
}
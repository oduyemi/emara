"use client";
import { motion } from "framer-motion";

export default function ComplianceGauge({ score }: { score: number }) {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full rounded-full border-8 border-neutral-800"
      />
      <motion.div
        className="absolute w-full h-full rounded-full border-8 border-emerald-500"
        initial={{ strokeDashoffset: 300 }}
        animate={{ strokeDashoffset: 300 - score * 3 }}
        transition={{ duration: 1 }}
      />
      <div className="text-3xl font-semibold">{score}%</div>
    </div>
  );
}
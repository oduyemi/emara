"use client";
import { motion } from "framer-motion";



export const ProgressBar = ({
    current,
    total,
  }: {
    current: number;
    total: number;
  }) => {
    const percent = ((current + 1) / total) * 100;
    const milestones = [
      "Getting Started",
      "Understanding Your Business",
      "Export Capability",
      "Market Readiness",
      "Final Evaluation",
    ];
    const milestoneIndex = Math.floor((current / total) * milestones.length);
  
    return (
      <div className="w-full mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Progress</span>
          <span className="text-gray-700 font-medium">{Math.round(percent)}%</span>
        </div>
  
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent blur-sm" />
        </div>
  
        <div className="flex justify-between mt-3">
          {Array.from({ length: total }).map((_, i) => {
            const isActive = i === current;
            const isCompleted = i < current;
            return (
              <div
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  isCompleted ? "bg-green-500" : isActive ? "bg-green-500 scale-125" : "bg-gray-300"
                }`}
              />
            );
          })}
        </div>
  
        <p className="text-xs text-gray-500 mt-2 text-center">
          {milestones[milestoneIndex]}
        </p>
      </div>
    );
  };
  
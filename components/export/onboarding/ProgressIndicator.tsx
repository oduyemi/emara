"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"


type ProgressProps = {
  currentStep: number
  totalSteps: number
}

export const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: ProgressProps) => {
  const t = useTranslations("onboardProgress")

  const safeTotal = Math.max(totalSteps || 1, 1)
  const safeStep = Math.min(Math.max(currentStep || 1, 1), safeTotal)
  const progressPercent = (safeStep / safeTotal) * 100

  return (
    <div className="space-y-3">

      {/* Top row */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-secondary tracking-tight">
          {t("stepLabel", {
            current: safeStep,
            total: totalSteps,
          })}
        </span>

        <span className="text-sm text-muted">
          {t("complete", {
            percent: Math.round(progressPercent),
          })}
        </span>
      </div>

      {/* Progress Track */}
      <div className="relative h-2.5 bg-gray-200/70 rounded-full overflow-hidden">

        {/* Subtle inner shadow */}
        <div className="absolute inset-0 rounded-full shadow-inner" />

        {/* Animated Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full rounded-full 
          bg-gradient-to-r from-primary via-accent to-accent-soft"
        />

        {/* Soft Glow */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-0 h-full rounded-full 
          bg-accent/30 blur-sm"
        />

      </div>
    </div>
  )
}
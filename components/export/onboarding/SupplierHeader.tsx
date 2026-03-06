"use client"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export const SupplierHeaderMinimal = () => {
  const t = useTranslations("supplierHeader")

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-semibold text-secondary text-lg tracking-tight"
        >
          {t("title")}
        </motion.span>

        {/* Action */}
        <motion.button
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-sm font-medium text-muted hover:text-secondary transition-colors duration-200"
        >
          {t("saveExit")}
        </motion.button>

      </div>

      {/* Subtle gradient divider instead of harsh border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </header>
  )
}
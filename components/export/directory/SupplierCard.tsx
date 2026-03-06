"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Star } from "lucide-react"
import { useTranslations } from "next-intl"
import { Supplier } from "@/components/export/directory/types/supplier"

export const SupplierCard = ({ supplier }: { supplier: Supplier }) => {
  const t = useTranslations("SupplierCard")

  const tierColor: Record<Supplier["tier"], string> = {
    bronze: "bg-amber-600",
    silver: "bg-gray-400",
    gold: "bg-yellow-500",
    goldElite: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
    >
      {/* Media Preview */}
      <div className="relative h-48 overflow-hidden group">
        <img
          src={supplier.media}
          alt={supplier.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <ShieldCheck size={14} />
          {t("badges.verified")}
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star size={14} className="text-yellow-500" />
          {supplier.emaraScore} {t("score.label")}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Logo + Name */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={supplier.logo}
            alt={supplier.name}
            className="w-12 h-12 object-contain border rounded-md p-1 bg-white"
          />

          <div>
            <h3 className="text-lg font-semibold text-[#0F233F]">
              {supplier.name}
            </h3>

            <span
              className={`text-xs text-white px-2 py-1 rounded-full ${tierColor[supplier.tier]}`}
            >
              {t(`tiers.${supplier.tier}`)}
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3 text-sm text-gray-600 flex-1">

          {/* Certifications */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              {t("metrics.certifications")}
            </span>

            <div className="flex flex-wrap gap-2 mt-1">
              {supplier.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 bg-gray-100 rounded-md text-xs"
                >
                  {t(`certificationsList.${cert}`)}
                </span>
              ))}
            </div>
          </div>

          {/* Capacity */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              {t("metrics.capacity")}
            </span>

            <p className="font-medium text-[#0F233F]">
              {supplier.capacity}
            </p>
          </div>

          {/* Top Exports */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              {t("metrics.exports")}
            </span>

            <p className="text-[#0F233F]">
              {supplier.topProducts.join(", ")}
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 border border-gray-300 text-[#0F233F] py-2 rounded-xl hover:bg-gray-100 transition">
            {t("actions.viewProfile")}
          </button>

          <button className="flex-1 bg-red-900 text-white py-2 rounded-xl font-medium shadow hover:shadow-md transition">
            {t("actions.requestQuote")}
          </button>
        </div>

      </div>
    </motion.div>
  )
}
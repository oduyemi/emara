"use client"
import { FC } from "react"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export const TheEmaraSystem: FC = () => {
  const t = useTranslations("TheEmaraSystem")
  const locale = useLocale()
  const isRTL = ["ar"].includes(locale)

  const features = [
    { title: t("feature1_title"), description: t("feature1_description") },
    { title: t("feature2_title"), description: t("feature2_description") },
    { title: t("feature3_title"), description: t("feature3_description") },
    { title: t("feature4_title"), description: t("feature4_description") }
  ]

  return (
    <section className="w-full py-28 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
            {t("section_label")}
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
            {t("section_title")}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t("section_description")}
          </p>
        </div>

        {/* Infrastructure Pillars */}
        <div className="grid md:grid-cols-4 border-t border-gray-200">

          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`
                group
                relative
                px-8
                py-14
                border-b
                border-gray-200
                ${idx !== features.length - 1 ? "md:border-r md:border-gray-200" : ""}
                transition-all
                duration-300
                hover:-translate-y-[2px]
              `}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mb-6">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

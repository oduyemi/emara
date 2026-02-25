"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { X, Check } from "lucide-react"

export default function Outcome() {
  const t = useTranslations("outcome")

  return (
    <section className="relative bg-white py-44 px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-xs tracking-[0.4em] uppercase text-accent font-medium mb-6">
          {t("eyebrow")}
        </p>

        {/* Title */}
        <h2 className="text-6xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Transformation Container */}
        <div className="mt-28 relative">

          <div className="relative bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden">

            <div className="grid md:grid-cols-2">

              {/* BEFORE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative p-16"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-10">
                  {t("before.label")}
                </p>

                <ul className="space-y-10">
                  {t.raw("before.points").map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-5">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* AFTER */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative p-16 bg-gradient-to-br from-blue-50/40 to-white"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-10">
                  {t("after.label")}
                </p>

                <ul className="space-y-10">
                  {t.raw("after.points").map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-5">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-muted font-medium leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* Center Axis */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />

          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-28 pt-10 border-t border-gray-100">
          <p className="text-sm tracking-wide text-gray-500">
            {t("bottomNote")}
          </p>
        </div>

      </div>
    </section>
  )
}
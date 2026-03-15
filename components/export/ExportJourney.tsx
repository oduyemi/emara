"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { CheckCircle2, Compass, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const stepsData = [
  {
    id: 1,
    key: "newExporters",
    icon: <Compass size={20} />,
    link: "/suppliers/academy/roadmap/new-exporters",
  },
  {
    id: 2,
    key: "experiencedExporters",
    icon: <TrendingUp size={20} />,
    link: "/suppliers/academy/roadmap/exporters",
  },
]

export const ExportJourney = () => {
  const t = useTranslations("exportJourney")

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
  }

  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">

      {/* Ambient gradient circles */}
      <div className="absolute -top-32 left-[-150px] w-[400px] h-[400px] bg-[var(--color-accent-soft)]/20 blur-[160px] rounded-full animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 right-[-150px] w-[400px] h-[400px] bg-[var(--color-surface)]/20 blur-[160px] rounded-full animate-[float_14s_ease-in-out_infinite]" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.p variants={item} className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
            {t("sectionLabel")}
          </motion.p>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-secondary mb-3">
            {t("title")}
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-xl mx-auto">
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Stepper */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col md:flex-row md:space-x-8 relative"
        >
          {stepsData.map((step, idx) => {
            const isLast = idx === stepsData.length - 1

            return (
              <motion.div
                key={step.id}
                variants={item}
                className="relative flex-1 mb-10 md:mb-0"
              >
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-gradient-to-r from-accent/70 via-accent-soft/50 to-gray-300 z-0 rounded-full" />
                )}

                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 bg-white border border-[var(--color-surface-border)] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group overflow-hidden"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-soft)]/20 via-transparent to-[var(--color-primary)]/10 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl"/>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full text-accent mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-secondary text-lg mb-2">
                    {t(`${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {t(`${step.key}.desc`)}
                  </p>

                  {/* CTA */}
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-primary px-4 py-2 rounded-lg hover:bg-accent/90 transition relative overflow-hidden"
                  >
                    {t(`${step.key}.cta`)}
                    <CheckCircle2 size={16} />
                    {/* subtle inner glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-40 rounded-lg transition-all" />
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
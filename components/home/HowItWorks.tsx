"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useTranslations } from "next-intl"
import { ShieldCheck, SearchCheck, BadgeCheck } from "lucide-react"
import { useRef } from "react"

export default function HowItWorks() {
  const t = useTranslations("howItWorks")
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30
  })

  const steps = [
    { icon: ShieldCheck, key: "connect", number: "I" },
    { icon: SearchCheck, key: "identify", number: "II" },
    { icon: BadgeCheck, key: "ready", number: "III" }
  ]

  return (
    <section
      ref={ref}
      className="relative bg-white py-40 px-8 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">

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

        {/* Animated Progress Line */}
        <div className="relative mt-24 h-px bg-gray-100">
          <motion.div
            style={{ scaleX }}
            className="origin-left h-full bg-blue-900"
          />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 mt-24">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group px-12 py-16 border-r border-gray-100 last:border-r-0"
              >
                {/* Roman Numeral */}
                <div className="text-[14px] tracking-[0.5em] text-muted mb-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 
                                flex items-center justify-center
                                group-hover:translate-y-[-2px]
                                transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Label */}
                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted">
                  {t(`steps.${step.key}.label`)}
                </p>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-semibold text-gray-900 leading-snug">
                  {t(`steps.${step.key}.title`)}
                </h3>

                {/* Description */}
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </motion.div>
            )
          })}

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
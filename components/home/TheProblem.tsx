"use client"
import { FC } from "react"
import { useTranslations, useLocale } from "next-intl"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export const TheProblem: FC = () => {
  const t = useTranslations("TheProblem")
  const locale = useLocale()
  const isRTL = ["ar"].includes(locale)

  const problems = [
    { title: t("problem1_title"), description: t("problem1_description") },
    { title: t("problem2_title"), description: t("problem2_description") },
    { title: t("problem3_title"), description: t("problem3_description") },
    { title: t("problem4_title"), description: t("problem4_description") }
  ]

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      className="relative w-full py-28 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle Section Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
            {t("section_label")}
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            {t("section_title")}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t("section_description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Image Block */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/market.jpg"
                alt="Compliance illustration"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Problem Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-8"
          >
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="
                  group
                  relative
                  flex
                  items-start
                  gap-6
                  p-8
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  transition-all
                  duration-300
                  hover:shadow-md
                  hover:border-accent/40
                "
              >
                {/* Left Accent Line */}
                <div className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} h-full w-[4px] bg-accent rounded-full opacity-0 group-hover:opacity-100 transition`} />

                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <CheckCircle size={20} className="text-accent" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

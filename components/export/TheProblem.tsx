"use client"
import { FC } from "react"
import { useTranslations, useLocale } from "next-intl"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      mass: 0.8
    }
  }
}

export const TheProblem: FC = () => {
  const t = useTranslations("TheProblem")
  const locale = useLocale()
  const isRTL = locale === "ar"

  const problems = [
    { title: t("problem1_title"), description: t("problem1_description") },
    { title: t("problem2_title"), description: t("problem2_description") },
    { title: t("problem3_title"), description: t("problem3_description") },
    { title: t("problem4_title"), description: t("problem4_description") }
  ]

  return (
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Soft premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-4">
            {t("section_label")}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-[1.1]">
            {t("section_title")}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
            {t("section_description")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/market.jpg"
                alt="Indigenous market"
                width={700}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Soft overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 blur-3xl rounded-full -z-10" />
          </div>

          {/* Problems List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative flex items-start gap-5 p-7 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Accent bar */}
                <div
                  className={`absolute top-0 ${
                    isRTL ? "right-0" : "left-0"
                  } h-full w-[3px] bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle size={22} className="text-accent" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">
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
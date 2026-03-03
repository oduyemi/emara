"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 900
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return <span>{count}</span>
}

export const DirectoryHero = () => {
  const t = useTranslations("DirectoryHero")

  const stats = [
    { value: 400, label: t("stats.verifiedSuppliers") },
    { value: 220, label: t("stats.goldMembers") },
    { value: 115, label: t("stats.eliteExporters") },
    { value: 18, label: t("stats.productCategories") },
  ]

  return (
    <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden">

      {/* Blurred Background */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src="/images/bb1.jpg"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover scale-110 blur-[10px] brightness-[0.45]"
        />
      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/60 via-[#0A0F18]/70 to-black/85" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          {t("headline.prefix")}{" "}
          <span className="bg-gradient-to-r from-[#2E7C99] to-[#C24E00] bg-clip-text text-transparent">
            {t("headline.highlight")}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 text-white text-lg max-w-xl"
        >
          {t("description")}
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 max-w-2xl"
        >
          <form className="relative">
            <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden focus-within:border-[#2E7C99]/50 transition-all">

              <Search className="ml-4 text-white/40" size={18} />

              <input
                type="text"
                placeholder={t("search.placeholder")}
                className="flex-1 px-4 py-4 bg-transparent text-white placeholder-white/40 focus:outline-none text-sm"
              />

              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-[#2E7C99] to-[#C24E00] text-white text-sm font-semibold hover:opacity-90 transition"
              >
                {t("search.button")}
              </button>
            </div>
          </form>
        </motion.div>

        {/* KPI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl p-6"
            >
              <div className="text-3xl font-semibold text-white">
                <CountUp value={stat.value} />+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
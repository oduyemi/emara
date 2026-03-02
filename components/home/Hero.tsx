"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export const Content = () => {
  const t = useTranslations("Hero")
  const locale = useLocale()
  const isRTL = ["ar"].includes(locale)

  const slides = [
    {
      highlight: t("slide1.highlight"),
      title: t("slide1.title"),
      description: t("slide1.description"),
      primary: { label: "Buyers", href: "/buyers" },
      secondary: { label: "Suppliers", href: "/suppliers" },
      image: "/images/hero1.jpg",
    },
    {
      highlight: t("slide2.highlight"),
      title: t("slide2.title"),
      description: t("slide2.description"),
      primary: { label: "Start Sourcing", href: "/buyers/register" },
      secondary: { label: "Get Verified", href: "/suppliers/register" },
      image: "/images/hero2.jpg",
    },
    {
      highlight: t("slide3.highlight"),
      title: t("slide3.title"),
      description: t("slide3.description"),
      primary: { label: "Browse Directory", href: "/suppliers/directory" },
      secondary: {
        label: "Start Your Export Journey",
        href: "/suppliers/register",
      },
      image: "/images/hero3.jpg",
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7500)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative w-full overflow-hidden">
    {/* Background Fade */}
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={slides[index].image}
          alt={slides[index].title}
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Premium Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 40%, rgba(255,87,10,0.07) 0%, transparent 45%),
              linear-gradient(
                115deg,
                rgba(18,53,91,0.97) 0%,
                rgba(18,53,91,0.92) 50%,
                rgba(18,53,91,0.80) 80%,
                rgba(18,53,91,0.70) 100%
              )
            `,
          }}
        />
      </motion.div>
    </AnimatePresence>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28">

      <AnimatePresence mode="wait">
        <motion.div
          key={index + "-content"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl text-white space-y-7 ${
            isRTL ? "ml-auto text-right" : ""
          }`}
        >
          {/* Highlight */}
          <div className="relative inline-block">
            <p className="uppercase tracking-[0.5em] text-xs font-semibold text-accent">
              {slides[index].highlight}
            </p>
            <span className="absolute -bottom-2 left-0 w-14 h-[2px] bg-accent/70 rounded-full"></span>
          </div>

          {/* Title (slightly reduced scale for balance) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            {slides[index].title}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            {slides[index].description}
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-5 pt-4 ${isRTL ? "justify-end" : ""}`}>
            <Link
              href={slides[index].primary.href}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              {slides[index].primary.label}
              {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </Link>

            <Link
              href={slides[index].secondary.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium backdrop-blur-md bg-white/10 border border-white/25 hover:bg-white/20 hover:border-accent transition-all duration-300"
            >
              {slides[index].secondary.label}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Indicators */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === index
              ? "w-10 bg-accent"
              : "w-4 bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>

  </section>
  )
}
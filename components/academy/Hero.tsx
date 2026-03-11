"use client";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



export const AcademyHero = () => {
  const t = useTranslations("academyHero");

  return (
    <section className="relative min-h-[560px] flex items-center px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/bb.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F233F]/75 via-[#0F233F]/70 to-[#0F233F]/85" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="relative max-w-5xl mx-auto text-center text-white"
      >
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
          {t("label")}
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/suppliers/programs/export-readiness">
                <button className="btn-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    {t("primaryCTA")}
                </button>
            </Link>

            <Link href="/suppliers/academy/export-essentials-online">
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                    {t("secondaryCTA")}
                </button>
          </Link>
        </div> */}

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl py-4">
            <div className="text-xl font-semibold">{t("stats.resources.value")}</div>
            <p className="text-xs text-white/80">{t("stats.resources.label")}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl py-4">
            <div className="text-xl font-semibold">{t("stats.topics.value")}</div>
            <p className="text-xs text-white/80">{t("stats.topics.label")}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl py-4">
            <div className="text-xl font-semibold">{t("stats.insights.value")}</div>
            <p className="text-xs text-white/80">{t("stats.insights.label")}</p>
          </div>

        </div> */}
      </motion.div>
    </section>
  );
};
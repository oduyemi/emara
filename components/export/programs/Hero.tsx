"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck } from "lucide-react";
import { useTranslations } from "next-intl";


export const ExportReadinessHero = () => {
  const t = useTranslations("exportReadinessHero");

  return (
    <section className="relative min-h-[520px] flex items-center px-6 overflow-hidden">

      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/buy.jpg')"
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F233F]/75 via-[#0F233F]/70 to-[#0F233F]/85" />

      {/* ambient glow */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }}
        className="relative max-w-5xl mx-auto text-center text-white"
      >

        {/* label */}
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
          {t("label")}
        </p>

        {/* heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          {t("title")}
        </h1>

        {/* description */}
        <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
          {t("description")}
        </p>

        {/* CTA */}
        <Link
          href="#assessment"
          className="group inline-flex items-center px-8 py-3 rounded-lg btn-primary text-sm font-medium text-white hover:shadow-lg transition"
        >
          <ClipboardCheck
            className="mr-2"
            size={16}
          />

          {t("cta")}

          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </Link>

      </motion.div>

    </section>
  );
};
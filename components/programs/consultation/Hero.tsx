"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";



export const ConsultationHero = () => {
  const t = useTranslations("ConsultationHero");

  return (
    <section className="relative min-h-[720px] flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sea.jpg')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F233F]/90 via-[#0F233F]/80 to-[#0F233F]/70" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl mx-auto text-center"
      >

        {/* Label */}
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
          {t("label")}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
          {t("headline")}
          <span className="block text-accent">
            {t("headlineHighlight")}
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="#book-session"
            className="px-8 py-3 btn-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition shadow-lg"
          >
            {t("ctaBook")}
          </Link>

          {/* <Link
            href="/suppliers/programs/export-readiness"
            className="px-8 py-3 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition backdrop-blur"
          >
            {t("ctaReadiness")}
          </Link> */}

        </div>

        {/* Highlights */}
        {/* <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/70">

          <div>{t("highlights.call")}</div>
          <div>{t("highlights.advisory")}</div>
          <div>{t("highlights.market")}</div>

        </div> */}

      </motion.div>
    </section>
  );
};
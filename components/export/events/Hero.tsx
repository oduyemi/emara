"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const EventsHero = () => {
  const t = useTranslations("EventsHero");

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/eventshero.jpg')" }}
      />

      {/* 🔥 Improved Overlay (lighter + layered) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/70 via-[#0F3A5D]/50 to-[#1E5F8C]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,209,197,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {t("label")}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            {t("title")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#4FD1C5]">
              {t("highlight")}
            </span>
          </h1>

          <p className="text-lg text-blue-100/90 mb-10 leading-relaxed max-w-xl">
            {t("description")}
          </p>

          <Link href="#events">
            <button className="px-8 py-4 btn-primary rounded-xl font-medium shadow-xl shadow-accent/30">
              {t("cta")}
            </button>
          </Link>
        </motion.div>

        {/* RIGHT: 🔥 FEATURED OPPORTUNITY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >

          {/* Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-400 rounded-2xl blur opacity-30" />

          {/* Card */}
          <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

            {/* Badge */}
            <div className="mb-4 inline-block px-4 py-1 rounded-full text-xs bg-accent/20 text-primary">
              {t("featuredBadge")}
            </div>

            <h3 className="text-2xl font-semibold mb-4 leading-snug">
              {t("featuredTitle")}
            </h3>

            <p className="text-blue-100/80 mb-6">
              {t("featuredDescription")}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 text-sm text-blue-100/80 mb-6">
              <p>• {t("featuredBenefits.b1")}</p>
              <p>• {t("featuredBenefits.b2")}</p>
              <p>• {t("featuredBenefits.b3")}</p>
              <p>• {t("featuredBenefits.b4")}</p>
            </div>

            {/* CTA */}
            <Link href="https://lnkd.in/eFG-dg_F" target="_blank">
              <button className="w-full px-6 py-3 btn-accent rounded-lg font-medium hover:opacity-90 transition shadow-lg shadow-accent/30">
                {t("featuredCta")}
              </button>
            </Link>

            {/* Sub note */}
            <p className="text-xs text-blue-200 mt-4">
              {t("featuredNote")}
            </p>

          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A2540] to-transparent" />

    </section>
  );
};
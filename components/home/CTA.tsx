"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";

export const HomeCTA = () => {
  const t = useTranslations("homeCTA");

  return (
    <section className="relative py-36 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          {t("headline")}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
        >
          {t("subtext")}
        </motion.p>

        {/* Authority Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-6"
        >
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm md:text-base">ISO Certified Processes</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="w-5 h-5 text-amber-300" />
            <span className="text-sm md:text-base">Regulatory Framework Alignment</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="w-5 h-5 text-blue-300" />
            <span className="text-sm md:text-base">Data Security & Integrity</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/register"
            className="mt-8 inline-block bg-red-900 hover:bg-red-800 text-white font-bold text-lg md:text-xl px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {t("ctaButton")}
          </Link>
        </motion.div>
      </div>

      {/* Subtle animated background shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-white/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-white/5 rounded-full pointer-events-none"
      />
    </section>
  );
}
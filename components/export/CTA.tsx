"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";

export const ExportCTA = () => {
  const t = useTranslations("homeCTA");

  const pillars = [
    {
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
      text: "ISO-Aligned Processes",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-500" />,
      text: "Regulatory Framework Mapping",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-sky-500" />,
      text: "Enterprise-Grade Data Security",
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-neutral-50 via-slate-50 to-white overflow-hidden">

      {/* subtle texture glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-secondary tracking-tight leading-tight"
        >
          {t("headline")}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto"
        >
          {t("subtext")}
        </motion.p>

        {/* Authority Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          {pillars.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-full text-xs md:text-sm text-neutral-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <Link
            href="/suppliers/compliance-review"
            className="inline-flex items-center justify-center bg-red-900 hover:bg-red-800 text-white font-semibold text-sm md:text-base px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {t("ctaButton")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
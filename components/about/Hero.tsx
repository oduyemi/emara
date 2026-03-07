"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/abt.jpg"
        alt="African food export logistics"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div 
      style={{
        background:
          "linear-gradient(90deg, rgba(18,53,91,0.72) 0%, rgba(18,53,91,0.55) 40%, rgba(18,53,91,0.4) 100%)"
      }}
      className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white space-y-8">

        <span className="text-sm text-accent uppercase tracking-[0.3em] text-white/70">
          {t("badge")}
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

      </div>
    </section>
  );
}
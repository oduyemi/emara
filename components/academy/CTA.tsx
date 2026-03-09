"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen } from "lucide-react";

export const AcademyCTA = () => {
  const t = useTranslations("academyCTA");

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >

        <div className="relative bg-white border border-gray-200 rounded-2xl p-12 md:p-14 text-center shadow-sm backdrop-blur-sm overflow-hidden">

          {/* subtle card glow */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

          {/* icon */}
          <div className="relative mx-auto mb-6 w-14 h-14 rounded-xl bg-[#F3F6FB] flex items-center justify-center text-[#0F233F]">
            <BookOpen size={26} />
          </div>

          {/* heading */}
          <h2 className="relative text-3xl md:text-4xl font-semibold text-[#0F233F] mb-5">
            {t("title")}
          </h2>

          {/* description */}
          <p className="relative text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/suppliers/academy/export-essentials"
              className="group inline-flex items-center justify-center px-8 py-3 rounded-lg btn-primary text-sm font-medium transition hover:shadow-lg"
            >
              {t("primaryCTA")}

              <ArrowRight
                size={16}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/suppliers/academy/foodcast"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 text-sm font-medium text-[#0F233F] hover:bg-gray-50 transition"
            >
              {t("secondaryCTA")}
            </Link>

          </div>

        </div>

      </motion.div>

    </section>
  );
};
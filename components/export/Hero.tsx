"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function ExportHero() {
  const t = useTranslations("exportHero");
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[var(--color-bg)]">

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }}
        />
      </div>

      {/* Controlled radial glow */}
      <div className="absolute -top-32 right-[-150px] w-[700px] h-[700px] bg-[var(--color-accent-soft)] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* LEFT */}
        <div className="space-y-12">

          {/* Heading Block */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.02em] text-secondary leading-[1.05]">
              {t("headline")}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {t("subheadline")}
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              href="/suppliers/export-readiness"
              className="relative btn-primary px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden group"
            >
              <span className="relative z-10">
                {t("checkReadiness")}
              </span>

              {/* Premium shimmer */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer" />
              </span>
            </Link>

            <Link
              href="/suppliers/demo"
              className="px-8 py-4 rounded-xl border border-[var(--color-secondary)]/40 text-secondary font-medium transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white text-center"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>

        {/* RIGHT – Image */}
        <div
          ref={imageRef}
          className="relative w-full h-[460px] md:h-[600px] xl:h-[650px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 scale-[1.08]"
          >
            <Image
              src="/images/exporthome.jpg"
              alt="Verified African processing facility"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Depth gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

          {/* Soft highlight edge */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
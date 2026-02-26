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

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const tiers = [
    { name: t("bronze"), color: "text-muted" },
    { name: t("silver"), color: "text-secondary" },
    { name: t("gold"), color: "text-primary" },
    { name: t("gold_elite"), color: "text-accent font-semibold" },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[var(--color-bg)]">

      {/* Institutional Tech Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      {/* Soft Accent Glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[var(--color-accent-soft)] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.3em] text-muted">
              {t("badge")}
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-secondary leading-tight">
              {t("headline")}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              {t("subheadline")}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary CTA (Brand System) */}
            <Link
              href="/apply"
              className="relative btn-primary px-8 py-4 rounded-xl shadow-md text-center overflow-hidden group"
            >
              <span className="relative z-10">
                {t("primaryCta")}
              </span>

              {/* Ambient Shimmer (white overlay) */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shimmer" />
              </span>
            </Link>

            <Link
              href="/score"
              className="px-8 py-4 rounded-xl border border-[var(--color-secondary)] text-secondary font-medium transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white text-center"
            >
              {t("secondaryCta")}
            </Link>

          </div>

          {/* Tier Progression */}
          <div className="pt-12 space-y-6">

            <div className="flex items-center gap-4 text-sm">

              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.5,
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                  className={`flex items-center gap-4 ${tier.color}`}
                >
                  <span>{tier.name}</span>

                  {index !== tiers.length - 1 && (
                    <span className="w-8 h-px bg-[var(--color-surface-border)]" />
                  )}
                </motion.div>
              ))}

            </div>

            <p className="uppercase tracking-widest text-xs text-muted">
              {t("verificationStrip")}
            </p>

          </div>

        </div>

        {/* RIGHT SIDE – Parallax Image */}
        <div
          ref={imageRef}
          className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl"
        >
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="/images/exporthome.jpg"
              alt="Verified African processing facility"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
}
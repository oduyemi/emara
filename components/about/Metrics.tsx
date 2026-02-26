"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TrustMetrics() {
  const t = useTranslations("about.metrics");
  const items = t.raw("items");

  return (
    <section className="py-32 px-6 surface-dark text-white">

      <div className="max-w-7xl mx-auto space-y-20">

        <div className="text-center space-y-6">
          <span className="text-sm uppercase tracking-[0.3em] text-accent">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t("headline")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          {items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                {item.value}
              </div>

              <div className="text-white/70 uppercase tracking-widest text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}

        </div>

        <p className="text-center text-white/50 text-sm max-w-3xl mx-auto">
          {t("footnote")}
        </p>

      </div>

    </section>
  );
}
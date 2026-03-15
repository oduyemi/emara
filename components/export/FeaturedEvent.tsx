"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FeaturedEvent = () => {
  const t = useTranslations("featuredEvent");

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[var(--color-accent-soft)]/10 blur-[180px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[var(--color-surface)]/10 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >

        <div className="relative grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-[var(--color-surface-border)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.2)]">

          {/* IMAGE SIDE */}
          <div className="relative min-h-[420px] group">

            <Image
              src="/images/homefeaturedevent.jpg"
              alt="Taiwan Trade Mission"
              fill
              className="object-cover transition duration-[1600ms] group-hover:scale-110"
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* floating event tag */}
            <div className="absolute top-8 left-8 bg-white/90 text-secondary text-xs font-medium px-4 py-2 rounded-full shadow-sm">
              {t("label")}
            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="relative bg-white p-10 md:p-14">

            {/* accent stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--color-accent)]" />

            <div className="pl-4">

              {/* title */}
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight mb-6">
                {t("title")}
              </h2>

              {/* meta */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-muted mb-8">

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-accent"/>
                  {t("date")}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent"/>
                  {t("location")}
                </div>

              </div>

              {/* description */}
              <p className="text-muted leading-relaxed max-w-xl mb-10">
                {t("description")}
              </p>

              {/* CTA */}
              <Link
                href="/suppliers/events/taiwan-trade-mission"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl btn-primary text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t("cta")}

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <ArrowRight size={16}/>
                </motion.span>

              </Link>

            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};
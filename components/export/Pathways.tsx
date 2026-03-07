"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, Compass } from "lucide-react";
import { useTranslations } from "next-intl";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const SuppliersPathways = () => {

  const t = useTranslations("suppliersPathways")

  return (
    <section className="relative py-28 px-6 bg-[var(--color-bg)] overflow-hidden">

      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[var(--color-accent-soft)]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-[var(--color-primary)]/10 blur-[160px] rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >

        {/* Header */}
        <motion.div variants={item} className="max-w-2xl mb-20">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-5 leading-tight">
            {t("title")}
          </h2>

          <p className="text-muted text-[15px] leading-relaxed">
            {t("description")}
          </p>

        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid lg:grid-cols-3 gap-10"
        >

          <PathCard
            icon={<GraduationCap size={26} />}
            title={t("academy.title")}
            desc={t("academy.desc")}
            link="/suppliers/academy"
            cta={t("academy.cta")}
          />

          <PathCard
            icon={<CalendarDays size={26} />}
            title={t("events.title")}
            desc={t("events.desc")}
            link="/suppliers/events"
            cta={t("events.cta")}
          />

          <PathCard
            icon={<Compass size={26} />}
            title={t("platform.title")}
            desc={t("platform.desc")}
            link="/suppliers/how-it-works"
            cta={t("platform.cta")}
          />

        </motion.div>

      </motion.div>

    </section>
  )
}

const PathCard = ({
  icon,
  title,
  desc,
  link,
  cta
}: {
  icon: React.ReactNode
  title: string
  desc: string
  link: string
  cta: string
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl border border-[var(--color-surface-border)] bg-white p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/10 to-transparent" />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[var(--color-accent)]/20 transition duration-500" />

      <div className="relative">

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 280 }}
          className="w-14 h-14 rounded-xl bg-[var(--color-surface)] flex items-center justify-center text-secondary mb-8 shadow-sm"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold text-secondary mb-3">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-8">
          {desc}
        </p>

        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition"
        >
          {cta}
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </motion.div>
  )
}
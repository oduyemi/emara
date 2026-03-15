"use client";
import { Globe, GraduationCap, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export const SuppliersIntro = () => {

  const t = useTranslations("suppliersIntro");

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-[var(--color-accent-soft)]/15 blur-[200px] rounded-full"/>
      <div className="absolute bottom-[-200px] left-[-100px] w-[650px] h-[650px] bg-[var(--color-accent)]/10 blur-[200px] rounded-full"/>

      {/* texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none 
      bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] 
      [background-size:28px_28px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start relative"
      >

        {/* LEFT */}
        <motion.div variants={item} className="relative">

          {/* vertical brand line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 150 }}
            transition={{ duration: 1.2 }}
            className="absolute -left-6 top-4 w-[3px] bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-soft)] to-[var(--color-secondary)]"
          />

          <p className="text-xs uppercase tracking-[0.28em] text-accent mb-6">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight mb-7">
            {t("title")}
          </h2>

          <div className="space-y-6 text-muted text-[15px] leading-relaxed max-w-xl">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>

          {/* Promise */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="relative mt-14 p-7 rounded-2xl border border-[var(--color-surface-border)] bg-white/70 backdrop-blur-md shadow-lg max-w-sm overflow-hidden"
          >

            {/* accent strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-soft)] to-transparent"/>

            {/* glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 
            bg-gradient-to-br from-[var(--color-accent-soft)]/20 via-transparent to-transparent"/>

            <p className="relative text-sm text-muted leading-relaxed">
              {t("promise")}
            </p>

          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          className="relative grid sm:grid-cols-2 gap-8"
        >

          <Pillar
            icon={<Globe size={24}/>}
            title={t("pillars.buyerAccess.title")}
            desc={t("pillars.buyerAccess.desc")}
          />

          <Pillar
            icon={<GraduationCap size={24}/>}
            title={t("pillars.exportReadiness.title")}
            desc={t("pillars.exportReadiness.desc")}
          />

          <Pillar
            icon={<Handshake size={24}/>}
            title={t("pillars.tradePartnerships.title")}
            desc={t("pillars.tradePartnerships.desc")}
          />

          <Pillar
            icon={<TrendingUp size={24}/>}
            title={t("pillars.exportGrowth.title")}
            desc={t("pillars.exportGrowth.desc")}
          />

        </motion.div>

      </motion.div>
    </section>
  );
};

const Pillar = ({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl bg-white border border-[var(--color-surface-border)] p-7 shadow-sm hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.25)] overflow-hidden"
    >

      {/* animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
      bg-gradient-to-br from-[var(--color-accent-soft)]/25 via-transparent to-[var(--color-primary)]/10"/>

      <div className="relative">

        {/* icon halo */}
        <div className="relative mb-5">

          <div className="absolute inset-0 blur-xl opacity-40 
          bg-[radial-gradient(circle,_var(--color-accent-soft)_0%,transparent_70%)]"/>

          <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface)] text-secondary shadow-sm">
            {icon}
          </div>

        </div>

        <h3 className="text-secondary font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">
          {desc}
        </p>

      </div>

    </motion.div>
  );
};
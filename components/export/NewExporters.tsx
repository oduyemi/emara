"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewExporters() {
  const t = useTranslations("newExporters");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* ambient lighting */}
      <div className="absolute -top-40 left-[-220px] w-[700px] h-[700px] bg-[var(--color-accent-soft)]/15 blur-[180px] rounded-full"/>
      <div className="absolute -bottom-40 right-[-220px] w-[700px] h-[700px] bg-[var(--color-accent)]/15 blur-[180px] rounded-full"/>

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative bg-white border border-[var(--color-surface-border)] rounded-[32px] p-12 md:p-16 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)] overflow-hidden"
        >

          {/* top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-soft)] to-transparent"/>

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6 uppercase tracking-[0.2em]">
                <Globe size={16}/>
                {t("badge")}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)]">
                {t("title")}
              </h2>

              <p className="text-muted text-lg mb-10 max-w-xl leading-relaxed">
                {t("description")}
              </p>

              <Link
                href="/suppliers/register"
                className="group inline-flex items-center gap-3 btn-primary font-medium px-7 py-4 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden"
              >
                {t("cta")}

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="relative z-10"
                >
                  <ArrowRight size={18}/>
                </motion.span>

                {/* subtle glow */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-40 transition-all"/>
              </Link>
            </div>

            {/* RIGHT FEATURES */}
            <motion.div variants={container} initial="hidden" whileInView="show" className="grid gap-6">
              <FeatureCard
                icon={<TrendingUp size={20}/>}
                title={t("features.expand.title")}
                desc={t("features.expand.desc")}
                variants={item}
              />

              <FeatureCard
                icon={<Globe size={20}/>}
                title={t("features.roadmap.title")}
                desc={t("features.roadmap.desc")}
                variants={item}
              />
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  variants
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  variants?: any;
}) {

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white border border-[var(--color-surface-border)] rounded-xl p-6 shadow-sm hover:shadow-xl transition-all overflow-hidden"
    >

      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/30 via-transparent to-[var(--color-primary)]/15"/>

      <div className="relative flex gap-4 items-start">

        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-surface)] text-secondary shadow-md">
          {icon}
        </div>

        <div>
          <h4 className="font-semibold text-secondary mb-1 text-lg">{title}</h4>
          <p className="text-sm text-muted leading-relaxed">{desc}</p>
        </div>

      </div>

    </motion.div>
  )
}
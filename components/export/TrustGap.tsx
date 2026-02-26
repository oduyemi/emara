"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Workflow } from "lucide-react";

export const TrustGap = () => {
  const t = useTranslations("trust_gap");

  return (
    <section className="relative surface-dark py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <header className="max-w-3xl mb-28">
          <span className="block text-xs uppercase tracking-[0.32em] text-accent mb-6">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {t("title")}
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT — Structural Stats */}
          <div className="space-y-16">
            <Stat
              number={t("stats.arable_land.value")}
              text={t("stats.arable_land.description")}
            />
            <Stat
              number={t("stats.lost_producers.value")}
              text={t("stats.lost_producers.description")}
            />
            <Stat
              number={t("stats.audit_delays.value")}
              text={t("stats.audit_delays.description")}
            />
          </div>

          {/* RIGHT — Problem Infrastructure */}
          <div className="space-y-8">
            <ProblemCard
              icon={<ShieldCheck size={22} />}
              title={t("problems.verification_vacuum.title")}
              description={t("problems.verification_vacuum.description")}
              primary
            />
            <ProblemCard
              icon={<BarChart3 size={22} />}
              title={t("problems.information_asymmetry.title")}
              description={t("problems.information_asymmetry.description")}
            />
            <ProblemCard
              icon={<Workflow size={22} />}
              title={t("problems.operational_friction.title")}
              description={t("problems.operational_friction.description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, text }: { number: string; text: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-6"
  >
    {/* Accent Marker */}
    <span className="absolute left-0 top-2 h-12 w-px bg-accent" />

    <div className="text-5xl md:text-6xl font-semibold text-white leading-none">
      {number}
    </div>
    <p className="mt-4 text-base text-white/70 max-w-md leading-relaxed">
      {text}
    </p>
  </motion.div>
);

const ProblemCard = ({
  icon,
  title,
  description,
  primary = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  primary?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={[
      "rounded-2xl p-8 transition-colors",
      primary
        ? "bg-white/10 border border-accent"
        : "bg-white/5 border border-white/10 hover:border-white/30",
    ].join(" ")}
  >
    <div className="flex items-center gap-4 mb-4 text-accent">
      {icon}
      <h3 className="text-lg font-semibold text-white tracking-wide">
        {title}
      </h3>
    </div>
    <p className="text-sm text-white/70 leading-relaxed max-w-md">
      {description}
    </p>
  </motion.div>
);
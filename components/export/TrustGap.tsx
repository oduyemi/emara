"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Workflow } from "lucide-react";

export const TrustGap = () => {
  const t = useTranslations("trust_gap");

  return (
    <section className="relative py-32 overflow-hidden surface-dark">

      {/* Subtle Grid Layer */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial Depth Glow */}
      <div className="absolute -top-40 left-[-200px] w-[700px] h-[700px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <header className="max-w-3xl mb-24">
          <span className="block text-xs uppercase tracking-[0.35em] text-accent mb-6 font-medium">
            {t("label")}
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1.1]">
            {t("title")}
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">

          {/* LEFT — Structural Stats */}
          <div className="space-y-20">
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

          {/* RIGHT — Infrastructure Problems */}
          <div className="space-y-8">
            <ProblemCard
              icon={<ShieldCheck size={20} />}
              title={t("problems.verification_vacuum.title")}
              description={t("problems.verification_vacuum.description")}
              primary
            />
            <ProblemCard
              icon={<BarChart3 size={20} />}
              title={t("problems.information_asymmetry.title")}
              description={t("problems.information_asymmetry.description")}
            />
            <ProblemCard
              icon={<Workflow size={20} />}
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="relative pl-8"
  >
    {/* Accent vertical bar */}
    <span className="absolute left-0 top-4 h-16 w-[2px] bg-accent rounded-full" />

    <div className="text-5xl md:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-none">
      {number}
    </div>

    <p className="mt-6 text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={[
      "group rounded-2xl p-8 backdrop-blur-sm transition-all duration-300",
      primary
        ? "bg-white/10 border border-accent/40 shadow-lg"
        : "bg-white/[0.06] border border-white/10 hover:border-white/30 hover:bg-white/[0.09]",
    ].join(" ")}
  >
    <div className="flex items-center gap-4 mb-5 text-accent">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white tracking-wide">
        {title}
      </h3>
    </div>

    <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg">
      {description}
    </p>
  </motion.div>
);
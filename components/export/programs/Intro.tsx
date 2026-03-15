"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileCheck, BarChart3, Compass } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

export const ExportReadinessIntro = () => {
  const t = useTranslations("exportReadinessIntro");

  const steps = [
    { key: "assessment", icon: <FileCheck size={26} />, number: "01" },
    { key: "score", icon: <BarChart3 size={26} />, number: "02" },
    { key: "nextSteps", icon: <Compass size={26} />, number: "03" }
  ];

  return (
    <section className="relative py-28 px-6 bg-[#F7F9FC] overflow-hidden">

      {/* ambient background lighting */}
      <div className="absolute -top-40 right-[-200px] w-[600px] h-[600px] bg-[var(--color-accent-soft)]/10 blur-[160px] rounded-full"/>
      <div className="absolute -bottom-40 left-[-200px] w-[600px] h-[600px] bg-[var(--color-primary)]/10 blur-[160px] rounded-full"/>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >

        {/* header */}
        <motion.div variants={item} className="text-center mb-20 max-w-2xl mx-auto">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            {t("title")}
          </h2>

          <p className="text-muted leading-relaxed">
            {t("description")}
          </p>

        </motion.div>

        {/* step grid */}
        <div className="relative grid md:grid-cols-3 gap-12 items-stretch">

          {/* connector line */}
          <div className="hidden md:block absolute top-[90px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-surface-border)] to-transparent" />

          {steps.map((step) => (
            <Step
              key={step.key}
              icon={step.icon}
              number={step.number}
              title={t(`steps.${step.key}.title`)}
              text={t(`steps.${step.key}.text`)}
            />
          ))}

        </div>

      </motion.div>
    </section>
  );
};

const Step = ({
  icon,
  number,
  title,
  text
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white border border-[var(--color-surface-border)] rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
    >

      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/15 via-transparent to-[var(--color-primary)]/10"/>

      {/* step number */}
      <div className="absolute -top-6 left-10 w-14 h-14 rounded-full bg-white border border-[var(--color-surface-border)] flex items-center justify-center text-sm font-semibold text-secondary shadow-md">
        {number}
      </div>

      {/* icon container */}
      <div className="relative w-14 h-14 rounded-xl bg-[var(--color-surface)] flex items-center justify-center text-secondary mb-7 shadow-sm group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="relative font-semibold text-secondary text-lg mb-3">
        {title}
      </h3>

      <p className="relative text-muted text-sm leading-relaxed flex-1">
        {text}
      </p>

    </motion.div>
  );
};
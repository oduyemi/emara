"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BookOpen, ShieldCheck, Globe } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export const LearningApproach = () => {
  const t = useTranslations("learningApproach");

  const steps = [
    {
      key: "fundamentals",
      number: "01",
      icon: <BookOpen size={22} />
    },
    {
      key: "readiness",
      number: "02",
      icon: <ShieldCheck size={22} />
    },
    {
      key: "markets",
      number: "03",
      icon: <Globe size={22} />
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-[#F7F9FC] overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative"
      >

        {/* heading */}
        <motion.div variants={item} className="text-center mb-16">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F]">
            {t("title")}
          </h2>

        </motion.div>

        {/* steps */}
        <div className="relative grid md:grid-cols-3 gap-10">

          {/* connector line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {steps.map((step) => (
            <StepCard
              key={step.key}
              number={step.number}
              icon={step.icon}
              title={t(`steps.${step.key}.title`)}
              text={t(`steps.${step.key}.text`)}
            />
          ))}

        </div>

      </motion.div>

    </section>
  );
};

const StepCard = ({
  number,
  icon,
  title,
  text
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
    >

      {/* number badge */}
      <div className="absolute -top-5 left-8 bg-white border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold text-[#0F233F] shadow-sm">
        {number}
      </div>

      {/* icon */}
      <div className="w-11 h-11 rounded-lg bg-[#F3F6FB] flex items-center justify-center text-[#0F233F] mb-6 group-hover:scale-105 transition">
        {icon}
      </div>

      <h3 className="font-semibold text-[#0F233F] mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </motion.div>
  );
};
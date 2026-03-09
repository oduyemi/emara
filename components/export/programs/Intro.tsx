"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileCheck, BarChart3, Compass } from "lucide-react";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};



const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export const ExportReadinessIntro = () => {
  const t = useTranslations("exportReadinessIntro");

  const steps = [
    {
      key: "assessment",
      icon: <FileCheck size={22} />
    },
    {
      key: "score",
      icon: <BarChart3 size={22} />
    },
    {
      key: "nextSteps",
      icon: <Compass size={22} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F7F9FC]">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        {/* header */}
        <motion.div variants={item} className="text-center mb-16">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F] mb-6">
            {t("title")}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>

        </motion.div>

        {/* steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <Step
              key={step.key}
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

const Step = ({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
    >

      {/* subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/5 to-transparent" />

      <div className="relative w-11 h-11 rounded-lg bg-[#F3F6FB] flex items-center justify-center text-[#0F233F] mb-5">
        {icon}
      </div>

      <h3 className="relative font-semibold text-[#0F233F] mb-3">
        {title}
      </h3>

      <p className="relative text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </motion.div>
  );
};
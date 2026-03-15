"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Step images instead of icons
const stepImages = [
  "/images/fundamentals.jpg",
  "/images/readiness.jpg",
  "/images/global.jpg"
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

export const LearningApproach = () => {
  const t = useTranslations("learningApproach");

  const steps = [
    { key: "fundamentals", number: "01", img: stepImages[0] },
    { key: "readiness", number: "02", img: stepImages[1] },
    { key: "markets", number: "03", img: stepImages[2] }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#F7F9FC] overflow-hidden">
      
      {/* Ambient Background Shapes */}
      <div className="absolute -top-60 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute -bottom-60 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <motion.div variants={item} className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">{t("label")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F233F]">{t("title")}</h2>
        </motion.div>

        {/* Journey Path */}
        <div className="relative grid md:grid-cols-3 gap-10 items-stretch">

          {/* Animated Connector Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-[4px] bg-gradient-to-r from-accent via-gray-300 to-primary rounded-full">
            <motion.div
              className="absolute left-0 w-3 h-3 bg-accent rounded-full animate-[dot_2s_linear_infinite]"
            />
          </div>

          {steps.map((step, i) => (
            <StepCard
              key={step.key}
              number={step.number}
              img={step.img}
              title={t(`steps.${step.key}.title`)}
              text={t(`steps.${step.key}.text`)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const StepCard = ({ number, img, title, text }: { number: string; img: string; title: string; text: string }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -12, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200, damping: 18 }}
    className="group relative bg-white border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col h-full"
  >
    {/* Number Badge */}
    <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-gradient-to-tr from-accent to-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
      {number}
    </div>

    {/* Step Image */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
      <img src={img} alt={title} className="object-cover w-full h-full"/>
    </div>

    <h3 className="font-semibold text-[#0F233F] mb-3 text-lg group-hover:text-accent transition-colors duration-300">{title}</h3>

    <p className="text-gray-600 text-sm leading-relaxed flex-1">{text}</p>
  </motion.div>
);
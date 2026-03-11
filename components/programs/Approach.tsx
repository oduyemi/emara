"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



export const ProgramsApproach = () => {
  const t = useTranslations("ProgramsApproach");

  const items = [
    { key: "step1", step: "01" },
    { key: "step2", step: "02" },
    { key: "step3", step: "03" },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F]">
            {t("title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              {/* Step Number */}
              <div className="text-sm font-semibold text-accent mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0F233F] mb-3">
                {t(`${item.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`${item.key}.description`)}
              </p>

              {/* subtle accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
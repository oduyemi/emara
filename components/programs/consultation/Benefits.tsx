"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



export const ConsultationBenefits = () => {
  const t = useTranslations("ConsultationBenefits");

  const items = [
    { key: "item1", icon: "01" },
    { key: "item2", icon: "02" },
    { key: "item3", icon: "03" }
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F]">
            {t("title")}
            <span className="block">{t("titleHighlight")}</span>
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
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >

              {/* Step Indicator */}
              <div className="text-sm font-semibold text-accent mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0F233F] mb-3">
                {t(`${item.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`${item.key}.description`)}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0 opacity-0 group-hover:opacity-100 transition rounded-b-2xl"/>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};
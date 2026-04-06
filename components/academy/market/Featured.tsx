"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function FeaturedMarketInsights() {
  const t = useTranslations("marketProfiles.insights");

  const insights = [
    {
      title: "Demand Trends",
      text: t("demand"),
      icon: "📈",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Regulatory Landscape",
      text: t("regulations"),
      icon: "📜",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Buyer Behavior",
      text: t("buyers"),
      icon: "🛒",
      color: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌈 Background Transition Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Insights
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
            {t("title")}
          </h2>

          <p className="mt-4 text-muted max-w-2xl mx-auto text-sm md:text-base">
            Key signals shaping global opportunities — before diving into markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Gradient Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition`} />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-6 h-full shadow-sm group-hover:shadow-xl transition">

                {/* Icon */}
                <div className="text-3xl mb-4">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-muted text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
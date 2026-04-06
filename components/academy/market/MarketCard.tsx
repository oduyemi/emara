"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Props = {
  name: string;
  desc: string;
  color: string;
  icon: string;
};

export default function MarketCard({ name, desc, color, icon }: Props) {
  const t = useTranslations("marketCountryProfiles");

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative rounded-2xl overflow-hidden group"
    >
      {/* Gradient Glow Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:opacity-100 transition`}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between min-h-[220px]">

        {/* Top */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">{icon}</span>

            <span className="text-[10px] uppercase tracking-widest text-white/70">
              Market
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 leading-snug">
            {name}
          </h3>

          <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>

        {/* CTA */}
        <button className="mt-6 self-start text-sm px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur transition">
          {t("cta")} →
        </button>
      </div>
    </motion.div>
  );
}
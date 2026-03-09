"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Video,
  Presentation,
  BookOpen,
  Globe,
  Mic,
  Map
} from "lucide-react";

const programs = [
  {
    key: "webinars",
    icon: <Video size={22} />,
    link: "/suppliers/academy/webinars"
  },
  {
    key: "workshops",
    icon: <Presentation size={22} />,
    link: "/suppliers/academy/workshops"
  },
  {
    key: "exportEssentials",
    icon: <BookOpen size={22} />,
    link: "/suppliers/academy/export-essentials-online"
  },
  {
    key: "marketProfiles",
    icon: <Globe size={22} />,
    link: "/suppliers/academy/market-country-profiles"
  },
  {
    key: "foodcast",
    icon: <Mic size={22} />,
    link: "/suppliers/academy/foodcast"
  },
  {
    key: "roadmap",
    icon: <Map size={22} />,
    link: "/suppliers/academy/roadmap"
  }
];


export const AcademyPrograms = () => {
  const t = useTranslations("academyPrograms");

  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F] mb-4">
            {t("title")}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Program grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >

              <Link
                href={p.link}
                className="group relative block rounded-2xl border border-gray-200 bg-[#F9FBFD] p-8 hover:shadow-lg transition duration-300 overflow-hidden"
              >

                {/* subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/5 to-transparent" />

                {/* icon */}
                <div className="relative w-12 h-12 rounded-xl bg-white border flex items-center justify-center mb-6 text-[#0F233F] group-hover:scale-105 transition">
                  {p.icon}
                </div>

                {/* title */}
                <h3 className="relative text-lg font-semibold text-[#0F233F] mb-2">
                  {t(`items.${p.key}.title`)}
                </h3>

                {/* description */}
                <p className="relative text-sm text-gray-600 mb-5 leading-relaxed">
                  {t(`items.${p.key}.desc`)}
                </p>

                {/* link */}
                <span className="relative text-sm text-accent font-medium group-hover:underline">
                  {t("explore")}
                </span>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
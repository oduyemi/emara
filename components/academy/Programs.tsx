"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


const programs = [
  { key: "webinars", img: "/images/webinars.jpg", link: "/suppliers/academy/webinars" },
  { key: "workshops", img: "/images/workshops.jpg", link: "/suppliers/academy/workshops" },
  { key: "exportEssentials", img: "/images/essentials.jpg", link: "/suppliers/academy/export-essentials-online" },
  { key: "marketProfiles", img: "/images/country.jpg", link: "/suppliers/academy/market-country-profiles" },
  { key: "foodcast", img: "/images/foodcasts.jpg", link: "/suppliers/academy/foodcast" },
  { key: "roadmap", img: "/images/roadmaps.jpg", link: "/suppliers/academy/roadmap" }
];


export const AcademyPrograms = () => {
  const t = useTranslations("academyPrograms");

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">

      {/* Ambient gradients */}
      <div className="absolute -top-32 left-[-120px] w-[400px] h-[400px] bg-[var(--color-accent-soft)]/10 rounded-full blur-[120px] animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 right-[-120px] w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] animate-[float_14s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F233F] mb-4">
            {t("title")}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {t("description")}
          </p>

          <p className="text-black/85 max-w-2xl mx-auto leading-relaxed mt-4 italic">
            {t("sub")}{" "}
            <Link href="/suppliers/register" className="text-blue-600 font-medium underline">
              {t("link")}
            </Link>{" "}
            {t("subcontd")}
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href={p.link}
                className="group relative block rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 h-full flex flex-col"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-accent/5 via-transparent to-primary/10 rounded-3xl" />

                {/* Image */}
                <div className="relative w-full h-52 md:h-56 overflow-hidden rounded-t-3xl flex-shrink-0 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300">
                  <img
                    src={p.img}
                    alt={t(`items.${p.key}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0F233F] mb-2 group-hover:text-accent transition-colors duration-300">
                      {t(`items.${p.key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {t(`items.${p.key}.desc`)}
                    </p>
                  </div>
                  <span className="text-sm text-accent font-medium group-hover:underline transition duration-300">
                    {t("explore")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
"use client";
import { useTranslations } from "next-intl";


export const TradeMissionsHero = () => {
  const t = useTranslations("TradeMissionsHero");

  return (
    <section className="relative py-40 px-6 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/missions.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#0F233F]/80 backdrop-blur-[2px]" />

      <div className="relative max-w-6xl mx-auto text-center text-white">

        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">
          {t("label")}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          {t("title")}
          <span className="block text-accent">
            {t("titleHighlight")}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          {t("description")}
        </p>

      </div>

    </section>
  );
};
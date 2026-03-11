"use client";
import { useTranslations } from "next-intl";


export const FeaturedTradeMission = () => {
  const t = useTranslations("FeaturedTradeMission");

  return (
    <section className="py-28 px-6 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto">

        <div className="p-10 rounded-2xl bg-white border border-gray-200 shadow-sm">

          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            {t("label")}
          </p>

          <h3 className="text-2xl font-semibold text-[#0F233F] mb-3">
            {t("title")}
          </h3>

          <p className="text-gray-500 mb-4">
            {t("date")}
          </p>

          <p className="text-gray-600 mb-6">
            {t("description")}
          </p>

          <button className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition">
            {t("cta")}
          </button>

        </div>

      </div>
    </section>
  );
};
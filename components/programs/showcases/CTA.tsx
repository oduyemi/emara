"use client";
import { useTranslations } from "next-intl";


export const ShowcaseCTA = () => {
  const t = useTranslations("ShowcaseCTA");

  return (
    <section className="py-28 px-6 bg-[#0F233F] text-white text-center">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-300 mb-8">
          {t("description")}
        </p>

        <button className="px-8 py-4 btn-primary text-white rounded-xl font-semibold hover:opacity-90 transition">
          {t("cta")}
        </button>

      </div>

    </section>
  );
};
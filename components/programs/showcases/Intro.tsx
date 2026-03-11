"use client";
import { useTranslations } from "next-intl";


export const InternationalShowcasesIntro = () => {
  const t = useTranslations("InternationalShowcasesIntro");

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F] mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {t("description")}
        </p>

      </div>
    </section>
  );
};
"use client";
import { useTranslations } from "next-intl";


export const ProgramsIntro = () => {
  const t = useTranslations("ProgramsIntro");

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-secondary mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {t("description")}
        </p>

      </div>
    </section>
  );
};
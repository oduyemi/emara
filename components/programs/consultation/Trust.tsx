"use client";
import { useTranslations } from "next-intl";




export const ConsultationTrust = () => {
  const t = useTranslations("ConsultationTrust");

  return (
    <section className="py-20 px-6 bg-[#F7F9FC] text-center">
      <div className="max-w-3xl mx-auto">

        <h3 className="text-2xl font-semibold text-[#0F233F] mb-4">
          {t("title")}
        </h3>

        <p className="text-gray-600">
          {t("description")}
        </p>

      </div>
    </section>
  );
};
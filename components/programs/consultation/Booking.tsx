"use client";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";

export const CalendlyBooking = () => {
  const t = useTranslations("CalendlyBooking");

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-[#0F233F] mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 mb-10">
          {t("description")}
        </p>

        <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden">

          <InlineWidget
            url="https://calendly.com/care-trademara/30min?primary_color=6f1a07"
            styles={{ height: "720px" }}
          />

        </div>

      </div>
    </section>
  );
};
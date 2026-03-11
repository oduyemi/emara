"use client";
import { useTranslations } from "next-intl";




export const CalendlyBooking = () => {
  const t = useTranslations("CalendlyBooking");

  return (
    <section
      id="book-session"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-[#0F233F] mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 mb-10">
          {t("description")}
        </p>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">

          <iframe
            src="https://calendly.com/YOUR-LINK"
            width="100%"
            height="700"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
};
"use client";
import { useTranslations } from "next-intl";


export const TradeMissionBenefits = () => {
  const t = useTranslations("TradeMissionBenefits");
  const benefits = t.raw("benefits") as string[];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-semibold text-[#0F233F] mb-6">
            {t("title")}
          </h2>

          <p className="text-gray-600 mb-8">
            {t("description")}
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-accent font-bold">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/trade.jpg"
            alt={t("imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};
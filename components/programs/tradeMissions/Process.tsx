"use client";
import { useTranslations } from "next-intl";

export const TradeMissionProcess = () => {
  const t = useTranslations("TradeMissionProcess");

  const steps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" },
    { key: "step4" }
  ];

  return (
    <section className="py-28 px-6 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#0F233F]">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className="p-6 bg-white border border-gray-200 rounded-xl"
            >
              <div className="text-accent font-semibold mb-3">
                {`0${i + 1}`}
              </div>

              <h3 className="font-semibold text-[#0F233F] mb-2">
                {t(`${step.key}.title`)}
              </h3>

              <p className="text-gray-600 text-sm">
                {t(`${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
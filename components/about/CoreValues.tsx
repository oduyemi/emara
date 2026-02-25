"use client";
import { useTranslations } from "next-intl";

export default function CoreValues() {
  const t = useTranslations("about.values");
  const values = t.raw("items");

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value: any, index: number) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-surface-dark bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-surface-dark rounded-l-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                {value.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
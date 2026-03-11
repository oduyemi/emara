"use client";
import { useTranslations } from "next-intl";




export const ConsultationTopics = () => {
  const t = useTranslations("ConsultationTopics");

  const topics = t.raw("topics") as string[];

  return (
    <section className="py-24 px-6 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-semibold text-[#0F233F] mb-10 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className="p-4 border border-gray-200 rounded-lg bg-white text-sm text-gray-700"
            >
              {topic}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
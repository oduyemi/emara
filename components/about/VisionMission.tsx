"use client";

import { useTranslations } from "next-intl";

export default function VisionMission() {
  const t = useTranslations("about");

  return (
    <section className="py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Vision */}
        <div className="p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition duration-500">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            {t("vision.title")}
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {t("vision.text")}
          </p>
        </div>

        {/* Mission */}
        <div className="p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition duration-500">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            {t("mission.title")}
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {t("mission.text")}
          </p>
        </div>

      </div>
    </section>
  );
}
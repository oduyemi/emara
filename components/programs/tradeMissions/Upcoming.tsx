"use client";
import { useTranslations } from "next-intl";


export const UpcomingTradeMissions = () => {
  const t = useTranslations("UpcomingTradeMissions");
  const missions = t.raw("missions") as { title: string; date: string; location: string }[];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold text-[#0F233F] mb-12 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-[#0F233F] mb-2">
                {mission.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {mission.date}
              </p>

              <p className="text-gray-600 text-sm">
                {mission.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
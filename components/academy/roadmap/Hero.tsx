"use client";
import { useTranslations } from "next-intl";
import { Map } from "lucide-react";



export default function ExportRoadmapHero() {
  const t = useTranslations("roadmap.hero")

  return (
    <section className="surface-dark py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex justify-center items-center gap-2 text-accent text-sm mb-4">
          <Map size={16}/>
          {t("badge")}
        </div>

        <h1 className="text-5xl font-semibold mb-6">
          {t("title")}
        </h1>

        <p className="text-blue-100 max-w-3xl mx-auto text-lg">
          {t("subtitle")}
        </p>

      </div>
    </section>
  )
}
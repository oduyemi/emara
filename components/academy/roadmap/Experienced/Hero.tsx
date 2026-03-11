"use client";

import { useTranslations } from "next-intl"

export default function ExperiencedExportersHero() {
  const t = useTranslations("roadmap.exp.hero")

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-semibold mb-6">
          {t("title")}
        </h1>

        <p className="text-muted text-lg">
          {t("subtitle")}
        </p>

      </div>
    </section>
  )
}
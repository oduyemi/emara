"use client"

import { useTranslations } from "next-intl"

export const GuideNavigation = () => {

  const t = useTranslations("essentials.navigation")

  const items = [
    t("basics"),
    t("marketResearch"),
    t("compliance"),
    t("logistics"),
    t("buyers"),
    t("scaling")
  ]

  return (
    <section className="py-16 surface">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="surface p-6 rounded-xl hover:shadow-md transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
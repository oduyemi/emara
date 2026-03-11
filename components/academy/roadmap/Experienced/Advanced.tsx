"use client";
import { useTranslations } from "next-intl";


export default function AdvancedRoadmap() {
  const t = useTranslations("roadmap.exp.strategy")

  const items = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4")
  ]

  return (
    <section className="surface py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="surface p-8 rounded-lg">
              <p className="text-muted">{item}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
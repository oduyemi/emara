"use client"

import { useTranslations } from "next-intl"

export default function KeyExporterInsights() {

  const t = useTranslations("essentials.insights")

  const items = [
    t("documentation"),
    t("buyers"),
    t("pricing"),
    t("tradeFinance")
  ]

  return (
    <section className="py-24 surface">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {items.map((item, i) => (
            <div key={i} className="surface p-6 rounded-xl">
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
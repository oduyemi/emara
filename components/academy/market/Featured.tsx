"use client"

import { useTranslations } from "next-intl"

export default function FeaturedMarketInsights() {
  const t = useTranslations("marketProfiles.insights")

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="surface p-6 rounded-lg">
            <p>{t("demand")}</p>
          </div>

          <div className="surface p-6 rounded-lg">
            <p>{t("regulations")}</p>
          </div>

          <div className="surface p-6 rounded-lg">
            <p>{t("buyers")}</p>
          </div>

        </div>

      </div>
    </section>
  )
}
"use client"

import { useTranslations } from "next-intl"

export default function WorkshopCTA() {

  const t = useTranslations("workshops.cta")

  return (
    <section className="py-24 text-center">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-muted mb-8">
          {t("subtitle")}
        </p>

        <button className="btn-accent px-8 py-3 rounded-lg">
          {t("button")}
        </button>

      </div>

    </section>
  )
}
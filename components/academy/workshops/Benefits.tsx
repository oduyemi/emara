"use client"

import { useTranslations } from "next-intl"

export default function WorkshopBenefits() {

  const t = useTranslations("workshops.benefits")

  return (
    <section className="py-24 surface-dark">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <p className="text-blue-100 max-w-3xl mx-auto">
          {t("description")}
        </p>

      </div>

    </section>
  )
}
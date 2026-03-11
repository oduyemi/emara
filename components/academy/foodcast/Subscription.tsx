"use client"

import { useTranslations } from "next-intl"

export default function SubscribeSection() {
  const t = useTranslations("foodcast.subscribe")

  return (
    <section className="surface-dark py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-3xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-blue-100 mb-8">
          {t("desc")}
        </p>

        <button className="btn-primary px-8 py-3 rounded-lg">
          {t("button")}
        </button>

      </div>

    </section>
  )
}
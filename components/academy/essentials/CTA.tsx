"use client"

import { useTranslations } from "next-intl"

export default function EssentialsCTA() {

  const t = useTranslations("essentials.book")

  return (
    <section className="surface-dark py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        <p className="text-accent text-sm mb-3">
          {t("comingSoon")}
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-blue-100 mb-8">
          {t("description")}
        </p>

        <button className="btn-accent px-8 py-3 rounded-lg">
          {t("button")}
        </button>

      </div>

    </section>
  )
}
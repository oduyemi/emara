"use client"

import { useTranslations } from "next-intl"

export default function ExpertPerspective() {

  const t = useTranslations("essentials.expert")

  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-muted">
          {t("description")}
        </p>

      </div>

    </section>
  )
}
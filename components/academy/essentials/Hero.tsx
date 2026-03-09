"use client"

import { useTranslations } from "next-intl"
import { BookOpen } from "lucide-react"

export default function EssentialsHero() {
  const t = useTranslations("essentials.hero")

  return (
    <section className="surface-dark py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <BookOpen size={16}/>
            {t("badge")}
          </div>

          <h1 className="text-5xl font-semibold mb-6">
            {t("title")}
          </h1>

          <p className="text-lg text-blue-100">
            {t("subtitle")}
          </p>

        </div>

      </div>

    </section>
  )
}
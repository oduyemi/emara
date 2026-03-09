"use client"

import { useTranslations } from "next-intl"
import { Users, GraduationCap } from "lucide-react"

export default function WorkshopHero() {
  const t = useTranslations("workshops.hero")

  return (
    <section className="surface-dark py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <GraduationCap size={16}/>
            {t("badge")}
          </div>

          <h1 className="text-5xl font-semibold mb-6">
            {t("title")}
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-xl">
            {t("subtitle")}
          </p>

          <div className="flex gap-4">
            <button className="btn-primary px-7 py-3 rounded-lg">
              {t("primaryCTA")}
            </button>

            <button className="btn-secondary px-7 py-3 rounded-lg">
              {t("secondaryCTA")}
            </button>
          </div>

        </div>

        <div className="surface p-8 rounded-xl shadow-xl">

          <div className="flex items-center gap-3 mb-4">
            <Users className="text-accent"/>
            <p className="font-semibold text-secondary">
              {t("smallGroup")}
            </p>
          </div>

          <p className="text-muted">
            {t("smallGroupDesc")}
          </p>

        </div>

      </div>

    </section>
  )
}
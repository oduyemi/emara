"use client";
import { useTranslations } from "next-intl";




export default function MarketSearchFilters() {
  const t = useTranslations("marketProfiles.filters")

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        <input
          placeholder={t("search")}
          className="border border-gray-200 rounded-lg px-4 py-3"
        />

        <select className="border border-gray-200 rounded-lg px-4 py-3">
          <option>{t("region")}</option>
        </select>

        <select className="border border-gray-200 rounded-lg px-4 py-3">
          <option>{t("sector")}</option>
        </select>

      </div>
    </section>
  )
}
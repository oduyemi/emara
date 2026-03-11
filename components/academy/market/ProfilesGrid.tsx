"use client"

import CountryCard from "./CountryCard"
import { useTranslations } from "next-intl"

export default function CountryProfilesGrid() {
  const t = useTranslations("marketProfiles.countries")

  const countries = [
    {
      name: t("usa.name"),
      desc: t("usa.desc")
    },
    {
      name: t("uk.name"),
      desc: t("uk.desc")
    },
    {
      name: t("germany.name"),
      desc: t("germany.desc")
    }
  ]

  return (
    <section className="surface py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {countries.map((c, i) => (
          <CountryCard key={i} name={c.name} desc={c.desc} />
        ))}

      </div>
    </section>
  )
}
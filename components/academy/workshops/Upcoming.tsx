"use client"

import { useTranslations } from "next-intl"
import WorkshopCard from "./WorkshopCard"

export default function UpcomingWorkshops() {

  const t = useTranslations("workshops.upcoming")

  const workshops = [
    {
      title: t("items.readiness"),
      date: "April 10",
      location: "Lagos / Virtual"
    },
    {
      title: t("items.market"),
      date: "April 22",
      location: "Accra / Virtual"
    },
    {
      title: t("items.compliance"),
      date: "May 4",
      location: "Online"
    }
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {workshops.map((w, i) => (
            <WorkshopCard key={i} {...w}/>
          ))}

        </div>

      </div>

    </section>
  )
}
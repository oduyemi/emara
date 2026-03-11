"use client"

import { useTranslations } from "next-intl"
import WebinarCard from "./WebinarCard"

export default function UpcomingWebinars() {

  const t = useTranslations("webinars.upcoming")

  const webinars = [
    {
      title: t("items.exportEU.title"),
      date: "April 5",
      duration: "45 min",
      image: "/images/organic.jpg"
    },
    {
      title: t("items.compliance.title"),
      date: "April 12",
      duration: "60 min",
      image: "/images/compliance.jpg"
    },
    {
      title: t("items.supplyChain.title"),
      date: "April 20",
      duration: "50 min",
      image: "/images/export.jpg"
    }
  ]

  return (
    <section className="py-24 surface">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {webinars.map((w, i) => (
            <WebinarCard key={i} {...w} />
          ))}

        </div>

      </div>

    </section>
  )
}
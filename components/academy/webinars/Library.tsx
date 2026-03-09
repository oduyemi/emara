"use client"

import { useTranslations } from "next-intl"
import WebinarCard from "./WebinarCard"

export default function WebinarLibrary() {

  const t = useTranslations("webinars.library")

  const recordings = [
    {
      title: t("items.docs.title"),
      date: "Recorded",
      duration: "52 min",
      image: "/images/webinars/docs.jpg"
    },
    {
      title: t("items.pricing.title"),
      date: "Recorded",
      duration: "40 min",
      image: "/images/webinars/pricing.jpg"
    }
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {recordings.map((r, i) => (
            <WebinarCard key={i} {...r}/>
          ))}

        </div>

      </div>

    </section>
  )
}
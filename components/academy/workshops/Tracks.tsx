"use client"

import { useTranslations } from "next-intl"

export default function WorkshopTracks() {

  const t = useTranslations("workshops.tracks")

  const tracks = [
    t("items.export"),
    t("items.market"),
    t("items.compliance")
  ]

  return (
    <section className="py-24 surface">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {tracks.map((track, i) => (

            <div key={i} className="surface p-8 rounded-xl">

              <p className="font-semibold text-secondary">
                {track}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
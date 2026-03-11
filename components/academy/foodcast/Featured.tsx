"use client";
import { useTranslations } from "next-intl";


export default function FeaturedEpisode() {
  const t = useTranslations("foodcast.featured")

  return (
    <section className="surface py-24">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-accent font-medium mb-2">
            {t("badge")}
          </p>

          <h3 className="text-3xl font-semibold mb-4">
            {t("title")}
          </h3>

          <p className="text-muted mb-6">
            {t("description")}
          </p>

          <button className="btn-accent px-6 py-3 rounded-lg">
            {t("listen")}
          </button>
        </div>

        <div className="surface p-10 rounded-xl text-center">
          Podcast Player Placeholder
        </div>

      </div>

    </section>
  )
}
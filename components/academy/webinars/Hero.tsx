"use client"
import { useTranslations } from "next-intl"
import { Calendar, Video } from "lucide-react"
import Link from "next/link"

export default function WebinarHero() {
  const t = useTranslations("webinars.hero")

  return (
    <section className="surface-dark py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <div className="inline-flex items-center gap-2 text-sm text-accent mb-4">
            <Video size={16} />
            {t("badge")}
          </div>

          <h1 className="text-5xl font-semibold leading-tight mb-6">
            {t("title")}
          </h1>

          <p className="text-lg text-blue-100 max-w-xl mb-8">
            {t("description")}
          </p>

          <div className="flex gap-4">
            <Link href="#webinars">
              <button className="btn-primary px-7 py-3 rounded-lg">
                {t("primaryCTA")}
              </button>
            </Link>

            <Link href="#upcomingwebinars">
              <button className="btn-secondary px-7 py-3 rounded-lg">
                {t("secondaryCTA")}
              </button>
            </Link>
          </div>

        </div>

        <div className="relative">
          <div className="surface rounded-xl p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-accent" size={20} />
              <p className="font-medium text-secondary">
                {t("nextWebinar.label")}
              </p>
            </div>

            <p className="text-lg text-secondary font-semibold mb-2">
              {t("nextWebinar.title")}
            </p>

            <p className="text-muted text-sm">
              {t("nextWebinar.date")}
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}
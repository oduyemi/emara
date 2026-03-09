"use client";
import { useTranslations } from "next-intl";
import { Calendar, Clock } from "lucide-react";



export default function FeaturedWebinar() {
  const t = useTranslations("webinars.featured")
  
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-sm text-accent font-medium mb-3">
          {t("label")}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center surface rounded-xl p-10">

          <img
            src="/images/webinars/exportmarket.jpg"
            className="rounded-lg"
          />

          <div>

            <h2 className="text-3xl font-semibold mb-4">
              {t("title")}
            </h2>

            <p className="text-muted mb-6">
              {t("description")}
            </p>

            <div className="flex gap-6 text-sm text-muted mb-6">

              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {t("date")}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {t("duration")}
              </span>

            </div>

            <button className="btn-primary px-6 py-3 rounded-lg">
              {t("cta")}
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}
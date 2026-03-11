"use client";
import { useTranslations } from "next-intl";


export default function FoodCastAbout() {
  const t = useTranslations("foodcast.about")

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          {t("title")}
        </h2>

        <p className="text-lg text-muted leading-relaxed">
          {t("description")}
        </p>

      </div>
    </section>
  )
}
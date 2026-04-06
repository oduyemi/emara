"use client";
import { useTranslations } from "next-intl";


export default function RoadmapSteps() {
  const t = useTranslations("roadmap.new.checklist")

  const steps = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
  ]

  return (
    <section className="surface py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          {t("title")}
        </h2>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="surface p-8 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Step {i + 1}
              </h3>
              <p className="text-muted">{step}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
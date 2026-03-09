"use client"

import { useTranslations } from "next-intl"

export const ExportGuideSections = () => {

  const t = useTranslations("essentials.sections")

  const sections = [
    {
      title: t("fundamentals.title"),
      desc: t("fundamentals.intro")
    },
    {
      title: t("compliance.title"),
      desc: t("compliance.intro")
    },
    {
      title: t("logistics.title"),
      desc: t("logistics.intro")
    }
  ]

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {sections.map((section, i) => (

          <div key={i} className="surface p-8 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              {section.title}
            </h3>

            <p className="text-muted">
              {section.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}
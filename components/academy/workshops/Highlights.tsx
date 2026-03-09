"use client"
import { useTranslations } from "next-intl"
import { Users, Globe, ShieldCheck } from "lucide-react"

export default function WorkshopHighlights() {

  const t = useTranslations("workshops.highlights")

  const highlights = [
    {
      icon: <Users size={22} />,
      title: t("items.interactive.title"),
      desc: t("items.interactive.desc")
    },
    {
      icon: <Globe size={22} />,
      title: t("items.global.title"),
      desc: t("items.global.desc")
    },
    {
      icon: <ShieldCheck size={22} />,
      title: t("items.compliance.title"),
      desc: t("items.compliance.desc")
    }
  ]

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {highlights.map((item, i) => (

          <div key={i} className="surface p-8 rounded-xl">

            <div className="text-accent mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-3">
              {item.title}
            </h3>

            <p className="text-muted">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}
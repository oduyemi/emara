"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { CheckCircle2, Compass, TrendingUp } from "lucide-react"

const stepsData = [
  {
    id: 1,
    key: "newExporters",
    icon: <Compass size={20} />,
    link: "/suppliers/roadmap/new-exporters",
  },
  {
    id: 2,
    key: "experiencedExporters",
    icon: <TrendingUp size={20} />,
    link: "/suppliers/roadmap/exporters",
  },
]

export const ExportJourney = () => {
  const t = useTranslations("exportJourney")

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-accent font-medium">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl font-bold text-secondary mt-2">
            {t("title")}
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Stepper */}
        <div className="flex flex-col md:flex-row md:space-x-6 relative">
          {stepsData.map((step, idx) => {

            const isLast = idx === stepsData.length - 1

            return (
              <div key={step.id} className="relative flex-1 mb-8 md:mb-0">
                
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-gray-300 z-0" />
                )}

                {/* Step Card */}
                <div className="relative z-10 bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 group">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full text-accent mb-4 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-secondary text-lg mb-2">
                    {t(`${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {t(`${step.key}.desc`)}
                  </p>

                  {/* CTA */}
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-primary px-4 py-2 rounded-lg hover:bg-accent/90 transition"
                  >
                    {t(`${step.key}.cta`)}
                    <CheckCircle2 size={16} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
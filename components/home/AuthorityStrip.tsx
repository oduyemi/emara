"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Scale, FileCheck2, Globe } from "lucide-react"
import { useTranslations } from "next-intl"

const iconMap: any = {
  scale: Scale,
  fileCheck: FileCheck2,
  shield: ShieldCheck,
  globe: Globe,
}

export default function AuthorityStrip() {
  const t = useTranslations("AuthorityStrip")
  const pillars = t.raw("pillars")

  return (
    <section className="bg-white py-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Executive Framed Panel */}
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl p-16 border border-blue-100">

          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              {t("section_label")}
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              {t("section_title")}
            </h2>

            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
              {t("section_description")}
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {pillars.map((pillar: any, i: number) => {
              const Icon = iconMap[pillar.icon]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  {/* Vertical Authority Marker */}
                  <div className="w-1 surface-dark rounded-full" />

                  <div>
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-primary my-16" />

          {/* Structured Authority Lists */}
          <div className="space-y-16">

            <AuthorityBlock
              title={t("references_label")}
              items={t.raw("regulatory_bodies")}
            />

            <AuthorityBlock
              title={t("standards_label")}
              items={t.raw("standards_covered")}
            />

            <AuthorityBlock
              title={t("security_label")}
              items={t.raw("security_badges")}
            />

          </div>

          {/* Operational Statement */}
          <div className="mt-20 pt-12 border-t border-blue-100 text-center">
            <p className="text-lg text-gray-800 font-medium max-w-4xl mx-auto leading-relaxed">
              {t("operational_statement")}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function AuthorityBlock({ title, items }: any) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.35em] text-accent mb-8">
        {title}
      </h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: string, i: number) => (
          <div
            key={i}
            className="p-5 border border-gray-200 rounded-xl bg-white text-gray-800 text-sm leading-relaxed"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
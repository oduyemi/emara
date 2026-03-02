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
    <section className="relative bg-white py-28 md:py-36 border-t border-gray-200 overflow-hidden">

      {/* Subtle grid layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Executive Framed Panel */}
        <div className="relative rounded-3xl p-10 md:p-16 bg-gradient-to-b from-white via-slate-50 to-white border border-gray-200 shadow-sm">

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6 font-medium">
              {t("section_label")}
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-secondary leading-[1.1] mb-6">
              {t("section_title")}
            </h2>

            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {t("section_description")}
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {pillars.map((pillar: any, i: number) => {
              const Icon = iconMap[pillar.icon]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative flex gap-8"
                >
                  {/* Authority Marker */}
                  <div className="w-[2px] bg-accent/50 rounded-full" />

                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-muted leading-relaxed max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <div className="relative my-20">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* Structured Authority Blocks */}
          <div className="space-y-20">

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
          <div className="mt-24 pt-12 border-t border-gray-200 text-center">
            <p className="text-lg md:text-xl text-secondary font-medium max-w-4xl mx-auto leading-relaxed">
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
      <h4 className="text-xs uppercase tracking-[0.35em] text-accent mb-10 font-medium">
        {title}
      </h4>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: string, i: number) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300 text-sm md:text-base text-secondary leading-relaxed shadow-sm"
          >
            {/* subtle accent top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/40 rounded-t-2xl" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
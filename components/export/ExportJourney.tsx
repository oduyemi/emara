"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, TrendingUp, ArrowRight } from "lucide-react"

export const ExportJourney = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-[var(--color-bg)]">

      {/* Ambient Lights */}
      <div className="absolute -top-48 left-[-200px] w-[800px] h-[800px] bg-[var(--color-accent-soft)]/20 blur-[220px] rounded-full"/>
      <div className="absolute bottom-[-260px] right-[-200px] w-[800px] h-[800px] bg-[var(--color-primary)]/10 blur-[240px] rounded-full"/>

      {/* subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:38px_38px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Shell */}
        <div className="border border-[var(--color-surface-border)] rounded-[32px] px-14 py-20 bg-white/40 backdrop-blur-xl">

          {/* Header */}
          <div className="max-w-2xl mb-24">

            <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6 font-medium">
              Export Journey
            </p>

            <h2 className="text-[40px] font-semibold text-secondary leading-tight mb-6">
              Where are you in your export journey?
            </h2>

            <p className="text-muted leading-relaxed text-[16px]">
              Whether you are preparing to export for the first time or expanding
              existing trade operations, Emara provides tailored pathways
              designed to support sustainable global growth.
            </p>

          </div>

          {/* Journey Flow */}
          <div className="relative grid md:grid-cols-2 gap-16">

            {/* progression line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-surface-border)] to-transparent"/>

            <JourneyCard
              icon={<Compass size={24} />}
              title="New Exporters"
              desc="Build export readiness through structured guidance covering compliance, logistics, documentation, and global market preparation."
              link="/suppliers/roadmap/new-exporters"
              cta="Start Your Export Roadmap"
            />

            <JourneyCard
              icon={<TrendingUp size={24} />}
              title="Experienced Exporters"
              desc="Strengthen your international operations, access new buyers, and expand into additional markets through the Emara ecosystem."
              link="/suppliers/roadmap/exporters"
              cta="Advance Your Export Strategy"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

const JourneyCard = ({
  icon,
  title,
  desc,
  link,
  cta
}: any) => {

  return (

    <motion.div
      whileHover={{ y: -16 }}
      transition={{ duration: .45, ease: [0.22,1,0.36,1] }}
      className="group relative rounded-3xl"
    >

      {/* gradient border */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-[var(--color-accent-soft)]/50 via-white/40 to-transparent">

        {/* card surface */}
        <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl p-12 overflow-hidden transition-all duration-500 group-hover:bg-white/80">

          {/* spotlight */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_60%)]"/>

          {/* floating orb */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-accent-soft)]/20 blur-2xl rounded-full"
          />

          <div className="relative">

            {/* icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-accent-soft)]/30 text-secondary mb-8 shadow-sm transition group-hover:scale-105">
              {icon}
            </div>

            <h3 className="text-2xl font-semibold text-secondary mb-4">
              {title}
            </h3>

            <p className="text-muted leading-relaxed mb-10 text-[15.5px] max-w-md">
              {desc}
            </p>

            {/* CTA */}
            <Link
              href={link}
              className="inline-flex items-center text-sm font-semibold text-secondary bg-[var(--color-accent-soft)] px-6 py-3 rounded-lg hover:bg-[var(--color-accent-soft)]/80 transition"
            >
              {cta}
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18}/>
            </Link>

          </div>

        </div>

      </div>

    </motion.div>

  )
}
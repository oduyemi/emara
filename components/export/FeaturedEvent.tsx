"use client"

import { motion } from "framer-motion"
import { CalendarDays, MapPin } from "lucide-react"
import Link from "next/link"

export const FeaturedEvent = () => {
  return (
    <section className="relative py-24 px-6 bg-[var(--color-surface)] overflow-hidden">

      {/* ambient lighting */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[var(--color-accent-soft)]/10 blur-[160px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative"
      >

        <div className="relative surface rounded-2xl p-10 md:p-14 shadow-sm hover:shadow-lg transition-all duration-500 border border-[var(--color-surface-border)] overflow-hidden">

          {/* subtle gradient hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/10 to-transparent" />

          <div className="relative">

            {/* Label */}
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-6">
              Featured Event
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight mb-6 max-w-3xl">
              Focused Trade Mission to Taiwan for Retail and Foodservice
            </h2>

            {/* Event meta */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted mb-8">

              <div className="flex items-center gap-2">
                <CalendarDays size={16}/>
                August 18—20, 2026
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16}/>
                Nairobi, Kenya
              </div>

            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed max-w-2xl mb-10">
              Kenya offers significant market opportunities for exporters of
              agricultural and food products. This trade mission connects
              qualified suppliers with buyers, distributors, and retail
              partners exploring new sourcing relationships.
            </p>

            {/* CTA */}
            <Link
              href="/suppliers/events/taiwan-trade-mission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-primary text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              View Event Details
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>

          </div>

        </div>

      </motion.div>

    </section>
  )
}
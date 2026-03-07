"use client"

import { motion } from "framer-motion"
import { CalendarDays, Video } from "lucide-react"
import Link from "next/link"

const events = [
  {
    title: "Export Documentation Masterclass",
    type: "Webinar",
    date: "September 12, 2026",
    link: "/suppliers/events/export-documentation-masterclass"
  },
  {
    title: "Preparing African Food Brands for EU Retail",
    type: "Seminar",
    date: "October 3, 2026",
    link: "/suppliers/events/eu-retail-preparation"
  },
  {
    title: "Market Entry Strategies for Asian Food Markets",
    type: "Webinar",
    date: "October 21, 2026",
    link: "/suppliers/events/asian-market-entry"
  }
]

export const UpcomingEvents = () => {
  return (
    <section className="relative py-24 px-6 bg-[var(--color-bg)] overflow-hidden">

      {/* ambient background */}
      {/* <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-[var(--color-accent-soft)]/10 rounded-full blur-[140px]" /> */}

      <div className="max-w-6xl mx-auto relative">

        {/* Section header */}
        <div className="mb-16 max-w-xl">

          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Upcoming Learning Events
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight">
            Webinars and seminars for exporters
          </h2>

        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-7 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
            >

              {/* hover lighting */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/10 to-transparent" />

              <div className="relative">

                {/* Event type */}
                <div className="flex items-center gap-2 text-xs text-accent mb-3 uppercase tracking-wide">

                  <Video size={14}/>

                  {event.type}

                </div>

                {/* Title */}
                <h3 className="text-secondary font-semibold mb-4 leading-snug">
                  {event.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-sm text-muted mb-6">
                  <CalendarDays size={16} className="mr-2"/>
                  {event.date}
                </div>

                {/* CTA */}
                <Link
                  href={event.link}
                  className="inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition"
                >
                  Register
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}
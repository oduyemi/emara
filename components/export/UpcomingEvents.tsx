"use client"

import { motion } from "framer-motion"
import { CalendarDays, Video } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

type Event = {
  title: string
  type: string
  date: string
  link: string
}

export const UpcomingEvents = () => {

  const t = useTranslations("upcomingEvents")

  const events = t.raw("events") as Event[]

  return (
    <section className="relative py-24 px-6 bg-[var(--color-bg)] overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        {/* Section header */}
        <div className="mb-16 max-w-xl">

          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {t("label")}
          </p>

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
                  {t("cta")}
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
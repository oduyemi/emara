"use client";
import { motion } from "framer-motion";
import { CalendarDays, Video, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Event = {
  title: string
  type: string
  date: string
  link: string
}

const eventImages = [
  "/images/organic.jpg",
  "/images/export.jpg",
  "/images/grain.jpg",
];

export const UpcomingEvents = () => {

  const t = useTranslations("upcomingEvents");

  const events = t.raw("events") as Event[];

  return (
    <section className="relative py-28 px-6 bg-[var(--color-bg)] overflow-hidden">

      <div className="max-w-7xl mx-auto relative">

        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("label")}
          </p>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-3 gap-10">

          {events.map((event, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-[var(--color-surface-border)] bg-white overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.25)] transition-all duration-500"
            >

              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-primary)]"/>

              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">

                <Image
                  src={eventImages[i]}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-[1400ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>

                {/* Event type badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-secondary text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Video size={12}/>
                  {event.type}
                </div>

              </div>

              <div className="p-7">

                {/* Title */}
                <h3 className="text-secondary font-semibold mb-4 leading-snug text-[17px]">
                  {event.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-sm text-muted mb-6">
                  <CalendarDays size={16} className="mr-2 text-accent"/>
                  {event.date}
                </div>

                {/* CTA */}
                <Link
                  href={event.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  {t("cta")}

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260 }}
                  >
                    <ArrowRight size={16}/>
                  </motion.span>

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};
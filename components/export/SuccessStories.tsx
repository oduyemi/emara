"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

type Story = {
  company: string
  country: string
  markets: string
  story: string
  image: string
}

export const SuccessStories = () => {

  const t = useTranslations("successStories")

  const stories = t.raw("stories") as Story[]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setIndex((prev) => (prev + 1) % stories.length)
  const prev = () => setIndex((prev) => (prev - 1 + stories.length) % stories.length)

  useEffect(() => {

    if (paused) return

    const interval = setInterval(() => next(), 6000)

    return () => clearInterval(interval)

  }, [paused])

  const story = stories[index]

  return (

    <section className="relative py-32 px-6 bg-[var(--color-surface)] overflow-hidden">

      {/* ambient lighting */}
      <div className="absolute -top-40 left-[-100px] w-[700px] h-[700px] bg-[var(--color-accent-soft)]/15 blur-[180px] rounded-full"/>
      <div className="absolute bottom-[-200px] right-[-100px] w-[700px] h-[700px] bg-[var(--color-surface)]/10 blur-[180px] rounded-full"/>

      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="max-w-xl mb-20">

          <p className="text-xs uppercase tracking-[0.28em] text-accent mb-4">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
            {t("title")}
          </h2>

        </div>

        {/* carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative rounded-[36px] overflow-hidden shadow-[0_40px_90px_-25px_rgba(0,0,0,0.25)] border border-[var(--color-surface-border)] bg-white"
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -90 }}
              transition={{ duration: .55, ease: [0.22,1,0.36,1] }}
              className="grid md:grid-cols-2"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] md:h-[480px] group overflow-hidden">

                <motion.img
                  src={story.image}
                  alt={story.company}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"/>

                {/* country badge */}
                <div className="absolute top-6 left-6 bg-white/90 text-secondary text-xs px-3 py-1 rounded-full shadow-sm">
                  {story.country}
                </div>

              </div>

              {/* CONTENT */}
              <div className="relative p-12 flex flex-col justify-center">

                {/* quote */}
                <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 font-medium">
                  “{story.story}”
                </p>

                <div className="space-y-2">

                  <p className="font-semibold text-secondary text-lg">
                    {story.company}
                  </p>

                  {/* markets */}
                  <div className="flex flex-wrap gap-2 mt-2">

                    {story.markets.split(",").map((m, i) => (

                      <span
                        key={i}
                        className="text-xs bg-[var(--color-surface)] border border-[var(--color-surface-border)] px-3 py-1 rounded-full"
                      >
                        {m.trim()}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* navigation */}
          <div className="absolute right-8 bottom-8 flex gap-3">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full backdrop-blur bg-white/80 border border-[var(--color-surface-border)] flex items-center justify-center hover:bg-white transition shadow-sm"
            >
              <ChevronLeft size={20}/>
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full backdrop-blur bg-white/80 border border-[var(--color-surface-border)] flex items-center justify-center hover:bg-white transition shadow-sm"
            >
              <ChevronRight size={20}/>
            </button>

          </div>

          {/* progress bar */}
          <div className="absolute bottom-0 left-0 right-0 flex">

            {stories.map((_, i) => (

              <motion.div
                key={i}
                animate={{ flex: i === index ? 4 : 1 }}
                transition={{ duration: .35 }}
                className={`h-[3px] ${
                  i === index
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-surface-border)]"
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}
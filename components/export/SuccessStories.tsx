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

  const next = () => {
    setIndex((prev) => (prev + 1) % stories.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  useEffect(() => {

    if (paused) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)

  }, [paused])

  const story = stories[index]

  return (

    <section className="relative py-28 px-6 bg-[var(--color-surface)] overflow-hidden">

      <div className="absolute -top-40 left-0 w-[700px] h-[700px] bg-[var(--color-accent-soft)]/10 blur-[160px] rounded-full"/>

      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="max-w-xl mb-20">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
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
          className="relative rounded-3xl overflow-hidden shadow-xl border border-[var(--color-surface-border)] bg-white"
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: .55, ease: [0.22,1,0.36,1] }}
              className="grid md:grid-cols-2"
            >

              {/* Image */}
              <div className="relative h-[360px] md:h-[440px]">

                <img
                  src={story.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={story.company}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>

              </div>

              {/* Content */}
              <div className="p-12 flex flex-col justify-center">

                <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8">
                  “{story.story}”
                </p>

                <div>

                  <p className="font-semibold text-secondary text-lg">
                    {story.company}
                  </p>

                  <p className="text-sm text-muted">
                    {story.country}
                  </p>

                  <p className="text-sm text-accent mt-1">
                    {t("exportMarkets")}: {story.markets}
                  </p>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* arrows */}
          <div className="absolute right-8 bottom-8 flex gap-3">

            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/90 border border-[var(--color-surface-border)] flex items-center justify-center hover:bg-white transition"
            >
              <ChevronLeft size={20}/>
            </button>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/90 border border-[var(--color-surface-border)] flex items-center justify-center hover:bg-white transition"
            >
              <ChevronRight size={20}/>
            </button>

          </div>

          {/* progress indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex">

            {stories.map((_, i) => (

              <motion.div
                key={i}
                animate={{
                  flex: i === index ? 3 : 1
                }}
                transition={{ duration: .4 }}
                className={`h-1 ${
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
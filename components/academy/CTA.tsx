"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";


export const AcademyCTA = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >

        <div className="surface border border-gray-200 rounded-2xl p-12 md:p-14 text-center shadow-sm backdrop-blur-sm">

          {/* icon */}
          <div className="mx-auto mb-6 w-14 h-14 rounded-xl bg-[#F3F6FB] flex items-center justify-center text-[#0F233F]">
            <BookOpen size={26} />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F] mb-5">
            Start your export journey
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Explore structured courses, expert webinars, and market intelligence
            designed to help African food exporters build the capabilities
            needed to succeed in international markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/suppliers/academy/export-essentials"
              className="group inline-flex items-center justify-center px-8 py-3 rounded-lg btn-primary text-white text-sm font-medium transition hover:shadow-lg"
            >
              Begin with Export Essentials

              <ArrowRight
                size={16}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/suppliers/academy/foodcast"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 text-sm font-medium text-[#0F233F] hover:bg-gray-50 transition"
            >
              Join the Foodcast
            </Link>

          </div>

        </div>

      </motion.div>

    </section>
  )
}
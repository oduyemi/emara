"use client";
import { motion } from "framer-motion";

export const AcademyHero = () => {
  return (
    <section className="relative min-h-[520px] flex items-center px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/bb.jpg')"
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F233F]/70 via-[#0F233F]/65 to-[#0F233F]/75" />

      {/* Ambient glow */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22,1,0.36,1] as [number, number, number, number] }}
        className="relative max-w-5xl mx-auto text-center text-white"
      >

        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
          Emara Export Academy
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          Learn how to export successfully
        </h1>

        <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
          The Emara Academy equips African food producers with the knowledge,
          tools, and market insights required to enter international markets.
          Explore webinars, workshops, market intelligence, and structured
          learning pathways designed to help exporters grow globally.
        </p>

        {/* optional micro stats */}
        <div className="flex justify-center gap-10 text-sm text-white/80">

          <div>
            <div className="text-xl font-semibold">20+</div>
            Learning Resources
          </div>

          <div>
            <div className="text-xl font-semibold">10+</div>
            Export Topics
          </div>

          <div>
            <div className="text-xl font-semibold">Global</div>
            Market Insights
          </div>

        </div>

      </motion.div>

    </section>
  );
};
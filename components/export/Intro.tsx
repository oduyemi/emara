"use client"

import { Globe, GraduationCap, Handshake, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const SuppliersIntro = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Ambient background gradients */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#0F233F]/5 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-20 items-start"
      >

        {/* LEFT */}
        <motion.div variants={item} className="relative">

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 120 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute -left-6 top-0 w-[3px] bg-gradient-to-b from-accent to-[#0F233F]"
          />

          <motion.p
            variants={item}
            className="text-xs text-accent uppercase tracking-[0.2em] mb-5"
          >
            African Export Infrastructure
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-semibold text-[#0F233F] leading-tight mb-6"
          >
            Turning export from a challenge into a competitive advantage
          </motion.h2>

          <motion.div
            variants={item}
            className="space-y-5 text-gray-600 leading-relaxed text-[15px] max-w-xl"
          >
            <p>
              Emara is dedicated to expanding the success of African food
              producers in international markets. The platform provides
              verified supplier visibility, export readiness tools, and
              direct connections to global buyers.
            </p>

            <p>
              Our goal is to professionalize the way African exporters
              participate in global trade. By strengthening credibility,
              compliance, and supplier discovery, Emara transforms the
              <strong> E in Export </strong> from a logistical hurdle into
              a strategic advantage for the continent.
            </p>
          </motion.div>

          {/* Promise card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="mt-12 surface border border-gray-200 rounded-xl p-6 shadow-sm max-w-sm backdrop-blur-sm"
          >
            <p className="text-sm text-gray-600">
              Built to support the next generation of African exporters
              entering global food supply chains.
            </p>
          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 gap-6"
        >

          <Pillar
            icon={<Globe size={22} />}
            title="Global Buyer Access"
            desc="Connect with verified importers, distributors, and procurement teams across international markets."
          />

          <Pillar
            icon={<GraduationCap size={22} />}
            title="Export Readiness"
            desc="Improve compliance, documentation, and certification readiness to meet global standards."
          />

          <Pillar
            icon={<Handshake size={22} />}
            title="Trade Partnerships"
            desc="Establish long-term relationships with international buyers seeking trusted suppliers."
          />

          <Pillar
            icon={<TrendingUp size={22} />}
            title="Export Growth"
            desc="Expand beyond regional markets and build sustainable international trade opportunities."
          />

        </motion.div>

      </motion.div>
    </section>
  )
}

const Pillar = ({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white border border-gray-200 rounded-xl p-6 overflow-hidden"
    >

      {/* animated gradient border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/20 via-transparent to-[#0F233F]/10" />

      <div className="relative">

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#0F233F] mb-4 transition"
        >
          {icon}
        </motion.div>

        <h3 className="text-[#0F233F] font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>

      </div>

    </motion.div>
  )
}
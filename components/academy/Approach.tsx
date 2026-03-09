"use client";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Globe } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
}

export const LearningApproach = () => {
  return (
    <section className="relative py-28 px-6 bg-[#F7F9FC] overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative"
      >

        {/* heading */}
        <motion.div variants={item} className="text-center mb-16">

          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Export Learning Path
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F233F]">
            From first export to global growth
          </h2>

        </motion.div>

        {/* steps */}
        <div className="relative grid md:grid-cols-3 gap-10">

          {/* connector line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-gray-200" />

          <StepCard
            number="01"
            icon={<BookOpen size={22} />}
            title="Learn the fundamentals"
            text="Understand export basics including documentation, logistics, compliance, and global market structures."
          />

          <StepCard
            number="02"
            icon={<ShieldCheck size={22} />}
            title="Build export readiness"
            text="Participate in workshops, webinars, and practical training to prepare your business for international trade."
          />

          <StepCard
            number="03"
            icon={<Globe size={22} />}
            title="Enter global markets"
            text="Use market intelligence and export strategies to expand into international markets."
          />

        </div>

      </motion.div>

    </section>
  )
}

const StepCard = ({
  number,
  icon,
  title,
  text
}: {
  number: string
  icon: React.ReactNode
  title: string
  text: string
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
    >

      {/* number badge */}
      <div className="absolute -top-5 left-8 bg-white border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold text-[#0F233F] shadow-sm">
        {number}
      </div>

      {/* icon */}
      <div className="w-11 h-11 rounded-lg bg-[#F3F6FB] flex items-center justify-center text-[#0F233F] mb-6 group-hover:scale-105 transition">
        {icon}
      </div>

      <h3 className="font-semibold text-[#0F233F] mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </motion.div>
  )
}
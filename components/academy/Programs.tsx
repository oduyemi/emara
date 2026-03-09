"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Video,
  Presentation,
  BookOpen,
  Globe,
  Mic,
  Map
} from "lucide-react";


const programs = [
  {
    title: "Webinars",
    desc: "Expert-led sessions covering export compliance, logistics, and market opportunities.",
    icon: <Video size={22}/>,
    link: "/suppliers/academy/webinars"
  },
  {
    title: "Workshops",
    desc: "Interactive learning programs designed to build export capabilities.",
    icon: <Presentation size={22}/>,
    link: "/suppliers/academy/workshops"
  },
  {
    title: "Export Essentials Online",
    desc: "Structured courses guiding exporters from foundational knowledge to advanced trade strategies.",
    icon: <BookOpen size={22}/>,
    link: "/suppliers/academy/export-essentials"
  },
  {
    title: "Market & Country Profiles",
    desc: "Explore market intelligence and country-specific export insights.",
    icon: <Globe size={22}/>,
    link: "/suppliers/academy/market-country-profile"
  },
  {
    title: "Foodcast",
    desc: "Industry conversations and interviews with exporters and trade experts.",
    icon: <Mic size={22}/>,
    link: "/suppliers/academy/foodcast"
  },
  {
    title: "Export Roadmap",
    desc: "A step-by-step framework to prepare, launch, and scale your export journey.",
    icon: <Map size={22}/>,
    link: "/suppliers/academy/roadmap"
  }
]

export const AcademyPrograms = () => {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {programs.map((p,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0,y:25}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:i*0.1}}
            viewport={{once:true}}
          >

            <Link
              href={p.link}
              className="group block border border-gray-200 rounded-2xl p-8 bg-[#F9FBFD] hover:shadow-md transition"
            >

              <div className="w-11 h-11 rounded-lg bg-white border flex items-center justify-center mb-5 text-[#0F233F]">
                {p.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0F233F] mb-2">
                {p.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {p.desc}
              </p>

              <span className="text-sm text-accent font-medium group-hover:underline">
                Explore →
              </span>

            </Link>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
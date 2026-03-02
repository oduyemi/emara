"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return <span>{count}</span>
}

export const DirectoryHero = () => {
  const stats = [
    { value: 214, label: "Verified Suppliers" },
    { value: 120, label: "Gold Members" },
    { value: 25, label: "Gold Elite" },
    { value: 18, label: "Product Categories" },
  ]

  return (
    <section className="relative w-full min-h-[65vh] lg:min-h-[75vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/directoryHero.jpg"
          alt="African suppliers overview"
          fill
          priority
          className="object-cover scale-110 brightness-[0.45] contrast-125"
        />
      </div>

      {/* Strong Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/95 via-[#050B14]/95 to-black/98" />

      {/* Subtle Accent Motion Layer */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(52,138,167,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,87,10,0.18),transparent_40%)] bg-[length:200%_200%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl"
        >
          Explore Africa’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7C99] to-[#C24E00]">
            Verified Agro-Exporters
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-white/75 text-lg md:text-xl max-w-2xl"
        >
          Discover trusted suppliers, explore premium product categories, and connect with Africa’s leading agro-export businesses.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5"
            >
              <div className="rounded-2xl backdrop-blur-2xl bg-black/60 px-6 py-6 text-center transition-all duration-300 border border-white/10 group-hover:border-[#2E7C99]/40 group-hover:shadow-xl group-hover:shadow-[#2E7C99]/20">
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp value={stat.value} />+
                </div>
                <div className="mt-2 text-sm text-white/60 tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 max-w-3xl"
        >
          <form className="relative">
            <div className="flex items-center bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden focus-within:ring-2 focus-within:ring-[#2E7C99]/40 transition-all duration-300">
              
              <Search className="ml-5 text-white/40" size={20} />

              <input
                type="text"
                placeholder="Search suppliers, products or locations..."
                className="flex-1 px-4 py-4 bg-transparent text-white placeholder-white/40 focus:outline-none text-base"
              />

              <button
                type="submit"
                className="m-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2E7C99] to-[#C24E00] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
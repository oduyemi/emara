"use client"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link"

export const HelpSidebarCTA = () => {
  const t = useTranslations("help")

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-3 
        px-6 py-3 rounded-full
        backdrop-blur-xl
        bg-secondary text-secondary
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        transition-all duration-300"
      >

        {/* Soft outer glow */}
        <span className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <MessageCircle
          size={18}
          className="relative z-10 text-accent"
        />

        {/* Text */}
        <span className="relative z-10 text-sm font-medium tracking-tight">
          <Link href="/suppliers/support">
          {t("cta")}
          </Link>
        </span>

      </motion.button>
    </div>
  )
}
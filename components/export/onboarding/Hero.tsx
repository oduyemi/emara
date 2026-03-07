"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl";
import Link from "next/link";

export const SupplierOnboardingHero = () => {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden py-24 lg:py-28 text-white">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/onboard1.jpg"
          alt="Export logistics"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071423]/95 via-[#0E2A47]/90 to-[#0E2A47]/70" /> */}

      {/* Accent glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 text-accent 
              text-xs tracking-widest uppercase text-gray-200"
            >
              {t("supplierHero.eyebrow")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl text-secondary font-semibold leading-[1.1] mb-6"
            >
              {t("supplierHero.titlePrefix")}{" "}
              <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                {t("supplierHero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-300 max-w-xl mb-10"
            >
              {t("supplierHero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
                <Link href="/suppliers/verify">
              <button className="btn-primary px-8 py-3.5 rounded-2xl text-sm font-medium shadow-xl hover:scale-[1.03] transition-all duration-300">
                {t("supplierHero.primaryCta")}
              </button>
              </Link>

              <button className="px-8 py-3.5 rounded-2xl text-sm font-medium border border-white/30 hover:bg-white/10 transition-all duration-300">
                {t("supplierHero.secondaryCta")}
              </button>
            </motion.div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <TrustItem text={t("supplierHero.trust.completion")} />
              <TrustItem text={t("supplierHero.trust.security")} />
              <TrustItem text={t("supplierHero.trust.compliance")} />
            </div>

          </div>

          {/* RIGHT DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="backdrop-blur-2xl bg-white/5 border border-white/15 
            rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] p-8">

              <div className="space-y-6">
                <DashboardRow
                  label={t("supplierHero.dashboard.company")}
                  status={t("supplierHero.dashboard.complete")}
                />
                <DashboardRow
                  label={t("supplierHero.dashboard.license")}
                  status={t("supplierHero.dashboard.verified")}
                />
                <DashboardRow
                  label={t("supplierHero.dashboard.documents")}
                  status={t("supplierHero.dashboard.pending")}
                />
              </div>
            </div>

            <div className="absolute -bottom-10 left-10 w-[80%] h-24 bg-accent/20 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>

      {/* Scroll transition fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 
      bg-gradient-to-b from-transparent to-[var(--color-bg)]" />

    </section>
  )
}

const TrustItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 size={18} className="text-accent" />
    <span>{text}</span>
  </div>
)

const DashboardRow = ({
  label,
  status,
}: {
  label: string
  status: string
}) => (
  <div className="flex items-center justify-between border border-white/10 rounded-xl px-4 py-3 bg-white/5">
    <span className="text-sm text-gray-200">{label}</span>
    <span className="text-xs text-accent font-medium">{status}</span>
  </div>
)
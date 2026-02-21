"use client"

import { FC, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export const GapAnalysisInteractive: FC = () => {
  const t = useTranslations("GapAnalysisInteractive")
  const locale = useLocale()
  const isRTL = ["ar"].includes(locale)

  const [industry, setIndustry] = useState("")
  const [market, setMarket] = useState("")
  const [score, setScore] = useState<number | null>(null)
  const [missingCerts, setMissingCerts] = useState<string[]>([])
  const [risk, setRisk] = useState<"low" | "medium" | "high" | null>(null)
  const [showResults, setShowResults] = useState(false)

  const industries = ["Agriculture", "Textiles", "Minerals", "Manufacturing"]
  const markets = ["Nigeria", "Kenya", "Ghana", "South Africa", "Egypt"]

  const analyze = () => {
    // Mock dynamic demo logic
    const randomScore = Math.floor(Math.random() * 100) + 1
    setScore(randomScore)
    setMissingCerts(["ISO 9001", "Export License"].slice(0, Math.floor(Math.random() * 2)))
    setRisk(randomScore > 70 ? "low" : randomScore > 40 ? "medium" : "high")
    setShowResults(true)
  }

  const riskColor = risk === "low" ? "text-green-500" : risk === "medium" ? "text-amber-500" : "text-red-500"
  const riskIcon = risk === "low" ? <CheckCircle /> : risk === "medium" ? <AlertTriangle /> : <XCircle />

  return (
    <section className="relative w-full py-28 bg-surface" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Left: Interactive Inputs */}
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">{t("section_label")}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">{t("section_title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("section_description")}</p>

          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="mt-6 p-4 rounded-xl border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 outline-none transition"
          >
            <option value="">{t("select_industry")}</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>

          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="mt-4 p-4 rounded-xl border border-gray-300 focus:border-accent focus:ring focus:ring-accent/20 outline-none transition"
          >
            <option value="">{t("select_market")}</option>
            {markets.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <button onClick={analyze} className="mt-6 btn-primary px-6 py-3 rounded-xl w-fit">{t("analyze_button")}</button>
        </div>

        {/* Right: Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex flex-col gap-6"
            >
              {/* Compliance Score */}
              <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg flex flex-col items-center">
                <span className="text-gray-600">{t("compliance_score")}</span>
                <div className="text-4xl md:text-5xl font-bold mt-2 text-accent">{score}%</div>
              </div>

              {/* Missing Certifications */}
              <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg">
                <span className="text-gray-600 font-semibold">{t("missing_certifications")}</span>
                {missingCerts.length === 0 ? (
                  <p className="mt-2 text-green-500">All Certifications Met</p>
                ) : (
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {missingCerts.map((cert) => <li key={cert}>{cert}</li>)}
                  </ul>
                )}
              </div>

              {/* Risk Exposure */}
              <div className={`p-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-lg flex items-center gap-3 ${riskColor}`}>
                {riskIcon}
                <span className="font-semibold">{risk === "low" ? t("low_risk") : risk === "medium" ? t("medium_risk") : t("high_risk")}</span>
              </div>

              <button className="mt-4 btn-accent w-fit px-6 py-3 rounded-xl">{t("cta_full_report")}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"

type Filters = {
  categories: string[]
  certifications: string[]
  tier: string[]
  location: string
}

export const DirectoryFilters = ({
  totalResults = 248,
  onFilterChange,
}: {
  totalResults?: number
  onFilterChange?: (filters: Filters) => void
}) => {
  const t = useTranslations("DirectoryFilters")

  const [filters, setFilters] = useState<Filters>({
    categories: [],
    certifications: [],
    tier: [],
    location: "",
  })

  const [openSections, setOpenSections] = useState<string[]>([
    "commodities",
  ])

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const toggleArrayValue = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const arr = prev[key] as string[]
      return {
        ...prev,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      }
    })
  }

  useEffect(() => {
    onFilterChange?.(filters)
  }, [filters])

  /* Keys instead of hardcoded arrays */
  const categories = ["nuts", "oils", "grains", "specialty"]
  const certifications = ["iso", "haccp", "organic", "globalgap"]
  const tiers = ["bronze", "silver", "gold", "goldElite"]

  const regions = [
    "westAfrica",
    "eastAfrica",
    "southernAfrica",
    "northAfrica",
    "centralAfrica",
  ]

  const countriesByRegion: Record<string, string[]> = {
    westAfrica: [
      "nigeria","ghana","senegal","ivoryCoast","mali",
      "burkinaFaso","togo","benin","sierraLeone",
      "liberia","gambia","niger","guinea"
    ],
    eastAfrica: [
      "kenya","ethiopia","tanzania","uganda",
      "rwanda","burundi","somalia","southSudan"
    ],
    southernAfrica: [
      "southAfrica","zambia","zimbabwe","botswana",
      "namibia","mozambique","angola","lesotho",
      "eswatini","malawi"
    ],
    northAfrica: [
      "egypt","morocco","algeria","tunisia","libya"
    ],
    centralAfrica: [
      "cameroon","chad","car","equatorialGuinea",
      "gabon","republicOfCongo","drCongo"
    ],
  }

  /* Premium Chip */
  const Chip = ({
    label,
    active,
    onClick,
  }: {
    label: string
    active: boolean
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
        ${
          active
            ? "bg-[#0F233F] text-white border-[#0F233F] shadow"
            : "bg-white text-[#0F233F] border-gray-300 hover:border-[#0F233F]"
        }`}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check size={14} />
          </motion.span>
        )}
      </AnimatePresence>
      {label}
    </button>
  )

  const Section = ({
    id,
    children,
  }: {
    id: string
    children: React.ReactNode
  }) => {
    const isOpen = openSections.includes(id)

    return (
      <div className="pb-8 border-b border-gray-200">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between mb-6"
        >
          <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
            {t(`sections.${id}`)}
          </h3>
          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-3">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section className="bg-[#F8FAFC] py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-[#0F233F]">
              {t("header.title")}
            </h2>
            <p className="mt-3 text-gray-500">
              {t("header.description")}
            </p>
          </div>

          <div className="bg-[#0F233F] text-white px-8 py-5 rounded-2xl shadow-sm text-center min-w-[220px]">
            <div className="text-xs uppercase tracking-widest text-white/60">
              {t("results.label")}
            </div>
            <div className="text-3xl font-semibold mt-1 text-accent">
              {totalResults}
            </div>
            <div className="text-sm text-secondary">
              {t("results.suffix")}
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-12">

            <Section id="commodities">
              {categories.map((key) => (
                <Chip
                  key={key}
                  label={t(`categories.${key}`)}
                  active={filters.categories.includes(key)}
                  onClick={() => toggleArrayValue("categories", key)}
                />
              ))}
            </Section>

            <Section id="certifications">
              {certifications.map((key) => (
                <Chip
                  key={key}
                  label={t(`certificationsList.${key}`)}
                  active={filters.certifications.includes(key)}
                  onClick={() =>
                    toggleArrayValue("certifications", key)
                  }
                />
              ))}
            </Section>

            <Section id="tier">
              {tiers.map((key) => (
                <Chip
                  key={key}
                  label={t(`tiers.${key}`)}
                  active={filters.tier.includes(key)}
                  onClick={() => toggleArrayValue("tier", key)}
                />
              ))}
            </Section>

          </div>

          {/* RIGHT PANEL */}
          <div className="sticky top-28 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">

            <label className="text-xs uppercase tracking-widest text-gray-500">
              {t("location.label")}
            </label>

            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-xl text-[#0F233F] focus:outline-none focus:ring-2 focus:ring-[#0F233F]"
            >
              <option value="">
                {t("location.allAfrica")}
              </option>

              {regions.map((regionKey) => (
                <optgroup
                  key={regionKey}
                  label={t(`location.regions.${regionKey}`)}
                >
                  {countriesByRegion[regionKey].map((countryKey) => (
                    <option key={countryKey} value={countryKey}>
                      {t(`location.countries.${countryKey}`)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <div className="flex gap-4 mt-10">
              <button
                onClick={() =>
                  setFilters({
                    categories: [],
                    certifications: [],
                    tier: [],
                    location: "",
                  })
                }
                className="flex-1 border border-gray-300 text-[#0F233F] py-3 rounded-xl hover:bg-gray-50 transition"
              >
                {t("actions.reset")}
              </button>

              <button
                onClick={() => onFilterChange?.(filters)}
                className="flex-1 bg-red-900 text-white py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
              >
                {t("actions.apply")}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
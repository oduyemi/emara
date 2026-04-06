"use client";
import { useTranslations } from "next-intl";
import { marketCountries, regions } from "@/data/marketcountries";

type Props = {
  search: string
  setSearch: (v: string) => void
  country: string
  setCountry: (v: string) => void
  region: string
  setRegion: (v: string) => void
}

export default function CountrySearchFilters({
  search,
  setSearch,
  country,
  setCountry,
  region,
  setRegion,
}: Props) {
  const t = useTranslations("marketCountryProfiles")

  return (
    <>
      {/* Header */}
      <div className="mt-8 mb-4">
          <p className="pl-24 text-xs uppercase tracking-[0.25em] text-accent mb-3">
            {t("countryProfiles")}
          </p>

          {/* <h2 className="pl-24 text-2xl md:text-3xl font-semibold text-secondary">
            {t("exploreCountries")}
          </h2> */}
        </div>
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {/* Search */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCountry("") 
            }}
            placeholder={t("filters.search")}
            className="border border-gray-200 rounded-lg px-4 py-3"
          />

          {/* Country */}
          <select
            value={country}
            onChange={(e) => {
              const value = e.target.value
              setCountry(value)

              // override others
              if (value) {
                setSearch("")
                setRegion("")
              }
            }}
            className="border border-gray-200 rounded-lg px-4 py-3"
          >
            <option value="">{t("filters.country")}</option>
            {marketCountries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Region */}
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value)
              setCountry("") // reset country when selecting region
            }}
            className="border border-gray-200 rounded-lg px-4 py-3"
          >
            <option value="">{t("filters.region")}</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

        </div>
      </section>
    </>
  )
}
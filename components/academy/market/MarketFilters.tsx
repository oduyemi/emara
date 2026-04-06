"use client";
import { useTranslations } from "next-intl";
import { markets } from "@/data/markets";
import { motion } from "framer-motion";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  market: string;
  setMarket: (v: string) => void;
};

export default function MarketSearchFilters({
  search,
  setSearch,
  market,
  setMarket,
}: Props) {
  const t = useTranslations("marketCountryProfiles");

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            {t("marketProfiles")}
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            {t("exploreMarkets")}
          </h2>
        </div>

        {/* Search (Glass style) */}
        <div className="relative mb-8">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setMarket("");
            }}
            placeholder={t("filters.searchMarket")}
            className="w-full rounded-2xl px-5 py-4 bg-white/60 backdrop-blur border border-white/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted hover:text-secondary"
            >
              ✕
            </button>
          )}
        </div>

        {/* 🌈 Market Pills */}
        <div className="flex flex-wrap gap-3">

          {/* All */}
          <button
            onClick={() => setMarket("")}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              market === ""
                ? "bg-primary text-white border-primary"
                : "bg-white/60 backdrop-blur border-gray-200 hover:bg-gray-100"
            }`}
          >
            All Markets
          </button>

          {markets.map((m) => {
            const isActive = market === m.id;

            return (
              <motion.button
                key={m.id}
                onClick={() => {
                  setMarket(m.id);
                  setSearch("");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition border ${
                  isActive
                    ? `text-white border-transparent bg-gradient-to-r ${m.color} shadow-lg`
                    : "bg-white/60 backdrop-blur border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span>{m.icon}</span>
                {m.name}
              </motion.button>
            );
          })}
        </div>

        {/* Active Filter Indicator */}
        {(market || search) && (
          <div className="mt-6 flex items-center gap-3 text-sm text-muted">
            <span>Filtering by:</span>

            {market && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                {markets.find((m) => m.id === market)?.name}
              </span>
            )}

            {search && (
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                "{search}"
              </span>
            )}

            <button
              onClick={() => {
                setMarket("");
                setSearch("");
              }}
              className="ml-2 underline hover:text-secondary"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
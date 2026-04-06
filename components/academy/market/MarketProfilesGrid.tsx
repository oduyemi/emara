"use client";
import { useMemo, useState, useEffect } from "react";
import MarketCard from "./MarketCard";
import { useTranslations } from "next-intl";
import { markets } from "@/data/markets";

type Props = {
  search: string;
  market: string;
};

const ITEMS_PER_PAGE = 6;

export default function MarketProfilesGrid({
  search,
  market,
}: Props) {
  const t = useTranslations("marketCountryProfiles");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (market) {
      return markets.filter((m) => m.id === market);
    }
  
    return markets.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, market]);

  useEffect(() => {
    setPage(1);
  }, [search, market]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section className="surface py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        {paginated.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((m) => (
                <MarketCard
                    key={m.id}
                    name={m.name}
                    desc={t(`markets.${m.id}.desc`)}
                    color={m.color}
                    icon={m.icon}
                />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted">
            {t("nomarket")}
          </div>
        )}

        {/* PAGINATION (same as yours) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16 flex-wrap">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40"
            >
              {t("previous")}
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              const isActive = pageNumber === page;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    isActive
                      ? "bg-primary text-white"
                      : "border hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40"
            >
              {t("next")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
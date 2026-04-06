"use client";
import { useState } from "react";
import MarketSearchFilters from "./MarketFilters";
import MarketProfilesGrid from "./MarketProfilesGrid";

export default function MarketProfiles() {
  const [search, setSearch] = useState("");
  const [market, setMarket] = useState("");

  return (
    <>
      <MarketSearchFilters
        search={search}
        setSearch={setSearch}
        market={market}
        setMarket={setMarket}
      />

      <MarketProfilesGrid
        search={search}
        market={market}
      />
    </>
  );
}
"use client";
import { useState } from "react";
import CountrySearchFilters from "./SearchFilters";
import CountryProfilesGrid from "./ProfilesGrid";

export default function CountryProfiles() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState("")
  const [region, setRegion] = useState("")

  return (
    <>
      <CountrySearchFilters
        search={search}
        setSearch={setSearch}
        country={country}
        setCountry={setCountry}
        region={region}
        setRegion={setRegion}
      />

      <CountryProfilesGrid
        search={search}
        country={country}
        region={region}
      />
    </>
  )
}
import { DirectoryFilters } from "@/components/export/directory/Filters";
import { DirectoryHero } from "@/components/export/directory/Hero";
import { SupplierCard } from "@/components/export/directory/SupplierCard";
import { SupplierGrid } from "@/components/export/directory/SupplierGrid";
import { TierUpCTA } from "@/components/export/directory/TierUpCTA";



export default function Verified () {
  return (
    <>
      <DirectoryHero />
      <DirectoryFilters />
      <SupplierGrid />
      <TierUpCTA />
    </>
  )
}
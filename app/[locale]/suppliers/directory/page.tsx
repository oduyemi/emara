import { DirectoryFilters } from "@/components/export/directory/Filters";
import { DirectoryHero } from "@/components/export/directory/Hero";
import suppliers from "@/data/suppliers.json";
import { SupplierGrid } from "@/components/export/directory/SupplierGrid";
import { TierUpCTA } from "@/components/export/directory/TierUpCTA";





export default function Directory() {
  return (
    <div>
      <DirectoryHero />
      <DirectoryFilters />
      <SupplierGrid suppliers={suppliers ?? []} />
      <TierUpCTA />
    </div>
  );
}

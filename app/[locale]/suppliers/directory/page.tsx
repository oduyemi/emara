import { DirectoryFilters } from "@/components/export/directory/Filters";
import { DirectoryHero } from "@/components/export/directory/Hero";
import rawSuppliers from "@/data/suppliers.json";
import { Supplier } from "@/components/export/directory/types/supplier"
import { SupplierGrid } from "@/components/export/directory/SupplierGrid";
import { TierUpCTA } from "@/components/export/directory/TierUpCTA";


const suppliers = rawSuppliers as Supplier[];




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

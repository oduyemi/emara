import { SupplierCard } from "./SupplierCard"

export type Supplier = {
    id: string
    name: string
    logo: string
    media: string
    tier: "bronze" | "silver" | "gold" | "goldElite"
    emaraScore: number
    certifications: ("iso9001" | "iso22000" | "haccp" | "organic" | "globalgap" | "fairTrade")[]
    capacity: string
    topProducts: string[]
  }
  
  export const SupplierGrid = ({
    suppliers = [],
  }: {
    suppliers?: Supplier[]
  }) => {
    if (!suppliers.length) {
      return (
        <div className="bg-white py-16 text-center text-gray-500">
          No suppliers found.
        </div>
      )
    }
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        </div>
      </section>
    )
  }
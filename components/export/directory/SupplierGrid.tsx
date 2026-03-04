import { SupplierCard } from "./SupplierCard";
import { Supplier } from "@/types/supplier";


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
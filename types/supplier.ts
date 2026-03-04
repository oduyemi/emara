export type Supplier = {
    id: string
    name: string
    logo: string
    media: string
    tier: "bronze" | "silver" | "gold" | "goldElite"
    emaraScore: number
    certifications: (
      | "iso9001"
      | "iso22000"
      | "haccp"
      | "organic"
      | "globalgap"
      | "fairTrade"
    )[]
    capacity: string
    topProducts: string[]
  }
import MarketCTA from "@/components/academy/market/CTA";
import FeaturedMarketInsights from "@/components/academy/market/Featured";
import MarketProfilesHero from "@/components/academy/market/Hero";
import CountryProfilesGrid from "@/components/academy/market/ProfilesGrid";
import MarketSearchFilters from "@/components/academy/market/SearchFilters";



export default function MarketCountry() {
  return (
    <>
      <MarketProfilesHero />
      <MarketSearchFilters />
      <CountryProfilesGrid />
      <FeaturedMarketInsights />
      <MarketCTA />
    </>
  )
}
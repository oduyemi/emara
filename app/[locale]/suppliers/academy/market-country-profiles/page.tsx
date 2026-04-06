import CountryProfiles from "@/components/academy/market/CountryProfiles";
import MarketCTA from "@/components/academy/market/CTA";
import FeaturedMarketInsights from "@/components/academy/market/Featured";
import MarketProfilesHero from "@/components/academy/market/Hero";
import MarketProfiles from "@/components/academy/market/MarketProfiles";



export default function MarketCountry() {
  return (
    <>
      <MarketProfilesHero />
      <CountryProfiles />
      <FeaturedMarketInsights />
      <div id="markets">
        <MarketProfiles />
      </div>
      <MarketCTA />
    </>
  )
}
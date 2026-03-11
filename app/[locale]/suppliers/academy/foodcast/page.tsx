import FoodCastAbout from "@/components/academy/foodcast/About";
import EpisodesGrid from "@/components/academy/foodcast/Episodes";
import FeaturedEpisode from "@/components/academy/foodcast/Featured";
import FoodCastHero from "@/components/academy/foodcast/Hero";
import SubscribeSection from "@/components/academy/foodcast/Subscription";
import CountryProfilesGrid from "@/components/academy/market/ProfilesGrid";




export default function FoodCast() {
  return (
    <>
      <FoodCastHero />
      <FoodCastAbout />
      <CountryProfilesGrid />
      <FeaturedEpisode />
      <EpisodesGrid />
      <SubscribeSection />
    </>
  )
}
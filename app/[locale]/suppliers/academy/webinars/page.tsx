import WebinarHero from "@/components/academy/webinars/Hero"
import FeaturedWebinar from "@/components/academy/webinars/Featured"
import UpcomingWebinars from "@/components/academy/webinars/Upcoming"
import WebinarLibrary from "@/components/academy/webinars/Library"
import WebinarCTA from "@/components/academy/webinars/CTA"

export default function Webinars() {
  return (
    <>
      <WebinarHero />
      <FeaturedWebinar />
      <div id="webinars">
        <UpcomingWebinars />
      </div>
      <WebinarLibrary />
      <div id="upcomingwebinars"></div>      
      <WebinarCTA />
    </>
  )
}
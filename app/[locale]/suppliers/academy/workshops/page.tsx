import WorkshopBenefits from "@/components/academy/workshops/Benefits";
import WorkshopCTA from "@/components/academy/workshops/CTA";
import WorkshopHero from "@/components/academy/workshops/Hero";
import WorkshopHighlights from "@/components/academy/workshops/Highlights";
import WorkshopTracks from "@/components/academy/workshops/Tracks";
import UpcomingWorkshops from "@/components/academy/workshops/Upcoming";


export default function Workshops() {
  return (
    <>
      <WorkshopHero />
      <WorkshopHighlights />
      <UpcomingWorkshops />
      <WorkshopTracks />
      <WorkshopBenefits />
      <WorkshopCTA />
    </>
  )
}
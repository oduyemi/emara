import RoadmapCTA from "@/components/academy/roadmap/CTA";
import AdvancedRoadmap from "@/components/academy/roadmap/Experienced/Advanced";
import ExportRoadmapHero from "@/components/academy/roadmap/Hero";




export default function ExporterRoadmap() {
  return (
    <>
      <ExportRoadmapHero />
      <AdvancedRoadmap />
      <RoadmapCTA />
    </>
  )
}
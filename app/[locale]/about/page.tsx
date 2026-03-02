import AboutHero from "@/components/about/Hero";
import AboutIntro from "@/components/about/Intro";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import { FAQ } from "@/components/export/FAQ";
import { ExportCTA } from "@/components/export/CTA";
import TrustMetrics from "@/components/about/Metrics";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <TrustMetrics />
      <CoreValues />
      <FAQ />
      <ExportCTA />
    </main>
  );
}
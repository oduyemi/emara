import AboutHero from "@/components/about/Hero";
import AboutIntro from "@/components/about/Intro";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <CoreValues />
    </main>
  );
}
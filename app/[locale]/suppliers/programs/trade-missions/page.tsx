import NewExporters from "@/components/export/NewExporters";
import { TradeMissionBenefits } from "@/components/programs/tradeMissions/Benefits";
import { TradeMissionCTA } from "@/components/programs/tradeMissions/CTA";
import { FeaturedTradeMission } from "@/components/programs/tradeMissions/Featured";
import { TradeMissionsHero } from "@/components/programs/tradeMissions/Hero";
import { TradeMissionsIntro } from "@/components/programs/tradeMissions/Intro";
import { TradeMissionProcess } from "@/components/programs/tradeMissions/Process";
import { UpcomingTradeMissions } from "@/components/programs/tradeMissions/Upcoming";



export default function Missions() {
  return (
    <main className="bg-white">
        <TradeMissionsHero />
        <TradeMissionsIntro />
        <TradeMissionProcess />
        <TradeMissionBenefits />
        <FeaturedTradeMission />
        <NewExporters />
        <UpcomingTradeMissions />
        <TradeMissionCTA />
    </main>
  );
}
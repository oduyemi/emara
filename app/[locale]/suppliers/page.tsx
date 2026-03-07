import { ExportCTA } from "@/components/export/CTA";
import { FAQ } from "@/components/export/FAQ";
import { FeaturedEvent } from "@/components/export/FeaturedEvent";
import ExportHero from "@/components/export/Hero";
import { SuppliersIntro } from "@/components/export/Intro";
import { SuppliersPathways } from "@/components/export/Pathways";
import { UpcomingEvents } from "@/components/export/UpcomingEvents";





export default function Exporters() {
  return (
    <div>
      <ExportHero />
      <SuppliersIntro />
      <SuppliersPathways />
      <FeaturedEvent />
      <UpcomingEvents />
      <FAQ />
      <ExportCTA />
    </div>
  );
}

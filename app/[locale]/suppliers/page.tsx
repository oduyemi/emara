import { ExportCTA } from "@/components/export/CTA";
import { ExportJourney } from "@/components/export/ExportJourney";
import { FAQ } from "@/components/export/FAQ";
import { FeaturedEvent } from "@/components/export/FeaturedEvent";
import ExportHero from "@/components/export/Hero";
import { SuppliersIntro } from "@/components/export/Intro";
import NewExporters from "@/components/export/NewExporters";
import { SuppliersPathways } from "@/components/export/Pathways";
import { SuccessStories } from "@/components/export/SuccessStories";
import { UpcomingEvents } from "@/components/export/UpcomingEvents";
import { SupplierHeader } from "@/components/navigation/suppliers/Header";





export default function Exporters() {
  return (
    <div>
      <ExportHero />
      <SuppliersPathways />
      <FAQ />
      <SuppliersIntro />
      {/* <SuccessStories /> */}
      {/* <FeaturedEvent /> */}
      {/* <ExportJourney /> */}
      {/* <UpcomingEvents /> */}
      
      {/* <NewExporters /> */}
    </div>
  );
}

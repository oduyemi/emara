import AuthorityStrip from "@/components/export/AuthorityStrip";
import { ExportCTA } from "@/components/export/CTA";
import { ExporterIndustries } from "@/components/export/ExporterIndustries";
import { FAQ } from "@/components/export/FAQ";
import ExportHero from "@/components/export/Hero";
import HowItWorks from "@/components/export/HowItWorks";
import Outcome from "@/components/export/Outcome";
import { TheEmaraSystem } from "@/components/export/TheEmaraSystem";
import { TheProblem } from "@/components/export/TheProblem";
import { TrustGap } from "@/components/export/TrustGap";




export default function Exporters() {
  return (
    <div>
      <ExportHero />
      <TheProblem />
      <TheEmaraSystem />
      <HowItWorks />
      <TrustGap />
      <Outcome />
      <ExporterIndustries />
      <FAQ />
      <AuthorityStrip />
      <ExportCTA />
    </div>
  );
}

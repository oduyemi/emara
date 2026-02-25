import AuthorityStrip from "@/components/home/AuthorityStrip";
import { ExporterIndustries } from "@/components/home/ExporterIndustries";
import { FAQ } from "@/components/home/FAQ";
import InstantGapAnalysis from "@/components/home/gapanalysis/InstantGapAnalysis";
import { Hero } from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Outcome from "@/components/home/Outcome";
import { TheEmaraSystem } from "@/components/home/TheEmaraSystem";
import { TheProblem } from "@/components/home/TheProblem";



export default function Home() {
  return (
    <div>
      <Hero />
      <TheProblem   />
      <TheEmaraSystem />
      {/* <InstantGapAnalysis /> */}
      <ExporterIndustries />
      <AuthorityStrip />
      <HowItWorks />
      <Outcome />
      <FAQ />
    </div>
  );
}

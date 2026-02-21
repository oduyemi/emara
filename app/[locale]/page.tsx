import { GapAnalysisInteractive } from "@/components/home/GapAnalysisDemo";
import { Hero } from "@/components/home/Hero";
import { TheEmaraSystem } from "@/components/home/TheEmaraSystem";
import { TheProblem } from "@/components/home/TheProblem";



export default function Home() {
  return (
    <div>
      <Hero />
      <TheProblem   />
      <TheEmaraSystem />
      <GapAnalysisInteractive />
    </div>
  );
}

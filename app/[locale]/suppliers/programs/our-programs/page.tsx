import NewExporters from "@/components/export/NewExporters";
import { ProgramsMap } from "@/components/export/programs/Map";
import { ProgramsApproach } from "@/components/programs/Approach";
import { ProgramsGrid } from "@/components/programs/Grid";
import { ProgramsHero } from "@/components/programs/Hero";
import { ProgramsIntro } from "@/components/programs/Intro";


export default function Programs() {
  return (
    <main className="bg-white">
        <ProgramsHero />
        <ProgramsIntro />
        <ProgramsGrid />
        <ProgramsApproach />
        <NewExporters />
        <ProgramsMap />
    </main>
  );
}
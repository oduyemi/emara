import NewExporters from "@/components/export/NewExporters";
import { ConsultationTrust } from "@/components/programs/consultation/Trust";
import { ShowcaseBenefits } from "@/components/programs/showcases/Benefits";
import { ShowcaseCTA } from "@/components/programs/showcases/CTA";
import { InternationalShowcasesHero } from "@/components/programs/showcases/Hero";
import { InternationalShowcasesIntro } from "@/components/programs/showcases/Intro";
import { ShowcaseProcess } from "@/components/programs/showcases/Process";



export default function Showcases() {
  return (
    <main className="bg-white">
        <InternationalShowcasesHero />
        <InternationalShowcasesIntro />
        <ShowcaseProcess />
        <ShowcaseBenefits />
        <ConsultationTrust />
        <NewExporters />
        <ShowcaseCTA />
    </main>
  );
}
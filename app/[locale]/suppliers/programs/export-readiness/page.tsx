import { ExportReadinessForm } from "@/components/export/exportReadiness/FormContainer";
import ReadinessAssessment from "@/components/export/programs/ExportReadinessAssessment/ExportReadinessAssessment";
import { ExportReadinessHero } from "@/components/export/programs/Hero";
import { ExportReadinessIntro } from "@/components/export/programs/Intro";


export default function AboutPage() {
  return (
    <main className="bg-white">
        <ExportReadinessHero />
        <ExportReadinessIntro />
        <div id="assessment">
          <ExportReadinessForm />
        </div>
    </main>
  );
}
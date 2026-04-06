import { ExportReadinessForm } from "@/components/export/exportReadiness/FormContainer";
import { ExportReadinessHero } from "@/components/export/programs/Hero";


export default function ExportReadinessPage() {
  return (
    <main className="bg-white">
        <ExportReadinessHero />
        <div id="assessment">
          <ExportReadinessForm />
        </div>
    </main>
  );
}
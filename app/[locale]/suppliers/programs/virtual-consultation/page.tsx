import NewExporters from "@/components/export/NewExporters";
import { ConsultationBenefits } from "@/components/programs/consultation/Benefits";
import { CalendlyBooking } from "@/components/programs/consultation/Booking";
import { ConsultationHero } from "@/components/programs/consultation/Hero";
import { ConsultationTopics } from "@/components/programs/consultation/Topics";
import { ConsultationTrust } from "@/components/programs/consultation/Trust";



export default function Consultations() {
  return (
    <main className="bg-white">
        <ConsultationHero />
        <ConsultationBenefits />
        <ConsultationTopics />
        <CalendlyBooking />
        <ConsultationTrust />
        <NewExporters />
    </main>
  );
}
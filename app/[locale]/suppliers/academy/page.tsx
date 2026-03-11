import { LearningApproach } from "@/components/academy/Approach";
// import { AcademyCTA } from "@/components/academy/CTA";
import { AcademyHero } from "@/components/academy/Hero";
import { AcademyPrograms } from "@/components/academy/Programs";

export default function Academy() {
  return (
    <main className="bg-white">
      <AcademyHero />
      <AcademyPrograms />
      <LearningApproach />
      {/* <AcademyCTA /> */}
    </main>
  );
}
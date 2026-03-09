import EssentialsCTA from "@/components/academy/essentials/CTA";
import { GuideNavigation } from "@/components/academy/essentials/GuideNavigation";
import { ExportGuideSections } from "@/components/academy/essentials/GuideSessions";
import EssentialsHero from "@/components/academy/essentials/Hero";
import KeyExporterInsights from "@/components/academy/essentials/Insight";
import ExpertPerspective from "@/components/academy/essentials/Perspective";


export default function Webinars() {
  return (
    <>
      <EssentialsHero />
      <GuideNavigation />
      <ExportGuideSections />
      <KeyExporterInsights />
      <ExpertPerspective />
      <EssentialsCTA />
    </>
  )
}
"use client";
import { useState } from "react";
import { OnboardingLayout } from "@/components/export/onboarding/layout";
import { SupplierOnboardingHero } from "@/components/export/onboarding/Hero";
import { StepOneCompanyInfo } from "@/components/export/onboarding/StepOneCompanyInfo";
import { StepTwoCompliance } from "@/components/export/onboarding/StepTwoCompliance";
import { StepThreeOperations } from "@/components/export/onboarding/StepThreeOperations";
import { StepFourMarketReadiness } from "@/components/export/onboarding/StepFourMarketReadiness";
import { StepFiveFinalReview } from "@/components/export/onboarding/StepFiveFinalReview";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  return (
    <>
      <SupplierOnboardingHero />

      <OnboardingLayout
        currentStep={step}
        totalSteps={5}
      >
        {step === 1 && (
          <StepOneCompanyInfo onNext={() => setStep(2)} />
        )}

        {step === 2 && (
          <StepTwoCompliance
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <StepThreeOperations
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        )}

        {step === 4 && (
          <StepFourMarketReadiness
            onBack={() => setStep(3)}
            onNext={() => setStep(5)}
          />
        )}

        {step === 5 && (
          <StepFiveFinalReview
            onBack={() => setStep(4)}
            onSubmit={() => router.push("/suppliers/dashboard")}
          />
        )}
      </OnboardingLayout>
    </>
  )
}
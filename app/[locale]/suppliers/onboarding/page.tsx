"use client";
import { useState } from "react";
import { OnboardingLayout } from "@/components/export/onboarding/layout";
import { SupplierOnboardingHero } from "@/components/export/onboarding/Hero";
import { StepOneCompanyInfo } from "@/components/export/onboarding/StepOneCompanyInfo";
import { StepTwoCompliance } from "@/components/export/onboarding/StepTwoCompliance";
import { StepThreeOperations } from "@/components/export/onboarding/StepThreeOperations";
import { StepFourMarketReadiness } from "@/components/export/onboarding/StepFourMarketReadiness";
import { StepSixFinalReview } from "@/components/export/onboarding/StepSixFinalReview";
import { useRouter } from "next/navigation";
import { StepFiveSubscriptionPlan } from "@/components/export/onboarding/StepFiveSubscriptionPlan";
import { SupplierTopHeader } from "@/components/navigation/suppliers/TopHeader";
import { SupplierHeader } from "@/components/navigation/suppliers/Header";

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  return (
    <>
      <SupplierTopHeader />
      <SupplierHeader />
      <SupplierOnboardingHero />

      <OnboardingLayout
        currentStep={step}
        totalSteps={6}
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
          <StepFiveSubscriptionPlan
            onBack={() => setStep(4)}
            onNext={() => setStep(6)}
          />
        )}

        {step === 6 && (
          <StepSixFinalReview
            onBack={() => setStep(5)}
            onSubmit={() => router.push("/suppliers/dashboard")}
          />
        )}
      </OnboardingLayout>
    </>
  )
}
"use client"
import { ReactNode } from "react"
import { SupplierHeaderMinimal } from "./SupplierHeader"
import { ProgressIndicator } from "./ProgressIndicator"
import { HelpSidebarCTA } from "./SidebarCTA"
import { OnboardingFooter } from "./OnboardingFooter"

type Props = {
  children: ReactNode
  currentStep: number
  totalSteps: number
}

export const OnboardingLayout = ({
  children,
  currentStep,
  totalSteps,
}: Props) => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">

      {/* Minimal Header */}
      <SupplierHeaderMinimal />

      {/* Progress */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        </div>
      </div>

      {/* Main Step Container */}
      <main className="flex-1 relative">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            {children}
          </div>
        </div>

        {/* Sticky Support */}
        <HelpSidebarCTA />
      </main>

      {/* Slim Footer */}
      <OnboardingFooter />
    </div>
  )
}
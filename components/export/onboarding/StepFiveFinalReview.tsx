"use client"

import { useMemo } from "react"
import { CheckCircle2, AlertTriangle } from "lucide-react"

type Props = {
  onBack: () => void
  onSubmit: () => void
}

export const StepFiveFinalReview = ({ onBack, onSubmit }: Props) => {

  // Simulated completion logic
  const profileScore = 85

  const tier = useMemo(() => {
    if (profileScore >= 80) return "Gold"
    if (profileScore >= 60) return "Silver"
    return "Bronze"
  }, [])

  const tierColor = {
    Bronze: "bg-amber-100 text-amber-700",
    Silver: "bg-gray-200 text-gray-700",
    Gold: "bg-yellow-100 text-yellow-700",
  }

  return (
    <div className="space-y-12">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0F233F] mb-2">
          Review & Submit
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl">
          You are almost ready to start receiving buyer inquiries.
          Review your profile and submit for verification.
        </p>
      </div>

      {/* Tier Card */}
      <div className="rounded-2xl border p-8 bg-gradient-to-r from-[#0F233F] to-[#132B4A] text-white">
        <p className="text-sm uppercase opacity-80 mb-2">
          Your Estimated Tier
        </p>

        <div className="flex items-center gap-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${tierColor[tier as "Bronze" | "Silver" | "Gold"]}`}
          >
            {tier} Tier
          </span>

          <span className="text-sm opacity-80">
            Profile Completion: {profileScore}%
          </span>
        </div>

        <p className="text-sm mt-4 opacity-90">
          Gold tier suppliers receive priority placement and enterprise
          visibility.
        </p>
      </div>

      {/* Profile Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#0F233F]">
          Profile Summary
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CheckCircle2 size={16} className="text-green-600" />
            Company Information Completed
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CheckCircle2 size={16} className="text-green-600" />
            Compliance & Certifications Added
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CheckCircle2 size={16} className="text-green-600" />
            Production Capacity Provided
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <AlertTriangle size={16} className="text-amber-500" />
            Verification Pending
          </div>
        </div>
      </div>

      {/* Submission Card */}
      <div className="border rounded-2xl p-6 bg-gray-50">
        <h4 className="text-sm font-semibold text-[#0F233F] mb-2">
          Submit for Verification
        </h4>
        <p className="text-xs text-gray-600 mb-4">
          Once submitted, our team will review your profile and documents.
          You will be notified when verification is complete.
        </p>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Back
          </button>

          <button
            onClick={onSubmit}
            className="bg-[#0F233F] text-white px-8 py-3 rounded-xl font-medium hover:shadow-md transition"
          >
            Submit & Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
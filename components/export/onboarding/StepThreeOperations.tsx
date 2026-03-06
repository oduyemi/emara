"use client"

import { useState } from "react"

type Props = {
  onNext: () => void
  onBack: () => void
}

export const StepThreeOperations = ({ onNext, onBack }: Props) => {
  const [capacity, setCapacity] = useState("")
  const [leadTime, setLeadTime] = useState("")
  const [workforce, setWorkforce] = useState("")
  const [facilityType, setFacilityType] = useState("")
  const [exportExperience, setExportExperience] = useState("")
  const [logisticsSupport, setLogisticsSupport] = useState(false)

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0F233F] mb-2">
          Production Capacity & Operations
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl">
          Help buyers understand your operational capability and export readiness.
        </p>
      </div>

      {/* Production Capacity */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Monthly Production Capacity
        </label>
        <input
          type="text"
          placeholder="e.g. 50 Tons / Month"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0F233F] outline-none"
        />
      </div>

      {/* Lead Time */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Average Order Lead Time
        </label>
        <input
          type="text"
          placeholder="e.g. 14–21 days"
          value={leadTime}
          onChange={(e) => setLeadTime(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0F233F] outline-none"
        />
      </div>

      {/* Workforce */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Workforce Size
        </label>
        <select
          value={workforce}
          onChange={(e) => setWorkforce(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#0F233F] outline-none"
        >
          <option value="">Select range</option>
          <option>1 – 10</option>
          <option>11 – 50</option>
          <option>51 – 200</option>
          <option>200+</option>
        </select>
      </div>

      {/* Facility Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Facility Type
        </label>
        <select
          value={facilityType}
          onChange={(e) => setFacilityType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#0F233F] outline-none"
        >
          <option value="">Select facility</option>
          <option>Owned Factory</option>
          <option>Leased Factory</option>
          <option>Cooperative Facility</option>
          <option>Home-Based / Small Production Unit</option>
        </select>
      </div>

      {/* Export Experience */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Export Experience
        </label>
        <select
          value={exportExperience}
          onChange={(e) => setExportExperience(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#0F233F] outline-none"
        >
          <option value="">Select option</option>
          <option>No Export Experience</option>
          <option>Regional (Africa Only)</option>
          <option>International (Europe / US / Asia)</option>
        </select>
      </div>

      {/* Logistics Capability */}
      <div className="flex items-center gap-3 pt-2">
        <input
          type="checkbox"
          checked={logisticsSupport}
          onChange={() => setLogisticsSupport(!logisticsSupport)}
          className="w-4 h-4"
        />
        <span className="text-sm text-gray-700">
          We have in-house logistics or freight partnerships
        </span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Back
        </button>

        <button
          onClick={onNext}
          className="bg-[#0F233F] text-white px-8 py-3 rounded-xl font-medium hover:shadow-md transition"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
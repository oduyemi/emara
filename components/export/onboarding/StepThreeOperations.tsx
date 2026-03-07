"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

type Props = {
  onNext: () => void
  onBack: () => void
}

export const StepThreeOperations = ({ onNext, onBack }: Props) => {
  const t = useTranslations("stepThree")
  const [capacity, setCapacity] = useState("")
  const [leadTime, setLeadTime] = useState("")
  const [workforce, setWorkforce] = useState("")
  const [facilityType, setFacilityType] = useState("")
  const [exportExperience, setExportExperience] = useState("")
  const [logisticsSupport, setLogisticsSupport] = useState(false)

  return (
    <div className="space-y-12">

      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-secondary tracking-tight">
          {t("title")}
        </h2>

        <p className="text-muted text-sm max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Production Capacity */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">
            {t("fields.capacity.label")}
          </label>

          <input
            type="text"
            placeholder={t("fields.capacity.placeholder")}
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
            focus:ring-2 focus:ring-accent outline-none transition"
          />
        </div>

        {/* Lead Time */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">
            {t("fields.leadTime.label")}
          </label>

          <input
            type="text"
            placeholder={t("fields.leadTime.placeholder")}
            value={leadTime}
            onChange={(e) => setLeadTime(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
            focus:ring-2 focus:ring-accent outline-none transition"
          />
        </div>

        {/* Workforce */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">
            {t("fields.workforce.label")}
          </label>

          <select
            value={workforce}
            onChange={(e) => setWorkforce(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white
            focus:ring-2 focus:ring-accent outline-none transition"
          >
            <option value="">{t("fields.workforce.placeholder")}</option>
            <option value="1-10">1 – 10</option>
            <option value="11-50">11 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">200+</option>
          </select>
        </div>

        {/* Facility Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">
            {t("fields.facility.label")}
          </label>

          <select
            value={facilityType}
            onChange={(e) => setFacilityType(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white
            focus:ring-2 focus:ring-accent outline-none transition"
          >
            <option value="">{t("fields.facility.placeholder")}</option>
            <option value="owned">{t("options.ownedFactory")}</option>
            <option value="leased">{t("options.leasedFactory")}</option>
            <option value="cooperative">{t("options.cooperative")}</option>
            <option value="home">{t("options.homeProduction")}</option>
          </select>
        </div>

        {/* Export Experience */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-secondary">
            {t("fields.exportExperience.label")}
          </label>

          <select
            value={exportExperience}
            onChange={(e) => setExportExperience(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white
            focus:ring-2 focus:ring-accent outline-none transition"
          >
            <option value="">{t("fields.exportExperience.placeholder")}</option>
            <option value="none">{t("options.noExport")}</option>
            <option value="regional">{t("options.regionalExport")}</option>
            <option value="international">{t("options.internationalExport")}</option>
          </select>
        </div>
      </div>

      {/* Logistics Capability */}
      <div className="flex items-start gap-3 p-4 bg-surface rounded-2xl border">
        <input
          type="checkbox"
          checked={logisticsSupport}
          onChange={() => setLogisticsSupport(!logisticsSupport)}
          className="mt-1 w-4 h-4"
        />

        <div>
          <p className="text-sm font-medium text-secondary">
            {t("fields.logistics.label")}
          </p>

          <p className="text-xs text-muted">
            {t("fields.logistics.helper")}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          className="text-sm text-muted hover:text-secondary transition-colors"
        >
          {t("actions.back")}
        </button>

        <button
          onClick={onNext}
          className="btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all"
        >
          {t("actions.continue")}
        </button>
      </div>
    </div>
  )
}
"use client"
import { useState } from "react"
import { africaRegions } from "@/data/countries"
import { SelectField } from "./SelectField"
import { InputField } from "./InputField"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { saveOnboardingStep } from "@/lib/api/onboarding";


const regions = Object.keys(africaRegions)

export const StepOneCompanyInfo = ({ onNext }: { onNext: () => void }) => {
  const t = useTranslations("stepOne")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")

  const countries =
    selectedRegion
      ? africaRegions[selectedRegion as keyof typeof africaRegions]
      : []

  const [form, setForm] = useState({
    companyName: "",
    tradingName: "",
    registrationNumber: "",
    yearEstablished: "",
    website: "",
    country: "",
    city: "",
    address: "",
  })

  const isValid =
  form.companyName.trim() &&
  form.registrationNumber.trim() &&
  form.yearEstablished &&
  selectedRegion &&
  selectedCountry &&
  form.city.trim() &&
  form.address.trim();

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))

  }

  const handleNext = async () => {
    try {
      if (!isValid) {
        alert("Please fill all required fields");
        return;
      }

      await saveOnboardingStep(1, {
        companyName: form.companyName,
        tradingName: form.tradingName,
        registrationNumber: form.registrationNumber,
        yearEstablished: form.yearEstablished,
        website: form.website,
        region: selectedRegion,
        country: selectedCountry,
        city: form.city,
        address: form.address,
      });
  
      onNext();
    } catch (err) {
      console.error(err);
      alert("Failed to save. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-secondary tracking-tight">
          {t("title")}
        </h2>
        <p className="text-muted text-sm max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Card Surface */}
      <div className="surface rounded-3xl p-8 space-y-12">

        {/* Company Identity */}
        <Section title={t("sections.identity")}>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label={t("fields.registeredName")}
              required
              value={form.companyName}
              onChange={(v) => updateField("companyName", v)}
            />

            <InputField
              label={t("fields.tradingName")}
              value={form.tradingName}
              onChange={(v) => updateField("tradingName", v)}
            />

            <InputField
              label={t("fields.registrationNumber")}
              required
              value={form.registrationNumber}
              onChange={(v) => updateField("registrationNumber", v)}
            />

            <InputField
              label={t("fields.yearEstablished")}
              required
              type="number"
              value={form.yearEstablished}
              onChange={(v) => updateField("yearEstablished", v)}
            />
          </div>

        </Section>

        {/* Business Details */}
        <Section title={t("sections.business")}>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label={t("fields.website")}
              placeholder="https://"
              value={form.website}
              onChange={(v) => updateField("website", v)}
            />
          </div>

        </Section>

        {/* Location */}
        <Section title={t("sections.location")}>

          <div className="grid md:grid-cols-2 gap-6">

            <SelectField
              label={t("fields.region")}
              required
              value={selectedRegion}
              onChange={(v) => {
                setSelectedRegion(v)
                setSelectedCountry("")
                updateField("country", "")
              }}
              options={regions}
            />

            <SelectField
              label={t("fields.country")}
              required
              value={selectedCountry}
              onChange={(v) => {
                setSelectedCountry(v)
                updateField("country", v)
              }}
              options={countries}
              disabled={!selectedRegion}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <InputField
              label={t("fields.city")}
              required
              value={form.city}
              onChange={(v) => updateField("city", v)}
            />

            <InputField
              label={t("fields.address")}
              required
              value={form.address}
              onChange={(v) => updateField("address", v)}
            />
          </div>

        </Section>

      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button className="text-sm text-muted hover:text-secondary transition-colors">
          {t("actions.back")}
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className="btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all"
        >
          {t("actions.continue")}
        </button>
      </div>
    </motion.div>
  )
}

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className="space-y-6">
    <h3 className="text-base font-semibold text-secondary tracking-tight">
      {title}
    </h3>
    {children}
  </div>
)
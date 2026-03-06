"use client"
import { useState } from "react"
import { UploadCloud, CheckCircle2, Trash2 } from "lucide-react"
import { useTranslations } from "next-intl"

type Props = {
  onNext: () => void
  onBack: () => void
}

export const StepTwoCompliance = ({ onNext, onBack }: Props) => {
  const t = useTranslations("stepTwo")

  const [selectedCerts, setSelectedCerts] = useState<string[]>([])
  const [documents, setDocuments] = useState<File[]>([])

  const certifications = [
    "ISO 9001",
    "ISO 22000",
    "HACCP",
    "GlobalGAP",
    "Organic",
    "Fair Trade",
    "FDA Approved",
    "Halal Certified",
  ]

  const toggleCert = (cert: string) => {
    setSelectedCerts((prev) =>
      prev.includes(cert)
        ? prev.filter((c) => c !== cert)
        : [...prev, cert]
    )
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setDocuments((prev) => [...prev, ...Array.from(e.target.files!)])
  }

  const removeFile = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index))
  }

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

      {/* Certifications */}
      <div className="space-y-6">
        <h3 className="text-base font-semibold text-secondary">
          {t("sections.certifications")}
        </h3>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => {
            const isSelected = selectedCerts.includes(cert)

            return (
              <button
                key={cert}
                type="button"
                onClick={() => toggleCert(cert)}
                className={`
                  px-4 py-2 rounded-full border text-sm transition-all duration-200 flex items-center gap-2
                  ${
                    isSelected
                      ? "bg-secondary text-white border-secondary shadow-md"
                      : "bg-white text-secondary border-gray-300 hover:border-secondary"
                  }
                `}
              >
                {isSelected && <CheckCircle2 size={14} />}
                {cert}
              </button>
            )
          })}
        </div>
      </div>

      {/* File Upload */}
      <div className="space-y-6">
        <h3 className="text-base font-semibold text-secondary">
          {t("sections.documents")}
        </h3>

        <label className="block border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center cursor-pointer hover:border-accent transition-all bg-white hover:bg-gray-50">

          <UploadCloud className="mx-auto mb-4 text-muted" size={36} />

          <p className="text-sm text-secondary font-medium mb-2">
            {t("upload.placeholder")}
          </p>

          <p className="text-xs text-muted">
            {t("upload.helper")}
          </p>

          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {/* Uploaded Files */}
        {documents.length > 0 && (
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-surface rounded-2xl px-4 py-3 text-sm border"
              >
                <div>
                  <p className="text-secondary font-medium">
                    {doc.name}
                  </p>
                  <p className="text-xs text-muted">
                    {(doc.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
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
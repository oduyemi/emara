"use client";
import { useState, useCallback } from "react";
import {
  UploadCloud,
  CheckCircle2,
  Trash2,
  FileText,
  Image as ImageIcon
} from "lucide-react"
import { useTranslations } from "next-intl"

type Props = {
  onNext: () => void
  onBack: () => void
}

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg"]

export const StepTwoCompliance = ({ onNext, onBack }: Props) => {
  const t = useTranslations("stepTwo")

  const [selectedCerts, setSelectedCerts] = useState<string[]>([])
  const [documents, setDocuments] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const validateFiles = (files: File[]) => {
    const validFiles: File[] = []

    for (const file of files) {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError("Invalid file type")
        continue
      }

      if (file.size > MAX_FILE_SIZE) {
        setError("File exceeds 10MB")
        continue
      }

      const duplicate = documents.some((doc) => doc.name === file.name)

      if (!duplicate) validFiles.push(file)
    }

    return validFiles
  }

  const addFiles = (files: File[]) => {
    const valid = validateFiles(files)

    if (valid.length > 0) {
      setDocuments((prev) => [...prev, ...valid])
      setError(null)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    addFiles(Array.from(e.target.files))
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    addFiles(files)
  }, [documents])

  const removeFile = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (file: File) => {
    if (file.type === "application/pdf") return <FileText size={18} />
    if (file.type.startsWith("image")) return <ImageIcon size={18} />
    return <FileText size={18} />
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

        <div
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all bg-white
          ${
            isDragging
              ? "border-secondary bg-secondary/5"
              : "border-gray-300 hover:border-accent hover:bg-gray-50"
          }`}
        >
          <label className="cursor-pointer block">
            <UploadCloud
              className="mx-auto mb-4 text-muted"
              size={36}
            />

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
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {/* Uploaded Files */}
        {documents.length > 0 && (
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-surface rounded-2xl px-4 py-3 text-sm border"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(doc)}

                  <div>
                    <p className="text-secondary font-medium">
                      {doc.name}
                    </p>

                    <p className="text-xs text-muted">
                      {(doc.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
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
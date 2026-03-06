"use client"

import { useState } from "react"
import { UploadCloud } from "lucide-react"

type Props = {
  onNext: () => void
  onBack: () => void
}

export const StepFourMarketReadiness = ({
  onNext,
  onBack,
}: Props) => {
  const [logo, setLogo] = useState<File | null>(null)
  const [productImage, setProductImage] = useState<File | null>(null)

  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [supportsUSD, setSupportsUSD] = useState(false)

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "logo" | "product"
  ) => {
    if (e.target.files && e.target.files[0]) {
      type === "logo"
        ? setLogo(e.target.files[0])
        : setProductImage(e.target.files[0])
    }
  }

  return (
    <div className="space-y-14">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0F233F] mb-2">
          Market Readiness
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl">
          Complete your profile so buyers can view your brand and transact securely.
        </p>
      </div>

      {/* ========================= */}
      {/* SECTION A — MEDIA */}
      {/* ========================= */}

      <div className="space-y-8">
        <h3 className="text-lg font-semibold text-[#0F233F] border-b pb-2">
          Product Portfolio & Brand Media
        </h3>

        {/* Logo Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Company Logo
          </label>

          <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-[#0F233F] transition">
            <UploadCloud className="mx-auto mb-3 text-gray-400" size={28} />
            <p className="text-sm text-gray-600">
              Upload your company logo
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e, "logo")}
              className="hidden"
            />
          </label>

          {logo && (
            <p className="text-xs text-gray-600 mt-2">
              Uploaded: {logo.name}
            </p>
          )}
        </div>

        {/* Product Image Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Primary Product Image
          </label>

          <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-[#0F233F] transition">
            <UploadCloud className="mx-auto mb-3 text-gray-400" size={28} />
            <p className="text-sm text-gray-600">
              Upload one main product image
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e, "product")}
              className="hidden"
            />
          </label>

          {productImage && (
            <p className="text-xs text-gray-600 mt-2">
              Uploaded: {productImage.name}
            </p>
          )}
        </div>
      </div>

      {/* ========================= */}
      {/* SECTION B — BANKING */}
      {/* ========================= */}

      <div className="space-y-8">
        <h3 className="text-lg font-semibold text-[#0F233F] border-b pb-2">
          Banking & Payment Readiness
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-1"
              placeholder="e.g. Zenith Bank"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Name
            </label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-1"
              placeholder="Registered business name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-1"
              placeholder="Bank account number"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              checked={supportsUSD}
              onChange={() => setSupportsUSD(!supportsUSD)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">
              We can receive USD / international payments
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
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
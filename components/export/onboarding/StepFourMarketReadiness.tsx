"use client"
import { useState } from "react"
import { UploadCloud, Trash2, Image as ImageIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { saveOnboardingStep } from "@/lib/api/onboarding"

type Props = {
  onNext: () => void
  onBack: () => void
}

export const StepFourMarketReadiness = ({
  onNext,
  onBack,
}: Props) => {
  const t = useTranslations("stepFour")
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
    if (!e.target.files?.[0]) return
    const file = e.target.files[0]

    type === "logo" ? setLogo(file) : setProductImage(file)
  }

  const preview = (file: File | null) =>
    file ? URL.createObjectURL(file) : null

    const uploadLogo = async () => {
      if (!logo) return;
    
      const formData = new FormData();
      formData.append("file", logo);
    
      await fetch("/api/images/logo", {
        method: "POST",
        body: formData,
      });
    };

    const isValid =
      (logo || productImage) &&
      bankName &&
      accountName &&
      accountNumber;

      
    const uploadProduct = async () => {
      if (!productImage) return;
    
      const formData = new FormData();
      formData.append("file", productImage);
    
      await fetch("/api/images/product", {
        method: "POST",
        body: formData,
      });
    };

    const handleNext = async () => {
      try {
        await Promise.all([
          uploadLogo(),
          uploadProduct(),
        ]);
    
        await saveOnboardingStep(4, {
          bankName,
          accountName,
          accountNumber,
          supportsUSD,
        });
    
        onNext();
      } catch (err) {
        alert("Failed to save market info");
      }
    };

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-secondary tracking-tight">
          {t("title")}
        </h2>

        <p className="text-sm text-muted max-w-2xl">
          {t("description")}
        </p>
      </div>

      {/* ========================= */}
      {/* MEDIA CARD */}
      {/* ========================= */}

      <div className="bg-white border rounded-3xl p-8 shadow-sm space-y-8">

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-secondary">
            {t("sections.media")}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LOGO */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-secondary">
              {t("fields.logo")}
            </label>

            <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-accent transition bg-surface">

              {logo ? (
                <div className="space-y-3">
                  <img
                    src={preview(logo)!}
                    className="mx-auto max-h-24 object-contain"
                  />

                  <button
                    onClick={() => setLogo(null)}
                    className="text-xs text-red-500 flex items-center gap-1 justify-center hover:text-red-600"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <UploadCloud
                    className="mx-auto mb-3 text-muted"
                    size={28}
                  />

                  <p className="text-sm text-muted">
                    {t("upload.logo")}
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFile(e, "logo")}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-secondary">
              {t("fields.productImage")}
            </label>

            <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-accent transition bg-surface">

              {productImage ? (
                <div className="space-y-3">
                  <img
                    src={preview(productImage)!}
                    className="mx-auto max-h-24 object-contain"
                  />

                  <button
                    onClick={() => setProductImage(null)}
                    className="text-xs text-red-500 flex items-center gap-1 justify-center hover:text-red-600"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <ImageIcon
                    className="mx-auto mb-3 text-muted"
                    size={28}
                  />

                  <p className="text-sm text-muted">
                    {t("upload.product")}
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFile(e, "product")}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* BANKING CARD */}
      {/* ========================= */}

      <div className="bg-white border rounded-3xl p-8 shadow-sm space-y-6">

        <h3 className="text-lg font-semibold text-secondary">
          {t("sections.banking")}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Bank */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary">
              {t("fields.bankName")}
            </label>

            <input
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder={t("placeholders.bank")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
              focus:ring-2 focus:ring-accent outline-none"
            />
          </div>

          {/* Account Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary">
              {t("fields.accountName")}
            </label>

            <input
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder={t("placeholders.accountName")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
              focus:ring-2 focus:ring-accent outline-none"
            />
          </div>

          {/* Account Number */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-secondary">
              {t("fields.accountNumber")}
            </label>

            <input
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder={t("placeholders.accountNumber")}
              autoComplete="off"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
              focus:ring-2 focus:ring-accent outline-none"
            />

            <p className="text-xs text-muted">
              {t("helper.bankSecurity")}
            </p>
          </div>
        </div>

        {/* USD SUPPORT */}
        <div className="flex items-start gap-3 bg-surface border rounded-2xl p-4">

          <input
            type="checkbox"
            checked={supportsUSD}
            onChange={() => setSupportsUSD(!supportsUSD)}
            className="mt-1 w-4 h-4"
          />

          <div>
            <p className="text-sm font-medium text-secondary">
              {t("fields.usdPayments")}
            </p>

            <p className="text-xs text-muted">
              {t("helper.usd")}
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">

        <button
          onClick={onBack}
          className="text-sm text-muted hover:text-secondary transition"
        >
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
    </div>
  )
}
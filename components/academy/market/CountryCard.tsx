"use client";
import { useTranslations } from "next-intl";


type Props = {
  name: string
  desc: string
  code: string
}

export default function CountryCard({ name, desc, code }: Props) {
  const t = useTranslations("marketCountryProfiles")

  return (
    <div className="surface p-6 rounded-xl hover:shadow-xl transition group">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
          alt={name}
          className="w-6 h-4 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition"
        />

        <h3 className="text-lg font-semibold text-secondary">
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted mb-6 text-sm leading-relaxed">
        {desc}
      </p>

      {/* CTA */}
      <button className="btn-primary px-5 py-2 rounded-lg text-sm">
      {t("cta")}
      </button>

    </div>
  )
}
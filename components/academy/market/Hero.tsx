"use client";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import Link from "next/link";



export default function MarketProfilesHero() {
  const t = useTranslations("marketProfiles.hero")

  return (
    <section className="surface-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Globe size={16}/>
            {t("badge")}
          </div>

          <h1 className="text-5xl font-semibold mb-6">
            {t("title")}
          </h1>

          <p className="text-blue-100 text-lg mb-8 max-w-xl">
            {t("subtitle")}
          </p>

          <Link href="#markets">
            <button className="btn-primary px-7 py-3 rounded-lg">
              {t("cta")}
            </button>
          </Link>
        </div>

        <div className="surface p-8 rounded-xl shadow-xl text-center">
          <p className="text-sm text-muted mb-2">{t("marketsLabel")}</p>
          <p className="font-semibold text-secondary">{t("marketsCount")}</p>
        </div>

      </div>
    </section>
  )
}
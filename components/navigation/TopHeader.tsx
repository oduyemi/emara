"use client"
import Link from "next/link"
import { ShieldCheck, Phone } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"


export function TopHeader() {
  const t = useTranslations("TopHeader")
  const locale = useLocale()
  const rtlLocales = ["ar"]
  const isRTL = rtlLocales.includes(locale)

  return (
    <div className="hidden md:block surface-dark text-sm">
      <div
        className={`
          max-w-7xl mx-auto px-4 py-2 flex items-center
          ${isRTL ? "flex-row-reverse" : "justify-between"}
        `}
      >
        {/* LEFT SIDE – Trust Messaging */}
        <div
          className={`
            flex items-center gap-6 text-white/90
            ${isRTL ? "flex-row-reverse text-right" : ""}
          `}
        >
          <div
            className={`
              flex items-center gap-2
              ${isRTL ? "flex-row-reverse" : ""}
            `}
          >
            <ShieldCheck size={16} className="text-accent" />
            <span>{t("verifiedMarketplace")}</span>
          </div>

          <span className="hidden lg:inline">
            {t("transparentTrade")}
          </span>

          <span className="hidden xl:inline">
            {t("builtForExporters")}
          </span>
        </div>

        {/* RIGHT SIDE – Utility */}
        <div
          className={`
            flex items-center gap-6 text-white
            ${isRTL ? "flex-row-reverse" : ""}
          `}
        >
          <Link
            href={`/${locale}/help`}
            className="hover:text-accent transition"
          >
            {t("helpCenter")}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className={`
              flex items-center gap-1 hover:text-accent transition
              ${isRTL ? "flex-row-reverse" : ""}
            `}
          >
            <Phone size={14} />
            {t("contact")}
          </Link>

          <Link
            href={`/${locale}/login`}
            className="hover:text-accent transition"
          >
            {t("signIn")}
          </Link>
        </div>
      </div>
    </div>
  )
}

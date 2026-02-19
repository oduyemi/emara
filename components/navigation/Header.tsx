"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { Menu, Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { MobileDrawer } from "./MobileDrawer"
import { MobileSearch } from "./MobileSearch"
import { LanguageSwitcher } from "./LanguageSwitcher"
import dynamic from "next/dynamic"

const MegaMenu = dynamic(() => import("./MegaMenu"), { ssr: false })

export const Header = () => {
  const t = useTranslations("Header")

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Main Header */}
      <div
        className={clsx(
          "surface-dark text-white transition-all duration-300",
          scrolled ? "shadow-md" : ""
        )}
      >
        <div
          className={clsx(
            "max-w-7xl mx-auto px-4 flex items-center gap-6 transition-all duration-300",
            scrolled ? "h-14" : "h-20"
          )}
        >
          {/* Mobile Menu */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Emara"
              width={120}
              height={40}
              priority
              className={clsx(
                "transition-transform duration-300",
                scrolled ? "scale-90" : "scale-100"
              )}
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1">
            <input
              type="text"
              placeholder="Search suppliers..."
              className="w-full px-4 py-2 rounded-md border border-surface-border focus:outline-none focus:ring focus:ring-accent"
            />
          </div>

          {/* Mobile Search */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden ml-auto"
          >
            <Search />
          </button>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <LanguageSwitcher />

            <Link
              href="/login"
              className="hover:text-accent transition-colors"
            >
              {t("signIn")}
            </Link>

            <Link
              href="/get-verified"
              className="btn-primary px-4 py-2 rounded-md"
            >
              {t("getVerified")}
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="hidden md:block bg-secondary text-blue-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-8 items-center">
          <MegaMenu />

          <Link href="/buyers" className="hover:text-accent transition-colors">
            {t("buyers")}
          </Link>

          <Link href="/exporters" className="hover:text-accent transition-colors">
            {t("exporters")}
          </Link>

          <Link href="/verified-suppliers" className="hover:text-accent transition-colors">
            {t("verifiedSuppliers")}
          </Link>

          <Link href="/trade-insights" className="hover:text-accent transition-colors">
            {t("tradeInsights")}
          </Link>

          <Link href="/how-it-works" className="hover:text-accent transition-colors">
            {t("howItWorks")}
          </Link>

          <Link href="/pricing" className="hover:text-accent transition-colors">
            {t("pricing")}
          </Link>
        </div>
      </div>

      {/* Mobile Drawers */}
      <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <MobileSearch open={mobileSearchOpen} setOpen={setMobileSearchOpen} />
    </header>
  )
}

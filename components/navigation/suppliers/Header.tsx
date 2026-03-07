"use client"
import { useState, useEffect } from "react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import clsx from "clsx"
import { Menu, Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { MobileDrawer } from "../MobileDrawer"
import { MobileSearch } from "../MobileSearch"
import { LanguageSwitcher } from "../LanguageSwitcher"
import dynamic from "next/dynamic"

const ExploreMenu = dynamic(() => import("./ExploreMenu"), { ssr: false })

export const SupplierHeader = () => {
  const t = useTranslations("Header")

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Main Bar */}
      <div
        className={clsx(
          "transition-all duration-300 backdrop-blur-2xl",
          "bg-gradient-to-r from-surface-dark/95 via-surface-dark/90 to-surface-dark/95",
          scrolled ? "shadow-xl border-b border-white/5" : "border-b border-white/5"
        )}
      >
        <div
          className={clsx(
            "max-w-7xl mx-auto px-6 flex items-center gap-6 transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          {/* Mobile Menu */}
          <button
            className="lg:hidden text-black/80 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link href="/suppliers" className="flex-shrink-0">
            <Image
              src="/images/logo/logofix.png"
              alt="Emara"
              width={240}
              height={40}
              priority
              className={clsx(
                "transition-all duration-300 object-contain",
                scrolled ? "scale-90" : "scale-100"
              )}
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 relative group max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 group-focus-within:text-accent transition-colors"
            />
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="
                w-full pl-12 pr-4 py-2.5
                rounded-full
                bg-white/5
                border border-white/10
                text-black
                placeholder:text-black/40
                focus:outline-none
                focus:border-accent
                focus:ring-2 focus:ring-accent/30
                transition-all duration-300
              "
            />
          </div>

          {/* Mobile Search */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden ml-auto text-black/80 hover:text-accent transition-colors"
          >
            <Search size={20} />
          </button>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <LanguageSwitcher />

            <Link
              href="/suppliers/login"
              className="text-accent hover:text-black transition-colors"
            >
              {t("signIn")}
            </Link>

            <Link
              href="/suppliers/verify"
              className="btn-primary px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t("start_journey")}
            </Link>

            <Link
              href="/suppliers/dashboard"
              className="text-black/80 hover:text-accent transition-colors"
            >
              {t("dashboard")}
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="hidden md:block bg-surface-dark/70 backdrop-blur-2xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-8 items-center text-sm font-medium text-black/80">
          <ExploreMenu />
          {[
            // { href: "/suppliers/directory", label: t("directory") },
            { href: "/suppliers/export-readiness", label: t("readiness") },
            { href: "/suppliers/onboarding", label: t("onboarding") },
            { href: "/suppliers/academy", label: t("academy") },
            // { href: "/about", label: t("about") },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative transition-colors hover:text-accent
                after:absolute after:-bottom-1 after:left-0 
                after:h-[2px] after:w-0 after:bg-accent 
                after:transition-all hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Drawers */}
      <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <MobileSearch open={mobileSearchOpen} setOpen={setMobileSearchOpen} />
    </header>
  )
}
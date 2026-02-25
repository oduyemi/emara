"use client"
import { useState, useEffect } from "react"
import { Link } from "@/i18n/navigation";
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

        <div
          className={clsx(
            "transition-all duration-300",
            "backdrop-blur-xl",
            "bg-gradient-to-r from-surface-dark/95 via-surface-dark/90 to-surface-dark/95",
            scrolled
              ? "shadow-lg border-b border-white/5"
              : "border-b border-transparent"
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
              src="/images/logo/logofix.png"
              alt="Emara"
              width={280}
              height={40}
              priority
              className={clsx(
                "transition-transform duration-300 object-cover pt-3",
                scrolled ? "scale-90" : "scale-100"
              )}
            />
            {/* <h2 className="text-bold text-2xl">Emara</h2> */}
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 relative group">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-accent transition-colors"
            />

            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="
                w-full pl-12 pr-4 py-2.5
                rounded-full
                bg-white/5
                border border-black/10
                text-black
                placeholder:text-black/40
                focus:outline-none
                focus:border-accent
                focus:ring-2 focus:ring-accent/30
                transition-all duration-200
              "
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
      <div
        className={clsx(
          "hidden md:block transition-all duration-300",
          "bg-surface-dark/60 backdrop-blur-xl",
          scrolled
            ? "border-b border-white/5 shadow-sm text-black/90"
            : "border-b border-white/5"
        )}
      >
        <div className="
        relative hover:text-accent transition-colors after:absolute after:-bottom-1 
        after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full
        max-w-7xl mx-auto px-4 py-2 flex gap-8 items-center text-sm ">
          <MegaMenu />

          <Link href="/buyers" className="hover:text-accent transition-colors">
            {t("buyers")}
          </Link>

          <Link href="/exporters" className="hover:text-accent transition-colors">
            {t("suppliers")}
          </Link>

          <Link href="/verified-suppliers" className="hover:text-accent transition-colors">
            {t("verifiedSuppliers")}
          </Link>

          <Link href="/directory" className="hover:text-accent transition-colors">
            {t("supplier_directory")}
          </Link>

          <Link href="/about" className="hover:text-accent transition-colors">
            {t("about")}
          </Link>

        </div>
      </div>

      {/* Mobile Drawers */}
      <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <MobileSearch open={mobileSearchOpen} setOpen={setMobileSearchOpen} />
    </header>
  )
}

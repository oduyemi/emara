"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  const links = {
    company: [
      { label: t("home"), href: "/" },
      { label: t("about"), href: "/about" },
      { label: t("getVerified"), href: "/register" },
    ],
    platform: [
      { label: t("forSuppliers"), href: "/suppliers" },
      { label: t("supplierDirectory"), href: "/directory" },
      { label: t("forBuyers"), href: "/buyers" },
    ],
    support: [
      { label: t("helpCenter"), href: "/help" },
      { label: t("contact"), href: "/contact" },
      { label: t("privacyPolicy"), href: "/privacy" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-t from-blue-900 via-blue-950 to-blue-900 text-white py-32 overflow-hidden">
      {/* Animated Gradient Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-16">

        {/* Brand & Authority */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">{t("brand")}</h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            {t("description")}
          </p>

          {/* Contact */}
          <div className="flex flex-col space-y-2 text-white/80 text-sm">
            <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> {t("address")}</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {t("email")}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {t("phone")}</div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-white/80 text-sm uppercase tracking-wider font-semibold">{t(section)}</h4>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/50 text-xs">
        &copy; {new Date().getFullYear()} Emara. {t("rightsReserved")}
      </div>
    </footer>
  );
}
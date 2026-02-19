"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" }
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLanguage =
    languages.find((l) => l.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    setOpen(false);

    startTransition(() => {
      const cleanedPath = pathname.replace(/^\/(en|fr|ar)/, "");
      router.replace(`/${newLocale}${cleanedPath}`);
    });
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        disabled={isPending}
        className={clsx(
          "flex items-center gap-2 px-4 py-2 rounded-full text-sm",
          "bg-white/5 backdrop-blur-md border border-white/10",
          "hover:bg-white/10 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-accent"
        )}
      >
        <span>{activeLanguage.label}</span>
        <ChevronDown
          size={16}
          className={clsx(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      <div
        className={clsx(
          "absolute right-0 mt-2 w-40 rounded-xl overflow-hidden",
          "bg-surface-dark border border-white/10 shadow-xl",
          "transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={clsx(
              "w-full text-left px-4 py-3 text-sm transition-colors",
              "hover:bg-white/10",
              locale === lang.code && "bg-accent text-red-700"
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
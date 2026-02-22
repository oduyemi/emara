"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { ChevronDown, Check } from "lucide-react";
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
    if (newLocale === locale) return;

    setOpen(false);

    startTransition(() => {
      router.replace(
        { pathname },
        { locale: newLocale }
      );
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

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        disabled={isPending}
        className={clsx(
          "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
          "bg-white/5 border border-white/10",
          "hover:bg-white/10",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-accent/50"
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
        role="listbox"
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "absolute right-0 mt-12 w-44 rounded-2xl overflow-hidden",
          "bg-surface-dark/95 backdrop-blur-xl",
          "border border-white/10 shadow-2xl",
          "transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        {languages.map((lang) => {
          const isActive = locale === lang.code;

          return (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => switchLanguage(lang.code)}
              className={clsx(
                "w-full flex items-center justify-between px-4 py-3 text-sm",
                "transition-all duration-150",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "hover:bg-white/10"
              )}
            >
              <span>{lang.label}</span>
              {isActive && <Check size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
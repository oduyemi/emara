"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { User, Mail, Lock, Building2 } from "lucide-react";
import Image from "next/image";

export default function RegisterForm() {
  const t = useTranslations("auth.register");

  return (
    <div className="max-w-md mx-auto w-full mt-4">

      <div className="bg-white border border-[var(--color-surface-border)] rounded-3xl shadow-xl p-10">
      <div className="flex justify-center mb-2">
        <Link href="/suppliers">
            <Image
            src="/images/logo/logofix.png"
            alt="Emara"
            height={120}
            width={120}
            className="object-contain"
            priority
            />
        </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-secondary mb-2">
            {t("title")}
          </h1>

          <p className="text-sm text-muted">
            {t("subtitle")}
          </p>

        </div>

        <form className="space-y-6">

          {/* Name */}
          <div>

            <label className="text-sm font-medium text-secondary block mb-2">
              {t("name")}
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-3 top-3.5 text-muted"
              />

              <input
                type="text"
                placeholder={t("namePlaceholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm"
              />

            </div>

          </div>

          {/* Company */}
          <div>

            <label className="text-sm font-medium text-secondary block mb-2">
              {t("company")}
            </label>

            <div className="relative">

              <Building2
                size={18}
                className="absolute left-3 top-3.5 text-muted"
              />

              <input
                type="text"
                placeholder={t("companyPlaceholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm"
              />

            </div>

          </div>

          {/* Email */}
          <div>

            <label className="text-sm font-medium text-secondary block mb-2">
              {t("email")}
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-3 top-3.5 text-muted"
              />

              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-sm font-medium text-secondary block mb-2">
              {t("password")}
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3 top-3.5 text-muted"
              />

              <input
                type="password"
                placeholder={t("passwordPlaceholder")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm"
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full btn-primary py-3 rounded-xl font-medium"
          >
            {t("registerButton")}
          </button>

        </form>

        {/* Login link */}
        <p className="text-center text-sm text-muted mt-8">

          {t("haveAccount")}{" "}

          <Link
            href="/suppliers/login"
            className="text-accent font-medium hover:underline"
          >
            {t("login")}
          </Link>

        </p>

      </div>
    </div>
  );
}
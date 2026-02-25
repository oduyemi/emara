import Link from "next/link";
import { motion } from "framer-motion";
import { PackageSearch, Ship, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("error");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white px-6">
      <div className="max-w-2xl text-center space-y-8">

        <div className="flex justify-center">
          <div className="bg-red-900 text-white p-6 rounded-2xl shadow-lg">
            <PackageSearch size={48} />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-surface-dark">
          {t("code")}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">
          {t("headline")}
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          {t("description")}
        </p>

        <p className="text-muted text-sm">
          {t("reassurance")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            <Ship size={18} />
            {t("primaryButton")}
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 border border-red-900 hover:border-red-800 text-red-900 font-medium px-6 py-3 rounded-xl transition-all duration-300"
          >
            <Globe size={18} />
            {t("secondaryButton")}
          </Link>
        </div>

        <p className="text-xs text-muted pt-8">
          {t("footerNote")}
        </p>
      </div>
    </section>
  );
}
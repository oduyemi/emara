"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewExporters() {
  const t = useTranslations("newExporters");

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      
      {/* subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-5">
                <Globe size={16} />
                {t("badge")}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                {t("title")}
              </h2>

              <p className="text-slate-600 text-lg mb-8 max-w-xl">
                {t("description")}
              </p>

              <Link
                href="/suppliers/register"
                className="inline-flex items-center gap-3 btn-primary font-semibold px-7 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                {t("cta")}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Feature Cards */}
            <div className="grid gap-5">

              <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl border border-slate-100">
                <TrendingUp className="text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {t("features.expand.title")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("features.expand.desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl border border-slate-100">
                <Globe className="text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {t("features.roadmap.title")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("features.roadmap.desc")}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
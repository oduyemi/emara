"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderPerspective() {
  const t = useTranslations("about.founder");
  const paragraphs = t.raw("paragraphs");

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-40">
        {/* Header */}
        <header className="max-w-3xl mb-28">
          <span className="block text-xs uppercase tracking-[0.28em] text-accent mb-6">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            {t("headline")}
          </h2>
        </header>

        <div className="grid lg:grid-cols-[420px_1fr] gap-28">
          {/* Founder */}
          <aside className="space-y-8">
            <div className="relative h-[480px] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/jacques.png"
                alt="Founder of Emara"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-900">
                {t("signature.name")}
              </p>
              <p className="text-xs text-neutral-500">
                {t("signature.title")}, {t("signature.company")}
              </p>
            </div>
          </aside>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-lg leading-relaxed text-neutral-700 space-y-8"
          >
            <p className="font-medium text-neutral-900">
              {t("salutation")}
            </p>

            {paragraphs.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Closing */}
            <footer className="pt-10 border-t border-neutral-200">
              <p className="text-neutral-900 font-medium">
                {t("quote")}
              </p>
            </footer>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
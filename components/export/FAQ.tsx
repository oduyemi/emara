"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const t = useTranslations("faq");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = t.raw("items") as {
    question: string;
    answer: string;
  }[];

  const badges = [
    { name: "ISO 9001", src: "/images/badges/iso9001.png" },
    { name: "ISO 22000", src: "/images/badges/iso22000.png" },
    { name: "GDPR Compliant", src: "/images/badges/gdpr.png" },
    { name: "Trusted Export Platform", src: "/images/badges/trusted.png" },
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">

      {/* subtle premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div className="space-y-4">
            <span className="uppercase tracking-widest text-xs text-neutral-500 font-medium">
              Compliance Intelligence
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              {t("headline")}
            </h2>

            <p className="text-neutral-600 max-w-lg leading-relaxed">
              {t("subtext")}
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-2xl bg-white shadow-sm overflow-hidden">

            {items.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div key={idx}>
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <span className="text-base md:text-lg font-medium text-neutral-900">
                      {item.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-neutral-500"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm text-neutral-700 leading-relaxed overflow-hidden"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Strategic CTA */}
          <div className="pt-4">
            <div className="surface-dark text-white rounded-2xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
              <div>
                <p className="text-sm text-white/70">
                  {t("ctaText")}
                </p>
                <p className="text-lg font-semibold mt-1">
                  {t("ctaDesc")}
                </p>
              </div>

              <Link
                href="/suppliers/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Authority Wall */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">

            {badges.map((badge) => (
              <motion.div
                key={badge.name}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={badge.src}
                  alt={badge.name}
                  width={56}
                  height={56}
                  className="object-contain mb-3"
                />
                <span className="text-sm font-medium text-neutral-900">
                  {badge.name}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
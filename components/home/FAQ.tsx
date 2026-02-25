"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export const FAQ = () => {
  const t = useTranslations("faq");

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

  return (
    <section className="relative py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* Left: FAQ */}
        <div className="space-y-16">
          <div className="text-left">
            <h2 className="text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              {t("headline")}
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              {t("subtext")}
            </p>
          </div>

          <div className="space-y-12">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border-l-4 border-accent pl-6"
              >
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href="/register"
              className="inline-block w-full md:w-auto text-center px-8 py-4 rounded-2xl bg-red-900 hover:bg-red-800 text-white font-semibold text-lg tracking-tight shadow-md hover:shadow-lg hover:bg-accent-dark transition-all duration-300"
            >
              {t("ctaButton")}
            </Link>
          </motion.div>
        </div>

        {/* Right: Authority / Badges */}
        <div className="flex flex-col items-center justify-center space-y-12">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.name}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 w-full md:w-80"
            >
              <Image
                src={badge.src}
                alt={badge.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="font-medium text-neutral-900 text-lg">
                {badge.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
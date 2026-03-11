"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CheckCircle,
  Users,
  Globe,
  Presentation,
} from "lucide-react";



export const ProgramsGrid = () => {
  const t = useTranslations("ProgramsGrid");

  const programs = [
    {
      key: "exportReadiness",
      href: "/suppliers/programs/export-readiness",
      icon: <CheckCircle size={22} />,
    },
    {
      key: "virtualConsultation",
      href: "/suppliers/programs/virtual-consultation",
      icon: <Users size={22} />,
    },
    {
      key: "tradeMissions",
      href: "/suppliers/programs/trade-missions",
      icon: <Globe size={22} />,
    },
    {
      key: "internationalShowcases",
      href: "/suppliers/programs/international-showcases",
      icon: <Presentation size={22} />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">

          {programs.map((program, i) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-10 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-[#0F233F] mb-6">
                {program.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#0F233F] mb-4">
                {t(`${program.key}.title`)}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(`${program.key}.description`)}
              </p>

              <Link
                href={program.href}
                className="text-sm font-medium text-accent hover:underline"
              >
                {t("learnMore")} →
              </Link>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
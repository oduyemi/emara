"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export const GuideNavigation = () => {
  const t = useTranslations("essentials.navigation");
  const modules = t.raw("modules");

  const [active, setActive] = useState<number>(0);

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🌈 Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-accent mb-3">
            Guide Navigation
          </p>

          <h2 className="text-3xl font-semibold text-secondary">
            {t("title")}
          </h2>
        </div>

        {/* Capsules */}
        <div className="flex flex-wrap gap-4 justify-center">

          {modules.map((item: string, i: number) => {
            const isActive = active === i;

            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="relative group"
              >
                {/* 🌈 Gradient border shell */}
                <div
                  className={`
                    p-[1.5px] rounded-full
                    bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40
                    transition-all duration-300
                    ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}
                  `}
                >
                  {/* 🧊 Capsule body */}
                  <div
                    className={`
                      px-6 py-3 rounded-full text-sm whitespace-nowrap
                      backdrop-blur-xl
                      transition-all duration-300
                      
                      ${
                        isActive
                          ? `
                            bg-white/90 text-secondary
                            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                          `
                          : `
                            bg-white/60 text-gray-600
                            shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                            group-hover:bg-white/80
                          `
                      }
                    `}
                  >
                    {/* ✨ Inner glow for active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-md" />
                    )}

                    <span className="relative z-10">{item}</span>
                  </div>
                </div>

              </motion.button>
            );
          })}

        </div>

      </div>
    </section>
  );
};
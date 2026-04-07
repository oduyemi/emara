"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";


export const GuideNavigation = () => {
  const t = useTranslations("essentials.navigation");
  const modules = t.raw("modules");
  const [active, setActive] = useState<number>(0);
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-accent mb-3">
            Guide Navigation
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
            {t("title")}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="flex flex-wrap justify-center gap-6 relative">

            {modules.map((item: string, i: number) => {
              const isActive = active === i;

              return (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group"
                >
                  <div
                    className={`
                      absolute -inset-[3px] rounded-full blur-xl
                      bg-gradient-to-r from-primary via-accent to-primary
                      transition duration-500
                      ${
                        isActive
                          ? "opacity-80"
                          : "opacity-0 group-hover:opacity-50"
                      }
                    `}
                  />
                  <div
                    className={`
                      relative z-10 px-6 py-4 rounded-full
                      backdrop-blur-xl border
                      transition-all duration-300
                      max-w-[260px]

                      ${
                        isActive
                          ? `
                            bg-white text-secondary
                            border-white/70
                            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                            scale-105
                          `
                          : `
                            bg-white/70 text-gray-600
                            border-white/40
                            shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                            group-hover:bg-white
                          `
                      }
                    `}
                  >
                    <div
                      className={`
                        text-[10px] uppercase tracking-widest mb-1
                        ${
                          isActive
                            ? "text-accent"
                            : "text-gray-400"
                        }
                      `}
                    >
                      Module {i + 1}
                    </div>
                    <div className="text-sm leading-snug font-medium">
                      {item}
                    </div>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};
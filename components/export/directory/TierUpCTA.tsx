"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

type Tier = "bronze" | "silver" | "gold" | "goldElite";

export const TierUpCTA = ({
  currentTier = "bronze",
}: {
  currentTier?: Tier;
}) => {
  const t = useTranslations("TierUpCTA");

  const tiers: Tier[] = ["bronze", "silver", "gold", "goldElite"];
  const currentIndex = tiers.indexOf(currentTier);
  const nextTier = tiers[currentIndex + 1];

  const progressPercent = (currentIndex / (tiers.length - 1)) * 100;

  return (
    <section className="relative overflow-hidden rounded-3xl p-[1px] mb-8 bg-gradient-to-br from-white/20 via-white/10 to-transparent shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
      {/* Outer Glow Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 via-transparent to-emerald-400/20 blur-2xl opacity-40" />

      {/* Main Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0F233F] to-[#132E57] p-10 backdrop-blur-xl">

        {/* Ambient Glow */}
        <div className="absolute -top-40 right-[-120px] w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 left-[-120px] w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full" />

        {/* Header */}
        <div className="relative z-10 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            {t("header")}
          </h2>
          <p className="text-white/70 max-w-xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-14">
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full relative"
            >
              {/* Glow pulse */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/30 blur-md"
              />
            </motion.div>
          </div>
        </div>

        {/* Tier Flow */}
        <div className="flex flex-wrap items-center gap-6 mb-14">
          {tiers.map((tier, index) => {
            const isCurrent = tier === currentTier;
            const isPassed = currentIndex > index;
            const isNext = currentIndex + 1 === index;
            const isLocked = currentIndex < index;

            return (
              <div key={tier} className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  animate={
                    isCurrent
                      ? { scale: [1, 1.05, 1] }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`
                    relative px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border
                    ${
                      isCurrent
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-xl border-transparent"
                        : ""
                    }
                    ${
                      isPassed
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-400/30"
                        : ""
                    }
                    ${
                      isNext
                        ? "bg-yellow-400/10 text-yellow-300 border-yellow-400/30"
                        : ""
                    }
                    ${
                      isLocked
                        ? "bg-white/5 text-white/40 border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* Icons */}
                  {isPassed && <CheckCircle2 size={16} />}
                  {isLocked && !isNext && <Lock size={16} />}

                  <span>{t(`tiers.${tier}`)}</span>

                  {isCurrent && (
                    <span className="text-xs opacity-80">
                      {t("current")}
                    </span>
                  )}

                  {/* Glow ring for current */}
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl opacity-40" />
                  )}
                </motion.div>

                {index < tiers.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} className="text-white/40" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-white/70 max-w-lg leading-relaxed">
            {nextTier
              ? t("ctaAdvance", { nextTier: t(`tiers.${nextTier}`) })
              : t("ctaMax")}
          </p>

          {nextTier && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden group btn-primary font-semibold px-8 py-3 rounded-xl shadow-lg"
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shine_1.2s_linear]" />
              </span>

              <span className="relative z-10">
                {t("upgradeButton", {
                  nextTier: t(`tiers.${nextTier}`),
                })}
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};
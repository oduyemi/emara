"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

type Tier = "bronze" | "silver" | "gold" | "goldElite";

export const TierUpCTA = ({
  currentTier = "bronze",
  }: {
    currentTier?: Tier
  }) => {
  const t = useTranslations("TierUpCTA");
  const tiers: Tier[] = ["bronze", "silver", "gold", "goldElite"];
  const currentIndex = tiers.indexOf(currentTier);
  const nextTier = tiers[currentIndex + 1];

  const progressPercent = (currentIndex / (tiers.length - 1)) * 100;

  const getTierStyles = (
    tier: Tier,
    isCurrent: boolean,
    isPassed: boolean,
    isNext: boolean
  ) => {
    const base =
      "relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center gap-2";

    if (isCurrent)
      return `${base} bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105 border-transparent`;
    if (isPassed)
      return `${base} bg-emerald-500/20 text-emerald-600 border-emerald-400/30`;
    if (isNext)
      return `${base} bg-yellow-400/20 text-yellow-600 border-yellow-400/30`;
    return `${base} bg-white/10 text-white/60 border-white/20`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F233F] to-[#132E57] rounded-3xl p-10 shadow-2xl">
      {/* Glow Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />

      {/* Glass Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-4xl sm:text-3xl font-bold tracking-tight text-secondary mb-3">
            {t("header")}
          </h2>
          <p className="text-black/70 text-sm sm:text-base max-w-xl mx-auto sm:mx-0 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-inner"
            />
          </div>
        </div>

        {/* Tier Flow */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 mb-12">
          {tiers.map((tier, index) => {
            const isCurrent = tier === currentTier;
            const isPassed = currentIndex > index;
            const isNext = currentIndex + 1 === index;
            const isLocked = currentIndex < index;

            return (
              <div key={tier} className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className={getTierStyles(tier, isCurrent, isPassed, isNext)}
                >
                  {isPassed && <CheckCircle2 size={16} />}
                  {isLocked && !isNext && <Lock size={16} />}
                  <span>{t(`tiers.${tier}`)}</span>
                  {isCurrent && (
                    <span className="text-xs opacity-80">{t("current")}</span>
                  )}
                </motion.div>

                {index < tiers.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="text-white/50 hidden sm:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed">
            {nextTier
              ? t("ctaAdvance", { nextTier: t(`tiers.${nextTier}`) })
              : t("ctaMax")}
          </p>

          {nextTier && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-900 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("upgradeButton", { nextTier: t(`tiers.${nextTier}`) })}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};
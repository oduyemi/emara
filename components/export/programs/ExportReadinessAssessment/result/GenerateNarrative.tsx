"use client";
import { useTranslations } from "next-intl";

interface NarrativeParams {
  industry: string;
  market: string;
  tier: string;
  score: number;
  gaps: string[];
}

export function useGenerateNarrative() {
  const t = useTranslations("AssessmentInteractive");

  return ({
    industry,
    market,
    tier,
    score,
    gaps,
  }: NarrativeParams): string => {
    const intro = t("narrative_intro", {
      industry,
      market,
      tier,
      score,
    });

    const gapText =
      gaps.length > 0
        ? t("narrative_gap_prefix", { gaps: gaps.join(", ") })
        : t("narrative_no_gaps");

    const strategy = t("narrative_strategy");

    return `${intro} ${gapText} ${strategy}`;
  };
}
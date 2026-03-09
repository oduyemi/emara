"use client";
import { useTranslations, useLocale } from "next-intl"


import { ExportMarket } from "../engine/types";

export default function StepMarket({
  value,
  onChange,
  onNext,
}: {
  value: ExportMarket;
  onChange: (v: ExportMarket) => void;
  onNext: () => void;
}) {
  const t = useTranslations("AssessmentInteractive")
  const markets: ExportMarket[] = [
    "eu",
    "us",
    "uk",
    "middle_east",
    "apac",
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">
        Target Export Market
      </h2>
      
      <p className="text-neutral-400 max-w-xl"></p>
      <div className="grid md:grid-cols-2 gap-4">
        {markets.map((market) => (
          <button
            key={market}
            onClick={() => onChange(market)}
            className={`p-6 rounded-2xl border ${
              value === market
                ? "border-red-950 text-black"
                : "border-red-950 bg-red-950 text-white"
            }`}
          >
            {t(`${market}`)}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="bg-red-950 text-white px-6 py-3 rounded-xl hover:bg-red-900"
      >
        {t("button_continue")}
      </button>
    </div>
  );
}
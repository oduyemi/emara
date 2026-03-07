"use client";
import { useState } from "react";
import { Check, Crown } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  onNext: (plan: string) => void
  onBack: () => void
}

export const StepFiveSubscriptionPlan = ({ onNext, onBack }: Props) => {
  const t = useTranslations("stepFive")

  const [selectedPlan, setSelectedPlan] = useState("Silver")

  const plans = [
    {
      name: "Bronze",
      price: t("bronzePrice"),
      description: t("bronzeDescription"),
      features: [
        t("bronzeFeature1"),
        t("bronzeFeature2"),
        t("bronzeFeature3"),
      ],
      tierColor: "border-amber-300 bg-amber-50"
    },
    {
      name: "Silver",
      price: t("silverPrice"),
      recommended: true,
      description: t("silverDescription"),
      features: [
        t("silverFeature1"),
        t("silverFeature2"),
        t("silverFeature3"),
        t("silverFeature4"),
      ],
      tierColor: "border-gray-300 bg-gray-50"
    },
    {
      name: "Gold Elite",
      price: t("goldPrice"),
      description: t("goldDescription"),
      features: [
        t("goldFeature1"),
        t("goldFeature2"),
        t("goldFeature3"),
        t("goldFeature4"),
        t("goldFeature5"),
      ],
      tierColor: "border-yellow-300 bg-yellow-50"
    }
  ]

  return (
    <div className="space-y-12">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0F233F] mb-2">
          {t("title")}
        </h2>

        <p className="text-gray-600 text-sm max-w-xl">
          {t("subtitle")}
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">

        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.name

          return (
            <button
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`
                relative text-left rounded-2xl border p-6 transition-all duration-200
                ${isSelected
                  ? "border-[#0F233F] shadow-xl scale-[1.02]"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"}
              `}
            >

              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-4 flex items-center gap-1 text-xs bg-[#0F233F] text-white px-3 py-1 rounded-full shadow">
                  <Crown size={12} />
                  {t("recommended")}
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-semibold text-[#0F233F] mb-1">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-2xl font-bold text-[#0F233F] mb-2">
                {plan.price}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-5">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={14} className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#0F233F] flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
              )}

            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t">

        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 text-sm transition"
        >
          {t("back")}
        </button>

        <button
          onClick={onNext}
          className="btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all"
        >
          {t("continue")}
        </button>
      </div>

    </div>
  )
}
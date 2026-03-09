"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl"
import { AnimatePresence, motion } from "framer-motion";
import { runGapAnalysis } from "./engine/ReadinessEngine";
import { CompanyProfile, GapAnalysisResult } from "./engine/types";
import ProgressBar from "./ProgressBar";
import ResultsPanel from "./result/ResultPanel";
import StepIndustry from "./steps/StepIndustry";
import StepProduct from "./steps/StepProduct";
import StepMarket from "./steps/StepMarket";
import StepVolume from "./steps/StepVolume";
import StepCertifications from "./steps/StepCertifications";
import StepOperations from "./steps/StepOperations";
import ExecutiveSummary from "./result/ExecutiveSummary";
import ExportReadinessReport from "./result/Report";

export default function ReadinessAssessment() {
  const t = useTranslations("AssessmentInteractive")
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<GapAnalysisResult | null>(null);
  const [profile, setProfile] = useState<CompanyProfile>({
    industry: "processed_food",
    productName: "",
    annualVolume: 0,
    exportMarket: "eu",
    hasQualitySystem: false,
    hasPreviousExports: false,
    certifications: [],
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleRun = () => {
    const analysis = runGapAnalysis(profile);
    setResult(analysis);
    setStep(7);
  };

  function toggleCertification(cert: string) {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  }

  function renderStep() {
    switch (step) {
      case 1:
        return (
          <StepIndustry
            value={profile.industry}
            onChange={(v) => setProfile({ ...profile, industry: v })}
            onNext={next}
          />
        );

      case 2:
        return (
          <StepProduct
            productName={profile.productName}
            onChange={(v) => setProfile({ ...profile, productName: v })}
            onNext={next}
          />
        );

      case 3:
        return (
          <StepMarket
            value={profile.exportMarket}
            onChange={(v) => setProfile({ ...profile, exportMarket: v })}
            onNext={next}
          />
        );

      case 4:
        return (
          <StepVolume
            annualVolume={profile.annualVolume}
            onChange={(v) =>
              setProfile({ ...profile, annualVolume: v })
            }
            onNext={next}
          />
        );

      case 5:
        return (
          <StepCertifications
            selected={profile.certifications}
            onToggle={toggleCertification}
            onNext={next}
          />
        );

      case 6:
        return (
          <StepOperations
            hasQualitySystem={profile.hasQualitySystem}
            hasPreviousExports={profile.hasPreviousExports}
            onChange={(field, value) =>
              setProfile({ ...profile, [field]: value })
            }
            onRun={handleRun}
          />
        );

      // case 7:
      //   return result ? (
      //     <>
      //       <ResultsPanel result={result} />

      //       <ExecutiveSummary
      //         profile={profile}
      //         result={result}
      //       />
      //     </>
      //   ) : null;
      case 7:
      return result ? (
        <>
          <ExportReadinessReport
            profile={profile}
            result={result}
          />
        </>
        ) : null;


      default:
        return null;
    }
  }

  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-accent font-medium">{t("section_label")}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">{t("section_title")}</h2>
          <p className="mt-4 text-lg text-gray-600 mb-6">{t("section_description")}</p>

        <ProgressBar current={step} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

      </div>
      </div>
    </section>
  );
}


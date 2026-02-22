"use client";
import { useTranslations, useLocale } from "next-intl"


export default function StepCertifications({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (cert: string) => void;
  onNext: () => void;
}) {
  const t = useTranslations("GapAnalysisInteractive")
  // const commonCerts = [
  //   "HACCP",
  //   "ISO 22000",
  //   "GlobalG.A.P",
  //   "FDA Registration",
  //   "CE Marking",
  //   "Halal Certification",
  //   "GMP",
  // ];
  const commonCerts = [
    "cert_haccp",
    "cert_iso_22000",
    "cert_global_gap",
    "cert_fda_registration",
    "cert_ce_marking",
    "cert_halal",
    "cert_gmp",
  ];

  return (
    <div className="space-y-10">

      <div>
        <h2 className="text-3xl font-semibold">
          {t("step5_title")}
        </h2>
        <p className="text-neutral-400 max-w-xl">
          {t("step5_description")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {commonCerts.map((cert) => {
          const active = selected.includes(cert);

          return (
            <button
              key={cert}
              onClick={() => onToggle(cert)}
              className={`p-5 rounded-2xl border transition ${
                active
                  ? "border-red-950 text-black"
                  : "border-red-950 text-white bg-red-950"
              }`}
            >
              {t(cert)}
            </button>
          );
        })}
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

function toggleCertification(cert: string) {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  }
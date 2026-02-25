"use client";

import { useTranslations } from "next-intl";

export default function AboutIntro() {
  const t = useTranslations("about.intro");

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">

        <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-light">
          {t("paragraph1")}
        </p>

        <p className="text-neutral-600 leading-relaxed text-lg">
          {t("paragraph2")}
        </p>

      </div>
    </section>
  );
}
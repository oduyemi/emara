"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, trigger }: { value: number; trigger: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1600;
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [value, trigger]);

  return <span>{count}</span>;
};

export const ExporterIndustries = () => {
  const t = useTranslations("ExporterIndustries");

  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true });

  const maturityRef = useRef(null);
  const maturityInView = useInView(maturityRef, { once: true });

  const segments = [
    {
      key: "manufacturers",
      image: "/images/food_manu.jpg",
      badges: ["EU 178/2002", "ISO 22000", "HACCP"],
    },
    {
      key: "agribusiness",
      image: "/images/agribusiness.jpg",
      badges: ["Codex", "USDA", "SFDA"],
    },
    {
      key: "fmcg",
      image: "/images/fmcg.jpg",
      badges: ["FDA FSMA", "GCC Standards", "Label Directives"],
    },
    {
      key: "industrial",
      image: "/images/equipment.jpg",
      badges: ["CE Marking", "Machinery Directive", "ISO 9001"],
    },
  ];

  return (
    <section className="relative py-36 bg-white text-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-8">
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.35em] text-accent font-medium">
              {t("section_label")}
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <h2 className="text-5xl font-semibold text-secondary tracking-tight leading-[1.05]">
            {t("section_title")}
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
            {t("section_description")}
          </p>
        </div>

        {/* Metrics Layer */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-neutral-200 py-12 mb-28 text-center"
        >
          <div>
            <p className="text-4xl font-semibold text-secondary">
              <Counter value={42} trigger={metricsInView} />+
            </p>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-3">
              Regulated Markets
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-secondary">
              <Counter value={118} trigger={metricsInView} />
            </p>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-3">
              Certification Frameworks
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-secondary">
              <Counter value={0} trigger={metricsInView} />%
            </p>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-3">
              Tolerance Risk Modeling
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-secondary">24/7</p>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-3">
              Regulatory Monitoring
            </p>
          </div>
        </div>

        {/* Compliance Maturity Index */}
        <div ref={maturityRef} className="mb-32">
          <h3 className="text-xl font-semibold mb-8">
            Compliance Maturity Index
          </h3>

          <div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: maturityInView ? "80%" : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-secondary rounded-full"
            />
          </div>

          <div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500 mt-6">
            <span>Reactive</span>
            <span>Structured</span>
            <span>Controlled</span>
            <span className="text-secondary font-medium">
              Optimized
            </span>
            <span>Intelligence-Driven</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.key}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition duration-500" />
              </div>

              <div className="p-12 space-y-8">
                <h3 className="text-2xl font-semibold tracking-tight text-secondary">
                  {t(`${segment.key}.title`)}
                </h3>

                {/* Animated Badges */}
                <div className="flex flex-wrap gap-3">
                  {segment.badges.map((badge) => (
                    <motion.span
                      key={badge}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 12px rgba(0,60,120,0.25)",
                      }}
                      className="text-[11px] tracking-wide uppercase border border-neutral-300 text-neutral-600 px-3 py-1 rounded-full transition-all duration-300"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>

                <div className="text-sm text-neutral-700 leading-relaxed">
                  {t(`${segment.key}.solution`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
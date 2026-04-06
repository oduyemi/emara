"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const SuppliersPathways = () => {
  const t = useTranslations("suppliersPathways");

  return (
    <section className="relative px-6 pb-36 -mt-32 z-20">

      {/* atmospheric lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-250px] left-[5%] w-[700px] h-[700px] bg-[var(--color-accent-soft)]/20 blur-[200px] rounded-full"/>
        <div className="absolute bottom-[-250px] right-[5%] w-[700px] h-[700px] bg-[var(--color-surface)]/20 blur-[200px] rounded-full"/>
      </div>

      <div className="max-w-7xl mx-auto relative">

        <div className="relative backdrop-blur-xl bg-white/80 border border-[var(--color-surface-border)] rounded-[40px] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.25)] p-10 md:p-14">

          <div className="grid lg:grid-cols-3 gap-10">

            <PathCard
              image="/images/learnexport.jpg"
              title={t("academy.title")}
              desc={t("academy.desc")}
              link="/suppliers/academy/roadmap"
              cta={t("academy.cta")}
              accent="var(--color-accent-soft)"
            />

            <PathCard
              image="/images/foodevent.jpg"
              title={t("events.title")}
              desc={t("events.desc")}
              link="/suppliers/events"
              cta={t("events.cta")}
              accent="var(--color-accent)"
              featured
            />

            <PathCard
              image="/images/how.jpg"
              title={t("platform.title")}
              desc={t("platform.desc")}
              link="/suppliers/register"
              cta={t("platform.cta")}
              accent="var(--color-primary)"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

const PathCard = ({
  image,
  title,
  desc,
  link,
  cta,
  accent,
  featured
}: {
  image: string;
  title: string;
  desc: string;
  link: string;
  cta: string;
  accent: string;
  featured?: boolean;
}) => {

  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [6, -6])
  const rotateY = useTransform(x, [-100, 100], [-6, 6])

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const px = e.clientX - rect.left - rect.width / 2
    const py = e.clientY - rect.top - rect.height / 2

    x.set(px)
    y.set(py)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200
      }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
        featured ? "lg:scale-[1.07]" : ""
      }`}
    >

      {/* glowing border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
        style={{
          background: `linear-gradient(120deg, transparent, ${accent}50, transparent)`
        }}
      />

      {/* image */}
      <motion.div
        className="relative h-[440px] overflow-hidden rounded-3xl"
        style={{
          x: useTransform(x, [-100, 100], [-10, 10]),
          y: useTransform(y, [-100, 100], [-10, 10])
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover scale-110 group-hover:scale-125 transition duration-[1400ms]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
      </motion.div>

      {/* pointer light */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useTransform(
            x,
            [-200, 200],
            [
              `radial-gradient(circle at 20% 20%, ${accent}50, transparent)`,
              `radial-gradient(circle at 80% 80%, ${accent}50, transparent)`
            ]
          )
        }}
      />

      {/* caption */}
      <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-white shadow-xl">

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-white/80 mb-5 leading-relaxed">
          {desc}
        </p>

        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium btn-primary text-secondary px-4 py-2 rounded-full hover:scale-105 transition"
        >
          {cta}

          <ArrowRight size={16}/>
        </Link>

      </div>

    </motion.div>
  );
};
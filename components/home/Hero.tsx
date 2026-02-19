"use client"
import { useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export const Hero = () => {
  const t = useTranslations("Hero")
  const locale = useLocale()
  const isRTL = ["ar"].includes(locale)

  const autoplay = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  )

  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: isRTL ? "rtl" : "ltr" },
    [autoplay.current]
  )

  const slides = ["slide1", "slide2", "slide3"].map((key, index) => ({
    highlight: t(`${key}.highlight`),
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    cta: t(`${key}.cta`),
    link:
      key === "slide1"
        ? "/verified-suppliers"
        : key === "slide2"
        ? "/buyers"
        : "/exporters",
    image: `/images/hero${index + 1}.jpg`
  }))

  return (
    <section className="relative w-full overflow-hidden text-white">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-h-[88vh] flex items-center"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />

              {/* Secondary-toned overlay instead of black */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(18,53,91,0.72) 0%, rgba(18,53,91,0.55) 40%, rgba(18,53,91,0.4) 100%)"
                }}
              />

              {/* Content */}
              <div className="relative max-w-6xl mx-auto px-6 w-full">
                <div
                  className={`max-w-2xl space-y-8 ${
                    isRTL ? "ml-auto text-right" : ""
                  }`}
                >
                  {/* Highlight */}
                  <p className="uppercase tracking-[0.3em] text-xs font-semibold text-accent">
                    {slide.highlight}
                  </p>

                  {/* Title */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div
                    className={`flex flex-wrap gap-5 pt-4 ${
                      isRTL ? "justify-end" : ""
                    }`}
                  >
                    <Link
                      href={slide.link}
                      className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      {slide.cta}
                      {isRTL ? (
                        <ArrowLeft size={18} />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </Link>

                    <Link
                      href="/how-it-works"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {t("learnMore")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Minimal Slide Indicator */}
              <div className="absolute bottom-10 right-10 flex gap-2">
                {slides.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      dotIndex === index
                        ? "bg-accent"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

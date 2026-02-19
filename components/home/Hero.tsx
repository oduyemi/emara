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
  const rtlLocales = ["ar"]
  const isRTL = rtlLocales.includes(locale)

  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
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
    <section className="relative w-full overflow-hidden bg-secondary text-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-h-[500px] md:min-h-[600px] flex items-center"
            >
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
                <div
                  className={`
                    space-y-6 max-w-xl
                    ${isRTL ? "md:col-start-2 text-right" : ""}
                  `}
                >
                  <p className="text-accent uppercase tracking-wider text-sm font-semibold">
                    {slide.highlight}
                  </p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-base md:text-lg text-gray-200">
                    {slide.description}
                  </p>

                  <div
                    className={`
                      flex flex-wrap gap-4 pt-2
                      ${isRTL ? "justify-end" : ""}
                    `}
                  >
                    <Link
                      href={slide.link}
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 hover:border-accent transition text-sm font-semibold"
                    >
                      {t("learnMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

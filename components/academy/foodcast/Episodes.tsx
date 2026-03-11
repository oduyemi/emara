"use client";
import { useTranslations } from "next-intl";
import EpisodeCard from "./EpisodeCard";



export default function EpisodesGrid() {
  const t = useTranslations("foodcast.episodes")

  const episodes = [
    {
      title: t("ep1.title"),
      desc: t("ep1.desc")
    },
    {
      title: t("ep2.title"),
      desc: t("ep2.desc")
    },
    {
      title: t("ep3.title"),
      desc: t("ep3.desc")
    }
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((ep, i) => (
            <EpisodeCard key={i} title={ep.title} desc={ep.desc}/>
          ))}
        </div>

      </div>
    </section>
  )
}
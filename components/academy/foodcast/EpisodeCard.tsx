"use client";


type Props = {
  title: string
  desc: string
}



export default function EpisodeCard({ title, desc }: Props) {
  return (
    <div className="surface p-8 rounded-xl hover:shadow-xl transition">

      <h3 className="text-xl font-semibold mb-4 text-secondary">
        {title}
      </h3>

      <p className="text-muted mb-6">
        {desc}
      </p>

      <button className="btn-primary px-5 py-2 rounded-lg">
        Play Episode
      </button>

    </div>
  )
}
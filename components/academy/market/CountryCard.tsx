"use client"


type Props = {
  name: string
  desc: string
}



export default function CountryCard({ name, desc }: Props) {
  return (
    <div className="surface p-8 rounded-xl hover:shadow-xl transition">

      <h3 className="text-xl font-semibold mb-4 text-secondary">
        {name}
      </h3>

      <p className="text-muted mb-6">
        {desc}
      </p>

      <button className="btn-primary px-5 py-2 rounded-lg">
        View Profile
      </button>

    </div>
  )
}
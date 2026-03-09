import { Calendar, MapPin } from "lucide-react"

type Props = {
  title: string
  date: string
  location: string
}

export default function WorkshopCard({
  title,
  date,
  location
}: Props) {

  return (
    <div className="surface p-6 rounded-xl hover:shadow-xl transition">

      <h3 className="font-semibold text-lg mb-4">
        {title}
      </h3>

      <div className="flex items-center gap-2 text-sm text-muted mb-2">
        <Calendar size={14}/>
        {date}
      </div>

      <div className="flex items-center gap-2 text-sm text-muted mb-5">
        <MapPin size={14}/>
        {location}
      </div>

      <button className="btn-primary px-5 py-2 rounded-lg">
        Register
      </button>

    </div>
  )
}
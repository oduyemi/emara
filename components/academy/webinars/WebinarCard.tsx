import { Calendar, Clock } from "lucide-react"

type Props = {
  title: string
  date: string
  duration: string
  image: string
}

export default function WebinarCard({
  title,
  date,
  duration,
  image
}: Props) {
  return (
    <div className="surface rounded-xl overflow-hidden transition hover:shadow-xl">

      <img
        src={image}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <h3 className="font-semibold text-lg mb-3">
          {title}
        </h3>

        <div className="flex gap-4 text-sm text-muted mb-4">

          <span className="flex items-center gap-1">
            <Calendar size={14}/>
            {date}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={14}/>
            {duration}
          </span>

        </div>

        <button className="text-primary font-medium">
          View details →
        </button>

      </div>

    </div>
  )
}
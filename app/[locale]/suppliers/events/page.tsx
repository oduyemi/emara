import { EventsHero } from "@/components/export/events/Hero";
import { UpcomingEvents } from "@/components/export/UpcomingEvents";


export default function EventsPage() {
  return (
    <main className="bg-white">
        <EventsHero />
        <div id="events">
          <UpcomingEvents />
        </div>
    </main>
  );
}
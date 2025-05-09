import { getEvents } from "../api/page";
import EventCard from "../components/EventCard";

export default async function eventPage() {
  const allEvents = await getEvents();

  return (
    <main>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {allEvents?.map((event) => (
          <div key={event.id} className="hover:shadow-lg rounded-xl p-4">
            <EventCard key={event.id} event={event} />
            <h1>{event.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}

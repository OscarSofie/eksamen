import { getEvents } from "../../api/page";
import EventCard from "../components/EventCard";

const locations = {
  1: "København",
  2: "Aarhus",
  3: "Odense",
};

export default async function eventPage() {
  const allEvents = await getEvents();
  const eventGroups = {
    1: [],
    2: [],
    3: [],
  };

  allEvents.map((event) => {
    eventGroups[event.locationId]
      ? eventGroups[event.locationId].push(event)
      : null;
  });

  return (
    <main className="space-y-12 p-6">
      {[1, 2, 3].map((locationId) => {
        const events = eventGroups[locationId];

        return events.length > 0 ? (
          <section key={locationId}>
            <h1 className="text-5xl font-bold mb-4">{locations[locationId]}</h1>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-12">
              {events?.map((event) => (
                <div key={event.id} className=" transition-transform duration-300 hover:scale-105">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </section>
        ) : null;
      })}
    </main>
  );
}

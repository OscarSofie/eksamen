import { getEvents } from "../../api/page";
import EventCard from "../components/EventCard";

const locations = {
  1: "København",
  2: "Aarhus",
  3: "Aalborg",
};

export default async function eventPage() {
  const allEvents = await getEvents();
  const eventGroups = {
    1: [],
    2: [],
    3: [],
  };

  allEvents?.forEach((event) => {
    if (eventGroups[event.locationId]) {
      eventGroups[event.locationId].push(event);
    }
  });

  return (
    <main className="space-y-12 p-6">
      {[1, 2, 3].map((locationId) => {
        const events = eventGroups[locationId];

        return events.length > 0 ? (
          <section key={locationId}>
            <h1>{locations[locationId]}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {events?.map((event) => (
                <div key={event.id} className="hover:shadow-lg rounded-xl p-4">
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

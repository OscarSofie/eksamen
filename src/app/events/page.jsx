import { getEvents } from "../../api/page";
import EventCard from "../components/EventCard";
import DropdownLocations from "../components/DropdownLocations";

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
    <div className="space-y-12 p-6 bg-kurator-bg">
      <div className="flex flex-row justify-between ">
        <h1 className="text-3xl-fluid font-extrabold leading-tight text-left">
          Udstillinger
        </h1>
        <DropdownLocations />
      </div>

      {[1, 2, 3].map((locationId) => {
        const events = eventGroups[locationId];

        return events.length > 0 ? (
          <div key={locationId}>
            <div className="flex flex-row justify-between ">
              <h1 className="text-2xl-fluid font-bold mb-4">
                {locations[locationId]}
              </h1>
              
            </div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-12">
              {events?.map((event) => (
                <div
                  key={event.id}
                  className=" transition-transform duration-300 hover:scale-105"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

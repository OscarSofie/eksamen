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
    <div className="">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl-fluid font-extrabold leading-tight ">
          Udstillinger
        </h1>
      </div>

      <div className="mt-6">
        {[1, 2, 3].map((locationId) => {
          const events = eventGroups[locationId];

          return events.length > 0 ? (
            <div key={locationId}>
              <div className="  ">
                {locationId === 1 ? (
                  <div className="flex items-center justify-between gap-4">
                    <h1 className="text-2xl-fluid font-extrabold my-6">
                      {locations[locationId]}
                    </h1>
                    <DropdownLocations />
                  </div>
                ) : (
                  <h1 className="text-2xl-fluid font-extrabold">
                    {locations[locationId]}
                  </h1>
                )}
              </div>

              <hr className="my-8 border-t-4 border-(--color-public-text-secondary)" />

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
    </div>
  );
}

import { getSingleEvent } from "../../../api/page";


export default async function Page({ params }) {
  const event = await getSingleEvent(params.id);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Rediger Event</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Event ID: {event.id}</h2>
        <p className="text-gray-600">Titel: {event.title}</p>
        <p className="text-gray-600">Beskrivelse: {event.description}</p>
        <p className="text-gray-600">Dato: {event.date}</p>
        <p className="text-gray-600">Sted: {event.location?.address}</p>
      </div>
    </div>
  );
}


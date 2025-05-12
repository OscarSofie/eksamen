import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div>
      <h2>{event.title}</h2>
      <Link href={{ pathname: "/events/[id]", query: { id: event.id } }}>
        Gå til event
      </Link>
    </div>
  );
}

import Link from "next/link";
import { getSingleArtwork } from "../../api/page";

const EventCard = async ({ event }) => {
  const artworks = await getSingleArtwork(event.artworkIds[0]);

  return (
    <div>
      <Link href={`/events/${event.id}`}>
        {artworks.map((art) => (
          <img key={event.id} src={art.image_thumbnail} alt="" />
        ))}

        <h1>{event.title}</h1>
        <h2>{event.date}</h2>
        <p>{event.description}</p>
      </Link>
    </div>
  );
};

export default EventCard;

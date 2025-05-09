import { getSingleArtwork } from "../api/page";

const EventCard = async ({ event }) => {
  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div>
      {artworks.map((art) => (
        <div key={event.id}>
          <img src={art.image_thumbnail} alt="" />
        </div>
      ))}

      <h1>{event.title}</h1>
      <h2>{event.date}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;

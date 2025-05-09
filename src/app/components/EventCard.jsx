import { getSingleArtwork } from "../api/page";

const EventCard = async ({ event }) => {
  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div key={event.id}>
      {artworks.map((art) => (
        <img src={art.image_thumbnail} alt="" />
      ))}

      <h1>{event.title}</h1>
      <h2>{event.date}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;

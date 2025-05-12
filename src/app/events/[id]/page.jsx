import { getSingleArtwork } from "@/app/api/page";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div>
      <div>
        {artworks.map((art) => (
          <img src={art.image_thumbnail} alt="" />
        ))}
        <h1>{event.title}</h1>
        <h2>{event.description}</h2>
      </div>

      <h1>{event.location?.address}</h1>
      <h2>{event.date}</h2>
      <p>{event.artworkIds}</p>
    </div>
  );
};

export default SingleEvent;

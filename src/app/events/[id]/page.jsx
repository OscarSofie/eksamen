import { getSingleArtwork } from "@/app/api/page";
import Image from "next/image";
import Head from "next/head";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div>
      <div>
        {artworks.map((art) => (
          <div
            className="static h-screen flex justify-center items-center "
            style={{ backgroundColor: art.suggested_bg_color }}
          >
            <Image
              key={event.id}
              src={art.image_thumbnail}
              alt={event.title}
              width={1000}
              height={900}
              className="  object-cover  lg:h-[85vh] md:w-auto h-full  "
            ></Image>
          </div>
        ))}
        <div className="absolute left-10 top-1/2 z-20 text-[#eae8e0]">
          <h1 className="text-7xl font-extrabold">{event.title}</h1>
          <h2 className="max-w-[500px]">{event.description}</h2>
        </div>
      </div>

      <h1 className="pt-5 text-8xl font-bold place-self-center">
        {event.location?.address}
      </h1>
      <div className="grid grid-cols-2 place-items-center text-5xl ">
        <h2 className="text-5xl">{event.date}</h2>
        <h2>{event.location?.name}</h2>
      </div>
      <p>{event.artworkIds}</p>
    </div>
  );
};

export default SingleEvent;

import { getSingleArtwork } from "@/api/page";
import { getArtwork } from "@/api/page";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const artworkHero = await getSingleArtwork(event.artworkIds?.[0]);

  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div>
      <div>
        {artworkHero.map((art) => (
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
        
        <h1 className="pt-5 text-8xl font-bold place-self-center">
          {event.location?.address}
        </h1>
        <div className="grid grid-cols-2 place-items-center text-5xl ">
          <h2 className="text-5xl">{event.date}</h2>
          <h2>{event.location?.name}</h2>
        </div>
        <p>{event.artworkIds}</p>
        <div className="">
          <h2>Værker:</h2>
          <div className="grid-cols-3">
            {artworks.map((art) => (
              <div className="w-fit">
                <Link href={`/artworks/${art.object_number}`}>
                  <Image
                    key={art.id}
                    src={art.image_thumbnail}
                    width={400}
                    height={300}
                  />
                  <h1>{art.object_number}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;

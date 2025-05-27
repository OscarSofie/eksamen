import { getSingleArtwork } from "@/api/page";
import Image from "next/image";
import Link from "next/link";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const [artworkHero, artworks] = await Promise.all([
    getSingleArtwork(event.artworkIds?.[0]),
    getSingleArtwork(event.artworkIds),
  ]);

  return (
    <div className="bg-kurator-bg text-kurator-primary">
      {/* HERO */}
      {artworkHero.map((art) => (
        <div
          className="relative h-[85vh] w-full flex items-center justify-start pl-12"
          style={{ backgroundColor: art.suggested_bg_color || "#000" }}
          key={event.id}
        >
          <Image
            src={art.image_thumbnail}
            alt={event.title}
            fill
            className="object-cover z-0"
          />
          <div className="absolute z-10 text-white drop-shadow-[2px_2px_0_#000] max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              {event.title}
            </h1>
            <p className="text-base-fluid mt-4 leading-normal">
              {event.description}
            </p>
          </div>
        </div>
      ))}

      {/* INFO */}
      <section className="pl-12 py-12 bg-white text-kurator-primary">
        <h2 className="text-3xl-fluid font-extrabold mb-4">
          {event.location?.name}
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 text-base-fluid">
          <span>{event.date}</span>
          <span className="hidden sm:inline">|</span>
          <span>{event.location?.address}</span>
        </div>
        <p>{event.artworkIds}</p>
        <div className="">
          <h2>Værker:</h2>
          <div className="grid grid-cols-3">
            {artworks.map((art) => (
              <div className="transition-transform duration-300 hover:scale-105" key={art.id}>
                <Link href={`/artworks/${art.object_number}`}>
                  <Image
                    key={art.id}
                    src={art.image_thumbnail}
                    alt={art.title}
                    width={400}
                    height={300}
                    className="aspect-square overflow-hidden "
                  />
                  <h1 className="text-md-fluid">{art.title}</h1>
                </Link>
              </div>
            ))}
          </div>
          <Link href={`/tilmelding/${event.id}`}>
            <button event={event}>Tilmeld</button>
          </Link>
        </div>
      </section>

      {/* PRIS OG KNAP */}
      <div className="pl-12 py-12 bg-white text-kurator-primary">
        <p className="text-md-fluid font-semibold mb-4">200 kr pr billet</p>
        <button className="border border-kurator-primary px-4 py-2 font-semibold hover:bg-kurator-primary hover:text-white transition text-sm-fluid">
          Bestil billetter
        </button>
      </div>
    </div>
  );
};

export default SingleEvent;

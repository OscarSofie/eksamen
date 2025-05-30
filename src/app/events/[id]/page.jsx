import { getSingleArtwork } from "@/api/page";
import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const [heroArt] = await getSingleArtwork(event.artworkIds?.[0]);
  const artworks = await getSingleArtwork(event.artworkIds);

  return (
    <div className="text-kurator-primary mt-2 md:mt-10 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/events">Udstillnger</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/events/${id}`}>
              {event.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative h-[75vh] w-full flex items-center justify-center border-b-1">
        <Image
          src={heroArt?.image_thumbnail || "/img/placeholder.svg"}
          alt={event.title}
          fill
          className="w-full h-auto object-contain pb-0 md:pb-10"
        />
      </div>
      <div className="text-left text-kurator-primary px-6 md:px-16 py-2 md:py-16 space-y-5 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold">{event.title}</h1>
        <p className="text-md-fluid max-w-screen-md italic md:mt-10 mt-2 md:mb-6 mb-4">
          {event.description}
        </p>
        <div className="flex justify-start gap-6 text-base-fluid pb-6 md:pb-0">
          <span>{event.date}</span>
          <span>|</span>
          <span>{event.location?.name}</span>
          <span>|</span>
          <span>{event.location?.address}</span>
        </div>
      </div>

      <div className="px-6 md:px-20 py-12 border-t">
        <h2 className="text-2xl-fluid font-bold text-kurator-primary mb-4">
          Værker:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Link
                href={{
                  pathname: `/artworks/${art.object_number}`,
                  query: {
                    eventId: event.id,
                    eventName: event.title,
                  },
                }}
              >
                <Image
                  src={art.image_thumbnail}
                  alt={art.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-8 pb-8 px-6">
        <p className="text-md-fluid font-semibold mb-4">
          Pris: 200 kr pr. billet
        </p>
        <Link href={`/tilmelding/${event.id}`}>
          <button className="border border-kurator-primary px-4 py-2 font-semibold hover:bg-kurator-primary hover:text-white transition text-sm-fluid">
            Tilmeld dig eventet
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleEvent;

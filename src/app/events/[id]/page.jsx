import Image from "next/image";
import Link from "next/link";
import { getEvents, getSingleArtwork } from "@/api/page";
import Button from "@/app/components/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const allEvents = await getEvents();

  const sliderEvents = allEvents
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const heroEvents = await Promise.all(
    sliderEvents.map(async (event) => {
      const [heroArt] = await getSingleArtwork(event.artworkIds?.[0]);
      return {
        ...event,
        heroImage: heroArt?.image_thumbnail || "/img/placeholder.svg",
        heroColor: heroArt?.suggested_bg_color || "#102e50",
      };
    })
  );

  return (
    <div className="mx-10">
      <Carousel>
        <CarouselContent>
          {heroEvents.map((event) => (
            <CarouselItem key={event.id}>
              <div
                className="relative h-[85vh] w-full flex items-center justify-start pl-12 text-white"
                style={{ backgroundColor: event.heroColor }}
              >
                <Image
                  src={event.heroImage}
                  alt={event.title}
                  fill
                  className="object-cover z-0"
                />
                <div className="absolute z-10 max-w-3xl drop-shadow-[2px_2px_0_#000]">
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                    {event.title}
                  </h1>
                  <p className="text-base-fluid mt-4 leading-normal">
                    {event.description}
                  </p>
                  <Link href={`/events/${event.id}`}>
                    <Button variant="primary" className="mt-6">
                      Se event
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

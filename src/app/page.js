import Link from "next/link";
import { getEvents, getSingleArtwork } from "@/api/page";
import EventHero from "../app/components/EventHero";
import Button from "../app/components/Button";
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
      const [artwork] = await getSingleArtwork(event.artworkIds?.[0]);
      return {
        ...event,
        heroImage: artwork?.image_thumbnail || "/img/placeholder.svg",
        bgColor: artwork?.suggested_bg_color || "#fff",
      };
    })
  );

  const sectionBgColor = heroEvents.bgColor || "#fff"; // Brug første event som baggrund

  return (
    <main className="w-full">
     
      <div className="relative h-screen bg-img text-white">
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="max-w-2xl space-y-6 border-3 border-white p-10 ml-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Statens Museum for Kunst
            </h1>
            <div className="leading-loose">
              <p className="text-base-fluid text-white mb-3">
                SMK præsenterer sæsonens mest tankevækkende udstillinger
              </p>
              <p className="text-sm-fluid">
                Oplev værker fra hele verdenen året rundt
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/events">
                <Button variant="secondary">Se udstillinger</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>


      <div className="px-6 md:px-16 py-12 bg-[#7D7D99]">
        <Carousel className="w-full">
          <CarouselContent>
            {heroEvents.map((event) => (
              <CarouselItem
                key={event.id}
              
              >
                <EventHero
                  event={event}
                  heroImage={event.heroImage}
                  eventButton
                />
              </CarouselItem>
        ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </main>
  );
}

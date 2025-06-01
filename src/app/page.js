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
import Hero from "./components/Hero";
import Header from "./components/layout/Header";

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



  return (
    <div>
      <div className="bg-img min-h-dvh">
      
        <Hero/>
      </div>
    <main className="grid">

      {/*      <div className="relative bg-img min-h-dvh text-white">
        <div className="relative mt-6 z-10 min-h-dvh flex items-center px-2 md:px-16">
          <div className=" space-y-6 border-3 border-white p-15 ml-0 sm:ml-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Statens Museum for Kunst
            </h1>
            <div className="leading-loose">
              <p className="text-base-fluid text-white mb-">
                SMK præsenterer sæsonens mest tankevækkende udstillinger
              </p>
              <p className="text-sm-fluid">
                Oplev værker fra hele verdenen året rundt
              </p>
            </div>
            <div className="flex gap-4 text-xl-fluid">
              <Link href="/events">
                <Button variant="secondary">Se udstillinger</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div> */}

  
   

      <div className="px-6 md:px-16 py-12 bg-[#C6DDED]">
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
    </div>
  );
}

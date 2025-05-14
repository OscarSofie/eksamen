"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { getSingleArtwork } from "@/api/page";

const Hero = ({ events }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [artworkImages, setArtworkImages] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const allImages = await Promise.all(
        events.map(async (event) => {
          const artworks = await getSingleArtwork(event.artworkIds[0]);
          return artworks[0]?.image_thumbnail || "";
        })
      );
      setArtworkImages(allImages);
    };
    fetchArtworks();
  }, [events]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {events.map((event, index) => (
            <div
              className="embla__slide flex-shrink-0 w-full h-screen relative"
              key={event.id}
            >
              <Image
                src={artworkImages[index] || "/fallback.jpg"}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4 z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {event.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-6">
                    {event.description}
                  </p>
                  <Link href={`/events/${event.id}`}>
                    <div className="inline-block bg-white text-black px-6 py-3 rounded-md text-lg font-semibold cursor-pointer">
                      Læs mere
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

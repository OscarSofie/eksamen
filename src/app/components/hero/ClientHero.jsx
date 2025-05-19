"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { SignedIn } from "@clerk/nextjs";

const ClientHero = ({ events, artworks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const event = events[activeIndex];
  const artwork = artworks[activeIndex];

  return (
    <section className="relative h-[500px] text-white flex flex-col justify-center items-start px-10 py-20 bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src={artwork?.image_thumbnail || "/placeholder.jpg"}
          alt={event.title}
          fill
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm opacity-75 mb-4">{event.date}</p>
        <p className="mb-6 text-base font-light">{event.description}</p>

        <Link href={`/events/${event.id}`}>
          <Button variant="secondary">Læs mere om udstillingen</Button>
        </Link>

        <SignedIn>
          <Link href="/secret">
            <Button variant="primary" className="ml-2">
              Rediger event
            </Button>
          </Link>
        </SignedIn>
      </div>

      <div className="absolute bottom-6 left-10 flex gap-3 z-10">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-white" : "bg-gray-500"}`}
            aria-label={`Skift til event ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientHero;

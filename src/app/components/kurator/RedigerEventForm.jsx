"use client";

import { useState } from "react";
import { redigerEvent } from "@/actions/actions";
import SearchArt from "./SearchArt";
import SubmitButton from "./SubmitButton";
import { useZustand } from "@/store/zustand";

export default function RedigerEventForm({ event }) {
  const { artworks } = useZustand();
  const artworkIds = artworks.map((art) => art.object_number);
  console.log("Artwork ID:", artworkIds);

  return (
    <form
      action={redigerEvent}
      className="space-y-4 bg-white p-6 shadow max-w-xl mx-auto"
    >
      <input type="hidden" name="id" value={event.id} />
      <h2 className="text-xl font-semibold">Rediger event</h2>
      <input
        type="text"
        name="title"
        placeholder={event.title}
      
        className="border border-gray-300 p-2 w-full"
      />
      <textarea
        name="description"
        placeholder={event.description}
        className="border border-gray-300 p-2 w-full"
      ></textarea>
      <input
        type="text"
        name="curator"
        placeholder={event.curator}
        
        className="border border-gray-300 p-2 w-full"
      />
      <select
        name="locationId"
        
        className="border border-gray-300 p-2 w-full"
      >
        <option value="">{event.location?.name}</option>
        <option value="1">Kunsthallen A</option>
        <option value="2">Galleri B</option>
        <option value="3">Warehouse C </option>
      </select>
      <select
        name="date"
        
        className="border border-gray-300 p-2 w-full"
      >
        <option value="">{event.date}</option>
        {[
          "2025-05-01",
          "2025-05-02",
          "2025-05-03",
          "2025-05-04",
          "2025-05-05",
          "2025-05-06",
          "2025-05-07",
          "2025-05-08",
          "2025-05-09",
          "2025-05-10",
          "2025-05-11",
          "2025-05-12",
          "2025-05-13",
          "2025-05-14",
          "2025-05-15",
        ].map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <input
        type="hidden"
        name="artworkIds"
        value={JSON.stringify(artworkIds)}
      />
      <SubmitButton className="bg-blue-600 text-white px-4 py-2">
        Gem
      </SubmitButton>
    </form>
  );
}

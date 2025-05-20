"use client";

import Image from "next/image";
import { useZustand } from "@/store/zustand";

const ValgteVaerker = () => {
  const { artworks, removeArtwork } = useZustand();

  return (
    <div className="flex flex-col justify-center gap-4 mx-20">
      <h2 className="text-3xl font-bold">Valgte værker:</h2>
      <ul className="grid grid-cols-4 gap-4">
        {artworks.map((item) => (
          <li key={item.object_number}>
            <Image
              src={item.image_thumbnail || "/img/placeholder.svg"}
              alt={item.titles?.[0]?.title}
              width={200}
              height={150}
              className="object-cover rounded"
            />
            <div className="mt-2">
              <p className="font-semibold text-sm">
                {item.titles?.[0]?.title || item.object_number}
              </p>
              <p className="text-xs text-gray-500">{item.artist_names?.[0]}</p>
              <button
                onClick={() => removeArtwork(item.object_number)}
                className="mt-1 text-red-500 hover:text-red-700 text-xs"
              >
                Fjern
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValgteVaerker;

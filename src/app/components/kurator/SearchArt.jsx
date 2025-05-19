"use client";

import { useState } from "react";
import { getSearchResults } from "@/api/page";
import { useZustand } from "@/store/zustand";

import Image from "next/image";

// SearchArt-komponent viser kunstværker og håndterer søgning og valg
const SearchArt = ({ alleVaerker = [] }) => {
  const { artworks, addArtwork, removeArtwork } = useZustand();

  // Her gemmer vi det kuratoren søger på
  const [searchQuery, setsearchQuery] = useState("");
  // her vises resultaterne fra API'et
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1); // - til sider

  const prSide = 30; // - hvor mange værker der skal vises pr. side

  // Søger værker baseret
  const soegVaerker = async () => {
    if (!searchQuery.trim()) return; // - sørger for vi ikke kan søge med tomt søgefelt
    const data = await getSearchResults(searchQuery); // - kalder api'et
    setResults(data); // - gemmer kaldet i state
    setPage(1);
  };

  // Her tilføjer (og fjerner) man et kunstværk
  const klikCheckbox = (item) => {
    const id = item.object_number; // - vælges ud fra sit ID
    const isSelected = artworks.some((art) => art.object_number === id); // - tjekker om værket allerede er valgt

    if (isSelected) {
      removeArtwork(id); // - fjerner
    } else {
      addArtwork(item); // - tilføjer
    }
  };

  const kunstListe = searchQuery ? results : alleVaerker; // - Hvis der er ikke er valgt et værk, vises alle
  const antalSider = Math.ceil(kunstListe.length / prSide); // - hvor mange sider der skal være
  const side = kunstListe.slice((page - 1) * prSide, page * prSide); // - finder de værker der skal vises på den aktuelle side

  return (
    <div className="flex flex-col justify-center gap-4 mx-20">
      <div className="flex columns-4 gap-2">
        <input
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          placeholder="Søg i SMK API"
          className="border border-gray-300 rounded p-2"
        />
        <button
          type="button"
          onClick={soegVaerker}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Søg
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Forrige
        </button>
        <span className="text-sm mt-1">
          Side {page} af {antalSider}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, antalSider))}
          disabled={page === antalSider}
        >
          Næste
        </button>
      </div>

      {kunstListe.length > 0 && (
        <ul className="grid grid-cols-4 gap-2-">
          {side.map((item) => (
            <li key={item.object_number}>
              <Image
                src={item.image_thumbnail || "/img/placeholder.svg"}
                alt={item.titles.title || "Artwork"}
                width={200}
                height={150}
                className="object-cover rounded"
              />
              <div className="mt-2">
                <p className="font-semibold text-sm">
                  {item.titles.title || item.object_number}
                </p>
                <p className="text-xs text-gray-500">
                  {item.artist_names?.[0] || "Ukendt kunstner"}
                </p>
                <label className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    checked={artworks.some((art) => art.object_number === item.object_number)}
                    onChange={() => klikCheckbox(item)}
                  />
                  Vælg
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchArt;

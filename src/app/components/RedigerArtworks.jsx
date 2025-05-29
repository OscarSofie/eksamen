"use client";
import { useRef } from "react";
import { useZustand } from "@/store/zustand";

export default function RedigerArtworks({ artworks }) {
  const { artworks: current, clearArtworks, addArtwork } = useZustand();
  const initialized = useRef(false);

  if (!initialized.current && current.length === 0 && artworks.length > 0) {
    initialized.current = true;
    clearArtworks();
    artworks.forEach((art) => addArtwork(art));
  }

  return null;
}

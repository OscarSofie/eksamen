"use client";

import { useZustand } from "@/store/zustand";
import EventForm from "./EventForm";

export default function EventServer({ mode, eventData, preloadedArtworks = [] }) {
  const { addArtwork, clearArtworks } = useZustand();

  // Når vi client-renderer og allerede har modtaget værker, læg dem ind i Zustand én gang
  if (mode === "edit") {
    clearArtworks(); // Fjern gamle
    preloadedArtworks.forEach((art) => {
      if (art?.object_number) addArtwork(art);
    });
  }

  return <EventForm mode={mode} eventData={eventData} />;
}

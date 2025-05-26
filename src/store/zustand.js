import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useZustand = create(
  (set) => ({
    artworks: [],
    addArtwork: (artwork) =>
      set((state) => {
        const exists = state.artworks.find(
          (item) => item.object_number === artwork.object_number
        );
        if (exists) return state;
        return { artworks: [...state.artworks, artwork] };
      }),
    removeArtwork: (object_number) =>
      set((state) => ({
        artworks: state.artworks.filter(
          (item) => item.object_number !== object_number
        ),
      })),
    clearArtworks: () => set({ artworks: [] }),
  }),
  {
    name: "selected-artworks-storage",
  }
);

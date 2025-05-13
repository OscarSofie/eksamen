"use client";

import SubmitButton from "./SubmitButton";
import { opretEvent } from "@/actions/actions";

export default function OpretEventForm() {
  return (
    <form
      action={opretEvent}
      className="max-w-md mx-auto space-y-4 p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold">Opret nyt event</h2>

      <input
        type="text"
        name="title"
        placeholder="Titel"
        required
        className="w-full border border-gray-300 rounded p-2"
      />

      <textarea
        name="description"
        placeholder="Beskrivelse"
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="text"
        name="artist"
        placeholder="Kunstner"
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="date"
        name="date"
        required
        className="w-full border border-gray-300 rounded p-2"
      />

      <SubmitButton className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Opret event
      </SubmitButton>
    </form>
  );
}

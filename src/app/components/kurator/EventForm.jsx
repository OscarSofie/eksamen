/* "use client";

import { useActionState } from "react";
import { opretEvent, redigerEvent } from "@/actions/actions";
import { useZustand } from "@/store/zustand";

const initialState = { message: "" };

export default function EventForm({ mode = "create", eventData = {} }) {
  const { artworks } = useZustand();
  const artworkIds = artworks.map((art) => art.object_number);

  const isEdit = mode === "edit";

  const actionFn = async (prevState, formData) => {
    const res = await (isEdit ? redigerEvent : opretEvent)(form);
    return { message: res?.message || "Event gemt!" };
  };

  const [state, formAction, isPending] = useActionState(actionFn, initialState);

  return (
    <form
      action={formAction}
      className="sticky top-20 self-start p-6 border border-kurator-primary bg-kurator-bg text-kurator-primary flex flex-col gap-4"
    >
      {isEdit && <input type="hidden" name="id" value={eventData.id} />}

      <h2 className="font-extrabold text-xl-fluid leading-tight mb-2">
        {isEdit ? "Rediger event" : "Opret event"}
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Titel"
        defaultValue={eventData.title}
        required
        className="border border-kurator-primary p-2 text-sm-fluid leading-normal"
      />

      <textarea
        name="description"
        placeholder="Beskrivelse"
        defaultValue={eventData.description}
        className="border border-kurator-primary p-2 text-sm-fluid leading-normal"
      ></textarea>

      <input
        type="text"
        name="curator"
        placeholder="Kurator navn"
        defaultValue={eventData.curator}
        required
        className="border border-kurator-primary p-2 text-sm-fluid leading-normal"
      />

      <select
        name="locationId"
        required
        className="border border-kurator-primary p-2 text-sm-fluid leading-normal"
      >
        <option value="">
          {isEdit ? eventData.location?.name || "Vælg lokation" : "Vælg lokation"}
        </option>
        <option value="1">Kunsthallen A</option>
        <option value="2">Galleri B</option>
        <option value="3">Warehouse C</option>
      </select>

      <select
        name="date"
        required
        className="border border-kurator-primary p-2 text-sm-fluid leading-normal"
      >
        <option value="">{isEdit ? eventData.date : "Vælg dato"}</option>
        {[...Array(15)].map((_, i) => {
          const d = new Date(2025, 4, i + 1).toISOString().split("T")[0];
          return (
            <option key={d} value={d}>
              {d}
            </option>
          );
        })}
      </select>

      <input
        type="hidden"
        name="artworkIds"
        value={JSON.stringify(artworkIds)}
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn-kurator hover:btn-kurator text-sm-fluid px-4 py-2 font-semibold leading-tight disabled:opacity-50"
      >
        {isPending
          ? isEdit
            ? "Gemmer..."
            : "Opretter..."
          : isEdit
          ? "Gem event"
          : "Opret event"}
      </button>

      {state.message && (
        <p className="text-sm-fluid mt-2 text-green-700">{state.message}</p>
      )}
    </form>
  );
}
 */
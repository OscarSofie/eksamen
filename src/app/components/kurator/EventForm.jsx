/* "use client";

import { useZustand } from "@/store/zustand";
import SubmitButton from "./SubmitButton";
import { opretEvent, redigerEvent } from "@/actions/actions";

export default async function EventForm({ mode = "create", eventData = {} }) {
  const { artworks } = useZustand();
  const artworkIds = artworks.map((art) => art.object_number);

  const isEdit = mode === "edit";
  const formAction = isEdit ? redigerEvent : opretEvent;
  const title = isEdit ? "Rediger event" : "Opret event";
  const submitLabel = isEdit ? "Gem event" : "Opret event";

  return (
    <form
      action={formAction}
      className="sticky top-20 self-start p-6 border border-[var(--color-kurator-primary)] bg-[var(--color-kurator-bg)] text-[var(--color-kurator-primary)] flex flex-col gap-4"
    >
      {isEdit && <input type="hidden" name="id" value={eventData.id} />}

      <h2 className="font-extrabold text-[var(--text-xl)] leading-[var(--leading-tight)] mb-2">
        {title}
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Titel"
        defaultValue={eventData.title}
        required
        className="border border-[var(--color-kurator-primary)] p-2 text-[var(--text-sm)] leading-[var(--leading-normal)]"
      />

      <textarea
        name="description"
        placeholder="Beskrivelse"
        defaultValue={eventData.description}
        className="border border-[var(--color-kurator-primary)] p-2 text-[var(--text-sm)] leading-[var(--leading-normal)]"
      ></textarea>

      <input
        type="text"
        name="curator"
        placeholder="Kurator navn"
        defaultValue={eventData.curator}
        required
        className="border border-[var(--color-kurator-primary)] p-2 text-[var(--text-sm)] leading-[var(--leading-normal)]"
      />

      <select
        name="locationId"
        required
        className="border border-[var(--color-kurator-primary)] p-2 text-[var(--text-sm)] leading-[var(--leading-normal)]"
      >
        <option value="">
          {isEdit
            ? eventData.location?.name || "Vælg lokation"
            : "Vælg lokation"}
        </option>
        <option value="1">Kunsthallen A</option>
        <option value="2">Galleri B</option>
        <option value="3">Warehouse C</option>
      </select>

      <select
        name="date"
        required
        className="border border-[var(--color-kurator-primary)] p-2 text-[var(--text-sm)] leading-[var(--leading-normal)]"
      >
        <option value="">{isEdit ? eventData.date : "Vælg dato"}</option>
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

      <SubmitButton className="btn-kurator hover:btn-kurator text-[var(--text-sm)] px-4 py-2 font-semibold leading-[var(--leading-tight)]">
        {submitLabel}
      </SubmitButton>
    </form>
  );
}
 */
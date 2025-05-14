'use client';

import { useState } from 'react';
import { opretEvent } from '@/actions/actions';
import SearchArt from './SearchArt';
import SubmitButton from './SubmitButton';

export default function OpretEventForm() {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <form
      action={opretEvent}
      className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold">Opret nyt event</h2>

      <input
        type="text"
        name="title"
        placeholder="Titel"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />

      <textarea
        name="description"
        placeholder="Beskrivelse"
        className="border border-gray-300 rounded p-2 w-full"
      ></textarea>

      <input
        type="text"
        name="curator"
        placeholder="Kurator navn"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />

      <select
        name="locationId"
        required
        className="border border-gray-300 rounded p-2 w-full"
      >
        <option value="">Vælg lokation</option>
        <option value="1">Kunsthallen A</option>
        <option value="2">Galleri B</option>
      </select>

      <select
        name="date"
        required
        className="border border-gray-300 rounded p-2 w-full"
      >
        <option value="">Vælg dato</option>
        {[
          '2025-05-01', '2025-05-02', '2025-05-03', '2025-05-04', '2025-05-05',
          '2025-05-06', '2025-05-07', '2025-05-08', '2025-05-09', '2025-05-10',
          '2025-05-11', '2025-05-12', '2025-05-13', '2025-05-14', '2025-05-15',
        ].map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <SearchArt selectedIds={selectedIds} setSelectedIds={setSelectedIds} />

      <input
        type="hidden"
        name="artworkIds"
        value={JSON.stringify(selectedIds)}
      />

      <SubmitButton className="bg-blue-600 text-white px-4 py-2 rounded">
        Opret event
      </SubmitButton>
    </form>
  );
}

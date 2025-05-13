'use client';

import { useState } from 'react';
import { getSearchResults } from '@/api/page';

export default function SearchArt({ kunstId, setkunstId }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function soegVaerker() {
    if (!searchTerm.trim()) return;
    setLoading(true);
    const data = await getSearchResults(searchTerm);
    setResults(data);
    setLoading(false);
  }

  function klikCheckbox(item) {
    const id = item.object_number;
    const isAlleredeValgt = kunstId.includes(id);

    const nyListe = isAlleredeValgt
      ? kunstId.filter((i) => i !== id)
      : [...kunstId, id];

    setkunstId(nyListe);

    // vis titel i inputfelt + luk liste
    if (!isAlleredeValgt) {
      setSearchTerm(item.titles?.[0]?.title || id);
      setResults([]);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Søg i SMK API"
          className="border border-gray-300 rounded p-2 flex-1"
        />
        <button
          type="button"
          onClick={soegVaerker}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Søg
        </button>
      </div>

      {loading && <p className="text-gray-500">Søger...</p>}

      {results.length > 0 && (
        <ul className="space-y-1 border p-2 rounded bg-white shadow">
          {results.map((item) => (
            <li key={item.object_number}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={kunstId.includes(item.object_number)}
                  onChange={() => klikCheckbox(item)}
                />
                {item.titles?.[0]?.title || item.object_number}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

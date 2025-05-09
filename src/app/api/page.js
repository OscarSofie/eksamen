export async function getEvents() {
  const res = await fetch("https://eksamenso.onrender.com/events");
  const data = await res.json();
  return data.events;
}

export async function getSearchResults(query) {
  const res = await fetch(`https://api.smk.dk/api/v1/art/search?keys=${query}`);
  const data = await res.json();
  return data.items;
}

export async function getSingleArtwork(query) {
  const res = await fetch(
    `https://api.smk.dk/api/v1/art?object_number=${object_number}`
  );
  const data = await res.json();
  return data.items;
}

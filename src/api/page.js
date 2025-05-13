export async function getEvents() {
  const res = await fetch("https://eksamenso.onrender.com/events");
  const data = await res.json();
  return data;
}

export async function getSearchResults(query) {
  const res = await fetch(`https://api.smk.dk/api/v1/art/search?keys=${query}`);
  const data = await res.json();
  return data.items;
}

export async function getSingleArtwork(artworkIds) {
  const res = await fetch(
    `https://api.smk.dk/api/v1/art?object_number=${artworkIds}`
  );
  const data = await res.json();
  return data.items;
}

export async function getSingleEvent(id) {
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();
  return event;
}

const API_URL = "https://eksamenso.onrender.com/events";

export async function createEvent(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Noget gik galt under oprettelse af event');
  }

  const nytEvent = await res.json();
  return nytEvent;
}


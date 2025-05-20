'use server'

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

export async function getArtwork(objectIDs) {
  const query = Array.isArray(objectIDs)
    ? objectIDs.map(encodeURIComponent).join(",")
    : encodeURIComponent(objectIDs);

  const res = await fetch(
    `https://api.smk.dk/api/v1/art?object_number=${query}`
  );
  const data = await res.json();
  return data;
}

export async function getAllArtworks() {
  const res = await fetch(
    "https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=100"
  );
  const data = await res.json();
  return data.objectIDs;
}

export async function getSingleEvent(artworkIds) {
  const query = Array.isArray(artworkIds) ? artworkIds.join(",") : artworkIds;
  const res = await fetch(`https://eksamenso.onrender.com/events/${query}`);
  const event = await res.json();
  return event;
}

export async function createEvent(data) {
  console.log("server:", JSON.stringify(data, null, 2));

  const res = await fetch("https://eksamenso.onrender.com/events/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const responseText = await res.text();

  console.log("response:", res.status, responseText);

  if (!res.ok) {
    throw new Error("Noget gik galt under oprettelse af event");
  }

  return JSON.parse(responseText);
}

export async function deleteEvent(id) {
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Noget gik galt under sletning af event");
  }

  return await res.json();
}
export async function updateEvent(id, updatedData) {
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error('Noget gik galt under opdatering af event');
  }

  return await res.json()}

export async function fetchSomeArtworks() {
  const res = await fetch(
    "https://api.smk.dk/api/v1/art/search?keys=kunst&offset=0&rows=100"
  );
  const data = await res.json();
  return data.items;
}





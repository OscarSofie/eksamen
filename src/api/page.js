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

export async function getAllArtworks() {
  const res = await fetch("https://api.smk.dk/api/v1/art/all_ids");
  const data = await res.json();
  return data.objectIDs;
}

export async function getSingleEvent(id) {
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();
  return event;
}

export async function createEvent(data) {
  console.log(data);

  const res = await fetch("https://eksamenso.onrender.com/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseText = await res.text();

  console.log("🔴 Server response:", res.status, responseText);

  if (!res.ok) {
    throw new Error("Noget gik galt under oprettelse af event");
  }

  return JSON.parse(responseText);
}

export async function getArtwork(objectIDs) {
  const artworks = await Promise.all(
    objectIDs.map(async (id) => {
      const res = await fetch(
        `https://api.smk.dk/api/v1/art?object_number=${id}`
      );
      const data = await res.json();
      return data.items?.[0]; // eller tilpas ud fra API-strukturen
    })
  );
  return artworks;
}

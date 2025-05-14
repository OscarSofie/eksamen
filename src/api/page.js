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

export async function createEvent(data) {
  console.log(data); 

  const res = await fetch('https://eksamenso.onrender.com/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const responseText = await res.text(); 

  console.log("🔴 Server response:", res.status, responseText); 

  if (!res.ok) {
    throw new Error('Noget gik galt under oprettelse af event');
  }

  return JSON.parse(responseText);
}


export async function FrontEvents() {
  const res = await fetch('https://eksamenso.onrender.com/events');
  const allEvents = await res.json();
  return allEvents.slice(0, 2); // returnér kun de to første
}

export async function getEvents() {
  const res = await fetch("https://api.smk.dk/api/v1/art")
  const data = await res.json();
  console.log(data)
  return data;
}

getEvents()



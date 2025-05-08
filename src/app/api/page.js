export async function getEvents() {
  const res = await fetch("https://api.smk.dk/api/v1/art?object_number=KKS5261")
  const data = await res.json();
  return data;
}



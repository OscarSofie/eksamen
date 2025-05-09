const res = await fetch("https://api.smk.dk/api/v1/art?object_number=KKS5261");
const data = await res.json();
console.log(data);

export default function Home() {
  return <></>;
}

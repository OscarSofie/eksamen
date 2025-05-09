import { getEvents } from "../api/page";


export default async function eventPage({ params }) {
  

const allEvents = await getEvents();


  return (
    <main>
      <h1>{}</h1>
    </main>
  );
}

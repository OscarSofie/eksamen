import TilmeldingForm from "@/app/components/TilmeldingForm";
export default async function TilmeldingPage({ params }) {
  const res = await fetch(`https://eksamenso.onrender.com/events/${params.id}`);
  const event = await res.json();

  const availableTickets = event.totalTickets - event.bookedTickets;

  console.log(event);
  return <TilmeldingForm event={event} availableTickets={availableTickets} />;
}

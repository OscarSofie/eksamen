import TilmeldingForm from "@/app/components/TilmeldingForm";
export default async function TilmeldingPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  const availableTickets = event.totalTickets - event.bookedTickets;

  console.log(event);
  return <TilmeldingForm event={event} availableTickets={availableTickets} />;
}

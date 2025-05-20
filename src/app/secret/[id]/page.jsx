import RedigerEventForm from "@/app/components/kurator/RedigerEventForm";
import AllArtworks from "@/app/components/kurator/AllArtworks";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  return (
    <div className="p-8">
      <div>
        <RedigerEventForm event={event}></RedigerEventForm>
      </div>
      <div>
        <AllArtworks />
      </div>
    </div>
  );
}

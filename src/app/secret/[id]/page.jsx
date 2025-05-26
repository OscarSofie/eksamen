import RedigerEventForm from "@/app/components/kurator/RedigerEventForm";
import AllArtworks from "@/app/components/kurator/AllArtworks";


export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <h1 className="text-2xl-fluid font-extrabold leading-tight text-center">
        Rediger Event
      </h1>

      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-12 mx-auto">
        <div>
          <RedigerEventForm event={event} />
        </div>

        <div className="flex-1">
          <AllArtworks />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { getSingleArtwork } from "@/api/page";
import Image from "next/image";
import Button from "./Button";
import { SignedIn } from "@clerk/nextjs";
import DeleteButton from "./kurator/DeleteButton";
import { sletEvent } from "@/actions/actions";

const EventCard = async ({
  event,
  title,
  description,
  date,
  image,
  isCurator,
}) => {
  const artworks = await getSingleArtwork(event.artworkIds[0]);

  return (
    <div className="bg-[#F5F3EC] p-4 w-xs flex flex-col ">
      <Link href={`/events/${event.id}`}>
        {artworks.map((art) => (
          <div key={art.object_number}>
            <Image
              src={art.image_thumbnail}
              alt={event.title}
              width={300}
              height={400}
              className="w-full h-auto"
            ></Image>
          </div>
        ))}

        <h1 className="text-4xl font-semibold mt-3 text-[#000342]">
          {event.title}
        </h1>
        <h2 className="text-xs text-[#000342] opacity-50 mt-3">{event.date}</h2>
        <p className="text-sm text-[#000342] mt-5 font-light">
          {event.description}
        </p>
      </Link>
      <div>
        <Link href={`/events/${event.id}`}>
          <Button variant="secondary">Læs mere om udstillingen</Button>
        </Link>

        <SignedIn>
          <Link href="/secret">
            <Button variant="primary">Rediger event</Button>
          </Link>
          {isCurator === true ? (
            <Link href="/secret">
              <Button variant="primary">Rediger event</Button>
            </Link>
          ) : null}

          <form action={sletEvent}>
            <input type="hidden" name="eventId" value={event.id} />
            <DeleteButton>Slet event</DeleteButton>
          </form>
        </SignedIn>
      </div>
    </div>
  );
};

export default EventCard;

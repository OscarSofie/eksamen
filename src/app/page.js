import Image from "next/image";
import EventsPage from "./events/page";
import EventCard from "./components/EventCard";

export default function Home() {
  return (
    <div>
      <div className="absolute -z-10">
        <Image src="/img/pexels-lady.png" alt="Hero image" fill />
      </div>
    </div>
  );
}

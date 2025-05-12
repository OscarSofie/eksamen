import Image from "next/image";
import EventsPage from "./events/page";
import ImageCard from "./components/ImageCard";

export default function Home() {
  return (
    <div className="mx-10" >

      <h1 className="font-bold text-7xl">Begivenheder</h1>
      <h2 className="text-3xl">Københavnøø</h2>

      <ImageCard />

    </div>
  );
}

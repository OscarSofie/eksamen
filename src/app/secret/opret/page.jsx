import OpretEventForm from "../../components/kurator/OpretEventForm";
import SearchArt from "../../components/kurator/SearchArt";
import { getAllArtworks } from "@/api/page";
import { fetchSomeArtworks } from "@/api/page";
import Test from "../../components/Test";
import KunstCard from "@/app/components/kurator/ArtworkCard";
import AllArtworks from "@/app/components/kurator/AllArtworks";
import ValgteVaerker from "@/app/components/kurator/ValgteVaerker";

export default async function Page() {
  const alleVaerker = await fetchSomeArtworks();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 mt-6">Opret Event</h1>
      <div className="grid grid-cols-2 items-top justify-center">
        <OpretEventForm />
        <AllArtworks />
      </div>
    </div>
  );
}

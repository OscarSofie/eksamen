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
    <div>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Opret Event</h1>
        <OpretEventForm />
        {/*  <SearchArt alleVaerker={alleVaerker} />  */}
      </div>
      <div>
        {/*   <KunstCard /> */}
        <AllArtworks />
      </div>
    </div>
  );
}

import Image from "next/image";
import { fetchSomeArtworks } from "@/api/page";
import SearchArt from "./SearchArt";
import ValgteVaerker from "./ValgteVaerker";
import OpretEventForm from "./OpretEventForm";

const AllArtworks = async () => {
  const vaerker = await fetchSomeArtworks();

  return (
    <div>
      <ValgteVaerker />
      <SearchArt alleVaerker={vaerker} />
      
    </div>
  );
};

export default AllArtworks;

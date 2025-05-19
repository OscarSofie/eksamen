/* import Image from "next/image";
import { fetchSomeArtworks } from "@/api/page";

const KunstCard = async () => {
  const vaerker = await fetchSomeArtworks();

  return (
    <div className="grid grid-cols-2 gap-6">
      {vaerker.map((art) => (
        <div key={art.object_number} className="border p-4 rounded shadow bg-white">
          <Image
            src={art.image_thumbnail || "/img/placeholder.svg"}
            alt={art.titles?.[0]?.title || "Artwork"}
            width={400}
            height={300}
            className="object-cover w-full h-60 mb-4"
          />
          <h3 className="font-semibold text-lg mb-1">
            {art.titles?.[0]?.title || art.object_number}
          </h3>
          <p className="text-sm text-gray-500">
            {art.artist_names?.[0] || "Ukendt kunstner"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KunstCard; */
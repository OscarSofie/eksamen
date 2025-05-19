/* import { getAllArtworks } from "@/api/page";
import Image from "next/image";

const AllArtworks = async () => {
  const objectIDs = await getAllArtworks();
  const limitedIDs = objectIDs.slice(0, 150);

  const artworks = await Promise.all(
    limitedIDs.map(async (id) => {
      const encodedId = encodeURIComponent(id);
      const res = await fetch(
        `https://api.smk.dk/api/v1/art?object_number=${encodedId}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      return data.items?.[0];
    })
  );

  const artworksWithImage = artworks.filter(
    (art) => art && art.image_thumbnail && art.image_thumbnail !== ""
  );

  return (
    <div className="grid grid-cols-2 ">
      {artworksWithImage.map((art) => (
        <div key={art.object_number} className=" ">
          <Image
            src={art.image_thumbnail}
            alt={art.title || "Artwork"}
            width={400}
            height={300}
            className="object-cover place-self-center w-auto h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default AllArtworks;
 */
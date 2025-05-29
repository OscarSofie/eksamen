import Image from "next/image";
import Link from "next/link";

const ArtSingleview = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://api.smk.dk/api/v1/art?object_number=${id}`);
  const art = await res.json();

  const item = art.items?.[0];

  const fetchSimilarArt = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const numbers = data.object_numbers || [];

    return Promise.all(
      numbers.map(async (id) => {
        const res = await fetch(
          `https://api.smk.dk/api/v1/art?object_number=${id}`
        );
        const data = await res.json();
        return data.items?.[0];
      })
    );
  };

  const similarArtworks = item?.similar_images_url
    ? await fetchSimilarArt(item.similar_images_url)
    : [];

  return (
    <div className="text-kurator-primary">
      {/* Hero section */}
      <div className="relative w-full h-[75vh] flex items-center justify-center border-b">
        <Image
          src={item.image_thumbnail}
          alt={item.titles?.[0]?.title || "Værk billede"}
          fill
          className="object-contain"
        />
      </div>

      {/* Info section */}
      <div className="px-6 md:px-20 py-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {item.titles?.[0]?.title}
        </h1>
        <p className="text-base-fluid">{item.artist}</p>
        <p className="text-sm-fluid italic">{item.techniques?.[0]}</p>
        <p className="text-sm-fluid">
          {item.production_date?.[0]?.period}
        </p>
        <p className="text-sm-fluid">
          {item.production?.[0]?.creator_history}
        </p>
      </div>

      {/* Similar artworks */}
      {similarArtworks.length > 0 && (
        <div className="px-6 md:px-20 py-10 border-t">
          <h2 className="text-2xl-fluid font-bold mb-6">Lignende værker</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarArtworks.map(
              (artwork) =>
                artwork && (
                  <Link
                    key={artwork.id}
                    href={`/artworks/${artwork.object_number}`}
                    className="block hover:scale-105 transition-transform"
                  >
                    <Image
                      src={artwork.image_thumbnail}
                      alt={artwork.titles?.[0]?.title || "Ukendt titel"}
                      width={400}
                      height={300}
                      className="object-cover w-full"
                    />
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtSingleview;

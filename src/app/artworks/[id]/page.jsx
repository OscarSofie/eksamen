import Image from "next/image";
import Link from "next/link";

const ArtSingleview = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://api.smk.dk/api/v1/art?object_number=${id}`);
  const art = await res.json();

  const item = art.items?.[0];

  console.log(item);

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
    <div>
      <div
        className="static h-screen flex justify-center items-center "
        style={{ backgroundColor: item.suggested_bg_color }}
      >
        <Image
          key={item.id}
          src={item.image_thumbnail}
          width={1000}
          height={900}
          className="  object-cover  lg:h-[85vh] md:w-auto h-full  "
        ></Image>
      </div>
      <div className="absolute left-10 bottom-1/3 top-1/2  z-20 text-[#eae8e0] place-self-center ">
        <h1 className="text-7xl font-extrabold max-w-4xl">
          {item.titles?.[0].title}
        </h1>
      </div>

      <h2 className="max-w-[500px]">{item.artist}</h2>

      <p>{item.techniques?.[0]}</p>
      <p>{item.production_date?.[0].period}</p>
      <p>{item.production?.[0].creator_history}</p>

      {similarArtworks.length > 0 && (
        <div className="mt-10">
          <h3 className="text-4xl font-extrabold mb-4">LIGNENDE VÆRKER:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarArtworks.map((artwork) =>
              artwork ? (
                <div key={artwork.id} className="flex flex-col items-center">
                  <Link href={`/artworks/${artwork.object_number}`}>
                    <Image
                      src={artwork.image_thumbnail}
                      width={300}
                      height={300}
                      className="object-cover"
                      alt={artwork.titles?.[0]?.title || "Ukendt titel"}
                    />
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtSingleview;

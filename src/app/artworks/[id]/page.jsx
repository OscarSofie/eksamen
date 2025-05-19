import { getSingleArtwork } from "@/api/page";
import Image from "next/image";

const ArtSingleview = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://api.smk.dk/api/v1/art?object_number=${id}`);
  const art = await res.json();

  const item = art.items?.[0];

  console.log(item);

  return (
    <div>
      <div style={{ backgroundColor: item.suggested_bg_color }}>
        <Image
          key={item.id}
          src={item.image_thumbnail}
          width={1000}
          height={900}
        ></Image>
      </div>
      <h1>{item.titles?.[0].title}</h1>
      <h2>{item.artist}</h2>
      <p>{item.techniques?.[0]}</p>
      <p>{item.production_date?.[0].period}</p>
      <p>{item.production?.[0].creator_history}</p>
    </div>
  );
};

export default ArtSingleview;

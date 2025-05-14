import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/hero/Hero";
import { FrontEvents } from "@/api/page";

export default async function Home() {
  const events = await FrontEvents();

  return (
    <div className="mx-10">
      <Hero events={events} /> 
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { SignedIn } from "@clerk/nextjs";

const ImageCard = ({ title, description, date, image, isCurator }) => {
  return (
    <div className="bg-[#F5F3EC] p-4 w-xs flex flex-col ">
      <Image
        src="/img/pexels-lady.png"
        alt="Lady"
        width={300}
        height={400}
        className="w-full h-auto"
      />
      <p className="text-xs opacity-50 mt-1 text-[#000342]">Udstilling</p>
      <h2 className="text-4xl font-semibold mt-3 text-[#000342]">
        Lys og Mørke
      </h2>
      <p className="text-xs text-[#000342] opacity-50 mt-3">
        28 Marts - 03 April 2025
      </p>
      <p className="text-sm text-[#000342] mt-5 font-light">
        En kontrastfyldt udstilling der undersøger samspillet mellem lys og
        mørke i kunsten. Værker der udforsker skygger, kontraster og stemninger.
      </p>
      <div className="flex flex-col gap-4 mt-7 items-start">
        <Link href="/events/">
        <Button
          variant="secondary"
        >
          Læs mere om udstillingen
        </Button>
        </Link>

        <SignedIn>
          <Link href="/secret">
            <Button variant="primary">Rediger event</Button>
          </Link>
          {isCurator === true ? (
            <Link href="/secret">
              <Button variant="primary">Rediger event</Button>
            </Link>
          ) : null}
        </SignedIn>
      </div>
    </div>
  );
};

export default ImageCard;

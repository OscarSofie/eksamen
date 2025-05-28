"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Button from "../Button";
import Burger from "./Burger";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";
  const hideHeader =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  if (hideHeader) return null;

  const navClass = `flex items-center justify-between w-full z-50 px-4 sm:px-8 lg:px-16 py-4 ${
    isHome
      ? "absolute top-0 left-0 right-0 bg-transparent text-white"
      : "relative text-kurator-primary border-b border-text-kurator-primary"
  }`;

  return (
    <nav className={`${navClass} full-bleed`}>

      
      <div className="text-2xl-fluid font-extrabold">
        <Link href="/">SMK<span className="text-red-500">.</span></Link>
      </div>

    {/* 
      <ul className="hidden sm:flex gap-8 items-center text-sm-fluid font-medium">
        <li>
          <Link href="/events" className="hover:text-kurator-secondary">
            Udstillinger
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-kurator-secondary">
            Om SMK
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-kurator-secondary">
            Lokationer
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-kurator-secondary">
            Kontakt
          </Link>
        </li>
      </ul>

     
      <div className="hidden sm:flex items-center gap-4 text-xs-fluid">
        <SignedOut>
          <SignInButton className="border border-kurator-primary px-3 py-1" />
        </SignedOut>
        <SignedIn>
          <Link href="/secret/opret">
            <Button variant="primary">Opret Event</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div> */}

    
      <div>
        <Burger />
      </div>
    </nav>
  );
};

export default Header;
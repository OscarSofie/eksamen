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


    
      <div>
        <Burger />
      </div>
    </nav>
  );
};

export default Header;
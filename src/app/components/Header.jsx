"use client";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const hideHeader = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  if (hideHeader) return null;

  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-transparent">
        <Link href="/">
          <div className="text-4xl font-extrabold">SMK.</div>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/events" className="hover:text-gray-400">
              Udstillinger
            </Link>
          </li>
          <li>
            <Link href="/events " className="hover:text-gray-400">
              Lokationer
            </Link>
          </li> 
          <li>
            <Link href="/about" className="hover:text-gray-400">
              Om SMK
            </Link>
          </li>
        </ul>
        <SignedOut>
          <SignInButton className="border-solid border-2 border-[#000342] px-3 py-1" />
        </SignedOut>
        <SignedIn>
          <div className="flex justify-between gap-4">
            <UserButton />
            <SignOutButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

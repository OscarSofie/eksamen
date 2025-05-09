"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-transparent">
        <Link href="/">
          <div className="text-2xl font-bold">SMK.</div>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
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
          <SignInButton redirectURl="/events" className="border-solid border-2 border-[#000342] px-3 py-1" />
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

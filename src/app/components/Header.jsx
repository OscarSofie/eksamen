"use client";

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
      <div className="flex justify-between items-center p-4 bg-transparent black">
        <div className="text-2xl font-bold">SMK.</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Udstillinger
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-gray-400">
              Lokationer
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              Om SMK
            </a>
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

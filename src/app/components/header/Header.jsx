"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Button from "../Button";

const Header = ({ isCurator }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const hideHeader =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  if (hideHeader) return null;

  return (
    <nav className="bg-transparent border-b border-gray-200">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="text-4xl font-extrabold">SMK.</div>
        </Link>

        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className="hidden sm:flex gap-8 items-center">
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
        </ul>

        {/* Desktop user actions */}
        <div className="hidden sm:flex items-center gap-4">
          <SignedOut>
            <SignInButton className="border border-kurator-primary px-3 py-1" />
          </SignedOut>
          <SignedIn>
            <Link
              href="/secret/opret"
              onClick={(load) => {
                load.preventDefault();
                window.location.href = "/secret/opret";
              }}
            >
              <Button variant="secondary">Opret Event</Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/events" onClick={() => setIsOpen(false)}>
                Udstillinger
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                Om SMK
              </Link>
            </li>
          </ul>

          <SignedOut>
            <SignInButton className="border border-kurator-primary px-3 py-1" />
          </SignedOut>

          <SignedIn>
            <div className="flex flex-col gap-2">
              <Link href="/secret/opret" onClick={() => setIsOpen(false)}>
                <Button variant="secondary">Opret Event</Button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Header;

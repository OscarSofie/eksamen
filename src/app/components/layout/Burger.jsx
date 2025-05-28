"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button from "../Button";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const textColor = isHome ? "text-white" : "text-kurator-primary";
  const bgColor = isHome ? "bg-transparent" : "bg-kurator-bg";
  const borderColor = isHome ? "border-white" : "border-kurator-primary";

  return (
    <div className="relative z-[100]">
      <button
        onClick={() => setIsOpen(true)}
        className={`text-2xl px-4 py-2 transition ${textColor} ${bgColor} ${borderColor}`}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-20"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg p-6 flex flex-col gap-6 z-50">

            {/* Luk-knap */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl text-kurator-primary"
              aria-label="Luk menu"
            >
              ×
            </button>

            <ul className="flex flex-col gap-4 text-kurator-primary text-2xl-fluid mt-10">
              <li className="border-b pb-2">
                <Link href="/events" onClick={() => setIsOpen(false)}>
                  Udstillinger
                </Link>
              </li>
              <li className="border-b pb-2">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Om SMK
                </Link>
              </li>
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              <SignedOut>
                <SignInButton>
                  <Button variant="primary">Log ind</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
                <Button
                  variant="primary"
                  href="/secret/opret"
                  onClick={() => setIsOpen(false)}
                >
                  Opret Event
                </Button>
              </SignedIn>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Burger;

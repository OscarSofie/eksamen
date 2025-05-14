"use client";
import { SignedIn } from "@clerk/nextjs";

export default function Button({ variant = "primary", children, ...props }) {
  let buttonClass = "";

  if (variant === "primary") {
    buttonClass = "bg-[#000342] text-white border-white border-2 px-4 py-2 font-semibold hover:bg-[#111464]";
  } else {
    buttonClass = "bg-white text-[#000342] border-[#000342] border-2 px-4 py-2 font-semibold hover:bg-gray-100";
  }

  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  );
}

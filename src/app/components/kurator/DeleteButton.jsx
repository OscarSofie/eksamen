"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      {...props}
      className="text-sm font-semibold px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sletter..." : children}
    </button>
  );
}

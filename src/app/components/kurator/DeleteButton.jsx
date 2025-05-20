'use client';

import { useFormStatus } from "react-dom";

export default function DeleteButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-red-600 text-white px-4 py-2 mt-4"
      disabled={pending}
      {...props}
    >
      {pending ? "Sletter..." : children}
    </button>
  );
}
"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="opacity-50 cursor-not-allowed btn-kurator hover:btn-kurator text-[var(--text-sm)] px-4 py-2 font-semibold leading-[var(--leading-tight)]"
      {...props}
    >
      {pending ? "Sender..." : children}
    </button>
  );
}

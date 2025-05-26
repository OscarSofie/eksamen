"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus();
  const { startTransition } = useTransition();
  const router = useRouter();

  const handleClick = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      type="submit"
      disabled={pending}
      className="opacity-50 cursor-not-allowed"
      onClick={handleClick}
      {...props}
    >
      {pending ? "Sender..." : children}
    </button>
  );
}

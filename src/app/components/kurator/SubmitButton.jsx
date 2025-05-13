'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ children, className }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {pending ? 'Sender...' : children}
    </button>
  );
}

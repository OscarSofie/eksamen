'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className='opacity-50 cursor-not-allowed' {...props}
    >
      {pending ? 'Sender...' : children}
    </button>
  );
}

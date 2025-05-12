'use client'

import { useUser } from '@clerk/nextjs';

export default function SecretClientPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to access this page.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>This is a client-protected page using Clerk's `useUser` hook.</p>
    </div>
  );
}
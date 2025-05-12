import { auth } from '@clerk/nextjs/server'

export default async function Page({ params }) {
  const { userId, redirectToSignIn } = await auth()

  if (!userId) return redirectToSignIn() // <- Bruges her!

  return <h1>Rediger event {params.id}</h1>
}

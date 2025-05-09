import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Secret() {
/* const {userId} = await auth()
console.log(userId) */

const user = await currentUser()
console.log(user)
  return (
    <h1 className="text-4xl text-white">Welcome, {user.username}!</h1>
  )
}
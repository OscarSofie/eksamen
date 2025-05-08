/* 'use server';

import { revalidatePath } from "next/cache";

export async function createLoggedAction(prevState, formData) {
  const loggedIn = formData.get("loggedIn");

  if (loggedIn === "") {
    return { message: 'Form cannot be empty' };
  }

  const {userId} = auth()
  
if (!userId) {
  return { message: "User not logged in" };
}

addLogged(userId, loggedIn);

  revalidatePath("/events");
  return { message: '' };
} */

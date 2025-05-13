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
}
 */


'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createEvent } from '../api/page';

export async function opretEvent(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const artist = formData.get('artist');
  const date = formData.get('date');

  const data = {
    title,
    description,
    artist,
    date,
  };

  const nytEvent = await createEvent(data);

  revalidatePath('/events', 'page');
  redirect(`/events/${nytEvent.id}`);
}

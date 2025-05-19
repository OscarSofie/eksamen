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

import { redirect } from 'next/navigation';
import { createEvent } from '@/api/page';

export async function opretEvent(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const curator = formData.get('curator');
  const date = formData.get('date');
  const locationId = formData.get('locationId');
  const artworkIds = formData.get('artworkIds');

 /*  const artworkIds = JSON.parse(artworkIdsRaw || '[]'); */

  const data = {
    title,
    description,
    curator,
    date,
    locationId,
    artworkIds,
  };

  console.log('Sender data til createEvent:', data);

  const newEvent = await createEvent(data);

  redirect(`/events/${newEvent.id}`);
}

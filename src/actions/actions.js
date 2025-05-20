'use server';

import { redirect } from 'next/navigation';
import { createEvent } from '@/api/page';
import { deleteEvent } from '@/api/page';
import { updateEvent } from '@/api/page';

export async function opretEvent(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const curator = formData.get('curator');
  const date = formData.get('date');
  const locationId = formData.get('locationId');
  const artworkIdsString = formData.get('artworkIds');
  const artworkIds = JSON.parse(artworkIdsString || '[]');

  const data = {
    title,
    description,
    curator,
    date,
    locationId,
    artworkIds,
  };

  console.log('Sender data til createEvent:', artworkIds);

  const newEvent = await createEvent(data);

  redirect(`/events/${newEvent.id}`);
}

export async function redigerEvent(formData) {
  const id = formData.get('id');
  const title = formData.get('title');
  const description = formData.get('description');
  const curator = formData.get('curator');
  const date = formData.get('date');
  const locationId = formData.get('locationId');
  const artworkIdsString = formData.get('artworkIds');
  const artworkIds = JSON.parse(artworkIdsString || '[]');

 const updatedData = {
    ...(title && { title }),
    ...(description && { description }),
    ...(curator && { curator }),
    ...(date && { date }),
    ...(locationId && { locationId }),
    artworkIds, 
  };

  await updateEvent(id, updatedData);
  redirect(`/events/${id}`);
}

export async function sletEvent (formData) {
  const id = formData.get("eventId");
  await deleteEvent(id); 
  redirect("/events");
}
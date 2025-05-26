"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { bookTickets } from "@/api/page";
import SubmitButton from "./kurator/SubmitButton";

export default function TilmeldingForm({ event }) {
  const [selectedTickets, setSelectedTickets] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [booked, setBooked] = useState(event.bookedTickets);
  const available = event.totalTickets - booked;
  const router = useRouter();

  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSubmit = async (mail) => {
    mail.preventDefault();
    if (!email.includes("@")) {
      setError("Indtast en gyldig emailadresse");
      return;
    }
    const newBookedTickets = booked + selectedTickets;

    router.refresh();

    try {
      await bookTickets(event.id, {
        bookedTickets: newBookedTickets,
      });

      setBooked(newBookedTickets);

      const orderId = generateOrderId();

      router.push(
        `/bestilling?email=${encodeURIComponent(email)}&orderId=${orderId}`
      );
    } catch (err) {
      setError("Der opstod en fejl. Prøv igen senere.");
    }
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">Tilmelding til: {event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Sted:</strong> {event.location?.address}
      </p>
      <p>
        <strong>Dato:</strong> {event.date}
      </p>
      <p>
        <strong>Ledige billetter:</strong> {available}
      </p>

      {available > 0 ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            Antal billetter:
            <input
              type="number"
              min="1"
              max={available}
              value={selectedTickets}
              onChange={(e) => setSelectedTickets(Number(e.target.value))}
              className="ml-2 border px-2 py-1 w-20"
            />
          </label>

          <label className="block">
            Din email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="ml-2 border px-2 py-1"
            />
          </label>

          {error && <p className="text-red-600">{error}</p>}

          <SubmitButton className="border p-3 hover:bg-blue-100">
            Bekræft tilmelding
          </SubmitButton>
        </form>
      ) : (
        <p className="text-red-600 font-bold">
          Der er desværre ingen billetter tilbage.
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TilmeldingForm({ event, availableTickets }) {
  const [selectedTickets, setSelectedTickets] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Indtast en gyldig emailadresse");
      return;
    }

    const orderId = generateOrderId();

    router.push(
      `/bestilling?email=${encodeURIComponent(email)}&orderId=${orderId}`
    );
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
        <strong>Ledige billetter:</strong> {availableTickets}
      </p>

      {availableTickets > 0 ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            Antal billetter:
            <input
              type="number"
              min="1"
              max={availableTickets}
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

          <button type="submit" className=" border px-4 py-2 ">
            Bekræft Tilmelding ({selectedTickets} billet
            {selectedTickets > 1 ? "ter" : ""})
          </button>
        </form>
      ) : (
        <p className="text-red-600 font-bold">
          Der er desværre ingen billetter tilbage.
        </p>
      )}
    </div>
  );
}

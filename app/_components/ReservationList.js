"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";
export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings, 
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    if (confirm("Are you sure you want to delete this reservation?")) {
      optimisticDelete(bookingId);
      await deleteReservation(bookingId);
    }
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

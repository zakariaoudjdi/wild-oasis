"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={
        () => {
          startTransition(() => {
            onDelete(bookingId);
          });
        }
      }
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold text-zinc-300 uppercase transition-colors hover:bg-yellow-600 hover:text-zinc-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-zinc-800" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mt-1">Deleting...</span>
      )}
    </button>
  );
}

export default DeleteReservation;
